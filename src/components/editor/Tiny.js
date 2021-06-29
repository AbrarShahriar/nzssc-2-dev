import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { CircularProgress } from "@material-ui/core";

import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'

import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/table'
import 'tinymce/plugins/template'
import 'tinymce/plugins/help'
import { useStateValue } from '../../StateProvider';

const allPlugins = [
  'advlist autolink lists link image charmap print preview anchor',
  'searchreplace visualblocks code fullscreen',
  'insertdatetime media table paste code help wordcount'
]

const pluginsUsed = [
  'lists link image',
  '',
  'media help'
]

export default function Tiny() {

  const [{ editorState }, dispatch] = useStateValue()

  const editorRef = useRef(null);

  const handleSave = () => {
    if (editorRef.current) {
      dispatch({
        type: 'SET_EDITOR_STATE',
        editorState: editorRef.current.getContent()
      })
    }
  };

  const handleReady = (evt, editor) => {
    editorRef.current = editor
  }

  return (
    <>
      <Editor
        // apiKey="myfnrt2tanaib58d4bteam4av4hu084vxinmrlekti85rp4k"
        onInit={handleReady}
        initialValue={editorState}
        init={{
          height: 500,
          menubar: false,
          plugins: pluginsUsed,
          toolbar: 'undo redo | formatselect | link | ' +
          'bold italic backcolor | image media |  alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />

      <div className="postContent__actions">
          <button onClick={handleSave} className='save-as-draft action-btn'>Save as draft</button>
          <button className='publish action-btn'>Publish</button>
      </div>
    </>
  );
}

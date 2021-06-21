import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { CircularProgress } from "@material-ui/core";

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
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(true)
  const [html, setHtml] = useState('')

  const preview = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setHtml(editorRef.current.getContent())
    }
  };

  const handleReady = (evt, editor) => {
    console.log('editor ready');
    setLoading(false)
    editorRef.current = editor
  }

  return (
    <>

    {loading && <CircularProgress />}
      <Editor
        apiKey="myfnrt2tanaib58d4bteam4av4hu084vxinmrlekti85rp4k"
        onInit={handleReady}
        initialValue="<p>This is the initial content of the editor.</p>"
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
      {!loading && <button onClick={preview}>Preview</button>}
      {!loading && <div dangerouslySetInnerHTML={{__html: html}}></div>}
    </>
  );
}

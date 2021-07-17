import Result from '../components/Result';
import React, { useEffect, useState } from 'react'
import './Topic.css'
import { FilterListOutlined, SearchOutlined } from '@material-ui/icons';
import { Divider, IconButton, Radio } from '@material-ui/core';
import { Modal } from '@material-ui/core'  
import { db } from '../firebase'
import moment from 'moment'
import Loader from '../components/Loader';

const formatTopic = topic => {
    return topic.includes('&') 
        ? topic.split('&').join(' & ') 
        : (topic === 'bookreview') 
            ? 'book review'
            : topic
        ;
}

function Topic({ topic }) {
    
    const [posts, setPosts] = useState([])
    const [filterModal, setFilterModal] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('title')
    const [loading, setLoading] = useState(true)

    const handleFilterModalClose = () => {
        setFilterModal(false)
    }
    const handleSelectedFilterChange = e => {
        setSelectedFilter(e.target.value)
        setFilterModal(false)
    }
    
    useEffect(() => {
        db.collection(topic)
        .where('published', '==', false)
        .limit(10)
        .get()
        .then(docs => {
            let Arr = []
            docs.forEach(doc => Arr.push({
                id: doc.id,
                ...doc.data()
            }))
            setPosts(Arr)
            setLoading(false)
        })

    }, [topic])

    const loadMore = () => {
        
    }
    
    return (
        <div className='topic'>
            <div className="topic__content">
                
                <div className="topic__header">
                    <h2>{formatTopic(topic)}</h2>
                    <div className="search__filter">
                        <form className="topic__search">
                            <SearchOutlined />
                            <input type="text" name="search" />
                        </form>
                        <IconButton onClick={() => setFilterModal(true)} >  
                            <FilterListOutlined />
                        </IconButton>
                        <Modal
                            open={filterModal}
                            onClose={handleFilterModalClose} 
                        >
                            <div className="filter__modal">
                                <div className="filter__content">
                                    <h2>Search By: </h2>
                                    <div className="radios">
                                        <div className="radio">
                                            <Radio
                                                checked={selectedFilter === 'title'}
                                                onChange={handleSelectedFilterChange}
                                                value='title'
                                            />
                                            <span>Title</span>
                                        </div>
                                        <div className="radio">
                                            <Radio
                                                checked={selectedFilter === 'id'}
                                                onChange={handleSelectedFilterChange}
                                                value='id'
                                            />
                                            <span>ID</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>

                <Divider className='divider' />

                {loading 
                ?
                    <div className="loading__post">
                        <Loader />
                    </div>
                :
                <>
                    <div className="topic__body">
                        <div className="results">
                            {posts.map((post, i) => 
                                <Result
                                    title={post.title}
                                    ss={post.cover} 
                                    likes={post.likes}
                                    topic={post.topic}
                                    authorImg={post.authorImg}
                                    authorName={post.authorName ? post.authorName : 'admin'}
                                    timestamp={post.timestamp ? moment(post.timestamp?.seconds*1000).fromNow() : 'just now'} 
                                    id={post.id}
                                    key={post.id}
                                />
                            )}
                        </div>
                    </div>

                    <button className='load__more' onClick={e => loadMore()}>Load More</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Topic

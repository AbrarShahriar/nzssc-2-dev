import Result from '../components/Result';
import React, { useEffect, useState } from 'react'
import './Topic.css'
import { FilterListOutlined, SearchOutlined } from '@material-ui/icons';
import ss from '../images/ss.jpg'
import { Checkbox, Divider, IconButton, Radio } from '@material-ui/core';
import { Modal } from '@material-ui/core'  

const dummy = [
    {
        title: 'Shamim e ki bollo!! 1',
        ss: ss,
        topic: 'articles',
        authorImg: ss,
        authorName: 'Shahriar',
        timestamp: '1 hour ago' ,
        desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
        id: 1
    },
    {
        title: 'Shamim e ki bollo!! 2',
        ss: ss,
        topic: 'articles',
        authorImg: ss,
        authorName: 'Shahriar',
        timestamp: '1 hour ago' ,
        desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
        id: 2
    },
    {
        title: 'Shamim e ki bollo!! 3',
        ss: ss,
        topic: 'articles',
        authorImg: ss,
        authorName: 'Shahriar',
        timestamp: '1 hour ago' ,
        desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
        id: 3 
    },
    {
        title: 'Shamim e ki bollo!! 4',
        ss: ss,
        topic: 'articles',
        authorImg: ss,
        authorName: 'Shahriar',
        timestamp: '1 hour ago' ,
        desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
        id: 4
    },
    {
        title: 'Shamim e ki bollo!! 5',
        ss: ss,
        topic: 'articles',
        authorImg: ss,
        authorName: 'Shahriar',
        timestamp: '1 hour ago' ,
        desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
        id: 5 
    },
    {
        title: 'Shamim e ki bollo!! 6',
        ss: ss,
        topic: 'articles',
        authorImg: ss,
        authorName: 'Shahriar',
        timestamp: '1 hour ago' ,
        desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
        id: 6
    }
]

const formatTopic = topic => {
    return topic.includes('&') 
        ? topic.split('&').join(' & ') 
        : (topic === 'bookreview') 
            ? 'book review'
            : topic
        ;
}

function Topic({ topic }) {
    
    const [posts, setPosts] = useState(dummy)
    const [filterModal, setFilterModal] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('title')

    const handleFilterModalClose = () => {
        setFilterModal(false)
    }
    const handleSelectedFilterChange = e => {
        setSelectedFilter(e.target.value)
        setFilterModal(false)
    }
    
    useEffect(() => {
        setPosts(dummy)
    }, [topic])

    const loadMore = () => {
        const more = [
            {
                title: 'Shamim e ki bollo!! 7',
                ss: ss,
                authorImg: ss,
                authorName: 'Shahriar',
                timestamp: '1 hour ago' ,
                desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
                topic: 'articles',
                id: 7
            },
            {
                title: 'Shamim e ki bollo!! 8',
                ss: ss,
                topic: 'articles',
                authorImg: ss,
                authorName: 'Shahriar',
                timestamp: '1 hour ago' ,
                desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
                id: 8
            },
            {
                title: 'Shamim e ki bollo!! 9',
                ss: ss,
                topic: 'articles',
                authorImg: ss,
                authorName: 'Shahriar',
                timestamp: '1 hour ago' ,
                desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
                id: 9
            },
            {
                title: 'Shamim e ki bollo!! 10',
                ss: ss,
                topic: 'articles',
                authorImg: ss,
                authorName: 'Shahriar',
                timestamp: '1 hour ago' ,
                desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
                id: 10
            },
            {
                title: 'Shamim e ki bollo!! 11',
                ss: ss,
                authorImg: ss,
                topic: 'articles',
                authorName: 'Shahriar',
                timestamp: '1 hour ago' ,
                desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
                id: 11 
            },
            {
                title: 'Shamim e ki bollo!! 12',
                ss: ss,
                authorImg: ss,
                topic: 'articles',
                authorName: 'Shahriar',
                timestamp: '1 hour ago' ,
                desc: 'Lorem ipsum dolor,sit amet consecteturadipisicing elit.Consequatur modi ullamerror hic veniam liberoaccusamus...',
                id: 12
            }
        ]
        
        setPosts(prevPosts => [...prevPosts, ...more])
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

                <div className="topic__body">
                    <div className="results">
                        {posts.map((post, i) => 
                            <Result
                                title={post.title}
                                ss={post.ss} 
                                topic={post.topic}
                                authorImg={post.authorImg}
                                authorName={post.authorName}
                                timestamp={post.timestamp} 
                                desc={post.desc} 
                                id={post.id}
                            />
                        )}
                        

                    </div>
                </div>

                <button className='load__more' onClick={e => loadMore()}>Load More</button>
            </div>
        </div>
    )
}

export default Topic

import React from 'react'
import DashboardMember from '../components/DashboardMember'
import './Dashboard.css'
import ss from '../images/ss.jpg'
import DashboardPost from '../components/DashboardPost'
import { useStateValue } from '../StateProvider'

const members = [
    {
        name: 'Mehedi Hasan Shamim 1',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 2',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 3',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 4',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 5',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 6',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 7',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 8',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 9',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 10',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 11',
        title: 'Secretery'
    },
    {
        name: 'Mehedi Hasan Shamim 12',
        title: 'Secretery'
    },
]

const articles = [
    {
        tag: 'physics',
        title: 'Kheladhula sikhun Shamim theke 10tiupaye 0',
        authorName: 'AbrarShahriar',
        img: ss,
        likes: 0,
        topic: 'articles',
        timestamp: '1 hour ago'
    },
    {
        tag: 'physics',
        title: 'Kheladhula sikhun Shamim theke 10tiupaye 1',
        authorName: 'AbrarShahriar',
        img: ss,
        likes: 0,
        topic: 'articles',
        timestamp: '1 hour ago'
    },
    {
        tag: 'physics',
        title: 'Kheladhula sikhun Shamim theke 10tiupaye 2',
        authorName: 'AbrarShahriar',
        img: ss,
        topic: 'articles',
        likes: 0,
        timestamp: '1 hour ago'
    },
    {
        tag: 'physics',
        title: 'Kheladhula sikhun Shamim theke 10tiupaye 3',
        authorName: 'AbrarShahriar',
        img: ss,
        topic: 'articles',
        likes: 0,
        timestamp: '1 hour ago'
    },
    {
        tag: 'physics',
        title: 'Kheladhula sikhun Shamim theke 10tiupaye 4',
        authorName: 'AbrarShahriar',
        topic: 'articles',
        img: ss,
        likes: 0,
        timestamp: '1 hour ago'
    },
    {
        tag: 'physics',
        title: 'Kheladhula sikhun Shamim theke 10tiupaye 5',
        authorName: 'AbrarShahriar',
        img: ss,
        topic: 'articles',
        likes: 0,
        timestamp: '1 hour ago'
    },
]

const getNextTwo = n => {
    return [members[n-1], members[n]]
}

function Dashboard() {

    const [{ user }] = useStateValue()

    if(user.email !== 'admin@gmail.com') return <p>You dont have access to this page. Only admin can visit this page</p>

    return (
        <div className='dashboard'>
            <div className="dashboard__content">

                <h1 className='h1__members'>Members</h1>
                <div className="dashboard__members">

                    {members.map((member, i) => (
                        <DashboardMember key={i} img={ss} name={member.name} title={member.title} />
                    ))}

                </div>

                <h1 className='h1__members'>Pending Posts ({articles.length})</h1>
                <div className="dashboard__posts">
                    
                    {articles.map((article, i) => (
                        <DashboardPost 
                            img={article.img}
                            authorName={article.authorName}
                            title={article.title}
                            id={i}
                            key={i}
                            topic={article.topic}
                        />
                    ))}
                 </div>                        

            </div>
        </div>   
    ) 
}

export default Dashboard

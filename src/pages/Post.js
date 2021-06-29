import React from 'react'
import './Post.css'
import { useParams } from 'react-router-dom'
import ss from '../images/ss.jpg'
import Avatar from '../components/Avatar'
import { FavoriteBorderOutlined } from '@material-ui/icons'

const content = `
<h2>Hello</h2>
<p style='color: red;'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam facilis impedit doloremque modi tempore exercitationem ab reprehenderit officia qui unde dolores, sed facere amet dicta, tenetur ex quos provident delectus eius nostrum iste ipsam? Earum iure at natus amet, dolor, vitae incidunt animi quo nihil facilis error cum consequatur fugiat illum. Saepe, quam ipsam facilis libero exercitationem quidem adipisci reprehenderit vero praesentium, animi autem aspernatur. Quis blanditiis architecto cupiditate. Animi architecto quas expedita nulla aspernatur dicta illum dolore et quasi autem porro, at doloremque. Vitae doloremque iure optio cumque perspiciatis alias autem consectetur aperiam accusamus explicabo sint fugit, laudantium eos ea. Deserunt animi odit voluptatibus asperiores maxime dolores, a nisi inventore sequi pariatur? Distinctio id quidem eum ut libero excepturi atque sint porro similique officia sapiente exercitationem cum, dolores alias enim vitae doloribus doloremque veritatis magni temporibus iste pariatur molestias! Nobis veniam ratione laborum distinctio aperiam facilis obcaecati adipisci delectus maiores tempora minima totam fugiat vel illo quod illum possimus facere debitis deleniti sequi assumenda, dolore placeat earum quas. Cupiditate dolore autem accusamus deserunt quibusdam doloremque iste, quos expedita soluta natus nemo unde quidem inventore officiis consequuntur beatae nihil ducimus. In nesciunt, temporibus illo laudantium numquam quo cupiditate. Saepe neque ducimus consequuntur facere, molestias, delectus alias quidem cupiditate labore atque quo corporis, animi totam sunt sint! Adipisci recusandae culpa quaerat! Tempore doloremque perspiciatis facere beatae quas nulla aliquam? Aliquam, magnam inventore asperiores enim illo dignissimos amet repellat blanditiis delectus commodi quae ratione earum aliquid accusantium aut quis harum exercitationem sit nemo, doloremque est odio vero qui! Laborum unde eveniet at quidem. Vel repellendus velit ex accusantium facere dignissimos consectetur natus itaque. Nesciunt maxime facilis, quas vel quidem odit, delectus deleniti, reiciendis beatae ducimus corrupti officiis optio nisi fugiat iste saepe rem ex! Exercitationem assumenda nemo pariatur quasi, accusamus id veritatis commodi ab necessitatibus, et dolores quas impedit expedita eveniet quos consequuntur corporis dolore. Fuga ea ducimus sapiente voluptas quos! Sapiente maxime, est veritatis sequi tenetur vitae perferendis nihil ab dolor odit suscipit provident eaque molestiae eligendi dolores, delectus tempore doloremque possimus vero neque voluptates, laudantium labore cum quam. Expedita, repudiandae. Sequi, quisquam assumenda illum fuga beatae iste non corporis expedita architecto illo, fugiat similique officia quod vitae, quam facere deserunt odit velit laborum inventore laudantium error aliquam ratione. Laudantium obcaecati eligendi est laborum a ab explicabo non eum iusto exercitationem? Minus quis esse veniam sit non corrupti id delectus cum nisi accusamus possimus iure explicabo fuga blanditiis, molestias commodi est suscipit quibusdam iusto consectetur! Suscipit hic rem, quae accusamus autem eveniet omnis voluptas possimus, nemo quia ab doloribus soluta nihil. Autem provident vero ipsa dolorum quasi fuga sapiente expedita possimus eos repellat dolores adipisci optio sint, cum quisquam reiciendis nobis ipsam! Aperiam ipsum repudiandae et aspernatur blanditiis exercitationem, voluptatem rem nulla dolorum fugit? Ut cum eaque itaque qui voluptates iusto aspernatur unde similique alias pariatur temporibus error quaerat, debitis eligendi ullam nisi omnis explicabo? Perferendis vel tempore, nam dolorum enim exercitationem nobis consequatur, fugit autem cupiditate quidem ipsam rem!</p>
`


 
function Post({ topic }) {
    const { pid } = useParams()

    const post = {
        img: ss,
        title: 'Shamim e ki bollo!!',
        authorName: 'AbrarShahriar',
        authorImg: ss,
        postBody: content,
        topic: topic,
        id: pid,
        tag: 'physics',
        timestamp: '2 hours ago'
    }
    
    return (
        <div className='post'>
            <div className="post__content">

                <div className="post__header">
                    <img src={post.img} alt=""/>
                    <h1>{post.title}</h1>
                    <div className="post__author__info">
                        <Avatar 
                            size='large'
                            authorImg={post.authorImg}
                            authorName={post.authorName}
                        />
                        <span>{post.authorName}</span>
                    </div>
                    <span>{post.timestamp}</span>
                </div>

                <div className="post__body">
                    <div dangerouslySetInnerHTML={{__html: post.postBody}}></div>
                </div>

                <div className="post__footer">
                    <p>Enjoyed what you read??</p>
                    <FavoriteBorderOutlined />
                </div>

            </div>
        </div>
    )
}

export default Post

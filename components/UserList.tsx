import React, { useEffect } from 'react'
import Link from 'next/link'
import { useActions } from '../hooks/useActions'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {Card,Button} from 'react-bootstrap'
import styled from 'styled-components'
import Loader from './Loader'
import Message from './Message'

const Posts =  styled.div`
    display:flex;
    width: 50%;
    justify-content: center;
    flex-wrap: wrap;
`

const Heading =  styled.h1`
    width: 50%;
    color: #fff;
    background: #007bff;
    text-align:center;
    border-top: 3px solid rgba(0,0,0,.125)
`

const UserList: React.FC = () => {
    const {posts, error, loading} = useTypedSelector(state=> state.user)
    const {fetchUsers} = useActions()

    useEffect(()=>{
        fetchUsers()
    }, [])

    if(loading){
        return <Loader/>
    }

    if(error){
        return <Message children={error}/>
    }

    const posted = posts.map( post => {
       return <Card key={post.id} style={{ width: '18rem', margin:'10px' }}>
       <Card.Body>
         <Card.Title>{post.title}</Card.Title>
         <Card.Text>
           {post.body}
         </Card.Text>
            <Link href={`/posts/${post.id}`}>
                <Button variant="primary">Read post</Button>
            </Link>
       </Card.Body>
     </Card>
    })

    return (
        <>
        <Heading>Latest Posts</Heading>
        <Posts>
            {posted}
        </Posts>
        </>
    )
}

export default UserList

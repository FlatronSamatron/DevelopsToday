import {useState} from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import uniqid from 'uniqid'
import axios from 'axios'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const Heading =  styled.h1`
    width: 50%;
    color: #fff;
    background: #007bff;
    text-align:center;
    border-top: 3px solid rgba(0,0,0,.125)
`
const Centered =  styled.div`
    display:flex;
    flex-direction: column;
    justify-contend: center;
    align-items: center;
`



const New: React.FC = () => {

    const [post, setPost] = useState({});
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [postRespons, setPostRespons] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()
        setLoader(true)
        let data = JSON.stringify({...post, id: uniqid()})
        axios.post('https://simple-blog-api.crew.red/posts', data, {
            headers: {
                'Content-Type': 'application/json',
            }})
          .then(function () {
            setLoader(false)
            setPostRespons(true)
            setTimeout(()=>setPostRespons(false),3000)
          })
          .catch(function (e) {
            setLoader(false)
            setError('there was an error sending the post')
          });
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Centered>
                            <Header/>
                            <Heading>
                                Add New Post
                            </Heading>
                            {loader ? <Loader/> : error ? <Message children={error}/> : postRespons ? <h2>Your post has been sent</h2> :
                            <Form onSubmit={(e)=>{submitHandler(e)}} style={{border:'2px rgba(0,0,0,.125) solid', width: '50%', padding: '15px'}}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Post Title</Form.Label>
                                    <Form.Control
                                    onChange={(el)=>setPost( post => {return {...post, title:el.target.value}})} 
                                    size="lg" type="text" placeholder="title" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Post Content</Form.Label>
                                    <Form.Control
                                    onChange={(el)=>setPost( post => {return {...post, body:el.target.value}})} 
                                    size="lg" type="text" placeholder="content" required />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>}
                    </Centered>
                </Col>
            </Row>
        </Container>
    )
}

export default New

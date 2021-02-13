import Link from 'next/link'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import styled from 'styled-components'
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import {useTypedSelector} from '../../hooks/useTypedSelector'
import Loader from '../../components/Loader'
import Message from '../../components/Message'


const Centered =  styled.div`
    display:flex;
    flex-direction: column;
    justify-contend: center;
    align-items: center;
`

const BorderP =  styled.p`
    margin: 30px 0 50px 0;
    border: 1px rgba(0,0,0,.125) solid;
    border-radius: 10px;
    padding: 30px
`

export default function New() {
    const {query} = useRouter()
    const {posts, error, loading} = useTypedSelector(state=> state.user)

    const post = posts.filter( post => post.id == query.id)

    return (
        <Container fluid>
                <Row>
                    <Col>
                        <Centered>
                            <Header/>
                            {loading ? <Loader/> : error ? <Message children={error}/> : 
                            <Jumbotron style={{width:'50%'}}>
                            <h1>{post[0].title}</h1>
                            <BorderP>
                                {post[0].body}
                            </BorderP>
                            <Link href="/">
                                <Button variant="primary">Back</Button>
                            </Link>
                            </Jumbotron>}
                        </Centered>
                    </Col>
                </Row>
            </Container>
    )
}


import UserList from '../components/UserList'
import Header from '../components/Header'
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components'

const Centered =  styled.div`
    display:flex;
    flex-direction: column;
    justify-contend: center;
    align-items: center;
`

const Index: React.FC = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Centered>
                            <Header/>
                            <UserList/>
                        </Centered>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index

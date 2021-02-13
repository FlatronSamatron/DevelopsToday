import {Navbar,Nav} from 'react-bootstrap';
import Link from "next/link"
import styled from 'styled-components'

const NavContainer =  styled.div`
    width:50%;
`

    const MainVonteiner: React.FC = () => {
    return (
        <NavContainer>
            <Navbar bg="primary" variant="dark">
            <Nav variant="pills" style={{width:"100%"}} className="d-flex justify-content-around">
                <Link href="/" passHref>
                    <Nav.Link className="text-light">Latest Posts</Nav.Link>
                </Link>
                <Link href="/posts/new" passHref>
                    <Nav.Link className="text-light">Create Post</Nav.Link>
                </Link>
            </Nav>
            </Navbar>
        </NavContainer>
    )
}

export default MainVonteiner

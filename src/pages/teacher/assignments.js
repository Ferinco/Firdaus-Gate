import {styled} from "styled-components" 
import { useAuth } from "../../hooks/useAuth";
export default function Assign(){
    const {user} = useAuth()
    
    return (
        <Container className="container py-5">
            <p>currently on build, check back later.</p>
            </Container>
    )
}
const Container = styled.div`
p{
    color: red;
}
`
import {styled} from "styled-components" 
import { useAuth } from "../../hooks/useAuth";
export default function Assign(){
    const {user} = useAuth()
    console.log(user.subjectTaught.length)
    return (
        <Container className="container py-5">
            hey
            </Container>
    )
}
const Container = styled.div`
`
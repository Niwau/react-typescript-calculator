import { Container } from "./ButtonStyle"

type ButtonProps = {
    children : string,
    operation? : string,
}

const handleClick = () => {
    
}

export const Button = ( { children, operation } : ButtonProps ) => {
    return (
        <Container onClick={handleClick}> 
            { children } 
        </Container>
    )
}
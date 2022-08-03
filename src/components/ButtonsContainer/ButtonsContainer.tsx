import { Container } from "./ButtonsContainerStyle"

type ButtonsContainerProps = {
    children : React.ReactNode
}

export const ButtonsContainer = ( { children } : ButtonsContainerProps ) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
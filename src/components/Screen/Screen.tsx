import { useContext } from "react"
import { screenValueContext } from "../contexts/screenValueContext"
import { Container } from "./ScreenStyle"


export const Screen = () => {

    const [screenValue] = useContext(screenValueContext)

    return (
        <Container>
            {screenValue}
        </Container>
    )
}
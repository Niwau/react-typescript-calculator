import { screenValueContext } from "../contexts/screenValueContext"
import { useContext } from "react"
import { Container } from "./ButtonStyle"

type ButtonProps = {
    children : string,
    operation : string
}

export const Button = ( { children, operation } : ButtonProps ) => {

    const [screenValue, setScreenValue] = useContext(screenValueContext)

    const handleClick = (operation : string) => {

        if(operation == '='){
            setScreenValue(prevState => eval(prevState))
        
        } 
        else if(operation == 'reset'){
            setScreenValue('')

        } else if(operation == 'delete'){
            setScreenValue(prevState =>(prevState.slice(0, prevState.length - 1)))

        }
        else {
            setScreenValue(prevState => prevState + operation)
        }

    }

    return (
        <Container onClick={ () => handleClick(operation) }> 
            { children } 
        </Container>
    )
}
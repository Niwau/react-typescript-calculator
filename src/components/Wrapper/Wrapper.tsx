import { useReducer } from "react"
import { screenValueContext } from "../contexts/screenValueContext"

type WrapperProps = {
    children : React.ReactNode
}

export type State = {
    screenValue: string
}

export type Actions = {
    type: string
}

export const Wrapper = ({children}: WrapperProps) => {

    const reducer = (state : State, action : Actions) => {
        switch(action.type){
            case '+' : 
                return { screenValue: state.screenValue + '+' }
        }
        return state
    }

    const [screenValue, setScreenValue] = useReducer(reducer, {screenValue: '0'})

    return (
        <div style={WrapperStyle}>
            <screenValueContext.Provider value={[screenValue, setScreenValue]}>
                {children}
            </screenValueContext.Provider>
        </div>
    )
}

const WrapperStyle : React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '0.5fr 2fr',
    width: '35rem',
    margin: '50px auto'
  }
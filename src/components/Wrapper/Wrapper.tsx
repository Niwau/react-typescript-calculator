import { useState } from "react"
import { screenValueContext } from "../contexts/screenValueContext"
type WrapperProps = {
    children : React.ReactNode
}

export const Wrapper = ({children}: WrapperProps) => {
    
    const [screenValue, setScreenValue] = useState('')

    return (
        <div style={WrapperStyle}>
            <screenValueContext.Provider value={ [screenValue, setScreenValue] }>
                {children}
            </screenValueContext.Provider>
        </div>
    )
}

const WrapperStyle : React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '0.5fr 2fr',
    width: '35rem',
    margin: '100px auto'
}
import { createContext, useReducer, useState } from "react";
import { Button } from "./components/Button/Button";
import { ButtonsContainer } from "./components/ButtonsContainer/ButtonsContainer";
import { Screen } from "./components/Screen/Screen";
import "./styles/styles.css"

export default function App() {
  
  return (
    <div className="App">
      <div style={WrapperStyle}>
          <Screen/>
          <ButtonsContainer>
            <Button>C</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>/</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>x</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button>del</Button>
            <Button>=</Button>
          </ButtonsContainer>
      </div>
    </div>
  )
}

const WrapperStyle : React.CSSProperties = {
  display: 'grid',
  gridTemplateRows: '0.5fr 2fr',
  width: '35rem',
  margin: '50px auto'
}
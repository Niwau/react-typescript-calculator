import { Button } from "./components/Button/Button";
import { ButtonsContainer } from "./components/ButtonsContainer/ButtonsContainer";
import { Screen } from "./components/Screen/Screen";
import { Wrapper } from "./components/Wrapper/Wrapper";
import "./styles/styles.css"


export default function App() {
  
  return (
    <div className="App">
      <Wrapper>
          <Screen/>
          <ButtonsContainer>
            <Button operation="reset">C</Button>
            <Button operation="+">+/-</Button>
            <Button operation="%">%</Button>
            <Button operation="/">/</Button>
            <Button operation={"7"}>7</Button>
            <Button operation="8">8</Button>
            <Button operation="9">9</Button>
            <Button operation="*">x</Button>
            <Button operation="4">4</Button>
            <Button operation="5">5</Button>
            <Button operation="6">6</Button>
            <Button operation="-">-</Button>
            <Button operation="1">1</Button>
            <Button operation="2">2</Button>
            <Button operation="3">3</Button>
            <Button operation="+">+</Button>
            <Button operation="0">0</Button>
            <Button operation=".">.</Button>
            <Button operation="delete">del</Button>
            <Button operation="=">=</Button>
          </ButtonsContainer>
      </Wrapper>
    </div>
  )
}
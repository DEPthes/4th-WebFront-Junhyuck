import Header from './components/Header.jsx'
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx'
import Reset from './components/reset.jsx'
import Summary from './components/Summary.jsx'
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier] : +newValue,
            }
        });
    }

    function resetHandler() {
      setUserInput({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10
      })
    }

    const currentYear = new Date().getFullYear();
    const finishYear = currentYear + userInput.duration;

  return (
    <>
    <Header />
    <UserInput userInput = {userInput} onChange = {handleChange} />
    <Summary input = {userInput}/>
    <p className="center">투자 완료 예상 연도: <strong>{finishYear}년</strong></p>
    {!inputIsValid && <p className = "center">Please enter a duration greater than zero</p>}
    {inputIsValid &&<Results input = {userInput}/>}
    <Reset onReset = {resetHandler}/>
    </>
  )
}

export default App

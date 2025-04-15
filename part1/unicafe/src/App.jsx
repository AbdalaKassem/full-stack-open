import { useState } from 'react'

const StatisticLine = (props) => {
  const {text, value} = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good,neutral,bad} = props
  const total = good + neutral + bad
  const avg = (good - bad) / total
  const positive = (good / total) * 100 + ' %'
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <>
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={avg}/>
        <StatisticLine text="positive" value={positive}/>
      </tbody>
    </table>
    </>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <>
    <h1>give feedback</h1>
    <Button text="good" onClick={() => setGood(good + 1)}/>
    <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
    <Button text="bad" onClick={() => setBad(bad + 1)}/>
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App

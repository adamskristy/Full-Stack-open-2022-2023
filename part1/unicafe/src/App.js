import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.onClick}>
    {props.text}
  </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
      </tbody>
    
  )
}

const Statistics = (props) => {
  if ( props.all === 0 ){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>    
        <StatisticsLine text='Good' value={props.good} />
        <StatisticsLine text='Neutral' value={props.neutral} />
        <StatisticsLine text='Bad' value={props.bad} />
    
        <StatisticsLine text='All' value={props.all} />
        <StatisticsLine text='Average' value={props.average }  />
        <StatisticsLine text='Positive' value={props.positive + '%'} />
      </table>
    </div>
  )  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good - bad) / all)
  const positive = ((good / all) * 100)

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />

      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
      
      
    </div>
  )
}

export default App
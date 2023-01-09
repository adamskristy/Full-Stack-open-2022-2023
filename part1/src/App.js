const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (header) => {
    return  (
      <h1>{header.course}</h1>
    )
  }

  const Content = (content) => {
    return (
      <div>
        <p>
          {content.part1} { content.exercises1}
        </p>
        <p>
          {content.part2} { content.exercises2}
        </p>
        <p>
          {content.part3} {content.exercises3}
        </p>
      </div>
    )
  }

  const Total = (l) => {
    const total = exercises1 + exercises2 + exercises3
    return (
      <p>Number of exercises {total} </p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total />
    </div>
  )
}

export default App
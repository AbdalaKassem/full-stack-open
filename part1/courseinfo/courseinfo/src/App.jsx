const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  // console.log(props.exercises)
  return (
    <>
    <p>
        {props.exercises[0].name} {props.exercises[0].exercises}
      </p>
      <p>
        {props.exercises[1].name} {props.exercises[1].exercises}
      </p>
      <p>
        {props.exercises[2].name} {props.exercises[2].exercises}
      </p>
    </>    
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.sum}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [
    {name: part1, exercises: exercises1},
    {name: part2, exercises: exercises2},
    {name: part3, exercises: exercises3}
  ]
    
  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises}/>
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
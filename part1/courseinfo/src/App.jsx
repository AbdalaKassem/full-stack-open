const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  // console.log(props.exercises)
  return (
    <>
      <Part name={props.exercises[0].name} exercises={props.exercises[0].exercises}/>
      <Part name={props.exercises[1].name} exercises={props.exercises[1].exercises}/>
      <Part name={props.exercises[2].name} exercises={props.exercises[2].exercises}/>
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
const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => (
  <div>
    {
    parts.map(part => <Part key={part.id} part={part} />)
    }
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum += part.exercises,0)
  return <b>total of {total} exercises</b>
}

const Course = (props) => {

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}
 
export default Course
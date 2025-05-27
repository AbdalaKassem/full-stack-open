const Persons = (props) => {
  const persons = props.persons
  .filter((person) => props.searchName === '' || person.name.toLowerCase().includes(props.searchName.toLowerCase()))  
  .map(person => {
   return(
    <div key={person.name}>
      <div>{person.name} {person.number}</div> 
      <button onClick={() => props.deletePersonHandler(person.id)}>delete</button>
    </div>
   ) 
   
  })

  return persons
}

export default Persons
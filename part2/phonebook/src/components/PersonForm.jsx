const PersonForm = (props) => {
  return (
    <form onSubmit={props.addNewNumber}>
        <div>
          name: <input value={props.newName} onChange={props.newNameHandler}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.newNumberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm
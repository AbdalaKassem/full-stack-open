import { useState, useEffect } from 'react'
import personService from './services/person.js'
import Filter from './components/filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import Notification from './components/Notification'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [typeOfNotificationMessage, setTypeOfNotificationMessage] = useState(null)
  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons))
  },[])

  const addNewNumber = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    const oldPerson = persons.find(person => person.name === newName)
    if (oldPerson) {
      const changeNumber = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)
      if(changeNumber)
        personService
          .update(oldPerson.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
            setNotificationMessage(`modified ${updatedPerson.name} number`)
            setTimeout(() => {
              setNotificationMessage(null)
            },5000)         
          })
          .catch(() => {
            setNotificationMessage(`Information of ${oldPerson.name} has already been removed from server`)
            setTypeOfNotificationMessage('err')
            setTimeout(() => {
              setNotificationMessage(null)
            },5000)
          })
    }
  else {
    personService
      .create(newPerson)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson))
        setNotificationMessage(`added ${createdPerson.name}`)
        setTimeout(() => {
              setNotificationMessage(null)
            },5000)
      })
  }
  setNewName('')
  setNewNumber('')
  }

  const deletePersonHandler = (id) => {
    const person = persons.find(person => person.id === id)
    const deletePerson = window.confirm(`Delete ${person.name} ?`)
    if (deletePerson)
      personService
      .deletePerson(id)
      .then( (deletedPerson) => {
        setPersons(persons.filter(person => person.id !== id))
        setNotificationMessage(`deleted ${deletedPerson.name}`)
        setTimeout(() => {
              setNotificationMessage(null)
            },5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={typeOfNotificationMessage}/>
      <Filter 
      searchName={searchName} 
      searchHandler={(e) => setSearchName(e.target.value)} 
      />
      <h3>add a new</h3>
      <PersonForm 
      addNewNumber={addNewNumber}
      newName={newName}
      newNameHandler={(e) => setNewName(e.target.value)}
      newNumber={newNumber}
      newNumberHandler={e => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Persons 
      persons={persons}
      searchName={searchName}
      deletePersonHandler={deletePersonHandler}
      />
    </div>
  )
}

export default App
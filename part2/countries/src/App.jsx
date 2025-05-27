import Search from "./components/Search"
import Results from "./components/Results"
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [results, setResults] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => setAllCountries(response.data.map(country => country.name.common)))
  },[])

  const handleSearch = (event) => {
    const searchValue = event.target.value
    setSearchCountry(searchValue)
    if (searchValue) {
      setResults(allCountries.filter(country => country.toLowerCase().includes(searchValue.toLowerCase())))
    } else {
      setResults([])
    }
  }

  const handleShow = (country) => {
    setResults([country])
  }
  
  
  return (
    <div>
      <Search handleSearch={handleSearch} searchCountry={searchCountry}/>
      <Results results={results} handleShow={handleShow}/>
    </div>
  )
}

export default App

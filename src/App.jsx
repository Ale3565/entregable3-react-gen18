import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'
import ResidentInfo from './components/ResidentInfo'
import Location from "./components/Location"
import "./normalize.css"
import Image from "../src/assets/image1.jpg"


function App() {

  const [inputSearch, setInputSearch] = useState() // aqui se trae la informacion del input
  const [locations, setLocations] = useState() // esta es la informacion de cada location y dentro de residents ese hace el map
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)
  //const [persons, setPersons] = useState()

  useEffect(() => {
    if (inputSearch === undefined) return;
    const URL = `https://rickandmortyapi.com/api/location/${inputSearch}`
    axios.get(URL)
      .then(res => {
        console.log(res.data)
        setLocations(res.data)
      })
      .catch(err => console.log(err.message))
  }, [inputSearch])

  //const lastPostIndex = currentPage * postsPerPage;
  //const firstPostIndex = lastPostIndex - postsPerPage;


  return (
    <div className="App">
      <div className='navbar__img'>
        <img src={Image} />
      </div>
      <div className='container__location-app'>
        <Location
          locations={locations}
        />
      </div>
      <div className='container__input'>
        <FormInput
          setInputSearch={setInputSearch}
        />
      </div>
      <div className='container__resident-map'>
        {
          locations?.residents.map(resident => (
            <ResidentInfo
              resident={resident}
              key={resident.url}
            />
          ))
        }
       <div className='footer'>
        <h2>Web Developer: Alexis Levano</h2>
      </div>
    </div>
    </div>
  )
}

export default App

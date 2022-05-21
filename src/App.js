import { useState, useEffect } from "react";
import { FormAddPerson } from "./pages/phonebook/FormAddPerson";
import { ListOfPersons } from "./pages/phonebook/ListOfPersons";
import { FilterPersons } from "./pages/phonebook/FilterPersons";
import { FilterCountries } from "./pages/countries/FilterCountries";
import { ListOfCountries } from "./pages/countries/ListOfCountries";
import { getPersons } from "./services/phonebook/getPersons";
import { Notification } from "./services/Notification";
import { ErrorNotification } from "./services/ErrorNotification";

const filteredPersons = []
const filteredCountries = []

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");
  //Para API paises
  const [countries, setCountries] = useState([]);
  const [searchCountrie, setSearchCountrie] = useState("");
  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //Base de datos telefonos
  useEffect(() => {
    getPersons()
      .then((result) => {
        setPersons(result)
      }).catch((err) => {
        console.log(err)
      });

  }, [])


  //API REST Países
  
  useEffect(() => {

    const API_URL = "https://restcountries.com/"
    const API_VERSION = "v3.1/"
    const API_ENDPOINT = "all"

    fetch(`${API_URL}${API_VERSION}${API_ENDPOINT}`)
      .then(async (response) => {
        return response.json();
      })
      .then(json => {
        setCountries(json)
        console.log(json)        
        setLoading(false)
      })

  }, [])



  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search Person</h2>
      <FilterPersons
          persons={persons}
          filteredPersons={filteredPersons}
          newFilter={newFilter}
          setNewFilter={setNewFilter}
      />

      {notification ? <Notification message={notification} /> : ""}
      {errorMessage ? <ErrorNotification message={errorMessage} /> : ""}

      <h2>Add New Person</h2>
      <FormAddPerson 
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newPhone={newPhone}
          setNewPhone={setNewPhone}
          setNotification={setNotification}
      />

      <h2>Numbers</h2>

      { loading ? "Loading..." : ""}

      <ListOfPersons
          persons={persons}
          filteredPersons={filteredPersons}
          newFilter={newFilter}
          setErrorMessage={setErrorMessage}
      />

      <h1>COUNTRIES</h1>
      
      { loading ? "Loading..." : ""}

      <FilterCountries
          countries={countries}
          filteredCountries={filteredCountries}
          searchCountrie={searchCountrie}
          setSearchCountrie={setSearchCountrie}
      />

      <ListOfCountries
          countries={countries}
          filteredCountries={filteredCountries}
          searchCountrie={searchCountrie}
      />      

    </div>
  );
};

export default App;

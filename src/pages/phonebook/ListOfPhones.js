import React from "react";
import { deletePersons } from "../../services/phonebook/deletePerson";


export function ListOfPhones({person, setErrorMessage}) {

  
  const handleDelete = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      try {
        deletePersons(person.id)
      } catch (error) {
        setErrorMessage(`Error: ${person.name} was already removed from server`)
        console.log(error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    } else {
      return null
    }
  }


  return (
      <React.Fragment>
        <li>{person.name} {person.number} <button onClick={handleDelete}>Delete</button></li>
      </React.Fragment>
  );
}

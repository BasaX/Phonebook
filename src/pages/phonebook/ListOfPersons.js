import { ListOfPhones } from "./ListOfPhones"

export const ListOfPersons = ({ persons, filteredPersons, newFilter, setErrorMessage }) => {

  return (
    <ol>
      { 
        !newFilter ?
          (persons.map(person => {
            return(
              <ListOfPhones key={person.id} person={person} setErrorMessage={setErrorMessage} />
        )}))
        :
          (filteredPersons.map(person => {
            return(
              <ListOfPhones key={person.id} person={person} setErrorMessage={setErrorMessage} />
        )}))
      }
    </ol>
  );
}
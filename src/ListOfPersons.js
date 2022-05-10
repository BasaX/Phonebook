import { ListOfPhones } from "./ListOfPhones"

export const ListOfPersons = ({ persons, filteredPersons, newFilter }) => {

  return (
    <ol>
      { 
        !newFilter ?
          (persons.map(person => {
            return(
              <ListOfPhones key={person.id} person={person} />
        )}))
        :
          (filteredPersons.map(person => {
            return(
              <ListOfPhones key={person.id} person={person} />
        )}))
      }
    </ol>
  );
}

export const FilterPersons = ({persons, filteredPersons, newFilter, setNewFilter}) => {

  const handleInputFilter = (event) => {
    event.preventDefault();
    setNewFilter(event.target.value);
      
    filteredPersons.splice(0, filteredPersons.length)
      
    persons.forEach(person => {
      const actualName = person.name

      if ( actualName.includes(newFilter)) {
          filteredPersons.push(person)
      }
    })  

  };

  return (
      <div>
          Filter show with: <input onChange={handleInputFilter} type="text" />
      </div>
  );
}
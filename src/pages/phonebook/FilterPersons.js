
export const FilterPersons = ({persons, filteredPersons, newFilter, setNewFilter}) => {

  
  function handleInputFilter(event) {
    event.preventDefault();
    setNewFilter(event.target.value);
      
    
      filteredPersons.splice(0, filteredPersons.length)
      persons.forEach(person => {
        person.name.includes(newFilter) ? filteredPersons.push(person) : ""
      })


  };


  return (
      <div>
          Filter show with: <input onChange={handleInputFilter} type="text" value={newFilter} />
      </div>
  );
}
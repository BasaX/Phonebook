
export const FilterCountries = ({countries, filteredCountries, searchCountrie, setSearchCountrie}) => {

  
    function handleInputFilter(event) {
      event.preventDefault();
      setSearchCountrie(event.target.value);
        
      
      filteredCountries.splice(0, filteredCountries.length)
      countries.forEach(countrie => {
          countrie.name.common.includes(searchCountrie) ? filteredCountries.push(countrie) : ""
        })
  
    };
  
  
    return (
        <div>
            Search Country: <input onChange={handleInputFilter} type="text" value={searchCountrie} />
        </div>
    );
  }
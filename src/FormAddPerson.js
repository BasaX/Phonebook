
export const FormAddPerson = ({persons,
      setPersons,
      newName,
      setNewName,
      newPhone,
      setNewPhone}) => {

    
    const handleInputName = (event) => {
      event.preventDefault();
      setNewName(event.target.value);
    };

  
    const handleInputPhone = (event) => {
      event.preventDefault();
      setNewPhone(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      let nameCheck = false;

      persons.forEach(person => {
        if(person.name === newName) {
          nameCheck = true;
        }
      })

      if (!nameCheck) {
        const newPersonToPhonebook = {
        name: newName,
        id: persons.length + 1,
        phone: newPhone
        };

        setPersons(persons.concat(newPersonToPhonebook))
      } else {
        alert(`${newName} ya esta cargado en la lista`)
      }

      //setPersons([...persons, newPersonToPhonebook])
      setNewName("");
      setNewPhone("");
  };




  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleInputName} type="text" />
      </div>
      <div>
        phone: <input value={newPhone} onChange={handleInputPhone} />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  );
}
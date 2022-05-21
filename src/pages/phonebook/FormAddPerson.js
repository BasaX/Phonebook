import { createPerson } from "../../services/phonebook/createPerson.js";
import { modifyPhone } from "../../services/phonebook/modifyPhone.js";

export const FormAddPerson = ({persons,
      setPersons,
      newName,
      setNewName,
      newPhone,
      setNewPhone,
      setNotification}) => {

    
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
      let numberCheck = false;
      let tempId = "";

      persons.forEach(person => {
        if(person.name === newName) {
          nameCheck = true;
          tempId = person.id;
          if(person.number === newPhone) {
            numberCheck = true;
          }
        }        
      })

      const newPersonToPhonebook = {
      name: newName,
      number: newPhone
      };

      if (!nameCheck) {
        createPerson(newPersonToPhonebook)
          .then(prevPersons => {
          setPersons(prevPersons => prevPersons.concat(newPersonToPhonebook))
          setNotification(
            `Added ${newPersonToPhonebook.name} to the Phonebook`
          )
          setTimeout(() => {
            setNotification(null)
          }, 3000)
            })
      } else {
        if (numberCheck) {
          alert("Has ingresado una persona ya existente con un mismo número")
        } else {
          if (window.confirm(`${newName} is already added to phonebook, do you want to replace the old number for this new one?`)) {
              modifyPhone(newPersonToPhonebook, tempId)
              setNotification(
                `${newPersonToPhonebook.name}'s number was modified in the Phonebook`
              )
              setTimeout(() => {
                setNotification(null)
              }, 3000)
          }
        }
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
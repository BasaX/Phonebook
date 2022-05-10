import { useState } from "react";
import { FormAddPerson } from "./FormAddPerson";
import { ListOfPersons } from "./ListOfPersons";
import { FilterPersons } from "./FilterPersons";

const filteredPersons = []

const App = ({phonebook}) => {
  const [persons, setPersons] = useState(phonebook);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");
  

  return (
    <div>
      <h2>Search Person</h2>
      <FilterPersons
          persons={persons}
          filteredPersons={filteredPersons}
          newFilter={newFilter}
          setNewFilter={setNewFilter}
      />

      <h2>Add New Person</h2>
      <FormAddPerson 
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newPhone={newPhone}
          setNewPhone={setNewPhone}
      />

      <h2>Numbers</h2>
      <ListOfPersons
          persons={persons}
          filteredPersons={filteredPersons}
          newFilter={newFilter}
      />

    </div>
  );
};

export default App;

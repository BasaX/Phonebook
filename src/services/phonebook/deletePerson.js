import axios from "axios";

export const deletePersons = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`)
      .then((result) => {
        console.log(result)
        const {data} = result
        return data
    })
}
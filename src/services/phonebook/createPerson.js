import axios from "axios";

export const createPerson = (newPersonToPhonebook) => {
    return axios.post("http://localhost:3001/persons", newPersonToPhonebook)
      .then((response) => {
        console.log(response)
        const {data} = response
        return data
    })
}
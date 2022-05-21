import axios from "axios";

export const getPersons = () => {
    return axios.get("http://localhost:3001/persons")
      .then((result) => {
        console.log(result)
        const {data} = result
        return data
    })
}
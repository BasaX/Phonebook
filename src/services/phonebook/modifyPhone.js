import axios from "axios";

export const modifyPhone = (newPersonToPhonebook, tempId) => {

    const modifiedPerson = {
        ...newPersonToPhonebook,
        number: newPersonToPhonebook.number
    }

    console.log(modifiedPerson)
    console.log(tempId)

    axios.put(`http://localhost:3001/persons/${tempId}`, modifiedPerson)
        .then((result) => {
            const {data} = result
            return data
        })
        .catch(e => {
            console.log(e)
        })
}
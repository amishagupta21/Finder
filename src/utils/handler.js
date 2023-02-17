import axios from "axios"

export function callAPI(options) {
    return new Promise((resolve, reject) => {
        axios(options)
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
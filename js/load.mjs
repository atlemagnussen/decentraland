import * as https from "https"

//const url = "https://api.decentraland.org/v2/addresses/0x42536Ea0a77F1e95aD17BC17D7F1AB9a798d9C69/contributions"
const url = "https://api.decentraland.org/v2/addresses/0x42536ea0a77f1e95ad17bc17d7f1ab9a798d9c69/contributions"
const getFileFromHttp = (url) => {
    return new Promise((resolve, reject) => {
        const request = https.request(url, (res) => {
            let data = ""
            res.on("data", (chunk) => data += chunk)
            res.on("end", () => resolve(data))
        })
            .on("error", (e) => reject(e))
        request.end()
    })
}

const get = async () => {
    try {
        const content = await getFileFromHttp(url)
        if (!content)
            console.error(`no file content for ${swaggerUrl}`)
        console.log(content)
    }
    catch (err) {
        console.error(err)
    }
}
get().then(() => console.log("done"))
    .catch(err => console.error(err))


// https://api.decentraland.org/v2/districts/d9bfa18a-c856-457d-8d85-e2dc3b7648a1 //vegas
// https://api.decentraland.org/v2/districts/f5d8e722-fdce-4d41-b38b-adfed2e0cf6c //districtX
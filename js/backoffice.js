const url = "https://striveschool-api.herokuapp.com/api/movies"

const params = new URLSearchParams(location.search)
const id = params.get("id")
console.log(id)

window.onload = async () => {
    try {
        if (id !== null) {

            const postButton = document.querySelector(".btn-primary")
            postButton.remove()

            let res = await fetch(url + "/" + id, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
                }
            })

            if (res.ok) {

                let { name, description, category, imageUrl } = await res.json()
                document.querySelector("#movieName").value = name
                document.querySelector("#movieDescription").value = description
                document.querySelector("#movieCategory").value = category
                document.querySelector("#movieImg").value = imageUrl

            } else {
                console.log(res)
            }
        } else {
            const putButton = document.querySelector(".btn-success")
            putButton.remove()
        }
        generateNumbers()
    } catch (err) {
        console.log(err)

    }
}

const backOffice = async () => {
    try {
        const moviesToSend = {
            name: document.querySelector("#movieName").value,
            description: document.querySelector("#movieDescription").value,
            category: document.querySelector("#movieCategory").value,
            imageUrl: `./assets/media/media${document.querySelector("#movieImg").value}.jpg`,
        }
        const options = {
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }),
            body: JSON.stringify(moviesToSend)
        }
        let finalURL = url
        if (id === null) {
            options.method = "POST"
        } else {
            finalURL += `/${id}`
            options.method = "PUT"
        }
        const res = await fetch(finalURL, options)
        if (res.ok) {
            console.log("all good")
            // successAlert()
        } else {
            console.log("bad")
            // throw res.status + " " + res.statusText
        }
    } catch (err) {
        console.log(err)
    }
}

const getMovies = async (categoryId) => {
    try {
        const res = await fetch(url + "/" + categoryId, options)
        const moviesJson = await res.json()
        console.log(moviesJson)
        addMedia(moviesJson)
    } catch (err) {
        console.log(err)
    }
}

const generateNumbers = () => {
    const imgNode = document.getElementById("movieImg")
    for (let index = 0; index < 33; index++) {
        imgNode.innerHTML += `<option>${index + 1}</option>`
    }
}

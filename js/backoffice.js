const url = "https://striveschool-api.herokuapp.com/api/movies"

const params = new URLSearchParams(location.search)
const id = params.get("id")
const category = params.get("category")

window.onload = async () => {
    try {
        if (id !== null) {
            const postButton = document.querySelector(".btn-primary")
            postButton.remove()

            let res = await fetch(url + "/" + category, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
                }
            })

            if (res.ok) {
                let movieEdit = await res.json()
                let findMovie = movieEdit.find(obj => obj._id === id)
                let { name, description, category, imageUrl } = findMovie
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
        await getAll()
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
            location.reload()
            console.log("Success")
        } else {
            console.log("Not working")
        }
    } catch (err) {
        console.log(err)
    }
}

function backToBO() {
    window.location.href = "./backoffice.html";
}

const editMovie = async (category, editID) => {
    try {
        let res = await fetch(url + "/" + category, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }
        })
        if (res.ok) {
            const object = await res.jason().find(obj => obj._id === editID)
            console.log(object)
            let { name, description, category, imageUrl } = object
            document.querySelector("#movieName").value = name
            document.querySelector("#movieDescription").value = description
            document.querySelector("#movieCategory").value = category
            document.querySelector("#movieImg").value = imageUrl
        }

    } catch (err) {
        console.log(err)
    }
}

const deleteMovie = async (deleteID) => {
    try {
        let res = await fetch(url + "/" + deleteID, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }
        })
        if (res.ok) {
            backToBO()
        }
    } catch (err) {
        console.log(err)
    }
}


const getActionMovies = async () => {
    try {
        const res = await fetch(url + "/Action", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }
        })
        const moviesJson = await res.json()
        addActionMediaBO(moviesJson)
    } catch (err) {
        console.log(err)
    }
}
const getComedyMovies = async () => {
    try {
        const res = await fetch(url + "/Comedy", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }
        })
        const moviesJson = await res.json()
        addComedyMediaBO(moviesJson)
    } catch (err) {
        console.log(err)
    }
}
const getHorrorMovies = async () => {
    try {
        const res = await fetch(url + "/Horror", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }
        })
        const moviesJson = await res.json()
        addHorrorMediaBO(moviesJson)
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


const addActionMediaBO = (movies) => {
    const actionBONode = document.getElementById('action-bo')

    movies.map((singleMovie) => {
        const { name, imageUrl, category, _id } = singleMovie
        if (singleMovie.name !== undefined) {

            actionBONode.innerHTML += `
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <img class="mr-3" src="${imageUrl}" alt="...">
                <div class="">
                    <p>Name:<span>${name}</span><p>
                    <p>ID:<span>${_id}</span><p>
                </div>
                <div class="">
                    <a href='./backoffice.html?id=${_id}&category=${category}' class='btn btn-primary'>Edit</a>
                    <button type="button" class="btn btn-danger" onclick='deleteMovie("${_id}")'>Delete</button>
                </div>
            </li>`
        }
    })
}
const addComedyMediaBO = (movies) => {
    const comedyBONode = document.getElementById('comedy-bo')

    movies.map((singleMovie) => {
        const { name, imageUrl, category, _id } = singleMovie
        if (singleMovie.name !== undefined) {

            comedyBONode.innerHTML += `
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <img class="mr-3" src="${imageUrl}" alt="...">
                <div class="">
                    <p>Name:<span>${name}</span><p>
                    <p>ID:<span>${_id}</span><p>
                </div>
                <div class="">
                    <a href='./backoffice.html?id=${_id}&category=${category}' class='btn btn-primary'>Edit</a>
                    <button type="button" class="btn btn-danger" onclick='deleteMovie("${_id}")'>Delete</button>
                </div>
            </li>`
        }
    })
}
const addHorrorMediaBO = (movies) => {
    const horrorBONode = document.getElementById('horror-bo')

    movies.map((singleMovie) => {
        const { name, imageUrl, category, _id } = singleMovie
        if (singleMovie.name !== undefined) {

            horrorBONode.innerHTML += `
            <li class="list-group-item d-flex align-items-center justify-content-between">
                <img class="mr-3" src="${imageUrl}" alt="...">
                <div class="">
                    <p>Name:<span>${name}</span><p>
                    <p>ID:<span>${_id}</span><p>
                </div>
                <div class="">
                    <a href='./backoffice.html?id=${_id}&category=${category}' class='btn btn-primary'>Edit</a>
                    <button type="button" class="btn btn-danger" onclick='deleteMovie("${_id}")'>Delete</button>
                </div>
            </li>`
        }
    })
}

const getAll = async () => {
    await getActionMovies()
    await getComedyMovies()
    await getHorrorMovies()
}
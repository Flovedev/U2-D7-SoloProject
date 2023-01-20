const url = "https://striveschool-api.herokuapp.com/api/movies"

const options = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
    }
}

window.onload = async () => {
    await getAll()
    await getMoviesCategory()
}

const addMedia = (movies) => {
    const trendingDisplayNode = document.getElementById('trending-display')
    const trendingOtherNode = document.getElementById('trending-others')
    const againDisplayNode = document.getElementById('again-display')
    const againOtherNode = document.getElementById('again-others')
    const newDisplayNode = document.getElementById('new-display')
    const newOtherNode = document.getElementById('new-others')

    let moviesFiltered = movies.filter(function (element) {
        return element !== undefined
    })
    movies.map((singleMovie) => {
        const { name, description, category, imageUrl, _id } = singleMovie
        if (singleMovie.name !== undefined) {

            trendingDisplayNode.innerHTML += `
                
                    <div class="card movie-card" style="width: 230px;">
                        <img class="w-100" src="${imageUrl}" class="w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${category}</li>
                            </ul>
                            <a href='./backoffice.html?id=${_id}' class='btn btn-primary'>Edit</a>
                            <button type="button" class="btn btn-danger" onclick='deleteActionMovie("${_id}")'>Delete</button>
                        </div>
                    </div>
                `
        }


    })
}


const getMovies = async (categoryId) => {
    try {
        const res = await fetch(url + "/" + categoryId, options)
        const moviesJson = await res.json()
        addMedia(moviesJson)
    } catch (err) {
        console.log(err)
    }
}
const getMoviesCategory = async () => {
    try {
        const res = await fetch(url + "", options)
        const moviesJson = await res.json()
        console.log(moviesJson)
        addMedia(moviesJson)
    } catch (err) {
        console.log(err)
    }
}

const deleteActionMovie = async (deleteID) => {
    try {
        let res = await fetch(url + "/" + deleteID, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
            }
        })
        if (res.ok) {
            location.reload()
        }
    } catch (err) {
        console.log(err)
    }
}

const getAll = async () => {
    await getMovies("Comedy")
    await getMovies("Action")
    await getMovies("Horror")
}
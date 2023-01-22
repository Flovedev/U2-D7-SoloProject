const url = "https://striveschool-api.herokuapp.com/api/movies"

const options = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNjFlODE3ZWE3ODAwMTUyZWJlM2MiLCJpYXQiOjE2NzQyMDc3MjAsImV4cCI6MTY3NTQxNzMyMH0.AjKLVfc6Qp8hjqD9bk3pGTlPkit0aseBdflOSdqm8LI"
    }
}

window.onload = async () => {
    addDefaultMedia()
    await getAll()
    await getMoviesCategory()
}

const addDefaultMedia = () => {
    const trendingDisplayNode = document.getElementById('trending-display')
    const trendingOtherNode = document.getElementById('trending-others')
    const againDisplayNode = document.getElementById('again-display')
    const againOtherNode = document.getElementById('again-others')
    const newDisplayNode = document.getElementById('new-display')
    const newOtherNode = document.getElementById('new-others')

    for (let index = 0; index < 6; index++) {
        trendingDisplayNode.innerHTML += `<img class="col-sm-4 col-md-4 col-lg-2" src="./assets/media/media${index}.jpg" alt="...">`
        trendingOtherNode.innerHTML += `<img class="col-sm-4 col-md-4 col-lg-2" src="./assets/media/media${index + 5}.jpg" alt="...">`
        againDisplayNode.innerHTML += `<img class="col-sm-4 col-md-4 col-lg-2" src="./assets/media/media${index + 10}.jpg" alt="...">`
        againOtherNode.innerHTML += `<img class="col-sm-4 col-md-4 col-lg-2" src="./assets/media/media${index + 15}.jpg" alt="...">`
        newDisplayNode.innerHTML += `<img class="col-sm-4 col-md-4 col-lg-2" src="./assets/media/media${index + 20}.jpg" alt="...">`
        newOtherNode.innerHTML += `<img class="col-sm-4 col-md-4 col-lg-2" src="./assets/media/media${index + 25}.jpg" alt="...">`
    }
}

const addMedia = (movies) => {
    const addedNode = document.getElementById('add-backoffice')
    movies.map((singleMovie) => {
        const { name, description, category, imageUrl, _id } = singleMovie
        if (singleMovie.name !== undefined) {
            addedNode.innerHTML +=
                `<div class="card movie-card m-1 position-relative" style="width: 230px;">
                        <img class="w-100" src="${imageUrl}" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-dark">${category}</li>
                            </ul>
                        </div>
                    </div>`
        }
    })
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

const getAll = async () => {
    await getMovies("Comedy")
    await getMovies("Action")
    await getMovies("Horror")
}
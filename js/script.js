function addMedia() {
    let trendingDisplayNode = document.getElementById('trending-display')
    let trendingOtherNode = document.getElementById('trending-others')
    let againDisplayNode = document.getElementById('again-display')
    let againOtherNode = document.getElementById('again-others')
    let newDisplayNode = document.getElementById('new-display')
    let newOtherNode = document.getElementById('new-others')

    for (let index = 0; index < 6; index++) {
        trendingDisplayNode.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 p-1"><img src="./assets/media/media${index}.jpg" class="w-100" alt="..."></div>`;
        trendingOtherNode.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 p-1"><img src="./assets/media/media${index + 6}.jpg" class="w-100" alt="..."></div>`;
        againDisplayNode.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 p-1"><img src="./assets/media/media${index + 12}.jpg" class="w-100" alt="..."></div>`;
        againOtherNode.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 p-1"><img src="./assets/media/media${index + 18}.jpg" class="w-100" alt="..."></div>`;
        newDisplayNode.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 p-1"><img src="./assets/media/media${index + 24}.jpg" class="w-100" alt="..."></div>`;
        newOtherNode.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 p-1"><img src="./assets/media/media${index + 27}.jpg" class="w-100" alt="..."></div>`;
    }
}

window.onload(addMedia())
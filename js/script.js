// function addMedia() {
//     let trendingNode = document.getElementById('trending-container')
//     let againNode = document.getElementById('again-container')
//     let newNode = document.getElementById('new-container')

//     for (let index = 0; index < 6; index++) {
//         trendingNode.innerHTML += `<div class="col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 px-1">
//         <img class="img-fluid" src="./assets/media/media${index}.jpg" alt="whatever">
//         </div>`;
//         againNode.innerHTML += `<div class="col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 px-1">
//         <img class="img-fluid" src="./assets/media/media${index + 6}.jpg" alt="whatever">
//         </div>`;
//         newNode.innerHTML += `<div class="col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 px-1">
//         <img class="img-fluid" src="./assets/media/media${index + 12}.jpg" alt="whatever">
//         </div>`;
//     }
// }
function addMedia() {
    let trendingDisplayNode = document.getElementById('trending-display')
    let trendingOtherNode = document.getElementById('trending-others')
    let againDisplayNode = document.getElementById('again-display')
    let againOtherNode = document.getElementById('again-others')
    let newDisplayNode = document.getElementById('new-display')
    let newOtherNode = document.getElementById('new-others')

    for (let index = 0; index < 6; index++) {
        trendingDisplayNode.innerHTML += `<div class="col p-1"><img src="./assets/media/media${index}.jpg" class="w-100" alt="..."></div>`;
        trendingOtherNode.innerHTML += `<div class="col p-1"><img src="./assets/media/media${index + 6}.jpg" class="w-100" alt="..."></div>`;
        againDisplayNode.innerHTML += `<div class="col p-1"><img src="./assets/media/media${index + 12}.jpg" class="w-100" alt="..."></div>`;
        againOtherNode.innerHTML += `<div class="col p-1"><img src="./assets/media/media${index + 18}.jpg" class="w-100" alt="..."></div>`;
        newDisplayNode.innerHTML += `<div class="col p-1"><img src="./assets/media/media${index + 24}.jpg" class="w-100" alt="..."></div>`;
        newOtherNode.innerHTML += `<div class="col p-1"><img src="./assets/media/media${index + 27}.jpg" class="w-100" alt="..."></div>`;

    }
}


window.onload(addMedia())
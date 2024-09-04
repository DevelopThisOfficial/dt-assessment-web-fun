function changeImage(element) {

}

function alertMe(element) {

}

async function getAPI() {
    clearImage()

}

function clearImage(){
    localStorage.removeItem("newImage")
}

function imageUpdate() {
    if (localStorage.getItem('newImage')) {
        let localImage = localStorage.getItem('newImage')
        document.getElementById('status').src = localImage
        document.getElementById('status').alt = 'OK'
    } else {
        alert('404 Image not found')
    }
}

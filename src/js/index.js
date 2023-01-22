const buttonTrailer = document.querySelector('.button-trailer')
const buttonClose = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const video = document.getElementById('video')
const linkVideo = video.src

function switchModal () {
    modal.classList.toggle('open-modal')
}

buttonTrailer.addEventListener('click', ()=>{
    switchModal()
    video.setAttribute('src', linkVideo)
})

buttonClose.addEventListener('click', ()=>{
    switchModal()
    video.setAttribute('src', '')
})
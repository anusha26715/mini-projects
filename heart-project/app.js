const greyHeart = document.querySelector('.grey-heart')
const redHeart = document.querySelector('.red-heart')
const msgEl = document.getElementById('message')
const emgEl = document.getElementById('emoji')

greyHeart.addEventListener("click",()=>{
    redHeart.classList.add('animation')
    greyHeart.classList.add('fill-color')
    setTimeout(()=>{
        msgEl.innerText = "I Fluffv u.."
        emgEl.innerText = "😘"
    },200)

})

redHeart.addEventListener("click",()=>{
    redHeart.classList.remove('animation')
    greyHeart.classList.remove('fill-color')
    msgEl.innerText = "Click Heart"
    emgEl.innerText = ''
})
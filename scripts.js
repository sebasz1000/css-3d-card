console.log("scripts loaded!");

//Movement animation to happend
const card = document.querySelector('.card')
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title')
const sneakerImg = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.description')
const circle = document.querySelector('.circle')
const sizes = document.querySelector('.sizes')

const DEPTH = 60;
container.addEventListener('mousemove', e => {
    const SMOOTHER = 40;
    let xAxis = (window.innerWidth / 2 - e.pageX) / SMOOTHER;
    let yAxis = (window.innerHeight / 2 - e.pageY) / SMOOTHER;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
    console.log(e.pageX)
})

//Animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none'
    //Popout
    title.style.transform = `translateZ(${DEPTH}px)`
    sneakerImg.style.transform = `translateZ(${DEPTH}px) rotateZ(-30deg) scale(1.2)`
    circle.style.transform = `translateZ(${DEPTH - 20}px) scale(1.1)`
    purchase.style.transform = `translateZ(${DEPTH}px) scale(1.14)`
    description.style.transform = `translateZ(${DEPTH}px)`
    sizes.style.transform = `translateZ(${DEPTH}px)`
    purchase.style.backgroundColor = '#f54642'




})

//Animate OUt
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'
    sneakerImg.style.transition = 'all 0.5s 0.2s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = 'translateZ(0px)'
    circle.style.transform = `translateZ(0)`
    sneakerImg.style.transform = 'translateZ(0) rotateZ(0)'
    purchase.style.transform = 'translateZ(0) scale(1)'
    purchase.style.backgroundColor = '#08539c'
    description.style.transform = 'translateZ(0)'
    sizes.style.transform = 'translateZ(0)'

})
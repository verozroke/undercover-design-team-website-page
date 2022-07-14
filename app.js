const anchors = document.querySelectorAll('a[href*="#"]')
// const hentaiMusic = new Audio('audio/hentai.mp3')

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1)
        console.log(document.getElementById(blockID))
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}) 


const scrollForMore = document.getElementById('scroll-button') 

scrollForMore.addEventListener('click', event => {
    event.preventDefault()
    const blockID = document.getElementById('services')
    blockID.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

// let clicksToLamp = 0
// const lampochka = document.getElementById('lampochka')

// lampochka.addEventListener('click', event => {
//     clicksToLamp+= 1
//     console.log('Пасхалочка через: ' + (10-clicksToLamp))
//     if (clicksToLamp === 10) {
//         alert('Hentai Time!~~~')
//         hentaiMusic.play()
//         clicksToLamp = 0
//     }
// })
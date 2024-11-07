var video = false

function videoCard(card){
    card.style.transform = 'scale(1.1)'
    card.style.boxShadow = '0 8px 16 rgba(0, 0, 0, 0.3)'
    if(video == false){
        card.classList.toggle('flipped')
    }
    document.querySelector('.cardVideo').style.autoplay="autoplay"
    document.querySelector('.cardVideo').style.loop="loop"
}

function shrinkCard(card){
    card.style.transform = 'scale(1)'
    card.style.boxShadow = 'none'
    if(video == true){
        card.classList.toggle('flipped')
    }
}
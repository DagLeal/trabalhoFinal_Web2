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

var slides = [/CT/chronotrigger_scene_02.jpg,/CT/chronotrigger_scene_04.jpg,/CT/chronotrigger_scene_07.jpg,/CT/chronotrigger_scene_08.jpg]
var tam = slides.length
var satual = 0
var tmpslider

function trocaAutomatica(){
    satual ++
    if(satual >= tam){
        satual = 0
    }

document.querySelector('#dvSlider').style.backgroundImage=`url('$(slides[satual])')`
}

function iniciaSlider(){
    document.querySelector('#dvSlider').style.backgroundImage=`url('(slides[satual])')`
    tmpslider =setInterval(trocaAutomatica,2000)
}

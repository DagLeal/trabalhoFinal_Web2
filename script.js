const card = document.querySelector(".card");
const video = document.querySelector("video");

video.muted = true;

card.addEventListener("mouseenter", () => {
    // Tenta reproduzir o vídeo
    const playPromise = video.play();
  
    // Verifica se o navegador bloqueou a reprodução
    if (playPromise !== undefined) {
        playPromise
        .then(() => {
            console.log("Vídeo reproduzido automaticamente.");
        })
        .catch((error) => {
            console.error("Autoplay bloqueado. Tentando novamente:", error);
            // Tenta reproduzir novamente após um breve atraso
            setTimeout(() => video.play(), 100);
        });
    }
});
  
  // Pausa e reinicia o vídeo ao sair do cartão
card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reinicia o vídeo quando o mouse sai
});

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


// Slideshow::
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("indicator-dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Configura a troca automática de slides
setInterval(() => {
    plusSlides(1);
}, 4000);  // Tempo de exibição do slide em milissegundos (4 segundos)

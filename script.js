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

/*PLAYER DE MUSICA */
window.onload = function () {
    console.log("Página carregada! Iniciando o script...");

    const progress = document.getElementById("progress");
    const song = document.getElementById("song");
    const ctrlIcon = document.getElementById("ctrlIcon");

    // Verifica se os elementos do player existem antes de continuar
    if (progress && song && ctrlIcon) {
        console.log("Elementos do player encontrados!");

        // Função playPause definida de forma global
        window.playPause = function () {
            if (ctrlIcon.classList.contains("fa-pause")) {
                song.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
            } else {
                song.play();
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
            }
        };

        song.onloadedmetadata = function () {
            progress.max = song.duration;
            progress.value = 0;
        };

        song.ontimeupdate = function () {
            progress.value = song.currentTime;
        };

        progress.oninput = function () {
            song.currentTime = progress.value;
        };
    } else {
        console.error("Elementos do player não encontrados!");
    }
};

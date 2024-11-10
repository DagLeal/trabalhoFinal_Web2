console.log("Script carregado corretamente!");

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".indicator-dot");

    if (slides.length === 0 || dots.length === 0) {
        console.error("Slides ou dots não encontrados!");
        return;
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Função para mostrar slides
    function showSlides(n) {
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));
        
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    // Função para avançar ou retroceder slides
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    // Função para ir para um slide específico
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    // Troca automática de slides a cada 4 segundos
    setInterval(() => {
        showSlides(++slideIndex);
    }, 4000);
});


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

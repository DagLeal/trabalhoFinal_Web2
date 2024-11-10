document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("indicator-dot");

        // Verifique se os elementos realmente existem
        if (slides.length === 0 || dots.length === 0) {
            console.error("Slides ou dots não encontrados!");
            return;
        }

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        
        // Esconde todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Remove a classe 'active' de todos os dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        // Mostra o slide atual e ativa o indicador
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    // Configura a troca automática de slides
    setInterval(() => {
        plusSlides(1);
    }, 4000);
});



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

let slideIndex = 1;
showSlides(slideIndex);

let plusSlides = (n) => showSlides(slideIndex += n);


let currentSlide = (n) => showSlides(slideIndex = n);


function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("round-dots");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}
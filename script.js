const imageCards = document.querySelectorAll(".image-card");
const slideBtns = document.querySelectorAll(".slider-btn .dot");

function eventHandler(index) {
    imageCards.forEach((card, i) => {
        card.classList.remove('active');
        slideBtns[i].classList.remove('active');
    });

    imageCards[index].classList.add('active');
    slideBtns[index].classList.add('active');
}

imageCards.forEach((card, i) => {
    card.addEventListener("click", () => eventHandler(i)
    )
});

slideBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => eventHandler(i));
});
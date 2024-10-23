const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 5;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Auto-play functionality
let intervalId = setInterval(nextSlide, 2000);

carousel.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

carousel.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 2000);
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

const ruta = window.location.href
const url = ruta
const params = new URLSearchParams(url);

// constantes de obtencion de los parametros
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    let email,name;
    for (let [key, value] of formData.entries()) {
        console.log(key + ': ' + value);
        if (key === 'email') {
            email = value;
        }
        if (key === 'name') {
            name = value;
        }
    }
    alert(`Muchas gracias ${name} por contactarte con ONTIME, pronto recibirás un email al siguiente dirección: ${email}`);
    this.reset();
})

// ! transparencia de barra 

const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
    lastScrollY = window.scrollY;
});
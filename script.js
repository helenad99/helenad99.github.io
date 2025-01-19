document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider'); // Select all sliders
    
    sliders.forEach(slider => { // Loop through each slider
        const sliderContainer = slider.querySelector('.slider-container');
        const prevButton = slider.querySelector('.slider-button.prev');
        const nextButton = slider.querySelector('.slider-button.next');
        const slides = slider.querySelectorAll('.slide');

        let currentIndex = 0;
        let autoSlideInterval;

        function updateSliderPosition() {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSliderPosition();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSliderPosition();
        }
        
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }


        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });

        resetAutoSlide(); // Start auto-slide on initial load

    });

    // Create lively animated background particles
    const animatedBg = document.querySelector('.animated-bg');
    const particleCount = 100;
    const colors = ['#00ff00', '#ff00ff', '#00ffff', '#ffff00'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${Math.random() * 5 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${15 + Math.random() * 15}s`;
        particle.style.animationDelay = `${-Math.random() * 15}s`;
        animatedBg.appendChild(particle);
    }
});
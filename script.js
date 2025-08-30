document.addEventListener('mousemove', function (e) {
    const background = document.querySelector('.background');
    const foreground = document.querySelector('.foreground');

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    background.style.transform = `translate(${(mouseX - window.innerWidth / 2) / 100}px, ${(mouseY - window.innerHeight / 2) / 20}px)`;
    foreground.style.transform = `translate(${(mouseX - window.innerWidth / 2) / 80}px, ${(mouseY - window.innerHeight / 2) / 10}px)`;
});
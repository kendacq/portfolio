const screenWidthThreshold = 1024; // Tablets max width

document.addEventListener('mousemove', function (e) {
    if (window.innerWidth > screenWidthThreshold) {
        const background = document.querySelector('.background');
        const foreground = document.querySelector('.foreground');

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        background.style.transform = `translate(${(mouseX - window.innerWidth / 2) / 100}px, ${(mouseY - window.innerHeight / 2) / 20}px)`;
        foreground.style.transform = `translate(${(mouseX - window.innerWidth / 2) / 80}px, ${(mouseY - window.innerHeight / 2) / 10}px)`;
    }
});

if (window.innerWidth <= screenWidthThreshold) {
    document.querySelectorAll('.project').forEach(project => {
        const link = project.querySelector('a');
        if (!link) return;

        const h3 = link.querySelector('h3');
        const href = link.getAttribute('href');

        const newH3 = h3.cloneNode(true);
        link.replaceWith(newH3);

        const details = project.querySelector('.details');
        const linkPara = document.createElement('p');
        linkPara.innerHTML = `<b>Link:</b> <a href="${href}" target="_blank">${href}</a>`;
        details.appendChild(linkPara);
    });

    document.querySelectorAll('.info').forEach(info => {
        info.textContent = " Tap project title to show details.";
    });
}

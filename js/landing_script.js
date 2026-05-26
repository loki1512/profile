const particleContainer =
document.getElementById("particles");

for(let i=0;i<80;i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.animationDuration =
    (10 + Math.random()*15) + "s";

    particle.style.animationDelay =
    Math.random()*5 + "s";

    particleContainer.appendChild(particle);
}

const style =
document.createElement("style");

style.innerHTML = `
.particle{
    position:absolute;

    width:2px;
    height:2px;

    background:#00d4ff;

    border-radius:50%;

    opacity:.4;

    animation:float infinite linear;
}

@keyframes float{

    0%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-30px);
    }

    100%{
        transform:translateY(0);
    }
}
`;

document.head.appendChild(style);
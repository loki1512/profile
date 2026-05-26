const particleContainer =
document.getElementById("particles");

for(let i=0;i<100;i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.animationDuration =
    (10 + Math.random()*20) + "s";

    particleContainer.appendChild(particle);
}

const style =
document.createElement("style");

style.innerHTML = `

.particle{

    position:absolute;

    width:2px;
    height:2px;

    border-radius:50%;

    background:#00d4ff;

    opacity:.35;

    animation:float linear infinite;
}

@keyframes float{

    0%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-35px);
    }

    100%{
        transform:translateY(0);
    }
}
`;

document.head.appendChild(style);
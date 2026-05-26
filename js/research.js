/* ========================= */
/* PARTICLES */
/* ========================= */

const particleContainer =
document.getElementById("particles");

for(let i=0;i<120;i++){

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

    opacity:.3;

    animation:float linear infinite;
}

@keyframes float{

    0%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-40px);
    }

    100%{
        transform:translateY(0);
    }
}
`;

document.head.appendChild(style);

/* ========================= */
/* SCROLL REVEALS */
/* ========================= */

const revealItems =
document.querySelectorAll(

".glass-card,\
.research-section,\
.convergence,\
.future,\
.question-card"

);

revealItems.forEach(item=>{

    item.classList.add("reveal");
});

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");
        }
    });

},
{
    threshold:0.15
}
);

revealItems.forEach(item=>{

    observer.observe(item);
});

/* ========================= */
/* PARALLAX */
/* ========================= */

window.addEventListener(

"scroll",

()=>{

    const y = window.scrollY;

    particleContainer.style.transform =
    `translateY(${y*0.12}px)`;

});
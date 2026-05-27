/* ================================= */
/* PARTICLES */
/* ================================= */

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

    opacity:.28;

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

/* ================================= */
/* KSA CAROUSEL */
/* ================================= */

const ksaSlides = [

{
    image:"assets/ksa/monthly_dashboard.png",
    title:"Monthly Dashboard",
    description:"Revenue, cashflow and operational analytics in a unified overview."
},

{
    image:"assets/ksa/catalogue_search.png",
    title:"Static Keyword Search",
    description:"Workflow-aware search system optimized for repetitive retail catalog patterns."
},

{
    image:"assets/ksa/customer_ledger.png",
    title:"Customer Ledger",
    description:"Credit lifecycle visibility with customer-level transaction intelligence."
},

{
    image:"assets/ksa/returns.png",
    title:"Returns & Reverse Workflows",
    description:"Designed for real retail operations involving corrections, returns and adjustments."
},

{
    image:"assets/ksa/customer_login.png",
    title:"Role Based Access",
    description:"Secure multi-user operational workflows with controlled access."
}

];

const ksaImage =
document.getElementById("ksa-image");

const ksaTitle =
document.getElementById("ksa-title");

const ksaDescription =
document.getElementById("ksa-description");

let currentSlide = 0;

if(ksaImage){

    setInterval(()=>{

        currentSlide =
        (currentSlide + 1) % ksaSlides.length;

        const slide =
        ksaSlides[currentSlide];

        ksaImage.style.opacity = 0;

        setTimeout(()=>{

            ksaImage.src =
            slide.image;

            ksaTitle.textContent =
            slide.title;

            ksaDescription.textContent =
            slide.description;

            ksaImage.style.opacity = 1;

        },300);

    },4500);
}

/* ================================= */
/* MODALS */
/* ================================= */

const modalTriggers =
document.querySelectorAll(".modal-trigger");

const modals =
document.querySelectorAll(".modal");

const closeButtons =
document.querySelectorAll(".close-modal");

modalTriggers.forEach(trigger=>{

    trigger.addEventListener("click",()=>{

        const modalId =
        trigger.dataset.modal;

        const modal =
        document.getElementById(modalId);

        if(modal){

            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        }
    });
});

closeButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const modal =
        button.closest(".modal");

        modal.classList.remove("active");

        document.body.style.overflow = "auto";
    });
});

modals.forEach(modal=>{

    modal.addEventListener("click",(e)=>{

        if(e.target === modal){

            modal.classList.remove("active");

            document.body.style.overflow = "auto";
        }
    });
});

/* ================================= */
/* ESCAPE KEY CLOSE */
/* ================================= */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        modals.forEach(modal=>{

            modal.classList.remove("active");
        });

        document.body.style.overflow = "auto";
    }
});

/* ================================= */
/* SCROLL REVEAL */
/* ================================= */

const revealItems =
document.querySelectorAll(

".flagship-section,\
.learning-card,\
.project-tile,\
.section-heading,\
.modal-card"

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
    threshold:0.12
}
);

revealItems.forEach(item=>{

    observer.observe(item);
});

/* ================================= */
/* PARALLAX PARTICLES */
/* ================================= */

window.addEventListener(

"scroll",

()=>{

    const y = window.scrollY;

    particleContainer.style.transform =
    `translateY(${y*0.12}px)`;

});
/* ================================= */
/* PARTICLES */
/* ================================= */

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

    opacity:.22;

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
/* QR */
/* ================================= */

new QRCode(

document.getElementById("resume-qr"),

{
    text:
    window.location.href,

    width:90,
    height:90,

    colorDark:"#ffffff",

    colorLight:"#07111f",

    correctLevel:
    QRCode.CorrectLevel.H
});

new QRCode(

document.getElementById("portfolio-qr"),

{
    text:
    window.location.origin,

    width:90,
    height:90,

    colorDark:"#ffffff",

    colorLight:"#07111f",

    correctLevel:
    QRCode.CorrectLevel.H
});

/* ================================= */
/* PRINT */
/* ================================= */

document
.getElementById("print-resume")
.addEventListener(

"click",

()=>{

    window.print();
});

/* ================================= */
/* PDF DOWNLOAD */
/* ================================= */

document
.getElementById("download-pdf")
.addEventListener(

"click",

async ()=>{

    const body =
    document.body;

    body.classList.add("pdf-mode");

    const element =
    document.getElementById("resume-content");

    const options = {

        margin:[6,6,6,6],

        filename:
        "Loknath_Sai_Gurijala_Resume.pdf",

        image:{
            type:"jpeg",
            quality:1
        },

        html2canvas:{

            scale:2.4,

            useCORS:true,

            backgroundColor:"#07111f",

            scrollY:0
        },

        jsPDF:{

            unit:"mm",

            format:"a4",

            orientation:"portrait"
        },

        pagebreak:{

            mode:[
                "avoid-all",
                "css",
                "legacy"
            ]
        }
    };

    await html2pdf()
    .set(options)
    .from(element)
    .save();

    body.classList.remove("pdf-mode");
});
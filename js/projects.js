const ksaImages = [

    "assets/ksa/monthly_dashboard.png",
    "assets/ksa/catalogue_search.png",
    "assets/ksa/customer_ledger.png",
    "assets/ksa/returns.png",
    "assets/ksa/customer_login.png"

];

/* ================================= */
/* KSA SCREENSHOT CAROUSEL */
/* ================================= */

const ksaSlides = [

{
    image:"assets/ksa/monthly_dashboard.png",
    title:"Monthly Dashboard",
    description:"Business KPIs and operational visibility."
},

{
    image:"assets/ksa/catalogue_search.png",
    title:"Catalog Search",
    description:"Fast token-based search for product discovery."
},

{
    image:"assets/ksa/customer_ledger.png",
    title:"Customer Ledger",
    description:"Track credit, payments and customer history."
},

{
    image:"assets/ksa/returns.png",
    title:"Returns & Refunds",
    description:"Reverse transaction workflows and accountability."
},

{
    image:"assets/ksa/customer_login.png",
    title:"Role Based Access",
    description:"Secure multi-user workflows and permissions."
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

    },4000);
}
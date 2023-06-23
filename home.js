const renderItems=(main) =>{
    const section=document.createElement('div');
    section.innerHTML=`
    <h3>${main.title}</h3>
    <h1>${main.heading}</h1>
    <p>${main.description}</p>
    <button class="btn">vote now</button>
    `
    document.querySelector("#home").appendChild(section)
}

//this is a function that calls back the 
function initialize(){
    home.forEach((main)=>{
        renderItems(main)
    })
}
initialize();

//a scroll event listener which changes the background colour of the navigation bar on scroll
let navbar=document.querySelector('.header')
window.onscroll=()=>{
    if (window.scrollY > 1){
        navbar.classList.add('nav-active');
    }else{
        navbar.classList.remove('nav-active')
    }
}
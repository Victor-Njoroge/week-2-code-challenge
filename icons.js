function renderItems3(icon){
    const area=document.createElement("div")
    area.className="icons"
    area.innerHTML=`
    <i class="${icon.class}"></i>
    <button class="${icon.button}"> vote now</button>
    `
    document.querySelector(".header").appendChild(area)
}

function initialize(){
   icons.forEach((icon) =>{
    renderItems3(icon)
   }) 
}
initialize();

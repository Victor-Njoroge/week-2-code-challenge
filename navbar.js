function renderItems2(link){
    const nav=document.createElement("nav")
    nav.className="navigation"
    nav.innerHTML=`
    <a href="#${link.title}">${link.title}</a>
    `
    console.log(link)
    document.querySelector(".header").appendChild(nav)

}
function initialize(){
   navigation.forEach((link)=>{
    renderItems2(link)
   })
  
}
initialize()

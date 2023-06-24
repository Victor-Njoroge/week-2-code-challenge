
function renderOneAnimal(animal, e){

    const card=document.createElement("div")
    const buttons=document.createElement("div")
    buttons.innerHTML=`
    <button class="display btn">${animal.name}</button>
    ` 
    document.querySelector(".small").appendChild(buttons)
    buttons.querySelector(".display").addEventListener("click", ()=>{
        card.style.display="block"
    })
    card.className="box";
    card.innerHTML=`
    <div>
    <h3 class="heading">${animal.name}</h3>
    <img src="${animal.image}" alt="${animal.name}"/>
    <p>${animal.description}</p>
    <p class="votes">${animal.votes}</p>
    <button class=" donate btn">vote</button>
    <button class=" reset btn">reset</button>
    </div>
    `
    document.querySelector(".box-container").appendChild(card)
    card.querySelector(".donate").addEventListener('click' ,()=>{
        animal.votes+= 1;
        card.querySelector(".votes").textContent =animal.votes
        fetch(`http://localhost:3000/animals/${animal.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({votes:animal.votes})
        })
       
    })

    card.querySelector(".reset").addEventListener("click", ()=>{
        animal.votes*= 0;
        card.querySelector(".votes").textContent =animal.votes
        fetch(`http://localhost:3000/animals/${animal.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({votes:animal.votes})
        })
        
    })

}
const getData = () =>{
   fetch("http://localhost:3000/animals")
   .then((res) =>{
    res.json()
    .then(animals => animals.forEach(animal => renderOneAnimal(animal)))
   })
}
 getData();
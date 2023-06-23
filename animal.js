function renderOneAnimal(animal){
    const card=document.createElement("div")
    card.className="box";
    card.innerHTML=`
    <h3 class="heading">${animal.name}</h3>
    <img src="${animal.image}" alt="${animal.name}"/>
    <p>${animal.description}</p>
    <p class="votes">${animal.votes}</p>
    <button class=" donate btn">vote</button>
    `
    card.querySelector(".donate").addEventListener('click' ,()=>{
        animal.votes+= 1;
        card.querySelector(".votes").textContent =animal.votes
        updateVote(animal)
        
    })
    document.querySelector(".box-container").appendChild(card)
}
const getData = () =>{
   fetch("http://localhost:3000/animals")
   .then((res) =>{
    res.json()
    .then(animals => animals.forEach(animal => renderOneAnimal(animal)))
   })
}

function updateVote(animals){
    fetch(`http://localhost:3000/animals/${animals.id}`,{
        method: 'PATCH',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animals)

    })
    .then(res => res.json())
    .then(animal => console.log(animal))
}

function initialize(){
    getData(); 
    console.log("after data has been fetched and un packed")
}

initialize();
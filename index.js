let navbar=document.querySelector('.header')
window.onscroll=()=>{
    if (window.scrollY > 1){
        navbar.classList.add('nav-active');
    }else{
        navbar.classList.remove('nav-active')
    }
}
/*The above code performs an event action on the principal of scrolling it turn 
the background of the navbar from transparent to black
*/





const renderOneAnimal =(animal) =>{
   
    const buttons=document.createElement("div")
    buttons.innerHTML=`
    <button class="display btn">${animal.name}</button>
    ` 
    document.querySelector(".small").appendChild(buttons)
    buttons.querySelector(".display").addEventListener("click", (e)=>{
        if( card.style.display=="none"){
            card.style.display="block"
        }else{
            card.style.display="none"
        }
        e.preventDefault(card)
    })
    /** */
    const card=document.createElement("div");
    card.className="box";
    card.innerHTML=`
    <h3 class="heading">${animal.name}</h3>
    <img src="${animal.image}" />
    <p>${animal.description}</p>
    <p class="votes">${animal.votes}</p>
    <button class="vote btn"> vote</button>
    <button class="reset btn"> reset</button>

    `
    console.log(card)
    document.querySelector(".box-container").appendChild(card)



    card.querySelector(".vote")
    .addEventListener("click",()=>{
        animal.votes+=1;
        card.querySelector(".votes").textContent=animal.votes
        fetch(`http://localhost:3000/characters/${animal.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({votes:animal.votes})
        })
       
    })
/**The above code allows one to vote and the changes are done to the db.json 
 * once you click the vote button it adds the vote by one
 */
    card.querySelector(".reset") .addEventListener("click",()=>{
        animal.votes*=0;
        card.querySelector(".votes").textContent=animal.votes
        fetch(`http://localhost:3000/characters/${animal.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({votes:animal.votes})
        })
        
    })
/**The above code allows one to reset the votes and the changes are done to the db.json 
 * once you click the vote button it resets the votes back to zero
 */
}

const getData=()=>{
    fetch("http://localhost:3000/characters")
    .then((res)=>{
        res.json()

        .then(characters => characters.forEach(animal =>renderOneAnimal(animal)))
    })
}
getData();

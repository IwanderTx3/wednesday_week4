let full = document.getElementById("fullbtn")   
let starters = document.getElementById("startersbtn")
let entrees = document.getElementById("entreesbtn")
let desserts = document.getElementById("dessertsbtn")
let menu = dishes
let displayMenu = document.getElementById("displayMenu")

full.addEventListener('click',function(){
    fillOutMenu(menu)
})

starters.addEventListener('click',function(){
    let choice = "Starters"
    let filteredmenu = getFiltered(choice)
    fillOutMenu(filteredmenu)
})

entrees.addEventListener('click',function(){
    let choice = "Entrees"
    let filteredmenu = getFiltered(choice)
    fillOutMenu(filteredmenu)
})

desserts.addEventListener('click',function(){
    let choice = "Desserts"
    let filteredmenu = getFiltered(choice)
    fillOutMenu(filteredmenu)
})

fillOutMenu(menu)

function getFiltered(choice){    
    let filteredmenu = menu.filter(function(dishobj){
            if (dishobj.course == choice ){
                return dishobj
            }
    })
    return filteredmenu
}

function fillOutMenu(filteredmenu){
    displayMenu.innerHTML = ''
    filteredmenu.forEach((item)=>{
        let menuItem = `<div class="displayMenuItem">
        <img class="image" src="${item.imageURL}"/>
        <div class="details">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        </div>
        <h4 >${item.price}</h4>
        `
        displayMenu.innerHTML += menuItem
        })
}


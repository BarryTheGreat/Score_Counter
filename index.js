const add1Home = document.getElementById("add1-home")
const add2Home = document.getElementById("add2-home")
const add3Home = document.getElementById("add3-home")

const add1Guest = document.getElementById("add1-guest")
const add2Guest = document.getElementById("add2-guest")
const add3Guest = document.getElementById("add3-guest")

const homeName = document.getElementById("home-name")
const guestName = document.getElementById("guest-name")

const newGame = document.getElementById("new-game")

const btn = document.getElementsByTagName("button")

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0
let flag = false

homeScore.textContent = countHome
guestScore.textContent= countGuest

homeName.textContent = 'HOME'
guestName.textContent = 'AWAY'

function updateGame(){
  if (countHome > countGuest) {
    homeName.innerHTML= "<mark>HOME</mark>"
    guestName.innerHTML = "AWAY";
  } 
  else if (countHome < countGuest) {
    homeName.innerHTML = "HOME"
    guestName.innerHTML = "<mark>AWAY</mark>"
  } 
  else {
    homeName.innerHTML = "HOME"
    guestName.innerHTML = "AWAY"
  }
}

function incrementScore(points, team){
  if(team === 'home'){
    countHome += points
    homeScore.textContent = countHome
  }

  else if(team === 'guest'){
    countGuest += points
    guestScore.textContent = countGuest
  }
  updateGame()
}

add1Home.onclick = () =>{incrementScore(1,"home")}
add2Home.onclick = () =>{incrementScore(2,"home")}
add3Home.onclick = () =>{incrementScore(3,"home")}
add1Guest.onclick = () =>{incrementScore(1,"guest")}
add2Guest.onclick = () =>{incrementScore(2,"guest")}
add3Guest.onclick = () =>{incrementScore(3,"guest")}
  


newGame.onclick = () =>{
  countHome = 0
  countGuest = 0
  homeScore.textContent = countHome
  guestScore.textContent= countGuest
  updateGame()
  flag = true
}





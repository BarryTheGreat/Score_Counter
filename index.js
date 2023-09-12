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

add1Home.onclick = () =>{
  countHome +=1
  homeScore.textContent = countHome
  updateGame()
}


add2Home.onclick = () =>{
  countHome +=2
  homeScore.textContent = countHome
  updateGame()
}

add3Home.onclick = () =>{
  countHome +=3
  homeScore.textContent = countHome
  updateGame()
}

add1Guest.onclick = () =>{
  countGuest +=1
  guestScore.textContent = countGuest
  updateGame()
}


add2Guest.onclick = () =>{
  countGuest +=2
  guestScore.textContent = countGuest
  updateGame()
}

add3Guest.onclick = () =>{
  countGuest +=3
  guestScore.textContent = countGuest
  updateGame()
}


newGame.onclick = () =>{
  countHome = 0
  countGuest = 0
  homeScore.textContent = countHome
  guestScore.textContent= countGuest
  updateGame()
  flag = true
}
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



// btn.onclick = () =>{
//   if(countGuest>0 || countHome>0){
//     while(flag == false){
//       if(countHome>countGuest){
//         homeName.textContent = "<mark>HOME</mark>"
//         guestName.textContent = "AWAY"
//       }

//       else if(countGuest>countHome){
//         guestName.textContent = "<mark>AWAY</mark>"
//         homeName.textContent = "HOME"
//       }
//     }
//   }
// }
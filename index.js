let cards = []

//to get the total value after adding firstcard and secondcard
let sum = 0

//if hasBlackJack got true the game is over
let hasBlackJack = false

//if isAlive is false the game is over
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl =  document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Call this function to start the game! it just handles the starting part of the game
//renderGame function have all the logic
function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()   
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack !== true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard(){
    let randomNum = Math.ceil(Math.random() * 13)
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function rules(){
    window.alert("The goal is to get sum 21.\nIf you get less than 21 you can draw a new card.\nIf sum exceeds 21 you'll lose.")
}





import {DynamicArray, ListNode, LinkedList, Stack} from "../data_structures.js";

var decks = new DynamicArray()// Here we will store the decks (not the cards) a set of
// cards is a deck

class Deck {
    constructor(name,cards=null){
        this.name = name
        this.cards = new DynamicArray()
    }
}

class Card {
    constructor(question, answer) {
        this.question = question
        this.answer = answer

    }
}

function CreateDeck() {
    const name = prompt(`Introduce el nombre del mazo de preguntas`)
    let new_deck = new Deck(name)
    decks.Append(new_deck)
}

function DisplayDecks() {
    let DecksLength = decks.array.length
    let displayDecks = 'Mazos disponibles:\n'
    for (let i = 0; i< DecksLength; i++) {
        let deck = decks.array[i]
        displayDecks += `${i+1} - ${deck.name}\n`
    }
    alert(displayDecks)
}

function AddQuestions(deck) {
    while (true) {
        const question = prompt(`Introduce la pregunta que quieres incorporar`)
        const answer = prompt(`Introduce la respuesta a la pregunta`)
        
        let new_card = new Card(question,answer)
        deck.cards.Append(new_card)

        const wantMore = prompt(`Escribe el número de la acción que deseas realizar
        1) Añade más preguntas
        2) Salir`)

        if (wantMore == 2) {
            return
        }
    }
}


function AnswerDeck(deck) {
    let preguntas_siguientes = new Stack()
    preguntas_siguientes.array = deck.cards.array.slice().reverse()
    
    let preguntas_pasadas = new Stack()

    let current = preguntas_siguientes.array[preguntas_siguientes.array.length - 1]
    while (current != undefined) {
        const action = prompt(`${current.question}
        Escribe el número de la acción que deseas realizar
        1) Mostrar respuesta
        2) Siguiente pregunta
        3) Pregunta pasada`)

        if (action == 1) { // Mostrar respuesta
            let X = preguntas_siguientes.Pop()
            alert(`La repuesta es:
            ${X.answer}`)
            if (preguntas_siguientes.array == []){
                preguntas_siguientes.array = preguntas_pasadas.array.slice()
                preguntas_pasadas.array = []
            }
        } else if(action == 2) { // Siguiente pregunta
            if (preguntas_siguientes.array.length > 1) {
                let X = preguntas_siguientes.Pop()
                preguntas_pasadas.Push(X)
            }
        } else if(action == 3){ // Pregunta pasada
            if (preguntas_pasadas.array.length > 0) {
                let X = preguntas_pasadas.Pop()
                preguntas_siguientes.Push(X)
            }
        } else {
            return
        }
        current = preguntas_siguientes.array[preguntas_siguientes.array.length - 1]
    }
}


function main() {
    while (true){

        alert("To Do List: Presiona aceptar para continuar")
        const first_action = prompt(`Escribe el número de la acción que deseas realizar
        1) Añade un mazo de preguntas
        2) Seleccionar mazo de preguntas
        3) Salir`)
        
        if (first_action == '1'){
            CreateDeck()
        } else if (first_action == '2') {
            DisplayDecks()
            const choose_deck = prompt(`Escribe el número de mazo`)
            const second_action = prompt(`Escribe el número de la acción que deseas realizar
            1) Añadir preguntas al mazo
            2) Contestar las preguntas`)

            const deck_chosen = decks.array[parseInt(choose_deck)-1]
            if (second_action == 1){
                AddQuestions(deck_chosen)
            } else if(second_action == 2) {
                AnswerDeck(deck_chosen)
            }

        } else {
            break;
        }
    }
}

main();
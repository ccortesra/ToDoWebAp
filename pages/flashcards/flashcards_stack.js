import {DynamicArray, ListNode, LinkedList, Stack, Queue} from "../data_structures.js";

var pensums = new DynamicArray()// Global vars that contains the pensums
// created 
var decks = new DynamicArray()// Here we will store the decks (not the cards) a set of
// cards is a deck

class Pensum {
    constructor(name,decks=null,deckscount=null){
        this.name = name
        this.decks = new Queue()
        this.deckscount = 0
    }
}

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
    return displayDecks
}

// Checked 

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

    // Fullfulling preguntas_siguientes stack
    for (let i = deck.cards.array.length - 1; i >= 0; i--) {
        preguntas_siguientes.PushBack(deck.cards.array[i])
    }
    
    let preguntas_pasadas = new Stack()

    let current = preguntas_siguientes.tail.key
    while (current != undefined) {
        const action = prompt(`${current.question}
        Escribe el número de la acción que deseas realizar
        1) Mostrar respuesta
        2) Siguiente pregunta
        3) Pregunta pasada`)

        if (action == 1) { // Mostrar respuesta
            let X = preguntas_siguientes.Pop()
            alert(`La repuesta es:
            ${X.key.answer}`)

            // Si el stack de preguntas siguientes está vacio
            if (preguntas_siguientes.head == null){
                
                // Pasando todas las preguntas de pasadas a siguientes
                let p = preguntas_pasadas.tail
                while (p) {
                    p = preguntas_pasadas.Pop()
                    if (p!= undefined && p!= false){
                        preguntas_siguientes.Push(p.key)
                    }
                }

                preguntas_pasadas.head = null
                preguntas_pasadas.tail = null
            }
        } else if(action == 2) { // Siguiente pregunta
            if (preguntas_siguientes.Size() > 1) {
                let X = preguntas_siguientes.Pop()
                preguntas_pasadas.Push(X.key)
            }
        } else if(action == 3){ // Pregunta pasada
            if (preguntas_pasadas.Size() > 0) {
                let X = preguntas_pasadas.Pop()
                preguntas_siguientes.Push(X.key)
            }
        } else {
            return
        }

        try {
            current = preguntas_siguientes.tail.key
        } catch(error) {
            current = undefined
        }
        
    }
}

function CreatePensum() {
    const name = prompt(`Introduce el nombre del pensum`)
    let new_pensum = new Pensum(name)
    pensums.Append(new_pensum)
}

function DisplayPensums() {
    let PensumsLength = pensums.array.length
    let displayPensums = 'Pensums disponibles:\n'
    for (let i = 0; i< PensumsLength; i++) {
        let pensum = pensums.array[i]
        displayPensums += `${i+1} - ${pensum.name}\n`
    }
    alert(displayPensums)
    return displayPensums
}

// Checked

function AddDeck(pensum) {
    while (true) {
        const decks_available = DisplayDecks()
        const question = prompt(`Introduce el número de mazo a agregar
        ${decks_available}`)
        
        let new_deck = decks.array[parseInt(question)-1]
        pensum.decks.Enqueue(new_deck)

        const wantMore = prompt(`Escribe el número de la acción que deseas realizar
        1) Añade más mazos
        2) Salir`)

        if (wantMore == 2) {
            return
        }
    }
}

function AnswerPensum(pensum) {
    while (true) {
        const next_deck = pensum.decks.TopFront()
        if (next_deck != false) {
            const action = prompt(`Escribe el número de acción que deseas realizar
            1) Resolver el siguiente mazo: ${next_deck}
            2) Salir`)
            
            if (action == 1) {
                AnswerDeck(next_deck)
                pensum.decks.Dequeue()
            } else {
                return
            }
        } else {
            alert(`Felicidades ! Has resuelto todos tus mazos`)
            return
        }

        
    }
    
    

}

function main() {
    while (true){

        alert("To Do List: Presiona aceptar para continuar")
        const first_action = prompt(`Escribe el número de la acción que deseas realizar
        1) Añade un mazo de preguntas
        2) Seleccionar mazo de preguntas
        3) Crear Pensum
        4) Seleccionar Pensum
        5) Salir`)
        
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

        } else if(first_action == '3') {
            CreatePensum()
        } else if(first_action == '4') {
            DisplayPensums()
            const choose_pensum = prompt(`Escribe el número de pensum`)
            const second_action = prompt(`Escribe el número de la acción que deseas realizar
            1) Añadir mazos al pensum
            2) Resolver pensum`)
            const pensum_chosen = pensums.array[parseInt(choose_pensum)-1]
            if (second_action == 1){
                AddDeck(pensum_chosen)
            } else if(second_action == 2) {
                AnswerPensum(pensum_chosen)
            }
        } else {
            break;
        }
    }
}

main();
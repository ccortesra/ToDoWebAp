import {DynamicArray, ListNode, LinkedList} from "./data_structures.js";

var decks = new DynamicArray()// Here we will store the decks (not the cards) a set of
// cards is a deck


class Deck {
    constructor(name,cards=null,answer=null){
        this.name = name
        this.cards = new LinkedList()
        this.answers = new DynamicArray()
    }
}

function CreateDesk () {
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

function AddQuestions (deck) {

    while (true) {
        const question = prompt(`Introduce la pregunta que quieres incorporar`)
        deck.cards.PushBack(question)
        const answer = prompt(`Introduce la respuesta a la pregunta`)
        deck.answers.Append(answer)

        const wantMore = prompt(`Escribe el número de la acción que deseas realizar
        1) Añade más preguntas
        2) Salir`)

        if (wantMore == 2) {
            return
        }

    }
}

function AnswerDeck(deck) {
    let p = deck.cards.head
    let i = 0 // index of answer array
    while (true) {
        alert(`Despues de leer la pregunta, presiona aceptar
        ${p.key}`)
        const action = prompt(`${p.key}
        Escribe el número de la acción que deseas realizar
        1) Mostrar respuesta
        2) Siguiente pregunta
        3) Pregunta pasada`)
        if (action == 2 && p.next != null) {
            p = p.next
            i += 1
        } else if(action == 3 && p.prev != null) {
            p = p.prev
            i -= 1
        } else if(action == 1 && p != null){
            alert(`La respuesta es
            ${deck.answers.array[i]}`)
            p = p.next
            i+= 1
            
        }
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
            CreateDesk()
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

main()
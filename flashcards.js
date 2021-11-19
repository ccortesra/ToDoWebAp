import {DynamicArray, ListNode, LinkedList} from "./data_structures.js";

var decks = [] // Here we will store the decks (not the cards) a set of
// cards is a deck
var name_decks = [] // The names of each deck


function CreateDesk () {
    const name = prompt(`Introduce el nombre del mazo de preguntas`)
    let new_deck = new LinkedList()
    name_decks.push(name)
    decks.push(new_deck)
}

function AddQuestions () {
    more = true
    while (more == true) {
        const question = prompt(`Introduce la pregunta que quieres incorporar`)
    }

    

}

function AnswerDesk() {

}


function main() {
    while (true){
        

        alert("To Do List: Presiona aceptar para continuar")
        const first_action = prompt(`Escribe el número de la acción que deseas realizar
        1) Añade un mazo de preguntas
        2) Seleccionar mazo de preguntas`)
        
        if (first_action == '1'){
            CreateDesk()
        } else {
            const second_action = prompt(`Escribe el número de la acción que deseas realizar
            1) Añadir preguntas al mazo
            2) Contestar las preguntas`)
        }


    }


}

main()
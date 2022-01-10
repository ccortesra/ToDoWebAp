import {DynamicArray, ListNode, LinkedList, Stack} from "../data_structures.js";



class ListThings extends LinkedList {
    
    constructor(props){
        super(props);
    }
    
    AddTask() {
        const task = prompt(`Introduce la tarea a realizar`)
        this.PushBack(task)
        alert("Tarea añadida satsfactoriamente")
    }

    Display() {
        let p = this.head
        let listOfThings = 'Tienes esta lista de tareas:\n'
        let i = 1
        while (p != null){
            listOfThings += `${i} ${p.key}\n`
            p = p.next
            i += 1 
        } 
        alert(listOfThings)
    }

    Delete() {
        let p = this.head
        let listOfThings = 'Tienes esta lista de tareas:\n'
        let i = 1
        while (p != null){
            listOfThings += `${i} ${p.key}\n`
            p = p.next
            i += 1 
        } 
        const number = parseInt(prompt(`Escribe el número de la tarea a eliminar:
        ${listOfThings}`))

        let j = 1
        let curr = this.head

        while (curr != null) {
            if (j == number){
                if (j == 1) {
                    this.head = curr.next
                } else {
                    let prev = curr.prev
                    let nxt = curr.next
                    prev.next = nxt
                    nxt.prev = prev
                }
                return
            } else {
                curr = curr.next
                j += 1
            }

        }
    }
}

function main() {
    let MyList = new ListThings() 
    while (true) {
        alert("To Do List: Presiona aceptar para continuar")
        const first_action = prompt(`Escribe el número de la acción que deseas realizar
        1) Añadir una tarea 
        2) Ver mis tareas
        3) Quitar tarea
        4) Salir`)

        if (first_action == "1") {
            MyList.AddTask();
        } else if(first_action == "2"){
            MyList.Display();
        }else if (first_action == "3") {
            MyList.Delete()
        } else if(first_action == "4"){
            return
        }
    }
}

main();
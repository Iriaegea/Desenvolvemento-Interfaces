let ul = document.getElementById("lista")

const arrayTarefas =["Tarea1", "Tarea2", "Tarea3"]

arrayTarefas.forEach((tarea) => {
    let li= document.createElement(li)
    li.innerText = tarea
    ul.appendChild("li")
})







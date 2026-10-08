
let boton = document.getElementById("agregar")
let ul = document.getElementById("lista")

const arrayTarefas =["Tarea1", "Tarea2", "Tarea3"]

boton.addEventListener("click", () =>{
   
    let li= document.createElement("li")
    li.innerText = "tareaNueva"
    ul.appendChild(li)
    

})











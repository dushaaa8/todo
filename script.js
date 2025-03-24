document.addEventListener("DOMContentLoaded", function () {
    let createBtn = document.querySelector('.todo-btn')
    let input = document.querySelector(".todo-input")
    let list = document.querySelector(".todo-list")

    const placeholders = [
        '|',
        'a|',
        'ad|',
        'add|',
        'add a|',
        'add a t|',
        'add a ta|',
        'add a tas|',
        'add a task|',
        'add a task.|',
        'add a task..|',
        'add a task...|',
        'add a task...',
    ];
    let index = 0;

    setInterval(() => {
        if (index < placeholders.length) {
            input.setAttribute("placeholder", placeholders[index]);
            index++;
        } else {
            clearInterval(interval); // Останавливаем анимацию перед выходом за массив
        }
    }, 350);

    createBtn.addEventListener("click", function(event){
        // not refresh
        event.preventDefault()

        if(input.value !== ""){

            addTask(input.value)
            // clear the input field after creating task
            input.value = ""


        }
    })

    function addTask(inputText){
        // creating task container
        let task = document.createElement('div')
        task.classList.add('todo')

        // task text for container
        let taskText = document.createElement('li')
        taskText.textContent = inputText

        // btns for container
        let doneBtn = document.createElement('button')
        doneBtn.classList.add('btn', 'done')
        doneBtn.innerHTML =  '<i class="fa-solid fa-check"></i>'

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('btn', 'delete')
        deleteBtn.innerHTML= '<i class="fa-solid fa-trash"></i>'


        // adding elements to container
        task.appendChild(taskText)
        task.appendChild(doneBtn)
        task.appendChild(deleteBtn)

        list.appendChild(task)

        doneBtn.addEventListener("click", function (){
            taskText.classList.toggle('confirmed')
        })

        // delete btn does delete
        deleteBtn.addEventListener("click",function (event){
            task.remove()
        })

    }


});
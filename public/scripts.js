const todo = document.querySelector('.text'),
addBtn = document.querySelector('.add-button'),
list = document.querySelector('.todo-list')

addBtn.addEventListener('click', async (event) => {
    event.preventDefault()

    let userTodo = todo.value

    if(!userTodo) return

    try{
            const newTodoResponse = await fetch('/todos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: userTodo
                })
            })

        if(newTodoResponse.ok){

            let newTodoData = await newTodoResponse.json()
            
                const li = document.createElement('li')
                li.textContent = `${userTodo}`
                li.dataset.id = newTodoData._id
                list.appendChild(li)
        }else{
            console.log("Falied to add")
        }
    }catch(error){
        console.log(error)
    }
})

window.addEventListener('load', async () => {
    try {
        const allTodosResponse = await fetch('/alltodos');
        const allTodosData = await allTodosResponse.json();
        allTodosData.forEach(todo => {
            const li = document.createElement('li')
            li.textContent = `${todo.text}`
            li.dataset.id = todo._id
            list.appendChild(li)

            const deleteButton = document.createElement('button')   
            deleteButton.textContent = 'Delete'
            deleteButton.classList.add('deleteButton')
            li.appendChild(deleteButton)
            
            deleteButton.addEventListener('click', async()=>{
                const id = li.dataset.id

                try{
                    const response  = await fetch(`/todos/${id}`, {
                        method: "DELETE"
                    })
                    
                    if(response.ok){
                        console.log('Todo deleted')
                        list.removeChild(li);
                    }
                }catch(error){
                    console.log(error)
                }
        })
        })
    } catch (error) {
        console.log(error)
    }
})



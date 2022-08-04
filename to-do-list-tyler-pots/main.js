window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form"); 
    const input = document.querySelector("#new-task-input"); 
    const tasks = document.querySelector("#tasks"); 

    form.addEventListener('submit', (e) => {
        //prevent default stops the submission button from refreshing the page 
        e.preventDefault(); 
        
        const addedTask = input.value;
        // if there is no value that was input into the input bar, alert fill out a task 
        if(!addedTask){
            alert("Please fill out the task"); 
            return; 
        }

        // create the added list item and display it on the screen 
        const task_el = document.createElement("div"); 
        task_el.classList.add("task"); 

        const task_content_el = document.createElement("div"); 
        task_content_el.classList.add("content"); 

        task_el.appendChild(task_content_el); 

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text"; 
        task_input_el.value = addedTask; 
        task_input_el.setAttribute("readonly", "readonly"); 

        task_content_el.appendChild(task_input_el); 

        const action_el = document.createElement("div"); 
        action_el.classList.add("actions"); 

        const edit_el = document.createElement("button"); 
        edit_el.classList.add("edit"); 
        edit_el.innerText = "Edit"; 

        const delete_el = document.createElement("button"); 
        delete_el.classList.add("delete"); 
        delete_el.innerText = "delete"; 

        action_el.appendChild(edit_el); 
        action_el.appendChild(delete_el); 

        task_el.appendChild(action_el);
        tasks.appendChild(task_el); 

        input.value = ""; 

        edit_el.addEventListener('click', () => {
            if(edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly"); 
                task_input_el.focus(); 
                edit_el.innerText = "Save";
                console.log("this got changed to save ")
            } else{
                task_input_el.setAttribute("readonly", "readonly"); 
                edit_el.innerText = "Edit";
                console.log("this got changed to edit")
            }
        })

        delete_el.addEventListener('click', () => {
            tasks.removeChild(task_el); 
        })
    })
})
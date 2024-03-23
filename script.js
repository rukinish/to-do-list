const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {

    if (inputBox.value === '') {
        alert("Enter some data");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; ///user enetered  value 
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value=""; //remove entered value
    saveTask();
    
}

listContainer.addEventListener("click",function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();  
    } else if(e.target.tagName === "SPAN")
    e.target.parentElement.remove();
    saveTask();  
});

   //save tasks
   function saveTask() {
    localStorage.setItem("data",listContainer.innerHTML);
   }

   //after reload the webpage to still show the previous tasks

   function showTask() {
    listContainer.innerHTML=localStorage.getItem("data");

   }

   showTask();

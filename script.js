var container = document.querySelector(".text-here"); //point to our div with the text-here class
var addItem = document.querySelector("#add-item"); //point to our add item button
var removeLastItem = document.querySelector("#remove-last-item"); //point to our remove item button
var removeFirstItem = document.querySelector("#remove-first-item"); //point to our remove first item button
var toDoList = document.createElement("ol"); //create ordered list
var userInput = document.querySelector("#user-input");//point to our input textbox

container.appendChild(toDoList); //add our to do list to our container div


//on click of add-item button
addItem.addEventListener("click", function(){
    var li = document.createElement("li"); //create list item
    li.textContent = userInput.value; //populate our list item using our user input
    toDoList.appendChild(li); //add populated list item to our to do list
    userInput.value = ""; //clear input field for next item
})


//remove the last item in the list on click of button
removeLastItem.addEventListener("click", function(){
    var lastOne = toDoList.lastChild;
    toDoList.removeChild(lastOne);
})

//remove first item in the list on click of button
removeFirstItem.addEventListener("click", function(){
    var firstOne = toDoList.firstChild;
    toDoList.removeChild(firstOne);
})

userInput.addEventListener("keydown", function(event){
        var key = event.key;
        if (key === "Enter"){
            event.preventDefault();
            var li = document.createElement("li"); //create list item
            li.textContent = userInput.value; //populate our list item using our user input
            toDoList.appendChild(li); //add populated list item to our to do list
            userInput.value = ""; //clear input field for next item
        }

})



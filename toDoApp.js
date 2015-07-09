/*author: Sredna Kunowski 7/5/2015*/

//when add note button is clicked a new bullet point pops up to enter in info
$(function()
{
    var theList = document.getElementById("theList");
    loadToDo();

    $("#addNote").click(function()
    {
        $("#theList").append("<li> </li>");
    });    

    //When the save button is clicked user's added data is stored in local storage
    $("#save").click(function()
    {
        localStorage.setItem("toDoList", theList.innerHTML);
    });

    //update changes to the list
    function loadToDo() 
    {
        if (localStorage.getItem("toDoList"))
        {
            theList.innerHTML = localStorage.getItem("toDoList");
        }
    }
});
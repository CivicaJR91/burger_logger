$(function () {

    //On click devoured button change to true 
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id"); //partial handlebars data-id
        var DevourStatus = {
            devoured: true
        };
     //call to make the updaye
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: DevourStatus
           
        }).then(function () {
            location.reload();
        });
    });

    //On input and click on submit button add new burger to the list
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#burger").val().trim(),
            
        };

        //POST TO ENTER NEW BURGER AND REALOAD WITH UPDATED LIST
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then (function(){
            console.log("New Burger Created" + newBurger);
            location.reload();
        })

    })

})
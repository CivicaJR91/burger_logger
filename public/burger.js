$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var DevourStatus = {
            devoured: newDevour
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: DevourStatus
        }).then(function () {
            console.log("Change to", newDevour);
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#burger").val().trim(),
            // devoured: $("[burger_name]:checked").val().trim()
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
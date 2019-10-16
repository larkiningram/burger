// import { pathToFileURL } from "url";

$(function () {
    $("#sub-btn").on("click", function (event) {
        event.preventDefault;

        var newBurg = {
            burger_name: $("#burgName").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.post("/api/burgers", newBurg, function (data) {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        console.log("hi")

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }, function () {
            console.log("changed devoured to", newDevour);
            // Reload the page to get the updated list
            location.reload();
        }
        );

    });

})

// import { pathToFileURL } from "url";

$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault;

        var newBurg = {
            burger_name: $("#burgName").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
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

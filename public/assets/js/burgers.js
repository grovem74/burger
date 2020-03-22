// wait until the DOM is loaded to attach handlers
$(document).ready(function () {
  $(".devour").on("click", function (event) {
    event.preventDefault();
    $("#devourMesssage").text("YUM!");
    var id = $(this).data("id");
    var newState = $(this).data("devoured");
    var newDevouredState = {
      devoured: newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
 
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: 0
    };
    console.log("newBurger", newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})


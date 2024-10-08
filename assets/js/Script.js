$(document).ready(function() {
    $("#subscribeButton").click(function() {
      
      $("#error-message").hide().text("");

      var name = $("#name").val().trim();
      var phone = $("#phone").val().trim();

      if (name === "" || phone === "") {
        $("#error-message").text("Please fill in all fields.").show();
      } else {
        alert("Subscription successful for: " + name + " with phone number: " + phone);
      }
    });
  });
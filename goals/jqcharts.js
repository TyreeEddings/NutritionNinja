$(document).ready(function() {
    // Hide the charts when the page loads
    $(".charts").hide();
  
    // Show charts when the button is clicked
    $("#chartsbtn").click(function() {
      $(".charts").show();
    });
});

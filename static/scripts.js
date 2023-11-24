//jshint version6
$('body').css("background-color", "darkGrey");
$('#log').click(function(){
   const user_id = String($('#user_id').val());
   const password = "mike";
   alert(user_id);
   if (user_id == password) {
      colorYellow();
   };
  });
  function colorYellow(){
   $('body').addClass("yellow");

//change color by changing class//
$('body').css("background-color", "yellow");
function myFunction() {
   var element = document.getElementsByClassName("body");
   element.classList.toggle("mystyle");
 }
  }
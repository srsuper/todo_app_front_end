$(document).ready(function () {
2 
  $('.dropdown-toggle').dropdown();
3 

4 
  $(".dropdown-item").click(function(){
5 
    $('#dropdownMenuButton').html($(this).text());
6 
  });
7 
});
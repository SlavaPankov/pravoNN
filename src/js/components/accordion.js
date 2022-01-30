import $ from "jquery";

$(document).ready(function(){
  $( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
  $('.agency__accordion').accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
})



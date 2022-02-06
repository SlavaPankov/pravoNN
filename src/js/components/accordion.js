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

if (window.innerWidth <= 576) {
  $('.accordion-left').accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  })
  $('.accordion-right').accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  })
}

window.addEventListener('resize', (e) => {
  if (window.innerWidth <= 576) {
    $('.accordion-left').accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
    })
    $('.accordion-right').accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
    })
  }
  if (window.innerWidth > 576) {
    $('.accordion-left').accordion('destroy');
    $('.accordion-right').accordion('destroy');
  }
})

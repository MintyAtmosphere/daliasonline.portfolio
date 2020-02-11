// window.onscroll = function() {myFunction()};
// window.onscroll = function() {sticky_bar()};

// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";
//   }

$.fn.isOnScreen = function() {
  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom
  );
};

var $body = $("body");

$(window).scroll(function() {
  const nav = $(".nav");
  const project1 = $(".project1");
  const project2 = $(".project2");
  const project3 = $(".project3");
  const project4 = $(".project4");

  if (project1.isOnScreen()) {
    var color = $(project1).attr("data-background-color");
    $body.css("background-color", color);
  }
  if (nav.isOnScreen()) {
    $body.css("background-color", "white");
  }
  if (project2.isOnScreen()) {
    var color = $(project2).attr("data-background-color");
    $body.css("background-color", color);
  }
  // if (project3.isOnScreen()) {
  //   var color = $(project3).attr("data-background-color");
  //   $body.css("background-color", color);
  // }
  if (project4.isOnScreen()) {
    var color = $(project4).attr("data-background-color");
    $body.css("background-color", color);
  }
});





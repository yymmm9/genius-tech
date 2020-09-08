let body = document.getElementsByTagName('body')[0];

let cursor = document.createElement('script');
    cursor.setAttribute('type', 'text/javascript');
    cursor.setAttribute('src', '/lib/context-v0.js');

function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    body.append(cursor);
    return false;  
  }  
}
is_touch_device()


// if (is_touch_device() = false){
//   console.log("hi")
// }
// else{
//   console.log*('bye');
// }





// $("#toggle").click(function() {
//   $(this).toggleClass("active");
//   $(".overlay").toggleClass("open");
//   $("body").toggleClass("no-scroll");
// });

// jQuery(function($) {
//   "use strict";

//   var win = $(window),
//     target = $("body"),
//     wrapper = target.find("> main"),
//     easing = "cubic-bezier(.31,.69,.41,.96)", //css easing
//     duration = ".7s", //duration ms(millisecond) or s(second)
//     top = 0,
//     kineticScroll = {
//       _init: function() {
//         if (wrapper.length == 1) {
//           target.height(wrapper.height());
//           wrapper.css({
//             transition: "transform " + duration + " " + easing,
//             position: "fixed",
//             top: "0",
//             left: "0",
//             right: "0",
//             zIndex: "2"
//           });

//           win.on({
//             scroll: function() {
//               kineticScroll._scroll();
//             },
//             resize: function() {
//               target.height(wrapper.outerHeight());
//             }
//           });

//           kineticScroll._scroll();
//         }
//       },
//       _scroll: function() {
//         top = win.scrollTop();
//         wrapper.css("transform", "translateY(-" + top + "px)");
//         console.log(top);
//       }
//     };

//   if (typeof window.ontouchstart == "undefined") {
//     kineticScroll._init();
//   } else {
  
//   }
// });

  // var Scrollbar = window.Scrollbar;

  // var options = {
  //   'damping': 0.07
  // }

  // Scrollbar.init(document.querySelector('#momentum'), options);


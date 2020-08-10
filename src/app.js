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


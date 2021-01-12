function getPhoto(a) {
  
  // validation for instagram usernames
//   var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
//   var validation = regex.test(a);

//   if(validation) {
  
    $.get("https://www.instagram.com/"+a+"/?__a=1")
    .done(function(data) { 

      // getting the url
      var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];

      // update img element

			$(".instagram--profile").css("background-image","url('"+photoURL+"')");
					
     
     })
    .fail(function() { 
      // code for 404 error 
      alert('Username was not found!')
    })
  
//   } else {
  
//     alert('The username is invalid!')
//   }

}

getPhoto("geniustech.info");


$(document).ready(function() {

   // Make sure dialog is initially hidden:
   $('#dialog').dialog({autoOpen: false});

    // Check for the "whenToShowDialog" cookie, if not found then show the dialog and save the cookie.
    // The cookie will expire and every 2 days and the dialog will show again.

    if ($.cookie('whenToShowIg') == null) {

        // Create expiring cookie, 2 days from now:
        $.cookie('whenToShowIg', 'yes', { expires: 2, path: '/' });

        // Show dialog
       
        document.getElementById('pricing').classList.add("show");
	      document.getElementById('block').classList.add("show");     
    }

});

document.querySelector("#block, .dragger").addEventListener("click", (event) => {
	document.getElementById('pricing').classList.remove("show");
	document.getElementById('block').classList.remove("show");
});
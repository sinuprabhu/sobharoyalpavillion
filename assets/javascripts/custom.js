$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
   
$(document).ready(function(){

	if(document.location.search.length) {
	    // query string exists
	    $('.success-alert').removeClass("d-none");
	} else {
	    // no query string exists
	}
});


(function() {

	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	// if ( $('#error').length !== 0 ) {

	// }

})();

$(document).ready(function() {

	$('#error').removeClass('hide-header');

});
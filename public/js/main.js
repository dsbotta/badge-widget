
(function() {

	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

})();

$(document).ready(function() {

	if ( $('#error').length !== 0 ) {

		$('#error').removeClass('hide-header');

	}

});

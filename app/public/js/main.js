 $(document).ready(function() {	

	$('#try-me').on("click", function(){
		$("#middle-guy").toggleClass('active');
		$("#right-info").toggleClass('active');
		$("#left-info").toggleClass('active');
		$("#try-me").toggleClass('active');
		$("#swap").toggleClass('active');
		$("#swap").text("Get a Job Done");
		/*$('#swap').text( $(this).text("geg") );*/
	});


	$('#trigger').on("click", function(){
		$('#terms').show('slower');
		$('body,html').toggleClass('active');
	});

	$('#closer').on("click", function(){
		$('#terms').hide('slower');
		$('body,html').toggleClass('active');
	});

});
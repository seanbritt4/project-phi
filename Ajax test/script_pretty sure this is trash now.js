
$(function() {
	// GET/READ
	$('#submit').on('click', function() {
		$.ajax({
			url: '/products',
			contentType: 'application/json',
			success: function(response) {
				console.log(response);
			}
		});
	});
});


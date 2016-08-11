function showResources() {
	$('.selected').removeClass('selected');
	$('#resourcesNav').addClass('selected');
	$('#biography').css("display", "none");
	$('#resources').css("display", "inline-block");
}

function showBiography() {
	$('.selected').removeClass('selected');
	$('#biographyNav').addClass('selected');
	$('#resources').css("display", "none");
	$('#biography').css("display", "inline-block");
}

$(document).ready(function() {
	var imgs = new Array();
	var intervalID;

	var imgList = [
		"images/logo2.png",
		"images/digital_2.png",
		"images/digital_3.png"
	]

	$("#slides").backgroundSlideshow({
		images: imgList,
		delay: 3000
	})
});

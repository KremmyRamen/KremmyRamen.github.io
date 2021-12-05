$(document).ready(function() {
	var imgs = new Array();
	var intervalID;

	var imgList = [
		"images/digital_2.jpg",
		"images/digital_2.jpg",
		"images/digital_3.jpg"
	]

	$("#slides").backgroundSlideshow({
		images: imgList,
		delay: 3000
	})
});


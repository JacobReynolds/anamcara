var carouselIndex = 0;
var carouselLimit = $('.carouselInfo').length - 1

function carouselLeft() {
	prevCarouselIndex = carouselIndex;
	if (carouselIndex == 0) {
		carouselIndex = carouselLimit;
	} else {
		carouselIndex--;
	}
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
		"left": "65vw"
	})
	$($('.carouselInfo')[prevCarouselIndex]).animate({
		left: '-65vw'
	}, 500, "linear")
	$($('.carouselInfo')[carouselIndex]).animate({
		left: '0px'
	}, 500, "linear")
}

function carouselRight() {
	prevCarouselIndex = carouselIndex;
	if (carouselIndex == 0) {
		carouselIndex = carouselLimit;
	} else {
		carouselIndex--;
	}
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
		"left": "-65vw"
	})
	$($('.carouselInfo')[prevCarouselIndex]).animate({
		left: '65vw'
	}, 500, "linear")
	$($('.carouselInfo')[carouselIndex]).animate({
		left: '0px'
	}, 500, "linear")
}

function initCarousel() {
	var test = $('.carouselInfo')[0];
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block"
	})
}

initCarousel();

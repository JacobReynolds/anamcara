var carouselIndex = 0;
var carouselLimit = $('.carouselInfo').length - 1
var carouselTimeout = 0;

function carouselLeft() {
	if (carouselTimeout) return;
	carouselTimeout = 1;
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

	initSidewaysHeader()

	$($('.carouselInfo')[prevCarouselIndex]).animate({
		left: '-65vw'
	}, 500, "linear")
	$($('.carouselInfo')[carouselIndex]).animate({
		left: '0px'
	}, 500, "linear")

	setTimeout(function () {
		carouselTimeout = 0;
	}, 500)
}

function carouselRight() {
	if (carouselTimeout) return;
	carouselTimeout = 1;

	prevCarouselIndex = carouselIndex;
	if (carouselIndex == carouselLimit) {
		carouselIndex = 0;
	} else {
		carouselIndex++;
	}
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
		"left": "-65vw"
	})
	initSidewaysHeader()

	$($('.carouselInfo')[prevCarouselIndex]).animate({
		left: '65vw'
	}, 500, "linear")
	$($('.carouselInfo')[carouselIndex]).animate({
		left: '0px'
	}, 500, "linear")

	setTimeout(function () {
		carouselTimeout = 0;
	}, 500)
}

function initCarousel() {
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
	})
	initSidewaysHeader()

}

//Initializes the current sideways header
//Cannot do beforehand because the elements are display: none
function initSidewaysHeader() {
	var header = $('.carouselInfo .sidewaysHeader')[carouselIndex];
	var elementHeight = $(header).height();
	var elementWidth = $(header).width();
	elementOffset = (elementWidth / 2) - (elementHeight / 2);
	$(header).css({
		"left": elementOffset + "px"
	});
}

$(window).resize(function () {
	initSidewaysHeader()
})

$(document).ready(function () {
	initCarousel();
})

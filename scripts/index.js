var carouselIndex = 0;
var carouselLimit = $('.carouselInfo').length - 1
var carouselTimeout = 0;
var slideOffFactor = 100;
var carouselAnimationTime = 1000;

function carouselRight(slide, recurse) {
	if (carouselTimeout) return;
	carouselTimeout = 1;

	prevCarouselIndex = carouselIndex;

	if (slide != null) {
		carouselIndex = slide;
	} else {
		if (carouselIndex == carouselLimit) {
			carouselIndex = 0;
		} else {
			carouselIndex++;
		}
		slide = carouselIndex;
	}
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
		"left": slideOffFactor + "vw"
	})

	initSidewaysHeader()

	$($('.carouselInfo')[prevCarouselIndex]).animate({
		left: -slideOffFactor + 'vw'
	}, carouselAnimationTime, "linear")
	$($('.carouselInfo')[carouselIndex]).animate({
		left: '0px'
	}, carouselAnimationTime, "linear")

	setTimeout(function () {
		carouselTimeout = 0;
		if (recurse) {
			carouselRight(++slide, --recurse)
		}
	}, carouselAnimationTime)

	initButtons(prevCarouselIndex);
}

function carouselLeft(slide, recurse) {
	if (carouselTimeout) return;
	carouselTimeout = 1;

	prevCarouselIndex = carouselIndex;
	if (slide != null) {
		carouselIndex = slide;
	} else {
		if (carouselIndex == 0) {
			carouselIndex = carouselLimit;
		} else {
			carouselIndex--;
		}
		slide = carouselIndex;
	}
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
		"left": -slideOffFactor + "vw"
	})
	initSidewaysHeader()

	$($('.carouselInfo')[prevCarouselIndex]).animate({
		left: slideOffFactor + 'vw'
	}, carouselAnimationTime, "linear")
	$($('.carouselInfo')[carouselIndex]).animate({
		left: '0px'
	}, carouselAnimationTime, "linear")

	setTimeout(function () {
		carouselTimeout = 0;
		if (recurse) {
			carouselLeft(--slide, --recurse)
		}
	}, carouselAnimationTime)
	initButtons(prevCarouselIndex);
}

function goToCarouselSlide(slide) {
	if (slide === carouselIndex) return;
	if (slide < carouselIndex) {
		//-1 because of zero index
		carouselLeft(null, (carouselIndex - slide) - 1)
	} else {
		carouselRight(null, (slide - carouselIndex) - 1)
	}
}

function initCarousel() {
	$($('.carouselInfo')[carouselIndex]).css({
		"display": "inline-block",
	})
	initSidewaysHeader()
	initButtons()

}

function initButtons(prevIndex) {
	var header = $($('.carouselButton')[carouselIndex])
	header.css("background", "#AFCC67");
	if (prevIndex != null) {
		header = $($('.carouselButton')[prevIndex])
		header.css("background", "");
	}
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
	if ($(window).width() < 800) {
		slideOffFactor = 100;
	}

})

$(document).ready(function () {
	initCarousel();
})

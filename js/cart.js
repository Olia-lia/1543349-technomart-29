
const modalOrder = document.querySelector(".modal-order");
let product = document.querySelectorAll(".product-item");
let openMessage = document.querySelectorAll(".button-buy");
const orderButtons = modalOrder.querySelector(".further-actions");
const bookmarksBtn = document.querySelectorAll(".button-bookmarks");
const closeMessage = modalOrder.querySelector(".modal-close");
const basket = document.querySelector(".basket");
const bookmarks = document.querySelector(".bookmarks");
const makeOrderBtn = modalOrder.querySelector("shopping-button");



var addClickHandlerBasket = function (openMessage, product) {
	openMessage.addEventListener('click', function () {
		modalOrder.classList.add("modal-show-order");
		basket.classList.add("modal-order-background");
		orderButtons.focus();
	});
};		


for (var i = 0; i < product.length; i++) {
	addClickHandlerBasket(openMessage[i], product[i]);
}


closeMessage.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalOrder.classList.remove("modal-show-order");
});


window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalOrder.classList.contains("modal-show-order")) {
			evt.preventDefault();
			modalOrder.classList.remove("modal-show-order");
		}
	}
});

var addClickHandlerBookmarks = function (bookmarksBtn, product) {
	bookmarksBtn.addEventListener('click', function () {
		bookmarks.classList.add("modal-order-background");

	});
};		


for (var i = 0; i < product.length; i++) {
	addClickHandlerBookmarks(bookmarksBtn[i], product[i]);
}
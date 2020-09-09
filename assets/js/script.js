var imageTitle
var imageText
var timer = 1

// Switch image on click
function switchImage(imageNumber) {

	switch (imageNumber) {
		case 1:
			imageTitle = 'image 1'
			imageText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
			document.getElementById('image').src = 'img/big_mountain_1.png'
			document.getElementById('image_title').innerHTML = imageTitle
			document.getElementById('image_text').innerHTML = imageText
			break

		case 2:
			imageTitle = 'image 2'
			imageText = 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
			document.getElementById('image').src = 'img/big_mountain_2.png'
			document.getElementById('image_title').innerHTML = imageTitle
			document.getElementById('image_text').innerHTML = imageText
			break

		case 3:
			imageTitle = 'image 3'
			imageText = 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
			document.getElementById('image').src = 'img/big_mountain_3.png'
			document.getElementById('image_title').innerHTML = imageTitle
			document.getElementById('image_text').innerHTML = imageText
			break

		case 4:
			imageTitle = 'image 4'
			imageText = 'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
			document.getElementById('image').src = 'img/big_mountain_4.png'
			document.getElementById('image_title').innerHTML = imageTitle
			document.getElementById('image_text').innerHTML = imageText
	}
}

// Leads to the image
function anchor() {
	location.hash = ''
	location.hash = 'image'
}

// 5 second interval to switch images
setInterval(function() {
	switchImage(timer)
	timer++
	timer > 4 ? timer = 1 : timer = timer
}, 5000)
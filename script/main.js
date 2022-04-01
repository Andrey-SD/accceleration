let parallax = document.getElementById('parallax');
let whell1 = document.getElementById('wheel-back');
let whell2 = document.getElementById('wheel-front');
let arrow = document.getElementById('arrow');
let car = document.getElementById('car');

let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');
let l4 = document.getElementById('l4');
let l5 = document.getElementById('l5');

let maxSpeed = 30;
let currentSpeed = 0;
let acceleration = false;
let position = 1;
let accelerationStep = 0.1;
let carPosition = 50;

window.addEventListener('mousedown', function () {
	acceleration = true;
});

window.addEventListener('mouseup', function () {
	acceleration = false;
});

window.addEventListener("touchstart", function () {
	acceleration = true;
});

window.addEventListener("touchend", function () {
	acceleration = false;
});


setInterval(() => {
	if (acceleration) {
		if (currentSpeed <= maxSpeed) {
			currentSpeed += accelerationStep;
		}
		if (carPosition < 300) {
			carPosition += 0.3;
		}
	} else {
		if (currentSpeed >= accelerationStep) {
			currentSpeed -= accelerationStep * 2;
		}

		if (carPosition > 50) {
			carPosition -= 1.2;
		}
	}
	if (currentSpeed < 1 && !acceleration) currentSpeed = 0;

	position += currentSpeed;
	l1.style.backgroundPositionX = `${-position / 100}px`;
	l2.style.backgroundPositionX = `${-position / 50}px`;
	l3.style.backgroundPositionX = `${-position / 40}px`;
	l4.style.backgroundPositionX = `${-position}px`;
	l5.style.backgroundPositionX = `${-position}px`;
	car.style.left = `${carPosition}px`;
	whell1.style.transform = `rotate(${position}deg)`;
	whell2.style.transform = `rotate(${position}deg)`;
	arrow.style.transform = `rotate(${currentSpeed * 9}deg)`;
}, 20);
// Preloader
const preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
	setTimeout(() => {
		preloader.classList.add("hidden");
	}, 1000);
});

// Settings
const settingsOpenBtn = document.getElementById("settingsOpenBtn");
const settingsCloseBtn = document.getElementById("settingsCloseBtn");
const settingsContainer = document.getElementById("settingsContainer");

function openSettings() {
	settingsContainer.classList.add("active");
}

function closeSettings() {
	settingsContainer.classList.remove("active");
}

settingsOpenBtn.addEventListener("click", function () {
	openSettings();
});

settingsCloseBtn.addEventListener("click", function () {
	closeSettings();
});

document.addEventListener("keyup", function (e) {
	if (e.key == "Escape" && settingsContainer.classList.contains("active")) {
		closeSettings();
	}
});

document.addEventListener("click", function (e) {
	if (settingsContainer.classList.contains("active")) {
		if (e.target.id == settingsContainer.id) {
			closeSettings();
		}
	}
});

// Background Video
const bgVideoPlayer = document.getElementById("bgVideoPlayer");
const bgVideoSource = document.getElementById("bgVideoSource");
const buttonsContainer = document.getElementById("buttonsContainer");
const buttons = buttonsContainer.querySelectorAll("button");

const videos = new Map([
	["Simple strings", "simple-strings.mp4"],
	["Water waves", "water-waves.mp4"],
	["Liquids wavy", "liquids-wavy.mp4"],
	["3D abstract ball", "3d-abstract-ball.mp4"],
	["Earth lines sphere", "earth-lines-sphere.mp4"],
]);

const pathToVideos = "assets/videos/";

var index = 0;

for (const [videoName, videoUrl] of videos.entries()) {
	const button = document.createElement("button");
	button.id = `bgButton${++index}`;
	button.textContent = videoName;

	button.addEventListener("click", () => {
		const src = `${pathToVideos}${videoUrl}`;

		localStorage.setItem("bgVideoSource", src);

		location.reload();

		loadVideo(bgVideoSource, bgVideoPlayer, src);
	});

	buttonsContainer.appendChild(button);
}

const loadVideo = (videoSource, videoPlayer, src) => {
	videoSource.src = src;
	videoPlayer.load();
};

window.addEventListener("load", function () {
	const src = localStorage.getItem("bgVideoSource");
	if (src) {
		loadVideo(bgVideoSource, bgVideoPlayer, src);
	}
});

// Activate links on scroll
const mainContainer = document.querySelector("main");
const sections = document.querySelectorAll("section[id]");

mainContainer.addEventListener("scroll", () => {
	const scrollTop = mainContainer.scrollTop;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.id;

		scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight
			? document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.add("active")
			: document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.remove("active");
	});
});

document.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.id;

		scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight
			? document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.add("active")
			: document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.remove("active");
	});
});

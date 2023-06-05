const Clients = [
	{
		name: "John Doe",
		image: "john-doe.jpg",
		job: "CEO",
		company: "IBM Global",
		quote:
			"Drake - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!.",
	},
	{
		name: "Christina Morillo",
		image: "christina-morillo.jpg",
		job: "Product Management",
		company: "Invision App Inc",
		quote:
			"Drake was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer that you can trust with any project from A-Z.",
	},
	{
		name: "Frank Kinney",
		image: "frank-kinney.jpg",
		job: "Director",
		company: "Envato LLC",
		quote:
			"Drake was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer that you can trust with any project from A-Z.",
	},
];

var imagesPath = "assets/images/clients/";

const clientsContainer = document.querySelector("#testimonial .slider-wrapper");

const clientLayout = ({ name, image, job, company, quote }) => `
    <div class="client__header">
        <img class="client__image" src="${imagesPath}${image}" />
        <div class="client__info">
            <h6 class="client__name">${name}</h6>
            <p class="client__job">
                ${job} of <span class="client__company">${company}</span>
            </p>
        </div>
	</div>
	<q class="client__quote">${quote}</q>

`;

Clients.forEach((client) => {
	const clientElement = document.createElement("div");
	clientElement.classList.add("client", "slider-slide");
	clientElement.innerHTML = clientLayout(client);
	clientsContainer.appendChild(clientElement);
});

// Slider
const slider = document.getElementById("clientsSlider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
const slides = sliderWrapper.getElementsByClassName("slider-slide");
const prevBtn = slider.querySelector(".slider-button-prev");
const nextBtn = slider.querySelector(".slider-button-next");

let currentSlide = 0;

function showSlide() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}

	slides[currentSlide].classList.add("active");
}

function moveToNextSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide++;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	slides[currentSlide].classList.add("active");
}

function moveToPrevSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	slides[currentSlide].classList.add("active");
}

prevBtn.addEventListener("click", function () {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	showSlide();
});

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

showSlide();

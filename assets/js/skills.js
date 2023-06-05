const Skills = [
	{
		name: "HTML 5",
		image: "html-5.svg",
		percentage: 0.95,
	},
	{
		name: "CSS 3",
		image: "css-3.svg",
		percentage: 0.92,
	},
	{
		name: "SASS",
		image: "sass.svg",
		percentage: 0.8,
	},
	{
		name: "JavaScript",
		image: "js.svg",
		percentage: 0.73,
	},
	{
		name: "C Programming",
		image: "c.svg",
		percentage: 0.88,
	},
	{
		name: "Java",
		image: "java.svg",
		percentage: 0.9,
	},
	{
		name: "PHP",
		image: "php.svg",
		percentage: 0.84,
	},
	{
		name: "Database",
		image: "database.svg",
		percentage: 0.76,
	},
];

var imagesPath = "assets/images/skills/";

const skillsContainer = document.querySelector("#skills .skills__wrapper");

const skillLayout = ({ name, image, percentage }) => `
    <div class="skill__content">
        <img
            class="skill__image"
            src="${imagesPath}${image}"
            alt="${name}"
        />
        <h4 class="skill__percentage">${percentage * 100}%</h4>
    </div>
    <p class="skill__name">${name}</p>
`;

Skills.forEach((skill) => {
	const skillElement = document.createElement("div");
	skillElement.className = "skill";
	skillElement.innerHTML = skillLayout(skill);
	skillsContainer.appendChild(skillElement);
});

const Projects = [
	{
		title: "SugarCake - Bakery Website",
		image: "sugarcake.png",
		tags: ["HTML", "CSS", "JS"],
		href: "https://issakass.github.io/HTML_CSS_Template_10_ResponsiveBakeryWebsite/",
	},
	{
		title: "Analys - Dashboard",
		image: "analys.png",
		tags: ["HTML", "CSS", "JS"],
		href: "https://issakass.github.io/HTML_CSS_Template_15_Dashboard/",
	},
	{
		title: "Tixly - Baby Shop Website",
		image: "tixly.png",
		tags: ["HTML", "CSS"],
		href: "https://issakass.github.io/HTML_CSS_Template_12_BabyShop/",
	},
	{
		title: "Directone - Travel Website",
		image: "directone.png",
		tags: ["HTML", "CSS"],
		href: "https://issakass.github.io/HTML_CSS_Template_13_TravelWebsite/",
	},
	{
		title: "Memberbase - Webflow Template ",
		image: "memberbase.png",
		tags: ["HTML", "CSS"],
		href: "https://issakass.github.io/HTML_CSS_Template_16_Memberbase/",
	},
];

var imagesPath = "assets/images/projects/";

const projectsContainer = document.querySelector("#portfolio .projects");

const projectLayout = ({ title, image, tags, href }) => `
    <div class="project__content">
        <img class="project__image" src="${imagesPath}${image}" />
        <ul class="project__tags">
            ${tags
							.map((tag) => `<li class="project__tag">${tag}</li>`)
							.join("")}
        </ul>
    </div>
    <h4 class="project__title">${title}</h4>
`;

Projects.forEach((project) => {
	const projectElement = document.createElement("a");
	projectElement.href = project.href;
	projectElement.target = "_blank";
	projectElement.className = "project";
	projectElement.innerHTML = projectLayout(project);
	projectsContainer.appendChild(projectElement);
});

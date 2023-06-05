const Services = [
	{
		name: "Website Design",
		description:
			"I created digital products with unique ideas use Figma & Framer",
		projectsCount: 24,
		icon: '<i class="fa-solid fa-palette fa-fw icon"></i>',
	},
	{
		name: "Development",
		description: "I build website go live with Framer, Webflow or WordPress",
		projectsCount: 126,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	},
	{
		name: "SEO/Marketing",
		description: "Increase the traffic for your website with SEO optimized",
		projectsCount: 8,
		icon: '<i class="fa-solid fa-bullhorn fa-fw icon"></i>',
	},
];

const servicesContainer = document.querySelector(
	"#services .services__wrapper"
);

const serviceLayout = ({ name, description, projectsCount, icon }) => `
	<h4 class="service__name">${name}</h4>
	<p class="service__description">${description}</p>
	<span class="service__projects">${projectsCount} Project${
	projectsCount > 1 ? "s" : ""
}</span>
	${icon}
`;

Services.forEach((service) => {
	const serviceElement = document.createElement("div");
	serviceElement.className = "service";
	serviceElement.innerHTML = serviceLayout(service);
	servicesContainer.appendChild(serviceElement);
});

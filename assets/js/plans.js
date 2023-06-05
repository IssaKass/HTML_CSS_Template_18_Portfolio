const Plans = [
	{
		name: "Basic",
		description: "Have design ready to build? Or small budget",
		pricePerHour: 49,
		features: [
			"Need your wireframe",
			"Design with Figma, Framer",
			"Implement with Webflow, React, WordPress, Laravel/PHP",
			"Remote/Online",
			"Work in business days, no weekend.",
			"Support 6 months",
		],
	},
	{
		name: "Premium",
		description: "Not have any design? Leave its for me",
		pricePerHour: 99,
		features: [
			"Don't need wireframe or anything",
			"Design with Figma, Framer from scratch",
			"Implement with Webflow, React, WordPress, Laravel/PHP",
			"Remote/Online",
			"Work with both weekend",
			"Support 12 months",
			"Your project alway be priority",
			"Customer care gifts",
		],
	},
];

const plansContainer = document.querySelector("#pricing .pricing__wrapper");

Plans.forEach((plan) => {
	const planElement = document.createElement("div");
	planElement.className = "plan";

	var planHeader = document.createElement("div");
	planHeader.className = "plan__header";

	var name = document.createElement("p");
	name.className = "plan__name";
	name.textContent = plan.name;

	var description = document.createElement("p");
	description.classList = "plan__description";
	description.textContent = plan.description;

	var planTop = document.createElement("div");
	planTop.className = "plan__top";
	planTop.appendChild(name);
	planTop.appendChild(description);

	planHeader.appendChild(planTop);

	var planPrice = document.createElement("p");
	planPrice.className = "plan__price";
	planPrice.innerHTML = `<span>$${plan.pricePerHour}</span>/ hours`;
	planHeader.appendChild(planPrice);

	planElement.appendChild(planHeader);

	var planFeatures = document.createElement("ul");
	planFeatures.className = "plan__features";

	plan.features.forEach((feature) => {
		var planFeature = document.createElement("li");
		planFeature.className = "plan__feature";
		planFeature.textContent = feature;
		planFeatures.appendChild(planFeature);
	});
	planElement.appendChild(planFeatures);

	const pickButton = document.createElement("button");
	pickButton.classList.add("plan__pick-button", "btn-primary", "btn-block");
	pickButton.textContent = "Pick this package";
	planElement.appendChild(pickButton);

	plansContainer.appendChild(planElement);
});

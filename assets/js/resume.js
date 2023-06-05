const TimeLines = [
	{
		date: "2020 - Present",
		experiences: [
			{
				title: "Framer Desinger & Developer",
				description: "Brunodee Agency",
			},
			{
				title: "Front-End WordPress Developer",
				description: "Envato Market",
			},
		],
	},
	{
		date: "2013 - 2019",
		experiences: [
			{
				title: "Webflow Developer & Co-Founder",
				description: "Designflow Studio",
			},
			{
				title: "Web Designer",
				description: "Freelance",
			},
			{
				title: "Leader Team of Marketing",
				description: "AHA Marketing Agency",
			},
		],
	},
	{
		date: "2010 - 2013",
		experiences: [
			{
				title: "Bachelor Degree of Information Technology",
				description: "US RMIT University",
			},
		],
	},
];

const TimeLinesContainer = document.querySelector("#resume .timelines");

const timeLineLayout = ({ date, experiences }) => `
    <p class="timeline__date">${date}</p>
    <ul class="timeline__experiences">
        ${experiences
					.map(
						(experience) => `
            <li class="timeline__experience experience">
                <h5 class="experience__title">${experience.title}</h5>
                <p class="experience__description">${experience.description}</p>
            </li>
        `
					)
					.join(" ")}
    </ul>
`;

TimeLines.forEach((timeLine) => {
	const timeLineElement = document.createElement("div");
	timeLineElement.className = "timeline";
	timeLineElement.innerHTML = timeLineLayout(timeLine);
	TimeLinesContainer.appendChild(timeLineElement);
});

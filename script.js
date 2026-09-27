const skills = ["HTML","CSS","Javascript","Networking","Python","Java","Ai Hacking"]
const skillslist = document.getElementById("skills-list");

for (let i=0; i< skills.length; i++){
    const li = document.createElement("li");
    li.textContent =skills[i];
    skillslist.appendChild(li);

}

const projects = [
{
    title:"Portfolio Website",
    description: "A personal site built with HTML, CSS, and Javascript.",
    tech:"HTML,CSS, JavaScript"
},
{
    title:"Detectanet IDS",
    description: "An Intrusion detection system for network security that includes a built in URL scanner for malicious websites",
    tech:"Python , CICFlowMeter , Scikit-learn&Random Forest , TensorFlow , SQLite , Streamlit , CIC-IDS2017"
}

];

const projectsContainer = document.getElementById("projects-container");

for (let i=0; i< projects.length; i++){
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = projects[i].title;

    const desc = document.createElement("p");
    desc.textContent =  projects[i].description;

    const tech = document.createElement("p");
    tech.textContent = "Tech: " + projects[i].tech;

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tech);

    projectsContainer.appendChild(card);
}

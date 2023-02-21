import projectList from "@/components/projectList";
import { useState, useEffect } from "@/utilities";
import header from "@/components/header";
const projectspage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
        // const projects = JSON.parse(localStorage.getItem("projects")) || []
        // setProjects(projects);
    }, []);

    return ` 
    ${header()};
    <div class="container"> 
    <div><h2 class="section__title">Dự án của tôi</h2></div>
                    <div class="row">
                    
                    <section class="section trick" id="trick">
                    <div class="trick__container container grid">
                        ${projectList(projects)}
                    </section>
                    </div>
            </div>`;
};

export default projectspage;
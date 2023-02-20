const projectList = ({ projects }) => {
    return `${projects.map((projects) => {
        return `<div class="col">
            <h3> <a href="/projects/${projects.id}">${projects.name}</a></h3>
            <span>${projects.author}</span>
         </div>`;

    })
        .join("")}</div>`;
}

export default projectList;
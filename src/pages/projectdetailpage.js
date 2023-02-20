
const projectdetailpage = ({ id }) => {
    const project = projects.find((projects) => projects.id === +id);
    if (!project) return null;
    return `<div>${project.name}</div>`;
};

export default projectdetailpage;
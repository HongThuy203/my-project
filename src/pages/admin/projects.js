// import { deleteProject, getProjects } from "@/api/project";

import { useEffect, useState } from "@/utilities";
const AdminProjectPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
        // const projects = JSON.parse(localStorage.getItem("projects")) || []
        // setProjects(projects);
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    const newProjects = projects.filter((project) => project.id !== +id);
                    setProjects(newProjects);
                })



            });
        }
    });
    return/*html*/ `<div class="container mt-5">
                <h1>Quản lý dự án</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dự án</th>
                            <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projects
            .map((project, index) => {
                return /*html*/ `
                <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td width="150">
                <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
                <a href="/admin/projects/${project.id}/edit">Sửa<a>
                </td>
               

            </tr>`;
            })
            .join("")}
                    </tbody>
                </table>
    </div>`;


};

export default AdminProjectPage;
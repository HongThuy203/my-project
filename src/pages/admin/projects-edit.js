import { useEffect, router, useState } from "@/utilities";

import { v4 as uuidv4 } from "uuid";

const AdminProjectEdit = ({ id }) => {
  console.log({ id });
  // const projects = JSON.parse(localStorage.getItem('projects')) || []; //lấy projects từ local storage
  // const currentProject = projects.find((project) => project.id === id);//tìm projects
  const [projects, setProjects] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then(response => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  useEffect(() => {
    const form = document.getElementById('form-edit');
    const projectName = document.getElementById("project-name");
    const projectAuthor = document.getElementById("project-author");
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const FormData = {
        id: id,
        // id: projects.length + 1,
        name: projectName.value,
        author: projectAuthor.value,
      };
      fetch(`http://localhost:3000/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      }).then(() => {
        router.navigate("/admin/projects");
      });
      // // redirect sang admin/products

    });


  });

  return /*html*/`<div class="container">
    <h1>Cập nhật dự án</h1>
    <form action="" id="form-edit">
      <div class="form-group mb-3">
        <label>Tên dự án</label>
        <input type="text" id="project-name" class="form-control" value="${projects.name}">
      </div>
      <div class="form-group mb-3">
        <label>Mô tả dự án</label>
        <input type="text" id="project-author" class="form-control" value="${projects.author}">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" > Cập nhật</button>
      </div>
    </form>
      </div>`

};



export default AdminProjectEdit;


import { useEffect, router } from "@/utilities";


const AdminProjectAdd = () => {
  useEffect(() => {
    const form = document.getElementById('form-add');
    const projectName = document.getElementById("project-name");
    const projectAuthor = document.getElementById("project-author");
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const newProject = {
        // id: projects.length + 1,
        name: projectName.value,
        author: projectAuthor.value,
      };
      fetch('http://localhost:3000/projects', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      }).then(() => {
        router.navigate("/admin/projects");
      });
      // // redirect sang admin/products

    })

  })
  return /*html*/`<div class="container">
    <h1>Thêm dự án</h1>
    <form action="" id="form-add">
      <div class="form-group mb-3">
        <label>Tên dự án</label>
        <input type="text" id="project-name" class="form-control">
      </div>
      <div class="form-group mb-3">
        <label>Mô tả dự án</label>
        <input type="text" id="project-author" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" >Thêm dự án</button>
      </div>
    </form>
      </div>`

};



export default AdminProjectAdd;


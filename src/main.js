const app = document.querySelector('#app');
import { render, router } from "./utilities";
import aboutpage from "./pages/aboutpage";
import homepage from "./pages/homepage";
import notfoundpage from "./pages/notfoundpage";
import projectspage from "./pages/projectspage";
import projectdetailpage from "./pages/projectdetailpage";
import blogpage from "./pages/blogpage";
import contactpage from "./pages/contactpage";
//admin
import AdminProjectPage from "./pages/admin/projects";
import AdminProjectAdd from "./pages/admin/project-add";
import AdminProjectEdit from "./pages/admin/projects-edit";
import header from "./components/header";


router.on('/', () => render(homepage, app));
router.on('/aboutpage', () => render(aboutpage, app));
router.on('/projectspage', () => render(projectspage, app));
router.on('/blogpage', () => render(blogpage, app));
router.on('/contactpage', () => render(contactpage, app));
router.on('/header', () => render(header, app));
router.on('/projects/:id', ({ data }) => render(() => projectdetailpage(data), app));

//Admin
router.on('/admin/projects', () => render(AdminProjectPage, app));
router.on('/admin/project/add', () => render(AdminProjectAdd, app));
router.on('/admin/projects/:id/edit', ({ data }) => render(() => AdminProjectEdit(data), app));
router.notFound(() => render(notfoundpage, app));
router.resolve();
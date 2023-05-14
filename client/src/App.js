import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";

import TeacherForm from "./pages/TeacherForm";
import Navbar from "./component/NavBar";
// import { Router } from "express";

const App = () => (
<<<<<<< HEAD
=======


>>>>>>> b23e37d2c2258ee1d369dc472ba3343ae50b18be
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin/teacher-registration" element={<TeacherForm />} />
	</Routes>



);

export default App;

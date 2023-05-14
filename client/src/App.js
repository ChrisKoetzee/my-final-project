import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";

import TeacherForm from "./pages/TeacherForm";

// import { Router } from "express";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin/teacher-registration" element={<TeacherForm />} />
	</Routes>
);

export default App;

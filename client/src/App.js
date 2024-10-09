import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentProfile from "./pages/StudentProfile";
import Home from "./pages/Home";
import TeacherForm from "./pages/TeacherForm";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
import TeacherProfile from "./pages/TeacherProfile";
import MonthlyInfo from "./pages/MonthlyInfo";
import Donation from "./pages/Donation";
import Info from "./pages/Info";

const App = () => (
	<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/info" element={<Info />} />
			<Route path="/student-registration" element={<StudentRegistration />} />
			<Route path="/student/profile" element={<StudentProfile />} />
			<Route path="/admin/teacher-registration" element={<TeacherForm />} />
			<Route path="/teacher/profile" element={<TeacherProfile />} />
			<Route path="/donation" element={<Donation />} />
			<Route path="/monthlyInfo" element={<MonthlyInfo />} />
		</Routes>
	</div>
);

export default App;

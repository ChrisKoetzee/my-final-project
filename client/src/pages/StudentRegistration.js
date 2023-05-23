// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phonenumber:"",
//     dateofbirth: "",
//     gender: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch("/api/student/new", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message) {
//           alert("Registration successful");
//           setFormData({
//             firstname: "",
//             lastname: "",
//             email: "",
//             phonenumber:"",
//             dateofbirth: "",
//             gender: "",
//             password: "",
//           });
//         } else {
//           alert("Registration failed");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Registration failed");
//       });
//   };

//   return (
//     <>
//       <h1 style={{ textAlign: "center", marginTop: "3rem" }}>
//         Registration Form
//       </h1>
//       <Form style={{ width: "50%", margin: "3.5rem auto" }} onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label style={{ fontWeight: "500" }}>First Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             placeholder="Enter your first name"
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label style={{ fontWeight: "500" }}>Surname</Form.Label>
//           <Form.Control
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             placeholder="Enter your last name"
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label style={{ fontWeight: "500" }}>Email Address</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             placeholder="Enter email"
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label style={{ fontWeight: "500" }}>Phone Number</Form.Label>
//         <Form.Control
//           type="text"
//           name="phonenumber"
//           value={formData.phonenumber}
//           placeholder="Enter Phone Number"
//           onChange={handleInputChange}
//         />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label style={{ fontWeight: "500" }}>Date of Birth</Form.Label>
//           <Form.Control
//             type="date"
//             name="dateofbirth"
//             value={formData.dateofbirth}
//             placeholder="Enter your date of birth"
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label style={{ fontWeight: "500" }}>Gender</Form.Label>
//           <Form.Control
//             as="select"
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//           >
//             <option value="">Select your gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             placeholder="Enter password"
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>

//         <Button
//           variant="primary"
//           type="submit"
//           style={{
//             width: "100%",
//             backgroundColor: "#0F172A",
//             border: "none",
//             height: "50px",
//           }}
//         >
//           Registration
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    email: "",
    phonenumber: "",
    gender: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch("/api/student/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message) {
              alert("Registration successful");
              setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phonenumber:"",
                dateofbirth: "",
                gender: "",
                password: "",
              });
            } else {
              alert("Registration failed");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Registration failed");
          });
      };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>
        Registration Form
      </h1>
      <Form style={{ width: "50%", margin: "3.5rem auto" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label style={{ fontWeight: "500" }}>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={formData.firstname}
            placeholder="Enter your first name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label style={{ fontWeight: "500" }}>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={formData.lastname}
            placeholder="Enter your last name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
          <Form.Label style={{ fontWeight: "500" }}>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateofbirth"
            value={formData.dateofbirth}
            placeholder="Enter your date of birth"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "500" }}>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label style={{ fontWeight: "500" }}>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            placeholder="Enter Phone Number"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label style={{ fontWeight: "500" }}>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#0F172A",
            border: "none",
            height: "50px",
          }}
        >
          Register
        </Button>
      </Form>
    </>
  );
};

export default RegistrationForm;

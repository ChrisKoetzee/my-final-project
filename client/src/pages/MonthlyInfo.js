import React, { useState } from "react";
import Template from "../components/Template";
import { Container, Carousel, Card } from "react-bootstrap";

const MonthlyInfo = () => {
  const [heading, setHeading] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { message, heading });
  };

  return (
    <Template>
      <Container className="p-5">
        <h1 style={{
          display: 'flex',
          flex: 'column',
          justifyContent: 'center',
        }}>Monthly Information</h1>
        <Carousel
          data-bs-theme="light" 
          style={{
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

          }} interval={30000}>
          <Carousel.Item key="january">
            <Card>
              <Card.Body style={{
                backgroundColor: 'black',
                color: 'white',
                paddingLeft: '8rem',
                paddingRight: '8rem',
                border: "5px solid black", 
						    borderRadius: "20px",
              }}>
                <Card.Title>January Happenings</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                <ul>
                  <li>Lorem ipsum dolor </li>
                  <li>Ex ea commodo consit esse </li>
                  <li>Aiquip ex ea commodo cons</li>
                  <li>Commodo consit esse cillum</li>
                  <li>Mollit anim id est laborum</li>
                </ul>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item key="february">
            <Card>
              <Card.Body style={{
                backgroundColor: 'black',
                color: 'white',
                paddingLeft: '8rem',
                paddingRight: '8rem',
                border: "5px solid black", 
						    borderRadius: "20px",
              }}>
                <Card.Title>February Happenings</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                <ul>
                  <li>Lorem ipsum dolor </li>
                  <li>Ex ea commodo consit esse </li>
                  <li>Aiquip ex ea commodo cons</li>
                  <li>Commodo consit esse cillum</li>
                  <li>Mollit anim id est laborum</li>
                </ul>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item key="march">
            <Card>
              <Card.Body style={{
                backgroundColor: 'black',
                color: 'white',
                paddingLeft: '8rem',
                paddingRight: '8rem',
                border: "5px solid black", 
						    borderRadius: "20px",
              }}>
                <Card.Title>March Happenings</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                <ul>
                  <li>Lorem ipsum dolor </li>
                  <li>Ex ea commodo consit esse </li>
                  <li>Aiquip ex ea commodo cons</li>
                  <li>Commodo consit esse cillum</li>
                  <li>Mollit anim id est laborum</li>
                </ul>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>

        <form onSubmit={handleSubmit} className="p-3 m-3">
        <div className="p-2 m-2">
            <label htmlFor="h2">Enter Heading :</label>
            <input
              type="text"
              id="text"
              value={heading}
              style={{width: '100%'}}
              onChange={(e) => setHeading(e.target.value)}
              required
            />
          </div>
          <div className="p-2 m-2">
            <label htmlFor="message">Add new months info :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              cols="50"
              style={{width: '100%'}}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </Template>
  );
};

export default MonthlyInfo;

import React from "react";

function About() {
  return (
    <div>
      <h1 className="text">
        About Page
        <br />
        <small className="info">
          Name : Akanksha Verma
          <br />
          Reg No: 12004114
          <br />
          Section: KM024
          <br />
          <br />
          <p className="list">
            Topics Covered
            <ol>
              <li>State</li>
              <li>Props</li>
              <li>Hooks</li>
              <li>Forms</li>
              <li>Routing</li>
              <li>Binding</li>
              <li>Mapping</li>
              <li>Style Components</li>
            </ol>
          </p>
        </small>
      </h1>
    </div>
  );
}
export default About;

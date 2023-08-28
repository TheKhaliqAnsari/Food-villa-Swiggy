import { useState } from "react";

const Section = ({ title, description, display, setDisplay }) => {

  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "5px" }}>
      <h1>{title}</h1>
      <p style={display === title ? { display: "block" } : { display: "none" }}>
        {description}
      </p>
      <button
        onClick={() => {
          display === title ? setDisplay("") : setDisplay(title);
        }}
      >
        {display === title ? "Hide" : "Show"}
      </button>
    </div>
  );
};

const Instamart = () => {
  const [display, setDisplay] = useState("about"); // Initialize with the default section you want to display

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Instamart Component😎</h1>

      <Section
        title="About Us"
        description="Sed ut perspiciatis unde omnis iste natus error..."
        display={display}
        setDisplay={setDisplay}
      />

      <Section
        title="Team"
        description="Sed ut perspiciatis unde omnis iste natus error..."
        display={display}
        setDisplay={setDisplay}
      />

      <Section
        title="Career Page"
        description="Sed ut perspiciatis unde omnis iste natus error..."
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default Instamart;

import { useState } from "react";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Dropdown />
    </div>
  );
}

const Dropdown = () => {
  const [dropdown, setDropdown] = useState({
    open: false,
    optionSelected: "Más relevantes",
  });

  return (
    <div className="container">
      <p>Ordenar por:</p>
      <div className="dropdown">
        <div
          onClick={() => setDropdown({ ...dropdown, open: !dropdown.open })}
          className={dropdown.open ? "first-option-open" : "first-option-close"}
        >
          <span>{dropdown.optionSelected}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            aria-hidden="true"
            fill="#3483fa"
          >
            <path d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
          </svg>
        </div>
        {dropdown.open && (
          <div className="options">
            {["Más relevantes", "Menor precio", "Mayor precio"].map((order) => (
              <div
                onClick={() =>
                  setDropdown({ optionSelected: order, open: false })
                }
                className={
                  order === dropdown.optionSelected ? "orderSelected" : "order"
                }
              >
                {order}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

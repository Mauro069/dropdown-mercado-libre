import { DropdownSvg } from "./assets/dropdownSvg";
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
  const options = ["Más relevantes", "Menor precio", "Mayor precio"];

  const [dropdown, setDropdown] = useState({
    open: false,
    optionSelected: options[0],
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
          <DropdownSvg />
        </div>
        {dropdown.open && (
          <div className="options">
            {options.map((order) => {
              return (
                <div
                  onClick={() =>
                    setDropdown({ optionSelected: order, open: false })
                  }
                  className={
                    order === dropdown.optionSelected
                      ? "orderSelected"
                      : "order"
                  }
                >
                  {order}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./first.css";

function first(submit: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();
  const secondPage = () => {
    navigate("/second");
  };

  useEffect(() => {
    let valid = (() => {
      if (!name) {
        return false;
      } else if (!phone) {
        return false;
      } else if (!email) {
        return false;
      } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone)) {
        return false;
      } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return false;
      } else {
        return true;
      }
    })();
    setIsValid(valid);
  }, [name, phone, email]);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (isValid) {
            submit({ name, phone, email });
          }
        }}
      >
        <input
          type="text"
          id="name"
          required
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="phone"
          id="phone"
          required
          value={phone}
          placeholder="Enter your phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="email"
          id="email"
          required
          value={email}
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <button type="submit" onClick={secondPage}>
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default first;

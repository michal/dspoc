import { Button } from "dspoc-raw";
import viteLogo from "/vite.svg";

import "dspoc-raw/dist/style.css";

import "./App.css";
import { useState } from "react";

const set = Array.from({ length: 200 }, () => Math.floor(Math.random() * 200));

function App() {
  const [render, setRender] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setRender(true)} size="sm">
          Button size=small
        </Button>
        <Button size="md" asChild>
          <a href="https://www.google.com">Button as link</a>
        </Button>
        <Button onClick={() => setRender(true)} size="lg">
          <span>Button size=large</span>
          <img
            src={viteLogo}
            style={{ width: "18px" }}
            className="logo"
            alt="logo"
          />
          <img
            src={viteLogo}
            style={{ width: "18px" }}
            className="logo"
            alt="logo"
          />
          <img
            src={viteLogo}
            style={{ width: "18px" }}
            className="logo"
            alt="logo"
          />
        </Button>
      </div>
      <div
        style={{
          paddingBlock: "12px",
          display: "flex",
          gap: "2px",
          justifyItems: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {render && set.map((v, i) => <Button key={i}>Button ${v}</Button>)}
      </div>
    </>
  );
}

export default App;

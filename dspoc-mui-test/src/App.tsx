import { Button } from "dspoc-mui";

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
        <Button onClick={() => setRender(true)} size="small">
          Button size=small
        </Button>
        <Button onClick={() => setRender(true)} size="medium">
          Button size=medium
        </Button>
        <Button onClick={() => setRender(true)} size="large">
          Button size=large
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
        {render &&
          set.map((v, i) => (
            <Button key={i} size="medium">
              Button ${v}
            </Button>
          ))}
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

const Switch = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? (
        <span>Light</span>
      ) : (
        <span>Dark</span>
      )}

      <br />
      <br />

      <input type="text" key = {sw ? "light" : "dark"} />

      <button onClick={() => setSw((prev) => !prev)}>Switch</button>
    </div>
  );
};

export default Switch;

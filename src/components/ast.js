import { useState } from "react";
export default function Ast() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className={`asterisk`}
      >
        <span
          className={`asterisk__dropdown ${visible && "ani"}`}
        >
          At least we think so
        </span>

        <span>*</span>
      </span>
    </>
  );
}

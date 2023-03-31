import { useState } from "react";
export default function States() {
  const [data, setDate] = useState(0);

  function UpdateData() {
    return setDate(data + 1);
  }
  console.warn(
    "--------------------------------------------------------------------------------------------------------"
  );
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={UpdateData}>State Button </button>
    </div>
  );
}

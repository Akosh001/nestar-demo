import { useState } from "react";
const CommunityList = () => {
  console.log("COMMUNITY COMPONENT- PAGES ROUTER");
  const [title, setTitle] = useState<string>("Hello");

  return (
    <div>
      Community List {""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default CommunityList;

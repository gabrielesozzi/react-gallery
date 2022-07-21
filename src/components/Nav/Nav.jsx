import { useState } from "react";
import Gallery from "../Gallery";
import Button from "../Button";
import "./index.css";

const Nav = () => {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <>
      <div className="Nav">
        <h4>Navbar</h4>
        <Button
          btnTextCont="show / hide"
          onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}
        />
      </div>
      <Gallery visibility={isGalleryVisibile} />
    </>
  );
};

export default Nav;

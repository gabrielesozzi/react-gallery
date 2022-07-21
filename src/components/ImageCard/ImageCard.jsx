import Button from "../Button";

import "./index.css";

// const ImageCard = (props) => {
const ImageCard = ({ data, onHandleImage, visibility, url }) => {
  return (
    <>
      {visibility ? (
        <>
          <div className="ImageCard">
            <img
              className="ImageCard__img"
              src={data.url}
              alt={data.name}
              onClick={onHandleImage}
            />
            <p className="ImageCard__par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button btnTextCont={data.name} />
          </div>
        </>
      ) : (
        <>
          <div className="modalImage">
            <img src={url} alt="" onClick={onHandleImage} />
          </div>
        </>
      )}
    </>
  );
};

export default ImageCard;

interface Props {
  isFilled: boolean;
  handleClick: React.MouseEventHandler;
}

const Star = (props: Props) => {
  const starIcon = props.isFilled ? "star-filled.webp" : "star-empty.webp";

  return (
    <img
      className="w-6 cursor-pointer"
      src={`/src/assets/${starIcon}`}
      alt=""
      onClick={props.handleClick}
    />
  );
};

export default Star;

interface Props {
  username: string;
}

const Header = (props: Props) => {
  return (
    <>
      <p>Current user: {props.username}</p>
    </>
  );
};

export default Header;

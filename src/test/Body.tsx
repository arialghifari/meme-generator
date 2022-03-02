interface Props {
  username: string;
}

const Body = (props: Props) => {
  return <h2>Welcome back, {props.username}!</h2>;
};

export default Body;

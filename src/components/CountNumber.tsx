interface Props {
  number: number;
}

const CountNumber = (props: Props) => {
  return <h1 className="text-2xl">{props.number}</h1>;
};

export default CountNumber;

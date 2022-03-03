import React from "react";

const Form = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleChange = (event: any) => {
    const inputValue = event.target.value;

    if (event.target.name === "firstName") {
      return setFirstName(inputValue);
    }

    return setLastName(inputValue);
  };

  return (
    <div className="mx-auto w-fit mt-10">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="border border-black p-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="border border-black p-2"
        onChange={handleChange}
      />
      <p className="mt-5 font-semibold">
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default Form;

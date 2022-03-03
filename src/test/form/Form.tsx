import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="mx-auto w-fit mt-10">
      <div className="flex gap-2">
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
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-black p-2"
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 font-semibold">
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
};

export default Form;

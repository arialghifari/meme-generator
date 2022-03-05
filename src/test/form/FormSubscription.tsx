import React from "react";

const FormSubscription = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSubscibed: true,
  });

  const handleChange = (e: any) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, password, confirmPassword, isSubscibed } = formData;

    let messages;
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        if (isSubscibed) {
          messages =
            "Succesfully signed up.\nThanks for signing up for out newsletter!";
        } else {
          messages = "Succesfully signed up";
        }
      } else {
        messages = "Passwords do not match";
      }
    } else {
      messages = "Please fill the form";
    }

    return console.log(messages);
  };

  return (
    <div className="wrapper my-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-fit mx-auto gap-3"
      >
        <h2 className="font-semibold text-2xl">Hello, welcome!</h2>

        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="input"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="input"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          className="input"
          placeholder="Confirm Password"
        />

        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="isSubscibed"
            onChange={handleChange}
            checked={formData.isSubscibed}
            id="is-subscribed"
          />
          <label htmlFor="is-subscribed">I want to join the newsletter</label>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-700 py-2 text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormSubscription;

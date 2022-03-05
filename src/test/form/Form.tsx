import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      console.log(e);

      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  console.log(formData);

  return (
    <div className="mx-auto w-fit mt-10">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="comments"
          className="input"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="is-friendly"
            name="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
          />
          <label htmlFor="is-friendly">Are you friendly?</label>
        </div>

        <fieldset className="input flex flex-col">
          <legend>Current employment status</legend>

          <div>
            <input
              name="employment"
              type="radio"
              id="unemployed"
              value="unemployed"
              onChange={handleChange}
              checked={formData.employment === "unemployed"}
            />
            <label htmlFor="unemployed" className="ml-2">
              Unemployed
            </label>
          </div>
          <div>
            <input
              name="employment"
              type="radio"
              id="part-time"
              value="part-time"
              onChange={handleChange}
              checked={formData.employment === "part-time"}
            />
            <label htmlFor="part-time" className="ml-2">
              Part-time
            </label>
          </div>
          <div>
            <input
              name="employment"
              type="radio"
              id="full-time"
              value="full-time"
              onChange={handleChange}
              checked={formData.employment === "full-time"}
            />
            <label htmlFor="full-time" className="ml-2">
              Full-time
            </label>
          </div>
        </fieldset>

        <label htmlFor="fav-color"></label>
        <select
          name="favColor"
          id="fav-color"
          className="input"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="" disabled>
            -- choose --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </div>
    </div>
  );
};

export default Form;

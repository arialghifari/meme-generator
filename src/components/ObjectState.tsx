import React from "react";

const ObjectState = () => {
  const [contact, setContact] = React.useState({
    firstName: "Luna",
    lastName: "Setia",
    phone: "081 929 383 983",
    email: "itsmydreammas@ex.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? "star-filled.webp" : "star-empty.webp";

  const toggleFaforite = () => {
    setContact((prevContact) => {
      return {
        ...contact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  };

  return (
    <div className="wrap flex items-center justify-center mb-10">
      <div className="card border border-red-300 flex flex-col w-auto p-4">
        <img
          className="w-[100px] bg-blue-300 rounded-full flex self-center"
          src="src/assets/user.png"
          alt=""
        />
        <img
          className="w-[30px] cursor-pointer"
          src={`src/assets/${starIcon}`}
          alt=""
          onClick={toggleFaforite}
        />
        <p className="text-2xl font-semibold">
          {contact.firstName} {contact.lastName}
        </p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};

export default ObjectState;

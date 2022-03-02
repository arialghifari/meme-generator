import React from "react";
import Star from "./Star";

const Card = () => {
  const [contact, setContact] = React.useState({
    firstName: "Ari",
    lastName: "Alghifari",
    phone: "081 234 567 890",
    email: "test@example.com",
    isFavorite: false,
  });

  const toggleFavorite = () => {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  };

  return (
    <div className="wrap border w-fit mx-auto p-4 rounded-lg mb-10">
      <img
        className="w-[150px] mx-auto bg-blue-100 rounded-full"
        src="/src/assets/user.png"
        alt=""
      />
      <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
      <h2 className="text-2xl">
        {contact.firstName} {contact.lastName}
      </h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};

export default Card;

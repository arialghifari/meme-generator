import React from "react";

const Messages = () => {
  const [messages, setMessages] = React.useState(["a", "b"]);

  return (
    <div className="flex justify-center">
      {messages.length > 0 && (
        <h2 className="text-center text-xl bg-red-700 text-white inline p-2">
          You have {messages.length} unread messages!
        </h2>
      )}
    </div>
  );
};

export default Messages;

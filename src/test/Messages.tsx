import React from "react";

const Messages = () => {
  const [messages, setMessages] = React.useState(["a", "a", "p"]);

  return (
    <div className="flex justify-center">
      <h1 className="bg-red-700 text-white p-2">
        {messages.length === 0
          ? `You're all caught up!`
          : `You have ${messages.length} unread 
							${messages.length > 1 ? "messages" : "message"}
						`}
      </h1>
    </div>
  );
};

export default Messages;

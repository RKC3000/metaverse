import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages"); // making a table in database
    const messages = new Messages(); // creating a new object

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // The object was saved successfully.
        },
        (error) => {
          // The save failed.
          // error is a Parse.Error with an error code and description.
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-5/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;

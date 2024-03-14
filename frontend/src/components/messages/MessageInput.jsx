import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  // const [messageData, setMessageData] = useState({});
  const [broadcast, setBroadcast] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage({ message, broadcast });
    setMessage("");
    // console.log(messageData);
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-stone-900 border-black text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className="p-1">
          <label htmlFor="broadcast" className="mr-1">
            Broadcast
          </label>
          <input
            id="broadcast"
            type="checkbox"
            value={broadcast}
            onChange={(e) => {
              setBroadcast(!broadcast);

              // console.log(messageData);
            }}
          />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 mb-7"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;

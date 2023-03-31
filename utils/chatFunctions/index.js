import { chat } from "../globalStates";

/**
 * Function for sending a message and posting the Recieved message with timestamp.
 * @function
 * @param {string} text - Text Message
 * @param {Array} chatArr - The chat History Array
 * @returns {void} - updates globalState(chat)
 */

export function handleSendText(text, chatArr) {
  let tempArr = JSON.parse(JSON.stringify(chatArr));
  const date = new Date();
  tempArr.push(
    {
      id: date.getTime(),
      text: text,
      time: date.toTimeString().slice(0, 5),
    },
    {
      id: date.getTime() + 1,
      text: "Message Recieved",
      time: date.toTimeString().slice(0, 5),
    }
  );
  chat?.chatObj?.set(tempArr);
}

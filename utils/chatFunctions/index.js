import { chat } from "../globalStates";

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

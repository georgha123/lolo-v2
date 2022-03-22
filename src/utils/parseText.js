export const parseText = (text) => {
  const regex = /(?<=>).*(?=<)/g;
  let _text = text.replace("<![CDATA[", "").replace("]]>", "");
  const parsed = text.match(regex) ? regex.exec(_text) : _text;
  return parsed;
};

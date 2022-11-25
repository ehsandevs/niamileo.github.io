import { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
  chars: [
    "-",
    ".",
    "/",
    "*",
    "!",
    "?",
    "#",
    "%",
    "&",
    "@",
    "$",
    "€",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    "~",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  interval: 50,
};

export const TextDecrypt = ({ text, style = {} }) => {
  const { result, dencrypt } = useDencrypt(decryptOptions);

  const [fontFamily, setFontFamily] = useState("Kryptonian");

  useEffect(() => {
    const updateText = () => {
      dencrypt(text || "");
    };

    const action = setTimeout(updateText, 0);
    setTimeout(() => {
      setFontFamily('"Raleway", serif');
    }, 3000);

    return () => clearTimeout(action);
  }, [dencrypt, text]);

  return (
    <p style={{ fontFamily, ...style }}>
      {result}
      {" "}
    </p>
  );
};

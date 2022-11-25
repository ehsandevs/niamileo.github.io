import { CSSProperties } from "react";

type TextDecryptProps = {
  text: String | Number;
  style?: CSSProperties;
};

declare function TextDecrypt(props: TextDecryptProps): JSX.Element;

export { TextDecrypt };

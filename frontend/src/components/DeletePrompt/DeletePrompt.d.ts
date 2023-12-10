import { RefObject } from "react";

interface DeletePromptProps {
  closePrompt?: () => void;
  invoice: string;
}

type ButtonRef = RefObject<HTMLButtonElement>;

export { DeletePromptProps, ButtonRef };

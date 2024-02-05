import { RefObject } from "react";

interface DeletePromptProps {
  closePrompt?: () => void;
  DeleteFn?: () => void;
  invoice: string;
}

type ButtonRef = RefObject<HTMLButtonElement>;

export { DeletePromptProps, ButtonRef };

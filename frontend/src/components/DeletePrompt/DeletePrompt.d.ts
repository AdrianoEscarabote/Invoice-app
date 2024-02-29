import { RefObject } from "react";

interface DeletePromptProps {
  closePrompt?: () => void;
  DeleteFn?: () => void;
}

type ButtonRef = RefObject<HTMLButtonElement>;

export { DeletePromptProps, ButtonRef };

import { Meta, StoryObj } from "@storybook/react";
import SignupForm from ".";

export default {
  title: "signup/components/SignupForm",
  component: SignupForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

export const Primary: StoryObj = {};

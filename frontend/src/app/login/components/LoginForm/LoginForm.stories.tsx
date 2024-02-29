import { Meta, StoryObj } from "@storybook/react";
import LoginForm from ".";

export default {
  title: "login/components/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

export const Primary: StoryObj = {};

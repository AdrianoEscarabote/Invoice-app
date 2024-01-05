import { Meta, StoryObj } from "@storybook/react";
import { ButtonFormProps } from "./ButtonFormProps";
import ButtonForm from ".";

export default {
  title: "components/ButtonForm",
  component: ButtonForm,
} as Meta<ButtonFormProps>;

export const LoginButton: StoryObj = {
  args: {
    disabled: false,
    label: "Login",
    showLoadingComponent: false,
    type: "submit",
  },
};

export const SignupButton: StoryObj = {
  args: {
    disabled: false,
    label: "Create new account",
    showLoadingComponent: false,
    type: "submit",
  },
};

export const Disabled: StoryObj = {
  args: {
    disabled: true,
    label: "Disabled",
    showLoadingComponent: false,
    type: "button",
  },
};

export const ButtonLoading: StoryObj = {
  args: {
    disabled: false,
    label: "Login",
    showLoadingComponent: true,
    type: "button",
  },
};

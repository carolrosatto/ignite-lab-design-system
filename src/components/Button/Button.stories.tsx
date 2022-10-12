import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./Button";

//configurações globais
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button'
  },
} as Meta<ButtonProps>


//configurações por variação
export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Select'
  }
}


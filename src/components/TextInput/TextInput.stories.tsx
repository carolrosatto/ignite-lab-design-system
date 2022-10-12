import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react';

//configurações globais
export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Text placeholder='Digite algo :)' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
} as Meta<TextInputRootProps>


//configurações por variação
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Text placeholder='Digite algo :)' />
    ]
  },
}


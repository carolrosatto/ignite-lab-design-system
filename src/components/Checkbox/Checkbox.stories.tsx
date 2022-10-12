import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Checkbox, CheckboxProps } from "./Checkbox";

//configurações globais
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar de mim</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>


//configurações por variação
export const Default: StoryObj<CheckboxProps> = {
  args: {
  }
}


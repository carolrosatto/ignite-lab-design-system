//import para trazer o intellisense para esse arquivo
import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from "./Text";

//configurações globais para todas as variações
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      }
    }
  }
} as Meta<TextProps>


//configurações por variação
export const Default: StoryObj<TextProps> = {
  args: {
    children: 'Text Medium'
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
    children: 'Text Small'
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    children: "Text Large"
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Componente com tag parágrafo</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}
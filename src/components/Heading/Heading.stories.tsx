import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from "./Heading";

//configurações globais
export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>


//configurações por variação
export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading Medium'
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

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
    children: 'Heading Small'
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

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
    children: "Heading Large"
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

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading com tag h1</h1>
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
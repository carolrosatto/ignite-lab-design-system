import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode,
  asChild?: boolean,
}

//Desestruturação para definir o md como valor default
export function Text({ size = 'md', children, asChild }: TextProps) {
  //define span como padrão, mas se o usuário quiser pode utilizar outro tipo de tag
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={clsx(
      'text-gray-100 font-sans',
      {
        'text-xs': size == 'sm',
        'text-sm': size == 'md',
        'text-md': size == 'lg',
      }
    )}>
      {children}
    </Comp>
  )
}
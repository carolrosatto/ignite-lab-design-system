import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

//Componente exemplo de patter de composição de componente em React

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className={clsx('h-12 flex items-center gap-3 py-4 px-3 w-full rounded  bg-gray-800  focus-within:ring-2 ring-cyan-300')}>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput';

//----------------------------------------//

export interface TextInputIconProps {
  children?: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

//----------------------------------------//

interface TextInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
}

function TextInputText(props: TextInputTextProps) {

  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

TextInputText.displayName = 'TextInput.Text';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Text: TextInputText,
}
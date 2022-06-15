import { observer } from 'mobx-react-lite';
import React, { ReactNode } from 'react';

export const Fragment = observer(({ visible = true, children }: FragmentProps) => {
  return <React.Fragment>{visible && children}</React.Fragment>;
});

// definicao das propriedades
type FragmentProps = {
  children?: ReactNode;
  visible?: boolean;
};

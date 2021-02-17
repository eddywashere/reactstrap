import * as React from 'react';
import { CSSModule } from './index';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
  row?: boolean;
  check?: boolean;
  inline?: boolean;
  disabled?: boolean;
  floating?: boolean;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class FormGroup extends React.Component<FormGroupProps> {}
export default FormGroup;

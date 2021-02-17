import * as React from 'react';
import { CSSModule } from './index';
import { ColumnProps } from './Col';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
  hidden?: boolean;
  check?: boolean;
  size?: string;
  inline?: boolean;
  disabled?: boolean;
  for?: string;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;
  xxl?: ColumnProps;

  // custom widths
  widths?: string[];
}

declare class Label extends React.Component<LabelProps> {}
export default Label;

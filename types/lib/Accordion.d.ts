import * as React from 'react';
import { CSSModule } from './index';

export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class Accordion extends React.Component<AccordionProps> {}
export default Accordion;

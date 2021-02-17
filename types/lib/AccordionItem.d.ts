import * as React from 'react';
import { CSSModule } from './index';

export interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class AccordionItem extends React.Component<AccordionItemProps> {}
export default AccordionItem;

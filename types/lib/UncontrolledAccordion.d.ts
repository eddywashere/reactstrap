import { AccordionProps } from './Accordion';

export interface UncontrolledAccordionProps extends AccordionProps {
  defaultOpen?: string | string[];
  stayOpen?: boolean;
}

declare class UncontrolledAccordion extends React.Component<UncontrolledAccordionProps> {}
export default UncontrolledAccordion;

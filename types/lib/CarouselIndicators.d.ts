import * as React from 'react';
import { CSSModule } from './index';

export interface CarouselIndicatorsProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  items: Array<{
    [key: string]: any;
    props?: { [key: string]: any };
  }>;
  activeIndex: number;
  cssModule?: CSSModule;
  onClickHandler: (idx: number) => void;
}

declare class CarouselIndicators extends React.Component<
  CarouselIndicatorsProps
> {}
export default CarouselIndicators;

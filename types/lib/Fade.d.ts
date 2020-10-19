import * as React from 'react';
import { CSSModule } from './index';

export interface FadeProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  in?: boolean;
  baseClass?: string;
  baseClassIn?: string;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
  transitionAppear?: boolean;
  transitionEnter?: boolean;
  transitionLeave?: boolean;
  onLeave?: () => void;
  onEnter?: () => void;
}

declare class Fade extends React.Component<FadeProps> {}
export default Fade;

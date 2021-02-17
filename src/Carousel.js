import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CarouselItem from './CarouselItem';
import { mapToCssModules } from './utils';
    
const SWIPE_THRESHOLD = 40;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.hoverStart = this.hoverStart.bind(this);
    this.hoverEnd = this.hoverEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.state = {
      activeIndex: this.props.activeIndex,
      direction: 'right',
      indicatorClicked: false,
    };
  }

  getChildContext() {
    return { direction: this.state.direction };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    }

    // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
    document.addEventListener('keyup', this.handleKeyPress);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = null;
    let { activeIndex, direction, indicatorClicked } = prevState;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'right';
      } else if (nextProps.activeIndex === activeIndex -1) {
        direction = 'left';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'left' : 'right';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'right' : 'left';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction,
        indicatorClicked: false,
      }
    }

    return newState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  }

  componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  setInterval(props = this.props) {
    // make sure not to have multiple intervals going...
    this.clearInterval();
    if (props.interval) {
      this.cycleInterval = setInterval(() => {
        props.next();
      }, parseInt(props.interval, 10));
    }
  }

  clearInterval() {
    clearInterval(this.cycleInterval);
  }

  hoverStart(...args) {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }
    if (this.props.mouseEnter) {
      this.props.mouseEnter(...args);
    }
  }

  hoverEnd(...args) {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }
    if (this.props.mouseLeave) {
      this.props.mouseLeave(...args);
    }
  }

  handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  }

  handleTouchStart(e) {
    if(!this.props.enableTouch) {
      return;
    }
    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  }

  handleTouchEnd(e) {
    if(!this.props.enableTouch) {
      return;
    }

    const currentX = e.changedTouches[0].screenX;
    const currentY = e.changedTouches[0].screenY;
    const diffX = Math.abs(this.touchStartX - currentX);
    const diffY = Math.abs(this.touchStartY - currentY);

    // Don't swipe if Y-movement is bigger than X-movement
    if(diffX < diffY) {
      return;
    }

    if(diffX < SWIPE_THRESHOLD) {
      return;
    }

    if(currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  }

  renderItems(carouselItems, className) {
    const { slide } = this.props;
    return (
      <div className={className}>
        {carouselItems.map((item, index) => {
          const isIn = (index === this.state.activeIndex);
          return React.cloneElement(item, {
            in: isIn,
            slide: slide,
          });
        })}
      </div>
    );
  }

  render() {
    const { cssModule, slide, className, dark } = this.props;
    const outerClasses = mapToCssModules(classNames(
      className,
      'carousel',
      slide && 'slide',
      dark && 'carousel-dark'
    ), cssModule);

    const innerClasses = mapToCssModules(classNames(
      'carousel-inner'
    ), cssModule);

    // filter out booleans, null, or undefined
    const children = this.props.children.filter(child => child !== null && child !== undefined && typeof child !== 'boolean');

    const slidesOnly = children.every(child => child.type === CarouselItem);

    // Rendering only slides
    if (slidesOnly) {
      return (
        <div className={outerClasses} onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
          {this.renderItems(children, innerClasses)}
        </div>
      );
    }

    // Rendering slides and controls
    if (children[0] instanceof Array) {
      const carouselItems = children[0];
      const controlLeft = children[1];
      const controlRight = children[2];

      return (
        <div className={outerClasses} onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
          {this.renderItems(carouselItems, innerClasses)}
          {controlLeft}
          {controlRight}
        </div>
      );
    }

    // Rendering indicators, slides and controls
    const indicators = children[0];
    const wrappedOnClick = (e) => {
      if (typeof indicators.props.onClickHandler === 'function') {
        this.setState({ indicatorClicked: true }, () => indicators.props.onClickHandler(e));
      }
    };
    const wrappedIndicators = React.cloneElement(indicators, { onClickHandler: wrappedOnClick });
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];

    return (
      <div className={outerClasses} onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}
        onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>
        {wrappedIndicators}
        {this.renderItems(carouselItems, innerClasses)}
        {controlLeft}
        {controlRight}
      </div>
    );
  }
}

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  // make the controls, indicators and captions dark on the Carousel
  dark: PropTypes.bool,
  cssModule: PropTypes.object,
  className: PropTypes.string,
  enableTouch: PropTypes.bool,
};

Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true,
};

Carousel.childContextTypes = {
  direction: PropTypes.string
};

export default Carousel;

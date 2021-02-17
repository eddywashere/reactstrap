/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import CarouselExample from '../examples/Carousel';
const CarouselExampleSource = require('!!raw-loader!../examples/Carousel');
import CarouselUncontrolledExample from '../examples/CarouselUncontrolled';
const CarouselUncontrolledExampleSource = require('!!raw-loader!../examples/CarouselUncontrolled');
import CarouselCustomTagExample from '../examples/CarouselCustomTag';
const CarouselCustomTagExampleSource = require('!!raw-loader!../examples/CarouselCustomTag');

export default class CarouselPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Carousel" />
        <div className="docs-example">
          <CarouselExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CarouselExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Carousel Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Carousel.propTypes = {
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
  // If set to false, carousel will not Autoplay (i.e. will not automatically cycle).
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
  // controls whether the touch gestures on the Carousel works or not (default: true)
  enableTouch: PropTypes.bool,
};`}
          </PrismCode>
        </pre>

        <SectionTitle>CarouselItem Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`CarouselItem.propTypes = {
  ...Transition.propTypes,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  in: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  slide: PropTypes.bool,
};`}
          </PrismCode>
        </pre>

        <SectionTitle>CarouselControl Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string
};`}
          </PrismCode>
        </pre>

        <SectionTitle>CarouselIndicators Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  cssModule: PropTypes.object,
  onClickHandler: PropTypes.func.isRequired
};`}
          </PrismCode>
        </pre>

        <SectionTitle>CarouselCaption Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`CarouselCaption.propTypes = {
  captionHeader: PropTypes.node,
  captionText: PropTypes.node.isRequired,
  cssModule: PropTypes.object
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Uncontrolled Carousel</SectionTitle>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledCarousel</code> does not require <code>previous</code>, <code>next</code> nor <code>activeIndex</code> props to work.
          Anything provided to a normal <code>Carousel</code> can also be provided to <code>UncontrolledCarousel</code>, overriding the control <code>UncontrolledCarousel</code> provides. Additionally, you can hide the controls by passing <code>false</code> to the <code>controls</code> prop
          and you can disable the indicators by passing <code>false</code> to the <code>indicators</code> prop; both are visible by default. Autoplay (<code>ride="carousel"</code>) is enabled by default, you can disable it by passing <code>false</code> to the <code>autoPlay</code> prop.
        </p>
        <div className="docs-example">
          <CarouselUncontrolledExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CarouselUncontrolledExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Uncontrolled Carousel Properties</SectionTitle>
        <p>Same as Carousel (except children) can be overridden plus the following</p>
        <pre>
          <PrismCode className="language-jsx">
{`UncontrolledCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool, // default: true
  controls: PropTypes.bool, // default: true
  autoPlay: PropTypes.bool, // default: true
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Carousel using a tag and classname</SectionTitle>
        <div className="docs-example">
          <CarouselCustomTagExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CarouselCustomTagExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

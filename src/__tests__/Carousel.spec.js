import React from 'react';
import { mount } from 'enzyme';
import { Carousel } from '../';
import CarouselItem from '../CarouselItem';
import CarouselIndicators from '../CarouselIndicators';
import CarouselControl from '../CarouselControl';
import CarouselCaption from '../CarouselCaption';

describe('Carousel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  const items = [
    { src: '', altText: 'a', caption: 'caption 1' },
    { src: '', altText: 'b', caption: 'caption 2' },
    { src: '', altText: 'c', caption: 'caption 3' }
  ];

  describe('captions', () => {
    it('should render a header and a caption', () => {
      const wrapper = mount(<CarouselCaption captionHeader="abc" captionText="def" />);
      expect(wrapper.find('h3').length).toEqual(1);
      expect(wrapper.find('p').length).toEqual(1);
    });
  });

  describe('items', () => {
    it('should render custom tag', () => {
      const wrapper = mount(<CarouselItem tag="img" />);
      expect(wrapper.find('img').length).toBe(1);
    });

    it('should render an image if one is passed in', () => {
      const wrapper = mount(
        <CarouselItem>
          <img src={items[0].src} alt={items[0].src} />
        </CarouselItem>
      );
      expect(wrapper.find('img').length).toEqual(1);
    });

    it('should render a caption if one is passed in', () => {
      const wrapper = mount(
        <CarouselItem>
          <CarouselCaption captionHeader="text" captionText="text" />
        </CarouselItem>
      );
      expect(wrapper.find(CarouselCaption).length).toEqual(1);
    });

    describe('transitions', () => {
      it('should add the appropriate classes when entering right', () => {
        const wrapper = mount(<CarouselItem in={false} />, { context: { direction: 'right' } });

        wrapper.setProps({ in: true });
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item carousel-item-left carousel-item-next');
        jest.runTimersToTime(600);
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item active');
        wrapper.setProps({ in: false });
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item active carousel-item-left');
        jest.runTimersToTime(600);
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item');
      });

      it('should add the appropriate classes when entering left', () => {
        const wrapper = mount(<CarouselItem in={false} />, { context: { direction: 'left' } });

        wrapper.setProps({ in: true });
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item carousel-item-right carousel-item-prev');
        jest.runTimersToTime(600);
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item active');
        wrapper.setProps({ in: false });
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item active carousel-item-right');
        jest.runTimersToTime(600);
        expect(wrapper.update().find('div').prop('className')).toEqual('carousel-item');
      });

      it('should call all callbacks when transitioning in and out', () => {
        const callbacks = {
          onEnter: jest.fn(),
          onEntering: jest.fn(),
          onEntered: jest.fn(),
          onExit: jest.fn(),
          onExiting: jest.fn(),
          onExited: jest.fn(),
        };
        const wrapper = mount(<CarouselItem in={false} {...callbacks} />);
        wrapper.setProps({ in: true });
        expect(callbacks.onEnter).toHaveBeenCalled();
        expect(callbacks.onEntering).toHaveBeenCalled();
        expect(callbacks.onEntered).not.toHaveBeenCalled();
        jest.runTimersToTime(600);
        expect(callbacks.onEntered).toHaveBeenCalled();
        expect(callbacks.onExit).not.toHaveBeenCalled();

        wrapper.setProps({ in: false });
        expect(callbacks.onExit).toHaveBeenCalled();
        expect(callbacks.onExiting).toHaveBeenCalled();
        expect(callbacks.onExited).not.toHaveBeenCalled();
        jest.runTimersToTime(600);
        expect(callbacks.onExiting).toHaveBeenCalled();
        expect(callbacks.onExited).toHaveBeenCalled();

        wrapper.unmount();
      });
    });
  });

  describe('indicators', () => {
    it('should render a list with the right number of items', () => {
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />);
      expect(wrapper.find('ol').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(3);
    });

    it('should append the correct active class', () => {
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />);
      expect(wrapper.find('.active').hostNodes().length).toEqual(1);
    });

    it('should call the click hanlder', () => {
      const onClick = jest.fn();
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={onClick} />);
      wrapper.find('li').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('controls', () => {
    it('should render an anchor tag', () => {
      const wrapper = mount(<CarouselControl direction="next" onClickHandler={() => { }} />);
      expect(wrapper.find('a').length).toEqual(1);
    });

    it('should call the onClickHandler', () => {
      const onClick = jest.fn();
      const wrapper = mount(<CarouselControl direction="next" onClickHandler={onClick} />);
      wrapper.find('a').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    it('should show the carousel indicators', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          <CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />
          {slides}
        </Carousel>
      );

      expect(wrapper.find(CarouselIndicators).length).toEqual(1);
    });

    it('should show controls', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => { }} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => { }} />
        </Carousel>
      );

      expect(wrapper.find(CarouselControl).length).toEqual(2);
    });

    it('should show a single slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );
      expect(wrapper.find('.carousel-item.active').hostNodes().length).toEqual(1);
    });

    it('should show indicators and controls', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          <CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => { }} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => { }} />
        </Carousel>
      );

      expect(wrapper.find(CarouselControl).length).toEqual(2);
      expect(wrapper.find(CarouselIndicators).length).toEqual(1);
    });

    it('should tolerate booleans, null and undefined values rendered as children of Carousel', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          {null}
          {true}
          {false}
          {undefined}
          {(() => {})()}
          <CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => { }} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => { }} />
        </Carousel>
      );
      expect(wrapper.find(CarouselControl).length).toEqual(2);
      expect(wrapper.find(CarouselIndicators).length).toEqual(1);
    });

    it('should not have the class "carousel-dark" by default', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem key={idx} />
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );

      expect(wrapper.find('.carousel-dark').length).toBe(0);
    });

    it('should have the class "carousel-dark" when dark prop is true', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem key={idx} />
        );
      });

      const wrapper = mount(
        <Carousel dark activeIndex={0} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );

      expect(wrapper.find('.carousel-dark').length).toBe(1);
    });
  });

  describe('carouseling', () => {
    it('should set indicatorClicked to true if indicator clicked', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0} next={() => { }} previous={() => { }}>
          <CarouselIndicators items={items} activeIndex={0} onClickHandler={() => function () {}} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => { }} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => { }} />
        </Carousel>
      );

      wrapper.find(CarouselIndicators).find('li').first().simulate('click');
      expect(wrapper.state().indicatorClicked).toEqual(true);
    });

    it('should go right when the index increases', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={0} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 1 });
      expect(wrapper.state().direction).toEqual('right');
    });

    it('should go left when the index decreases', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={1} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('left');
    });

    it('should go right if transitioning from the last to first slide by non-indicator', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={2} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('right');
    });

    it('should go left if transitioning from the last to first slide by indicator', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={2} next={() => { }} previous={() => { }}>
          <CarouselIndicators items={items} activeIndex={2} onClickHandler={() => { }} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => { }} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => { }} />
        </Carousel>
      );

      wrapper.setState({ indicatorClicked: true });
      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('left');
    });

    it('should go left if transitioning from the first to last slide by non-indicator', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={0} next={() => { }} previous={() => { }}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 2 });
      expect(wrapper.state().direction).toEqual('left');
    });
  });

  it('should go right if transitioning from the first to last slide by indicator', () => {
    const slides = items.map((item, idx) => {
      return (
        <CarouselItem
          key={idx}
        >
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    const wrapper = mount(
      <Carousel interval={1000} activeIndex={0} next={() => { }} previous={() => { }}>
        <CarouselIndicators items={items} activeIndex={0} onClickHandler={() => { }} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => { }} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={() => { }} />
      </Carousel>
    );

    wrapper.setState({ indicatorClicked: true });
    wrapper.setProps({ activeIndex: 2 });
    expect(wrapper.state().direction).toEqual('right');
  });

  describe('interval', () => {
    it('should not autoplay by default', () => {
      const next = jest.fn();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} previous={() => { }} interval={1000} activeIndex={0}>
          {slides}
        </Carousel>
      );
      jest.runTimersToTime(1000);
      expect(next).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should autoplay when ride is carousel', () => {
      const next = jest.fn();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} previous={() => { }} interval={1000} activeIndex={0} ride="carousel">
          {slides}
        </Carousel>
      );
      jest.runTimersToTime(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should accept a number', () => {
      const next = jest.fn();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} previous={() => { }} interval={1000} activeIndex={0} ride="carousel">
          {slides}
        </Carousel>
      );
      jest.runTimersToTime(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should accept a boolean', () => {
      const next = jest.fn();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} previous={() => { }} activeIndex={0} interval={false}>
          {slides}
        </Carousel>
      );
      jest.runTimersToTime(5000);
      expect(next).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should default to 5000', () => {
      const next = jest.fn();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} previous={() => { }} activeIndex={0} ride="carousel">
          {slides}
        </Carousel>
      );
      jest.runTimersToTime(5000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('it should accept a string', () => {
      const next = jest.fn();
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
      const wrapper = mount(
        <Carousel next={next} previous={() => { }} interval="1000" activeIndex={0} ride="carousel">
          {slides}
        </Carousel>
      );
      jest.runTimersToTime(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });
  });
});

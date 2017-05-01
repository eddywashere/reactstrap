import React from 'react';
import { mount } from 'enzyme';
import { Carousel } from '../';
import CarouselItem from '../CarouselItem';
import CarouselIndicators from '../CarouselIndicators';
import CarouselControl from '../CarouselControl';
import CarouselCaption from '../CarouselCaption';

describe('Carousel', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
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
    it('should render an img tag', () => {
      const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />);
      expect(wrapper.find('img').length).toEqual(1);
    });

    it('should render a caption if one is passed in', () => {
      const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} captionText="abc" />);
      expect(wrapper.find(CarouselCaption).length).toEqual(1);
    });

    describe('transitions', () => {
      it('should add the appropriate classes when componentWillEnter is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillEnter();
        expect(wrapper.state('animation')).toEqual(['carousel-item-next', 'carousel-item-left']);
        wrapper.setContext({ direction: 'left' });
        wrapper.instance().componentWillEnter();
        expect(wrapper.state('animation')).toEqual(['carousel-item-prev', 'carousel-item-right']);
      });

      it('should call the callback after 500 when componentWillEnter is called', () => {
        const callback = jasmine.createSpy('callback');
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillEnter(callback);
        jasmine.clock().tick(500);
        expect(callback).toHaveBeenCalled();
      });

      it('should add the appropriate classes when componentDidEnter is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentDidEnter();
        expect(wrapper.state('animation')).toEqual(['active']);
      });

      it('should add the appropriate classes when componentWillLeave is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillLeave();
        expect(wrapper.state('animation')).toEqual(['carousel-item-left', 'active']);
        wrapper.setContext({ direction: 'left' });
        wrapper.instance().componentWillLeave();
        expect(wrapper.state('animation')).toEqual(['carousel-item-right', 'active']);
      });

      it('should call the callback after 500 when componentWillLeave is called', () => {
        const callback = jasmine.createSpy('callback');
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillLeave(callback);
        jasmine.clock().tick(500);
        expect(callback).toHaveBeenCalled();
      });

      it('should add the appropriate classes when componentDidLeave is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentDidLeave();
        expect(wrapper.state('animation')).toEqual([]);
      });

      it('should add the appropriate classes when componentWillAppear is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillAppear(() => {});
        expect(wrapper.state('animation')).toEqual(['active']);
      });
    });
  });

  describe('indicators', () => {
    it('should render a list with the right number of items', () => {
      const wrapper = mount(<CarouselIndicators items={items} />);
      expect(wrapper.find('ol').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(3);
    });

    it('should append the correct active class', () => {
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} />);
      expect(wrapper.find('.active').length).toEqual(1);
    });

    it('should call the click hanlder', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={onClick} />);
      wrapper.find('li').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('controls', () => {
    it('should render an anchor tag', () => {
      const wrapper = mount(<CarouselControl />);
      expect(wrapper.find('a').length).toEqual(1);
    });

    it('should call the onClickHandler', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<CarouselControl onClickHandler={onClick} />);
      wrapper.find('a').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    it('should show the carousel indicators', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.find(CarouselIndicators).length).toEqual(1);
    });

    it('should show a single slide', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.find(CarouselItem).length).toEqual(1);
    });

    it('should show two controls', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.find(CarouselControl).length).toEqual(2);
    });
  });

  describe('carouseling', () => {
    it('should default to zero as the active index', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.state('activeIndex')).toEqual(0);
      wrapper.unmount();
    });

    it('should accept an active index', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={1} />);
      expect(wrapper.state('activeIndex')).toEqual(1);
      wrapper.unmount();
    });

    it('should change the active index on next', () => {
      const wrapper = mount(<Carousel items={items} />);
      wrapper.instance().next();
      expect(wrapper.state('activeIndex')).toEqual(1);
      wrapper.unmount();
    });

    it('should change the active index on prev', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={1} />);
      wrapper.instance().previous();
      expect(wrapper.state('activeIndex')).toEqual(0);
      wrapper.unmount();
    });

    it('cycle to zero when at the end of the items', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={2} />);
      wrapper.instance().next();
      expect(wrapper.state('activeIndex')).toEqual(0);
      wrapper.unmount();
    });

    it('cycle to the end of the items when at zero', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={0} />);
      wrapper.instance().previous();
      expect(wrapper.state('activeIndex')).toEqual(2);
      wrapper.unmount();
    });

    it('should go to the specified index', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={0} />);
      wrapper.instance().number(2);
      expect(wrapper.state('activeIndex')).toEqual(2);
      wrapper.unmount();
    });
  });

  describe('interval', () => {
    it('should accept a number', () => {
      const wrapper = mount(<Carousel items={items} interval={1000} />);
      expect(wrapper.state('interval')).toEqual(1000);
      wrapper.unmount();
    });

    it('should accept a boolean', () => {
      const wrapper = mount(<Carousel items={items} interval={false} />);
      expect(wrapper.state('interval')).toEqual(false);
      wrapper.unmount();
    });

    it('should default to 5000', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.state('interval')).toEqual(5000);
      wrapper.unmount();
    });

    it('should change the active index after the interval when cycle is present', () => {
      const wrapper = mount(<Carousel items={items} cycle />);
      expect(wrapper.state('activeIndex')).toEqual(0);
      jasmine.clock().tick(5000);
      expect(wrapper.state('activeIndex')).toEqual(1);
    });

    it('should change direction if not wrapping and at the end of the items', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={2} wrap={false} cycle />);
      jasmine.clock().tick(5000);
      expect(wrapper.state('activeIndex')).toEqual(1);
      expect(wrapper.state('cycleDirection')).toEqual('left');
    });

    it('should change direction if not wrapping and at the end of the beginning of the items', () => {
      const wrapper = mount(<Carousel items={items} wrap={false} cycle />);
      jasmine.clock().tick(5000);
      expect(wrapper.state('activeIndex')).toEqual(1);
      expect(wrapper.state('cycleDirection')).toEqual('right');
    });

    it('should cycle in the appropriate direction', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={1} wrap={false} cycle />);
      wrapper.setState({ cycleDirection: 'left' });
      jasmine.clock().tick(5000);
      expect(wrapper.state('activeIndex')).toEqual(0);
    });
  });

  describe('hover', () => {
    it('should pause cycling when hover is passed in', () => {
      const wrapper = mount(<Carousel items={items} hover="hover" cycle />);
      expect(wrapper.state('hover')).toEqual('hover');
      expect(wrapper.state('cycle')).toEqual(true);
      wrapper.instance().pause();
      expect(wrapper.state('cycle')).toEqual(false);
    });

    it('should not pause cycling without hover', () => {
      const wrapper = mount(<Carousel items={items} cycle />);
      expect(wrapper.state('cycle')).toEqual(true);
      wrapper.instance().pause();
      expect(wrapper.state('cycle')).toEqual(true);
    });

    it('should not restart cycling without hover', () => {
      const wrapper = mount(<Carousel items={items} hover="hover" cycle />);
      expect(wrapper.state('cycle')).toEqual(true);
      wrapper.instance().pause();
      expect(wrapper.state('cycle')).toEqual(false);
      wrapper.instance().cycle();
      expect(wrapper.state('cycle')).toEqual(true);
    });

    it('should default hover to false', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.state('hover')).toEqual(false);
    });
  });

  describe('wrap', () => {
    it('should default to true', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.state('wrap')).toEqual(true);
    });

    it('should show the carousel controls when wrap is true', () => {
      const wrapper = mount(<Carousel items={items} />);
      expect(wrapper.find(CarouselControl).length).toEqual(2);
    });

    it('should show one carousel controls when active index is zero and wrap is false', () => {
      const wrapper = mount(<Carousel items={items} wrap={false} />);
      expect(wrapper.find(CarouselControl).length).toEqual(1);
    });

    it('should show one carousel controls when active index is the last item and wrap is false', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={2} wrap={false} />);
      expect(wrapper.find(CarouselControl).length).toEqual(1);
    });

    it('should not show the carousel controls when active is ', () => {
      const wrapper = mount(<Carousel items={items} activeIndex={1} wrap={false} />);
      expect(wrapper.find(CarouselControl).length).toEqual(2);
    });
  });
});

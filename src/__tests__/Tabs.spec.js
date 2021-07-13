import React from 'react';
import { shallow, mount } from 'enzyme';
import { TabContent, TabPane } from '../';

let activeTab = '1';
describe('Tabs', () => {
  it('should render', () => {
    activeTab = '1';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    expect(tab1.find('.tab-content').hostNodes().length).toBe(1);
    expect(tab1.find('.tab-pane').hostNodes().length).toBe(2);
  });

  it('should have tab1 as active', () => {
    activeTab = '1';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    expect(tab1.find('.tab-content .tab-pane').hostNodes().at(0).hasClass('active')).toBe(true);
  });

  it('should switch to tab2 as active when clicked', () => {
    activeTab = '2';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    expect(tab1.find('.tab-content .tab-pane').hostNodes().at(1).hasClass('active')).toBe(true);
  });

  it('should not setState when the active tab does not change during a prop update', () => {
    const tab1 = mount(<TabContent activeTab={1} />);
    const instance = tab1.instance();
    jest.spyOn(instance, 'setState');
    tab1.setProps({ style: { textAlign: 'left' } });
    expect(instance.setState).not.toHaveBeenCalled();
  });

  it('should show no active tabs if active tab id is unknown', () => {
    activeTab = '3';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    /* Not sure if this is what we want. Toggling to an unknown tab id should
      render all tabs as inactive and should show no content.
      This could be a warning during development that the user is not having a proper tab ids.
      NOTE: Should this be different?
    */
    expect(tab1.find('.tab-content .tab-pane').hostNodes().at(0).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').hostNodes().at(1).hasClass('active')).toBe(false);
  });
  it('should call setState when the active tab does change during a prop update', () => {
    const tab1 = mount(<TabContent activeTab={1} />);
    expect(tab1.state().activeTab).toEqual(1);
    tab1.setProps({ activeTab: 2 });
    expect(tab1.state().activeTab).toEqual(2);
  });

  it('should render custom TabContent tag', () => {
    const wrapper = shallow(
      <TabContent tag="main" activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );

    expect(wrapper.childAt(0).type()).toBe('main');
  });

  it('should not render inactive tabs when unmountOnExit prop set to true', () => {
    activeTab = '1';
    const wrapper = mount(
      <TabContent unmountOnExit={true} activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );

    expect(wrapper.find('.tab-content .tab-pane').length).toBe(1);
  });

  it('should render all tabs when unmountOnExit prop set to false', () => {
    activeTab = '1';
    const wrapper = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );

    expect(wrapper.find('.tab-content .tab-pane').length).toBe(2);
  });

  it('should render custom TabPane tag', () => {
    const wrapper = mount(<TabPane tag="main" tabId="1">Tab Content 1</TabPane>, { context: {} });

    expect(wrapper.childAt(0).type()).toBe('main');
  });
});

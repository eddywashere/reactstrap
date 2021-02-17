import React from 'react';
import Content from '../UI/Content';

const items = [
  {
    name: 'Accordion',
    to: '/components/accordion/'
  },
  {
    name: 'Alerts',
    to: '/components/alerts/'
  },
  {
    name: 'Badge',
    to: '/components/badge/'
  },
  {
    name: 'Breadcrumbs',
    to: '/components/breadcrumbs/'
  },
  {
    name: 'Buttons',
    to: '/components/buttons/'
  },
  {
    name: 'Button Dropdown',
    to: '/components/button-dropdown/'
  },
  {
    name: 'Button Group',
    to: '/components/button-group/'
  },
  {
    name: 'Card',
    to: '/components/card/'
  },
  {
    name: 'Carousel',
    to: '/components/carousel/'
  },
  {
    name: 'Collapse',
    to: '/components/collapse/'
  },
  {
    name: 'Dropdowns',
    to: '/components/dropdowns/'
  },
  {
    name: 'Fade',
    to: '/components/fade/'
  },
  {
    name: 'Form',
    to: '/components/form/'
  },
  {
    name: 'Input Group',
    to: '/components/input-group/'
  },
  {
    name: 'Jumbotron',
    to: '/components/jumbotron/'
  },
  {
    name: 'Layout',
    to: '/components/layout/'
  },
  {
    name: 'List Group',
    to: '/components/listgroup/'
  },
  {
    name: 'Media',
    to: '/components/media/'
  },
  {
    name: 'Modals',
    to: '/components/modals/'
  },
  {
    name: 'Navbar',
    to: '/components/navbar/'
  },
  {
    name: 'Navs',
    to: '/components/navs/'
  },
  {
    name: 'Spinners',
    to: '/components/spinners/'
  },
  {
    name: 'Toasts',
    to: '/components/toasts/'
  },
  {
    name: 'Pagination',
    to: '/components/pagination/'
  },
  {
    name: 'Popovers',
    to: '/components/popovers/'
  },
  {
    name: 'Progress',
    to: '/components/progress/'
  },
  {
    name: 'Tables',
    to: '/components/tables/'
  },
  {
    name: 'Tabs',
    to: '/components/tabs/'
  },
  {
    name: 'Tooltips',
    to: '/components/tooltips/'
  }
];

function Components(props) {
  return <Content title="Components" items={items} {...props} />;
}

export default Components;

import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import PremiumThemes from './PremiumThemes';
import LayoutPage from './Components/LayoutPage';
import NavsPage from './Components/NavsPage';
import NavbarPage from './Components/NavbarPage';
import BreadcrumbsPage from './Components/BreadcrumbsPage';
import ButtonsPage from './Components/ButtonsPage';
import ButtonGroupPage from './Components/ButtonGroupPage';
import ButtonDropdownPage from './Components/ButtonDropdownPage';
import DropdownsPage from './Components/DropdownsPage';
import FadePage from './Components/FadePage';
import FormPage from './Components/FormPage';
import InputGroupPage from './Components/InputGroupPage';
import PopoversPage from './Components/PopoversPage';
import ProgressPage from './Components/ProgressPage';
import TooltipsPage from './Components/TooltipsPage';
import BadgePage from './Components/BadgePage';
import AccordionPage from './Components/AccordionPage';
import MediaPage from './Components/MediaPage';
import ModalsPage from './Components/ModalsPage';
import CardPage from './Components/CardPage';
import TablesPage from './Components/TablesPage';
import PaginationPage from './Components/PaginationPage';
import TabsPage from './Components/TabsPage';
import JumbotronPage from './Components/JumbotronPage';
import AlertsPage from './Components/AlertsPage';
import ToastsPage from './Components/ToastsPage';
import CollapsePage from './Components/CollapsePage';
import CarouselPage from './Components/CarouselPage';
import ListGroupPage from './Components/ListGroupPage';
import SpinnersPage from './Components/SpinnersPage';
import ClearfixPage from './Utilities/ClearfixPage';
import ColorsPage from './Utilities/ColorsPage';
import NotFound from './NotFound';
import Components from './Components';
import Utilities from './Utilities';
import UI from './UI';

const routes = (
    <Route path="/" component={UI.Layout}>
      <IndexRoute component={Home} />
      <Route path="/components/" component={Components}>
        <IndexRedirect to="accordion/" />
        <Route path="accordion/" component={AccordionPage} />
        <Route path="breadcrumbs/" component={BreadcrumbsPage} />
        <Route path="buttons/" component={ButtonsPage} />
        <Route path="button-group/" component={ButtonGroupPage} />
        <Route path="button-dropdown/" component={ButtonDropdownPage} />
        <Route path="dropdowns/" component={DropdownsPage} />
        <Route path="fade/" component={FadePage} />
        <Route path="form/" component={FormPage} />
        <Route path="input-group/" component={InputGroupPage} />
        <Route path="popovers/" component={PopoversPage} />
        <Route path="progress/" component={ProgressPage} />
        <Route path="tooltips/" component={TooltipsPage} />
        <Route path="badge/" component={BadgePage} />
        <Route path="card/" component={CardPage} />
        <Route path="tables/" component={TablesPage} />
        <Route path="modals/" component={ModalsPage} />
        <Route path="layout/" component={LayoutPage} />
        <Route path="navs/" component={NavsPage} />
        <Route path="navbar/" component={NavbarPage} />
        <Route path="media/" component={MediaPage} />
        <Route path="pagination/" component={PaginationPage} />
        <Route path="tabs/" component={TabsPage} />
        <Route path="alerts/" component={AlertsPage} />
        <Route path="toasts/" component={ToastsPage} />
        <Route path="jumbotron/" component={JumbotronPage} />
        <Route path="collapse/" component={CollapsePage} />
        <Route path="carousel/" component={CarouselPage} />
        <Route path="listgroup/" component={ListGroupPage} />
        <Route path="spinners/" component={SpinnersPage} />
      </Route>
      <Route path="premium-themes/" component={PremiumThemes} />
      <Route path="/utilities/" component={Utilities}>
        <IndexRedirect to="colors/" />
        <Route path="colors/" component={ColorsPage} />
        <Route path="clearfix/" component={ClearfixPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
);

export default routes;

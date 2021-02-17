# [8.7.0](https://github.com/reactstrap/reactstrap/compare/8.6.0...8.7.0) (2020-10-31)


### Bug Fixes

* **DropdownMenu:** Prevent manual styles from overriding popper styles ([#1984](https://github.com/reactstrap/reactstrap/issues/1984)) ([dc2401b](https://github.com/reactstrap/reactstrap/commit/dc2401b388777b011bc6c75426a86a78013a2b8c))
* **Progress:** Fix parent element props being spread to children ([#1970](https://github.com/reactstrap/reactstrap/issues/1970)) ([c6a790c](https://github.com/reactstrap/reactstrap/commit/c6a790c7f4bdbfac0540d53896834638edf9c793))
* **types:** Add missing innerRef typings ([#1994](https://github.com/reactstrap/reactstrap/issues/1994)) ([fe24f69](https://github.com/reactstrap/reactstrap/commit/fe24f69be2dc9953896c49be73254f7787ad34ff)), closes [#1993](https://github.com/reactstrap/reactstrap/issues/1993)


### Features

* Add typescript definitions ([#1976](https://github.com/reactstrap/reactstrap/issues/1976)) ([2a47626](https://github.com/reactstrap/reactstrap/commit/2a47626dc088f1983239f606c91f6294c7e756d7))
* **DropdownItem:** Add support for .dropdown-item-text ([#1971](https://github.com/reactstrap/reactstrap/issues/1971)) ([c41b172](https://github.com/reactstrap/reactstrap/commit/c41b172180b92ba3f53444ca8f409c1cd10f895d))



# [8.6.0](https://github.com/reactstrap/reactstrap/compare/8.5.1...8.6.0) (2020-09-18)


### Bug Fixes

* **Input:** Allow numbers for size prop ([#1948](https://github.com/reactstrap/reactstrap/issues/1948)) ([b4c45af](https://github.com/reactstrap/reactstrap/commit/b4c45afe658ee5008274fbf687b22d35dfe12c51))
* **Progress:** pass attributes to nested Progress bar ([#1919](https://github.com/reactstrap/reactstrap/issues/1919)) ([f3c2586](https://github.com/reactstrap/reactstrap/commit/f3c2586bbf1cc86459b5c2fd4cb025512aead432)), closes [#1847](https://github.com/reactstrap/reactstrap/issues/1847) [#1847](https://github.com/reactstrap/reactstrap/issues/1847)


### Features

* **Button:** onClick of inner button returns value of props.onClick. ([f09cdd6](https://github.com/reactstrap/reactstrap/commit/f09cdd6c2fb496948760e962383b1fa657a2c5e0))



## [8.5.1](https://github.com/reactstrap/reactstrap/compare/8.5.0...8.5.1) (2020-06-24)


### Bug Fixes

* **polyfill:** check that window exists before defining CustomEvent ([#1855](https://github.com/reactstrap/reactstrap/issues/1855)) ([74b6802](https://github.com/reactstrap/reactstrap/commit/74b6802))



# [8.5.0](https://github.com/reactstrap/reactstrap/compare/8.4.1...8.5.0) (2020-06-23)


### Bug Fixes

* **Carousel:** ie11 compatibility changes([#799](https://github.com/reactstrap/reactstrap/issues/799)) ([#1585](https://github.com/reactstrap/reactstrap/issues/1585)) ([1fd2d22](https://github.com/reactstrap/reactstrap/commit/1fd2d22)), closes [/github.com/reactjs/react-transition-group/blob/9e3b2d3c09b78e755bdc837b7b38337812ede2c9/src/TransitionGroup.js#L11](https://github.com//github.com/reactjs/react-transition-group/blob/9e3b2d3c09b78e755bdc837b7b38337812ede2c9/src/TransitionGroup.js/issues/L11)
* **CustomInput:** hidden attribute [#1741](https://github.com/reactstrap/reactstrap/issues/1741) ([#1777](https://github.com/reactstrap/reactstrap/issues/1777)) ([bb39b55](https://github.com/reactstrap/reactstrap/commit/bb39b55))
* **DropdownToggle:** fix 0 value [#1496](https://github.com/reactstrap/reactstrap/issues/1496) ([#1780](https://github.com/reactstrap/reactstrap/issues/1780)) ([c4f86d5](https://github.com/reactstrap/reactstrap/commit/c4f86d5))
* **Input:** Aria-invalid attribute ([#1782](https://github.com/reactstrap/reactstrap/issues/1782)) ([ca113f1](https://github.com/reactstrap/reactstrap/commit/ca113f1))
* **Modal:** fix modal close immediately unmounted ([c8def29](https://github.com/reactstrap/reactstrap/commit/c8def29)), closes [#1323](https://github.com/reactstrap/reactstrap/issues/1323)
* **TooltipPopoverWrapper:** replacing find with filter to preve… ([#1776](https://github.com/reactstrap/reactstrap/issues/1776)) ([54648b6](https://github.com/reactstrap/reactstrap/commit/54648b6)), closes [#1774](https://github.com/reactstrap/reactstrap/issues/1774)


### Features

* **Input:** Use form-control-range for range inputs ([#1772](https://github.com/reactstrap/reactstrap/issues/1772)) ([56c1d77](https://github.com/reactstrap/reactstrap/commit/56c1d77))
* **Modal:** Allow passing in an element selector to append mod… ([#1817](https://github.com/reactstrap/reactstrap/issues/1817)) ([8f8cc98](https://github.com/reactstrap/reactstrap/commit/8f8cc98))
* **Modal:** match container behaviour to targetPropType like of Popover and Tooltip ([#1844](https://github.com/reactstrap/reactstrap/issues/1844)) ([6ea2488](https://github.com/reactstrap/reactstrap/commit/6ea2488))
* **PopoverContent:** add x-out-of-boundaries attribute ([607ce10](https://github.com/reactstrap/reactstrap/commit/607ce10)), closes [#1835](https://github.com/reactstrap/reactstrap/issues/1835)
* **Progress:** add aria props ([#1681](https://github.com/reactstrap/reactstrap/issues/1681)) ([#1787](https://github.com/reactstrap/reactstrap/issues/1787)) ([93f171d](https://github.com/reactstrap/reactstrap/commit/93f171d))
* **Progress:** Allow passing in custom style object ([#1771](https://github.com/reactstrap/reactstrap/issues/1771)) ([a79417a](https://github.com/reactstrap/reactstrap/commit/a79417a))
* **TooltipPopoverWrapper:** scheduleUpdate as render prop ([#1792](https://github.com/reactstrap/reactstrap/issues/1792)) ([cda6fe9](https://github.com/reactstrap/reactstrap/commit/cda6fe9))



## [8.4.1](https://github.com/reactstrap/reactstrap/compare/8.4.0...8.4.1) (2020-01-27)


### Bug Fixes

* **Modal:** Allow esc to close static backdrop modal when keybo… ([#1767](https://github.com/reactstrap/reactstrap/issues/1767)) ([49da7b5](https://github.com/reactstrap/reactstrap/commit/49da7b5)), closes [#1766](https://github.com/reactstrap/reactstrap/issues/1766)
* **Tooltip,Popover:** account for shadowDOM target ([#1769](https://github.com/reactstrap/reactstrap/issues/1769)) ([10ccf12](https://github.com/reactstrap/reactstrap/commit/10ccf12)), closes [#1691](https://github.com/reactstrap/reactstrap/issues/1691)



# [8.4.0](https://github.com/reactstrap/reactstrap/compare/8.3.2...8.4.0) (2020-01-17)


### Bug Fixes

* revert breaking change ([#1760](https://github.com/reactstrap/reactstrap/issues/1760)) ([eb37426](https://github.com/reactstrap/reactstrap/commit/eb37426))



## [8.3.2](https://github.com/reactstrap/reactstrap/compare/8.3.1...8.3.2) (2020-01-16)


### Bug Fixes

* **Modal:** Prevent static backdrop animation when modal clicked ([#1755](https://github.com/reactstrap/reactstrap/issues/1755)) ([79efb4a](https://github.com/reactstrap/reactstrap/commit/79efb4a))



## [8.3.1](https://github.com/reactstrap/reactstrap/compare/8.3.0...8.3.1) (2020-01-15)


### Bug Fixes

* **build:** fix DropdownContext import/export ([96188f4](https://github.com/reactstrap/reactstrap/commit/96188f4))



# [8.3.0](https://github.com/reactstrap/reactstrap/compare/8.2.0...8.3.0) (2020-01-15)

## NOT PUBLISHED TO NPM DUE TO RELEASE BUILD FAILURE, USE 8.3.1

### Bug Fixes

* remove aria-hidden attribute from tooltips and popovers ([#1747](https://github.com/reactstrap/reactstrap/issues/1747)) ([009a2bd](https://github.com/reactstrap/reactstrap/commit/009a2bd))
* **Dropdown:** Avoid preventDefault for things like F5 ([#1464](https://github.com/reactstrap/reactstrap/issues/1464)) ([305d3f0](https://github.com/reactstrap/reactstrap/commit/305d3f0)), closes [#1453](https://github.com/reactstrap/reactstrap/issues/1453)
* **DropdownContext:** wrap dropdown components to provide context prop ([64847df](https://github.com/reactstrap/reactstrap/commit/64847df)), closes [#1457](https://github.com/reactstrap/reactstrap/issues/1457) [#1462](https://github.com/reactstrap/reactstrap/issues/1462)
* **DropdownToggle:** pass innerRef to popper ([c088c58](https://github.com/reactstrap/reactstrap/commit/c088c58)), closes [#1471](https://github.com/reactstrap/reactstrap/issues/1471)
* **Modal:** run close based on prop, not state ([310b061](https://github.com/reactstrap/reactstrap/commit/310b061)), closes [#1626](https://github.com/reactstrap/reactstrap/issues/1626)
* **Tooltip:** autohide broken since default delay was zero ([#1733](https://github.com/reactstrap/reactstrap/issues/1733)) ([87a6bda](https://github.com/reactstrap/reactstrap/commit/87a6bda)), closes [#1692](https://github.com/reactstrap/reactstrap/issues/1692)
* **Tooltip:** fix nested elements within target ([#1746](https://github.com/reactstrap/reactstrap/issues/1746)) ([fed4bcf](https://github.com/reactstrap/reactstrap/commit/fed4bcf)), closes [#1736](https://github.com/reactstrap/reactstrap/issues/1736)
* **Tooltip:** fix render failure if target ref is null ([#1734](https://github.com/reactstrap/reactstrap/issues/1734)) ([853b56e](https://github.com/reactstrap/reactstrap/commit/853b56e)), closes [#1686](https://github.com/reactstrap/reactstrap/issues/1686)


### Features

* **Carousel:** Add touch swipe support ([#1731](https://github.com/reactstrap/reactstrap/issues/1731)) ([8a12330](https://github.com/reactstrap/reactstrap/commit/8a12330))
* **Modal:** Added static backdrop animation defined in Bootstr… ([#1750](https://github.com/reactstrap/reactstrap/issues/1750)) ([7d44f36](https://github.com/reactstrap/reactstrap/commit/7d44f36))



# [8.2.0](https://github.com/reactstrap/reactstrap/compare/8.1.1...8.2.0) (2019-12-05)


### Bug Fixes

* **getTarget:** return array like when allElements parameter is true ([#1687](https://github.com/reactstrap/reactstrap/issues/1687)) ([0702c45](https://github.com/reactstrap/reactstrap/commit/0702c45))
* **Tooltip:** default value of trigger changed ([#1695](https://github.com/reactstrap/reactstrap/issues/1695)) ([ae48d93](https://github.com/reactstrap/reactstrap/commit/ae48d93)), closes [#1676](https://github.com/reactstrap/reactstrap/issues/1676)


### Features

* **ButtonToggle:** add focus styling on button and toggle ([#1660](https://github.com/reactstrap/reactstrap/issues/1660)) ([8980713](https://github.com/reactstrap/reactstrap/commit/8980713)), closes [#1648](https://github.com/reactstrap/reactstrap/issues/1648)
* **Container:** Added responsive container support ([#1724](https://github.com/reactstrap/reactstrap/issues/1724)) ([31bb211](https://github.com/reactstrap/reactstrap/commit/31bb211)), closes [#1721](https://github.com/reactstrap/reactstrap/issues/1721)
* **ListGroup:** Add horizontal prop ([#1715](https://github.com/reactstrap/reactstrap/issues/1715)) ([284a543](https://github.com/reactstrap/reactstrap/commit/284a543))
* **Navbar:** adds NavbarText component ([#1711](https://github.com/reactstrap/reactstrap/issues/1711)) ([6db1083](https://github.com/reactstrap/reactstrap/commit/6db1083)), closes [#1707](https://github.com/reactstrap/reactstrap/issues/1707)
* **Popover/Tooltip:** add popperClassName property ([#1674](https://github.com/reactstrap/reactstrap/issues/1674)) ([44e85a8](https://github.com/reactstrap/reactstrap/commit/44e85a8)), closes [#1484](https://github.com/reactstrap/reactstrap/issues/1484)
* **Row:** Add row columns support ([#1720](https://github.com/reactstrap/reactstrap/issues/1720)) ([1fb3c17](https://github.com/reactstrap/reactstrap/commit/1fb3c17))
* **UncontrolledDropdown:** add onToggle callback ([#1705](https://github.com/reactstrap/reactstrap/issues/1705)) ([d9cae30](https://github.com/reactstrap/reactstrap/commit/d9cae30))



## [8.1.1](https://github.com/reactstrap/reactstrap/compare/8.1.0...8.1.1) (2019-10-18)


### Bug Fixes

* **Carousel:** rename unsafe lifecycles ([940438f](https://github.com/reactstrap/reactstrap/commit/940438f))
* **Dropdown:** fixed a11y property error message ([#1673](https://github.com/reactstrap/reactstrap/issues/1673))([87d28b6](https://github.com/reactstrap/reactstrap/commit/87d28b6)), closes [#1670](https://github.com/reactstrap/reactstrap/issues/1670)



# [8.1.0](https://github.com/reactstrap/reactstrap/compare/8.0.1...8.1.0) (2019-10-18)


### Bug Fixes

* **ButtonDropdown:** add close event when Escape key is pressed ([#1634](https://github.com/reactstrap/reactstrap/issues/1634)) ([#1635](https://github.com/reactstrap/reactstrap/issues/1635)) ([911d779](https://github.com/reactstrap/reactstrap/commit/911d779))
* **Carousel:** Add pointer on hover for controls ([#1654](https://github.com/reactstrap/reactstrap/issues/1654)) ([32f0c0d](https://github.com/reactstrap/reactstrap/commit/32f0c0d)), closes [#1631](https://github.com/reactstrap/reactstrap/issues/1631)
* **Collapse:** add aria-expanded attribute ([#1657](https://github.com/reactstrap/reactstrap/issues/1657)) ([2fdf15a](https://github.com/reactstrap/reactstrap/commit/2fdf15a))
* **CustomInput:** remove type prop from input node when type is select ([3e4c23f](https://github.com/reactstrap/reactstrap/commit/3e4c23f))
* **CustomInput[type=file]:** add CustomFileInput component ([#1461](https://github.com/reactstrap/reactstrap/issues/1461)) ([25e2480](https://github.com/reactstrap/reactstrap/commit/25e2480)), closes [#1460](https://github.com/reactstrap/reactstrap/issues/1460)
* **Dropdown:** disabled toggle ([#1571](https://github.com/reactstrap/reactstrap/issues/1571)) ([b4edeb8](https://github.com/reactstrap/reactstrap/commit/b4edeb8)), closes [#1542](https://github.com/reactstrap/reactstrap/issues/1542)
* **Tooltip:** Support for multiple target elements ([#1465](https://github.com/reactstrap/reactstrap/issues/1465)) ([45775c0](https://github.com/reactstrap/reactstrap/commit/45775c0)), closes [#1185](https://github.com/reactstrap/reactstrap/issues/1185) [#1185](https://github.com/reactstrap/reactstrap/issues/1185) [#1185](https://github.com/reactstrap/reactstrap/issues/1185) [#1185](https://github.com/reactstrap/reactstrap/issues/1185)
* **UncontrolledCarousel:** use item.key instead of item.src as… ([#1649](https://github.com/reactstrap/reactstrap/issues/1649)) ([5b9e758](https://github.com/reactstrap/reactstrap/commit/5b9e758)), closes [#1536](https://github.com/reactstrap/reactstrap/issues/1536)
* **Popover:** PopperContent memory leak ([#1669](https://github.com/reactstrap/reactstrap/issues/1669)) ([54d459c](https://github.com/reactstrap/reactstrap/commit/5b9e758)), closes [#1482](https://github.com/reactstrap/reactstrap/issues/1482) [#1488](https://github.com/reactstrap/reactstrap/issues/1488) [#1664](https://github.com/reactstrap/reactstrap/issues/1664)


### Features

* **Dropdown:** add a11y prop to tab moves focus ([#1600](https://github.com/reactstrap/reactstrap/issues/1600)) ([1bd965f](https://github.com/reactstrap/reactstrap/commit/1bd965f)), closes [#1441](https://github.com/reactstrap/reactstrap/issues/1441)
* **NavbarToggler:** add aria-label to NavbarToggler ([#1633](https://github.com/reactstrap/reactstrap/issues/1633)) ([dc0b8ae](https://github.com/reactstrap/reactstrap/commit/dc0b8ae)), closes [#1632](https://github.com/reactstrap/reactstrap/issues/1632)



<a name="8.0.1"></a>
## [8.0.1](https://github.com/reactstrap/reactstrap/compare/8.0.0...8.0.1) (2019-07-10)


### Bug Fixes

* **DropdownMenu:** Allow positionFixed prop to be passed through ([#1538](https://github.com/reactstrap/reactstrap/issues/1538)) ([01466ae](https://github.com/reactstrap/reactstrap/commit/01466ae)), closes [#1473](https://github.com/reactstrap/reactstrap/issues/1473)
* **FormGroup:** allow disable when tag is fieldset ([#1547](https://github.com/reactstrap/reactstrap/issues/1547)) ([0736f80](https://github.com/reactstrap/reactstrap/commit/0736f80)), closes [#1546](https://github.com/reactstrap/reactstrap/issues/1546)
* **Modal:** handle init modal in SSR ([#1495](https://github.com/reactstrap/reactstrap/issues/1495)) ([c844ab1](https://github.com/reactstrap/reactstrap/commit/c844ab1))
* **Modal:** update condition to call `setFocus` in case open mo… ([#1514](https://github.com/reactstrap/reactstrap/issues/1514)) ([ae6fe93](https://github.com/reactstrap/reactstrap/commit/ae6fe93))
* **Tooltip:** clear timeouts on unmount ([#1562](https://github.com/reactstrap/reactstrap/issues/1562)) ([e85238b](https://github.com/reactstrap/reactstrap/commit/e85238b)), closes [#1255](https://github.com/reactstrap/reactstrap/issues/1255)



<a name="8.0.0"></a>
# [8.0.0](https://github.com/reactstrap/reactstrap/compare/7.1.0...8.0.0) (2019-04-03)


### Bug Fixes

* **Carousel:** remove inappropriate role=listbox ([#1385](https://github.com/reactstrap/reactstrap/issues/1385)) ([32eb8ed](https://github.com/reactstrap/reactstrap/commit/32eb8ed))
* **Modal:** fix exception in focus management ([#1382](https://github.com/reactstrap/reactstrap/issues/1382)) ([5cc9af5](https://github.com/reactstrap/reactstrap/commit/5cc9af5))
* **Modal:** set Modal.openCount floor to 0 ([#1368](https://github.com/reactstrap/reactstrap/issues/1368)) ([71f9574](https://github.com/reactstrap/reactstrap/commit/71f9574))
* **Popover:** touch not opening popover on mobile ([#1425](https://github.com/reactstrap/reactstrap/issues/1425)) ([#1426](https://github.com/reactstrap/reactstrap/issues/1426)) ([ad2a9a0](https://github.com/reactstrap/reactstrap/commit/ad2a9a0))
* **Table:** add CSS Module support for responsive Table ([#1429](https://github.com/reactstrap/reactstrap/issues/1429)) ([#1430](https://github.com/reactstrap/reactstrap/issues/1430)) ([1e2dc5b](https://github.com/reactstrap/reactstrap/commit/1e2dc5b))
* **utils:** Shim Element in non-DOM environments ([#1387](https://github.com/reactstrap/reactstrap/issues/1387)) ([eb4ee93](https://github.com/reactstrap/reactstrap/commit/eb4ee93))


### Code Refactoring

* **Modal, Dropdown{*}, PopperContent, Tabs:** go to React Async Rendering ([#1427](https://github.com/reactstrap/reactstrap/issues/1427)) ([1afb2c2](https://github.com/reactstrap/reactstrap/commit/1afb2c2))


### Features

* **CustomInput:** added htmlFor prop ([#1417](https://github.com/reactstrap/reactstrap/issues/1417)) ([a590880](https://github.com/reactstrap/reactstrap/commit/a590880))
* **Modal:** add optional return focus after close ([#1424](https://github.com/reactstrap/reactstrap/issues/1424)) ([33cfce6](https://github.com/reactstrap/reactstrap/commit/33cfce6))
* **Modal:** add scrollable prop ([#1435](https://github.com/reactstrap/reactstrap/issues/1435)) ([9f7dd45](https://github.com/reactstrap/reactstrap/commit/9f7dd45))
* **pagination-links:** added props for first and last. changed carets… ([#1410](https://github.com/reactstrap/reactstrap/issues/1410)) ([70cfca2](https://github.com/reactstrap/reactstrap/commit/70cfca2))
* **Popover:** add default toggleable fade support ([#1364](https://github.com/reactstrap/reactstrap/issues/1364)) ([#1364](https://github.com/reactstrap/reactstrap/issues/1364)) ([ee15c86](https://github.com/reactstrap/reactstrap/commit/ee15c86)), closes [#363](https://github.com/reactstrap/reactstrap/issues/363)
* **Popover/Tooltip:** ability to pass through flip prop ([#1443](https://github.com/reactstrap/reactstrap/issues/1443)) ([4a5a8a3](https://github.com/reactstrap/reactstrap/commit/4a5a8a3))
* **Toast:** add support for Toasts ([#1447](https://github.com/reactstrap/reactstrap/issues/1447)) ([7ea7610](https://github.com/reactstrap/reactstrap/commit/7ea7610)), closes [#1384](https://github.com/reactstrap/reactstrap/issues/1384) [#1346](https://github.com/reactstrap/reactstrap/issues/1346)


### BREAKING CHANGES

* **Modal, Dropdown{*}, PopperContent, Tabs:** using new Context API, react-popper v. '1.3.3'
* **pagination-links:** Now the `next` and `previous` props are displaying single carets instead of double caret. To get the old style, use `first` and `last` props instead of `previous` and `next` respectfully and set `aria-label` to `Next` or `Previous`. 
* **Popover:** Popover and Tooltip will now fade in and out (like bootstrap's default). To get the previous behavior use fade={false}


### Removed Deprecations

* **`Card`'s `block` prop**: use `Card`s `body` prop.
* **`Input`'s `static` prop**: use `Input`s `plaintext` prop.
* **`Dropdown`'s `dropup` prop**: use `Dropdown`s `direction` prop with the value of `"up"`.
* **`Navbar`'s `toggleable` prop**: use `Navbar`s `expand` prop (see docs)`.
* **inverse prop**: use `dark` prop.
* **CardBlock**: use `CardBody`.
* **InputGroupButton**: use `InputGroupAddon`.
* **NavDropdown**: use `Dropdown` with `nav` prop.
* **PopoverContent**: use `PopoverBody`.
* **PopoverTitle**: use `PopoverHeader`.
* **UncontrolledNavDropdown**: use `UncontrolledDropdown` with `nav` prop.


<a name="7.1.0"></a>
# [7.1.0](https://github.com/reactstrap/reactstrap/compare/7.0.2...7.1.0) (2019-01-15)


### Bug Fixes

* **NavLink:** console error while using [@reach](https://github.com/reach)/Router ([#1350](https://github.com/reactstrap/reactstrap/issues/1350)) ([477e1a8](https://github.com/reactstrap/reactstrap/commit/477e1a8)), closes [#1308](https://github.com/reactstrap/reactstrap/issues/1308)


### Features

* support forwardRef components as tag ([4cda8bf](https://github.com/reactstrap/reactstrap/commit/4cda8bf))
* **Popover:** add legacy trigger, replacing unreleased isInteractive prop ([6b3c3ce](https://github.com/reactstrap/reactstrap/commit/6b3c3ce))
* **Popover:** backward-compatible Popover behavior ([#1360](https://github.com/reactstrap/reactstrap/issues/1360)) ([1d5ce83](https://github.com/reactstrap/reactstrap/commit/1d5ce83)), closes [#1349](https://github.com/reactstrap/reactstrap/issues/1349)
* **Spinner:** Add spinner component ([#1352](https://github.com/reactstrap/reactstrap/issues/1352)) ([45952e2](https://github.com/reactstrap/reactstrap/commit/45952e2)), closes [#1347](https://github.com/reactstrap/reactstrap/issues/1347)
* **Switch:** Add support for CustomInput type='switch' ([#1353](https://github.com/reactstrap/reactstrap/issues/1353)) ([7c1e166](https://github.com/reactstrap/reactstrap/commit/7c1e166)), closes [#1348](https://github.com/reactstrap/reactstrap/issues/1348)



<a name="7.0.2"></a>
## [7.0.2](https://github.com/reactstrap/reactstrap/compare/7.0.0...7.0.2) (2018-12-31)


### Bug Fixes

* fix release artifacts ([#1345](https://github.com/reactstrap/reactstrap/issues/1345)) ([b5710ef](https://github.com/reactstrap/reactstrap/commit/b5710ef))
* **npm:** fix published files ([7eedbab](https://github.com/reactstrap/reactstrap/commit/7eedbab))



<a name="7.0.1"></a>
## [7.0.1](https://github.com/reactstrap/reactstrap/compare/7.0.0...7.0.1) (2018-12-31)


### Bug Fixes

* fix release artifacts ([#1345](https://github.com/reactstrap/reactstrap/issues/1345)) ([b5710ef](https://github.com/reactstrap/reactstrap/commit/b5710ef))



<a name="7.0.0"></a>
# [7.0.0](https://github.com/reactstrap/reactstrap/compare/6.5.0...7.0.0) (2018-12-29)


### Bug Fixes

* **CardTitle,CardSubtitle:** div as default tag ([#1298](https://github.com/reactstrap/reactstrap/issues/1298)) ([ea0f1f0](https://github.com/reactstrap/reactstrap/commit/ea0f1f0)), closes [#1297](https://github.com/reactstrap/reactstrap/issues/1297)
* **CarouselIndicators:** li key generate from provided item values ([#1311](https://github.com/reactstrap/reactstrap/issues/1311)) ([fd7506d](https://github.com/reactstrap/reactstrap/commit/fd7506d)), closes [#1310](https://github.com/reactstrap/reactstrap/issues/1310)
* **Dropdown:** enter key triggers onClick -- correction ([#1306](https://github.com/reactstrap/reactstrap/issues/1306)) ([6b50732](https://github.com/reactstrap/reactstrap/commit/6b50732))
* **Dropdown:** improve keyboard ux, WAI-ARIA ([#1293](https://github.com/reactstrap/reactstrap/issues/1293)) ([506c46a](https://github.com/reactstrap/reactstrap/commit/506c46a))
* **Dropdown:** Null check on children ([#1294](https://github.com/reactstrap/reactstrap/issues/1294)) ([#1295](https://github.com/reactstrap/reactstrap/issues/1295)) ([dcfde3b](https://github.com/reactstrap/reactstrap/commit/dcfde3b))
* **FormGroup:** remove `.position-relative` ([#1270](https://github.com/reactstrap/reactstrap/issues/1270)) ([01eb5f9](https://github.com/reactstrap/reactstrap/commit/01eb5f9)), closes [#1269](https://github.com/reactstrap/reactstrap/issues/1269)
* **Input:** make plaintext output input by default ([#1226](https://github.com/reactstrap/reactstrap/issues/1226)) ([ff64c76](https://github.com/reactstrap/reactstrap/commit/ff64c76)), closes [#1225](https://github.com/reactstrap/reactstrap/issues/1225)
* **Modal:** don't propagate handled escape key event ([#1317](https://github.com/reactstrap/reactstrap/issues/1317)) ([5d45b26](https://github.com/reactstrap/reactstrap/commit/5d45b26))
* **Modal:** only show backdrop when prop is true ([#1271](https://github.com/reactstrap/reactstrap/issues/1271)) ([07ec4b5](https://github.com/reactstrap/reactstrap/commit/07ec4b5)), closes [#1267](https://github.com/reactstrap/reactstrap/issues/1267)
* **PopperContent:** Use create portal instead of unstable_renderSubtreeIntoContainer ([#1254](https://github.com/reactstrap/reactstrap/issues/1254)) ([81da8c5](https://github.com/reactstrap/reactstrap/commit/81da8c5)), closes [#1216](https://github.com/reactstrap/reactstrap/issues/1216)


### Features

* **Badge:** allow innerRef ([#1264](https://github.com/reactstrap/reactstrap/issues/1264)) ([2caaaa5](https://github.com/reactstrap/reactstrap/commit/2caaaa5))
* **CardBody:** add innerRef to CardBody ([#1318](https://github.com/reactstrap/reactstrap/issues/1318)) ([4b0474f](https://github.com/reactstrap/reactstrap/commit/4b0474f)), closes [#1314](https://github.com/reactstrap/reactstrap/issues/1314)
* **Table:** add innerRef prop ([#1296](https://github.com/reactstrap/reactstrap/issues/1296)) ([bb84c85](https://github.com/reactstrap/reactstrap/commit/bb84c85))
* **Tooltip,Popover:** base component for Tooltip and Popover ([#1222](https://github.com/reactstrap/reactstrap/issues/1222)) ([b45907b](https://github.com/reactstrap/reactstrap/commit/b45907b)), closes [#1022](https://github.com/reactstrap/reactstrap/issues/1022) [#1181](https://github.com/reactstrap/reactstrap/issues/1181)


### BREAKING CHANGES

* **Input:** previously plaintext on Input would output a 'p' tag. To better line up with bootstrap it will not output an 'input' tag. If you need a 'p' tag, provide tag="p" prop
* **Popover:** Popover will no longer dismiss when clicking away from it. To get this behaviour please use trigger="focus". In 7.1.0, trigger="legacy" has been added to get the exact previous behavior.



<a name="6.5.0"></a>
# [6.5.0](https://github.com/reactstrap/reactstrap/compare/6.4.0...6.5.0) (2018-10-04)


### Bug Fixes

* **boundariesElement:** add DOMElement to allowed proptypes ([#1238](https://github.com/reactstrap/reactstrap/issues/1238)) ([cfe7318](https://github.com/reactstrap/reactstrap/commit/cfe7318))
* **Dropdown:** enter key triggers onClick ([#1232](https://github.com/reactstrap/reactstrap/issues/1232)) ([f2528da](https://github.com/reactstrap/reactstrap/commit/f2528da)), closes [#1228](https://github.com/reactstrap/reactstrap/issues/1228)
* **Modal:** do not trigger focus on SVG elements ([#1212](https://github.com/reactstrap/reactstrap/issues/1212)) ([c7e6ef5](https://github.com/reactstrap/reactstrap/commit/c7e6ef5)), closes [#1208](https://github.com/reactstrap/reactstrap/issues/1208)
* **Modal:** use static openCount to become resilient to classList modification ([#1190](https://github.com/reactstrap/reactstrap/issues/1190)) ([c8ceeeb](https://github.com/reactstrap/reactstrap/commit/c8ceeeb)), closes [#1189](https://github.com/reactstrap/reactstrap/issues/1189)
* **Tooltip:** clear timers on component unmount ([#1180](https://github.com/reactstrap/reactstrap/issues/1180)) ([9fea409](https://github.com/reactstrap/reactstrap/commit/9fea409))


### Features

* **Button:** add close icon support ([#1206](https://github.com/reactstrap/reactstrap/issues/1206)) ([02f5e9a](https://github.com/reactstrap/reactstrap/commit/02f5e9a)), closes [#1182](https://github.com/reactstrap/reactstrap/issues/1182)
* **FormGrid:** Add form-row ([#1237](https://github.com/reactstrap/reactstrap/issues/1237)) ([205e80d](https://github.com/reactstrap/reactstrap/commit/205e80d)), closes [#1195](https://github.com/reactstrap/reactstrap/issues/1195)
* **Modal:** add custom close button ([#1168](https://github.com/reactstrap/reactstrap/issues/1168)) ([5f33a1a](https://github.com/reactstrap/reactstrap/commit/5f33a1a))
* **Popover/Tooltip:** Implented usage of react 16.3 RefObject as target ([#1200](https://github.com/reactstrap/reactstrap/issues/1200)) ([0eade39](https://github.com/reactstrap/reactstrap/commit/0eade39)), closes [#1198](https://github.com/reactstrap/reactstrap/issues/1198)



<a name="6.4.0"></a>
# [6.4.0](https://github.com/reactstrap/reactstrap/compare/6.3.1...6.4.0) (2018-08-17)


### Bug Fixes

* **Modal:** don't fade backdrop if there is no transition ([#1172](https://github.com/reactstrap/reactstrap/issues/1172)) ([77e7beb](https://github.com/reactstrap/reactstrap/commit/77e7beb)), closes [#1100](https://github.com/reactstrap/reactstrap/issues/1100)
* **Modal:** prevent scrollbar from closing ([#1165](https://github.com/reactstrap/reactstrap/issues/1165)) ([9d7948f](https://github.com/reactstrap/reactstrap/commit/9d7948f)), closes [#1097](https://github.com/reactstrap/reactstrap/issues/1097)


### Features

* **Dropdown:** Select first element matching pressed key ([#1160](https://github.com/reactstrap/reactstrap/issues/1160)) ([abbac56](https://github.com/reactstrap/reactstrap/commit/abbac56)), closes [#1156](https://github.com/reactstrap/reactstrap/issues/1156)
* **Modal:** add charCode prop for custom icon ([#1162](https://github.com/reactstrap/reactstrap/issues/1162)) ([4d19b09](https://github.com/reactstrap/reactstrap/commit/4d19b09)), closes [#1155](https://github.com/reactstrap/reactstrap/issues/1155)
* **Modal:** return focus after modal closes ([#1175](https://github.com/reactstrap/reactstrap/issues/1175)) ([1b27c49](https://github.com/reactstrap/reactstrap/commit/1b27c49)), closes [#1174](https://github.com/reactstrap/reactstrap/issues/1174)
* **Modal:** trap focus in modal ([#1161](https://github.com/reactstrap/reactstrap/issues/1161)) ([e6781d7](https://github.com/reactstrap/reactstrap/commit/e6781d7)), closes [#310](https://github.com/reactstrap/reactstrap/issues/310)
* **Popover/Tooltip:** add boundariesElement prop  ([#1149](https://github.com/reactstrap/reactstrap/issues/1149)) ([02b4555](https://github.com/reactstrap/reactstrap/commit/02b4555)), closes [#1118](https://github.com/reactstrap/reactstrap/issues/1118)



<a name="6.3.1"></a>
## [6.3.1](https://github.com/reactstrap/reactstrap/compare/6.3.0...6.3.1) (2018-07-27)


### Bug Fixes

* **Collapse:** add function and string to innerRef propType ([#1129](https://github.com/reactstrap/reactstrap/issues/1129)) ([f380b41](https://github.com/reactstrap/reactstrap/commit/f380b41)), closes [#1054](https://github.com/reactstrap/reactstrap/issues/1054)
* **CustomInput:** allow any node for label ([#1095](https://github.com/reactstrap/reactstrap/issues/1095)) ([c1374b4](https://github.com/reactstrap/reactstrap/commit/c1374b4))



<a name="6.3.0"></a>
# [6.3.0](https://github.com/reactstrap/reactstrap/compare/6.2.0...6.3.0) (2018-07-10)

### Features

* **CustomInput:** add innerRef to CustomInput ([#1123](https://github.com/reactstrap/reactstrap/issues/1123)) ([418fdf8](https://github.com/reactstrap/reactstrap/commit/418fdf8))

* **Tooltip:** allow additional arrow classNames ([#1119](https://github.com/reactstrap/reactstrap/issues/1119)) ([9ffa55f](https://github.com/reactstrap/reactstrap/commit/9ffa55f)), closes [#1117](https://github.com/reactstrap/reactstrap/issues/1117)

<a name="6.2.0"></a>
# [6.2.0](https://github.com/reactstrap/reactstrap/compare/6.1.0...6.2.0) (2018-06-28)


### Bug Fixes

* **Carousel:** allow true, false, undefined, null and children of Carousel ([#1064](https://github.com/reactstrap/reactstrap/issues/1064)) ([478870b](https://github.com/reactstrap/reactstrap/commit/478870b)), closes [#1063](https://github.com/reactstrap/reactstrap/issues/1063)
* **Modal:** allow innerRef to be function or string ([#1091](https://github.com/reactstrap/reactstrap/issues/1091)) ([aceaf22](https://github.com/reactstrap/reactstrap/commit/aceaf22))
* **tooltip:** fixed tooltip not disappearing on mobile ([#1083](https://github.com/reactstrap/reactstrap/issues/1083)) ([e6a1313](https://github.com/reactstrap/reactstrap/commit/e6a1313)), closes [#1004](https://github.com/reactstrap/reactstrap/issues/1004)
* **Tooltip:** Pass down cssModule ([#1075](https://github.com/reactstrap/reactstrap/issues/1075)) ([#1076](https://github.com/reactstrap/reactstrap/issues/1076)) ([4fb05b2](https://github.com/reactstrap/reactstrap/commit/4fb05b2))


### Features

* **alert:** add ability to disable fade ([#1078](https://github.com/reactstrap/reactstrap/issues/1078)) ([c71f1d4](https://github.com/reactstrap/reactstrap/commit/c71f1d4)), closes [#824](https://github.com/reactstrap/reactstrap/issues/824)
* **Collapse:** add ref to collapse component ([#1067](https://github.com/reactstrap/reactstrap/issues/1067)) ([9d3126c](https://github.com/reactstrap/reactstrap/commit/9d3126c)), closes [#1054](https://github.com/reactstrap/reactstrap/issues/1054)
* **feedback-tooltip:** add feedback tooltip ([#1074](https://github.com/reactstrap/reactstrap/issues/1074)) ([baee9a4](https://github.com/reactstrap/reactstrap/commit/baee9a4)), closes [#1062](https://github.com/reactstrap/reactstrap/issues/1062)
* **Modal:** add ref to Modal ([#1087](https://github.com/reactstrap/reactstrap/issues/1087)) ([015d16d](https://github.com/reactstrap/reactstrap/commit/015d16d)), closes [#1082](https://github.com/reactstrap/reactstrap/issues/1082)
* **Tooltip:** add innerRef ([#1090](https://github.com/reactstrap/reactstrap/issues/1090)) ([214da8c](https://github.com/reactstrap/reactstrap/commit/214da8c)), closes [#1089](https://github.com/reactstrap/reactstrap/issues/1089)
* **Tooltip:** pass event to toggle callback ([#1096](https://github.com/reactstrap/reactstrap/issues/1096)) ([9dad68b](https://github.com/reactstrap/reactstrap/commit/9dad68b)), closes [#1094](https://github.com/reactstrap/reactstrap/issues/1094) [#1072](https://github.com/reactstrap/reactstrap/issues/1072)



<a name="6.1.0"></a>
# [6.1.0](https://github.com/reactstrap/reactstrap/compare/6.0.1...6.1.0) (2018-06-04)


### Bug Fixes

* **Input:**  type attribute should not render for select and textarea ([#1041](https://github.com/reactstrap/reactstrap/issues/1041)) ([2e45d8a](https://github.com/reactstrap/reactstrap/commit/2e45d8a)), closes [#1038](https://github.com/reactstrap/reactstrap/issues/1038)
* **Media:** fix default tags ([267dfe0](https://github.com/reactstrap/reactstrap/commit/267dfe0)), closes [#979](https://github.com/reactstrap/reactstrap/issues/979)
* **Modal:** closes when dragging outside modal ([#1047](https://github.com/reactstrap/reactstrap/issues/1047)) ([cccd7af](https://github.com/reactstrap/reactstrap/commit/cccd7af)), closes [angular-ui/bootstrap#5810](https://github.com/angular-ui/bootstrap/issues/5810)
* **PaginationLink:** do not render invalid anchor tags ([7266214](https://github.com/reactstrap/reactstrap/commit/7266214))
* **UncontrolledCollapse:** collapsing on mobile ([#1043](https://github.com/reactstrap/reactstrap/issues/1043)) ([dcc1dda](https://github.com/reactstrap/reactstrap/commit/dcc1dda)), closes [#1034](https://github.com/reactstrap/reactstrap/issues/1034)


### Features

* **addMultipleEventListeners:** handle singles ([d124b27](https://github.com/reactstrap/reactstrap/commit/d124b27))
* **exports:** mark reactstrap as sideEffects free ([#1005](https://github.com/reactstrap/reactstrap/issues/1005)) ([b68826d](https://github.com/reactstrap/reactstrap/commit/b68826d))
* **Form:** add submit to component ([4e10dd9](https://github.com/reactstrap/reactstrap/commit/4e10dd9))
* **Input:** make it easier to focus ([e3124af](https://github.com/reactstrap/reactstrap/commit/e3124af))
* **Tooltip:** add tooltip accessibility ([#1025](https://github.com/reactstrap/reactstrap/issues/1025)) ([a2138a8](https://github.com/reactstrap/reactstrap/commit/a2138a8)), closes [#1012](https://github.com/reactstrap/reactstrap/issues/1012)
* **Tooltip,Popover:** add offset prop ([#1018](https://github.com/reactstrap/reactstrap/issues/1018)) ([3561e3c](https://github.com/reactstrap/reactstrap/commit/3561e3c))
* **UncontrolledCollapse:** add UncontrolledCollapse ([#1009](https://github.com/reactstrap/reactstrap/issues/1009)) ([355d2b8](https://github.com/reactstrap/reactstrap/commit/355d2b8))



<a name="6.0.1"></a>
## [6.0.1](https://github.com/reactstrap/reactstrap/compare/6.0.0...6.0.1) (2018-05-02)


### Bug Fixes

* **CustomInput:** fix Invalid propType. ([#994](https://github.com/reactstrap/reactstrap/issues/994)) ([35ca0a8](https://github.com/reactstrap/reactstrap/commit/35ca0a8)), closes [#993](https://github.com/reactstrap/reactstrap/issues/993)



<a name="6.0.0"></a>
# [6.0.0](https://github.com/reactstrap/reactstrap/compare/5.0.0...6.0.0) (2018-05-01)


*  chore(Input): remove support for children content in <textarea/> (#927) ([4dea4a6](https://github.com/reactstrap/reactstrap/commit/4dea4a6)), closes [#927](https://github.com/reactstrap/reactstrap/issues/927) [#871](https://github.com/reactstrap/reactstrap/issues/871)


### Bug Fixes

* **DropdownMenu:** add x-placement attribute ([#966](https://github.com/reactstrap/reactstrap/issues/966)) ([0f4a4cb](https://github.com/reactstrap/reactstrap/commit/0f4a4cb)), closes [#962](https://github.com/reactstrap/reactstrap/issues/962)
* **innerRef:** allow createRef as a ref ([a5795b8](https://github.com/reactstrap/reactstrap/commit/a5795b8))
* **Modal:** update zindex when prop is changed ([#937](https://github.com/reactstrap/reactstrap/issues/937)) ([01667c1](https://github.com/reactstrap/reactstrap/commit/01667c1))
* **UncontrolledCarousel:** add bootstrap classes to img to make it responsive ([#934](https://github.com/reactstrap/reactstrap/issues/934)) ([9f7b741](https://github.com/reactstrap/reactstrap/commit/9f7b741))
* **UncontrolledCarousel:** added header item prop ([#964](https://github.com/reactstrap/reactstrap/issues/964)) ([62b79fb](https://github.com/reactstrap/reactstrap/commit/62b79fb)), closes [#943](https://github.com/reactstrap/reactstrap/issues/943)


### Features

* **CustomInput:** add custom checkboxes/radios ([#985](https://github.com/reactstrap/reactstrap/issues/985)) ([312e729](https://github.com/reactstrap/reactstrap/commit/312e729))
* **CustomInput:** add more custom inputs ([#991](https://github.com/reactstrap/reactstrap/issues/991)) ([ccdb7f2](https://github.com/reactstrap/reactstrap/commit/ccdb7f2)), closes [#534](https://github.com/reactstrap/reactstrap/issues/534)
* **Dropdown:** setActiveFromChild prop ([#977](https://github.com/reactstrap/reactstrap/issues/977)) ([1b47757](https://github.com/reactstrap/reactstrap/commit/1b47757))
* **DropdownMenu:** add Popper modifiers ([#929](https://github.com/reactstrap/reactstrap/issues/929)) ([f28ef8a](https://github.com/reactstrap/reactstrap/commit/f28ef8a)), closes [#811](https://github.com/reactstrap/reactstrap/issues/811)
* **DropdownMenu:** allow menu to persist ([840adb2](https://github.com/reactstrap/reactstrap/commit/840adb2)), closes [#779](https://github.com/reactstrap/reactstrap/issues/779)
* **Table:** add `borderless` option ([#956](https://github.com/reactstrap/reactstrap/issues/956)) ([210b53f](https://github.com/reactstrap/reactstrap/commit/210b53f))


### BREAKING CHANGES

* `Input` with type="textarea" can no longer have children. To set the value of the textarea please use `value`/`defaultValue` the same as you would for input type="text".



<a name="5.0.0"></a>
# [5.0.0](https://github.com/reactstrap/reactstrap/compare/5.0.0-beta.3...5.0.0) (2018-03-23)


### Bug Fixes

* **Modal:** don't add or remove multi body classes ([6ec3174](https://github.com/reactstrap/reactstrap/commit/6ec3174))
* **Modal:** Ensure that `this._element` exists before removing it. ([#916](https://github.com/reactstrap/reactstrap/issues/916)) ([7faa32a](https://github.com/reactstrap/reactstrap/commit/7faa32a)), closes [#918](https://github.com/reactstrap/reactstrap/issues/918)


### BREAKING CHANGES

* **Modal:** reactstrap now requires a minimum react version of 16. Please update your version of react to 16 (from 15 to 16 is very seamless).



<a name="5.0.0-beta.3"></a>
# [5.0.0-beta.3](https://github.com/reactstrap/reactstrap/compare/5.0.0-beta.2...5.0.0-beta.3) (2018-03-19)


### Bug Fixes

* **popper:** pass event object to toggle prop ([#907](https://github.com/reactstrap/reactstrap/issues/907)) ([b1f6005](https://github.com/reactstrap/reactstrap/commit/b1f6005))


### Features

* **Dropdown:** Add active prop to Dropdown ([#895](https://github.com/reactstrap/reactstrap/issues/895)) ([45de5c5](https://github.com/reactstrap/reactstrap/commit/45de5c5)), closes [#827](https://github.com/reactstrap/reactstrap/issues/827)
* **Modal:** pass event object to toggle prop ([#903](https://github.com/reactstrap/reactstrap/issues/903)) ([f6aacfa](https://github.com/reactstrap/reactstrap/commit/f6aacfa))



<a name="5.0.0-beta.2"></a>
# [5.0.0-beta.2](https://github.com/reactstrap/reactstrap/compare/5.0.0-beta...5.0.0-beta.2) (2018-02-27)


### Bug Fixes

* **Col:** pass cssModule to mapToCSSModules not push ([#857](https://github.com/reactstrap/reactstrap/issues/857)) ([7887364](https://github.com/reactstrap/reactstrap/commit/7887364)), closes [#856](https://github.com/reactstrap/reactstrap/issues/856)
* **Modal:** map body class name before removing ([#817](https://github.com/reactstrap/reactstrap/issues/817)) ([f099d31](https://github.com/reactstrap/reactstrap/commit/f099d31)), closes [#665](https://github.com/reactstrap/reactstrap/issues/665) [#763](https://github.com/reactstrap/reactstrap/issues/763)
* **UncontrolledNavDropdown:** add missing props param ([#812](https://github.com/reactstrap/reactstrap/issues/812)) ([b35cdcb](https://github.com/reactstrap/reactstrap/commit/b35cdcb))


### Features

* **Col:** Set col class only if no other cols are specified ([#842](https://github.com/reactstrap/reactstrap/issues/842)) ([5a9aa63](https://github.com/reactstrap/reactstrap/commit/5a9aa63)), closes [#750](https://github.com/reactstrap/reactstrap/issues/750)
* **Dropdown:** Add support for dropleft and dropright ([#813](https://github.com/reactstrap/reactstrap/issues/813)) ([2b71fd6](https://github.com/reactstrap/reactstrap/commit/2b71fd6)), closes [#785](https://github.com/reactstrap/reactstrap/issues/785)
* **FormFeedback:** Support valid feedback. ([#840](https://github.com/reactstrap/reactstrap/issues/840)) ([9b49091](https://github.com/reactstrap/reactstrap/commit/9b49091))
* **Input:** add invalid prop ([#858](https://github.com/reactstrap/reactstrap/issues/858)) ([ba8fc39](https://github.com/reactstrap/reactstrap/commit/ba8fc39)), closes [#850](https://github.com/reactstrap/reactstrap/issues/850)
* **Modal:** add ability to have external content ([#854](https://github.com/reactstrap/reactstrap/issues/854)) ([9c1b71a](https://github.com/reactstrap/reactstrap/commit/9c1b71a)), closes [#853](https://github.com/reactstrap/reactstrap/issues/853)
* **Modal:** added support for React Portal ([#796](https://github.com/reactstrap/reactstrap/issues/796)) ([49a7f99](https://github.com/reactstrap/reactstrap/commit/49a7f99)), closes [#601](https://github.com/reactstrap/reactstrap/issues/601) [#761](https://github.com/reactstrap/reactstrap/issues/761) [#645](https://github.com/reactstrap/reactstrap/issues/645)
* **Popover/Tooltip:** add ability to hide arrow ([#814](https://github.com/reactstrap/reactstrap/issues/814)) ([#815](https://github.com/reactstrap/reactstrap/issues/815)) ([43efe8b](https://github.com/reactstrap/reactstrap/commit/43efe8b))


### BREAKING CHANGES

* **Col:** Col no longer adds .col class by default when you have other columns specified. To get this class back, simply add the prop xs.
* **Input:** the valid prop no longer applies the is-invalid class when false. Use the new invalid prop to apply that class.



<a name="5.0.0-beta"></a>
# [5.0.0-beta](https://github.com/reactstrap/reactstrap/compare/5.0.0-alpha.4...5.0.0-beta) (2018-01-31)


### Bug Fixes

* **CardTitle:** default tag to h5 ([#794](https://github.com/reactstrap/reactstrap/issues/794)) ([65194c1](https://github.com/reactstrap/reactstrap/commit/65194c1))
* **CarouselIndicators`:** fix class name when using `cssModule` ([#726](https://github.com/reactstrap/reactstrap/issues/726)) ([57d07e3](https://github.com/reactstrap/reactstrap/commit/57d07e3))
* **Input:** honor Tag prop ([#795](https://github.com/reactstrap/reactstrap/issues/795)) ([bcefdaa](https://github.com/reactstrap/reactstrap/commit/bcefdaa)), closes [#783](https://github.com/reactstrap/reactstrap/issues/783)
* **Label:** remove unused `form-control-label` class ([#695](https://github.com/reactstrap/reactstrap/issues/695)) ([b7567c7](https://github.com/reactstrap/reactstrap/commit/b7567c7))
* **Modal:** check this.props.toggle exists before using it ([#700](https://github.com/reactstrap/reactstrap/issues/700)) ([80c0cde](https://github.com/reactstrap/reactstrap/commit/80c0cde))
* **ModalHeader:** default tag to h5 ([#793](https://github.com/reactstrap/reactstrap/issues/793)) ([6a5fe7e](https://github.com/reactstrap/reactstrap/commit/6a5fe7e))
* **Util:** window.getComputedStyle can return null in Firefox ([#782](https://github.com/reactstrap/reactstrap/issues/782)) ([6914f73](https://github.com/reactstrap/reactstrap/commit/6914f73))


### Features

* **CarouselItem:** Make CarouselItem accept children of any type ([#735](https://github.com/reactstrap/reactstrap/issues/735)) ([eea7d1b](https://github.com/reactstrap/reactstrap/commit/eea7d1b)), closes [#641](https://github.com/reactstrap/reactstrap/issues/641) [#719](https://github.com/reactstrap/reactstrap/issues/719)
* **Col/Label:** Removed pull/push and added order ([#696](https://github.com/reactstrap/reactstrap/issues/696)) ([7c5e690](https://github.com/reactstrap/reactstrap/commit/7c5e690))
* **cssModule:** expose global cssModule setter ([#729](https://github.com/reactstrap/reactstrap/issues/729)) ([adc8736](https://github.com/reactstrap/reactstrap/commit/adc8736))
* **Dropdown:** disable popper when inNavbar ([#692](https://github.com/reactstrap/reactstrap/issues/692)) ([b5c7612](https://github.com/reactstrap/reactstrap/commit/b5c7612)), closes [#637](https://github.com/reactstrap/reactstrap/issues/637)
* **InputGroup:** Deprecate InputGroupButton ([#769](https://github.com/reactstrap/reactstrap/issues/769)) ([5c5c205](https://github.com/reactstrap/reactstrap/commit/5c5c205))
* **InputGroup:** Update for BS 4-beta.3 ([#762](https://github.com/reactstrap/reactstrap/issues/762)) ([fa3555f](https://github.com/reactstrap/reactstrap/commit/fa3555f)), closes [#759](https://github.com/reactstrap/reactstrap/issues/759)
* **ListGroup*:** Added missing cssModule support ([#784](https://github.com/reactstrap/reactstrap/issues/784)) ([df264a8](https://github.com/reactstrap/reactstrap/commit/df264a8))
* **Popover/Tooltip:** add ability to pass modifiers to Popper.js ([#710](https://github.com/reactstrap/reactstrap/issues/710)) ([bc6518e](https://github.com/reactstrap/reactstrap/commit/bc6518e)), closes [#709](https://github.com/reactstrap/reactstrap/issues/709)
* **Table:** BS4 beta 2 updates for Table ([#694](https://github.com/reactstrap/reactstrap/issues/694)) ([3377cdc](https://github.com/reactstrap/reactstrap/commit/3377cdc))
* **Table:** BS4 beta 3 revert responsive table ([#757](https://github.com/reactstrap/reactstrap/issues/757)) ([ee08d21](https://github.com/reactstrap/reactstrap/commit/ee08d21))


### BREAKING CHANGES

* **CardTitle:** CardTitle now defaults to h5 instead of h4. If you still need h4 add tag="h4"
* **ModalHeader:** ModalHeader now defaults to h5 instead of h4. If you still need h4 add tag="h4"



<a name="5.0.0-alpha.4"></a>
# [5.0.0-alpha.4](https://github.com/reactstrap/reactstrap/compare/5.0.0-alpha.3...5.0.0-alpha.4) (2017-11-16)


### Bug Fixes

* **FormGroup,Label:** Fix inline radio- and checkboxes ([#624](https://github.com/reactstrap/reactstrap/issues/624)) ([e9b7803](https://github.com/reactstrap/reactstrap/commit/e9b7803))
* **getTarget:** do not return null; throw ([#623](https://github.com/reactstrap/reactstrap/issues/623)) ([e1d3b5f](https://github.com/reactstrap/reactstrap/commit/e1d3b5f))
* **Input:** fix size prop ([#662](https://github.com/reactstrap/reactstrap/issues/662)) ([cc2bd13](https://github.com/reactstrap/reactstrap/commit/cc2bd13)), closes [#660](https://github.com/reactstrap/reactstrap/issues/660)
* **Label:** remove disabled prop ([#626](https://github.com/reactstrap/reactstrap/issues/626)) ([25c1e38](https://github.com/reactstrap/reactstrap/commit/25c1e38))
* **ModalHeader:** Use css modules in close button ([#629](https://github.com/reactstrap/reactstrap/issues/629)) ([2cd6f21](https://github.com/reactstrap/reactstrap/commit/2cd6f21)), closes [#628](https://github.com/reactstrap/reactstrap/issues/628)
* **UncontrolledCarousel:** fix autoPlay={false} ([#654](https://github.com/reactstrap/reactstrap/issues/654)) ([839419e](https://github.com/reactstrap/reactstrap/commit/839419e)), closes [#653](https://github.com/reactstrap/reactstrap/issues/653)


### Features

* **Carousel:** add className to carousel components ([#682](https://github.com/reactstrap/reactstrap/issues/682)) ([d23b28a](https://github.com/reactstrap/reactstrap/commit/d23b28a)), closes [#669](https://github.com/reactstrap/reactstrap/issues/669)
* **CarouselItem:** support tag prop on carousel item ([#681](https://github.com/reactstrap/reactstrap/issues/681)) ([1e70e64](https://github.com/reactstrap/reactstrap/commit/1e70e64))
* **Dropdown:** Add nav prop to Dropdown ([#636](https://github.com/reactstrap/reactstrap/issues/636)) ([48edd6b](https://github.com/reactstrap/reactstrap/commit/48edd6b))
* **getTarget:** throw when string not in DOM ([#622](https://github.com/reactstrap/reactstrap/issues/622)) ([e71c427](https://github.com/reactstrap/reactstrap/commit/e71c427)), closes [#620](https://github.com/reactstrap/reactstrap/issues/620)
* **NavItem:** add active prop to NavItem ([#688](https://github.com/reactstrap/reactstrap/issues/688)) ([2a8bffb](https://github.com/reactstrap/reactstrap/commit/2a8bffb)), closes [#678](https://github.com/reactstrap/reactstrap/issues/678)



<a name="5.0.0-alpha.3"></a>
# [5.0.0-alpha.3](https://github.com/reactstrap/reactstrap/compare/5.0.0-alpha.2...5.0.0-alpha.3) (2017-10-03)


### Bug Fixes

* **Build:** Cross-platform postbuild support, improved Readme documentation, updated dependencies. ([#608](https://github.com/reactstrap/reactstrap/issues/608)) ([681738c](https://github.com/reactstrap/reactstrap/commit/681738c))
* **Collapse,Fade:** Ensuring props don't leak to child ([#598](https://github.com/reactstrap/reactstrap/issues/598)) ([1a94b0f](https://github.com/reactstrap/reactstrap/commit/1a94b0f)), closes [#597](https://github.com/reactstrap/reactstrap/issues/597)
* **Modal:** Update classes for fixed content detection ([#600](https://github.com/reactstrap/reactstrap/issues/600)) ([9b41e13](https://github.com/reactstrap/reactstrap/commit/9b41e13))
* **PaginationLink:** handle empty children array correctly ([#511](https://github.com/reactstrap/reactstrap/issues/511)) ([#604](https://github.com/reactstrap/reactstrap/issues/604)) ([c090ea7](https://github.com/reactstrap/reactstrap/commit/c090ea7))



<a name="5.0.0-alpha.2"></a>
# [5.0.0-alpha.2](https://github.com/reactstrap/reactstrap/compare/5.0.0-alpha.1...5.0.0-alpha.2) (2017-09-28)


### Bug Fixes

* **Popover:** do not trigger toggle on popover click ([50a8fd4](https://github.com/reactstrap/reactstrap/commit/50a8fd4)), closes [#594](https://github.com/reactstrap/reactstrap/issues/594)



<a name="5.0.0-alpha.1"></a>
# [5.0.0-alpha.1](https://github.com/reactstrap/reactstrap/compare/5.0.0-alpha.0...5.0.0-alpha.1) (2017-09-23)


### Bug Fixes

* **Dropdown:** fix perf issue ([e4479aa](https://github.com/reactstrap/reactstrap/commit/e4479aa)), closes [#584](https://github.com/reactstrap/reactstrap/issues/584)


### Features

* **Dropdown:** keyboard control/navigation ([ac90f51](https://github.com/reactstrap/reactstrap/commit/ac90f51)), closes [#580](https://github.com/reactstrap/reactstrap/issues/580)
* **Input:** add plaintext prop ([d0c6e82](https://github.com/reactstrap/reactstrap/commit/d0c6e82)), closes [#485](https://github.com/reactstrap/reactstrap/issues/485)



<a name="5.0.0-alpha.0"></a>
# [5.0.0-alpha.0](https://github.com/reactstrap/reactstrap/compare/4.8.0...5.0.0-alpha.0) (2017-09-21)


### Bug Fixes

* Add container to Popover and Tooltip ([759934b](https://github.com/reactstrap/reactstrap/commit/759934b))
* **Carousel:** use prop-types in carousel ([#503](https://github.com/reactstrap/reactstrap/issues/503)) ([e1bdadb](https://github.com/reactstrap/reactstrap/commit/e1bdadb))
* **CSSModules:** pass modules to child components ([#483](https://github.com/reactstrap/reactstrap/issues/483)) ([12270d0](https://github.com/reactstrap/reactstrap/commit/12270d0))
* **Label:** fix xs col class ([#512](https://github.com/reactstrap/reactstrap/issues/512)) ([683dbdb](https://github.com/reactstrap/reactstrap/commit/683dbdb)), closes [#510](https://github.com/reactstrap/reactstrap/issues/510)
* **Modal:** add workaround for Modal auto focus ([f12057d](https://github.com/reactstrap/reactstrap/commit/f12057d))
* **Navbar:** better backwards compatibility ([aefbdd7](https://github.com/reactstrap/reactstrap/commit/aefbdd7))
* **NavbarToggler:** fix syntax error ([a460912](https://github.com/reactstrap/reactstrap/commit/a460912))
* **PaginationLink:** handle empty children array ([#511](https://github.com/reactstrap/reactstrap/issues/511)) ([72d82a3](https://github.com/reactstrap/reactstrap/commit/72d82a3)), closes [#494](https://github.com/reactstrap/reactstrap/issues/494)
* **popper:** account for touchstart ([9b80d11](https://github.com/reactstrap/reactstrap/commit/9b80d11)), closes [#456](https://github.com/reactstrap/reactstrap/issues/456) [#458](https://github.com/reactstrap/reactstrap/issues/458)
* **popperjs:** fixed error in build ([#571](https://github.com/reactstrap/reactstrap/issues/571)) ([0a9394d](https://github.com/reactstrap/reactstrap/commit/0a9394d))
* **Tooltip/Popover:** fix className/add innerClassName ([a2a33e3](https://github.com/reactstrap/reactstrap/commit/a2a33e3))


### Features

* **aria:** add closeAriaLabel ([#525](https://github.com/reactstrap/reactstrap/issues/525)) ([3b4c0e6](https://github.com/reactstrap/reactstrap/commit/3b4c0e6)), closes [#524](https://github.com/reactstrap/reactstrap/issues/524)
* **Badge:** handle links ([9b32cee](https://github.com/reactstrap/reactstrap/commit/9b32cee))
* **Card:** update Card for bs v4 beta ([c4609e2](https://github.com/reactstrap/reactstrap/commit/c4609e2))
* **Dropdown:** update Dropdown for bs v4 beta ([53687fa](https://github.com/reactstrap/reactstrap/commit/53687fa))
* **Modal:** onOpened and onClosed callbacks for modals ([#434](https://github.com/reactstrap/reactstrap/issues/434)) ([87c6c4e](https://github.com/reactstrap/reactstrap/commit/87c6c4e)), closes [#306](https://github.com/reactstrap/reactstrap/issues/306)
* **Nav/Navbar:** update to bs v4 beta ([5395e8d](https://github.com/reactstrap/reactstrap/commit/5395e8d))
* **Popover:** update popovers to bs v4 beta ([bb00f4c](https://github.com/reactstrap/reactstrap/commit/bb00f4c))
* **popper:** add container prop to popper ([fd59d37](https://github.com/reactstrap/reactstrap/commit/fd59d37))
* **popperjs:** use popperjs instead of tether ([#561](https://github.com/reactstrap/reactstrap/issues/561)) ([5413022](https://github.com/reactstrap/reactstrap/commit/5413022))
* **UncontrolledCarousel:** add UncontrolledCarousel ([627a73e](https://github.com/reactstrap/reactstrap/commit/627a73e))
* **util:** add warnOnce and deprecated fns ([5faa94d](https://github.com/reactstrap/reactstrap/commit/5faa94d))
* **validation:** add/update form validation ([8b2386f](https://github.com/reactstrap/reactstrap/commit/8b2386f))


### BREAKING CHANGES

* **validation:** The color prop has been removed from FromGroup, see the valid prop on Input.
* **popperjs:** getRef has been renamed to innerRef to line up with other libraries.
* **popperjs:** tether props have been removed. 



<a name="4.8.0"></a>
# [4.8.0](https://github.com/reactstrap/reactstrap/compare/4.7.0...4.8.0) (2017-06-28)


### Features

* **DropdownItem:** support the "active" property for dropdown items ([#469](https://github.com/reactstrap/reactstrap/issues/469)) ([83df86e](https://github.com/reactstrap/reactstrap/commit/83df86e))



<a name="4.7.0"></a>
# [4.7.0](https://github.com/reactstrap/reactstrap/compare/4.6.2...4.7.0) (2017-06-27)


### Bug Fixes

* **Alert:** map close class css modules ([#471](https://github.com/reactstrap/reactstrap/issues/471)) ([2e3c687](https://github.com/reactstrap/reactstrap/commit/2e3c687)), closes [#470](https://github.com/reactstrap/reactstrap/issues/470)
* **DropdownToggle:** ensures color attribute is not leaked ([d1448e0](https://github.com/reactstrap/reactstrap/commit/d1448e0)), closes [#461](https://github.com/reactstrap/reactstrap/issues/461) [PR#402](https://github.com/PR/issues/402)
* **Label:** add form-control-label to appropriate Label components ([#452](https://github.com/reactstrap/reactstrap/issues/452)) ([2e86132](https://github.com/reactstrap/reactstrap/commit/2e86132))
* **Modal:** add back attribute passthrough ([#444](https://github.com/reactstrap/reactstrap/issues/444)) ([b598a40](https://github.com/reactstrap/reactstrap/commit/b598a40)), closes [#443](https://github.com/reactstrap/reactstrap/issues/443)
* **Navbar:** remove default navigation role ([f607b2c](https://github.com/reactstrap/reactstrap/commit/f607b2c)), closes [#463](https://github.com/reactstrap/reactstrap/issues/463)



<a name="4.6.2"></a>
## [4.6.2](https://github.com/reactstrap/reactstrap/compare/4.6.1...4.6.2) (2017-05-16)


### Bug Fixes

* **build:** replace process.env in builds ([#429](https://github.com/reactstrap/reactstrap/issues/429)) ([#435](https://github.com/reactstrap/reactstrap/issues/435)) ([fcc5264](https://github.com/reactstrap/reactstrap/commit/fcc5264))



<a name="4.6.1"></a>
## [4.6.1](https://github.com/reactstrap/reactstrap/compare/4.6.0...4.6.1) (2017-05-15)


### Bug Fixes

* **PropTypes:** clean up prop-types usage ([#427](https://github.com/reactstrap/reactstrap/issues/427)) ([94bbb82](https://github.com/reactstrap/reactstrap/commit/94bbb82))



<a name="4.6.0"></a>
# [4.6.0](https://github.com/reactstrap/reactstrap/compare/4.5.0...4.6.0) (2017-05-15)


### Bug Fixes

* **ButtonDropdown:** allow overwriting the group prop ([#425](https://github.com/reactstrap/reactstrap/issues/425)) ([663551b](https://github.com/reactstrap/reactstrap/commit/663551b))
* **DropdownToggle:** add missing proptype (color) ([#402](https://github.com/reactstrap/reactstrap/issues/402)) ([c137697](https://github.com/reactstrap/reactstrap/commit/c137697))
* **Modal:** fix bug where closing modal removed wrong modal-open string in class ([#410](https://github.com/reactstrap/reactstrap/issues/410)) ([22d5c3f](https://github.com/reactstrap/reactstrap/commit/22d5c3f))
* **PropTypes:** import PropTypes from prop-types ([#395](https://github.com/reactstrap/reactstrap/issues/395)) ([9080217](https://github.com/reactstrap/reactstrap/commit/9080217))
* **react-addons:** move to external react-transition-group dependency ([#399](https://github.com/reactstrap/reactstrap/issues/399)) ([a4fec3c](https://github.com/reactstrap/reactstrap/commit/a4fec3c))


### Features

* **Modal:** add autoFocus prop for disabling auto focus ([#389](https://github.com/reactstrap/reactstrap/issues/389)) ([6338fc3](https://github.com/reactstrap/reactstrap/commit/6338fc3))
* **Modal:** Support fade and timeout props in the Modal component to allow configuring + disabling of the fade effect ([#339](https://github.com/reactstrap/reactstrap/issues/339)) ([babee0f](https://github.com/reactstrap/reactstrap/commit/babee0f))



<a name="4.5.0"></a>
# [4.5.0](https://github.com/reactstrap/reactstrap/compare/4.4.0...v4.5.0) (2017-04-03)


### Bug Fixes

* **Button:** only default to button when click is handled ([#383](https://github.com/reactstrap/reactstrap/issues/383)) ([af3ccbe](https://github.com/reactstrap/reactstrap/commit/af3ccbe))
* **lib:** import/export not getting transpiled in lib dir ([#384](https://github.com/reactstrap/reactstrap/issues/384)) ([2e2a5da](https://github.com/reactstrap/reactstrap/commit/2e2a5da))



<a name="4.4.0"></a>
# [4.4.0](https://github.com/reactstrap/reactstrap/compare/4.3.0...v4.4.0) (2017-03-31)


### Bug Fixes

* **Col:** account for 0 col properties ([#378](https://github.com/reactstrap/reactstrap/issues/378)) ([fe48e9e](https://github.com/reactstrap/reactstrap/commit/fe48e9e))
* **DropDownItem:** when href use `a` tag ([#377](https://github.com/reactstrap/reactstrap/issues/377)) ([96616af](https://github.com/reactstrap/reactstrap/commit/96616af)), closes [#367](https://github.com/reactstrap/reactstrap/issues/367)
* **Modal:** pass in cssModule to Fade components ([#373](https://github.com/reactstrap/reactstrap/issues/373)) ([be34d19](https://github.com/reactstrap/reactstrap/commit/be34d19))


### Features

* **Button:** default type to button ([#376](https://github.com/reactstrap/reactstrap/issues/376)) ([ebbeba7](https://github.com/reactstrap/reactstrap/commit/ebbeba7))
* **DropdownItem:** Add toggle switch to allow conditional toggle ([#346](https://github.com/reactstrap/reactstrap/issues/346)) ([578a61b](https://github.com/reactstrap/reactstrap/commit/578a61b))
* **Tooltip:** enable target element option ([#356](https://github.com/reactstrap/reactstrap/issues/356)) ([2023036](https://github.com/reactstrap/reactstrap/commit/2023036))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/reactstrap/reactstrap/compare/4.2.0...v4.3.0) (2017-03-14)


### Bug Fixes

* **Modal:** default zIndex to 1050 ([#343](https://github.com/reactstrap/reactstrap/issues/343)) ([8d0f4ec](https://github.com/reactstrap/reactstrap/commit/8d0f4ec)), closes [#342](https://github.com/reactstrap/reactstrap/issues/342)
* **Nav:** update props available ([#338](https://github.com/reactstrap/reactstrap/issues/338)) ([992e4e6](https://github.com/reactstrap/reactstrap/commit/992e4e6))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/reactstrap/reactstrap/compare/4.1.1...v4.2.0) (2017-02-14)


### Bug Fixes

* **Modal:** unmounting nested modals ([#321](https://github.com/reactstrap/reactstrap/issues/321)) ([ecf51b2](https://github.com/reactstrap/reactstrap/commit/ecf51b2))
* **Progress:** add custom classNames to progress-bar ([#319](https://github.com/reactstrap/reactstrap/issues/319)) ([25fdb77](https://github.com/reactstrap/reactstrap/commit/25fdb77)), closes [#318](https://github.com/reactstrap/reactstrap/issues/318)


### Features

* **Modal:** add various className props to modal ([#320](https://github.com/reactstrap/reactstrap/issues/320)) ([c7b2b3e](https://github.com/reactstrap/reactstrap/commit/c7b2b3e)), closes [#257](https://github.com/reactstrap/reactstrap/issues/257)
* **Modal:** Make toggle prop optional ([#325](https://github.com/reactstrap/reactstrap/issues/325)) ([5e98ea3](https://github.com/reactstrap/reactstrap/commit/5e98ea3))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/reactstrap/reactstrap/compare/4.1.0...v4.1.1) (2017-01-31)


### Bug Fixes

* make sure everything can have a Tag ([#315](https://github.com/reactstrap/reactstrap/issues/315)) ([3373a90](https://github.com/reactstrap/reactstrap/commit/3373a90)), closes [#314](https://github.com/reactstrap/reactstrap/issues/314)


### Features

* **CardDeck:** set flex as only option ([#316](https://github.com/reactstrap/reactstrap/issues/316)) ([feb9a70](https://github.com/reactstrap/reactstrap/commit/feb9a70))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/reactstrap/reactstrap/compare/4.0.1...v4.1.0) (2017-01-28)


### Features

* **Col:** add custom widths ability to Col ([#309](https://github.com/reactstrap/reactstrap/issues/309)) ([8487598](https://github.com/reactstrap/reactstrap/commit/8487598)), closes [#297](https://github.com/reactstrap/reactstrap/issues/297)
* **Collapse:** Add onOpened and onClosed events ([#277](https://github.com/reactstrap/reactstrap/issues/277)) ([#301](https://github.com/reactstrap/reactstrap/issues/301)) ([6c5621f](https://github.com/reactstrap/reactstrap/commit/6c5621f))
* **Uncontrolled:** add uncontrolled components ([#307](https://github.com/reactstrap/reactstrap/issues/307)) ([2f648c1](https://github.com/reactstrap/reactstrap/commit/2f648c1))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/reactstrap/reactstrap/compare/4.0.0...v4.0.1) (2017-01-11)


### Bug Fixes

* **Navbar:** updated fixed class names ([481bc14](https://github.com/reactstrap/reactstrap/commit/481bc14))


### Features

* **Navbar:** support sticky prop on navbar ([d8a9727](https://github.com/reactstrap/reactstrap/commit/d8a9727))


<a name="4.0.0"></a>
# [4.0.0](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.8...v4.0.0) (2017-01-11)


### Bug Fixes

* **Col:** support disabled width props ([#283](https://github.com/reactstrap/reactstrap/issues/283)) ([2a36601](https://github.com/reactstrap/reactstrap/commit/2a36601))
* **Collapse:** component height & navbar class ([#284](https://github.com/reactstrap/reactstrap/issues/284)) ([0237cd4](https://github.com/reactstrap/reactstrap/commit/0237cd4))
* **Modal:** Update ModalHeader close button ([#281](https://github.com/reactstrap/reactstrap/issues/281)) ([a9dc654](https://github.com/reactstrap/reactstrap/commit/a9dc654))
* **Navbar:** remove default toggleable class ([#285](https://github.com/reactstrap/reactstrap/issues/285)) ([19b32cd](https://github.com/reactstrap/reactstrap/commit/19b32cd))


### Features

* **Collapse:** add delay prop ([#287](https://github.com/reactstrap/reactstrap/issues/287)) ([2b69ad6](https://github.com/reactstrap/reactstrap/commit/2b69ad6))


### BREAKING CHANGES

* Navbar: - Navbar no longer applies a default `.navbar-toggleable` class, as it is not required for all Navbar configurations.


<a name="4.0.0-alpha.8"></a>
# [4.0.0-alpha.8](https://github.com/reactstrap/reactstrap/compare/3.9.5...v4.0.0-alpha.8) (2017-01-06)


### Features

* **cssModules:** adding missing classes ([#271](https://github.com/reactstrap/reactstrap/issues/271)) ([e8e818b](https://github.com/reactstrap/reactstrap/commit/e8e818b))
* **Progress:** enchance multiple progress bars ([#271](https://github.com/reactstrap/reactstrap/issues/274))

### BREAKING CHANGE:

Progress component now requires `multi` prop on the outer component for nested progress bars. Inner Progress components will require the `bar` prop for nested progress bars.

<a name="4.0.0-alpha.7"></a>
# [4.0.0-alpha.7](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.6...v4.0.0-alpha.7) (2017-01-05)


### Features

* **Col:** update classes based on alpha.6 changes ([#267](https://github.com/reactstrap/reactstrap/issues/267)) ([89ff16c](https://github.com/reactstrap/reactstrap/commit/89ff16c))
* **Collapse:** add navbar prop ([#266](https://github.com/reactstrap/reactstrap/issues/266)) ([c1b633a](https://github.com/reactstrap/reactstrap/commit/c1b633a))
* **Nav:** update navbar prop class value ([#265](https://github.com/reactstrap/reactstrap/pull/265))([f979aae54a8662d151d6216dac45b9dc3541ca7e] (https://github.com/reactstrap/reactstrap/pull/265/commits/f979aae54a8662d151d6216dac45b9dc3541ca7e))
* **Navbar:** rename dark prop to inverse, add toggleable size prop ([#265](https://github.com/reactstrap/reactstrap/pull/265))([3ee55f19792bd803d937837f4599ff0ee88974fb] (https://github.com/reactstrap/reactstrap/pull/265/commits/3ee55f19792bd803d937837f4599ff0ee88974fb))


### BREAKING CHANGES

* Col: The default xs prop now returns `.col` instead of
`.col-xs-12`. The `auto` size value now returns `.col-auto` or
`.col-sm-auto` for variable width content columns. Use `true` or `''`
as the size value to return `.col` or `.col-sm` for auto layout of
columns (not to be confused with `auto`  -> (variable width of
content)).


<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.5...v4.0.0-alpha.6) (2017-01-03)


### Bug Fixes

* **className:** update "active" to "show" for stateful components ([#259](https://github.com/reactstrap/reactstrap/issues/259)) ([7df9a01](https://github.com/reactstrap/reactstrap/commit/7df9a01))


### Features

* **Progress:** update markup & support nested progress bars ([#261](https://github.com/reactstrap/reactstrap/issues/261)) ([0b19b41](https://github.com/reactstrap/reactstrap/commit/0b19b41))
* **Row:** add noGutters prop ([#260](https://github.com/reactstrap/reactstrap/issues/260)) ([c79bb3e](https://github.com/reactstrap/reactstrap/commit/c79bb3e))


<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.4...v4.0.0-alpha.5) (2016-12-18)


### Features

* **Modal:** Pass through props in Modal ([#254](https://github.com/reactstrap/reactstrap/issues/254)) ([c99e873](https://github.com/reactstrap/reactstrap/commit/c99e873))


<a name="3.9.5"></a>
## [3.9.5](https://github.com/reactstrap/reactstrap/compare/3.9.4...v3.9.5) (2016-12-18)


### Features

* **Modal:** Pass through props in Modal ([#254](https://github.com/reactstrap/reactstrap/issues/254)) ([a783308](https://github.com/reactstrap/reactstrap/commit/a783308))


<a name="4.0.0-alpha.4"></a>
# [4.0.0-alpha.4](https://github.com/reactstrap/reactstrap/compare/3.9.4...v4.0.0-alpha.4) (2016-12-15)

* **Modal:** clear timeouts when toggling of modal - [#166](https://github.com/reactstrap/reactstrap/issues/166) ([5e0f5d2](https://github.com/reactstrap/reactstrap/commit/5e0f5d2))


<a name="3.9.4"></a>
## [3.9.4](https://github.com/reactstrap/reactstrap/compare/3.9.3...v3.9.4) (2016-12-12)

### Bug Fixes

* **Modal:** clear timeouts when toggling of modal - [#166](https://github.com/reactstrap/reactstrap/issues/166) ([5e0f5d2](https://github.com/reactstrap/reactstrap/commit/5e0f5d2))

<a name="4.0.0-alpha.3"></a>
# [4.0.0-alpha.3](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.2...v4.0.0-alpha.3) (2016-12-01)


<a name="4.0.0-alpha.2"></a>
# [4.0.0-alpha.2](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.1...v4.0.0-alpha.2) (2016-11-28)


### Bug Fixes

* **className:** update "in" to "active" for stateful components ([#241](https://github.com/reactstrap/reactstrap/issues/241)) ([ea2439e](https://github.com/reactstrap/reactstrap/commit/ea2439e))


<a name="3.9.3"></a>
## [3.9.3](https://github.com/reactstrap/reactstrap/compare/3.9.2...v3.9.3) (2016-12-01)


### Features

* **ListGroup:** prevent onClick when disabled & add docs [#185](https://github.com/reactstrap/reactstrap/issues/185) ([#236](https://github.com/reactstrap/reactstrap/issues/236)) ([1301b11](https://github.com/reactstrap/reactstrap/commit/1301b11))


<a name="3.9.2"></a>
## [3.9.2](https://github.com/reactstrap/reactstrap/compare/3.9.1...v3.9.2) (2016-11-28)


### Bug Fixes

* **Popover:** remove old arrow markup, correct enabled className ([b9d3ea7](https://github.com/reactstrap/reactstrap/commit/b9d3ea7))
* **TetherContent:** Fixes className prop typo, removes arrow & position relative hack ([d9e7621](https://github.com/reactstrap/reactstrap/commit/d9e7621))
* **Tooltip:** remove old arrow markup, correct enabled className ([62d622b](https://github.com/reactstrap/reactstrap/commit/62d622b))


<a name="4.0.0-alpha.1"></a>
# [4.0.0-alpha.1](https://github.com/reactstrap/reactstrap/compare/4.0.0-alpha.0...v4.0.0-alpha.1) (2016-11-23)


### Features

* **Badge:** rename Tag component to Badge ([#230](https://github.com/reactstrap/reactstrap/issues/230)) ([dfc9943](https://github.com/reactstrap/reactstrap/commit/dfc9943))


<a name="4.0.0-alpha.0"></a>
# [4.0.0-alpha.0](https://github.com/reactstrap/reactstrap/compare/v4...v4.0.0-alpha.0) (2016-11-23)


<a name="3.9.1"></a>
## [3.9.1](https://github.com/reactstrap/reactstrap/compare/3.9.0...v3.9.1) (2016-11-23)


### Bug Fixes

* **modal:** fix multi-modal backdrop ([#227](https://github.com/reactstrap/reactstrap/issues/227)) ([9ddeb8a](https://github.com/reactstrap/reactstrap/commit/9ddeb8a)), closes [#222](https://github.com/reactstrap/reactstrap/issues/222)



<a name="3.9.0"></a>
# [3.9.0](https://github.com/reactstrap/reactstrap/compare/3.8.1...v3.9.0) (2016-11-13)


### Bug Fixes

* **DropdownToggle:** support non Button styles ([#221](https://github.com/reactstrap/reactstrap/issues/221)) ([cd3c1ce](https://github.com/reactstrap/reactstrap/commit/cd3c1ce))


### Features

* **ListGroup:** add ListGroupItem, ListGroupItemHeading, ListGroupItemText components ([#192](https://github.com/reactstrap/reactstrap/issues/192)) ([d09e81a](https://github.com/reactstrap/reactstrap/commit/d09e81a))



<a name="3.8.1"></a>
## [3.8.1](https://github.com/reactstrap/reactstrap/compare/3.8.0...v3.8.1) (2016-11-01)


### Features

* **refs:** add getRef to focusable components ([#218](https://github.com/reactstrap/reactstrap/issues/218)) ([cbfa0e0](https://github.com/reactstrap/reactstrap/commit/cbfa0e0))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/reactstrap/reactstrap/compare/3.7.1...v3.8.0) (2016-11-01)


### Features

* **Collapse:** add Collapse component [#79](https://github.com/reactstrap/reactstrap/issues/79) ([#201](https://github.com/reactstrap/reactstrap/issues/201)) ([ddbf0dd](https://github.com/reactstrap/reactstrap/commit/ddbf0dd))



<a name="3.7.1"></a>
## [3.7.1](https://github.com/reactstrap/reactstrap/compare/3.7.0...v3.7.1) (2016-10-29)


### Bug Fixes

* **NavbarToggler:** remove unnecessary menu char ([#200](https://github.com/reactstrap/reactstrap/issues/200)) ([67544a3](https://github.com/reactstrap/reactstrap/commit/67544a3))



<a name="3.7.0"></a>
# [3.7.0](https://github.com/reactstrap/reactstrap/compare/3.6.0...v3.7.0) (2016-10-27)


### Bug Fixes

* **events:** add useCapture to events attached to document ([#202](https://github.com/reactstrap/reactstrap/issues/202)) ([18d7d04](https://github.com/reactstrap/reactstrap/commit/18d7d04))


### Features

* **cssModule:** add support for css module ([#206](https://github.com/reactstrap/reactstrap/issues/206)) ([3a69f14](https://github.com/reactstrap/reactstrap/commit/3a69f14)), closes [#205](https://github.com/reactstrap/reactstrap/issues/205)



<a name="3.6.0"></a>
# [3.6.0](https://github.com/reactstrap/reactstrap/compare/3.5.0...v3.6.0) (2016-10-23)


### Features

* **DropdownToggle:** add nav prop to enable Nav specific functionality ([#197](https://github.com/reactstrap/reactstrap/issues/197))([9b28cbc](https://github.com/reactstrap/reactstrap/commit/9b28cbc))



<a name="3.5.0"></a>
# [3.5.0](https://github.com/reactstrap/reactstrap/compare/3.4.1...v3.5.0) (2016-10-18)


### Bug Fixes

* **Tooltip:** fix when toggle is not provided ([#182](https://github.com/reactstrap/reactstrap/issues/182)) ([47239f3](https://github.com/reactstrap/reactstrap/commit/47239f3))


### Features

* **Col:** add flex-support to Col component ([#169](https://github.com/reactstrap/reactstrap/issues/169)) ([#175](https://github.com/reactstrap/reactstrap/issues/175)) ([ebdecb8](https://github.com/reactstrap/reactstrap/commit/ebdecb8))
* **Popover:** add `tetherRef` to Popover ([#183](https://github.com/reactstrap/reactstrap/issues/183)) ([00d08ad](https://github.com/reactstrap/reactstrap/commit/00d08ad))
* **TetherContent:** Add `tetherRef` to TetherContent  ([#181](https://github.com/reactstrap/reactstrap/issues/181)) ([6be1a67](https://github.com/reactstrap/reactstrap/commit/6be1a67)), closes [#174](https://github.com/reactstrap/reactstrap/issues/174)



<a name="3.4.1"></a>
## [3.4.1](https://github.com/reactstrap/reactstrap/compare/3.4.0...v3.4.1) (2016-10-16)


### Features

* **Input:** enable refs on Input components ([#178](https://github.com/reactstrap/reactstrap/issues/178)) ([ed9e584](https://github.com/reactstrap/reactstrap/commit/ed9e584))



<a name="3.4.0"></a>
# [3.4.0](https://github.com/reactstrap/reactstrap/compare/3.3.2...v3.4.0) (2016-10-06)


### Features

* **Alert:** Add Alert component ([#162](https://github.com/reactstrap/reactstrap/issues/162)) ([240e776](https://github.com/reactstrap/reactstrap/commit/240e776))



<a name="3.3.2"></a>
## [3.3.2](https://github.com/reactstrap/reactstrap/compare/3.3.1...v3.3.2) (2016-10-01)


### Bug Fixes

* **Modal:** Account for body padding when scrollbar is present ([#165](https://github.com/reactstrap/reactstrap/issues/165)) ([e159628](https://github.com/reactstrap/reactstrap/commit/e159628))



<a name="3.3.1"></a>
## [3.3.1](https://github.com/reactstrap/reactstrap/compare/3.3.0...v3.3.1) (2016-09-28)


### Bug Fixes

* **label:** add disabled class when form-check-inline and disabled ([#159](https://github.com/reactstrap/reactstrap/issues/159)) ([312b29e](https://github.com/reactstrap/reactstrap/commit/312b29e))



<a name="3.3.0"></a>
# [3.3.0](https://github.com/reactstrap/reactstrap/compare/3.2.2...v3.3.0) (2016-09-24)


### Features

* **Jumbotron:** add Jumbotron Component ([#151](https://github.com/reactstrap/reactstrap/issues/151)) ([20f9c03](https://github.com/reactstrap/reactstrap/commit/20f9c03)), closes [#73](https://github.com/reactstrap/reactstrap/issues/73)



<a name="3.2.2"></a>
## [3.2.2](https://github.com/reactstrap/reactstrap/compare/3.2.1...v3.2.2) (2016-09-19)

### Features

* **Tooltip:** add ability to disable autohide on tooltip content hover ([#149](https://github.com/reactstrap/reactstrap/issues/149)) ([68a0ed7](https://github.com/reactstrap/reactstrap/commit/68a0ed7))

<a name="3.2.1"></a>
## [3.2.1](https://github.com/reactstrap/reactstrap/compare/3.2.0...v3.2.1) (2016-09-18)


### Features

* **Tooltip:** add delay prop ([#143](https://github.com/reactstrap/reactstrap/issues/143)) ([b18fb74](https://github.com/reactstrap/reactstrap/commit/b18fb74)), closes [#115](https://github.com/reactstrap/reactstrap/issues/115)



<a name="3.2.0"></a>
# [3.2.0](https://github.com/reactstrap/reactstrap/compare/3.1.0...v3.2.0) (2016-09-14)


### Features

* **modal:** add backdrop and keyboard options ([#135](https://github.com/reactstrap/reactstrap/issues/135)) ([7bf5d0a](https://github.com/reactstrap/reactstrap/commit/7bf5d0a)), closes [#134](https://github.com/reactstrap/reactstrap/issues/134)
* **Modal:** allow for multiple modals ([#138](https://github.com/reactstrap/reactstrap/issues/138)) ([7ada8cf](https://github.com/reactstrap/reactstrap/commit/7ada8cf)), closes [#137](https://github.com/reactstrap/reactstrap/issues/137)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/reactstrap/reactstrap/compare/3.0.1...v3.1.0) (2016-09-11)


### Features

* **Tabs:** add TabContent & TabPane components ([#131](https://github.com/reactstrap/reactstrap/issues/131)) ([2957ede](https://github.com/reactstrap/reactstrap/commit/2957ede))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/reactstrap/reactstrap/compare/3.0.0...v3.0.1) (2016-09-08)


### Bug Fixes

* **docs:** update deploy script ([8fd0761](https://github.com/reactstrap/reactstrap/commit/8fd0761))
* **modal:** fix event listener for modal ([#127](https://github.com/reactstrap/reactstrap/issues/127)) ([c778608](https://github.com/reactstrap/reactstrap/commit/c778608)), closes [#126](https://github.com/reactstrap/reactstrap/issues/126)
* **TetherContent:** rerender when other props change ([#128](https://github.com/reactstrap/reactstrap/issues/128)) ([25600d4](https://github.com/reactstrap/reactstrap/commit/25600d4)), closes [#125](https://github.com/reactstrap/reactstrap/issues/125)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/reactstrap/reactstrap/compare/2.6.1...v3.0.0) (2016-09-06)


### Code Refactoring

* **Button,DropdownToggle:** default to secondary style, remove cloning ([#120](https://github.com/reactstrap/reactstrap/issues/120)) ([5c56749](https://github.com/reactstrap/reactstrap/commit/5c56749)), closes [#98](https://github.com/reactstrap/reactstrap/issues/98)


### BREAKING CHANGES

* Button,DropdownToggle: DropdownToggle no longer clones each element in props.children when it’s an array, instead it renders props.children inside a single component (Butt
* Button,DropdownToggle: Button color now defaults to “secondary”. This behavior aligns with DropdownToggle color default.



<a name="2.6.1"></a>
## [2.6.1](https://github.com/reactstrap/reactstrap/compare/2.6.0...v2.6.1) (2016-09-01)


### Features

* **ModalClassName:** Adds custom class name for modal-dialogs for namespacing ([#111](https://github.com/reactstrap/reactstrap/issues/111)) ([5f7cab6](https://github.com/reactstrap/reactstrap/commit/5f7cab6))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/reactstrap/reactstrap/compare/2.5.0...v2.6.0) (2016-08-21)


### Features

* **Pagination:** add Pagination component ([#108](https://github.com/reactstrap/reactstrap/issues/108)) ([fdc5c45](https://github.com/reactstrap/reactstrap/commit/fdc5c45))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/reactstrap/reactstrap/compare/2.4.0...v2.5.0) (2016-08-19)


### Bug Fixes

* **Modal:** set focus state before showing ([#104](https://github.com/reactstrap/reactstrap/issues/104)) ([a358233](https://github.com/reactstrap/reactstrap/commit/a358233))
* **Modal:** use togglePortal on componentDidMount ([#106](https://github.com/reactstrap/reactstrap/issues/106)) ([942b24a](https://github.com/reactstrap/reactstrap/commit/942b24a))


### Features

* **Progress:** add Progress component ([#105](https://github.com/reactstrap/reactstrap/issues/105)) ([bc185d8](https://github.com/reactstrap/reactstrap/commit/bc185d8)), closes [#78](https://github.com/reactstrap/reactstrap/issues/78)



<a name="2.4.0"></a>
# [2.4.0](https://github.com/reactstrap/reactstrap/compare/2.3.0...v2.4.0) (2016-08-18)


### Features

* **Media:** add Media component ([#94](https://github.com/reactstrap/reactstrap/issues/94)) ([d4c0f2d](https://github.com/reactstrap/reactstrap/commit/d4c0f2d))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/reactstrap/reactstrap/compare/2.2.0...v2.3.0) (2016-08-18)


### Features

* **inputGroup:** add InputGroup components ([#99](https://github.com/reactstrap/reactstrap/issues/99)) ([18a2ef7](https://github.com/reactstrap/reactstrap/commit/18a2ef7)), closes [#74](https://github.com/reactstrap/reactstrap/issues/74)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/reactstrap/reactstrap/compare/2.1.0...v2.2.0) (2016-08-13)


### Features

* **Card:** update img position classes ([#91](https://github.com/reactstrap/reactstrap/issues/91)) ([920e2f8](https://github.com/reactstrap/reactstrap/commit/920e2f8))
* **Dropdown:** add size prop ([#90](https://github.com/reactstrap/reactstrap/issues/90)) ([92c62b1](https://github.com/reactstrap/reactstrap/commit/92c62b1))
* **Dropdowns:** use split class for split dropdowns ([#92](https://github.com/reactstrap/reactstrap/issues/92)) ([ee17a47](https://github.com/reactstrap/reactstrap/commit/ee17a47))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/reactstrap/reactstrap/compare/2.0.0...v2.1.0) (2016-08-06)


### Features

* **breadcrumb:** Add Breadcrumb and BreadcrumbItem ([d34d738](https://github.com/reactstrap/reactstrap/commit/d34d738))
* **form:** add forms and form element components ([#67](https://github.com/reactstrap/reactstrap/issues/67)) ([7c32483](https://github.com/reactstrap/reactstrap/commit/7c32483))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/reactstrap/reactstrap/compare/1.6.1...v2.0.0) (2016-07-28)


### Features

* **bootstrap:** update for v4 alpha 3 ([f617dc5](https://github.com/reactstrap/reactstrap/commit/f617dc5))
* **Col:** Update Col component with alpha 3 changes ([b62ee01](https://github.com/reactstrap/reactstrap/commit/b62ee01))
* **outline:** Make outline a separate prop for Card & Button ([#62](https://github.com/reactstrap/reactstrap/issues/62)) ([c65e952](https://github.com/reactstrap/reactstrap/commit/c65e952))


### BREAKING CHANGES

* bootstrap: Components were updated for v4 alpha 3

 - Button outline class change from `.{variant}-outline` to `.outline-{variant}`.
 - label is now tag and all of the label variants are now tag variants.
 - Cards now have an outline variant.



<a name="1.6.1"></a>
## [1.6.1](https://github.com/reactstrap/reactstrap/compare/1.6.0...v1.6.1) (2016-07-16)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/reactstrap/reactstrap/compare/1.5.0...v1.6.0) (2016-07-11)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/reactstrap/reactstrap/compare/1.4.0...v1.5.0) (2016-06-26)


### Bug Fixes

* **docs:** make buttons display block on xs views ([#46](https://github.com/reactstrap/reactstrap/issues/46))([fd14292](https://github.com/reactstrap/reactstrap/commit/fd14292))


### Features

* **Tables:** Add Table component ([#47](https://github.com/reactstrap/reactstrap/issues/47))([c935487](https://github.com/reactstrap/reactstrap/commit/c935487))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/reactstrap/reactstrap/compare/1.3.4...v1.4.0) (2016-06-26)


### Features

* **Card:** add Card related components ([#44](https://github.com/reactstrap/reactstrap/issues/44))([b782807](https://github.com/reactstrap/reactstrap/commit/b782807))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/reactstrap/reactstrap/compare/1.3.3...v1.3.4) (2016-06-12)


### Bug Fixes

* **Modal:** handle prop updates ([#35](https://github.com/reactstrap/reactstrap/issues/35)) ([#40](https://github.com/reactstrap/reactstrap/issues/40))([23a3561](https://github.com/reactstrap/reactstrap/commit/23a3561))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/reactstrap/reactstrap/compare/1.3.2...v1.3.3) (2016-06-12)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/reactstrap/reactstrap/compare/1.3.1...v1.3.2) (2016-06-12)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/reactstrap/reactstrap/compare/1.3.0...v1.3.1) (2016-04-24)




<a name="1.3.0"></a>
# [1.3.0](https://github.com/reactstrap/reactstrap/compare/1.2.4...v1.3.0) (2016-03-31)


### Bug Fixes

* **.gitignore:** add root directories to ignore ([8952445](https://github.com/reactstrap/reactstrap/commit/8952445))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/reactstrap/reactstrap/compare/1.2.3...v1.2.4) (2016-03-28)


### Bug Fixes

* **src:** update paths to src ([c61c466](https://github.com/reactstrap/reactstrap/commit/c61c466))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/reactstrap/reactstrap/compare/1.2.2...v1.2.3) (2016-03-28)


### Bug Fixes

* **build:** update scripts ([051e805](https://github.com/reactstrap/reactstrap/commit/051e805))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/reactstrap/reactstrap/compare/1.2.1...v1.2.2) (2016-03-28)


### Bug Fixes

* **src:** update path to src ([5e0caa6](https://github.com/reactstrap/reactstrap/commit/5e0caa6))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/reactstrap/reactstrap/compare/1.2.0...v1.2.1) (2016-03-28)




<a name="1.2.0"></a>
# [1.2.0](https://github.com/reactstrap/reactstrap/compare/1.1.0...v1.2.0) (2016-03-28)


### Features

* **Navbar:** add Navbar components ([91ad2b4](https://github.com/reactstrap/reactstrap/commit/91ad2b4))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/reactstrap/reactstrap/compare/1.0.0...v1.1.0) (2016-03-27)


### Features

* **Navs:** Add nav components ([5e2ba03](https://github.com/reactstrap/reactstrap/commit/5e2ba03))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/reactstrap/reactstrap/compare/0.8.0...v1.0.0) (2016-03-27)


### Code Refactoring

* **components:** standardize custom tag names ([494e4ec](https://github.com/reactstrap/reactstrap/commit/494e4ec))


### BREAKING CHANGES

* components: `El` prop is now `tag`. This standardizes the way
custom elements should render their html “tags”.



<a name="0.8.0"></a>
# [0.8.0](https://github.com/reactstrap/reactstrap/compare/0.7.2...v0.8.0) (2016-03-27)


### Features

* **Layout:** Add Container, Row, Col components ([69ada73](https://github.com/reactstrap/reactstrap/commit/69ada73))



<a name="0.7.2"></a>
## [0.7.2](https://github.com/reactstrap/reactstrap/compare/0.7.1...v0.7.2) (2016-03-26)




<a name="0.7.1"></a>
## [0.7.1](https://github.com/reactstrap/reactstrap/compare/0.7.0...v0.7.1) (2016-03-26)




<a name="0.7.0"></a>
# [0.7.0](https://github.com/reactstrap/reactstrap/compare/0.6.1...v0.7.0) (2016-03-26)


### Features

* **Button:** render anchor tag if href prop exists ([61f4a11](https://github.com/reactstrap/reactstrap/commit/61f4a11))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/reactstrap/reactstrap/compare/0.6.0...v0.6.1) (2016-03-26)




<a name="0.6.0"></a>
# [0.6.0](https://github.com/reactstrap/reactstrap/compare/0.5.7...v0.6.0) (2016-03-26)


### Features

* **package:** add bootstrap@4.0.0-alpha.2 and css loaders ([046079b](https://github.com/reactstrap/reactstrap/commit/046079b))



<a name="0.5.7"></a>
## [0.5.7](https://github.com/reactstrap/reactstrap/compare/0.5.6...v0.5.7) (2016-03-25)


### Bug Fixes

* **ButtonGroup:** remove btn-group when vertical ([9b70e37](https://github.com/reactstrap/reactstrap/commit/9b70e37))
* **docs:** add and use reactstrap alias ([fcfe88d](https://github.com/reactstrap/reactstrap/commit/fcfe88d))



<a name="0.5.6"></a>
## [0.5.6](https://github.com/reactstrap/reactstrap/compare/0.5.5...v0.5.6) (2016-03-24)




<a name="0.5.5"></a>
## [0.5.5](https://github.com/reactstrap/reactstrap/compare/0.5.4...v0.5.5) (2016-03-24)


### Bug Fixes

* **ModalHeader:** update close character ([7128e78](https://github.com/reactstrap/reactstrap/commit/7128e78))



<a name="0.5.4"></a>
## [0.5.4](https://github.com/reactstrap/reactstrap/compare/0.5.3...v0.5.4) (2016-03-20)




<a name="0.5.3"></a>
## [0.5.3](https://github.com/reactstrap/reactstrap/compare/0.5.2...v0.5.3) (2016-03-14)




<a name="0.5.2"></a>
## [0.5.2](https://github.com/reactstrap/reactstrap/compare/0.5.1...v0.5.2) (2016-03-14)


### Bug Fixes

* **examples:** remove .min from example script ([b051dc1](https://github.com/reactstrap/reactstrap/commit/b051dc1))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/reactstrap/reactstrap/compare/0.5.0...0.5.1) (2016-03-13)




<a name="0.5.0"></a>
# [0.5.0](https://github.com/reactstrap/reactstrap/compare/0.4.0...0.5.0) (2016-03-13)


### Bug Fixes

* **tests:** make them faster & fix dropdown ([5dadc6f](https://github.com/reactstrap/reactstrap/commit/5dadc6f))

### Features

* **Fade:** enable fading components ([a84df68](https://github.com/reactstrap/reactstrap/commit/a84df68))
* **Label:** add component ([28d3edf](https://github.com/reactstrap/reactstrap/commit/28d3edf))
* **Layout:** add PopoverExample ([8200ee2](https://github.com/reactstrap/reactstrap/commit/8200ee2))
* **Layout:** include LabelsExample in Layout ([df1baa4](https://github.com/reactstrap/reactstrap/commit/df1baa4))
* **lib:** export Label component ([2856cd0](https://github.com/reactstrap/reactstrap/commit/2856cd0))
* **Modal:** add modal components ([6c2293e](https://github.com/reactstrap/reactstrap/commit/6c2293e))
* **Popover:** add component ([bc66aec](https://github.com/reactstrap/reactstrap/commit/bc66aec))
* **PopoverContent:** add component ([7282225](https://github.com/reactstrap/reactstrap/commit/7282225))
* **PopoverTitle:** add component ([bdf6623](https://github.com/reactstrap/reactstrap/commit/bdf6623))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/reactstrap/reactstrap/compare/0.3.0...0.4.0) (2016-02-29)


### Features

* **Tooltips:** add component and utils ([0ddbed5](https://github.com/reactstrap/reactstrap/commit/0ddbed5))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/reactstrap/reactstrap/compare/0.2.0...0.3.0) (2016-02-28)


### Bug Fixes

* **Button:** add disabled class ([96627ef](https://github.com/reactstrap/reactstrap/commit/96627ef))

### Features

* **Dropdowns:** add TetherContent support ([16c0f86](https://github.com/reactstrap/reactstrap/commit/16c0f86))
* **Dropdowns:** pass more methods to children ([87596e4](https://github.com/reactstrap/reactstrap/commit/87596e4))
* **TetherContent:** support Tethering Content to Targets ([573d47e](https://github.com/reactstrap/reactstrap/commit/573d47e))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/reactstrap/reactstrap/compare/065e978...0.2.0) (2016-02-21)


### Bug Fixes

* **package.json:** add missing dev-dep babel-polyfill ([065e978](https://github.com/reactstrap/reactstrap/commit/065e978))

### Features

* **ButtonDropdown:** wrap Dropdown for ButtonDropdown ([a2ea178](https://github.com/reactstrap/reactstrap/commit/a2ea178))
* **ButtonGroup:** Add button group and toolbar ([123b435](https://github.com/reactstrap/reactstrap/commit/123b435))
* **buttons:** update examples & tests ([52fd2fb](https://github.com/reactstrap/reactstrap/commit/52fd2fb))
* **Buttons:** support block level buttons ([f9cf8db](https://github.com/reactstrap/reactstrap/commit/f9cf8db))
* **Dropdowns:** add examples ([3d48e8c](https://github.com/reactstrap/reactstrap/commit/3d48e8c))
* **Dropdowns:** basic dropdown, toggle, menu & menu items ([750aaf9](https://github.com/reactstrap/reactstrap/commit/750aaf9))


[![reactstrap](https://cloud.githubusercontent.com/assets/399776/13906899/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png)](https://reactstrap.github.io)

[![CDNJS](https://img.shields.io/cdnjs/v/reactstrap.svg)](https://cdnjs.com/libraries/reactstrap) [![NPM Version](https://img.shields.io/npm/v/reactstrap.svg?branch=master)](https://www.npmjs.com/package/reactstrap) [![Build Status](https://travis-ci.org/reactstrap/reactstrap.svg?branch=master)](https://travis-ci.org/reactstrap/reactstrap) [![Coverage Status](https://coveralls.io/repos/github/reactstrap/reactstrap/badge.svg?branch=master)](https://coveralls.io/github/reactstrap/reactstrap?branch=master) [![License](https://img.shields.io/npm/l/reactstrap.svg)](https://github.com/reactstrap/reactstrap/blob/master/LICENSE)

# reactstrap

Stateless React Components for Bootstrap 4.

## Getting Started

Follow the [create-react-app instructions](https://create-react-app.dev/docs/getting-started) to get started and then follow the reactstrap version of [adding bootstrap](#adding-bootstrap).

### tl;dr

 ```
npx create-react-app my-app
cd my-app/
npm start
```
or,  if npx (Node >= 6 and npm >= 5.2 ) not available 

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
``` 

Then open [http://localhost:3000/](http://localhost:3000/) to see your app. The initial structure of your app is setup. Next, let's [add reactstrap and bootstrap](#adding-bootstrap).

### Adding Bootstrap

Install reactstrap and Bootstrap from NPM. Reactstrap does not include Bootstrap CSS so this needs to be installed as well:

```
npm i bootstrap
npm i reactstrap react react-dom
```

Import Bootstrap CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
```

Import required reactstrap components within ```src/App.js``` file or your custom component files:

```js
import { Button } from 'reactstrap';
```

Now you are ready to use the imported reactstrap components within your component hierarchy defined in the render
method. Here is an example [`App.js`](https://gist.github.com/Thomas-Smyth/006fd507a7295f17a8473451938f9935) redone
using reactstrap.

### Dependencies

##### Required Peer Dependencies

These libraries are not bundled with Reactstrap and required at runtime:

  * [**react**](https://www.npmjs.com/package/react)
  * [**react-dom**](https://www.npmjs.com/package/react-dom)

##### Optional Dependencies

These libraries are not included in the main distribution file `reactstrap.min.js` and need to be manually
included when using components that require transitions or popover effects (e.g. Tooltip, Modal, etc).

  * [**react-transition-group**](https://www.npmjs.com/package/react-transition-group)
  * [**react-popper**](https://www.npmjs.com/package/react-popper)


### CDN

If you prefer to include Reactstrap globally by marking `reactstrap` as external in your application, the
`reactstrap` library provides various single-file distributions, which are hosted on the following CDNs:

* [**cdnjs**](https://cdnjs.com/libraries/reactstrap)
```html
<!-- Main version -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>

<!-- All optional dependencies version -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.full.min.js"></script>
```

* [**unpkg**](https://unpkg.com/reactstrap/)
```html
<!-- Main version -->
<script src="https://unpkg.com/reactstrap@6.0.1/dist/reactstrap.min.js"></script>

<!-- All optional dependencies version -->
<script src="https://unpkg.com/reactstrap@6.0.1/dist/reactstrap.full.min.js"></script>
```

> **Note**: To load a specific version of Reactstrap replace `6.0.1` with the version number.

#### Versions

Reactstrap has two primary distribution versions:

1) `reactstrap.min.js`

    This file **excludes** the optional dependencies – `react-popper` and `react-transition-group`.
    This is the recommended approach (similar approach in Bootstrap's JavaScript components) for including
    Reactstrap as it reduces the filesize and gives more flexibility in configuring needed dependencies.

    **Recommended use cases:**

      * Small, medium, or large applications
      * Applications that do not use any transitions or popper components
      * Applications that directly use `react-popper` or `react-transition-group` – Reactstrap and your application
        will use the single global version included

 2) `reactstrap.full.min.js`

    This file **includes** the optional dependencies – `react-popper` and `react-transition-group`

    **Recommended use cases:**

      * Small applications


#### Example

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required dependencies -->
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.1/prop-types.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
    <!-- Optional dependencies -->
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-transition-group/2.2.1/react-transition-group.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react-popper/0.10.4/umd/react-popper.min.js"></script>
    <!-- Reactstrap -->
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>
    <!-- Lastly, include your app's bundle -->
    <script type="text/javascript" src="/assets/bundle.js"></script>
  </head>
  <body>
    <div id="my-app" />
  </body>
</html>
```

## About the Project

This library contains React Bootstrap 4 components that favor composition and control. The library does not depend on jQuery or Bootstrap javascript. However, [Poppers.js](https://popper.js.org/) via [react-popper](https://github.com/souporserious/react-popper) is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.

There are a few core concepts to understand in order to make the most out of this library.

1. Your content is expected to be composed via props.children rather than using named props to pass in Components.

    ```js
    // Content passed in via props
    const Example = (props) => {
      return (
        <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
      );
    }

    // Content passed in as children (Preferred)
    const PreferredExample = (props) => {
      return (
        <p>
          This is a <a href="#" id="TooltipExample">tooltip</a> example.
          <Tooltip target="TooltipExample">
            <TooltipContent/>
          </Tooltip>
        </p>
      );
    }
    ```

2. Attributes in this library are used to pass in state, conveniently apply modifier classes, enable advanced functionality (like tether), or automatically include non-content based elements.

    Examples:

    - `isOpen` - current state for items like dropdown, popover, tooltip
    - `toggle` - callback for toggling `isOpen` in the controlling component
    - `color` - applies color classes, ex: `<Button color="danger"/>`
    - `size` - for controlling size classes. ex: `<Button size="sm"/>`
    - `tag` - customize component output by passing in an element name or Component
    - boolean based props (attributes) when possible for alternative style classes or `visually-hidden` content


## [Documentation](https://reactstrap.github.io)

https://reactstrap.github.io

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/).

## [Contributing](CONTRIBUTING.md)

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080/](http://localhost:8080/) with webpack dev server:

```sh
npm start
```

Run tests & coverage report:

```sh
npm test
```

Watch tests:

```sh
npm run test-watch
```

## Releasing

#### Create Release Branch

Note: you must have the `GITHUB_TOKEN` environment variable set to a valid GitHub token with write access to your repo.

To create a release branch and changelog, run the following command, optionally with a semantic release type (major, minor, patch) (if not provided, it will default to semver (it's best to let it default)):

```bash
./scripts/release <release-type>
```

Verify changelog in branch. Create a PR if everything looks good. Merge when tests are green.

#### Tagging and Publishing

Note: you must have write permission to this repo do perform this action

Once the release branch is merged, checkout master and run:

```bash
./scripts/publish
```

This will build the current state of master, tag it based on the release version and push the tag up to GitHub. Travis will detect the new tag and publish to npm.

_OR_

You can create a new tag via the GitHub user interface. If you do it this way, make sure to use the correct version as the tag name (eg. `6.2.0`).

## In the wild

Organizations and projects using `reactstrap`

- [availity-reactstrap-validation](https://availity.github.io/availity-reactstrap-validation/)
- [airframe-react](https://github.com/0wczar/airframe-react) - [demo](http://dashboards.webkom.co/react/airframe/) - Airframe provides all the components a developer needs to build data-intensive web apps using React.
- [component-template](https://reactstrap.github.io/component-template/)
- [video-react](https://video-react.github.io/)
- [CoreUI-Free-Bootstrap-Admin-Template](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template) - [demo](http://coreui.io/demo/React_Demo/#/)
- [Admin dashboard example app built with reactstrap](https://github.com/reduction-admin/react-reduction) - [demo](https://reduction-admin.firebaseapp.com/)
- [DevExtreme React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/) - It's a stateless data grid built on top of `reactstrap` with paging, sorting, filtering, grouping, selection, editing and virtual scrolling features.
- [DevExtreme React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) - A chart built on top of `reactstrap` that visualizes data using a variety of series types, including bar, line, area, scatter, pie, and more.
- [reactstrap-scrollspy](https://github.com/keidrun/reactstrap-scrollspy/) - [demo](https://keidrun.github.io/reactstrap-scrollspy/)
- [formstrap](https://github.com/pedox/formstrap/) - [demo](https://pedox.github.io/formstrap/) - Let your `reactstrap` input component integrate seamlessly using `Formik` 

Submit a PR to add to this list!

Looking to build, document and publish reusable components built on top of `reactstrap`? Consider forking https://github.com/reactstrap/component-template to kickstart your project!

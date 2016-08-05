import React, { PropTypes } from 'react';
import classNames from 'classnames';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
        size: stringOrNumberProp,
        push: stringOrNumberProp,
        pull: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

const propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    className: PropTypes.node
};

const defaultProps = {
    xs: 12
};

const Col = (props) => {
    const {className, ...attributes} = props;
    const colClasses = [];

    colSizes.forEach(colSize => {
        const columnProp = props[colSize];
        delete attributes[colSize];

        if (!columnProp) {
            return;
        } else if (columnProp.size) {
            colClasses.push(classNames({
                [`col-${colSize}-${columnProp.size}`]: columnProp.size,
                [`push-${colSize}-${columnProp.push}`]: columnProp.push,
                [`pull-${colSize}-${columnProp.pull}`]: columnProp.pull,
                [`offset-${colSize}-${columnProp.offset}`]: columnProp.offset
            }));
        } else {
            colClasses.push(`col-${colSize}-${columnProp}`);
        }
    });

    const classes = classNames(
        className,
        colClasses
    );

    return (
        <div {...attributes} className={classes} />
        );
};

Col.PropTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;

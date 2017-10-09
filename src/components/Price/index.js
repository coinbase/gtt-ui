import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./price.css";



class Price extends React.Component {
    constructor(props) {
        super(props);
        this.updated = true;
    }

    componentWillReceiveProps(nextProps) {
        const newValue = nextProps.value;
        this.updated = this.props.value !== newValue;
    }

    render() {
        const priceClasses = classNames({
            price_movement_up: this.props.movement === 'up',
            price_movement_down: this.props.movement === 'down',
            glow1: this.updated,
            glow2: !this.updated
        });
        const value = (+this.props.value).toFixed(this.props.fixed);
        return <span className={priceClasses}>{this.props.symbol} {value}</span>;
    }
}

Price.propTypes = {
    value: PropTypes.string.isRequired,
    fixed: PropTypes.number,
    symbol: PropTypes.string.isRequired,
    movement: PropTypes.string
};

Price.defaultProps = {
    fixed: 2,
    movement: 'none'
};

export default Price;

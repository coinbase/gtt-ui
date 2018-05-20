import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from  'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Price from '../Price/index';

const TickerRow = props => (
    <TableRow>
        <TableRowColumn>{props.title}</TableRowColumn>
        <TableRowColumn>
            <Price
                value={props.ticker.price} fixed={props.quotePrecision} movement={props.movement}
                symbol={props.quoteCurrencySymbol}
            />
        </TableRowColumn>
        <TableRowColumn>
            <Price
                value={props.ticker.bid} fixed={props.quotePrecision} symbol={props.quoteCurrencySymbol}/>
        </TableRowColumn>
        <TableRowColumn>
            <Price
                value={props.ticker.ask} fixed={props.quotePrecision} symbol={props.quoteCurrencySymbol}/>
        </TableRowColumn>
    </TableRow>
);

const TickerTable = (props) => {
    return (
        <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn></TableHeaderColumn>
                    <TableHeaderColumn>Last Price</TableHeaderColumn>
                    <TableHeaderColumn>Bid</TableHeaderColumn>
                    <TableHeaderColumn>Ask</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {props.children}
            </TableBody>
        </Table>
    );
};

TickerRow.propTypes = {
    title: PropTypes.string,
    ticker: PropTypes.object,
    quotePrecision: PropTypes.number.isRequired,
    quoteCurrencySymbol: PropTypes.string,
    baseCurrencySymbol: PropTypes.string,
    basePrecision: PropTypes.number.isRequired,
    movement: PropTypes.string
};

TickerRow.defaultProps = {
    title: '',
    ticker: {},
    quoteCurrencySymbol: '$',
    baseCurrencySymbol: '₿',
    movement: 'none'
};

export {TickerRow, TickerTable};

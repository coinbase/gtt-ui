import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from  'material-ui';
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
    title: React.PropTypes.string,
    ticker: React.PropTypes.object,
    quotePrecision: React.PropTypes.number.isRequired,
    quoteCurrencySymbol: React.PropTypes.string,
    baseCurrencySymbol: React.PropTypes.string,
    basePrecision: React.PropTypes.number.isRequired,
    movement: React.PropTypes.string
};

TickerRow.defaultProps = {
    title: '',
    ticker: {},
    quoteCurrencySymbol: '$',
    baseCurrencySymbol: '₿',
    movement: 'none'
};

export {TickerRow, TickerTable};

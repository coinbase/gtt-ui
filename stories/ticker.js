import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/index';
import { TickerRow, TickerTable } from '../src/components/Ticker/index';

storiesOf('Ticker', module)
.add('Ticker table headings', () => (
    <TickerTable />
))
.add('Ticker table with rows', () => {
    const ticker1 = {
        price: '950.12',
        bid: '948.67',
        ask: '950.13',
        volume: '10234.34325'
    };
    const ticker2 = {
        price: '945.156',
        bid: '942.55',
        ask: '952.73',
        volume: '5634.34325'
    };
    const ticker3 = {
        price: '0.012464',
        bid: '0.01223',
        ask: '0.0123124',
        volume: '25000.3432'
    };
    return (
        <TickerTable>
            <TickerRow
                title="GDAX" ticker={ticker1} quoteCurrencySymbol="$" basePrecision={4} quotePrecision={2}
                movement="up"
            />
            <TickerRow
                title="Bitfinex" ticker={ticker2} quoteCurrencySymbol="$" basePrecision={4} quotePrecision={2}
                movement="down"
            />
            <TickerRow
                title="GDAX ETH-BTC" ticker={ticker3} quoteCurrencySymbol="₿" basePrecision={4}
                quotePrecision={4} movement="down"
            />
        </TickerTable>
    );
});

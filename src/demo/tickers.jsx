/* globals document */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TickerRow, TickerTable } from '../components/Ticker';
import Socket from '../ws_client';
import { TickerState } from '../components/Ticker/tickerState';

const socket = new Socket('ws://localhost:3222');
const products = ['BTC-USD', 'ETH-USD', 'LTC-USD'];

const symbols = {
    BTC: ['₿', 4],
    USD: ['$', 2],
    EUR: ['€', 2],
    ETH: ['Ξ', 4],
    LTC: ['Ł', 3]
};

function attachToExchanges() {
    console.log('Attaching to exchanges');
    const msg = {
        type: 'attach',
        tag: 'gdax-attach',
        exchange: 'gdax',
        products
    };
    socket.send(msg);
}

const subscribeToBooks = message => {
    const tag = message.tag || 'none';
    switch (tag) {
        case 'none':
            return;
        case 'gdax-attach':
            products.forEach(p => {
                console.log(`Subscribing to ${p}`);
                socket.send({ type: 'subscribe', exchange: 'gdax', product: p, tag: `gdax-ticker` });
            });
            break;
    }
};

socket.on('online', () => {
    socket.once('attached', subscribeToBooks);
    attachToExchanges();
});

const tickerState = new TickerState(socket);

function getRows() {
    if (!tickerState.tickers) {
        return [];
    }
    const rows = [];
    tickerState.tickers.forEach((ticker) => {
        const title = ticker.productId;
        const [baseCur, quoteCur] = ticker.productId.split('-');
        rows.push(<TickerRow title={title}
                             ticker={ticker}
                             quoteCurrencySymbol={symbols[quoteCur][0]}
                             baseCurrencySymbol={symbols[baseCur][0]}
                             basePrecision={symbols[baseCur][1]}
                             quotePrecision={symbols[quoteCur][1]}
                             movement={ticker.movement}
                             key={ title }/>);
    });
    return rows;
}

const App = observer(() => {

    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <TickerTable>
                {getRows()}
            </TickerTable>
        </MuiThemeProvider>
    );
});

ReactDOM.render(React.createElement(App, null), document.getElementById('example'));

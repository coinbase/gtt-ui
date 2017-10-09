'use strict';
import {observable, action} from 'mobx';

export class TickerState {

    constructor(feed) {
        this._feed = feed;
        this.listenForUpdates();
        this.tickers = observable.map({});
    }

    listenForUpdates() {
        this._feed.on('ticker', action('update_ticker', (ticker) => {
            const bookName = ticker.data.productId;
            const newTicker = Object.assign({}, ticker.data);
            const oldTicker = this.tickers.get(bookName);
            newTicker.movement = 'none';
            if (oldTicker) {
                const diff = (+newTicker.price) - (+oldTicker.price);
                if (diff > 0) {
                    newTicker.movement = 'up';
                }
                else if (diff < 0) {
                    newTicker.movement = 'down';
                }
            }
            this.tickers.set(bookName, newTicker);
        }));
    }
}



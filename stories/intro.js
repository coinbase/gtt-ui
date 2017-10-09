import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/index';
import { linkTo } from '@storybook/addon-links';

storiesOf('Welcome', module).add('to Storybook', () => (
    <div>
    <h1>GDAX Trading toolkit component showcase</h1>
    <p>This is a small gallery of the gtt-ui components. This is a dummy gallery. The components areen't connected to a live data source,
        so you won't see any interaction or live data updates, but you'll get a sense of what the collection offers and how to use it.</p>
    </div>
));


import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/index';
import Price from '../src/components/Price/index';

storiesOf('Price', module)
.add('as default', () => (
    <Price value="100.12345" fixed={2} symbol="$"/>
))
.add('with up tick', () => (
    <Price value="101.12345" fixed={2} symbol="$" movement="up"/>
))
.add('with down tick', () => (
    <Price value="0.012345" fixed={4} symbol="₿" movement="down"/>
));

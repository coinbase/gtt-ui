import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import { addDecorator } from '@storybook/react/dist/client/index';
import { getMuiTheme, darkBaseTheme } from 'material-ui/styles/index';

addDecorator(story => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        {story()}
    </MuiThemeProvider>
));

require('./intro');
require('./price');
require('./ticker');







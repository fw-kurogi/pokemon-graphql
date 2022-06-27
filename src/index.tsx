import React from 'react'
import ReactDOM from 'react-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme';

import {ApolloProvider} from "@apollo/client"
import client from './libs/apollo/client'

import App from './App'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
        </ThemeProvider>
    </ApolloProvider>,
    document.querySelector('#root'),
);
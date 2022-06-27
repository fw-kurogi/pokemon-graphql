import * as React from 'react'

import { Home } from './pages/Home'
import { styled } from "@mui/material"

const Main = styled('div')(() => ({
  display: 'block',
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  overflow: 'hidden'
}))

export default function App() {
  return (
    <Main>
      <Home />
    </Main>
  );
}
import { Paper, styled } from "@mui/material"


export const Content = styled('div')(() => ({
  margin: '0 auto',
  padding: '30px'
}))

export const FormPaper = styled(Paper)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: 600,
  margin: '0 auto'
}))
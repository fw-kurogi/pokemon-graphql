import React, { FC, useState } from 'react'
import { Alert, Grid, IconButton, InputBase, Snackbar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

import { Card } from "../../components/Card"
import { Content, FormPaper } from './styles'

import { PokemonQuery, usePokemonLazyQuery } from "../../generated/graphql"

export const Home: FC = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [pokemons, setPokemons] = useState<PokemonQuery['pokemon'][]>([])

  const queryHandler = (data: PokemonQuery) => {
    if (data.pokemon) {
      setPokemons([...pokemons, data.pokemon])

      return
    }

    setOpen(true)
  }

  const [query] = usePokemonLazyQuery({
    onCompleted: (data) => queryHandler(data)
  })

  return (
    <Content>
      <Snackbar open={open} onClose={() => setOpen(false)} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={() => setOpen(false)} severity="error">
          did not match
        </Alert>
      </Snackbar>

      <FormPaper>
        <InputBase
          value={search}
          onChange={event => setSearch(event?.target.value)}
          sx={{ml: 1, flex: 1}}
          placeholder="Search"
        />
        <IconButton type="submit" sx={{p: '10px'}} aria-label="search" onClick={() => query({variables: {name: search}})}>
          <SearchIcon/>
        </IconButton>
      </FormPaper>

      <Grid container spacing={1} sx={{ marginTop: '30px' }}>
        {pokemons.map(pokemon => (
          <Grid key={pokemon!.id} item>
            <Card key={pokemon!.id} pokemon={pokemon}/>
          </Grid>
        ))}
      </Grid>

    </Content>
  )
}
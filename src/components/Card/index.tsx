import { FC } from "react"
import CardContainer from '@mui/material/Card'
import { CardContent, CardMedia, Typography } from "@mui/material"
import { PokemonQuery } from "../../generated/graphql"

type Props = {
  pokemon: PokemonQuery['pokemon']
}

export const Card: FC<Props> = ({ pokemon }) => {
  return (
    <CardContainer sx={{ width: 300 }}>
      <CardMedia
        component="img"
        sx={{ height: 250 }}
        image={pokemon!.image!}
      />
      <CardContent>
        <Typography gutterBottom align="center" variant="h5" component="div">
          { pokemon!.name }
        </Typography>
        <Typography align="center" variant="subtitle1" color="text.secondary">
          { pokemon!.types!.join(' ') }
        </Typography>
      </CardContent>
    </CardContainer>
  )
}
import { gql } from '@apollo/client'

export const POKEMON = gql`
    query pokemon($name: String) {
        pokemon(name: $name) {
            id
            number
            name
            types
            image
        }
    }
`
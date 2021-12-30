import React, { useEffect, useState } from "react"
import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core"
import axios from "axios"
import { POKEMON_API_URL, IMAGE_API_URL } from "../api"
import PokemonCard from "../components/card/PokemonCard"

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "70px 10px 0px 10px",
    backgroundColor: "white",
  },
}))

export default function Pokedex() {
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState(null)
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data
        let newPokemonData = []
        results.forEach((pokemon, index) => {
          index++
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          }
          newPokemonData.push(pokemonObject)
        })
        setPokemonData(newPokemonData)
      }
    })
  }, [])
  return (
    <Box>
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            )
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  )
}

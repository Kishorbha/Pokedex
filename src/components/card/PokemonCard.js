import React from "react"
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "lightyellow",
      color: "red",
    },
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    textTransform: "uppercase",
  },
}))

export default function PokemonCard(props) {
  const classes = useStyles()
  const { pokemon, image } = props
  const { id, name } = pokemon
  return (
    <Grid item xs={12} sm={3} key={id}>
      <Link to={"/pokemon/" + id} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={image}></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title}>{name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

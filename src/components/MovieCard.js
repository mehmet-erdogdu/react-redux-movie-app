import React from "react";
import { Card, Button, Icon, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const extra = (movie, deleteMovie) => {
  return (
    <div className="ui two buttons">
      <Button animated="vertical" as={Link} to={`/movie/${movie._id}`}>
        <Button.Content visible>Düzenle</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated="vertical" onClick={() => deleteMovie(movie._id)}>
        <Button.Content hidden>Sil</Button.Content>
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
      </Button>
    </div>
  );
};

const MovieCard = ({ movie, deleteMovie }) => (
  <Grid.Column>
    <Card
      image={movie.cover}
      header={movie.title}
      extra={extra(movie, deleteMovie)}
    />
  </Grid.Column>
);

export default MovieCard;

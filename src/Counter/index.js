import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import useCounterActions from "../hooks/useCounterActios";

const Counter = () => {

  const {
    counter,
    decrement,
    increment,
    reset
  } = useCounterActions();

  return (
    <Container maxWidth="xs">
      <Grid container flexDirection={"column"} pt={10}>
        <Typography variant="h4" component={"h1"}>
          App Counter
        </Typography>
        <Typography variant="h6" component={"p"}>
          Contador: {counter}
        </Typography>
      </Grid>
      <Grid container pt={2}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button  onClick={increment}>
            Incrementar
          </Button>
          <Button onClick={decrement}>
            Decrementar
          </Button>
          <Button
            color="secondary"
            onClick={reset}
          >
            Reiniciar
          </Button>
        </ButtonGroup>
      </Grid>
    </Container>
  );
};

export default Counter;

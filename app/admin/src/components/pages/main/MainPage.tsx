import { FC } from 'react';
import Button from "@mui/material/Button";
import {Box, Container, Typography} from "@mui/material";

interface PropTypes {}

const MainPage: FC<PropTypes> = () => {
  return <div>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant={"contained"}>
          Go to the main page
        </Button>
      </Box>
    </Container>
  </div>
};

export default MainPage
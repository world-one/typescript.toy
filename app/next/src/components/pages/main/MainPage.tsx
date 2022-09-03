import {FC, useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {Autocomplete, Box, Container, Input, TextField, Typography} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { useDebounce } from "../../../utils/debouncer";
import globalStore from "../../../stores/GlobalStore";
import {observer, Observer} from "mobx-react-lite";
import Link from "next/link";

interface PropTypes {}

const MainPage: FC<PropTypes> = () => {
  const [value, setValue] = useState<any>();
  const [inputValue, setInputValue] = useState<string | null>(null);

  void useDebounce(inputValue, () => console.log('debounce'))

  return <Container maxWidth="sm">
    <Link href={'/about'}>about</Link>
    <Counter />
    <Number />
      <Box sx={{ my: 4 }}>
        <Input onChange={(e) => setInputValue(e.target.value)} />
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Autocomplete
          disablePortal
          sx={{width: '300px'}}
          renderInput={(params) => <TextField {...params} />} options={top100Films} />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant={"contained"}>
          Go to the main page
        </Button>
      </Box>
    </Container>
};

export default MainPage;

const Counter = () => {
  return (<button onClick={() => {
    globalStore.increaseAction(1);
  }}>
    증가
  </button>)
}

const Number = () => {
  return <Observer>
    {() => <div>{globalStore.num}</div>}
  </Observer>;
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
]
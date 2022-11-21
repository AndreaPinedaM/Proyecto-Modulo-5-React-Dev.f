import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect({byRating}) {
  const [rating, setRating] = React.useState('');

  const handleChange = (event) => {
    setRating(event.target.value);
    byRating(event.target.value)
  };

  return (
    <div  className="rating">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={rating}
          onChange={handleChange}
          label="Rating"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            <MenuItem className="ratingOption" value={1}>⭐ 1</MenuItem>
            <MenuItem className="ratingOption" value={2}>⭐ 2</MenuItem>
            <MenuItem className="ratingOption" value={3}>⭐ 3</MenuItem>
            <MenuItem className="ratingOption" value={4}>⭐ 4</MenuItem>
            <MenuItem className="ratingOption" value={5}>⭐ 5</MenuItem>
            <MenuItem className="ratingOption" value={6}>⭐ 6</MenuItem>
            <MenuItem className="ratingOption" value={7}>⭐ 7</MenuItem>
            <MenuItem className="ratingOption" value={8}>⭐ 8</MenuItem>
            <MenuItem className="ratingOption" value={9}>⭐ 9</MenuItem>
            <MenuItem className="ratingOption" value={10}>⭐ 10</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export{BasicSelect}
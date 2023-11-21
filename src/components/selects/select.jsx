import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function CustomSelect(props) {
  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="select-input-label">{props.message}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={props.selectedCountry}
          onChange={props.handleCountryChange}
          options={props.countryList}
        >
          <MenuItem value={props.countryList}>Select Country</MenuItem>
          {props.countryList.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

CustomSelect.propTypes = {
  message: PropTypes.string,
  countryList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  selectedCountry: PropTypes.string,
  handleCountryChange: PropTypes.func,
};

export default CustomSelect;
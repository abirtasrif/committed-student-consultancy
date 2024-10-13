import ReactCountryFlag from "react-country-flag";

const CountryButton = ({ props }) => {
  return (
    <ReactCountryFlag
      countryCode={props}
      svg
      style={{
        width: "2em",
        height: "2em",
      }}
      title={props}
    />
  );
};

export default CountryButton;

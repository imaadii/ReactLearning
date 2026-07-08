const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <p>It's quite cold!</p>;
  } else if (temperature >= 15 && temperature < 25) {
    return <p>The weather is pleasant.</p>;
  } else {
    return <p>It's hot outside!</p>;
  }
};

export default Weather;

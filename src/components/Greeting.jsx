const Greeting = ({timeofDay}) => {
  return (
    <>
      {timeofDay === "morning" ? <p>Good Morning</p> : timeofDay === "afternoon" ? <p>Good Afternoon</p> : <p>Good Evening</p>}
    </>
  );
};

export default Greeting;
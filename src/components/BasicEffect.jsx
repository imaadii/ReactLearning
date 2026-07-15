import { useEffect } from "react";

const BasicEffect = () => {


    useEffect(() => {
      console.log("Mount whenever React render!")
    }, []);

  return (
    <div>
      <h1>THis is for working!</h1>
      <p>This is working</p>
      <p>This is working</p>
      <p>This is working</p>
      <p>This is working</p>
      <p>This is working</p>
    </div>
  );
};

export default BasicEffect;
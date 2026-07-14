import { useEffect } from "react";

const Timer = ({show}) => {

    useEffect(() => {
        const id = setInterval(() => {
            console.log("Tick");
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

  return (
    <div>
      Hello, I am a timer component. I will log "Tick" to the console every second while I am mounted.
    </div>
  );
};

export default Timer;
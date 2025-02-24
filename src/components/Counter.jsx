import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, duration = 8 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.5, // Starts animation when 50% of the component is visible
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={target}
          duration={duration}
          separator=","
          useEasing={true}
        />
      ) : (
        0 // Show 0 before the user scrolls down
      )}
    </span>
  );
};

export default Counter;

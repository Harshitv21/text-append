import "../styles/Heading.css";
import TypingEffect from "./TypingEffect";

function Heading() {
  return (
    <div className="heading">
      <h1>
        <TypingEffect text={"Text Append... 🔗"} delay={222} />
      </h1>
    </div>
  );
}

export default Heading;

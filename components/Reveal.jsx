import Parallax from "./Parallax";

// Scroll reveal only (no parallax drift)
const Reveal = (props) => <Parallax offset={0} {...props} />;

export default Reveal;

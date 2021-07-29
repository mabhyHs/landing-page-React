import './index.css';

const Text = (props) => {
    const { color, fontSize, letterSpacing, text } = props;
    return (
        <p style={{ color, fontSize, letterSpacing }} className="landing-text">{text}</p>
    );
}

export default Text;

import './index.css';

const Title = (props) => {
    const { color, fontSize, letterSpacing, title } = props;
    return (
        <h1 style={{ color, fontSize, letterSpacing }} className="landing-title">{title}</h1>
    );
}

export default Title;

import './index.css';

const Button = (props) => {
    const { buttonText } = props;

    return (
        <div className="landing-button">
            {buttonText}
        </div>
    );
} 

export default Button;


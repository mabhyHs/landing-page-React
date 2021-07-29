import './index.css';

const Button = (props) => {
    const { onClick, buttonText } = props;

    const onClickHandler = () => {
    	onClick && onClick();
	}

    return (
        <div className="lading-button" onClick={() => onClickHandler()}>
            {buttonText}
        </div>
    );
}

export default Button;

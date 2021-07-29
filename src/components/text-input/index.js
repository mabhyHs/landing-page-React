import './index.css';
import Tooltip from './../tooltip/index';

const TextInput = (props) => {
    const { placeholder, hasError, onChange, feedback, value, tooltipText } = props;

    const onChangeHandler = (value) => {
        onChange && onChange(value);
    }

    return (
        <div className="landing-input-wrapper">
            <input
                placeholder={placeholder}
                type="text"
                className={hasError ? `landing-input-text landing-input-text--error` : `landing-input-text`}
                value={value}
                onChange={(e) => {onChangeHandler(e.target.value)}}
            />
            {tooltipText && <Tooltip tooltipText={tooltipText}/> }
            <p className="landing-input-feedback">{feedback}</p>
        </div>
    );
}

export default TextInput;

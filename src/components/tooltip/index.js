import './index.css';

const Tooltip = (props) => {
    const { tooltipText } = props;
    return (
        <div className="landing-tooltip">
            <div className="landing-tooltip--icon"></div>
            <div>{tooltipText}</div>
        </div>
    );
}

export default Tooltip;

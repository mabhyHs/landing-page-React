import React, { useState } from 'react';
import Button from './../button/index';
import Modal from './../modal/index';
import Title from './../title/index';
import Text from './../text/index';
import TextInput from './../text-input/index';

const ModalButtonWrapper = (props) => {
    const { buttonText, modalTitle, modalTextFontSize, modalTitleFontSize, modalText, modalTextColor, modalTextLetterSpacing,
    modalTitleColorText, modalTitleLetterSpacing, buttonModalText, inputPlaceholder } = props;

    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [tooltipText, setTooltipText] = useState(null);

    const onClose = () => {
        setVisible(false);
        setInputValue(null);
        setHasError(false);
        setFeedback(null);
        setTooltipText(null);
    }

    const onButtonClick = () => {
        setVisible(true);
    }

    const onModalButtonClick = () => {
        const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!inputValue ) {
            setHasError(true);
            setFeedback(null);
            setTooltipText('Completa este dato');
        } else if (inputValue && emailValidation.test(inputValue)) {
            setHasError(false);
            setInputValue('');
            setFeedback('¡Gracias por unirte!');
            setTooltipText(null);
        } else {
            setHasError(true);
            setFeedback('Debes ingresar un email');
            setTooltipText(null);
        }
    }

    return (
        <div className="modal-button-wrapper">
            <Button buttonText={buttonText} onClick={onButtonClick} />
            <Modal visible={visible} onClose={onClose}>
                {modalTitle && <Title title={modalTitle} fontSize={modalTitleFontSize} color={modalTitleColorText} letterSpacing={modalTitleLetterSpacing} />}
                {modalText && <Text text={modalText} fontSize={modalTextFontSize} color={modalTextColor} letterSpacing={modalTextLetterSpacing} />}
                <TextInput placeholder={inputPlaceholder} onChange={setInputValue} hasError={hasError} feedback={feedback} value={inputValue} tooltipText={tooltipText} />
                {buttonModalText && <Button buttonText={buttonModalText} inputValue={inputValue} onClick={onModalButtonClick} />}
            </Modal>
        </div>
    );
}

export default ModalButtonWrapper;

import './index.css';
import Title from './../title/index';
import Text from './../text/index';
import ModalButtonWrapper from './../modal-button-wrapper/index';

const ContentContainer = (props) => {
    return (
        <div className="content-container">
            <div className="content-container--title">
                <Title title="PRÓXIMA MENTE" fontSize="90px" color="black" letterSpacing="15px" />
                <Text fontSize="20px" color="black" letterSpacing="3px" text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!" />
            </div>
            <ModalButtonWrapper
                buttonText="Notificarme"
                modalTitle="REGÍSTRATE"
                modalTitleFontSize="40px"
                modalTitleLetterSpacing="3px"
                modalText="Y mira antes que nadie las novedades"
                buttonModalText="Unirse"
                inputPlaceholder="Ingresá tu email aquí"
            />
        </div>
    );
}

export default ContentContainer;

import './index.css';
import Button from '../button';
import Title from '../title';
import Text from '../text';

const ContentContainer =() =>{
    return (
        <div className="content-container">
            <div className="content-container--title">
            <Title title="PRÓXIMAMENTE" color="black" fontSize="90px" letterSpacing="15px"/>            
            <Text text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!" color="black" fontSize="15px" letterSpacing="2px" />            
            <Button buttonText="Notificarme"/>
            </div>
        </div>
    );
}

export default ContentContainer;
import './index.css';
import Button from '../button';
import Title from '../title';
import Text from '../text';

const ContentContainer =() =>{
    return (
        <div className="content-container">
            <Title />            
            <Text />            
            <Button />
        </div>
    );
}

export default ContentContainer;
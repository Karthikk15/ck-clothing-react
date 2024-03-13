import {MenuItemStyled, ImageItem, ContentContainer, Title, Subtitle} from './menu-item.styles';
import withRouter from '../../routes/components/withRouter';

const MenuItem = ({title, size, imageUrl, linkUrl, router}) => {
    return (
        <MenuItemStyled onClick={()=> router.navigate(`${linkUrl}`)} >
             <ImageItem imageUrl={imageUrl}>
             </ImageItem>
              <ContentContainer>
                  <Title >{title.toUpperCase()}</Title>
                  <Subtitle >Shop Now</Subtitle>
              </ContentContainer>
          </MenuItemStyled>
    )
}

export default withRouter(MenuItem); // with router higher order func accepts a compoenent which return the same component with 
//super powers helps to access the history / match objects of react router dom.
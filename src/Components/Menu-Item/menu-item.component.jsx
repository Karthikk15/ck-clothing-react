import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, size, imageUrl, linkUrl, match, history}) => {
    return (
        <div className= {`${size} menu-item`} onClick={()=> history.push(`${match.path}${linkUrl}`)} >
             <div style={{
                 backgroundImage : `url(${imageUrl})` 
             }} className="imageItem">
             </div>
              <div className="contentContainer">
                  <span className="title">{title.toUpperCase()}</span>
                  <span className="content">Shop Now</span>
              </div>
          </div>
    )
}

export default withRouter(MenuItem); // with router higher order func accepts a compoenent which return the same component with 
//super powers helps to access the history / match objects of react router dom.
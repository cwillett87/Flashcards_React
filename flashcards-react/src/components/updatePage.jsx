import {withRouter} from 'react-router-dom';
import UpdateForm from './updateForm';

function UpdatePage(props) {
    console.log(props)
    return(
        <div>
           <UpdateForm flashcard={props.history.location.query}/>
        </div>
    );
}

export default withRouter(UpdatePage);
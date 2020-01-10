import { connect } from 'react-redux';
import { showRoomAll, fetchSuccess, fecthError} from './../../action';
import ListRoomComponent from './../../components/list_room/ListRoomComponent';
import {fetchListRoom} from './../../api/list_room';

const mapStateToProps = (state) => {
    return {
        listRoom : state.room.listRoom
    }
};
const mapDispatchToProps = dispatch => (   
    {
        load_data: () =>{
            dispatch(showRoomAll());
            return fetchListRoom().then(respones => {
                if (!respones.data.error) {
                    dispatch(fetchSuccess(respones.data.data));
                }else {
                    dispatch(fecthError(respones.data.message));
                }
            }).catch( error => {
                console.log(error);
                dispatch(fecthError(error));
            });
        }
    }
);
export default connect(mapStateToProps,mapDispatchToProps)(ListRoomComponent);
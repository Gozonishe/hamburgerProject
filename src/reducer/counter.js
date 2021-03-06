import {INCREMENT,UMENSHAEM} from '../constantce';

export default (count = 0, action) => {
    const {type} = action;
    switch (type){
        case INCREMENT:
            return count + 1;
        case UMENSHAEM:
            return count - 1;
        default: count = 0;
    }

    return count;
}
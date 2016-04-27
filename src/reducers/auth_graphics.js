import { GRAPHICS_PRINT_ALL, GRAPHICS_PRINT_PENDING, GRAPHICS_PRINT_INPROGRESS, GRAPHICS_PRINT_DENIED} from '../actions/types';

export default function(state={}, action){
	switch(action.type){
		case GRAPHICS_PRINT_ALL:
			return{...state,graphics_print_all:action.payload};
	}

	return state;
}
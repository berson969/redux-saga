import {ActionProps, SkillsState} from '../models';
import {
	SEARCH_SKILLS_FAILURE,
	SEARCH_SKILLS_REQUEST,
	SEARCH_SKILLS_SUCCESS,
	CHANGE_SEARCH_FIELD,
} from '../actions/actionsType';



const initialState: SkillsState = { items: [], loading: false, error: null, searchPattern: '' };

export default function skillsReducer(state = initialState, action: ActionProps) {
	switch (action.type) {
		case SEARCH_SKILLS_REQUEST:
			return { ...state, loading: true, error: null };
		case SEARCH_SKILLS_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case SEARCH_SKILLS_SUCCESS:
			return { ...state, items: action.payload , loading: false, error: null };
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchPattern: action.payload };
		default:
			return state;
	}
}

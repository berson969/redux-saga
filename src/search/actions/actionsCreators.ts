import {
	CHANGE_SEARCH_FIELD,
	SEARCH_SKILLS_SUCCESS,
	SEARCH_SKILLS_REQUEST,
	SEARCH_SKILLS_FAILURE,
} from './actionsType.ts'

export function searchSkillsRequest(searchPattern: string) {
	return { type: SEARCH_SKILLS_REQUEST, payload: searchPattern }
}

export function searchSkillsSuccess(items: []) {
	return { type: SEARCH_SKILLS_SUCCESS, payload: items }
}

export function searchSkillsFailure(error: Error) {
	return { type: SEARCH_SKILLS_FAILURE, payload: error }
}

export function changeSearchField(searchPattern: string) {
	return { type: CHANGE_SEARCH_FIELD, payload: searchPattern }
}

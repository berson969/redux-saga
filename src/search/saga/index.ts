import { retry, put, debounce, takeLatest, spawn } from "redux-saga/effects";
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from "../actions/actionsCreators";
import {
	CHANGE_SEARCH_FIELD,
	SEARCH_SKILLS_REQUEST,
} from "../actions/actionsType";
import { searchSkills } from "../api";
import {ActionProps} from "../models";
import {SagaIterator} from "redux-saga";

function filterChangeSearchAction(action: ActionProps) {
	return action.type === CHANGE_SEARCH_FIELD && action.payload.trim() !== ""
}

function* handleChangeSearchSaga(action: ActionProps) {
	yield put(searchSkillsRequest(action.payload))
}

function* handleSearchSkillsSaga(action: ActionProps): SagaIterator<void> {
	try {
		const retryCount = 3;
		const retryDelay = 1 * 1000;
		const data = yield retry(
			retryCount,
			retryDelay,
			searchSkills,
			action.payload
		)
		// const data = yield call(searchSkills, action.payload.search)

		yield put(searchSkillsSuccess(data))
	} catch (e) {
        if (e instanceof Error) {
            yield put(searchSkillsFailure(e));
        } else {
            // Обработка других типов ошибок
            yield put(searchSkillsFailure({name: "UnknownError", message: 'An unknown error occurred'}));
        }
    }
}

function* watchChangeSearchSaga() {
	// @ts-ignore
	yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga)
}

function* watchSearchSkillsSaga() {
	yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga)
}

export default function* saga() {
    yield spawn(watchChangeSearchSaga)
    yield spawn(watchSearchSkillsSaga)
}

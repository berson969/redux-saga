import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import skillsReducer from "../search/reducers/skills";
import servicesReducer from "../main-details/reducers/services.ts";
import saga from "../search/saga/index.ts"
import {combineEpics, createEpicMiddleware} from "redux-observable";
import { fetchServicesEpic, fetchDetailsEpic } from "../main-details/epics";

const reducer = combineReducers({ skills: skillsReducer, services: servicesReducer });
const epics = combineEpics(fetchServicesEpic, fetchDetailsEpic);

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();


const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, epicMiddleware))
)

sagaMiddleware.run(saga)
epicMiddleware.run(epics)

export default store

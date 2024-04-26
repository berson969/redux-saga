import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../reducers/services"
import {createEpicMiddleware} from "redux-observable";
import rootEpics from "../epics"

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpics)

export default store

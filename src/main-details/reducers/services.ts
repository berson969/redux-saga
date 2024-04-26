import {
    FETCH_SERVICES, FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_ERROR, FETCH_DETAILS,
    FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR
} from '../actions';
import {ActionProps, ServicesProps} from "../models";

const initialState: ServicesProps = {
    services: [],
    details: null,
    isLoading: false,
    error: ""
}

const servicesReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
        case FETCH_SERVICES:
            return {
                ...state,
				services: [],
                isLoading: true,
                error: ""
            }
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                services: action.payload,
                isLoading: false,
            }
        case FETCH_SERVICES_ERROR:
            return {
                ...state,
                error : action.payload.message,
                isLoading: false
            }
        case FETCH_DETAILS:
            return {
                ...state,
                isLoading: true,
				error: ""
            }
        case FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                details: action.payload,
                isLoading: false
            }
        case FETCH_DETAILS_ERROR:
            return {
                ...state,
                details: null,
                error: action.payload.message,
                isLoading: false
            }
        default:
            return state
    }
}

export default servicesReducer;

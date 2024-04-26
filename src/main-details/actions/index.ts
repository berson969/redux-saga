import {ActionProps, ServiceType} from "../models";

export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR';
export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';

export const fetchServices  = (): ActionProps => ({ type: FETCH_SERVICES });
export const fetchServicesSuccess = (services: ServiceType[]): ActionProps =>
    ({ type: FETCH_SERVICES_SUCCESS, payload: services });
export const fetchServicesError = (error: Error | string):ActionProps =>
    ({ type: FETCH_SERVICES_ERROR, payload: error });
export const fetchDetails  = (id: string): ActionProps =>
    ({ type: FETCH_DETAILS, payload: id });
export const fetchDetailsSuccess = (details:  ServiceType | null): ActionProps =>
    ({ type: FETCH_DETAILS_SUCCESS, payload: details });
export const fetchDetailsError = (error: Error | string): ActionProps =>
    ({ type: FETCH_DETAILS_ERROR, payload: error });

import {Epic, ofType} from 'redux-observable';
import {of, tap} from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import {fetchServicesSuccess, fetchServicesError, fetchDetailsSuccess, fetchDetailsError} from '../actions';
import {ajax} from "rxjs/internal/ajax/ajax";
import {ActionProps} from "../models";

export const fetchServicesEpic: Epic  = (action$) => action$.pipe(
    ofType('FETCH_SERVICES'),
    tap(o => console.log("FetchServ", o)),
    mergeMap(() =>
        ajax.getJSON('http://localhost:7071/api/services').pipe(
            // retry(3),
            map((response: any) => fetchServicesSuccess(response)),
            catchError((error) => of(fetchServicesError(error)))
        )
    )
);

export const fetchDetailsEpic: Epic = (action$) => action$.pipe(
    ofType('FETCH_DETAILS'),
    mergeMap((action: ActionProps) =>
        ajax.getJSON(`http://localhost:7071/api/services/${action.payload}`).pipe(
            // retry(3),
            tap(o => console.log("FetchDetails", o)),
            map((response: any) => fetchDetailsSuccess(response)),
            catchError((error) => of(fetchDetailsError(error)))
        )
    )
);


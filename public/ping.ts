import { ofType } from 'redux-observable';
import { filter, mapTo, map, switchMap } from 'rxjs/operators';

export const pingEpic = (action$,state$,api) => action$.pipe(
    ofType('PING'),
    switchMap(()=>api.getIndexList()),
    map(x=>console.log(x)),
    mapTo({ type: 'PONG' })
);

export const todolistEpic = action$ => action$.pipe(
    ofType('ADD_TODOLIST_ITEM'),
    filter(x => x.payload.text),
    map(item => { return {...item.payload,type: 'ADD_TODOLIST_ITEM_RE'} }),
);

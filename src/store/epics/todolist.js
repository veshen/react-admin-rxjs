import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';

export const fetchTodolistEpic = (action$,state$,api) => action$.pipe(
    ofType('FETCH_TODOLIST_DATA'),
    switchMap(()=>api.getTodoList()),
    catchError( error => console.log('error=====>',error) ),
    map(item => {
        console.log('item,state$.value.toDoList',api)
        return {type: 'ADD_FETCH_TODOLIST_ITEM',payload:item}
    })
);

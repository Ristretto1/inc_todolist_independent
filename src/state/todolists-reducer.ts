import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

type TodolistsReducerType =
    removeTodolistACType
    | addTodolistACType
    | changeTodolistTitleACType
    | changeTodolistFilterACType
//-----------------------------------//
type removeTodolistACType = ReturnType<typeof removeTodolistAC>
type addTodolistACType = ReturnType<typeof addTodolistAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
//--------------//
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id: id
        }
    } as const
}

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }
    } as const
}
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: id,
            title: title
        }
    } as const
}
export const changeTodolistFilterAC = (id: string, value: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id,
            value
        }
    } as const
}

export const todolistsReducer = (state: Array<TodolistType>, action: TodolistsReducerType): Array<TodolistType> => {
    switch (action.type) {
        case  'REMOVE-TODOLIST':
            return state.filter(tl => tl.id != action.payload.id)

        case 'ADD-TODOLIST':
            const newTodolistId = v1()
            return [...state, {id: newTodolistId, title: action.payload.title, filter: 'all'}]

        case 'CHANGE-TODOLIST-TITLE':
            let todolist = state.find(tl => tl.id === action.payload.id);
            if (todolist) {
                todolist.title = action.payload.title;
                return [...state];
            } else {
                return state
            }

        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tdl => tdl.id === action.payload.id ? {...tdl, filter: action.payload.value} : tdl)

        default:
            return state
    }
}
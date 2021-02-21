const initialState = {
    notes: [],
}

export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
    DELETE_NOTE: 'DELETE_NOTE'
}

export const ActionCreators = {
    setNotes: payLoad => ({ type: ActionTypes.SET_NOTES, payLoad }),
    deleteNote: payLoad => ({ type: ActionTypes.DELETE_NOTE, payLoad }),
}

export default function NotesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payLoad] };
        case ActionTypes.DELETE_NOTE:
            return {
                ...state, notes: [...state.notes.filter(note =>
                    note.id !== action.payLoad.id)]
            }
        default:
            return state;
    }
}
export default function(state, action){
    switch (action.type){
        case 'init':
            return action.payload
        case 'add':
            return [{id: Date.now(), title: action.payload}, ...state]
        case 'delete':
            return state.filter(item => item.id !== action.payload)
        case 'done':
            return state.map(item => item.id === action.payload ? {...item, completed: true} : item)
        default:
            return state
    }
}
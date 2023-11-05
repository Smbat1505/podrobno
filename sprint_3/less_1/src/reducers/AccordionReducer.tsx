export const AccordionReducer = (state: StateType, action: ActionType): StateType => {
    // debugger
    switch (action.type) {
        case "TOGGLE_COLLAPSED": {
            let copyState= {...state, collapsed: !state.collapsed};
            console.log(copyState);
            return copyState
        }
        default:
            throw new Error('Bad action')

    }
}
export type  StateType = {
    collapsed: boolean;
}


type ActionType = collapsedACType;

 type collapsedACType = ReturnType<typeof collapsedAC>
export const collapsedAC = () => ({
    type: 'TOGGLE_COLLAPSED',
}) as const

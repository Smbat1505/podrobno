import {AccordionReducer, StateType} from "./AccordionReducer";

test('reducer should change value to opposite value', () => {
    const state: StateType = {
        collapsed: false,
    }

    const newState = AccordionReducer(state, {type: 'TOGGLE_COLLAPSED'})
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true,
    }

    const newState = AccordionReducer(state, {type: 'TOGGLE_COLLAPSED'})
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be Error', () => {
    const state: StateType = {
        collapsed: true,
    }

    const newState = AccordionReducer(state, {type: 'TOGGLE_COLLAPSED'})
    expect(() => {
        AccordionReducer(state, {type: 'TOGGLE_COLLAPSED'})
    }).toThrowError()
})



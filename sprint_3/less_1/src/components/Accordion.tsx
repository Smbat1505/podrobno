import React, {useReducer} from "react";
import {AccordionReducer, collapsedAC} from "../reducers/AccordionReducer";

type AccordionType = {
    titleValue: string;
    items: ItemType[];
    onClick: (value: any) => void;
}
type AccordionTitleType = {
    title: string;
    onChange: () => void;
}
type AccordionBodyType = {
    items: ItemType[];
    onClick: (value: any) => void;
}
type ItemType = {
    title: string;
    value: any;
}



export const Accordion: React.FC<AccordionType> = ({
                                                       titleValue,
                                                       items,
                                                       onClick
                                                   }) => {


    const [state, dispatch] = useReducer(AccordionReducer, {collapsed: false})
    const onChange = () => {
        dispatch(collapsedAC());
    }
        console.log('rendered Accordion')
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!state.collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

const AccordionTitle: React.FC<AccordionTitleType> = ({title, onChange}) => {
    console.log('rendered AccordionTitle')
    return (
        <h3 style={{cursor: 'pointer'}} onClick={(e) => onChange()}>{title}</h3>
    )
}

const AccordionBody: React.FC<AccordionBodyType> = ({items, onClick}) => {
    console.log('rendered AccordionBody')
    return (
        <ul>
            {items.map((i, index) => <li key={index} onClick={() => {
                onClick(i.value)
            }}>{i.title}</li>)}
        </ul>
    )
}
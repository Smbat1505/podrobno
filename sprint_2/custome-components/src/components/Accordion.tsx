import React from "react";

type AccordionType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
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
                                                       onChange, items,
                                                       collapsed,
                                                       onClick
                                                   }) => {
    console.log('rendered Accordion')
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
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
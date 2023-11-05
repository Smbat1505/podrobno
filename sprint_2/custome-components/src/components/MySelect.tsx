// import React, {FC, MouseEventHandler, useState, KeyboardEvent, useEffect} from "react";
// import styles from './MySelect.module.css'
//
// type ItemType = {
//     title: string;
//     value: any;
// }
//
// type SelectPropsType = {
//     value?: any;
//     onChange: (value: any) => void;
//     items: ItemType[];
// }
//
//
// export const MySelect: FC<SelectPropsType> = ({value, onChange, items}) => {
//     const [active, setActive] = useState<boolean>(false);
//     const [hoveredElementValue, setHoveredElementValue] = useState<boolean>(false);
//
//     const showItems = () => setActive(!active)
//     const selectedItem = items.find(i => i.value === value);
//     const hoveredItem = items.find(i => i.value === hoveredElementValue);
//
//     useEffect(() => {
//         setHoveredElementValue(value);
//     }, [value])
//
//     const onItemClick = (value: any) => {
//         onChange(value);
//         showItems();
//     }
//     const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
//         if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//             for (let item = 0; item < items.length; item++) {
//                 if (items[item].value === hoveredElementValue) {
//                     const nextElement = e.key === 'ArrowDown' ? items[item + 1] : items[item - 1]
//                     if (nextElement) {
//                         onChange(nextElement.value);
//                         return;
//                     }
//                 }
//             }
//             if (!selectedItem) {
//                 onChange(items[0].value)
//             }
//
//         }
//         if (e.key === 'Enter' || e.key === 'Escape') {
//             setActive(false)
//         }
//
//     }
//
//
//     return (
//         <>
//
//             <div
//                 className={styles.select /*+ ' ' + (active ? styles.active : '')*/}
//                 onKeyPress={onKeyDown}
//                 onKeyDown={onKeyDown}
//                 tabIndex={0}
//             >
//                 <span className={styles.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
//                 {
//                     active &&
//                     <div className={styles.items}>
//                         {items.map(item => <div
//                             onMouseEnter={() => {
//                                 setHoveredElementValue(item.value)
//                             }}
//                             className={`${styles.items_item} ${hoveredItem === item ? styles.selected : ''}`}
//                             key={item.value}
//                             onClick={() => {
//                                 onItemClick(item.value)
//                             }}
//                         >{item.title}</div>)}
//                     </div>
//                 }
//
//
//             </div>
//         </>
//     )
// }

import React, { FC, useState, useEffect, KeyboardEvent } from "react";
import styles from "./MySelect.module.css";

// Определение типов
type ItemType = {
    title: string;
    value: any;
};

type SelectPropsType = {
    value?: any;
    onChange: (value: any) => void;
    items: ItemType[];
};

// Создание компонента MySelect
export const MySelect: FC<SelectPropsType> = ({ value, onChange, items }) => {
    // Состояния компонента
    const [active, setActive] = useState(false); // Отвечает за отображение/скрытие выпадающего списка
    const [hoveredElementValue, setHoveredElementValue] = useState<any>(value); // Значение элемента, над которым находится курсор

    // Функция для отображения/скрытия выпадающего списка
    const showItems = () => setActive(!active);

    // Находим выбранный элемент по значению
    const selectedItem = items.find((item) => item.value === value);

    // Находим элемент, над которым находится курсор
    const hoveredItem = items.find((item) => item.value === hoveredElementValue);

    // Эффект для обновления hoveredElementValue при изменении value
    useEffect(() => {
        setHoveredElementValue(value);
    }, [value]);

    // Обработчик клика на элементе списка
    const onItemClick = (itemValue: any) => {
        onChange(itemValue); // Вызываем функцию onChange с новым значением
        showItems(); // Скрываем выпадающий список
    };

    // Обработчик нажатия клавиш клавиатуры
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            // Перемещение между элементами при нажатии клавиш "Вниз" и "Вверх"
            const currentIndex = items.findIndex(
                (item) => item.value === hoveredElementValue
            );
            const nextIndex =
                e.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1;

            if (nextIndex >= 0 && nextIndex < items.length) {
                onChange(items[nextIndex].value); // Изменяем выбранный элемент
            }
        } else if (e.key === "Enter" || e.key === "Escape") {
            setActive(false); // Скрываем выпадающий список при нажатии "Enter" или "Escape"
        }
    };

    return (
        // Отрисовка компонента
        <div
            className={`${styles.select} ${active ? styles.active : ""}`}
            tabIndex={0}
            onKeyPress={onKeyDown}
            onKeyDown={onKeyDown}
        >
            <span className={styles.main} onClick={showItems}>
                {selectedItem && selectedItem.title}
            </span>
            {active && (
                <div className={styles.items}>
                    {items.map((item) => (
                        <div
                            onMouseEnter={() => {
                                setHoveredElementValue(item.value);
                            }}
                            className={`${styles.items_item} ${hoveredItem === item ? styles.selected : ""}`}
                            key={item.value}
                            onClick={() => {
                                onItemClick(item.value);
                            }}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

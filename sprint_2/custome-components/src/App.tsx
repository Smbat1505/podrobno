import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from "./components/input";
import {CheckBox} from "./components/CheckBox";
import {Select} from "./components/Select";
import {Accordion} from "./components/Accordion";
import CustomSelect from "./components/CustomSelect";
import OverSelect from "./components/OverSelect";
import {MySelect} from "./components/MySelect";

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const onChange = () => {
        !collapsed ? setCollapsed(true) : setCollapsed(false)

    }
    return (
        <div className="App">
            <div>
                {/*<Input/>*/}
                {/*<CheckBox/>*/}
                {/*<Select/>*/}
                {/*<Accordion titleValue={'Menu'} collapsed={collapsed} items={[{title: 'jjhj', value: 88}, {title: 'igor', value: 8}, {title: 'Yra', value: 80}, {title: 'Inga', value: 1}]} onChange={()=> setCollapsed(!collapsed)} onClick={(id: number)=> alert(`User with ID ${id} be happy`)}/>*/}

                {/*<CustomSelect/>*/}
                {/*<OverSelect/>*/}
                {/*<MySelect title={''} onChange={} items={}/>*/}

            </div>

        </div>
    );
}

export default App;

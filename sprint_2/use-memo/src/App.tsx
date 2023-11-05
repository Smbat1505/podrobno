import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
 function App() {

        return (
            <div className="App">
                <div>
                    {/*<Input/>*/}
                    {/*<CheckBox/>*/}
                    {/*<Select/>*/}
                    <Accordion titleValue={'Menu'}
                               items={[{title: 'jjhj', value: 88}, {title: 'igor', value: 8}, {
                                   title: 'Yra',
                                   value: 80
                               }, {title: 'Inga', value: 1}]}
                               onClick={(id: number) => alert(`User with ID ${id} be happy`)}></Accordion>

                    {/*<CustomSelect/>*/}
                    {/*<OverSelect/>*/}
                    {/*<MySelect title={''} onChange={} items={}/>*/}

                </div>

            </div>
        );
    }

export default App;

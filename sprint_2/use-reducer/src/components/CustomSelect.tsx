import React, { useState } from 'react';
import Select from 'react-select';

const CustomSelect: React.FC = () => {
    const options = [
        { value: 'option1', label: 'BMW' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default CustomSelect;

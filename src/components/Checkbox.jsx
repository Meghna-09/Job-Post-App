import React from 'react'

const Checkbox = ({ data, name, setData, index }) => {
    const handleChange = (e) => {
        let temp = {...data};
        temp[name] = e.target.checked;
        setData(temp);
    }

    return (
        <input id="default-checkbox" type="checkbox" checked={data?.[name]} value={data?.[name]}
            onChange={handleChange} className="mt-0.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    )
}

export default Checkbox
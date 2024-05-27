import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employeeList, setEmployeeList] = useState([]);

    const addEmployee = (employee) => {
        setEmployeeList((prevList) => [
            ...prevList,
            { ...employee, id: prevList.length + 1 }
        ]);
    };

    return (
        <EmployeeContext.Provider value={{ employeeList, addEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

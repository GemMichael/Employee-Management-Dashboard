import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6umq2m6N-h8COcX7BepErMZNDn0rZKg0",
    authDomain: "employeemanagement-e5114.firebaseapp.com",
    projectId: "employeemanagement-e5114",
    storageBucket: "employeemanagement-e5114.appspot.com",
    messagingSenderId: "21127655812",
    appId: "1:21127655812:web:7eca591bf3217603666dd1",
    measurementId: "G-FLCH03KWRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);
        const unsubscribe = onSnapshot(collection(db, 'employee'), snapshot => {
            const newEmployeeList = [];
            snapshot.forEach(employee => {
                const tempEmployee = employee.data();
                tempEmployee["id"] = employee.id;
                newEmployeeList.push(tempEmployee);
            });
            setEmployeeList(newEmployeeList);
        });
        return () => unsubscribe();
    }, []);

    const addEmployee = async (employee) => {
        try {
            const db = getFirestore(app);
            const docRef = await addDoc(collection(db, 'employee'), employee);
    
            // Check if the employee is already in the list
            const isDuplicate = employeeList.some(emp => emp.id === docRef.id);
    
            if (!isDuplicate) {
                // Only add the employee if it's not a duplicate
                setEmployeeList(prevList => [...prevList, { ...employee, id: docRef.id }]);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <EmployeeContext.Provider value={{ employeeList, addEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

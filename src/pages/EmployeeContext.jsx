import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

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
        const unsubscribe = onSnapshot(collection(firestore, 'employee'), snapshot => {
            const newEmployeeList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEmployeeList(newEmployeeList);
        });
        return () => unsubscribe();
    }, []);

    const addEmployee = async (employee) => {
        try {
            await addDoc(collection(firestore, 'employee'), employee);
        } catch (e) {
            console.error("Error adding document: ", e.message);
        }
    };

    const updateEmployee = async (employeeId, updatedEmployeeData) => {
        try {
            const employeeRef = doc(firestore, 'employee', employeeId);
            await updateDoc(employeeRef, updatedEmployeeData);
        } catch (e) {
            console.error("Error updating document: ", e.message);
        }
    };

    const deleteEmployee = async (employeeId) => {
        try {
            const employeeRef = doc(firestore, 'employee', employeeId);
            await deleteDoc(employeeRef);
        } catch (e) {
            console.error("Error deleting document: ", e.message);
        }
    };

    return (
        <EmployeeContext.Provider value={{ employeeList, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};
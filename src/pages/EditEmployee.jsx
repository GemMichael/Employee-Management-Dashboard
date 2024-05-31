import React, { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdb-react-ui-kit';

function EditEmployee() {
  const { employeeList, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [editedFirstname, setEditedFirstname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedEmployment, setEditedEmployment] = useState("");
  const [editedDepartment, setEditedDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [employmentFilter, setEmploymentFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const getEmploymentColor = (employment) => {
    switch (employment) {
      case 'full-time':
        return 'success';
      case 'part-time':
        return 'warning';
      case 'temporary':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const handleEdit = (employeeId, firstname, email, employment, department) => {
    setEditingEmployeeId(employeeId);
    setEditedFirstname(firstname);
    setEditedEmail(email);
    setEditedEmployment(employment);
    setEditedDepartment(department);
  };

  const handleSave = () => {
    const index = employeeList.findIndex(employee => employee.id === editingEmployeeId);
    if (index !== -1) {
      const updatedEmployeeData = {
        ...employeeList[index],
        firstname: editedFirstname,
        email: editedEmail,
        employment: editedEmployment,
        department: editedDepartment,
      };
      updateEmployee(employeeList[index].id, updatedEmployeeData);
    }
    setEditingEmployeeId(null);
  };

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId);
  };

  const filteredEmployees = employeeList.filter(employee =>
    (employee.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (employmentFilter === "all" || employee.employment === employmentFilter) &&
    (departmentFilter === "all" || employee.department === departmentFilter)
  );

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="d-flex mb-2">
          <select
            className="form-select me-2"
            value={employmentFilter}
            onChange={(e) => setEmploymentFilter(e.target.value)}
          >
            <option value="all">All Employment Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="temporary">Temporary</option>
          </select>
          <select
            className="form-select"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="all">All Departments</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Employment</th>
              <th scope='col'>Department</th>
              <th scope='col'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {filteredEmployees.map(employee => (
              <tr key={employee.id}>
                <td>
                  {editingEmployeeId === employee.id ? (
                    <MDBInput type='text' value={editedFirstname} onChange={(e) => setEditedFirstname(e.target.value)} />
                  ) : (
                    <div className='d-flex align-items-center'>
                      <i className="bi bi-person" style={{ fontSize: '1.5rem', marginRight: '10px' }}></i>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{employee.firstname}</p>
                        <p className='text-muted mb-0'>{employee.lastname}</p>
                      </div>
                    </div>
                  )}
                </td>
                <td>
                  {editingEmployeeId === employee.id ? (
                    <MDBInput type='text' value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                  ) : (
                    <p className='text-muted mb-0'>{employee.email}</p>
                  )}
                </td>
                <td>
                  {editingEmployeeId === employee.id ? (
                    <select className="form-select" value={editedEmployment} onChange={(e) => setEditedEmployment(e.target.value)}>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="temporary">Temporary</option>
                    </select>
                  ) : (
                    <MDBBadge color={getEmploymentColor(employee.employment)} pill>
                      {employee.employment}
                    </MDBBadge>
                  )}
                </td>
                <td>
                  {editingEmployeeId === employee.id ? (
                    <MDBInput type='text' value={editedDepartment} onChange={(e) => setEditedDepartment(e.target.value)} />
                  ) : (
                    <p className='text-muted mb-0'>{employee.department}</p>
                  )}
                </td>
                <td>
                  {editingEmployeeId === employee.id ? (
                    <>
                      <MDBBtn color='success' size='sm' onClick={handleSave}>
                        Save
                      </MDBBtn>
                      <MDBBtn color='danger' size='sm' onClick={() => setEditingEmployeeId(null)}>
                        Cancel
                      </MDBBtn>
                    </>
                  ) : (
                    <>
                      <MDBBtn color='success' className="m-1" rounded size='sm' onClick={() => handleEdit(employee.id, employee.firstname, employee.email, employee.employment, employee.department)}>
                        Edit
                      </MDBBtn>
                      <MDBBtn color='danger' className="m-1" size='sm' onClick={() => handleDelete(employee.id)}>
                        Delete
                      </MDBBtn>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default EditEmployee;

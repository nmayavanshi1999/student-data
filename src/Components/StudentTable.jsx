import React, { useState } from 'react';
import { Link } from 'react-router';



const StudentsTable=() => {
    const [students, setStudents] = useState([

   { id: 1, name: "Alice Johnson", age: 20, grade: "A", email: "alice.johnson@example.com", address: "123 Main St, Cityville" },

   { id: 2, name: "Bob Smith", age: 22, grade: "B", email: "bob.smith@example.com", address: "456 Oak Rd, Townsville" },

   { id: 3, name: "Charlie Brown", age: 21, grade: "A", email: "charlie.brown@example.com", address: "789 Pine Ln, Villagetown" },

   { id: 4, name: "Diana White", age: 23, grade: "C", email: "diana.white@example.com", address: "101 Birch Ave, Suburbia" },

   { id: 5, name: "Evan Black", age: 20, grade: "B", email: "evan.black@example.com", address: "202 Cedar Dr, Countryside" },

   { id: 6, name: "Fiona Green", age: 24, grade: "A", email: "fiona.green@example.com", address: "303 Maple Blvd, Citytown" },

   { id: 7, name: "George Harris", age: 21, grade: "B", email: "george.harris@example.com", address: "404 Elm St, Uptown" },

   { id: 8, name: "Hannah Adams", age: 22, grade: "A", email: "hannah.adams@example.com", address: "505 Cherry Ln, Downtown" },

   { id: 9, name: "Isaac Lee", age: 20, grade: "C", email: "isaac.lee@example.com", address: "606 Pine Ave, Lakeside" },

   { id: 10, name: "Julia Scott", age: 25, grade: "B", email: "julia.scott@example.com", address: "707 Oak Dr, Ridgeview" },

   { id: 11, name: "Kevin Clark", age: 23, grade: "A", email: "kevin.clark@example.com", address: "808 Birch Blvd, Seaside" },

   { id: 12, name: "Lily Turner", age: 21, grade: "B", email: "lily.turner@example.com", address: "909 Maple St, Riverdale" },

   { id: 13, name: "Matthew Walker", age: 22, grade: "A", email: "matthew.walker@example.com", address: "1010 Cedar Ln, Hilltop" },

   { id: 14, name: "Natalie Martinez", age: 20, grade: "C", email: "natalie.martinez@example.com", address: "1111 Pine Dr, Woodlands" },

   { id: 15, name: "Oscar Young", age: 23, grade: "B", email: "oscar.young@example.com", address: "1212 Oak Blvd, Hillview" },

   { id: 16, name: "Paula Robinson", age: 21, grade: "A", email: "paula.robinson@example.com", address: "1313 Elm Ave, Brookwood" },

   { id: 17, name: "Quinn Wright", age: 22, grade: "B", email: "quinn.wright@example.com", address: "1414 Birch Ln, Greenfield" },

   { id: 18, name: "Rachel Harris", age: 24, grade: "A", email: "rachel.harris@example.com", address: "1515 Cedar Dr, Silverlake" },

   { id: 19, name: "Sam Parker", age: 21, grade: "C", email: "sam.parker@example.com", address: "1616 Maple Blvd, Oakwood" },

   { id: 20, name: "Tina Robinson", age: 20, grade: "B", email: "tina.robinson@example.com", address: "1717 Pine St, Newtown" }

    ])
    const [searchTerm, setSearchTerm] = useState(''); 
    const [page, setpage] = useState(1);
    const [sortBy, setSortBy]=useState('');
    
    const deletstudent= (id) =>{
      setStudents(students.filter(student => student.id !== id));
    };
    const sortData=(field) =>{
      setSortBy(field === sortBy ? `-${field}` : field)
      setpage(1);}

    const filteredstudents=students.filter(student =>
      student.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      student.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      student.address.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) 
    );

      const sortedStudents=[...filteredstudents].sort((a ,b) =>{
        let aVal=a[sortBy.replace('-','')];
        let bVal=b[sortBy.replace('-','')];
        if(typeof aVal === 'number') {
          return sortBy.startsWith('-') ? bVal - aVal : aVal - bVal;
  }
  return sortBy.startsWith('-') ?    //  for name, email 
    String(bVal).localeCompare(String(aVal)) : 
    String(aVal).localeCompare(String(bVal));
        }); filteredstudents;
    const pageSize = 5;
    const totalPages = Math.ceil(sortedStudents.length / pageSize);
    const pageStudents=sortedStudents.slice((page-1)*pageSize, page * 5);

    
    return (
     <div className="row mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) =>{ setSearchTerm(e.target.value)
              setpage(1);
              }
            }
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => { setSearchTerm('')
                  setpage(1)
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
        
      
   <div className="container mt-4">
      <h2>Students Data</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
          <tr>
              <th onClick={() => sortData('id')} style={{cursor: 'pointer'}}>ID ↑↓</th>
              <th onClick={() => sortData('name')} style={{cursor: 'pointer'}}>Name↑↓</th>
              <th onClick={() => sortData('age')} style={{cursor: 'pointer'}}>Age ↑↓</th>
              <th onClick={() => sortData('grade')} style={{cursor: 'pointer'}}>Grade ↑↓</th>
              <th onClick={() => sortData('email')} style={{cursor: 'pointer'}}>Email↑↓</th>
              <th onClick={() => sortData('address')} style={{cursor: 'pointer'}}>Address ↑↓</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageStudents.map(student =>(
              <tr key={student.id}>
                <td>{student.id}</td>
                <td><Link to={`/studenttable/${student.name}`}>{student.name}</Link></td>
                <td>{student.age}</td>
                <td>
                  <span className={`badge ${student.grade === 'A' ? 'bg-success' : 
                                        student.grade === 'B' ? 'bg-warning' : 'bg-danger'}`}>
                    {student.grade}
                  </span>
                </td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => deletstudent(student.id)}
                >
                  Delete
                </button>
              </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
  <button 
    className={`btn ${page === 1 ? 'btn-secondary disabled' : 'btn-outline-primary'}`}
    onClick={() => setpage(page-1)} 
    disabled={page === 1}
  >
    Prev
  </button>
  <span className="fw-bold">
    Page {page} of {totalPages}
  </span>
  <button 
    className={`btn ${page >= totalPages ? 'btn-secondary disabled' : 'btn-primary'}`}
    onClick={() => setpage(page+1)} 
    disabled={page >= totalPages}
  >
    Next 
  </button>
</div>

    </div>
</div>
  );
};


export default StudentsTable;

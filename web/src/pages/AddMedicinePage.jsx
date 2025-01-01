import React from 'react';

const AddMedicinePage = () => {
  return (
    <div className="container mt-4">
      <h2>Add Medicine</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="medicine-name" className="form-label">Medicine Name</label>
          <input type="text" className="form-control" id="medicine-name" placeholder="Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input type="text" className="form-control" id="company" placeholder="Company" />
        </div>

        <div className="mb-3">
          <label htmlFor="mrp" className="form-label">MRP</label>
          <input type="number" className="form-control" id="mrp" placeholder="MRP" />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">Medicine Content</label>
          <input type="text" className="form-control" id="content" placeholder="Content" />
        </div>

        <div className="mb-3">
          <label htmlFor="storage" className="form-label">Medicine Storage</label>
          <input type="text" className="form-control" id="storage" placeholder="Storage" />
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Medicine Stock</label>
          <input type="number" className="form-control" id="stock" placeholder="Stock" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddMedicinePage;

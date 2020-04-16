import React from 'react'

export default function index() {
    return (
        <div className="col-md-12 col-xl-8">
        <div className="card mg-b-20">
          <div className="card-header">
            <h4 className="card-header-title">
              Recent Requests
            </h4>
            <div className="card-header-btn">
              <a href="#" data-toggle="collapse" className="btn card-collapse" data-target="#customerDetails" aria-expanded="true"><i className="ion-ios-arrow-down" /></a>
              <a href="#" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh" /></a>
              <a href="#" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand" /></a>
            </div>
          </div>
          <div className="card-body pd-0 collapse show" id="customerDetails">
            <div className="table-responsive">
              <table className="table table-hover mg-0">
                <thead className="tx-dark tx-uppercase tx-10 tx-bold">
                  <tr>
                    <th>Client</th>
                    <th>Request Date</th>
                    <th>Status</th>
                    <th className="tx-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex align-items-center">
                      <div className="avatar mr-2">
                        <img src="https://via.placeholder.com/100x100" className="img-fluid wd-40 ht-40 rounded-circle" alt="" />
                      </div>
                      <div className="d-block">
                        <a href className="my-0 mt-1 tx-13">Stanley C. Owens</a>		
                        <p className="tx-12 mg-0 tx-gray-500">New Jersey, UK</p>
                      </div>
                    </td>
                    <td>
                      <p className="tx-12 mb-0 ">12/04/2020</p>
                    </td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                    <td className="tx-right">
                      <a href className="btn btn-sm btn-label-primary">Contact</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <div className="avatar mr-2">
                        <img src="https://via.placeholder.com/100x100" className="img-fluid wd-40 ht-40 rounded-circle" alt="" />
                      </div>
                      <div className="d-block">
                        <a href className="my-0 mt-1 tx-13">John Doe</a>			
                        <p className="tx-12 mg-0 tx-gray-500">New Jersey, UK</p>
                      </div>
                    </td>
                    <td>
                      <p className="tx-12 mb-0 tx-dark-500">03/04/2020</p>
                    </td>
                    <td>
                      <span className="badge badge-success">Completed</span>
                    </td>
                    <td className="tx-right">
                      <a href className="btn btn-sm btn-label-warning">Contact</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <div className="avatar mr-2">
                        <img src="https://via.placeholder.com/100x100" className="img-fluid wd-40 ht-40 rounded-circle" alt="" />
                      </div>
                      <div className="d-block">
                        <a href="#" className="my-0 mt-1 tx-13">Stanley Owens</a>		
                        <p className="tx-12 mg-0 tx-gray-500">New Jersey, UK</p>
                      </div>
                    </td>
                    <td>
                      <p className="tx-12 mb-0 tx-gray-500">23/03/2020</p>
                    </td>
                    <td>
                      <span className="badge badge-danger">Declined</span>
                    </td>
                    <td className="tx-right">
                      <a href className="btn btn-sm btn-label-success">Contact</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <div className="avatar mr-2">
                        <img src="https://via.placeholder.com/100x100" className="img-fluid wd-40 ht-40 rounded-circle" alt="" />
                      </div>
                      <div className="d-block">
                        <a href className="my-0 mt-1 tx-13">Adam L. Easter</a>		
                        <p className="tx-12 mg-0 tx-gray-500">New Jersey, UK</p>
                      </div>
                    </td>
                    <td>
                      <p className="tx-12 mb-0 tx-gray-500">08/02/2020</p>
                    </td>
                    <td>
                      <span className="badge badge-success">Completed</span>
                    </td>
                    <td className="tx-right">
                      <a href className="btn btn-sm btn-label-danger">Contact</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <div className="avatar mr-2">
                        <img src="https://via.placeholder.com/100x100" className="img-fluid wd-40 ht-40 rounded-circle" alt="" />
                      </div>
                      <div className="d-block">
                        <a href className="my-0 mt-1 tx-13">Jeffery M. Jensen</a>			
                        <p className="tx-12 mg-0 tx-gray-500">New Jersey, UK</p>
                      </div>
                    </td>
                    <td>
                      <p className="tx-12 mb-0 tx-gray-500">25/03/2020</p>
                    </td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                    <td className="tx-right">
                      <a href className="btn btn-sm btn-label-success">Contact</a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    )
}

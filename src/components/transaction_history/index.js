import React from 'react'

export default function index() {
    return (
        <div className="col-xl-4">
        <div className="card mg-b-20">
          <div className="card-header">
            <h4 className="card-header-title">
              Transaction History
            </h4>
            <div className="card-header-btn">
              <a href="#" data-toggle="collapse" className="btn card-collapse" data-target="#transactionHistory" aria-expanded="true"><i className="ion-ios-arrow-down" /></a>
              <a href="#" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh" /></a>
              <a href="#" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand" /></a>
              <a href="#" data-toggle="remove" className="btn card-remove"><i className="ion-ios-trash-outline" /></a>
            </div>
          </div>
          <div className="collapse show" id="transactionHistory">
            <ul className="list-group list-group-flush tx-13">
              <li className="list-group-item d-flex pd-sm-x-20">
                <div className="d-none d-sm-block"><span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded card-icon-success"><i className="icon ion-checkmark" /></span></div>
                <div className="pd-sm-l-10">
                  <p className="tx-dark mg-b-0">Payment from <a href className="tx-dark mg-b-0 tx-semibold">#985632</a></p>
                  <span className="tx-12 mg-b-0 tx-gray-500">customer ID: #857423</span>
                </div>
                <div className="mg-l-auto text-right">
                  <p className="mg-b-0 tx-rubik tx-dark">KES.45000</p>
                  <span className="tx-12 tx-success mg-b-0">Completed</span>
                </div>
              </li>
              <li className="list-group-item d-flex pd-sm-x-20">
                <div className="d-none d-sm-block"><span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded card-icon-success"><i className="icon ion-checkmark" /></span></div>
                <div className="pd-sm-l-10">
                  <p className="tx-dark mg-b-0">Process refund to <a href className="tx-dark mg-b-0 tx-semibold">#458762</a></p>
                  <span className="tx-12 mg-b-0 tx-gray-500">customer ID: #354155</span>
                </div>
                <div className="mg-l-auto text-right">
                  <p className="mg-b-0 tx-rubik tx-dark">KES.1800</p>
                  <span className="tx-12 tx-success mg-b-0">Completed</span>
                </div>
              </li>
              <li className="list-group-item d-flex pd-sm-x-20">
                <div className="d-none d-sm-block"><span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded card-icon-success"><i className="icon ion-checkmark" /></span></div>
                <div className="pd-sm-l-10">
                  <p className="tx-dark mg-b-0">Payment from <a href className="tx-dark mg-b-0 tx-semibold">#365845</a></p>
                  <span className="tx-12 mg-b-0 tx-gray-500">customer ID: #748562</span>
                </div>
                <div className="mg-l-auto text-right">
                  <p className="mg-b-0 tx-rubik tx-dark">KES.12900</p>
                  <span className="tx-12 tx-success mg-b-0">Completed</span>
                </div>
              </li>
              <li className="list-group-item d-flex pd-sm-x-20">
                <div className="d-none d-sm-block"><span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger"><i className="icon ion-close" /></span></div>
                <div className="pd-sm-l-10">
                  <p className="tx-dark mg-b-0">Payment failed from <a href className="tx-dark mg-b-0 tx-semibold">#475821</a></p>
                  <span className="tx-12 mg-b-0 tx-gray-500">customer ID: #457771</span>
                </div>
                <div className="mg-l-auto text-right">
                  <p className="mg-b-0 tx-rubik tx-dark">KES.1500</p>
                  <span className="tx-12 tx-danger mg-b-0">Declined</span>
                </div>
              </li>
              <li className="list-group-item d-flex pd-sm-x-20">
                <div className="d-none d-sm-block"><span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger"><i className="icon ion-close" /></span></div>
                <div className="pd-sm-l-10">
                  <p className="tx-dark mg-b-0">Payment failed from <a href className="tx-dark mg-b-0 tx-semibold">#985324</a></p>
                  <small className="tx-12 mg-b-0 tx-gray-500">customer ID: #548596</small>
                </div>
                <div className="mg-l-auto text-right">
                  <p className="mg-b-0 tx-rubik tx-dark">KES.1900</p>
                  <span className="tx-12 tx-danger mg-b-0">Declined</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

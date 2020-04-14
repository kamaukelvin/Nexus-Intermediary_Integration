import React,{useContext} from 'react'
import {KycContext} from '../../context/KycContext'



export default function Finish(props) {

  const context = useContext(KycContext)
  const {kyc, setKyc}= context
  const {pin, certificate, directors } = kyc

  const handleChange = (evt) => {
    const value = evt.target.value;
    setKyc({
      ...kyc,
      [evt.target.name]: value,
    });
  }
  const handleRowChange=(index)=>e=>{
      const {name, value} =e.target;
      const rows = [...directors];
      rows[index]={...rows[index],[name]:value};
      setKyc({ ...kyc, directors:rows})
    }
    const handleAddRow = (e)=>{
      e.preventDefault()
      const item ={
        director_name:'',
        email:''
      };
      setKyc({ ...kyc, directors:[...directors,item]})
   
    }
    const handleRemoveRow=(index)=>(e)=>{
      e.preventDefault()
      const rows = [...directors]
      rows.splice(index,1)
      setKyc({...kyc, directors:rows})
    }

    const onChangeFileHandler=(e)=>{
      setKyc({...kyc, certificate :e.target.files[0]})
      console.log(e.target.files[0])
    }
    const  back = e => {
        e.preventDefault();
        props.prevStep();
     };
  
 
 
    return (
        <div>
            
        <div className="wizard-navigation">
        <ul>
          <li>
            <div onClick={back}  data-toggle="tab">Intermediary</div>
          </li>
          <li>
            <div data-toggle="tab">Finish up</div>
          </li>
        </ul>
      </div>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12">
                        <h4 className="info-text pt-3">
                            Almost Done!
                        </h4>
                        <div className="col-sm-6 offset-sm-3">
                        <div className="justify-content-center align-items-center">
                            <div className="input-group my-3">
                                <div className="custom-file">
                                    <input 
                                    type="file" 
                                    className="custom-file-input" 
                                    name="certificate"
                                    onChange={onChangeFileHandler}
              />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Upload Certificate</label>
                                </div>
                            </div>
                            <div className="form-group label-floating">
                                <label className="control-label">Pin Number</label>
                                <input 
                                name="pin" 
                                type="text"
                                className="form-control border" 
                                onChange={handleChange}
                                value={pin}
                               
                                />
                            </div>
                        </div>
                    </div>
                            <h5 className="text-center">Company Directors:</h5>
                            <button id="add_row" onClick={handleAddRow} class="btn btn-info text-white btn-sm py-2 float-right mb-3"><i className="fa fa-plus-circle pr-2"/>Add Director</button>
                    </div>
                    <div className="container">
                    <table className="table table-bordered table-hover" id="tab_logic">
                              <thead className="bg-light">

                                <tr >
                                  {/* <th Name="">
                                    #
                                  </th> */}
                                  <th class="">
                                 Name
                                  </th>
                                  <th class="text-center">
                                Email
                                  </th>
                                  <th class="text-center"/>
                                   
                               
                                </tr>
                              </thead>
                              <tbody>
                                {directors.map((director, index)=>{
                                  return(
                                  <tr key={index}>
                                    {/* <td className="text-center"></td> */}
                                    <td className="">
                                    <input
                                        type="text"
                                        name="director_name"
                                        value={directors[index].name}
                                        onChange={handleRowChange(index)}
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="text-center">
                                    <input
                                        type="text"
                                        name="email"
                                        value={directors[index].email}
                                        onChange={handleRowChange(index)}
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="text-center">
                                    <button
                                      className="btn btn-outline-danger btn-xs"
                                      onClick={handleRemoveRow(index)}
                                        >
                                          <i className="fa fa-trash"></i>
                                         
                        </button>
                                    </td>
                                  </tr>
                                )})}
                              
                              </tbody>
                            </table>
              
                </div> 
                </div> 
            </div>
            <div className="wizard-footer"> 
                <div className="pull-right">
                    <input type="button" className="btn btn-next btn-fill btn-danger btn-wd" defaultValue="Submit" onClick={()=>console.log("form submitted")} />
                </div>
                <div className="pull-left">
                    <input type="button" className="btn btn-previous btn-fill btn-default btn-wd" name="previous" defaultValue="Previous" onClick={back} />
                </div>
                <div className="clearfix" />
            </div> 
        </div>
    )
}

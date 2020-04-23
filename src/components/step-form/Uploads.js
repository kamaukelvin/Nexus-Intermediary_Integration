import React, { useContext, useState, useEffect } from "react";
import { KycContext } from "../../context/KycContext";
import "../../assets/css/dashboard.css";
import MdCheckmarkCircleOutline from "react-ionicons/lib/MdCheckmarkCircleOutline";
import IosAttach from "react-ionicons/lib/IosAttach";

import { Upload, message } from "antd";
import * as Icon from "react-feather";
import axios from "axios";

export default function Uploads() {
  const context = useContext(KycContext);
  const { kyc, setKyc, documents, setDocuments, upload } = context;


  // token 

  const token = sessionStorage.getItem('token')
  // upload handlers

  //     const handleKraUpload = ({ fileList }) => {
  //       console.log('KRA', fileList);

  //       setDocuments({ ...documents, kra_pin: fileList });
  //     };
  //     const handleCR_12Upload = ({ fileList }) => {
  //       console.log('CR_12', fileList);
  //       setDocuments({ ...documents, cr_12: fileList });
  //     };
  //     const handleIncorporation_LicenseUpload = ({ fileList }) => {
  //       console.log('Inc_License', fileList);
  //       setDocuments({ ...documents, incorporation_certificate: fileList });
  //     };
  //     const handlePractising_LicenseUpload = ({ fileList }) => {
  //       console.log('Pract_License', fileList);
  //       setDocuments({ ...documents, practicing_license: fileList });
  //     };
  //     const handleLicense_CertificateUpload = ({ fileList }) => {
  //       console.log('License_Cert', fileList);
  //       setDocuments({ ...documents, licence_certificate: fileList });
  //     };
  //     const handleMoUUpload = ({ fileList }) => {
  //       console.log('MoU', fileList);
  //       setDocuments({ ...documents, mou: fileList });
  //     };

  // console.log("kra_pin" +  documents.kra_pin)

  const handleOnKraChange = ({ file, fileList, event }) => {
   console.log(documents.kra_pin)
  };
  const handleCR_12Change = ({ file, fileList, event }) => {
    console.log(documents.cr_12)
  };
  const handleInc_CertChange = ({ file, fileList, event }) => {
    console.log(documents.incorporation_certificate)
   
  };
  const handlePract_LicenseChange = ({ file, fileList, event }) => {
    console.log(documents.licence_certificate)
    
  };
  const handleLic_CertChange = ({ file, fileList, event }) => {
    console.log(documents.licence_certificate)
   
  };
  const handleMoUChange = ({ file, fileList, event }) => {
    console.log(documents.mou)
    
  };

  // Uploading Methods

  // KRA
  const uploadKra = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("Kra", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      setDocuments({ ...documents, kra_pin: file });
      message.success('upload successfully.');
    } catch (err) {
      console.log("Error: ", err);
      message.error('upload failed.');
      setDocuments({ ...documents, kra_pin: [] });

      onError({ err });
    }
  };

  // CR_12
  const uploadCR_12 = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("CR_12", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success('upload successfully.');
      setDocuments({ ...documents, cr_12: file });
    } catch (err) {
      console.log("Error: ", err);
      message.error('upload failed.');
      setDocuments({ ...documents, cr_12: [] });

      onError({ err });
    }
  };

  // Incorporation Certificate
  const uploadInc_Cert = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
          
      },
    };
    fmData.append("Incorporation Cert", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success('upload successfully.');
      setDocuments({ ...documents, incorporation_certificate: file });
    } catch (err) {
      console.log("Error: ", err);
      message.error('upload failed.');
      setDocuments({ ...documents, incorporation_certificate: [] });

      onError({ err });
    }
  };

  // Practicing LIcense
  const uploadPract_License = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("Practicing License", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success('upload successfully.');
      setDocuments({ ...documents, practicing_license: file });
    } catch (err) {
      console.log("Error: ", err);
      message.error('upload failed.');
      setDocuments({ ...documents, practicing_license: [] });

      onError({ err });
    }
  };

  // License Certificate
  const uploadLic_Cert = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("License_Certificate", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success('upload successfully.');
      setDocuments({ ...documents, licence_certificate: file });
    } catch (err) {
      console.log("Error: ", err);
      message.success('upload failed.');
      setDocuments({ ...documents, licence_certificate: [] });

      onError({ err });
    }
  };

  // MoU
  const uploadMou = async (options) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": `${token}`,
      },
    };
    fmData.append("MoU", file);
    try {
      const res = await axios.post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      message.success('upload successfully.');
      setDocuments({ ...documents, mou: file });
    } catch (err) {
      console.log("Error: ", err);
      message.error('upload failed.');
      setDocuments({ ...documents, mou: [] });

      onError({ err });
    }
  };

  return (
    <div>
      <h3 className="upload-title text-center mt-5">Upload Documents</h3>
      <h6 className="text-center">
        Please upload the documents below documents to proceed.
      </h6>
      <p className="font-weight-bold py-3 text-center">
        * Click on <Icon.UploadCloud size={12} /> to upload respective document
      </p>
      <div className="passport offset-md-2">
        <ol>
          <div className="row">
            <div className="col-md-6">
              <h4>
                <li className="py-2 ">
                  Company KRA Pin
                  <span className="pl-2">
                    <Upload
                      onChange={handleOnKraChange}
                      accept=".docx, .pdf,.doc"
                      customRequest={uploadKra}
                      multiple='false'
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  CR 12 Document
                  <span className="pl-2">
                    <Upload
                      onChange={handleCR_12Change}
                       accept=".docx, .pdf,.doc"
                      customRequest={uploadCR_12}
                    >
                      
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  Incorporation Certificate
                  <span className="pl-2">
                    <Upload
                      onChange={handleInc_CertChange}
                       accept=".docx, .pdf,.doc"
                      customRequest={uploadInc_Cert}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
              </h4>
            </div>
            <div className="col-md-6">
              <h4>
                <li className="py-2">
                  Practicing License
                  <span className="pl-2">
                    <Upload
                       onChange={handlePract_LicenseChange}
                        accept=".docx, .pdf,.doc"
                       customRequest={uploadPract_License}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  License Certificate
                  <span className="pl-2">
                    <Upload
                       onChange={handleLic_CertChange}
                        accept=".docx, .pdf,.doc "
                       customRequest={uploadLic_Cert}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
                <li className="py-2">
                  MoU
                  <span className="pl-2">
                    <Upload
                      onChange={handleMoUChange}
                       accept=".docx, .pdf,.doc"
                      customRequest={uploadMou}
                    >
                      <Icon.UploadCloud size={18} />
                    </Upload>
                  </span>
                </li>
              </h4>
            </div>
          </div>
        </ol>
        {/* <MdCheckmarkCircleOutline className="don_icon" color="#5cb85c"  /> */}
      </div>

      <ul className="file_added">
        <li>File Added:</li>
{/* {documents.kra_pin[0]==='undefined' || documents.kra_pin.length<1 ? null  : <li className="ion-paperclip" ><IosAttach color="#5cb85c" />{documents.kra_pin[0].file.name}</li>} */}
        {/* <li className="ion-paperclip" ><IosAttach color="#5cb85c" />{documents.kra_pin[0].File.name}</li> */}
        <li className="ion-paperclip" ><IosAttach color="#5cb85c" /></li>

         
      </ul>
    </div>
  );
}

import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const KycContext = createContext();
const KycContextProvider = (props) => {
  const { addToast } = useToasts();

  // states

  const [kyc, setKyc] = useState({
    intermediary: "",
    directors: [],
    uploading: false,
  });

  const [image, setImage] = useState([]);

  const [documents, setDocuments] = useState({
    kra_pin: [],
    cr_12: [],
    incorporation_certificate: [],
    practicing_license: [],
    mou: [],
    licence_certificate: [],
  });

  const {history}= props

  const upload = (event) => {
    // event.preventDefault();
    console.log("uploading");
    console.log("my directors", kyc.directors);

    // addToast(err.response.data.err_msg, { appearance: 'error',autoDismiss: true, } )

    let formData = new FormData();
    formData.append('Intermediary Type', kyc.intermediary)
    // add one or more of your files in FormData
    kyc.directors.map((director) => {
      return (
        formData.append("Name of Director", director.name),
        formData.append("Director ID Number", director.id_number),
        formData.append("Director Email", director.email),
        formData.append("Director Kra Pin", director.director_pin),
        formData.append("Director Contact", director.contact),
        formData.append("Director Address", director.address)
      );
    });

    // headers
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiI3IiwidXNlcl9pZCI6MjY1LCJyb2xlX2NvZGUiOiJJTl9BRE1fUkxfMDAxIiwidXNlcl90eXBlIjoiSU5URVJNRURJQVJZIiwiaWF0IjoxNTg3MDI2OTc5LCJleHAiOjE1ODk2MTg5NzksImF1ZCI6IkNsaWVudF9JZGVudGl0eSIsImlzcyI6Ik5leHVzIiwic3ViIjoiaW5mb0BuZXh1cy5rZSJ9.BK2Rs61mEoeaplDVU_kK0wokfGPwZ5m2j0S_lGXwiYOjQCawwrwbiCD-B3of3mmw0si8MG5Gcgl34Z8fg3G1QwQe9SO2YREdeyB9caWkS75gYvf9HxOeIKZXJ4KXkvXrwcV2Vic0pyCUDZpXxFqz5C2yuFqPEPvNSr-36trBGyepC8l35I36A45GBD5dseBD0PC_SxCDI751OGQbxvi01oUv8_KtJwPoI7qo0yKpx1V4XFM4BpKREk9gsyjAaqCNpJzSD4bu3-BwqaIYsho2H5Zi32Iv8pmzHJGtRl68GZQM4xeyENKjkA5vNlJGPaiySXOOybrLMsdJn3T2NXyjMQ",
      },
    };
    axios
      .post(
        "http://api.nexus.ke/api/upload/v1/intermediary/kyc",
        formData,
        config,
        {}
      )

      .then((res) => {
        setKyc({ ...kyc, uploading: false });
        history.push('/dasboard')

        console.log("formdata", formData.get("Name of Director"));
        console.log("formdata sent", formData);
        console.log("res", JSON.stringify(res));
      })
      .catch((err) => {
        setKyc({ ...kyc, uploading: false });
        console.log("err", JSON.stringify(err));
        console.log("formdata", formData.get("Name of Director"));
        console.log("formdata sent", formData);
        addToast(err.message, { appearance: 'error',autoDismiss: true, } )
      });
    setKyc({ ...kyc, uploading: true });
  };

  return (
    <KycContext.Provider
      value={{ setKyc, kyc, image, setImage, documents, setDocuments, upload }}
    >
      {props.children}
    </KycContext.Provider>
  );
};

const KycConsumer = KycContext.Consumer;
export { KycContextProvider, KycConsumer, KycContext };

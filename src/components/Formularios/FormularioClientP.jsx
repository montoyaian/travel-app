import React, { useState, useEffect } from "react";
import { sendrequest } from "../../functions";
import DivinputClientP from "../Inputs/Inputs_Client/DivinputClientP";
export const FormularioClientP = (params) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let method = "POST";
  let redirect = "/client/clientpremium";
  useEffect(() => {
    if (params.id !== null) {
      const fetchData = async () => {
        const res = await sendrequest(
          "GET",
          "",
          "/clients/get/clients/" + params.id + "/premium_client"
        );
        if (res) {
          setName(res.name || "");
          setContact(res.contact || "");
          setEmail(res.email || "");
          setPassword(res.password || "");
        }
      };
      fetchData();
    }
  }, [params.id]);

  const save = async (e) => {
    e.preventDefault();
    if (params.id !== null) {
      const res = await sendrequest(
        "PUT",
        { name, contact, email, password },
        "/clients/edit/premiumclient/" + params.id,
        "/client/clientpremium"
      );
      if (res.status === true) {
        // Manejar el éxito, redireccionar o realizar otras acciones necesarias
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card border border-info">
            <div className="card-header bg info border border border-info">
              {params.title}
            </div>
            <div className="card-body">
              <form onSubmit={save}>
                <DivinputClientP
                  type="text"
                  icon="fa-building"
                  value={name}
                  className="form-control"
                  placeholder="Name"
                  handleChange={(e) => setName(e.target.value)}
                />
                <DivinputClientP
                  type="text"
                  icon="fa-building"
                  value={contact}
                  className="form-control"
                  placeholder="Contact"
                  handleChange={(e) => setContact(e.target.value)}
                />
                <DivinputClientP
                  type="email"
                  icon="fa-building"
                  value={email}
                  className="form-control"
                  placeholder="Email"
                  handleChange={(e) => setEmail(e.target.value)}
                />
                <DivinputClientP
                  type="text"
                  icon="fa-building"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  handleChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-grid col-10  mx-auto">
                  <button className="btn btn-dark">
                    <i className="fa-solid fa-save"></i>
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormularioClientP;

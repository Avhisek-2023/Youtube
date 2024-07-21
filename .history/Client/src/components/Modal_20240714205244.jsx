import React, { useState } from "react";
import { useRef } from "react";
import axiosClient from "../axios_client";
import { useNavigate } from "react-router-dom";
import "../Modal.css";

function Modal(props) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form>
          <h1 className="mt-3">Update Task</h1>
          <div className=" in">
            <input type="text" placeholder="Title" />
          </div>
          <div className="in">
            <input type="text" placeholder="Task" />
          </div>
          <div className="in">
            <input type="date" placeholder="Date" />
          </div>
          <div className="flex justify-center mt-3 mb-3">
            <button className="mr-4 btn btn-success">Save</button>
            <button onClick={props.close} className="btn btn-danger">
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;

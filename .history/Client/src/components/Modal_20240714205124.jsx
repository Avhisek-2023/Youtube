import React, { useState } from "react";
import { useRef } from "react";
import axiosClient from "../axios_client";
import { useNavigate } from "react-router-dom";
import "../Modal.css";

function Modal(props) {
  console.log(props.item);
  const navigate = useNavigate();
  const refTitle = useRef();
  const refTask = useRef();
  const refDate = useRef();
  const updateTask = (event) => {
    event.preventDefault();
    const payLoad = {
      task: refTask.current.value,
      title: refTitle.current.value,
      scheduled_date: refDate.current.value,
      status: props.item.status,
    };
    console.log(payLoad);
    let uri = "/tasks/:id";
    uri = uri.replace(":id", props.item.id);
    console.log(uri);
    axiosClient
      .patch(uri, payLoad)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    navigate("/calendar");
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form onSubmit={updateTask}>
          <h1 className="mt-3">Update Task</h1>
          <div className=" in">
            <input
              type="text"
              placeholder="Title"
              ref={refTitle}
              defaultValue={props.item.title}
            />
          </div>
          <div className="in">
            <input
              type="text"
              ref={refTask}
              placeholder="Task"
              defaultValue={props.item.task}
            />
          </div>
          <div className="in">
            <input
              type="date"
              ref={refDate}
              placeholder="Date"
              defaultValue={props.item.date}
            />
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

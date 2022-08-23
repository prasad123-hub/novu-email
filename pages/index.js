import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Send Email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const body = { name, email, title, description };
      const resp = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setLoading(false);
      setMessage("Task Assigned");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headwrapper}>
        <h1 className={styles.heading}>
          Assign Task to Employess with Novu Notification Infrastructure
        </h1>
      </div>

      {/* form */}
      <div className={styles.formwrapper}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Employee Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Employee name here"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Employee Email</label>
            <br />
            <input
              type="text"
              placeholder="Enter Employee email here"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Task Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Task title here"
              className={styles.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Task Description</label>
            <br />
            <textarea
              type="text"
              placeholder="Task description here"
              className={styles.input}
              style={{ height: "100px" }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>
            {message}
          </button>
        </form>
      </div>
    </div>
  );
}

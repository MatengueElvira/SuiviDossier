import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import styles from "./components/SignUp/styles.module.css"

function App() {
  const user = localStorage.getItem("token")

  return (
    <Router>
      <Routes>
      user && <Route path="/e"  element= {< SignUp />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

const SignUp = () => {
  const [data, setData] = useState({
    NomUtilisateur: "",
    email: "",
    password: "",
    matricule:"",
    type: ""
  });
  const [error, setError] = useState("")

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              SignIn
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            <input
              type="text"
              placeholder="NomUtilisateur"
              name='NomUtilisateur'
              onChange={handleChange}
              value={data.NomUtilisateur}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="type"
              name='type'
              onChange={handleChange}
              value={data.type}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="email"
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />


             <input
              type="matricule"
              placeholder="matricule"
              name='matricule'
              onChange={handleChange}
              value={data.matricule}
              required
              className={styles.input}
            />

              <input
              type="type"
              placeholder="type"
              name='type'
              onChange={handleChange}
              value={data.type}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="password"
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default App;
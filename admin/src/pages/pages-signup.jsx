import React, { useState } from "react";
import "../css/App.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    // Add your form submission logic here (e.g., API integration)
  };

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Get started</h1>
                <p className="lead">
                  Start creating the best possible user experience for your customers.
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-lg btn-primary">
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="text-center mb-3">
                Already have account?{" "}
                <a href="pages-sign-in.html" className="link-primary">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;

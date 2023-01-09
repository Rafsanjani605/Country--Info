import React from 'react';

const Login = () => {

    const handlesubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password)
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">

                
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl font-bold">Login now!</h1>
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>

        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Log in</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;
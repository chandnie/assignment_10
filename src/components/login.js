import { Link } from "react-router-dom";

const Login = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">Login to add or view taks.</div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <br />
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <br />
                    <input type="password" class="form-control" />
                  </div>
                  <br />
                  <br />
                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-6 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary">
                        <Link style={{ color: "#ffffff" }} to="/home">
                          LOGIN
                        </Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

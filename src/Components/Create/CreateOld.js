export const Create = () => {
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-body">
            <h2 className="title">Create Landmark</h2>
            <form method="POST">
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <input
                      className="input--style-2 js-datepicker"
                      type="text"
                      placeholder="Birthdate"
                      name="birthday"
                    />
                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <div className="rs-select2 js-select-simple select--no-search">
                      <select name="gender">
                        <option disabled="disabled" selected="selected">
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <div className="select-dropdown"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search">
                  <select name="class">
                    <option disabled="disabled" selected="selected">
                      Class
                    </option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <input
                      className="input--style-2"
                      type="text"
                      placeholder="Registration Code"
                      name="res_code"
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-30">
                <button className="btn btn--radius btn--green" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

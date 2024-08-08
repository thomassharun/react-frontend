import React, { Component } from "react";
import StudentService from "../services/StudentService";

class UpdateMarksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // // step 2
      // id: this.props.match.params.id,
      // s1: "8789",
    };
    this.changeStdidHandler = this.changeStdidHandler.bind(this);
    this.changeCr1Handler = this.changeCr1Handler.bind(this);
    this.changeCr2Handler = this.changeCr2Handler.bind(this);
    this.changeCr3Handler = this.changeCr3Handler.bind(this);
    this.changeCr4Handler = this.changeCr4Handler.bind(this);
    this.changeCr5Handler = this.changeCr5Handler.bind(this);
    this.changeS1Handler = this.changeS1Handler.bind(this);
    this.changeS2Handler = this.changeS2Handler.bind(this);
    this.changeS3Handler = this.changeS3Handler.bind(this);
    this.changeS4Handler = this.changeS4Handler.bind(this);
    this.changeS5Handler = this.changeS5Handler.bind(this);
  }

  saveOrUpdateGrades = (e) => {
    e.preventDefault();
    let totalGrades = {
      stdid: this.state.stdid,
      s1: this.state.s1,
      s2: this.state.s2,
      s3: this.state.s3,
      s4: this.state.s4,
      s5: this.state.s5,
      cr1: this.state.cr1,
      cr2: this.state.cr2,
      cr3: this.state.cr3,
      cr4: this.state.cr4,
      cr5: this.state.cr5,
    };
    console.log("marks and credits => " + JSON.stringify(totalGrades));

    StudentService.updateGrades(totalGrades, this.state.id).then((res) => {
      this.props.history.push("/students");
    });
  };

  changeStdidHandler = (event) => {
    this.setState({ stdid: event.target.value });
  };

  changeS1Handler = (event) => {
    this.setState({ s1: event.target.value });
  };

  changeS2Handler = (event) => {
    this.setState({ s2: event.target.value });
  };

  changeS3Handler = (event) => {
    this.setState({ s3: event.target.value });
  };

  changeS4Handler = (event) => {
    this.setState({ s4: event.target.value });
  };

  changeS5Handler = (event) => {
    this.setState({ s5: event.target.value });
  };

  changeCr1Handler = (event) => {
    this.setState({ cr1: event.target.value });
  };

  changeCr2Handler = (event) => {
    this.setState({ cr2: event.target.value });
  };

  changeCr3Handler = (event) => {
    this.setState({ cr3: event.target.value });
  };

  changeCr4Handler = (event) => {
    this.setState({ cr4: event.target.value });
  };

  changeCr5Handler = (event) => {
    this.setState({ cr5: event.target.value });
  };

  cancel() {
    this.props.history.push("/courses");
  }

  getTitle() {
    return <h3 className="text-center">Update GPA</h3>;
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Student Id: </label>
                    <input
                      placeholder="Student Id"
                      name="stdid"
                      className="form-control"
                      value={this.state.stdid}
                      onChange={this.changeStdidHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Subject #1: </label>
                    <input
                      placeholder="Subject #1"
                      name="s1"
                      className="form-control"
                      value={this.state.s1}
                      onChange={this.changeS1Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Subject #2: </label>
                    <input
                      placeholder="Subject #2"
                      name="s2"
                      className="form-control"
                      value={this.state.s2}
                      onChange={this.changeS2Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Subject #3: </label>
                    <input
                      placeholder="Subject #3"
                      name="s3"
                      className="form-control"
                      value={this.state.s3}
                      onChange={this.changeS3Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Subject #4: </label>
                    <input
                      placeholder="Subject #4"
                      name="s4"
                      className="form-control"
                      value={this.state.s4}
                      onChange={this.changeS4Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Subject #5: </label>
                    <input
                      placeholder="Subject #5"
                      name="s5"
                      className="form-control"
                      value={this.state.s5}
                      onChange={this.changeS5Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Credit #1: </label>
                    <input
                      placeholder="Credit #1"
                      name="cr1"
                      className="form-control"
                      value={this.state.cr1}
                      onChange={this.changeCr1Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Credit #2: </label>
                    <input
                      placeholder="Credit #2"
                      name="cr2"
                      className="form-control"
                      value={this.state.cr2}
                      onChange={this.changeCr2Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Credit #3: </label>
                    <input
                      placeholder="Credit #3"
                      name="cr3"
                      className="form-control"
                      value={this.state.cr3}
                      onChange={this.changeCr3Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Credit #4: </label>
                    <input
                      placeholder="Credit #4"
                      name="cr4"
                      className="form-control"
                      value={this.state.cr4}
                      onChange={this.changeCr4Handler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Credit #5: </label>
                    <input
                      placeholder="Credit #5"
                      name="cr5"
                      className="form-control"
                      value={this.state.cr5}
                      onChange={this.changeCr5Handler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateGrades}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateMarksComponent;

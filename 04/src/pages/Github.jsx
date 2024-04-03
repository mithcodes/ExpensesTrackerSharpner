const Github = () => {
    return (
        <div className="github">
            <div className="heading">
                <div className="row">
                    <div className="col-md-6">
                        <h6>winners never quites, quitters never win</h6>
                    </div>
                    <div className="col-md-6">
                        <h6>your profile is 64% completed. Complete your profile, it will increase your chances of getting a job</h6>
                    </div>
                </div>
                <hr />
            </div>
            <div className="form">
                <h4>Contact detail</h4>
                <div className="input">
                    <div className="row m-2">
                        <div className="col-md-6 ">
                            Full Name:
                            <input type="text" />
                        </div>
                        <div className="col-md-6 ">
                            Profile photo url:
                            <input type="file" />
                        </div>
                    </div>
                    <button className="btn btn-success m-3" type="button">Update Profile</button>  {/* Corrected button type and class */}
                </div>
            </div>
        </div>
    )
}

export default Github;

const Github = () => {
    return (
        <div className="github">
            <div className="head display-flex space around ">
                <div>
                    <h6>winners never quits, quitters never win</h6>
                </div>
                <div>
                    <h6>your profile is 64% completed. A complete profile has a higher chance of getting a job</h6>
                </div>
                <hr />
                <div className="details">
                    <h3>Contact details</h3>
                    <button type="button">Cancel</button>
                    <div>
                        <label>
                            Full Name
                        </label>
                        <input type="text" placeholder="enter your name" />
                    </div>
                    <div>
                        <label>
                            Profile Photo URL
                        </label>
                        <input type="file" placeholder="enter your name" />
                    </div>
                    <button type="button">update</button>
                </div>
            </div>
        </div>
    )
}

export default Github;

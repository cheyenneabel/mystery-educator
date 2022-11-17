import React from "react";
import './Bored.css';

class BoredAPI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activity: {},
            activityType: "",
            activityParticipants: 0,
            randomActivityBtnClicked: false,
            activityByTypeBtnClicked: false,
            activityByParticipantsBtnClicked: false
        }
        this.handleRandomActivity = this.handleRandomActivity.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleParticipantsChange = this.handleParticipantsChange.bind(this);
        this.handleParticipants = this.handleParticipants.bind(this);
    }
// handle a random activity
    handleRandomActivity(e){
        e.preventDefault();
        fetch('https://www.boredapi.com/api/activity')
        .then((response) => response.json())
        .then((json) => this.setState({activity: json}));
        this.setState({randomActivityBtnClicked: true})
        this.setState({activityByParticipantsBtnClicked: false})
        this.setState({activityByTypeBtnClicked: false})

    }
// handle type change
    handleTypeChange(e){
        e.preventDefault();
        this.setState({activityType: e.target.value})
    }
// handle activity by type btn
    handleType(e){
        e.preventDefault();
        fetch(`http://www.boredapi.com/api/activity/?type=${this.state.activityType}`)
        .then((response) => response.json())
        .then((json) => this.setState({activity: json}));
        this.setState({activityByTypeBtnClicked: true})
        this.setState({activityByParticipantsBtnClicked: false})
        this.setState({randomActivityBtnClicked: false})
    }
// handle activity by participants change
    handleParticipantsChange(e){
        e.preventDefault();
        this.setState({activityParticipants: e.target.value})
    }
// handle activity by participants btn
    handleParticipants(e){
        e.preventDefault();
        fetch(`http://www.boredapi.com/api/activity?participants=${this.state.activityParticipants}`)
        .then((response) => response.json())
        .then((json) => this.setState({activity: json}));
        this.setState({activityByParticipantsBtnClicked: true})
        this.setState({activityByTypeBtnClicked: false})
        this.setState({randomActivityBtnClicked: false})
    }

    render(){
        return(
            <div>
                <h2> Bored API</h2>
            {/* ----------------------------------- Random Activity ----------------------------- */}
            <h3>Here is a random Activity</h3>
                <button id="random-activity" onClick={this.handleRandomActivity}> Random Activity </button>
                { // handling a single random activity fetch request
                    (
                        !this.state.randomActivityBtnClicked ? <p> </p> : (
                        <div id='boredActivityArea'>
                            <h1 id='boredActivity'>
                                { this.state.activity.activity }
                            </h1>
                            <p>
                                Type: { this.state.activity.type }
                            </p>
                            <p>
                                Participants: { this.state.activity.participants }
                            </p>
                            <p>
                                Price Index: { this.state.activity.price }
                            </p>
                            <p>
                                Accessibility Index: { this.state.activity.accessibility }
                            </p>
                            <p>
                                {
                                    (
                                        !this.state.activity.link  ? <span> </span> : (
                                        <a href={`${this.state.activity.link}`}>Link</a>
                                        )
                                    )
                                }
                            </p>
                        </div>
                        )
                    )
                }
            {/* ----------------------------------- Random Activity By Type ----------------------------- */}
            <h3> Try to find an activity by type...</h3>
            <form onSubmit={this.handleType}>
                    <select id="select-type" onChange={this.handleTypeChange}>
                        <option value="selection" selected disabled> Select a Type </option>
                        <option value="education">Education</option>
                        <option value="recreational">Recreational</option>
                        <option value="social">Social</option>
                        <option value="diy">DIY</option>
                        <option value="charity">Charity</option>
                        <option value="cooking">Cooking</option>
                        <option value="relaxation">Relaxation</option>
                        <option value="music">Music</option>
                        <option value="busywork">Busywork</option>
                    </select>
                    <input type= "submit" value = "See Activity"></input>
                </form>
            { // handling activity by type fetch request
                (
                    !this.state.activityByTypeBtnClicked ? <p> </p> : (
                        <div id='boredActivityArea'>
                            <h1 id='boredActivity'>
                                { this.state.activity.activity }
                            </h1>
                            <p>
                                Type: { this.state.activity.type }
                            </p>
                            <p>
                                Participants: { this.state.activity.participants }
                            </p>
                            <p>
                                Price Index: { this.state.activity.price }
                            </p>
                            <p>
                                Accessibility Index: { this.state.activity.accessibility }
                            </p>
                            <p>
                                {
                                    (
                                        !this.state.activity.link  ? <span> </span> : (
                                        <a href={`${this.state.activity.link}`}>Link</a>
                                        )
                                    )
                                }
                            </p>
                        </div>
                    )
                )
            }
            {/* ----------------------------------- Random Activity By Participants ----------------------------- */}
            <h3> Try to find an activity by number of participants...</h3>
            <form onSubmit={this.handleParticipants}>
                    <select id="select-participants" onChange={this.handleParticipantsChange}>
                        <option value="selection" selected disabled> Select number of participants... </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="8">8</option>
                    </select>
                    <input type= "submit" value = "See Activity"></input>
                </form>
            { // handling activity by participants fetch request
                (
                    !this.state.activityByParticipantsBtnClicked ? <p> </p> : (
                        <div id='boredActivityArea'>
                            <h1 id='boredActivity'>
                                { this.state.activity.activity }
                            </h1>
                            <p>
                                Type: { this.state.activity.type }
                            </p>
                            <p>
                                Participants: { this.state.activity.participants }
                            </p>
                            <p>
                                Price Index: { this.state.activity.price }
                            </p>
                            <p>
                                Accessibility Index: { this.state.activity.accessibility }
                            </p>
                            <p>
                                {
                                    (
                                        !this.state.activity.link  ? <span> </span> : (
                                        <a href={`${this.state.activity.link}`}>Link</a>
                                        )
                                    )
                                }
                            </p>
                        </div>
                    )
                )
            }
        </div>
        )    
    }
}
export default BoredAPI;

import React from "react"

class CryptidAPI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputName: "",
            inputDescription: "",
            cryptid: {},
            randomCryptidBtnClicked: false,
            allCryptidsBtnClicked: false,
            cryptidByNameBtnClicked: false,
            cryptids: [],
            cryptidId: 0
        }
        this.handleRandomCryptid = this.handleRandomCryptid.bind(this);
        this.handleAllcryptids = this.handleAllcryptids.bind(this);
        this.handleSingleCryptid = this.handleSingleCryptid.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
// Handling a single random cryptid
    handleRandomCryptid(){
        fetch('http://localhost:8080/random/cryptid')
        .then((response) => response.json())
        .then((json) => this.setState({cryptid: json}))
        this.setState({randomCryptidBtnClicked: true})

    }
// Handling all Cryptids
    handleAllcryptids(){
        console.log("hello")
        fetch('http://localhost:8080/cryptid')
        .then((response) => response.json())
        .then((json) => this.setState({cryptids: json}))

        this.setState({allCryptidsBtnClicked: true})
    }
// Handle a cryptid by id
    handleSingleCryptid(e){
        e.preventDefault()
        console.log("submitbtn")
        fetch(`http://localhost:8080/cryptid/${this.state.cryptidId}`)
        .then((response) => response.json())
        .then((json) => this.setState({cryptid: json}));
        this.setState({cryptidByNameBtnClicked: true})
    }
// Handle selection change in drop-down list
    handleChange(e){
        e.preventDefault();
        console.log("Change")
        this.setState({cryptidId: e.target.value})
    }

    render(){
        return(
            <div>
                <h2>Cryptid Corner</h2>
            {/* -----------------------------------Single Random Cryptid ----------------------------- */}
                <h3>Here is a random Cryptid that you might be interested in</h3>
                <button id="random-cryptid" onClick={this.handleRandomCryptid}> Random Cryptid </button>
                { // handling a single random cryptid fetch request
                    (
                        !this.state.randomCryptidBtnClicked ? <p> </p> : (
                        <div>
                            <h3>
                                { this.state.cryptid.name }
                            </h3>
                            <p>
                                { this.state.cryptid.description }
                            </p>
                        </div>
                        )
                    )
                }
            {/* ----------------------------------------All Cryptids------------------------------------ */}
                <h3> Do you want to see all Cryptids? Click the button below!</h3>
                <button id="all-cryptids" onClick={this.handleAllcryptids}> See All</button>
                { // handling all cryptids fetch request
                    (
                        !this.state.allCryptidsBtnClicked ? <p> </p> : (
                        <div>
                            <ul>
                                {
                                    this.state.cryptids.map(cryp => 
                                        <li key = {cryp.id}>
                                            <h3>{cryp.name}</h3> 
                                            <p>{cryp.description}</p>
                                        </li>)
                                }
                            </ul>
                        </div>
                        )
                    )
                }
            {/* -------------------------------------Cryptid by name------------------------------------ */}
                <h3>You can choose a cryptid by name to show</h3>
                <form onSubmit={this.handleSingleCryptid}>
                    <select id="select-cryptid" onChange={this.handleChange}>
                        <option value="selection" selected disabled> Select a Cryptid </option>
                        <option value="1">Griffin</option>
                        <option value="2">Bigfoot</option>
                        <option value="3">Loch Ness Monster</option>
                        <option value="4">Yeti</option>
                        <option value="5">Vampire</option>
                        <option value="6">Thunder Bird</option>
                        <option value="7">Jersey Devil</option>
                    </select>
                    <input type= "submit" value = "See Cryptid"></input>
                </form>
                { // handling cryptid by name fetch request
                    (
                        !this.state.cryptidByNameBtnClicked ? <p> </p> : (
                        <div>
                            <h3>
                                { this.state.cryptid.name }
                            </h3>
                            <p>
                                { this.state.cryptid.description }
                            </p>
                        </div>
                        )
                    )
                }
            </div>
        )
    }
}
export default CryptidAPI;
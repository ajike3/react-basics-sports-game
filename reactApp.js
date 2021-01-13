class Team extends React.Component {
    constructor(props) {
        super(props)
    
        this.state= {
            shots: 0,
            score: 0

        }

    }

    shotHandler = () => {
        let score = this.state.score

        if (Math.random()> 0,5){
            score += 1
        }
        
        this.setState((state, props) =>({
        shots: state.shots + 1
        }))
    }
        render (){
        return(
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src= {this.props.logo} alt={this.props.name}/>
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>
            

            <button> oneClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }       
}

function App(props) {
    return (
        <div className ="App">
                <h1>Welcome to the sports game starter.</h1>
            <div className: "stats">
            <Team 
                name= "Raiders" 
                logo="./assets/images/raiders"  
            />      
            <Team
                name="Lakers"
                logo="./assets/images/lakers"
            />    
        </div>
    )
}
 
  

 
ReactDom.render(
    <App />,
    document.getElementById('root')
)
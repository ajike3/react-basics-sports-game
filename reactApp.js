class Team extends React.Component {
    constructor(props) {
        super(props)
    
        this.state= {
            shots: 0,
            score: 0

        }
        this.shotSound = new Audio('./assets/audio/')
        this.scoreSound = new Audio('./assets/audio/')
    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()
        
        if (Math.random()> 0,5){
            score += 1
           setTimeout(() =>{            
            this.scoreSound.play()
        }, 100)

    }    
        
        this.setState((state, props) =>({
        shots: state.shots + 1,
        score
        }))
    }
        render (){
            let shotPercentageDiv
            
            if (this.state.shots) {}  
            const shotPercentage = this.state.score /this.state.shots * 100   
            shotPercentageDiv = (
                <div>
                    <strong> Shooting %: {shotPercentage}</strong>
                </div>
            )
        }

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
                <div>
                    shotPercentage
                </div>    

                <div>
                    <strong>Shooting %: {shotPercentage}</strong> {this.state.score}</strong>
                </div>    
            <button> oneClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }       
}


function

function App(props) {
    return (
        <div className ="App">
                <h1>Welcome to the sports game starter.</h1>
            <div className="stats">
            <Team 
                name="Raiders" 
                logo="./assets/images/raiders"  
            />     

            <div className="versus">
                <h1>VS</h1>
            </div>

            <Team
                name="Lakers"
                logo="./assets/images/lakers"
            />    
         </div>
        </div>    
    )
}
 
  

 
ReactDom.render(
    <App />,
    document.getElementById('root')
)
class Team extends React.Component {
    render (){
        return(
            <div className="Team">
                Team
            </div>
        )
    }
}

function App(props) {
    return (
        <div className ="App">
                <h1>Welcome to the sports game starter.</h1>
            <Team name= "Raiders" 
            logo="./>    
        </div>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
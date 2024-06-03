import Profile from "./components/Profile";
import avatar1 from "./assets/avatar.png";
// import avatar2 from "./assets/avatar2.png";

export default function App() {
    return (
        <div className="app">
            <Profile 
                avatar={avatar1}
                name="Caike Rodrigues Queiroz"
                bio="Estudante de Análise e Desenvolvimento de Sistemas"
                phone="+55 11 12345-6789"
                email="caikerodriguesqueiroz@gmail.com"
                gitHubUrl="https://github.com/Caike-Queiroz"
                linkedinUrl="https://www.linkedin.com/in/caikequeiroz/"
                twitterUrl="https://twitter.com"
            /> 

            {/* <Profile 
                avatar={avatar2}
                name="Caike Rodrigues Queiroz"
                bio="Estudante de Análise e Desenvolvimento de Sistemas"
                phone="+55 11 12345-6789"
                email="caikerodriguesqueiroz@gmail.com"
                gitHubUrl="https://github.com/Caike-Queiroz"
                linkedinUrl="https://www.linkedin.com/in/caikequeiroz/"
                twitterUrl="https://twitter.com"
            />  */}
        </div>
    )
}
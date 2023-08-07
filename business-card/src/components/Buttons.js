import email from '../images/Mail.png'
import linkedin from '../images/linkedin.png'

export default function Buttons () {
    return(
        <div className="buttons">
            <div className="but1" role="button">
                <img src={email} alt="input email" className="but1e" />
                <h3>Email</h3>
            </div>
            <div className="but2" role="button">
                <img src={linkedin} alt="linkedin link" className="but2e" />     
                <h3>Linkedin</h3>
            </div>
        </div>
    )
}
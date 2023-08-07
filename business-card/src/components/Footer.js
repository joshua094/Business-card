import facebook from '../images/Facebook Icon.png'
import twitter from '../images/Twitter Icon.png'
import github from '../images/GitHub Icon.png'
import instagram from '../images/Instagram Icon.png'

export default function Footer () {
    return(
        <footer className="footer">
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={github} alt="github icon" />
        </footer>
    )
}
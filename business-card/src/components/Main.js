 import Buttons from "./Buttons"

export default function Main() {
    return(
        <main>
            <h1 className="name">Laura Smith</h1>
            <h3 className="desc">Frontend Developer</h3>
            <p className="site">laurasmith.website</p>
            <Buttons />
            <h2 className="about">About</h2>
            <p className="pdesc">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="interests">Interests</h2>
            <p className="pdesc">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}
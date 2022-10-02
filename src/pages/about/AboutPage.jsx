import '../../styles/global.scss';
import '../../styles/about-us.scss';

const AboutPage = () => {
    return (
        <div className='about-container'>
            <h1>About NRDL Tasks<sup>&reg;</sup></h1> <span style={{fontSize: '12px', fontStyle: 'italic'}}>The Redux version</span>

            <div className="about">

                <p>NRDL Tasks Redux version is a practical tool to help you create a simple list for your To-Do's. It's part of my collection of projects to develop skills as React JS Developer. Want to have a talk? Let's contact!</p>

                <div className="rr-ss">
                    <a href="mailto:eduardo.scasares@gmail.com">
                        <i className="bi bi-envelope"></i>
                    </a>

                    <a href="https://github.com/eduscasares" target='_blank' rel='noreferrer noopener'>
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

import ResumePic from './imgs/Resume.png'

const Resume = () => {
    return (
        <div className="ResumePage">
            <div className="ResumeContainer">
                <header className="page-header page-header--compact">
                    <h1 className="page-title">Resume</h1>
                </header>
                <img className="ResumeIMG" src={ResumePic} alt="Meg Diulus resume"/>
            </div>
        </div>
    );
}

export default Resume;

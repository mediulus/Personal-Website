import PicOfMe from './imgs/Me.JPG';
import PicOfFamily from './imgs/Family.png';

const AboutMe = () => {
    return (  
        <div className='AboutMePage'>
            <div className='AboutMePageContent'>
                <header className='hero'>
                    <p className='hero-greeting'>Hi, I'm</p>
                    <h1 className='hero-name'>Meg Diulus</h1>
                </header>

                <div className='Intro section-card'>
                    <div className='image-frame'>
                        <img className="PicOfMe" src={PicOfMe} alt="Meg Diulus"/>
                    </div>
                    <div className='IntroBio'>
                        <h2 className='AboutMeTitle'>Introduction</h2>
                        <p>Hi there! I’m Meg Diulus, a Senior at MIT studying Computer 
                            Science and Engineering (Course 6-3). When I’m not diving into 
                            code or projects, you can usually find me running through Boston 
                            with MIT’s Varsity Cross Country and Track Teams—or treating myself 
                            to an iced latte (probably my second of the day!).</p> 
                            
                        <p>After finishing my undergrad, I’ll be staying at MIT to pursue my 
                            master’s degree, graduating in Spring 2028. From there, I’ll be looking 
                            for software engineering roles. I’m open to a wide range of work, but 
                            I’m especially drawn to backend engineering—particularly distributed 
                            systems design—and I’ve really enjoyed building in AWS. I’m eager to 
                            grow as a leader and refine my technical skills while working on 
                            meaningful, impactful problems.</p>
                    </div>
                </div>

                <div className='Background section-card'>
                    <div className='BackgroundBio'>
                        <h2 className='AboutMeTitle'>Background</h2>
                        <p>I grew up in Akron, Ohio, as the oldest of five siblings, which taught me 
                            responsibility, teamwork, and how to juggle competing priorities—like 
                            chauffeuring my siblings in our family minivan while balancing school and 
                            sports. During high school, I worked at an ice cream shop for three years, 
                            where I learned the value of hard work, customer service, and staying cool 
                            under pressure (literally!).</p>

                        <p>My journey as a runner started somewhat unexpectedly when I joined cross 
                            country to avoid gym class. What began as a casual commitment turned into a 
                            true passion, especially during the pandemic, when I dedicated myself to training 
                            and discovered the joy of pushing my limits.</p>
                            
                        <p>Beyond academics and running, I’m an artist at heart. From teaching myself 
                            to draw with YouTube tutorials as a kid to taking a studio art class at MIT, 
                            I’ve always loved creating and designing. These experiences, combined with my 
                            love for cooking and spending time with my three big dogs, shape who I am today.</p>
                    </div>

                    <div className='image-frame'>
                        <img className="PicOfFamily" src={PicOfFamily} alt="The Diulus family"/>
                    </div>
                </div>

                <div className='Projects section-card'>
                    <h2 className='AboutMeTitle'>Projects</h2>
                    <div className='project-cards'>
                        <div className='project-card'>
                            <a className='ProjectTitle' href='https://github.com/mediulus/running-project.git' target="_blank" rel="noopener noreferrer">Training Data Visualizer</a>
                            <p className='project-tech'>Python · gspread · matplotlib</p>
                            <p>I built a Python project to track and analyze my training 
                                progress by extracting data from my Google Sheet training 
                                log. Using gspread for data retrieval and matplotlib for 
                                visualization, I created dynamic plots to monitor metrics 
                                like distance, heart rate, and performance ratings over time.
                            </p>
                        </div>

                        <div className='project-card'>
                            <a className='ProjectTitle' href='https://github.com/mediulus/Personal-Website.git' target="_blank" rel="noopener noreferrer">Personal Website</a>
                            <p className='project-tech'>React · CSS · GitHub Pages</p>
                            <p>I designed and developed this website from scratch to showcase 
                                my projects, interests, and achievements. Built with a focus 
                                on improving my web development skills, it features a responsive 
                                design and interactive elements. This project allowed me to hone 
                                my skills in HTML, CSS, and JavaScript, while also giving me 
                                a platform to share my journey and connect with others.
                            </p>
                        </div>

                        <div className='project-card'>
                            <a className='ProjectTitle' href='https://github.com/mediulus/Final-Project' target="_blank" rel="noopener noreferrer">DamGood Housing</a>
                            <p className='project-tech'>TypeScript · Deno · Docker</p>
                            <p>A full-stack housing platform I built with my team, the Byteing 
                                Beavers, as our software studio final project. We took the app 
                                from problem framing and functional design through alpha and beta 
                                checkpoints to a deployed product, with user testing along the way. 
                                I contributed across the TypeScript codebase and collaborated closely 
                                on design and feature development. You can try the live app at{' '}
                                <a href='https://damgoodhousing.onrender.com/login' target="_blank" rel="noopener noreferrer">damgoodhousing.onrender.com</a>.
                            </p>
                        </div>

                        <div className='project-card'>
                            <a className='ProjectTitle' href='https://github.com/mediulus/Train-Together' target="_blank" rel="noopener noreferrer">Train Together</a>
                            <p className='project-tech'>TypeScript · Deno · Google Auth</p>
                            <p>A collaborative platform for cross country coaches and athletes 
                                that centralizes training schedules, progress tracking, and 
                                performance data in one hub—something close to my heart as a 
                                varsity runner. Coaches can share updates, monitor athlete 
                                well-being, and deliver personalized training plans, while 
                                athletes gain clarity and structure. I designed it around modular 
                                concepts (user directory, team membership, calendar events, 
                                notifications, and training records) with Google authentication. 
                                You can try the live app at{' '}
                                <a href='https://traintogether.onrender.com/' target="_blank" rel="noopener noreferrer">traintogether.onrender.com</a>, 
                                with code across the{' '}
                                <a href='https://github.com/mediulus/Final-Project-FrontEnd' target="_blank" rel="noopener noreferrer">frontend</a>{' '}
                                and{' '}
                                <a href='https://github.com/mediulus/Train-Together' target="_blank" rel="noopener noreferrer">backend</a>{' '}
                                repositories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

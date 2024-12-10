import PicOfMe from './imgs/Me.JPG';
import PicOfFamily from './imgs/Family.png';

const AboutMe = () => {
    return (  
        <div className='AboutMePage'>
            <div className='AboutMePageContent'>
                <div className='Intro'>
                    <img className="PicOfMe" src={PicOfMe} alt="Picture of me" width='450px'/>
                    <div className='IntroBio'>
                        <h2 className='AboutMeTitle'>Introduction</h2>
                        <p>Hi there! I’m Megan Diulus, a sophomore at MIT studying Computer 
                            Science and Engineering (Course 6-3). When I’m not diving into 
                            code or projects, you can usually find me running through Boston 
                            with MIT’s Varsity Cross Country and Track Teams—or treating myself 
                            to an iced latte (probably my second of the day!).</p> 
                            
                            <p>I’m passionate about pursuing opportunities in software engineering, 
                                product management, or consulting. I’m eager to grow as a leader, 
                                refine my technical skills, and contribute to innovative, 
                                inclusive projects. I’m particularly interested in initiatives 
                                that support individuals with special needs, using technology to 
                                create solutions that improve lives and promote accessibility.</p>
                    </div>
                </div>

                <div className='Background'>
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
                            and discovered the joy of pushing my limits. </p>
                            
                            <p>Beyond academics and running, I’m an artist at heart. From teaching myself 
                                to draw with YouTube tutorials as a kid to taking a studio art class at MIT, 
                                I’ve always loved creating and designing. These experiences, combined with my 
                                love for cooking and spending time with my three big dogs, shape who I am today. </p>
                        </div>

                    <img className="PicOfFamily" src={PicOfFamily} alt="Picture of my family" width='500px'/>
                </div>

                <div className='Projects'>
                    <h2 className='AboutMeTitle'>Projects</h2>
                    <p className='ProjectTitle'>Training Data Visualizer</p>
                    <p>I built a Python project to track and analyze my training 
                        progress by extracting data from my Google Sheet training 
                        log. Using gspread for data retrieval and matplotlib for 
                        visualization, I created dynamic plots to monitor metrics 
                        like distance, heart rate, and performance ratings over time.
                    </p>
                    
                    <p className='ProjectTitle'>Personal Website</p>
                    <p>I designed and developed this website from scratch to showcase 
                        my projects, interests, and achievements. Built with a focus 
                        on improving my web development skills, it features a responsive 
                        design and interactive elements. This project allowed me to hone 
                        my skills in HTML, CSS, and JavaScript, while also giving me 
                        a platform to share my journey and connect with others.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

import ChileHousePic from './imgs/ChileHouseDrawing.jpeg';
import AllyPic from './imgs/AllyDrawing.png';
import BabyMegPic from './imgs/BabyMegDrawing.png';
import BilliePic from './imgs/BillieDrawing.jpeg';
import FeatherPic from './imgs/FeatherPainting.jpeg';
import PlantPic from './imgs/PlantsDrawing.png';
import ScoobyPic from './imgs/ScoobyPainting.png';
import ThomasPic from './imgs/ThomasDrawing.png';
import EveyAndKikiPic from './imgs/EveyAndKikiDrawing.png';
import EveyPic from './imgs/EveyDrawing.png';
import Myka1Pic from './imgs/Myka1Drawing.png';
import Myka2Pic from './imgs/Myka2Drawing.png';
import CityPic from './imgs/CityPainting.png';
import YoungPic from './imgs/YoungDrawing.png';
import KateDog from './imgs/KateDog.jpeg'

const CurrentInterest = () => {
  return (
    <div className="CurrentInterestPage">
      <div className="CIPData">
      <h2 className="ArtTitle">My Art</h2>
        <div className="CIPBio">
          <div className="ArtSection">
            <p className='ArtBio'>
              Hi, welcome to my art portfolio! I started my artistic journey with graphite pencils, but as I got older, I found myself drawn more to colored pencils for their vibrant, layered results. Recently, I've been exploring painting—both watercolor and acrylic—and I love how they offer new ways to play with color and texture.
                <br/>
                <br/>
              While portraits have always been my go-to subject, I’ve been branching out and trying to incorporate different styles and techniques. Lately, I've been focusing on creating unique textures in my work, experimenting with different mediums to give my pieces more depth and character. Art is a way for me to express myself and constantly challenge my creativity, and I’m excited to continue exploring new possibilities.
            </p>
          </div>
        </div>

        <div>
          <h2>Projects</h2>
          <div className = 'ArtAndDescription'>
            <img className = 'Art' src = {KateDog} alt = 'Picture of a french Bull Dog' width = '450px'/>
            <p className = 'description'>
              My first commisioned piece for a girl on my cross country team! Her super cute french bull dog!! 
              I was pretty nervous going into this piece because I tend to avoid drawing fur--as I find it pretty intimidating. 
              After lots of youtube videos and hoping for the best, I think drawing fur is rly fun (Especially because you don't
              actually need to make sure hairs are in the right direction--you can just draw the fur in whatever way you want. As long as it is mostly
              correct)
            </p>
          </div>
          <div className="ArtAndDescription">
            <img className="Art" src={ChileHousePic} alt="La Sebastiana in Chile" width="450px" />
            <p className='description'>
              This is my final project from my MIT art class: a graphite drawing of "La Sebastiana," the iconic house of poet Pablo Neruda in Valparaiso, Chile. I took this photo during a weekend trip while I was working in Santiago, Chile, in the summer of 2024. What I loved most about this project was the challenge of capturing the textures of the plants—especially the tree in front of the house. Before this, I often shied away from drawing intricate textures that seemed too difficult. However, through research and experimentation, I was able to break through those challenges and create something I’m really proud of.
            </p>
          </div>

          <div className="ArtAndDescription">
            <img className="Art" src={ThomasPic} alt="Thomas Drawing" width="450px" />
            <p className='description'>
              This is a drawing I created as a gift! While it looks like a black-and-white sketch, I actually used colored pencils to draw it. One thing that always bothers me about graphite is how easily it smears and how it can fade over time. So for this project, I decided to use wax-based colored pencils to ensure each stroke stayed crisp and vibrant, with the added benefit of lasting longer. It was a fun experiment, and I loved the results!
            </p>
          </div>

          <div className="ArtAndDescription">
            <img className="Art" src={BabyMegPic} alt="Baby Meg Drawing" width="450px" />
            <p className='description'>
              This might just be my favorite colored pencil drawing I've ever done! It’s a picture of me as a baby in my dad's lap, with him squeezing my cheeks. Choosing the right colors for the face was definitely challenging, but it was also so rewarding. I also really enjoyed drawing the onesie—usually, I’d skip the strawberry designs for the sake of simplicity, but they turned out to be a fun detail that brought the whole piece to life!
            </p>
          </div>

          <div className="ArtAndDescription">
            <img className="Art" src={AllyPic} alt="Ally Drawing" width="450px" />
            <p className='description'>
              This drawing holds a special place in my heart. It’s of my dear family friend, Allison Connor, who is one of the kindest and most intelligent people I know. During my tween years, Alli was someone I always turned to for advice, and her guidance meant so much to me. She’s also extra special because she’s a fellow MIT graduate, which makes this piece even more meaningful!
            </p>
          </div>

          <div className="ArtAndDescription">
            <img className="Art" src={EveyAndKikiPic} alt="Evey and Kiki Drawing" width="450px" />
            <p className='description'>
              This drawing features my cousin as a little kid, along with my aunt. I really enjoyed capturing the innocence of childhood and the love on their faces. It was also my first time experimenting with white charcoal, rather than just drawing lightly for highlights. The rest of the piece is done in graphite, which creates a nice contrast with the softer white details.
            </p>
          </div>

          <div className="ArtAndDescription">
            <img className="Art" src={ScoobyPic} alt="Scooby Painting" width="450px" />
            <p className='description'>
              I painted this piece for my dad’s birthday one year. It’s the cover of a comic book featuring two of his favorite characters: Scooby-Doo and Batman. I used acrylic paint for this piece, and it was such a fun way to combine his love for both characters into one artwork.
            </p>
          </div>

          <div className="ArtAndDescription">
            <img className="Art" src={YoungPic} alt="Young Drawing" width="450px" />
            <p className='description'>
              This was the first drawing that I really knew I loved art! I spent hours in my basement trying to get things just right. Ever since this point, whenever I was bored, you could always find me learning new techniques or finding new tutorials to follow :) 
            </p>
          </div>
        </div>

        <h2 className='sketches'>Sketches</h2>
        <div className="SketchesGallery">
            <div className="SketchDescription">
                <img className="Billie" src={BilliePic} alt="Billie Sketch" width="100%" />
                <p>This is a sketch I did of Billie Eilish.</p>
            </div>

            <div className="SketchDescription">
                <img className="City" src={CityPic} alt="City Painting" width="100%" />
                <p>This is a painting of a cityscape.</p>
            </div>

            <div className="SketchDescription">
                <img className="Evey" src={EveyPic} alt="Evey Sketch" width="100%" />
                <p>A pencil sketch of my cousin Evey.</p>
            </div>

            <div className="SketchDescription">
                <img className="Myka1" src={Myka1Pic} alt="Myka 1 Drawing" width="100%" />
                <p>My first sketch of Myka.</p>
            </div>

            <div className="SketchDescription">
                <img className="Myka2" src={Myka2Pic} alt="Myka 2 Drawing" width="100%" />
                <p>Second sketch of Myka.</p>
            </div>

            <div className="SketchDescription">
                <img className="Feather" src={FeatherPic} alt="Feather Painting" width="100%" />
                <p>Watercolor Feather</p>
            </div>

            <div className="SketchDescription">
                <img className="Plant" src={PlantPic} alt="Plant Pic" width="100%" />
                <p>Watercolor Plant</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentInterest;

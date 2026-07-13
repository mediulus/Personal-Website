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

const artPieces = [
  {
    src: KateDog,
    alt: 'French bulldog portrait',
    description: 'My first commisioned piece for a girl on my cross country team! Her super cute french bull dog!! I was pretty nervous going into this piece because I tend to avoid drawing fur--as I find it pretty intimidating. After lots of youtube videos and hoping for the best, I think drawing fur is rly fun (Especially because you don\'t actually need to make sure hairs are in the right direction--you can just draw the fur in whatever way you want. As long as it is mostly correct)',
  },
  {
    src: ChileHousePic,
    alt: 'La Sebastiana in Chile',
    description: 'This is my final project from my MIT art class: a graphite drawing of "La Sebastiana," the iconic house of poet Pablo Neruda in Valparaiso, Chile. I took this photo during a weekend trip while I was working in Santiago, Chile, in the summer of 2024. What I loved most about this project was the challenge of capturing the textures of the plants—especially the tree in front of the house. Before this, I often shied away from drawing intricate textures that seemed too difficult. However, through research and experimentation, I was able to break through those challenges and create something I\'m really proud of.',
  },
  {
    src: ThomasPic,
    alt: 'Thomas drawing',
    description: 'This is a drawing I created as a gift! While it looks like a black-and-white sketch, I actually used colored pencils to draw it. One thing that always bothers me about graphite is how easily it smears and how it can fade over time. So for this project, I decided to use wax-based colored pencils to ensure each stroke stayed crisp and vibrant, with the added benefit of lasting longer. It was a fun experiment, and I loved the results!',
  },
  {
    src: BabyMegPic,
    alt: 'Baby Meg drawing',
    description: 'This might just be my favorite colored pencil drawing I\'ve ever done! It\'s a picture of me as a baby in my dad\'s lap, with him squeezing my cheeks. Choosing the right colors for the face was definitely challenging, but it was also so rewarding. I also really enjoyed drawing the onesie—usually, I\'d skip the strawberry designs for the sake of simplicity, but they turned out to be a fun detail that brought the whole piece to life!',
  },
  {
    src: AllyPic,
    alt: 'Ally drawing',
    description: 'This drawing holds a special place in my heart. It\'s of my dear family friend, Allison Connor, who is one of the kindest and most intelligent people I know. During my tween years, Alli was someone I always turned to for advice, and her guidance meant so much to me. She\'s also extra special because she\'s a fellow MIT graduate, which makes this piece even more meaningful!',
  },
  {
    src: EveyAndKikiPic,
    alt: 'Evey and Kiki drawing',
    description: 'This drawing features my cousin as a little kid, along with my aunt. I really enjoyed capturing the innocence of childhood and the love on their faces. It was also my first time experimenting with white charcoal, rather than just drawing lightly for highlights. The rest of the piece is done in graphite, which creates a nice contrast with the softer white details.',
  },
  {
    src: ScoobyPic,
    alt: 'Scooby painting',
    description: 'I painted this piece for my dad\'s birthday one year. It\'s the cover of a comic book featuring two of his favorite characters: Scooby-Doo and Batman. I used acrylic paint for this piece, and it was such a fun way to combine his love for both characters into one artwork.',
  },
  {
    src: YoungPic,
    alt: 'Young drawing',
    description: 'This was the first drawing that I really knew I loved art! I spent hours in my basement trying to get things just right. Ever since this point, whenever I was bored, you could always find me learning new techniques or finding new tutorials to follow :)',
  },
];

const sketches = [
  { src: BilliePic, alt: 'Billie Eilish sketch', caption: 'A sketch of Billie Eilish.' },
  { src: CityPic, alt: 'Cityscape painting', caption: 'A painting of a cityscape.' },
  { src: EveyPic, alt: 'Evey sketch', caption: 'A pencil sketch of my cousin Evey.' },
  { src: Myka1Pic, alt: 'Myka sketch 1', caption: 'My first sketch of Myka.' },
  { src: Myka2Pic, alt: 'Myka sketch 2', caption: 'Second sketch of Myka.' },
  { src: FeatherPic, alt: 'Watercolor feather', caption: 'Watercolor feather.' },
  { src: PlantPic, alt: 'Watercolor plant', caption: 'Watercolor plant.' },
];

const CurrentInterest = () => {
  return (
    <div className="CurrentInterestPage">
      <div className="CIPData">
        <header className="page-header">
          <h1 className="page-title">My Artwork</h1>
        </header>

        <div className="section-card">
          <p className='ArtBio'>
            Hi, welcome to my art portfolio! I started my artistic journey with graphite pencils, but as I got older, I found myself drawn more to colored pencils for their vibrant, layered results. Recently, I've been exploring painting—both watercolor and acrylic—and I love how they offer new ways to play with color and texture.
            <br/><br/>
            While portraits have always been my go-to subject, I’ve been branching out and trying to incorporate different styles and techniques. Lately, I've been focusing on creating unique textures in my work, experimenting with different mediums to give my pieces more depth and character. Art is a way for me to express myself and constantly challenge my creativity, and I’m excited to continue exploring new possibilities.
          </p>
        </div>

        <h2 className="section-label">Featured Pieces</h2>

        {artPieces.map((piece) => (
          <div key={piece.alt} className="ArtAndDescription section-card">
            <div className="image-frame gallery-frame">
              <img className="Art" src={piece.src} alt={piece.alt} />
            </div>
            <p className="description">{piece.description}</p>
          </div>
        ))}

        <div className="section-card">
          <h2 className="sketches">Other Work</h2>
          <div className="SketchesGallery">
            {sketches.map((sketch) => (
              <div key={sketch.alt} className="SketchDescription">
                <div className="image-frame sketch-frame">
                  <img src={sketch.src} alt={sketch.alt} />
                </div>
                <p>{sketch.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentInterest;

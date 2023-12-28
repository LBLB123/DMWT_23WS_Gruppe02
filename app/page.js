import "./timeline.css"
import styles from "./Home.css"
import Header from './Header';
import Footer from './Footer';
import Link from "next/link";


export default function Home() {
  return (
      <div>
        <Header />

        <main>
            <div className="textContainer">
                <h1 className="textContainer_h1">Dein Beitrag
                für eine
                bessere Welt

            </h1>

                <p className="textContainer_p">
                    Willkommen bei Hardware Recycler. Wir bieten informative Tipps und Lösungen wie Sie ihre Hardware richtig recyceln.
                    Informieren Sie sich über unsere Dienstleistungen und werden Sie schon heute ein Teil einer nachhaltigen Zukunft.

                </p>
            </div>


            <h2>Das Elektroschrott Problem</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula massa, rhoncus a odio iaculis,
                luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ligula massa, rhoncus a odio iaculis, luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis.
            </p>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <h2>Abholung</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="container right">
                    <div class="content">
                        <h2>Transport</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <h2>Demontage</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>Recycling</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
            <h2>Was wir anbieten</h2>
            <p>
                Unsere Vision ist es, eine Welt zu schaffen, in der Technologie und Umweltschutz Hand in Hand gehen. Wir setzen auf Innovation und Verantwortung, um eine nachhaltige Zukunft zu gestalten.
            </p>



          <Link href="/comments">Comments</Link>

        </main>
        <Footer />
      </div>
  )
}

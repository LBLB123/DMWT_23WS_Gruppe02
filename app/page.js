import "./timeline.css"
import styles from "./Home.css"
import Header from './Header';
import Footer from './Footer';
import Link from "next/link";
import Image from "next/image";
import hardware from "./img/pexels-valentine-tanasovich-2588757.jpg"
import ewaste from "./img/e-waste-5963979_1280.jpg"


export default function Home() {
  return (
      <div>
        <Header />

        <main>
            <div className={"container"}>
                <div className="heroTextContainer">
                    <h1>Dein Beitrag
                        für eine
                        bessere Welt

                    </h1>

                    <p>
                        Willkommen bei Hardware Recycler. Wir bieten informative Tipps und Lösungen wie Sie ihre Hardware richtig recyceln.
                        Informieren Sie sich über unsere Dienstleistungen und werden Sie schon heute ein Teil einer nachhaltigen Zukunft.

                    </p>

                </div>

                <div className="heroImage-container">
                    <Image
                        src={hardware}
                        alt="hardware"
                    />
                </div>
            </div>
            <div className="callToActionButton_position">
                <button className="callToActionButton">
                    Erfahre Mehr!
                </button>
            </div>

            <div className="container">
                <div className="eWasteImageContainer">
                    <Image
                        src={ewaste}

                        alt="eWaste"
                    />
                </div>

                <div className="eWasteTextContainer">
                    <h2>Das Elektroschrott Problem</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula massa, rhoncus a odio iaculis,
                        luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus ligula massa, rhoncus a odio iaculis, luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis.
                    </p>
                    <button className="eWasteButton">
                        Klick mich
                    </button>
                </div>


            </div>


            <div className="timeline">
                <div className="T_container left">
                    <div className="content">
                        <h2>Abholung</h2>
                        <div className="T-Animation_Placeholder">Animation</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula massa, rhoncus a odio iaculis,
                            luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus ligula massa, rhoncus a odio iaculis, luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
                <div className="T_container right">
                    <div class="content">
                        <h2>Transport</h2>
                        <div className="T-Animation_Placeholder">Animation</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula massa, rhoncus a odio iaculis,
                            luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus ligula massa, rhoncus a odio iaculis, luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="T_container left">
                    <div className="content">
                        <h2>Demontage</h2>
                        <div className="T-Animation_Placeholder">Animation</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula massa, rhoncus a odio iaculis,
                            luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus ligula massa, rhoncus a odio iaculis, luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
                <div className="T_container right">
                    <div className="content">
                        <h2>Recycling</h2>
                        <div className="T-Animation_Placeholder">Animation</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula massa, rhoncus a odio iaculis,
                            luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus ligula massa, rhoncus a odio iaculis, luctus sagittis lectus. Curabitur fermentum leo nec rhoncus posuere. Nunc venenatis, nunc eu porttitor mollis.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="DL-textContainer">
            <h1>Was wir anbieten</h1>

                    <h2> Forum</h2>
                    <p>
                        Werden Sie Teil unserer Community im Forum. Tauschen Sie sich aus und gestalten Sie aktiv die grüne Revolution mit.
                        Machen Sie mit und recyceln Sie nicht nur Hardware, sondern auch Ihr technisches Know-how!
                    </p>

                    <h2> Kontakt</h2>
                    <p>
                        Bei Fragen oder Anregungen steht unsere Berater für Sie bereit.
                        Klicken Sie jetzt, um mit uns in Verbindung zu treten und gemeinsam an einer nachhaltigen IT-Zukunft zu arbeiten!
                    </p>
                </div>

            </div>



          <Link href="/comments">Comments</Link>

        </main>
        <Footer />
      </div>
  )
}

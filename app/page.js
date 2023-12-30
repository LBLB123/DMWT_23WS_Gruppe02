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
                    <button className={styles.meinButton}>
                        Klick mich
                    </button>
                </div>


            </div>

              <div class="header">
                  <h2>Scroll Indicator</h2>
                  <div class="progress-container">
                      <div class="progress-bar" id="myBar"></div>
                  </div>
              </div>

              <div>content...</div>

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
            <h2>Was wir anbieten</h2>
            <p>
                Unsere Vision ist es, eine Welt zu schaffen, in der Technologie und Umweltschutz
                Hand in Hand gehen. Wir setzen auf Innovation und Verantwortung, um eine nachhaltige Zukunft zu gestalten.
            </p>



              <Link href="/comments">Comments</Link>

        </main>
        <Footer />
      </div>
  )
}

window.onscroll = function () { scroll() };

function scroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
}

import Header from './Header';
import Footer from './Footer';
import Link from "next/link";


export default function Home() {
  return (
      <div>
        <Header />

        <main>
            <h1>Die Größte Recycle IT Group</h1>

            <p>
                Green IT ist unsere Leidenschaft und Verpflichtung. Wir setzen uns für Nachhaltigkeit in der Informationstechnologie ein und tragen zur Gestaltung einer grüneren Zukunft bei.
            </p>

            <h2>Nachhaltige Praktiken</h2>
            <p>
                Wir verwenden erneuerbare Energiequellen, recyceln alte Hardware und reduzieren Energieverbrauch und Abfall, um die Umweltauswirkungen zu minimieren.
            </p>

            <h2>Unsere Vision</h2>
            <p>
                Unsere Vision ist es, eine Welt zu schaffen, in der Technologie und Umweltschutz Hand in Hand gehen. Wir setzen auf Innovation und Verantwortung, um eine nachhaltige Zukunft zu gestalten.
            </p>

            <h2>Unsere Dienstleistungen</h2>
            <p>
                Wir bieten umweltfreundliches IT-Recycling, Wiederaufbereitung und Beratungsdienste. Erfahren Sie mehr über unsere Dienstleistungen und wie Sie Teil der Bewegung werden können.
            </p>

          <Link href="/comments">Comments</Link>
        </main>
        <Footer />
      </div>
  )
}

"use client";
import "./timeline.css"
import { useState,useEffect } from "react";
import styles from "./Home.css"
import Header from './Header';
import Footer from './Footer';
import Link from "next/link";
import Image from "next/image";
import {Link as ScrollLink, animateScroll as scroll, scroller} from 'react-scroll';
import hardware from "./img/pexels-valentine-tanasovich-2588757.jpg"
import ewaste from "./img/e-waste-5963979_1280.jpg"
import quizBild1 from "./img/Quiz_Bilder/recycling-symbol-icon-solid-dark-green.png"
import quizBild2 from "./img/Quiz_Bilder/Quiz_bild2_Glühbirne_Plastik_Kühl_Papier.JPG"
import quizBild3 from "./img/Quiz_Bilder/john-cameron-7zocFMzvbpc-unsplash.jpg"
import quizBild4 from "./img/Quiz_Bilder/vishnu-mohanan-yQpAaMsQzYE-unsplash.jpg"
import quizBild5 from "./img/Quiz_Bilder/thijs-stoop-A_AQxGz9z5I-unsplash.jpg"
import quizBild6 from "./img/Quiz_Bilder/Organisationen.JPG"
import quizBild7 from "./img/Quiz_Bilder/elly-filho-uKB4O22KMMk-unsplash.jpg"
import quizBild8 from "./img/Quiz_Bilder/pakata-goh-RDolnHtjVCY-unsplash.jpg"
import quizBild9 from "./img/Quiz_Bilder/gary-chan-YzSZN3qvHeo-unsplash.jpg"
import quizBild10 from "./img/Quiz_Bilder/Flaggen.JPG"
import AbholungGIF from "./GIFS/Abholung.gif"
import TransportGIF from "./GIFS/Transport.gif"
import DemontageGIF from "./GIFS/Demontage.gif"
import RecyclingGIF from "./GIFS/Recycling.gif"



export default function Home() {
    const [quizStep, setQuizStep] = useState(1);
    const [answers, setAnswers] = useState(Array(10).fill(null));
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedOption(answer);
    };

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            const updatedAnswers = [...answers];
            updatedAnswers[quizStep - 1] = selectedOption;
            setAnswers(updatedAnswers);
            setQuizStep(quizStep + 1);
            setSelectedOption(null);
        }
    };

    const calculateScore = () => {
        const correctAnswers = ["b", "c", "d", "d", "d", "d", "b", "a", "b", "b"];
        const score = answers.filter((answer, index) => answer === correctAnswers[index]).length;
        return score;
    };

    const resetQuiz = () => {
        setQuizStep(1);
        setAnswers(Array(10).fill(null));
        setSelectedOption(null);
    };

    const renderQuestion = () => {
        const questions = [
            "Was ist Elektroschrott?",
            "Welche der folgenden Gegenstände gehört zu Elektroschrott?",
            "Warum ist die ordnungsgemäße Entsorgung von Elektroschrott wichtig?",
            "Welches Metall wird häufig in elektronischen Geräten recycelt?",
            "Welche gesundheitlichen Risiken können durch unsachgemäße Entsorgung von Elektroschrott entstehen?",
            "Welche Organisation setzt sich weltweit für die umweltfreundliche Entsorgung von Elektroschrott ein?",
            "Was ist das Hauptziel des Elektroschrott-Recyclings?",
            "Wie kann man Elektroschrott vermeiden?",
            "Was kann man tun, um Elektroschrott umweltfreundlich zu entsorgen?",
            "Welches Land ist einer der größten Produzenten von Elektroschrott weltweit?"
        ];

        const options = [
            ["a) Abfall aus der Lebensmittelproduktion", "b) Abfall aus der Elektro- und Elektronikindustrie", "c) Biologisch abbaubarer Müll", "d) Industrielle Abfälle"],
            ["a) Plastikflasche", "b) Glühbirne", "c) Kühlschrank", "d) Papier"],
            ["a) Weil Elektroschrott wertvolle Metalle enthält, die recycelt werden können", "b) Weil Elektroschrott gefährliche Substanzen enthalten kann", "c) Weil Elektroschrott Platz auf Deponien verschwendet", "d) Alle oben genannten"],
            ["a) Gold", "b) Silber", "c) Aluminium", "d) Alle oben genannten"],
            ["a) Bodenverschmutzung", "b) Luftverschmutzung", "c) Wasserverschmutzung", "d) Alle oben genannten"],
            ["a) Greenpeace", "b) UNICEF", "c) WHO", "d) Basel Action Network"],
            ["a) Die Vermeidung von Elektroschrott", "b) Die Rückgewinnung wertvoller Rohstoffe", "c) Die Reduzierung von Energieverbrauch", "d) Die Verbrennung von Elektroschrott"],
            ["a) Geräte länger nutzen und reparieren lassen", "b) Elektronische Geräte in den Hausmüll werfen", "c) Elektronische Geräte regelmäßig ersetzen, um auf dem neuesten Stand zu bleiben", "d) Elektronische Geräte im Garten vergraben"],
            ["a) Elektroschrott in den normalen Müll werfen", "b) Elektroschrott zu spezialisierten Recyclingzentren bringen", "c) Elektroschrott ins Meer werfen", "d) Elektroschrott verbrennen"],
            ["a) Deutschland", "b) China", "c) Brasilien", "d) Usa"]
        ];

        const images = [
            quizBild1,
            quizBild2,
            quizBild3,
            quizBild4,
            quizBild5,
            quizBild6,
            quizBild7,
            quizBild8,
            quizBild9,
            quizBild10
        ];


        return (
            <div>
                <h3>{questions[quizStep - 1]}</h3>
                <Image src={images[quizStep - 1]} alt={`Image for question ${quizStep}`} width={400} height={300} />
                <div>
                    {options[quizStep - 1].map((option, index) => (
                        <div key={index}>
                            <input type="radio" name={`question${quizStep}`} value={String.fromCharCode(97 + index)} onChange={() => handleAnswerSelection(String.fromCharCode(97 + index))} checked={selectedOption === String.fromCharCode(97 + index)} />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
                <button className="eWasteButton" onClick={handleNextQuestion} disabled={selectedOption === null}>
                    Nächste Frage
                </button>
            </div>
        );
    };

    const renderResult = () => {
        const score = calculateScore();
        return (
            <div className="quizResult">
                <h3>Quiz Ergebnis</h3>
                <p>Du hast {score} von 10 Fragen richtig beantwortet.</p>
                <button onClick={resetQuiz}>Quiz zurücksetzen</button>
            </div>
        );
    };

    const scrollToQuizSection = () => {
        scroller.scrollTo('quizSection', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




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
                        Willkommen bei Hardware Recycler. Wir bieten informative Tipps
                        und Lösungen wie Sie ihr Elektroschrott richtig recyceln.
                        Informieren Sie sich über die Wie ihr Elektroschrott Recyclelt wird und
                        Testen Sie ihr wissen Im Quiz!

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
                <button className="callToActionButton" onClick={scrollToQuizSection}>
                    Zum Quiz!
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
                        Das Elektroschrottproblem ist ein wachsendes globales Umwelt- und Gesundheitsrisiko,
                        das durch die rasante technologische Entwicklung und
                        den zunehmenden Verbrauch elektronischer Geräte verursacht wird. Elektroschrott,
                        auch als E-Waste bezeichnet, umfasst ausgediente oder nicht mehr funktionierende elektronische Geräte und
                        deren Bestandteile.
                        Diese reichen von Smartphones und Computern bis hin zu Haushaltsgeräten und Unterhaltungselektronik.

                    </p>
                    <p>
                        Die Entsorgung von Elektroschrott ist eine komplexe Herausforderung,
                        da viele elektronische Geräte gefährliche Materialien wie Blei, Quecksilber,
                        Cadmium und bromierte Flammschutzmittel enthalten.
                        Diese Substanzen können beim unsachgemäßen Recycling oder bei der unsachgemäßen Entsorgung in die Umwelt gelangen und
                        schwerwiegende ökologische Schäden verursachen. Darüber hinaus birgt der Elektroschrottsektor Risiken für Arbeiter,
                        die oft unter schlechten Bedingungen arbeiten und giftigen Substanzen ausgesetzt sind.
                    </p>
                    <p>
                        Elektroschrott sollte idealerweise in spezialisierten Recyclingeinrichtungen entsorgt werden,
                        um Umweltauswirkungen zu minimieren.
                    </p>
                </div>


            </div>
            <div className="h1_Timeline_überschrift">
                <h1> Was mit ihren Elektroschrott passiert</h1>
            </div>

            <div className="progress-container">
                <div className="progress-bar" style={{ height: `${scrollProgress}%` }}></div>
            </div>
            <div className="timeline">
                <div className="T_container left">
                    <div className="content">
                        <h2>Abholung</h2>
                        <div>
                            <Image
                                src={AbholungGIF}

                                alt="Abholung"
                            />
                        </div>
                        <p>
                            Die Abholung von Elektroschrott erfolgt häufig durch spezialisierte Entsorgungsunternehmen
                            oder kommunale Abfallentsorgungsdienste.
                            Diese Organisationen sammeln Elektroaltgeräte entweder direkt von Haushalten oder von Sammelstellen,
                            um sicherzustellen,
                            dass Elektroschrott auf umweltfreundliche Weise entsorgt wird.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
                <div className="T_container right">
                    <div class="content">
                        <h2>Transport</h2>
                        <div>
                            <Image
                                src={TransportGIF}

                                alt="Transport"
                            />
                        </div>
                        <p>
                            Nach der Abholung erfolgt der Transport des Elektroschrotts zu geeigneten Verarbeitungseinrichtungen.
                            In vielen Fällen werden Lkws für den Transport eingesetzt,
                            um die Logistik effizient zu gestalten.</p>
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
                        <div>
                            <Image
                                src={DemontageGIF}

                                alt="Demontage"
                            />
                        </div>
                        <p>
                            In den Verarbeitungseinrichtungen wird der Elektroschrott demontiert,
                            um wertvolle Materialien zurückzugewinnen und gefährliche Substanzen sicher zu entfernen.
                            Die Demontage kann sowohl manuell als auch automatisiert erfolgen, abhängig von der Art und Größe der Elektrogeräte.
                            Während dieses Schritts werden Bauteile sortiert und für das Recycling vorbereitet.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
                <div className="T_container right">
                    <div className="content">
                        <h2>Recycling</h2>
                        <div>
                            <Image
                                src={RecyclingGIF}

                                alt="Recycling"
                            />
                        </div>
                        <p>
                            Der Recyclingprozess zielt darauf ab, wiederverwertbare Materialien wie Metalle,
                            Kunststoffe und Glas aus den Elektrogeräten zurückzugewinnen.
                            Dabei werden spezialisierte Technologien eingesetzt,
                            um die unterschiedlichen Materialien effizient zu trennen
                            und zu verarbeiten. Darüber hinaus wird darauf geachtet,
                            gefährliche Substanzen wie Schwermetalle und giftige Chemikalien ordnungsgemäß zu entsorgen,
                            um Umweltschäden zu vermeiden.

                            </p>
                        <p>
                            Recycling trägt nicht nur zur Ressourcenschonung bei,
                            sondern reduziert auch die Umweltbelastung durch den Abbau neuer Rohstoffe und
                            minimiert die Menge an Deponiemüll. Ein effektiver Recyclingprozess schließt den Kreislauf und
                            unterstützt die Schaffung nachhaltiger Praktiken im Umgang mit Elektroschrott.
                        </p>
                        <button className={styles.meinButton}>
                            Klick mich
                        </button>
                    </div>
                </div>
            </div>

            <div name="quizSection" >
                <div className="quizTitle">
                    <h1>Testen Sie jetzt ihr Wissen!</h1>
                    <div className="quizContainer">
                        {quizStep <= 10 ? renderQuestion() : renderResult()}
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
                    <button className="eWasteButton">
                        <Link href="/comments">Jetzt Austauschen!</Link>
                    </button>

                </div>

            </div>





        </main>
        <Footer />
      </div>
  )
}

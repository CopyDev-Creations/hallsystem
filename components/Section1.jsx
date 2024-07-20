import styles from "@/styles/section1.module.css";
import { CustomButton } from ".";

const Section1 = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.infoSection} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-magazynowa-bg.jpg")` }}>
                    <div className={styles.colorOverlay}></div>
                    <div className={styles.mainContainerMobile}>
                        <h2>Specjaliści w budowie hal stalowych</h2>
                        <div>
                            <p>Hallsystem od ponad 25 lat zajmuje się projektowaniem, produkcją i montażem konstrukcji stalowych w województwie świętokrzyskim i na terenie całego kraju.</p>
                            <p>Dzięki dużemu doświadczeniu w branży jesteśmy w stanie sprostać nawet najbardziej wymagającym projektom, jednocześnie zapewniając jakość i funkcjonalność.</p>
                            <p>Nasza firma specjalizuje się w tworzeniu hal na zamówienia firm z różnych gałęzi przemysłu, przystosowanych do potrzeb indywidualnych klienta. Oferujemy hale rolnicze, produkcyjne oraz magazynowe.</p>
                        </div>
                    </div>
                    <div className={styles.mainContainerBorder}>
                        <div className={styles.mainContainerDesktop}>
                            <div>
                                <h2>Specjaliści</h2>
                                <p>Hallsystem od ponad 25 lat zajmuje się projektowaniem, produkcją i montażem konstrukcji stalowych w województwie świętokrzyskim i na terenie całego kraju.</p>
                            </div>
                            <div>
                                <h2>w budowie</h2>
                                <p>Dzięki dużemu doświadczeniu w branży jesteśmy w stanie sprostać nawet najbardziej wymagającym projektom, jednocześnie zapewniając jakość i funkcjonalność.</p>
                            </div>
                            <div>
                                <h2>hal stalowych</h2>
                                <p>Nasza firma specjalizuje się w tworzeniu hal na zamówienia firm z różnych gałęzi przemysłu, przystosowanych do potrzeb indywidualnych klienta. Oferujemy hale rolnicze, produkcyjne oraz magazynowe.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.spacer}></div> */}
                    {/* <CustomButton href={"/oferta"}><div className={styles.cta}><div><h4>Skonfiguruj halę</h4></div></div></CustomButton> */}
                </div>
                <div className={styles.cards} id="oferta">
                    <div className={styles.cardContainer}>
                        <div>
                            <CustomButton className={styles.card} href={"/oferta/hale-magazynowe"} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-magazynowa.jpg")` }}>
                                <div className={styles.innerCard}>
                                    <h3>Hala<br />Magazynowa</h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="currentFill" /><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="8" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="16" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                </div>
                            </CustomButton>
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                        <div>
                            <CustomButton className={styles.card} href={"/oferta/hale-rolnicze"} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-rolnicza.jpg")` }}>
                                <div className={styles.innerCard}>
                                    <h3>Hala<br />Rolnicza</h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="currentFill" /><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="8" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="16" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                </div>
                            </CustomButton>
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                        <div>
                            <CustomButton className={styles.card} href={"/oferta/hale-produkcyjne"} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-produkcyjna.jpg")` }}>
                                <div className={styles.innerCard}>
                                    <h3>Hala<br />Produkcyjna</h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="currentFill" /><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="8" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="16" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                </div>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section1
"use client"
import styles from "@/styles/konfigurator.module.css";
import { Dropdown, KonfiguratorCanvas, LoadingContext } from "@/components";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import mapa from "@/public/images/mapa-stref.png"


const StepLabel = ({ number, title }) => {
    return (
        <div className={styles.stepLabel}>
            <div className={styles.number}>
                <span>{number || "0"}</span>
            </div>
            <h2>{title || "Lorem, ipsum."}</h2>
        </div>
    )
}

const Konfigurator = () => {
    let { stopLoading } = useContext(LoadingContext);
    const menuRef = useRef(null);
    const navRef = useRef(null);
    const viewRef = useRef(null);
    const [formData, setFormData] = useState({
        rodzaj: "",
        szerokosc: 4,
        dlugosc: 6,
        wysokosc: 2.5,
        material: "",
        drzwi: 0,
        bramy: 0,
        okna: 0,
        wojewodztwo_inw: "",
        miejscowosc_inw: "",
        montaz: true,
        strefa: 0,
        email: "",
        telefon: "",
        wojewodztwo: "",
        miejscowosc: ""
    });

    const setSelectedID = (id) => {
        const menuChildren = [...menuRef.current.children];
        const navChildren = [...navRef.current.children];
        menuChildren.forEach(element => {
            element.className = "";
        });
        navChildren.forEach(element => {
            if ([...element.classList].includes("active")) element.classList.toggle("active");
        });
        menuChildren[id - 1].className = "active";
        navChildren[id - 1].classList.toggle("active");
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    useEffect(() => {
    }, [])

    return (
        <main>
            <section className={styles.section}>
                <h1>Konfigurator</h1>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, reprehenderit recusandae? Totam ex architecto consectetur mollitia dolorem odit quisquam labore!</p> */}
                <div className={styles.viewportContainer}>
                    <div className={styles.menu} ref={menuRef}>
                        <div className="active">
                            <StepLabel number={1} title={"Wymiary"} />
                            <div>
                                <p>Rodzaj:</p>
                                <Dropdown list={["Hala magazynowa", "Hala rolnicza", "Hala produkcyjna", "Konstrukcja stalowa"]} onChoice={(choice) => setFormData({ ...formData, rodzaj: choice })} placeholder={"Wybierz"} />
                            </div>
                            <div>
                                <p>Szerokość: <span style={{ color: "var(--accent-color2)", fontWeight: 700 }}>{formData.szerokosc}m</span></p>
                                <input type="range" id="szerokosc" name="szerokosc" className="prevent-select" min="4" max="40" step="0.5" value={formData.szerokosc} onChange={(e) => setFormData({ ...formData, szerokosc: e.target.value })} />
                            </div>
                            <div>
                                <p>Długość: <span style={{ color: "var(--accent-color2)", fontWeight: 700 }}>{formData.dlugosc}m</span></p>
                                <input type="range" id="dlugosc" name="dlugosc" className="prevent-select" min="6" max="120" step="6" value={formData.dlugosc} onChange={(e) => setFormData({ ...formData, dlugosc: e.target.value })} />
                            </div>
                            <div>
                                <p>Wysokość: <span style={{ color: "var(--accent-color2)", fontWeight: 700 }}>{formData.wysokosc}m</span></p>
                                <input type="range" id="wysokosc" name="wysokosc" className="prevent-select" min="2.5" max="6" step="0.5" value={formData.wysokosc} onChange={(e) => setFormData({ ...formData, wysokosc: e.target.value })} />
                            </div>
                        </div>
                        <div style={{ display: formData.rodzaj == "Konstrukcja stalowa" ? "none" : "" }}>
                            <StepLabel number={2} title={"Wykończenie"} />
                            <div>
                                <p>Materiał ścian:</p>
                                <Dropdown list={["Blacha", "Płyta warstwowa"]} onChoice={(choice) => setFormData({ ...formData, material: choice })} placeholder={"Wybierz"} />
                            </div>
                            <div>
                                <p>Liczba drzwi:</p>
                                <input type="number" name="drzwi" id="drzwi" placeholder="0" min="0" onChange={(e) => { setFormData({ ...formData, drzwi: Math.max(e.target.value, 0) }); e.target.value = Math.max(e.target.value, 0) }} />
                            </div>
                            <div>
                                <p>Liczba bram przemysłowych:</p>
                                <input type="number" name="bramy" id="bramy" placeholder="0" min="0" onChange={(e) => { setFormData({ ...formData, bramy: Math.max(e.target.value, 0) }); e.target.value = Math.max(e.target.value, 0) }} />
                            </div>
                            <div>
                                <p>Liczba okien:</p>
                                <input type="number" name="okna" id="okna" placeholder="0" min="0" onChange={(e) => { setFormData({ ...formData, okna: Math.max(e.target.value, 0) }); e.target.value = Math.max(e.target.value, 0) }} />
                            </div>
                        </div>
                        <div>
                            <StepLabel number={formData.rodzaj == "Konstrukcja stalowa" ? 2 : 3} title={"Lokalizacja"} />
                            <div>
                                <p>Województwo inwestycji:</p>
                                <input type="text" name="wojewodztwo_inw" id="wojewodztwo_inw" placeholder="Województwo" required onChange={(e) => setFormData({ ...formData, wojewodztwo_inw: e.target.value })} />
                            </div>
                            <div>
                                <p>Miejscowość inwestycji:</p>
                                <input type="text" name="miejscowosc_inw" id="miejscowosc_inw" placeholder="Miejscowość" required onChange={(e) => setFormData({ ...formData, miejscowosc_inw: e.target.value })} />
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <input type="checkbox" name="montaz" id="montaz" defaultChecked onChange={(e) => setFormData({ ...formData, montaz: e.target.checked })} />
                                    <p>Potrzebuję montażu</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: formData.rodzaj == "Konstrukcja stalowa" ? "none" : "" }}>
                            <StepLabel number={4} title={"Strefa obciążenia"} />
                            <div>
                                <p>Wybierz strefę obciążenia śniegiem w lokalizacji hali z pomocą mapy.</p>
                            </div>
                            <div>
                                <div style={{ position: 'relative', height: '300px' }}>
                                    <Image src={mapa} alt="Mapa stref" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div>
                                <p>Numer strefy:</p>
                                <input type="number" name="strefa" id="strefa" placeholder="0" min="1" max="5" onChange={(e) => { setFormData({ ...formData, strefa: Math.min(Math.max(e.target.value, 1), 5) }); e.target.value = Math.min(Math.max(e.target.value, 1), 5) }} />
                            </div>
                        </div>
                        <div>
                            <StepLabel number={formData.rodzaj == "Konstrukcja stalowa" ? 3 : 5} title={"Kontakt"} />
                            <form>
                                <div>
                                    <p>Adres e-mail:</p>
                                    <input type="email" name="email" id="email" placeholder="E-mail" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div>
                                    <p>Telefon:</p>
                                    <input type="tel" name="telefon" id="telefon" placeholder="Numer telefonu" required onChange={(e) => setFormData({ ...formData, telefon: e.target.value })} />
                                </div>
                                <div>
                                    <p>Województwo:</p>
                                    <input type="text" name="wojewodztwo" id="wojewodztwo" placeholder="Nazwa województwa" onChange={(e) => setFormData({ ...formData, wojewodztwo: e.target.value })} />
                                </div>
                                <div>
                                    <p>Miejscowość:</p>
                                    <input type="text" name="miejscowosc" id="miejscowosc" placeholder="Nazwa miejscowości" onChange={(e) => setFormData({ ...formData, miejscowosc: e.target.value })} />
                                </div>
                                <div>
                                    <p>Komentarz:</p>
                                    <textarea name="komentarz" id="komentarz" placeholder="Dodatkowe uwagi . . ." data-lenis-prevent onChange={(e) => setFormData({ ...formData, komentarz: e.target.value })} />
                                </div>
                                <button type="submit" onClick={handleSubmit}>Wyślij</button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.navigation} ref={navRef}>
                        <button className={`${styles.stepBtn} active`} onClick={() => { setSelectedID(1) }}>1</button>
                        <button className={styles.stepBtn} onClick={() => { setSelectedID(2) }}>2</button>
                        <button className={styles.stepBtn} onClick={() => { setSelectedID(3) }}>3</button>
                        <button className={styles.stepBtn} onClick={() => { setSelectedID(4) }}>4</button>
                        <button className={styles.stepBtn} onClick={() => { setSelectedID(5) }}>5</button>
                    </div>
                    <div className={styles.viewport} data-lenis-prevent ref={viewRef}>
                        <KonfiguratorCanvas szerokosc={formData.szerokosc} dlugosc={formData.dlugosc} wysokosc={formData.wysokosc} onLoad={() => stopLoading()} />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Konfigurator
"use client"
import styles from "@/styles/oferta.module.css";
import { CustomButton, LoadingContext } from "@/components";
import { useContext, useEffect } from "react";

const Oferta = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.section}>
                <h1>Czego potrzebujesz?</h1>
                <div className={styles.cards}>
                    <div className={styles.cardContainer}>
                        <div>
                            <CustomButton className={styles.card} href={"/oferta/hale-magazynowe"} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-magazynowa.jpg")` }}>
                                <div className={styles.innerCard}>
                                    <h3>Hala<br />Magazynowa</h3>
                                </div>
                            </CustomButton>
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                        <div>
                            <CustomButton className={styles.card} href={"/oferta/hale-rolnicze"} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-rolnicza.jpg")` }}>
                                <div className={styles.innerCard}>
                                    <h3>Hala<br />Rolnicza</h3>
                                </div>
                            </CustomButton>
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                        <div>
                            <CustomButton className={styles.card} href={"/oferta/hale-produkcyjne"} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-produkcyjna.jpg")` }}>
                                <div className={styles.innerCard}>
                                    <h3>Hala<br />Produkcyjna</h3>
                                </div>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Oferta
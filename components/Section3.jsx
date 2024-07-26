import styles from "@/styles/section3.module.css";
import hala1 from "@/public/images/hala-produkcyjna4.jpg";
import hala2 from "@/public/images/dastrans.jpg";
import hala3 from "@/public/images/IMG_20240704_153232572.jpg";
import hala4 from "@/public/images/hala-rolnicza5.jpg";
import hala5 from "@/public/images/IMG_20240704_133948230.jpg";
import hala6 from "@/public/images/IMG_20240704_123859614.jpg";
import hala7 from "@/public/images/IMG_20240704_121409000.jpg";
import hala8 from "@/public/images/hala-magazynowa6.jpg";
import hala9 from "@/public/images/IMG_20240704_112043445.jpg";
import { CustomButton, CustomImage } from ".";

const Section3 = () => {

    const images = [hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9].map((image, index) => (
        <CustomImage src={image} alt={`image-${index}`} key={index} fill parallax parallaxScale={30} />
    ))

    return (
        <>
            <section className={styles.section1}>
                <div className={styles.gallery}>
                    {images}
                    <div className={styles.ctaContainer}>
                        <div>
                            <CustomButton href={"/galeria"}><div className={styles.cta}><div><h4>Zobacz więcej</h4></div></div></CustomButton>
                        </div>
                        <CustomImage src={hala3} alt="background" fill parallax parallaxScale={30} className={styles.image} />
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.text}>
                    <h2>Stwórz własną halę</h2>
                    <p>Skorzystaj z naszego konfiguratora i przyspiesz proces wstępnej wyceny swojej inwestycji. Obsługa narzędzia jest prosta: wystarczy, że wybierzesz odpowiednie opcje, postępując zgodnie z krokami wskazanymi przez system. Dzięki temu szybko dopasujesz projekt do swoich potrzeb i ułatwisz nam określenie kosztów inwestycji.</p>
                    <CustomButton href={"/konfigurator"}><div className={styles.cta}><div><h4>Zacznij teraz</h4></div></div></CustomButton>
                </div>
                <div className={styles.videoContainer}>
                    <div>
                        <CustomButton href={"/konfigurator"} animated={false}>
                            <video autoPlay muted loop playsInline>
                                <source src={`${process.env.basePath || ""}/videos/konfigurator.mp4`} type="video/mp4" />
                            </video>
                        </CustomButton>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section3
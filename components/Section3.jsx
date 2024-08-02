import styles from "@/styles/section3.module.css";
import image1 from "@/public/images/DSC_0029.jpg";
import image2 from "@/public/images/dastrans.jpg";
import image3 from "@/public/images/IMG_20240704_153232572.jpg";
import image4 from "@/public/images/hala-rolnicza5.jpg";
import image5 from "@/public/images/Produkcja-i-montaz-konstrukcji-stalowych.JPG";
import image6 from "@/public/images/IMG_20240704_123859614.jpg";
import image7 from "@/public/images/IMG_20240704_121409000.jpg";
import image8 from "@/public/images/hala-magazynowa6.jpg";
import image9 from "@/public/images/IMG_20240704_112043445.jpg";
import image10 from "@/public/images/DSC_0016.jpg";
import { CustomButton, CustomImage } from ".";

const Section3 = () => {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9].map((image, index) => (
        <CustomImage src={image} alt={`image-${index}`} key={index} width={1000} height={1000} parallax parallaxScale={30} />
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
                        <CustomImage src={image10} alt="background" fill parallax parallaxScale={30} className={styles.image} />
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
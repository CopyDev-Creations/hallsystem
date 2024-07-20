import styles from "@/styles/section3.module.css";
import Slider from "./Slider";
import hala1 from "@/public/images/hala-produkcyjna4.jpg";
import hala2 from "@/public/images/dastrans.jpg";
import hala3 from "@/public/images/IMG_20240704_153232572.jpg";
import hala4 from "@/public/images/hala-rolnicza5.jpg";
import hala5 from "@/public/images/IMG_20240704_133948230.jpg";
import hala6 from "@/public/images/IMG_20240704_123859614.jpg";
import hala7 from "@/public/images/IMG_20240704_121409000.jpg";
import hala8 from "@/public/images/hala-magazynowa6.jpg";
import hala9 from "@/public/images/IMG_20240704_112043445.jpg";
import { CustomImage } from ".";

const Section3 = () => {

    const images = [hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9].map((image, index) => (
        // <CustomImage src={image} alt={`image-${index}`} key={index} fill />
        <CustomImage src={image} alt={`image-${index}`} key={index} fill parallax parallaxScale={30} />
    ))

    return (
        <section className={styles.section}>
            <div className={styles.gallery}>
                {images}
            </div>
            {/* <Slider slideSize={"50%"} slideHeight={"600px"} images={[hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9]} /> */}
        </section>
        // <section className={styles.section} id="twoj-projekt">
        //     <h2>Twój projekt</h2>
        //     <p>W Hallsystem jesteśmy otwarci na propozycje naszych klientów. Jeżeli masz pomysł na projekt, który odbiega od standardów, chętnie podejmiemy wyzwanie i przekształcimy twoją wizję w solidną, funkcjonalną i estetyczną konstrukcję stalową.</p>
        // </section>
    )
}
export default Section3
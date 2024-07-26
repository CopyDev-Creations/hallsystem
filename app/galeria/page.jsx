"use client"
import { CustomImage, LoadingContext } from "@/components";
import styles from "@/styles/galeria.module.css";
import { useContext, useEffect } from "react";
import image1 from "@/public/images/20120530_203348.jpg"
import image2 from "@/public/images/20120918_103625.jpg"
import image3 from "@/public/images/20120918_104221.jpg"
import image4 from "@/public/images/20121030_092022.jpg"
import image5 from "@/public/images/20121030_123106.jpg"
import image6 from "@/public/images/20121106_155425.jpg"
import image7 from "@/public/images/20121109_105224.jpg"
import image8 from "@/public/images/20121115_102113.jpg"
import image9 from "@/public/images/20130416_151512.jpg"
import image10 from "@/public/images/20130711_112239.jpg"
import image11 from "@/public/images/20130711_164709.jpg"
import image12 from "@/public/images/20130711_164739.jpg"
import image13 from "@/public/images/20130717_115213.jpg"
import image14 from "@/public/images/dastrans.jpg"
import image15 from "@/public/images/DSC_0016.jpg"
import image16 from "@/public/images/DSC_0021.jpg"
import image17 from "@/public/images/DSC_0029.jpg"
import image18 from "@/public/images/DSC_0042.JPG"
import image19 from "@/public/images/DSC_0097.JPG"
import image20 from "@/public/images/DSC_0108.JPG"
import image21 from "@/public/images/DSC_0317.JPG"
import image22 from "@/public/images/hala-magazynowa1.jpg"
import image23 from "@/public/images/hala-magazynowa2.jpg"
import image24 from "@/public/images/hala-magazynowa3.jpg"
import image25 from "@/public/images/hala-magazynowa4.jpg"
import image26 from "@/public/images/hala-magazynowa5.jpg"
import image27 from "@/public/images/hala-magazynowa6.jpg"
import image28 from "@/public/images/hala-magazynowa7.jpg"
import image29 from "@/public/images/hala-produkcyjna1.jpg"
import image30 from "@/public/images/hala-produkcyjna2.jpg"
import image31 from "@/public/images/hala-produkcyjna3.jpg"
import image32 from "@/public/images/hala-produkcyjna4.jpg"
import image33 from "@/public/images/hala-produkcyjna5.jpg"
import image34 from "@/public/images/hala-produkcyjna6.jpg"
import image35 from "@/public/images/hala-produkcyjna7.jpg"
import image36 from "@/public/images/hala-produkcyjna8.jpg"
import image37 from "@/public/images/hala-rolnicza1.jpg"
import image38 from "@/public/images/hala-rolnicza2.jpg"
import image39 from "@/public/images/hala-rolnicza3.jpg"
import image40 from "@/public/images/hala-rolnicza4.jpg"
import image41 from "@/public/images/hala-rolnicza5.jpg"
import image42 from "@/public/images/hala-rolnicza6.jpg"
import image43 from "@/public/images/hala-rolnicza7.jpg"
import image44 from "@/public/images/hala-rolnicza8.jpg"
import image45 from "@/public/images/hala-rolnicza9.jpg"
import image46 from "@/public/images/promag.jpg"
import image47 from "@/public/images/IMG_20211125_151405.jpg"
import image48 from "@/public/images/IMG_20240704_112033700.jpg"
import image49 from "@/public/images/IMG_20240704_112043445.jpg"
import image50 from "@/public/images/IMG_20240704_121409000.jpg"
import image51 from "@/public/images/IMG_20240704_123859614.jpg"
import image52 from "@/public/images/IMG_20240704_133948230.jpg"
import image53 from "@/public/images/IMG_20240704_144523681.jpg"
import image54 from "@/public/images/IMG_20240704_153232572.jpg"
import image55 from "@/public/images/IMG_6439.jpg"
import image56 from "@/public/images/IMG_6442.jpg"
import image57 from "@/public/images/IMG_6473.jpg"
import image58 from "@/public/images/IMG_6479.jpg"
import image59 from "@/public/images/Konstrukcja stalowa hali magazynowej projekt produkcja 1.JPG"
import image60 from "@/public/images/Konstrukcja stalowa hali magazynowej projekt produkcja 3.JPG"
import image61 from "@/public/images/Konstrukcja stalowa hali projekt montaż.jpg"
import image62 from "@/public/images/Konstrukcjia stalowa hali magazynowej 1.jpg"
import image63 from "@/public/images/obrazy 011.jpg"
import image64 from "@/public/images/obrazy 015.jpg"
import image65 from "@/public/images/Produkcja-i-montaz-konstrukcji-stalowych.JPG"
import image66 from "@/public/images/rózne 560.jpg"
import image67 from "@/public/images/Wiata stalowa budynek gospodarczy projekt wykonanie 6.JPG"
import image68 from "@/public/images/zHala z suwnicą 1.jpg"

const Galeria = () => {
    let { stopLoading } = useContext(LoadingContext);

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51, image52, image53, image54, image55, image56, image57, image58, image59, image60, image61, image62, image63, image64, image65, image66, image67, image68]
        .map((image, index) => (
            <CustomImage src={image} alt={`image-${index}`} key={index} fill parallax parallaxScale={30} />
        ))

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.section}>
                <h1>Galeria</h1>
                <div className={styles.gallery}>
                    {images}
                </div>
            </section>
        </main>
    )
}
export default Galeria
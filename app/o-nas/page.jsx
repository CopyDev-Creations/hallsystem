"use client"
import { LoadingContext } from "@/components";
import styles from "@/styles/o-nas.module.css";
import { useContext, useEffect } from "react";

const O_nas = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.section}>
                <div className={styles.background}></div>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>O nas</h1>
                </div>
            </section>
        </main>
    )
}
export default O_nas
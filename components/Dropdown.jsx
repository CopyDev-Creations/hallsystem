"use client"
import { createElement, useEffect, useMemo, useRef, useState } from "react";
import styles from "@/styles/dropdown.module.css"


const Dropdown = ({ preselect, placeholder, list, onChoice, style, direction, empty }) => {
    const [reversed, setReversed] = useState(false);
    // const [hovered, setHovered] = useState(false);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(preselect ? preselect : placeholder);
    const dropDown = useRef(null);
    const menu = useRef(null);
    const input = useRef(null);
    const scroll = useRef(null);
    const btn = useRef(null);
    let radius = '';
    if (preselect && selected == placeholder) setSelected(preselect);

    const List = () => {
        let elements = useMemo(() => {
            let array = [];
            let i = 1;
            if (empty) array.push(createElement('button', { className: `${styles.empty} ${styles.element}`, key: 0, onClick: () => { setSelected(placeholder); onChoice(''); setShow(false) } }, empty));
            list?.forEach(element => {
                array.push(createElement('button', { className: styles.element, key: i, onClick: () => { setSelected(element); onChoice(element); setShow(false) } }, element));
                i++;
            });
            return array;
        }, [list])

        return elements
    }

    const filterFunction = () => {
        let filter = input.current.value.toUpperCase();
        let list = menu.current.getElementsByClassName(styles.element);
        for (let i = 0; i < list.length; i++) {
            if (list[i].innerText.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            } else {
                list[i].style.display = "none";
            }
        }
    }

    const onClick = (e) => {
        if (e.target !== input.current && e.target !== btn.current) setShow(false);
    }

    const handleButton = () => {
        setShow(!show);
        setReversed(dropDown.current.getBoundingClientRect().bottom + 475 > outerHeight);
        setTimeout(() => {
            input.current?.focus()
            if (scroll.current) scroll.current.style.maxHeight = '300px';
        }, 10);
    }

    useEffect(() => {
        if (show) window.addEventListener('click', onClick);
        return () => {
            window.removeEventListener('click', onClick);
        }
    }, [show]);

    switch (direction) {
        case 'top': radius = '25px 25px 0px 0px'; break;
        case 'top-left': radius = '25px 0px 0px 0px'; break;
        case 'top-right': radius = '0px 25px 0px 0px'; break;
        case 'bottom': radius = '0px 0px 25px 25px'; break;
        case 'bottom-left': radius = '0px 0px 0px 25px'; break;
        case 'bottom-right': radius = '0px 0px 25px 0px'; break;
        case 'left': radius = '25px 0px 0px 25px'; break;
        case 'right': radius = '0px 25px 25px 0px'; break;
        default: radius = '25px'; break;
    }

    return (
        // <div className={styles.dropdown} onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false, hovered) }} style={style} ref={dropDown}>
        <div className={styles.dropdown} style={style} ref={dropDown}>
            {(show && reversed) &&
                <div ref={menu} className={styles.dropdownContentRev}>
                    <div className={styles.scrollMenuRev} data-lenis-prevent ref={scroll}>
                        <List />
                    </div>
                    <input type="text" placeholder="Szukaj" className={styles.inputRev} ref={input} onKeyUp={filterFunction} style={{ backgroundImage: `url("${process.env.basePath || ""}/icons/search.svg")` }} />
                </div>}

            <button onClick={() => { handleButton() }} className={selected ? styles.dropButton : styles.dropButtonOnly} style={{ borderRadius: "" }} ref={btn}>
                {selected}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={styles.icon}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
                {/* <img src="/icons/angledown.svg" alt="rozwin" className={styles.icon} /> */}
            </button>

            {(show && !reversed) &&
                <div ref={menu} className={styles.dropdownContent}>
                    <input type="text" placeholder="Szukaj" className={styles.input} ref={input} onKeyUp={filterFunction} />
                    <div className={styles.scrollMenu} data-lenis-prevent ref={scroll}>
                        <List />
                    </div>
                </div>}
        </div>
    )
}
export default Dropdown
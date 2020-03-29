import React from 'react';
import styles from './header.module.css';
import {useSpring, animated} from 'react-spring';

const anchors = ["main", "services", "feedback", "blog", "contacts"]

export const Header = () => {
    const props = useSpring({
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    });

    const items = [
        {text: 'Обо мне', key: 1, anchor: "main"}, 
        {text: 'Услуги и стоимость', key: 2, anchor: "services"}, 
        {text: 'Отзывы', key: 3, anchor: "feedback"},
        // {text: 'Магазин', key: 4, anchor: "main"},
        {text: 'Блог', key: 5, anchor: "blog"},
        {text: 'Контакты', key: 6, anchor: "contacts"},
    ];

    return (
        <div className={styles.header}>
            <img alt="logo" src="/logo-bely.png" width="300px"/>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    {items.map(item => 
                        <animated.li style={props} >
                            <a href={`#${item.anchor}`}>{item.text}</a>
                        </animated.li>
                    )}
                </ul>
            </div>  
        </div>
    )
}
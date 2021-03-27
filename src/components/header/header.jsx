import React from 'react';
import styles from './header.module.css';
import {useSpring, animated} from 'react-spring';
import { Row, Col } from 'antd';
import Container from '../../Container';

export const Header = ({section}) => {
    const animate = useSpring({
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    });

    const items = [
        {text: 'Обо мне', key: 1, anchor: "main"}, 
        {text: 'Услуги и стоимость', key: 2, anchor: "services"}, 
        {text: 'Отзывы', key: 3, anchor: "feedback"},
        // {text: 'Магазин', key: 4, anchor: "shop"},
        {text: 'Блог', key: 5, anchor: "blog"},
        {text: 'Контакты', key: 6, anchor: "contacts"},
    ];

    return (
        // section === 0 ?
        <Container className={styles.container}>
        <Row className={styles.header}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} >
                <a href="/" className={styles.logo}>
                    <img alt="logo" src="/logo-bely.png" width="250" className={styles.logo_image} />
                </a>
            </Col>
            
            <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16} 
                className={styles.menu}>
                <div className={styles.list}>
                    {items.map((item, index) => 
                            <animated.li style={animate} key={index}>
                                <a href={`/#${item.anchor}`}>{item.text}</a>
                            </animated.li>
                    )}
                </div>
            </Col>  
        </Row> 
    </Container>
    )
}
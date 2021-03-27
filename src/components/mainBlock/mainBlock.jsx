import React, { useRef } from 'react';
import styles from './mainBlock.module.css';
import { useSpring, animated, useChain } from 'react-spring';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Container from '../../Container';

export const MainBlock = () => {
    const titleRef = useRef();
    const titleProps = useSpring({
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        ref: titleRef
    });

    const descriptionRef = useRef();
    const descriptionProps = useSpring({
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        ref: descriptionRef
    });

    const buttonRef = useRef();
    const buttonProps = useSpring({
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        ref: buttonRef
    });

    useChain([titleRef, descriptionRef, buttonRef])

    return (
        <div className='section mainBlock'>
            <Row className={styles.flex_wrapper}>
                <Col className={styles.left}
                    xs={0} sm={0} md={9} lg={10} xl={10} xxl={10}/>
            </Row>
            
            <Container className={styles.content}>
                <Row align="middle">
                    <Col
                        xs={0} sm={0} md={10} lg={11} xl={11} xxl={11}>
                        <img className={styles.image} src="/main-photo.jpg" width="100%" alt="Kate" />
                    </Col>

                
                
                <Col className={styles.text} 
                    xs={24} sm={24} md={14} lg={13} xl={13} xxl={13} >
                    <animated.h1 style={titleProps}>Добро пожаловать!</animated.h1>
                    <animated.p  style={descriptionProps}>
                        Меня зовут Катя Осадчая и я педагог дефектолог.
                        <br/>
                        Я занимаюсь запуском речи у неговорящих детей, а так же работаю с РАС (расстройство аутистического спектра).
                    </animated.p>
                    <animated.button style={buttonProps} className="btn btn_main">
                        <Link to='/about' >
                            Читать подробнее →
                        </Link>
                    </animated.button>
                </Col>
                </Row>
            </Container>
        </div>
    )
}
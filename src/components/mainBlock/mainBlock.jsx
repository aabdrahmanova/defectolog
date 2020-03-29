import React, { useRef } from 'react';
import styles from './mainBlock.module.css';
import { useSpring, animated, useChain } from 'react-spring';

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
            <div className={styles.flex_wrapper}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div>
            
            <div className={styles.content}>
                <img className={styles.image} src="/main-photo.jpg" width="50%" alt="Kate" />
                <div className={styles.text}>
                    <animated.h1 style={titleProps}>Добро пожаловать!</animated.h1>
                    <animated.p  style={descriptionProps}>
                        Меня зовут Катя Осадчая и я педагог дефектолог.
                        <br/>
                        Я занимаюсь запуском речи у неговорящих детей, а так же работаю с РАС (расстройство аутистического спектра).
                    </animated.p>
                    <animated.button style={buttonProps} className="btn btn_main">
                        Читать подробнее →
                    </animated.button>
                </div>
            </div>
        </div>
    )
}
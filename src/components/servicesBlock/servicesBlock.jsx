import React from 'react';
import styles from './servicesBlock.module.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 2}px,${y / 2}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

export const ServicesBlock = () => {

    const props1 = useSpring({ number: 1000, from: { number: 0 } });
    const props2 = useSpring({ number: 500, from: { number: 0 } });
    const props3 = useSpring({ number: 300, from: { number: 0 } });

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    const contProps = useSpring({
        from: { transform: 'translate3d(0,240px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        config: { duration: 2000 }
    });

    return (
        <div className='section services'>
                <h1 className="title">Услуги и стоимость</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td className={styles.service}>Услуга</td>
                            <td className={styles.price}>Стоимость</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Диагностика и консультация</td>
                            <td><animated.span>{props1.number}</animated.span>р.</td>
                        </tr>
                        <tr>
                            <td>Занятие 1 час</td>
                            <td><animated.span>{props2.number}</animated.span>р.</td>
                        </tr>
                        <tr>
                            <td>Занятие 30 мин.</td>
                            <td><animated.span>{props3.number}</animated.span>р.</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn">Записаться на консультацию</button>

                    <animated.div style={contProps} class="cont" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div class="stars1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div class="stars2" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div class="stars3" style={{ transform: props.xy.interpolate(trans4) }} />
                    </animated.div>
        </div>
    )
}
import React, { useRef } from 'react';
import styles from './blogBlock.module.css';
import { useSpring, animated, useChain } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x}px,${y * 1.3}px,0)`
const trans3 = (x, y) => `translate3d(${x / 10}px,${y / 8}px,0)`
const trans4 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`

export const BlogBlock = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const contProps = useSpring({
        from: { transform: 'translate3d(0,240px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        config: { duration: 2000 }
    });

    return (
        <div className='section blogBlock'>
           <h1 className="title">Блог</h1>
            <div className={styles.flexbox}>
                <div className={styles.box}>
                    <div className={styles.pic}></div>
                    <h3>Когда я могу помочь</h3>
                    <p className={styles.article}>
                    Этот вопрос довольно часто задают мне, только немного иначе:
                    <br/>▶ с какого возраста вы занимаетесь с детьми и берете на диагностику?
                    <br/>▶ с чем вы работаете?
                    </p>
                    <a>Читать полностью →</a>
                </div>

                <div className={styles.box}>
                    <div className={styles.pic}></div>
                    <h3>Когда я могу помочь</h3>
                    <p className={styles.article}>
                    Этот вопрос довольно часто задают мне, только немного иначе:
                    <br/>▶ с какого возраста вы занимаетесь с детьми и берете на диагностику?
                    <br/>▶ с чем вы работаете?
                    </p>
                    <a>Читать полностью →</a>
                </div>

                <div className={styles.box}>
                    <div className={styles.pic}></div>
                    <h3>Когда я могу помочь</h3>
                    <p className={styles.article}>
                    Этот вопрос довольно часто задают мне, только немного иначе:
                    <br/>▶ с какого возраста вы занимаетесь с детьми и берете на диагностику?
                    <br/>▶ с чем вы работаете?
                    </p>
                    <a>Читать полностью →</a>
                </div>
            </div>
           <button className="btn">Еще больше статей</button>
           <animated.div style={contProps} class="cont" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            </animated.div>
        </div>
    )
}

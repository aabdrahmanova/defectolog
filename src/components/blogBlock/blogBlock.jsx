import React, { useRef } from 'react';
import styles from './blogBlock.module.css';
import { useSpring, animated, useChain } from 'react-spring';
import articles from '../mocks.json';
import Container from '../../Container';
import { Row, Col } from 'antd';

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
            <Container>
                <h1 className="title">Блог</h1>
                    <Row 
                        // gutter={{sm:[1, 1]}}
                    >
                        {articles.slice(0, 3).map((item, index) => 
                            <Col xs={{span:22, offset:1}} sm={{span:20, offset:2}} md={{span:18, offset:3}} lg={{span:8, offset: 0}} xl={{span:8, offset: 0}} xxl={{span:8, offset: 0}}>
                                <div className={styles.box}>
                                    <div className={styles.pic}></div>
                                    <h3>{item.title}</h3>
                                    <p className={styles.article}>{item.announce}</p>
                                    <a className={styles.link} href={`/article${index}`}>Читать полностью →</a>
                                </div>
                            </Col>
                        )}
                    </Row>
                <button className="btn">Еще больше статей</button>
            </Container>
           
           <animated.div style={contProps} className="cont" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            </animated.div>
        </div>
    )
}

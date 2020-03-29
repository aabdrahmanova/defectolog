import React from 'react';
import styles from './feedbackBlock.module.css';
import { Carousel, Comment, Avatar } from 'antd';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 2}px,${y / 2}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

export const FeedbackBlock = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const contProps = useSpring({
        from: { transform: 'translate3d(0,240px,0)', opacity: 0 },
        to: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        config: { duration: 2000 }
    });
    return (
        <div className='section feedback'>
            <h1 className="title">Отзывы</h1>
            <Carousel 
                autoplay
                autoplaySpeed={5000}
                speed={1000}
                className={styles.carousel}
                pauseOnFocus
                pauseOnHover
                pauseOnDotsHover
            >
                <div className={styles.card}>
                    <Comment
                        author={'Дарья'}
                        avatar={
                        <Avatar
                            src="/images/11-03-2020.jpg"
                            alt="Дарья"
                        />
                        }
                        content={
                        <p>
                            Попали мы с дочкой к Екатерине несколько месяцев назад.
                            Нужен был специальный педагог, работающий с особенными детками. 
                            Самое интересное, что только Екатерина, досканально изучив историю болезни (до этого ни одному педагогу не интересно было) 
                            указала нам, почему у моей дочки происходят трудности с запоминанием цифр. И стала давать задания в нужном направлении. 
                            <br/>Итог занятий: дочка стала гораздо лучше говорить, логически стала более развита, каждое занятие ждем Екатерину с нетерпением! 
                            Очень рады, что наконец удалось найти такого грамотного педагога!
                        </p>
                        }
                        datetime={
                            <span>{'21 июня 2018'}</span>
                        }
                    />
                </div>

                <div className={styles.card}>
                    <Comment
                        author={'Дарья'}
                        avatar={
                        <Avatar
                            src="/images/11-03-2020-1.jpg"
                            alt="Дарья"
                        />
                        }
                        content={
                        <p>
                            Здравствуйте Екатерина! 
                            <br/>Хочу сказать Вам большое спасибо! За проведенную диагностику и консультацию моему ребёнку! 
                            Вы показали нам несложные, но важные упражнения, пояснили их значение, предоставили наглядные материалы. 
                            И мы самостоятельно, в игровой форме занимаемся, главное с удовольствием занимается сынишка! 
                            За час приема я узнала столько новой информации, что надо делать с сыном, 
                            сколько за все время мне никто ничего подобного не рекомендовал. 
                            <br/>Желаю успехов и процветания в нелегком, но нужном труде!!!
                        </p>
                        }
                        datetime={
                            <span>{'9 февраля 2020'}</span>
                        }
                    />
                </div>

                <div className={styles.card}>
                    <Comment
                        author={'Наталья'}
                        avatar={
                        <Avatar
                            src="/images/11-03-2020-2.jpg"
                            alt="Наталья"
                        />
                        }
                        content={
                        <p>
                            Я очень благодарна Екатерине, до того как она начала заниматься с моим сыном, он почти не разговаривал, 
                            сейчас в его славарном запасе очень много слов. 
                            <br/>Спасибо большое Екатерина за этот толчок.
                        </p>
                        }
                        datetime={
                            <span>{'19 ноября 2018'}</span>
                        }
                    />
                </div>

                <div className={styles.card}>
                    <Comment
                        author={'Ольга'}
                        avatar={
                        <Avatar
                            src="/images/11-03-2020-3.jpg"
                            alt="Ольга"
                        />
                        }
                        content={
                        <p>
                            Здравствуйте Екатерина, спасибо вам что в трудный для нас момент 
                            （когда просто не знаешь что делать с ребенком, все вокруг говорят что он не умеет то и то., 
                            когда мы, родители, уже морально устали ）вы расставили все по полочкам, провели диагностику, 
                            посоветовали где можно пройти ээг и другие обследования, рассказали на что обратить внимание, 
                            да и просто дали нам выдохнуть час пробыв с нашей дочкой. иногда очень важно услышать мнение со стороны 
                            от человека который понимает вопрос, ведь нам кажется что наш ребенок самый лучший, и все и так умеет, 
                            но какие то мелочи мы сами заметить не можем. Например я только родив второго ребенка поняла что у дочки 
                            просто ооочень сильные проблемы со сном и есть промахи с мелкой моторикой, а вы сразу обратили внимание на это. 
                            <br/>Много слов написала, просто спасибо вам человеческое😊🌸
                        </p>
                        }
                        datetime={
                            <span>{'19 января 2019'}</span>
                        }
                    />
                </div>

                <div className={styles.card}>
                    <Comment
                        author={'Дарья'}
                        avatar={
                        <Avatar
                            src="/images/11-03-2020-4.jpg"
                            alt="Дарья"
                        />
                        }
                        content={
                        <p>
                            Придя 1-й раз на занятие к Екатерине Евгеньевне, моя дочь практически не разговаривала и не отвечала на вопросы, 
                            была совсем не усидчивая, не хотела ничего делать и повторять. Проходив на занятия больше полугода, 
                            с уверенностью могу сказать, что благодаря Екатерине, моя дочь научилась разговаривать, пусть не так хорошо, 
                            но я могу ее понимать. Также она свободно может отвечать на все вопросы. И теперь на занятиях мы выполняем все задания! 
                            Дочь стала более раскрепащенная и общительная. 
                            <br/>В конце хочу подытожить: Екатерина Евгеньевна - отличный специалист, который найдет подход к любому ребенку!
                        </p>
                        }
                        datetime={
                            <span>{'17 января 2020'}</span>
                        }
                    />
                </div>

                <div className={styles.card}>
                    <Comment
                        author={'Юлия'}
                        avatar={
                        <Avatar
                            src="/images/11-03-2020-5.jpg"
                            alt="Юлия"
                        />
                        }
                        content={
                        <p>
                            Очень рады, что вы мне попались. Были на занятиях уже 2 раза. Еще и логопеда хорошего посоветовали. 
                            И Мишка идет хорошо, я бы даже согласна была каждый день водить. Лишь бы помогло! 
                            Мне хоть диагноз наконец-то назвали, а то все только таблетки пачками выписывают, а толку ноль. 
                            <br/>Спасибо вам, Екатерина!
                        </p>
                        }
                        datetime={
                            <span>{'17 июня 2018'}</span>
                        }
                    />
                </div>
            </Carousel>

            <animated.div style={contProps} class="clouds" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div class="clouds1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div class="clouds2" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div class="clouds3" style={{ transform: props.xy.interpolate(trans4) }} />
                    </animated.div>
        </div>
    )
}
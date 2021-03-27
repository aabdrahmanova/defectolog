import React from 'react';
import styles from './contactsBlock.module.css';
import { Input, Form, DatePicker, TimePicker, Row, Col } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from 'moment';
import 'antd/dist/antd.css';
import "../../index.css";
import Container from '../../Container';

// xs={24} sm={24} md={24} lg={{span:18, offset: 3}} xl={{span:18, offset: 3}} xxl={{span:16, offset: 4}}

const timeFormat = 'HH:mm';
const dateFormat = 'DD.MM.YYYY';

export const ContactsBlock = () => {

    return (
        <div className='section contactsBlock'>
            <Container>
            <h1 className={"title " + styles.title}>Контакты</h1>
            {/* <Row>
                <Col className={styles.left} */}
                    {/* xs={18} sm={18} md={18} lg={18} xl={18} xxl={16}> */}
                    <p>
                        Записаться на консультацию в г. Балаково можно на сайте или любым другим удобным для Вас способом. 
                        <br/>Для предварительной записи или чтобы задать вопрос, заполните форму. 
                        <br/>Я свяжусь с Вами в ближайшее время для согласования приема.
                    </p>
                    <Form size="large"
                        scrollToFirstError
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        labelAlign="left"
                    >
                    <Form.Item
                        label="Имя"
                        name="name"
                        rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
                    >
                        <Input placeholder="Введите имя..." />
                    </Form.Item>

                    <Form.Item
                        label="Номер телефона"
                        name="phone"
                        rules={[{ required: true, message: 'Пожалуйста, введите номер телефона' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item 
                        label="Дата"
                        name="date"
                    >
                        <DatePicker 
                            locale={locale}
                            defaultValue={moment(moment(), dateFormat)}
                            format={dateFormat}
                            disabledDate={(current) => current && current < moment().endOf('day')}
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Время"
                        name="time"
                        >
                        <TimePicker 
                            defaultValue={moment('12:00', timeFormat)} 
                            format={timeFormat} 
                            hideDisabledOptions
                            minuteStep={15}
                            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 22, 23]}
                            locale={locale}
                        />
                    </Form.Item>

                    <Form.Item 
                        label="Комментарий"
                        name="comment"
                        >
                        <Input.TextArea />
                    </Form.Item>
                    <button className="btn">Предварительная запись</button>
                </Form>
                    
                {/* </Col> */}
                {/* <Col className={styles.right} */}
                    {/* xs={6} sm={6} md={6} lg={6} xl={6} xxl={8}> */}
                    <h3 className={styles.tel}>Телефон:</h3>
                    <p>+7(987)330-41-74</p>
                    <div className={styles.social}>
                        <a target="_blank" href="https://vk.com/id.rodinka" className={styles.vk}></a>
                        <a target="_blank" href="https://www.instagram.com/kat_osadchaya/"  className={styles.inst}></a>
                        {/* <a target="_blank" href="https://www.instagram.com/kat_osadchaya/"  className={styles.whatsapp}></a> */}
                        <a target="_blank" href="https://teleg.run/kat_osadchaya"  className={styles.telegram}></a>

                    </div>
                {/* </Col>
            </Row> */}
            
            </Container>
        </div>
    )
}

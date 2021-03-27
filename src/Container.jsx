import React from 'react';
import { Row, Col } from 'antd';
import cn from 'classnames';


const Container = ({children, className}) => {
  const props = { 
    xs: {span:22, offset:1}, 
    sm: {span:22, offset:1}, 
    md: {span:20, offset:2}, 
    lg: {span:18, offset:3}, 
  };

  return (
  <Row>
    <Col {...props} className={cn("container", className)}>
      {children}
    </Col>
  </Row>
)};

export default Container;

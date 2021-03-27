import React, { Fragment, Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './components/header/header';
import { MainBlock } from './components/mainBlock/mainBlock';
import { ServicesBlock } from './components/servicesBlock/servicesBlock';
import { FeedbackBlock } from './components/feedbackBlock/feedbackBlock';
// import { ShopBlock } from './components/shopBlock/shopBlock';
import { BlogBlock } from './components/blogBlock/blogBlock';
import { ContactsBlock } from './components/contactsBlock/contactsBlock';

import ReactFullpage from '@fullpage/react-fullpage';

const anchors = ["main", "services", "feedback", "blog", "contacts"];

export class Wrapper extends Component {
  state = {
    section: null
  }

  afterLoad = (origin, destination, direction) => {
    console.log("Leaving section " + destination.index);
    this.setState(() => ({
      section: destination.index
    }));
  }

  render() {
    return (
      <ReactFullpage
        scrollingSpeed = {800}
        anchors={anchors}
        navigation
        afterLoad={this.afterLoad}
        render={() => {
          return (
            <Fragment>
              <ReactFullpage.Wrapper>
                <MainBlock/>
                <ServicesBlock/>
                <FeedbackBlock/>
                <BlogBlock/>
                <ContactsBlock/>
            </ReactFullpage.Wrapper>
            </Fragment>
          );
        }}
      />
    )
  }
};

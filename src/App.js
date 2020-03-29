import React from 'react';
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

const App = () => (
  <ReactFullpage
    scrollingSpeed = {800} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="container">
           <Header/>
         </div>
          <MainBlock/>
          <ServicesBlock/>
          <FeedbackBlock/>
          <BlogBlock/>
          <ContactsBlock/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


// function App() {
//   return (
//     <div className="App">
//         <div className="container">
//           <Header/>
//         </div>
//         <MainBlock/>
//         <ServicesBlock/>
//         <FeedbackBlock/>
//         {/* <ShopBlock/> */}
//         <BlogBlock/>
//         <ContactsBlock/>
//     </div>
//   );
// }

export default App;

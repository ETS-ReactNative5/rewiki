import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class trivia extends Component {
    render() {
        return ( 
<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}
  >
    <h3>Beginning</h3>
    <h4>Subtitle</h4>
    <p>
      
    </p>
    <p>
      
    </p>
    <p>
      
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Outbreak</h3>
    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
    <p>
      
    </p>
    <p>
      
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="11/2010 – Present"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}
  >
       
  
    <h3>Pursuit of revenge</h3>
    <h4>Subtitle</h4>
    <p>
      
    </p>
    <p>
      
    </p>
    <p>
      
      
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="11/2010 – Present"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}
  >
    <h3>Pursuit of a Cure</h3>
    <h4>Subtitle</h4>
    <p>
      
    </p>
    <p>
      
    </p>
  </TimelineItem>
</Timeline>
        );      
}
}
export default trivia;
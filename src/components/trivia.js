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
    <h4>Games: RE Zero, RE 1, Outbreak</h4>
    <h4 style={{ color: '#61b8ff' }}>Location: Forest, outskirts of town</h4>
    Bravo team and alpaha team are split up while looking into strange occurances in the outskirts of raccoon city.
    Zero happens shortly before 1 with rebecca and billy uncovering the secrets of the spencer mansion. The spencer family along side ofther families
    partook in funding umbrella for multiple reasons. (i.e money, immortality, power, etc).Rebecca then meets up with chris and jill. We find out that the head of the stars team Albert wesker was part of the umbrella corporation.
    We also find out from notes that 9 subjects besides wesker were test and on he was resistant to the virus. While all of this is happening the events of resident evil
    outbreak is just now occuring. The strange occurances that stars were sent out to investigate reached town and soon the city in a matter of hours became chaotic
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
    <h3 >Outbreak</h3>
    <h4 >Games: Outbreak,RE 2, RE 3, Operation Raccoon City</h4>
    <h4 style={{ color: '#61b8ff' }}>Location: Raccoon City</h4>
    <p>
      Humans became zombies and so did other forms of life. 
      (Hunters: ape gene spliced with amphibious traits, lickers, hunter gamma: no ape genes just amphibious, cerberus: dogs, crow, serpent, tigers, tarantulas, moths)
      Most of these subjects especially the insects were perfect candidates for the virus host by the notes.The main ambition shared by umbrella was to create
      BOWs(bio-logical Weapons) to sell to warring factions, companies etc in which they would be the only ones to have the cure. Umbrella had its hands in many pockets
      like the police cheif ironside, the mayor and what we come to find out later senate level clearance.      
    </p>
    During this time pivotal characters like leon, claire and a few others start to show up. Umbrealla can no longer control this test subject and send in its own relief team. We learn claire is looking for her brother chris,
    Jill is back her apartment in the city since no one is able to leave due to quarrantine. We meet umbrella characters like william burkin head researcher
    of the new g-virus(generation/gestation virus). Using the concept of cancer cells and cellular reproduction to heal the undead for millitary use. We find out that the relief team is
    unaware that they are also arisk to umbrella if they survive. Wesker flees tow and sends a BOW meant to clean up loose ends like the surviving stars members. Higher political powers agree to nuke the city
    and all our heroes get out safely.
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
    <h4>Games: RE veronica, RE 4, RE 5, RE 6, Revelations</h4>
    <h4 style={{ color: '#61b8ff' }}>Location: France, Spain, Africa, China</h4>
    
    <p>Our heros leon and claire expose what happened in raccoon city to the world. Umbrella breaks up into multiple factions:
     Ashfords dealing with the veronica virus(Birthing and hivemind function) France
     illuminados dealing with the regenerative properties of las plagas virus Spain
     Wesker with the progenitor virus (T-virus + plagas) in south africa 
     C-Virus made by traitors in us politicians released in china

    While all of this mayhem is going on claire is captured by umbrella remnants and bears witness to their almost perfected weapon.


     The motive now is to chase umbrella down and finish them once and for all 
      
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
    <h4>Resident Evil 7</h4>
     <p>
     In this story we start with a new charater searching for his wife. He then comes across an umbrella experiment gone wrong in the midwest. Barely escaping with his life Ethan may have
     the only lead on how to take down the next head of the umbrella factions. The rest of the resident evil games are quick reviews of the franchise except umbrella corps which is operation raccoon city again
     but over the span of the of games 2-6. 
    
    </p>
    <p>
    Resident Evil Wiki is in no way supported, endorsed or affiliated in with Capcom. "Capcom", all associated names, images and trademarks are copyright of Capcom. No copyright infringement is intended.
    </p>
  </TimelineItem>
  
  <img src={"./videos/re7.jpg"} alt="Side story" id="myVideo"/>
</Timeline>
        );      
}
}
export default trivia;
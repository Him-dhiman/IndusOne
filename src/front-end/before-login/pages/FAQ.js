import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import background from '../../../h-images/AI-1.png';
export default function App() {

  return (
    <div style={{padding :50}}>
    <h1> FAQs </h1>

    <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='Who are we?'>
      Founded in 2019, Tech IndusOne is an IT services startup based in India with a business development team in USA.
      We provide avenues for continuous learning and skill testing in various areas of IT, with a passion for futuristic technologies such as Artificial Intelligence and Machine
Learning.So far in our journey, dedicated spaces for tech
professionals and graduates to conduct research, build
and test prototypes of cutting-edge AI-ML innovations
have been developed by us. We connect businesses
with top-notch tech talent in India to help them solve
complex, strategic challenges speedily and create
extraordinary value at scale.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='What is our mission and vision?'>
      Our mission is to nurture India’s tech
talent at the local level by creating an
enabling environment via our
platform and services. We envision an elevated Tech
competence for India and to
showcase that superior expertise at
the global level
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='What IndusOne AI Connect?'>
      A subscription based community network zone to foster collaborations,
      share ideas & discuss research between AI and ML experts globally.

      </MDBAccordionItem>

      <MDBAccordionItem collapseId={4} headerTitle='How do I select the right onsite training courses for my group or company?'>
      You will work directly with a dedicated on-site training representative to select the right courses and topics to align with your specific business needs. In addition, the on-site training representative will facilitate program development and work with your trainer and curriculum development team to make sure the training is on-target and focused on your goals.

To inquire about onsite training opportunities for your organization, please contact us. One of our on-site training representatives will contact you to assist in planning the best event for your needs.
      </MDBAccordionItem>

      <MDBAccordionItem collapseId={5} headerTitle='How do I apply for certification?'>
      Please submit your application by logging into the   support site and click "Submit Application". Be sure to attach your application to the submission. Upon submission you will receive a confirmation email. If you forget to submit the attachment or want to update the case with additional attachments, simply reply to the confirmation email with the attachments you wish to provide.
      </MDBAccordionItem>

      <MDBAccordionItem collapseId={6} headerTitle='How long does it take to setup an onsite training course for my group or company?'>
      To set up and organize an on-site training, it typically takes 4-6 weeks, however, our On-Site Training team would work with you to try and accommodate any special needs you have.

To inquire about onsite training opportunities for your organization please submit your request here. One of our On-Site Training team members will contact you to assist in planning the best event for your needs.
      </MDBAccordionItem>

      <MDBAccordionItem collapseId={7} headerTitle='What technical equipment or app do I need to access the Program?'>
      You only need your computer, internet access with Firefox/Chrome for Riff (not Internet Explorer) and Adobe PDF reader. We will send you your login details for the site and in the first week of the Programme we will do a virtual orientation to familiarise yourself with the site and to meet your peers.
      </MDBAccordionItem>

      <MDBAccordionItem collapseId={8} headerTitle='How to Apply?'>
        Upon choosing your course or programme of interest, you will be guided through the registration process. There is no fee to apply to any of our courses or programmes.
      </MDBAccordionItem>
    </MDBAccordion>
    </ div>
  );
}

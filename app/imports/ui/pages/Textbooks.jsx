import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Textbooks extends React.Component {

  render() {
    return (
        <Container>
          <Header as='h1'>Textbooks</Header>
          <Header as='h4'>On this page you can find textbooks offered by members of the university.
            Find your textbooks here for a cheap(er) price! Click on the category you&apos;re searching for, and see if the book you are looking for is offered. </Header>
          <List>
            <List.Item>Accounting (ACC)</List.Item>
            <List.Item>Aerospace Studies (AS)</List.Item>
            <List.Item>American Sign Language (ASL)</List.Item>
            <List.Item>American Studies (AMST)</List.Item>
            <List.Item>Anatomy (ANAT)</List.Item>
            <List.Item>Anthropology (ANTH)</List.Item>
            <List.Item>Arabic (ARAB)</List.Item>
            <List.Item>Architecture (ARCH)</List.Item>
            <List.Item>Art (ART)</List.Item>
            <List.Item>Asian Studies (ASAN)</List.Item>
            <List.Item>Astronomy (ASTR)</List.Item>
            <List.Item>Biochemistry (BIOC)</List.Item>
            <List.Item>Bioengineering (BE)</List.Item>
          </List>
        </Container>
    );
  }
}

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default (Textbooks);

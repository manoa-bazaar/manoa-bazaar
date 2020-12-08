import React from 'react';
import { Divider, List, Container, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui left aligned container">
            <Container>
            <Divider />
              <List>
                <List.Item>
                  <List.Icon name='users' />
                  <List.Content>Manoa Bazaar</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>Honolulu, HI</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                    <a href='mailto:manoa@bazaar.com'>manoa@bazaar.com</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon fitted name='linkify' />
                  <List.Content>
                    <a href='https://manoabazaar.com/#/'>manoabazaar.com</a>
                  </List.Content>
                </List.Item>
              </List>
            </Container>
          </div>
        </footer>
    );
  }
}

export default Footer;

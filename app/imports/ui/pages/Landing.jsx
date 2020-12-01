import React from 'react';
import { Grid, Image, Container, Card } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div id="landing-page">
          <Container>
            <h1>Welcome to Manoa Bazaar</h1>
            <p>Buy and sell items from other UHM students</p>
            <Image fluid src={'https://image.shutterstock.com/image-vector/arab-asian-outdoor-street-market-600w-1283859628.jpg'}/>
          </Container>
          <Container>
            <h1>Popular Items</h1>
            <Grid columns={5}>
            <Grid.Row>
            <Grid.Column>
              <Card>
                <Image
                    src='https://cdn4.iconfinder.com/data/icons/48-bubbles/48/09.Handbag-256.png'
                    wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Gucci Purse</Card.Header>
                  <Card.Meta>Gucci</Card.Meta>
                  <Card.Description>
                    $200
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn2.iconfinder.com/data/icons/toilet/520/11-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Comb</Card.Header>
                    <Card.Meta>LV</Card.Meta>
                    <Card.Description>
                      $50
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn0.iconfinder.com/data/icons/business-and-finance-86/512/business_finance_money-07-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>One-of-a-kind Wallet</Card.Header>
                    <Card.Meta>Dakine</Card.Meta>
                    <Card.Description>
                      $50
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
              <Card>
                <Image
                    src='https://cdn4.iconfinder.com/data/icons/computer-peripherals-and-media/30/computer-65-256.png'
                    wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>TV</Card.Header>
                  <Card.Meta>Samsung</Card.Meta>
                  <Card.Description>
                    $160
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn0.iconfinder.com/data/icons/basic-content/24/_text_notebook-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>ICS 314 Textbook</Card.Header>
                    <Card.Meta>UHM</Card.Meta>
                    <Card.Description>
                      $40
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            </Grid>
          </Container>
          <Container>
            <h1>Textbooks</h1>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn0.iconfinder.com/data/icons/basic-content/24/_text_notebook-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>ICS 314 Textbook</Card.Header>
                      <Card.Meta>UHM</Card.Meta>
                      <Card.Description>
                        $40
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn0.iconfinder.com/data/icons/basic-content/24/_text_notebook-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>ICS 484 Textbook</Card.Header>
                      <Card.Meta>UHM</Card.Meta>
                      <Card.Description>
                        $40
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn0.iconfinder.com/data/icons/basic-content/24/_text_notebook-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>ICS 311 Textbook</Card.Header>
                      <Card.Meta>UHM</Card.Meta>
                      <Card.Description>
                        $40
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>            <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn0.iconfinder.com/data/icons/basic-content/24/_text_notebook-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>ICS 313 Textbook</Card.Header>
                    <Card.Meta>UHM</Card.Meta>
                    <Card.Description>
                      $40
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn0.iconfinder.com/data/icons/basic-content/24/_text_notebook-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>ICS 321 Textbook</Card.Header>
                      <Card.Meta>UHM</Card.Meta>
                      <Card.Description>
                        $40
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container>
            <h1>Kitchenware</h1>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn1.iconfinder.com/data/icons/kitchen-icostory-black-and-white/64/scales-kitchen-cooking-kitchenware-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Scale</Card.Header>
                      <Card.Meta>Walmart</Card.Meta>
                      <Card.Description>
                        $5
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn4.iconfinder.com/data/icons/bedding/48/70_bedding-potholder-kitchen-kitchenware-cook-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Oven Mitts</Card.Header>
                      <Card.Meta>Target</Card.Meta>
                      <Card.Description>
                        $3
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn0.iconfinder.com/data/icons/kitchenware-6/64/spoon-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Spoon</Card.Header>
                      <Card.Meta>TJ Maxx</Card.Meta>
                      <Card.Description>
                        $1
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>            <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn2.iconfinder.com/data/icons/kitchen-22/100/kitchen-37-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Chopsticks</Card.Header>
                    <Card.Meta>Bed Bath and Beyond</Card.Meta>
                    <Card.Description>
                      $2
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/birthday-party-33/64/cups-drinking-beverage-party-kitchenware-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Cups</Card.Header>
                      <Card.Meta>Swiped from Cafetaria</Card.Meta>
                      <Card.Description>
                        Free
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container>
            <h1>Bedroom Items</h1>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/bedroom-items/48/Bedroom-41-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Lamp</Card.Header>
                      <Card.Meta>Target</Card.Meta>
                      <Card.Description>
                        $5
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/bedroom-items/48/Bedroom-30-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Mirror</Card.Header>
                      <Card.Meta>Goodwill</Card.Meta>
                      <Card.Description>
                        $5
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/bedroom-items/48/Bedroom-42-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Desk Lamp</Card.Header>
                      <Card.Meta>Home</Card.Meta>
                      <Card.Description>
                        $5
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>            <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn3.iconfinder.com/data/icons/bedroom-items/48/Bedroom-13-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Pillow</Card.Header>
                    <Card.Meta>Walmart</Card.Meta>
                    <Card.Description>
                      $10
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/bedroom-items/48/Bedroom-28-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Clothes Hanger</Card.Header>
                      <Card.Meta>Ross</Card.Meta>
                      <Card.Description>
                        $7
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container>
            <h1>School Supplies</h1>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn4.iconfinder.com/data/icons/school-4/100/pencil-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Pencil</Card.Header>
                      <Card.Meta>LV</Card.Meta>
                      <Card.Description>
                        $10
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn1.iconfinder.com/data/icons/business-293/100/Business_Work_Office_Working_Commerce_economics_work-18-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Notebooks</Card.Header>
                      <Card.Meta>Office Max</Card.Meta>
                      <Card.Description>
                        $5
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn2.iconfinder.com/data/icons/school-education-19/480/03_backpack_books_school_supplies-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Backpack</Card.Header>
                      <Card.Meta>Botegga Veneta</Card.Meta>
                      <Card.Description>
                        $57
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>            <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn2.iconfinder.com/data/icons/education-5-1/256/Fountain_Pen-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Pen</Card.Header>
                    <Card.Meta>Office Depot</Card.Meta>
                    <Card.Description>
                      $1
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/classroom/48/Ryan-39-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Eraser</Card.Header>
                      <Card.Meta>Fishers Hawaii</Card.Meta>
                      <Card.Description>
                        $2
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container>
            <h1>Other Items</h1>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn2.iconfinder.com/data/icons/video-game-items-concepts-line-art/128/loot-box-ol-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Dice</Card.Header>
                      <Card.Meta>Amazon</Card.Meta>
                      <Card.Description>
                        $6
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn0.iconfinder.com/data/icons/card-games/48/Paul-23-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Cards</Card.Header>
                      <Card.Meta>Vegas</Card.Meta>
                      <Card.Description>
                        $6
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn2.iconfinder.com/data/icons/gaming-stroke-icons/104/40-gaming-puzzle-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Puzzle</Card.Header>
                      <Card.Meta>Puzzle Mania</Card.Meta>
                      <Card.Description>
                        $15
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>            <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn4.iconfinder.com/data/icons/gambling-7/54/cube-rubix-rubik-puzzle-256.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Building Blocks</Card.Header>
                    <Card.Meta>DNA</Card.Meta>
                    <Card.Description>
                      $70
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://cdn3.iconfinder.com/data/icons/construction-1-outline/60/Construction_-_Outline_-_032_-_Brick-256.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Brick</Card.Header>
                      <Card.Meta>Supreme</Card.Meta>
                      <Card.Description>
                        $500
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

    );
  }
}

export default Landing;

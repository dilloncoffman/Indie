import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';
import { Icon } from 'expo';
import { NotificationIcon } from './components/Icons';
import Logo from './components/Logo';

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            < Avatar source = {
              require('./assets/bearwave2.jpg')
            }
            />
            <Title>Welcome back,</Title>
            <Name>Dillon</Name>
            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
              />
          </TitleBar>
          <ScrollView 
            style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }} 
            horizontal={true} 
            // showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo
                key={index}
                image={logo.image}
                text={logo.text}
              />
            ))}
          </ScrollView>
          <Subtitle>Continue Listening</Subtitle>
          <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: #000;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #F0F3F5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require('./assets/shakey3.jpg'),
    text: "Shakey Graves"
  },
  {
    image: require('./assets/bk2.jpg'),
    text: "The Black Keys"
  },
  {
    image: require('./assets/hers3.jpg'),
    text: "Her's"
  },
  {
    image: require('./assets/am2.jpg'),
    text: "Arctic Monkeys"
  },
  {
    image: require('./assets/strokes3.jpg'),
    text: "The Strokes"
  }
]

const cards = [
  {
    title: "Cool With You",
    image: require('./assets/hers2.jpg'),
    subtitle: "Song's of Her's",
    caption: "Her's",
    logo: require('./assets/hers6.jpg')
  },
  {
    title: "Science Fiction",
    image: require('./assets/am2.jpg'),
    subtitle: "TBH&C",
    caption: "Arctic Monkeys",
    logo: require('./assets/am5.jpg')
  },
  {
    title: "Cops and Robbers",
    image: require('./assets/shakey3.jpg'),
    subtitle: "Can't Wake Up",
    caption: "Shakey Graves",
    logo: require('./assets/shakey4.jpg')
  },
  {
    title: "Last Exit",
    image: require('./assets/strokes1.jpg'),
    subtitle: "First Impressions of Earth",
    caption: "The Strokes",
    logo: require('./assets/strokes3.jpg')
  },
  {
    title: "Everlasting Light",
    image: require('./assets/bk1.jpg'),
    subtitle: "Brothers",
    caption: "The Black Keys",
    logo: require('./assets/bk5.jpg')
  }
]
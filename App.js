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
            <Logo 
              image={require('./assets/hers2.jpg')}
              text="Under Wraps"
            />
            <Logo 
              image={require('./assets/logo-figma.png')}
              text="Harvey"
            />
          </ScrollView>
          <Subtitle>Continue Listening</Subtitle>
          <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
            <Card 
              title="Cool With You" 
              image={require('./assets/hers.jpg')}
              caption="Cool With You"
              logo={require('./assets/circular-play-button.png')}
              subtitle="Her's"
            />
            <Card 
              title="Styled Components" 
              image={require('./assets/background2.jpg')}
              caption="React Native"
              logo={require('./assets/logo-react.png')}
              subtitle="5 of 12 sections"
            />
            <Card 
              title="Styled Components" 
              image={require('./assets/background1.jpg')}
              caption="React Native"
              logo={require('./assets/logo-react.png')}
              subtitle="5 of 12 sections"
            />
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
    image: require('./assets/logo-framerx.png'),
    text: "Framer X"
  },
  {
    image: require('./assets/logo-figma.png'),
    text: "Figma"
  },
  {
    image: require('./assets/logo-studio.png'),
    text: "Studio"
  },
  {
    image: require('./assets/logo-react.png'),
    text: "React"
  },
  {
    image: require('./assets/logo-swift.png'),
    text: "Swift"
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: "Sketch"
  }
]
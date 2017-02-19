import React from 'react';

import 'grommet/grommet-aruba.min.css';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';

export default class Body extends React.Component {
  render() {
    return (
<Sidebar colorIndex='neutral-1'>
  <Header pad='medium'
    justify='between'>
    <Title>
      Title
    </Title>
  </Header>
  <Box flex='grow'
    justify='start'>
    <Menu primary={true}>
      <Anchor href='#'
        className='active'>
        First
      </Anchor>
      <Anchor href='#'>
        Second
      </Anchor>
      <Anchor href='#'>
        Third
      </Anchor>
    </Menu>
  </Box>
  <Footer pad='medium'>
    <Button icon={<User />} />
  </Footer>
</Sidebar>
    );
  }
}
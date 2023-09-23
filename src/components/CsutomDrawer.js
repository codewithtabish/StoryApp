import * as React from 'react';
import { View } from 'react-native';
import { Drawer, Text } from 'react-native-paper';

const CustomDrawer = () => {
  const [active, setActive] = React.useState('');

  return (
      <Drawer.Section >
           <Drawer.CollapsedItem
     focusedIcon="inbox"
     unfocusedIcon="inbox-outline"
     label="Inbox"
   />

      <Drawer.Item
      
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default CustomDrawer;
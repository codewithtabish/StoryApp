import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const MyModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,marginTop:50,
borderRadius:30};

  return (
    <>
      <Portal style={{matchMedia:20}}>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}
        style={{margin: 30,borderRadius:130}}>
            <View style={{borderRadius:120}}>
                  <Text>
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            Example Modal.  Click outside this area to dismiss
            .</Text>
            </View>
        
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
      </>
      
  );
};

export default MyModal;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [showAppOption, setShowAppOption] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false)

  // resets all functionalities
  const onReset = () => {
    setShowAppOption(false)
  }

  // image saving functionality
  const onSaveImageAsync = () => {

  }

  // sticker adding functionality
  const onAddSticker = () => {
    isModalVisible(true)
  }

  // close modal component
  const onCloseModal = () => {
    isModalVisible(false)
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOption(true)
    } else {
      alert('you did not pick any image');
    }
  }
  return (
    <View style={styles.container}>

      <View style={styles.imgContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOption ? 
      ( 
        // allows you to add a sticker on your selected image
        <View style={styles.optionContainer}>
          <View style={styles.optionRow}>
            <IconButton icon={'refresh'} label='reset' onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon={'save-alt'} label='save' onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
        // allows you to add a picture
        <View style={styles.footerContainer}>
          <Button label={'Choose any photo'} theme={'primary'} onPress={pickImageAsync} />
          <Button label={'Use this photo'} onPress={() => setShowAppOption(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onCloseModal}>

      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#553e4e',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  optionContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

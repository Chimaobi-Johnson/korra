import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { Picker } from '@react-native-community/picker';
import axios from "axios";
import { APP_URL } from "../../../config";

const CreatePost = props => {

  const { modalVisible, toggleModal } = props;
  const [text, onChangeText] = useState("");
  const [step, changeStep] = useState(1);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagText, setTagText] = useState("");
  const [loading, setLoading] = useState(false);

  const submitPost = () => {
    setLoading(true)
    const formData = {
      text,
      tags,
      category,
      userId: props.userId
    }
    console.log(formData)

    axios.post(`${APP_URL}/question`, formData)
    .then(result => {
      console.log(result)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }

  const nextStep = (step) => {
    changeStep(step);
  }

  const changeTagText = (text) => {
    setTagText(text);
  }

  const addTagsHandler = () => {
    const tagsArr = [ ...tags];
    if(tagsArr.includes(tagText)) {
        return
    } else {
        tagsArr.push(tagText);
        setTags(tagsArr);
        setTagText("")
    }
}

const removeTagsHandler = (itemName) => {
  const tagsArr = [...tags];
  const filteredArr = tagsArr.filter(item => item !== itemName);
  setTags(filteredArr);
}

  const renderContent = () => {
    switch(step) {
      case 1:
        return (
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Ask a Question!</Text>
          <View style={styles.inputContainer}>
             <TextInput 
              style={{ height: 50, width: 300, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={text} 
             />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={toggleModal}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={(step) => nextStep(2)}
          >
            <Text style={styles.textStyle}>Next</Text>
          </TouchableHighlight>
          </View>
        </View>
        )
      case 2: 
        return (
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Select a Category!</Text>
          <View>

            <View style={styles.modalTopContainer}>
              <View>
                {/* <Text style={{ color: '#ccc', marginTop: 10, marginBottom: 5 }} >Select Category</Text> */}
                <Picker
                    selectedValue={category}
                    style={{ height: 20, width: 150, color: '#000' }}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                >
                    <Picker.Item label="Kiki" value="Kiki" />
                    <Picker.Item label="Germany" value="Germany" />
                    <Picker.Item label="Adventure" value="Adventure" />
                </Picker>
              </View>
              <View>
                <View style={styles.addTagContainer}>
                  <TextInput style={{ height: 30, width: 100, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={tagText => changeTagText(tagText)} value={tagText} />
                  <TouchableHighlight
                      style={{ ...styles.addButton }}
                      onPress={addTagsHandler}
                    >
                    <Text style={styles.textStyle}>Add</Text>
                  </TouchableHighlight>
                </View>
              </View>
              </View>


          </View>
          <View style={styles.inputContainer}>
            <View style={styles.displayTagsContainer}>
             {tags.map(name => <TouchableOpacity key={name} onPress={() => removeTagsHandler(name)}><Text style={styles.tagItem}>{name}</Text></TouchableOpacity>)}
            </View>
             <Text>
                {text}
             </Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={(step) => nextStep(1)}
          >
            <Text style={styles.textStyle}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={submitPost}
          >
            <Text style={styles.textStyle}>{loading ? 'Posting...' : 'Post'}</Text>
          </TouchableHighlight>
          </View>
        </View>
        )
        default:
          return
      // case 3: 
      //   return (

      //   )
    }
  }

  console.log(tags)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          {renderContent()}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  addTagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  displayTagsContainer: {
    width: 300,
    backgroundColor: 'red',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  tagItem: {
    padding: 2,
    backgroundColor: 'green',
    margin: 2,
    fontSize: 11
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 7,
    elevation: 2,
    marginLeft: 10
  },
  addButton: {
    backgroundColor: "red",
    borderRadius: 100,
    padding: 5,
    elevation: 2,
    marginLeft: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputContainer: {
    
  }
});


export default CreatePost;
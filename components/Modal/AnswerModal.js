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


const AnswerModal = props => {

  const { modalVisible, toggleModal } = props;
  const [text, onChangeText] = useState("");
  const [loading, setLoading] = useState(false);

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
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Your Answer</Text>
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
            onPress={() => {}}
          >
            <Text style={styles.textStyle}>Post</Text>
          </TouchableHighlight>
          </View>
        </View>
        
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


export default AnswerModal;
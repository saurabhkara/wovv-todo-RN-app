import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";

export default function AddNotesModal({
  openCloseModal,
  setOpenCloseModal,
  handleAddNotes,
  updateNote,
  selectAndUpdateNote,
}) {
  const [subject, setSubject] = useState(updateNote ? updateNote.sub : "");
  const [desc, setDesc] = useState(updateNote ? updateNote.desc : "");

  const onClose = () => {
    setOpenCloseModal();
  };

  return (
    <Modal
      visible={openCloseModal}
      animationType={"slide"}
      transparent={false}
      style={{ height: "70%" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View style={{ width: "28%" }} />
        <Text style={{ alignSelf: "center", fontSize: 25 }}>
          {updateNote ? "Update Note" : "Add Notes"}
        </Text>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
          onPress={setOpenCloseModal}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CustomTextInput
          placeholder={"Enter Subject"}
          label={"Subject"}
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <CustomTextInput
          placeholder={"Enter Description"}
          label={"Description"}
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />
        <CustomButton
          label={updateNote ? "Update" : "Submit"}
          onPress={() =>
            updateNote
              ? selectAndUpdateNote({
                  id: updateNote.id,
                  sub: subject,
                  desc: desc,
                })
              : handleAddNotes({ id: Date.now(), sub: subject, desc: desc })
          }
        />
      </View>
    </Modal>
  );
}

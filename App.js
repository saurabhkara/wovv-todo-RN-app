import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import NotesCard from "./components/NotesCard";
import AddNotesModal from "./components/AddNotesModal";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  const handleAddNotes = (item) => {
    setNotes([...notes, item]);
    setOpenCloseModal(false);
    setUpdateNote(null);
  };

  const handleUpdateNote = (item) => {
    setUpdateNote(item);
    setOpenCloseModal(true);
  };

  const selectAndUpdateNote = (item) => {
    const updated = notes.map((n) => {
      if (n.id === item.id) {
        return {
          id: n.id,
          sub: item.sub,
          desc: item.desc,
        };
      } else {
        return n;
      }
    });
    setNotes(updated);
    setUpdateNote(null);
    setOpenCloseModal(false);
  };

  const deleteNote = (item) => {
    const updated = notes.filter((n) => {
      return n.id !== item.id;
    });
    setNotes(updated);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "center", margin: "10%" }}>
        Task 22-03-2023
      </Text>
      <Header onAddNote={() => setOpenCloseModal(true)} />
      {!notes.length ? (
        <Text style={{textAlign:'center',marginTop:'20%',fontSize:16}}>Please Add your todo</Text>
      ) : (
        <ScrollView style={styles.notes}>
          {notes.reverse().map((item, index) => (
            <NotesCard
              key={index}
              item={item}
              updateNote={handleUpdateNote}
              deleteNote={deleteNote}
            />
          ))}
        </ScrollView>
      )}
      {openCloseModal && (
        <AddNotesModal
          openCloseModal={openCloseModal}
          setOpenCloseModal={() => {
            setOpenCloseModal(!setOpenCloseModal), setUpdateNote(null);
          }}
          handleAddNotes={(note) => handleAddNotes(note)}
          updateNote={updateNote}
          selectAndUpdateNote={selectAndUpdateNote}
        />
      )}
      <StatusBar style="light" animated={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eae4",
    paddingHorizontal: 15,
  },
  notes: {
    width: "100%",
    height: "60%",
    // backgroundColor:'cyan',
    marginTop: "10%",
    padding: "5%",
  },
});

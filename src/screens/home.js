import React from 'react';
import { FlatList, StyleSheet, View, Text, StatusBar } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, deleteNote, setSelectedNote }) => (
  <View style={styles.card}>
    <Text className="font-bold text-xl ">{item.title}</Text>
    <Text className="py-3 font-semibold text-gray-300">{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setSelectedNote(item);
          setCurrentPage('edit');
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, deleteNote, setSelectedNote }) => (
  <View className="bg-cyan-500 p-8 min-h-screen flex justify-center">
    <StatusBar animated={true} backgroundColor="#61dafb" />
    <Text className="text-2xl text-sky-700 font-bold">FanNote App</Text>
    <FlatList
      className="pt-3"
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard
          item={item}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setSelectedNote={setSelectedNote}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
    <CustomButton
      backgroundColor="orange"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage('add');
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Home;

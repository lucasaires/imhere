import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

interface IParticipantProps {
  name: string;
}

export default function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([] as IParticipantProps[]);

  function handleParticipateAdd() {
    setList((prevState) => [...prevState, { name: text }]);
    setText("");
  }

  function handleParticipateRemove(index: number) {
    Alert.alert(
      "Remover",
      `Deseja remover ${list[index].name}?`,
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => remove(index) },
      ]
    );
  }

  function remove(index: number) {
    const aux = [...list];
    aux.splice(index, 1);
    setList(aux);
  }

  function date() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de Jogadores</Text>
      <Text style={styles.eventDate}>{date()}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#9C98A6"
          onChangeText={setText}
          value={text}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipateAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            name={item.name}
            onRemove={() => handleParticipateRemove(index)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhum participante adicionado</Text>
        )}
      />
    </View>
  );
}

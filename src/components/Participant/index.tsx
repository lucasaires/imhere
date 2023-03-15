import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IParticipantProps {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: IParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

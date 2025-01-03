import { Button } from "@/components/featured/button";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { Modal } from "react-native";
import { Fragment, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TextInput, View } from "@/components/generic/themed-components";
import { Card } from "@/components/featured/card";
import exercises from "@/data/exercises";

type SelectedExerciseModalProps = {
  onSelectedExercise: (name: string) => void;
};

export default function SelectExerciseModal({
  onSelectedExercise,
}: SelectedExerciseModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <Fragment>
      <Button
        style={styles.container}
        title="Select Exercise"
        onPress={() => setIsOpen(true)}
      />
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.overlay}>
          <Card title="Select Exercise" style={styles.modalContent}>
            <AntDesign
              name="close"
              size={18}
              color="gray"
              style={styles.closeButton}
              onPress={() => setIsOpen(false)}
            />
            <TextInput
              placeholder="Search..."
              style={styles.search}
              onChangeText={setSearch}
              value={search}
            />
            <FlatList
              data={filtered}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onSelectedExercise(item.name);
                    setIsOpen(false);
                  }}
                  style={{ gap: 3 }}
                >
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text style={{ color: "gray" }}>{item.muscle}</Text>
                </Pressable>
              )}
              contentContainerStyle={{ gap: 15 }}
            />
          </Card>
        </View>
      </Modal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: "90%",
    height: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  search: {
    padding: 10,
    fontSize: 16,
  },
});

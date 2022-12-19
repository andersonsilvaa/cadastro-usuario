import React, { useState, useContext, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import firebase from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const { signOut } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .on("value", (snapshot) => {
          setUsers([]);

          snapshot.forEach((childItem) => {
            const list = {
              nome: childItem.val().nome,
              email: childItem.val().email,
            };

            setUsers((oldArray) => [...oldArray, list].reverse());
          });
        });
    }

    loadList();
  }, []);

  return (    
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
      <Button title="Sair da conta" onPress={() => signOut()} />
    </View>
  );
}

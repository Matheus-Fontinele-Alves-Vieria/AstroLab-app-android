import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

export default function Orbita({ navigation }) {
  const [userData] = useState([
    {
      img: "https://uploaddeimagens.com.br/images/003/144/592/full/Sol.png?1616441155",
      name: "Sol",
      nameId: "Sol",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/144/600/full/Merc%C3%BArio.png?1616441262",
      name: "Mercúrio",
      nameId: "Mercurio",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/144/604/full/Venus.png?1616441335",
      name: "Vênus",
      nameId: "Venus",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/145/263/full/Terra.png?1616462109",
      name: "Terra",
      nameId: "Terra",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/145/267/full/Marte.png?1616462154",
      name: "Marte",
      nameId: "Marte",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/145/269/full/J%C3%BApiter.png?1616462187",
      name: "Júpiter",
      nameId: "Jupiter",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/145/273/full/Saturno.png?1616462458",
      name: "Saturno",
      nameId: "Saturno",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/145/275/full/Urano.png?1616462509",
      name: "Urano",
      nameId: "Urano",
    },

    {
      img: "https://uploaddeimagens.com.br/images/003/145/276/full/Netuno.png?1616462546",
      name: "Netuno",
      nameId: "Netuno",
    },
  ]);

  return (
    <View style={styles.container}>
      <SwipeListView
        data={userData}
        renderItem={(data, rowMap) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(data.item.nameId)}
          >
            <View
              style={{
                backgroundColor: "#F0FFFF",
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 4,
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={{ uri: data.item.img }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "400",
                  fontSize: 16,
                }}
              >
                {data.item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFFF",
    paddingHorizontal: 10,
  },
});

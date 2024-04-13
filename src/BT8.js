import React from "react";
import { SectionList, Text, View, StyleSheet, SafeAreaView } from "react-native";

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {});
  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });
  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
};

const BT8 = () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default BT8;

const styles = StyleSheet.create({
    row: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    name: {
      fontSize: 16,
      color:'black'
    },
    separator: {
      backgroundColor: "#B8A091",
      height: 1,
    },
    sectionHeader: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: "#AAB7B8",
    },
  });



const PEOPLE = [
  {
    name: {
      title: "AV1",
      first: "Yua",
      last: "Mikami",
    },
  },
  {
    name: {
        title: "AV2",
        first: "Eimi",
        last: "Fukada",
    },
  },
  {
    name: {
        title: "AV3",
        first: "Mari",
        last: "Nguyen",
    }
  },
  {
    name: {
        title: "AV2",
        first: "Eimi",
        last: "Fukada",
    },
  },
  {
    name: {
        title: "AV2",
        first: "Eimi",
        last: "Fukada",
    },
  },
    {
    name: {
        title: "AV3",
        first: "Eimi",
        last: "Fukada",
    },
  },
];

import React, {useState} from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const habitsList: string[] = [
   'Sleep quality',
   'Socialising',
   'Diet',
   'Staying hydrated',
   'Exercise'
  ];

const Chart = () => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = useState(false);
  // send checkedItems to db to use for personalised flowChart.
  // check list state does not persist as not saved in db, but can be done later if needed
  const [checkedItems, setCheckedItems] = useState([]);

  const listItem = ({ item }: {item: string}) => {
    return (
      <SafeAreaView>
        <View >
          <BouncyCheckbox
          style={styles.listItem}
          textStyle={styles.textStyle}
          fillColor="white"
          ref={(ref: any) => (bouncyCheckboxRef = ref)}
          isChecked={checkboxState}
          text={item}
          onPress={() => {
            setCheckboxState(!checkboxState);
            setCheckedItems}}
          />
        </View>
      </SafeAreaView>
      )
    }

  return (
    <SafeAreaView style= {styles.container}>
      <View  >
        <Text style={styles.text} >Please let us know at {"\n"}least three habits that {"\n"}affect your mood: </Text>
      </View>
      <View style = {styles.list}>
        <FlatList
            data= {habitsList}
            keyExtractor={( item ) => item}
            renderItem={listItem} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  marginTop: 30,
  backgroundColor: "#1EAED7",
},
  listItem: {
    flex:2,
    marginTop: 16,
  },
  textStyle:{
    textDecorationLine: "none",
    color: 'white',
    fontSize: 25
  },
  list: {
    borderColor: '#ffff',
    borderStyle: 'solid',
    borderWidth: 7,
    borderRadius:10,
    paddingLeft: 20,
    paddingRight:50,
    height: 300

  },
  text: {
    marginVertical:50,
    fontSize: 28,
    color: 'white'
  }
});

export default Chart;

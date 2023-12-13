import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';

import styles from './chartStyles';
import ListItem from './listItem';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';

const habitsList: string[] = [
  'Sleep quality',
  'Socialising',
  'Diet',
  'Staying hydrated',
  'Exercise',
  'Activity'
];

const checkedItems: string[] = [''];


const Chart = ({ formButtonHandler }: QuestionProps) => {
  // send checkedItems to db to use for personalised flowChart.
  // check list state does not persist as not saved in db, but can be done later if needed
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Please let us know at least 3 habits that affect your mood:
      </Text>

      <View style={styles.list}>
        <FlatList
          data={habitsList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          )}
        />
      </View>

      <Pressable style={styles.press} onPress={formButtonHandler}>
        <Text style={styles.buuttonText}>Finish</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default  Chart ;

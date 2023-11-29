import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Journal {
  body: string;
  created_at: string;
  id: number;
  title: string;
}

interface JournalListItemProps {
  journalItem: Journal;
}

const parseDate = (date: string) => {
  const formatedDate = new Date(date).toLocaleDateString('en-GB');
  return formatedDate;
};

const JournalListItem: React.FC<JournalListItemProps> = ({ journalItem }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.mediumHeading}>{journalItem.title}</Text>
      <Text style={styles.paragraph}>{journalItem.body}</Text>
      <Text style={styles.date}>{parseDate(journalItem.created_at)}</Text>
    </View>
  );
};

export default JournalListItem;

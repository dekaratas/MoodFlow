/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';
import { yes, no } from '../../store/question3Slice';
import type { RootState } from '../../store/store';

const ExerciseQuestion = ({ formButtonHandler }: QuestionProps) => {
  const count = useSelector((state: RootState) => state.question2.answer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Have you gotten any exercise today?
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(yes());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>Yes</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(no());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>No</Text>
      </Pressable>
    </View>
  );
};

export default ExerciseQuestion;

import db from '../index';

import { timestampGenerator } from "../helpers";

const getAllHabits = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async (tx) => {
      tx.executeSql(
        "create table if not exists habits (id integer primary key not null, habit text, created_at text);"
      );
      tx.executeSql("select * from habits", [], (_, { rows }) => {
        let result = rows._array;
        resolve(result);
      }
      );
    });
  });
}

const addToHabits = async (habits: string[]) => {
  const timestamp = timestampGenerator();

  habits.forEach((habit) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into habits (habit, created_at) values (?, ?)", [habit, timestamp]);
        tx.executeSql("select * from habits", [], (_, { rows }) => {
          let result = rows._array;
        })
      }
    );
  })
}

const deleteHabit = async (id: number) => {
  db.transaction(
    (tx) => {
      tx.executeSql("delete from habits where id = ?", [id]);
      tx.executeSql("select * from habits", [], (_, { rows }) => {
        let result = rows._array;
      })
    }
  );
}

export { getAllHabits, addToHabits, deleteHabit }
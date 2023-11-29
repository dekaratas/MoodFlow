import db from '../index';

const getUser = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async (tx) => {
      tx.executeSql(
        'create table if not exists user_testing (id integer primary key not null, username text, password text, dob text);',
      );
      tx.executeSql('select * from user_testing', [], (_, { rows }) => {
        const result = rows._array[0];
        resolve(result);
      });
    });
  });
};

const createUser = async (username: string, password: string, dob: string) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'insert into user_testing (username, password, dob) values (?, ?, ?)',
        [username, password, dob],
      );
      tx.executeSql('select * from user_testing', [], (_, { rows }) => {
        const result = rows._array[0];
        resolve(result);
      });
    });
  });
};

export { getUser, createUser };

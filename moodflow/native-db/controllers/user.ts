import { getUser, createUser } from '../models/User';

const getUserController = async () => {
  const user = await getUser();
  return user;
};

const createUserController = async (
  username: string,
  password: string,
  dob: string,
) => {
  const user = await createUser(username, password, dob);
  return user;
};

export { getUserController, createUserController };

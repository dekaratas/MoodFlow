import { getUser, createUser } from "../models/User";

const getUserController = async () => {
  let user = await getUser();
  return user;
}

const createUserController = async (username: string, password: string, dob: string) => {
  let user = await createUser(username, password, dob);
  return user;
}

export { getUserController, createUserController }
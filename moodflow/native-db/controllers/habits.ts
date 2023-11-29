import { getAllHabits, addToHabits, deleteHabit } from '../models/Habits';

const getAllHabitsController = async () => {
  const habits = await getAllHabits();
  return habits;
};

const addToHabitsController = async (habits: string[]) => {
  await addToHabits(habits);
  return 'Habits succesfully added';
};

const deleteHabitController = async (id: number) => {
  await deleteHabit(id);
  return `Habit ${id} succesfully deleted`;
};

export { getAllHabitsController, addToHabitsController, deleteHabitController };

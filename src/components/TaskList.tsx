import { Task as TaskType } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { ModalType } from "../pages/app";
import { Task } from "./Task";

type TasksListProps = {
  setOpenModal: Dispatch<SetStateAction<ModalType>>;
  tasks: Array<TaskType>;
};

export const TaskList = ({ setOpenModal, tasks }: TasksListProps) => {
  return (
    <div className="mt-5">
      {tasks.length == 0 ? (
        <p className="text-center font-bold text-3xl text-red-500">No Tasks </p>
      ) : (
        <ul className="bg-gray-300 rounded-xl p-6 space-y-4">
          {tasks.map((task) => (
            <Task key={task.id} task={task} setOpenModal={setOpenModal} />
          ))}
        </ul>
      )}
    </div>
  );
};

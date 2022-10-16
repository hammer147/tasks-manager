import { Task as TaskType } from "@prisma/client"
import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"
import { HiPencil, HiTrash } from "react-icons/hi"
import { ModalType } from "../pages/app"
import { trpc } from "../utils/trpc"
import IconButton from "./IconButton"

type TaskProps = {
  task: TaskType
  setOpenModal: Dispatch<SetStateAction<ModalType>>
}

export const Task = ({ task, setOpenModal }: TaskProps) => {
  const utils = trpc.useContext()
  const deleteTask = trpc.tasks.delete.useMutation({
    async onSuccess() {
      await utils.tasks.all.invalidate()
    },
  })

  const toggleStatus = trpc.tasks.toggleIsCompleted.useMutation({
    async onSuccess() {
      await utils.tasks.all.invalidate()
    },
  })

  return (
    <li className="bg-white p-4 rounded-md  flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          onChange={() => {
            toggleStatus.mutateAsync({ id: task.id, status: task.isCompleted })
          }}
          checked={task.isCompleted}
          className="text-indigo-500 p-3 rounded-md transition-all duration-200 focus:ring-0"
        />
        <div className="flex flex-col">
          <span
            className={clsx(
              "font-semibold text-gray-600",
              task.isCompleted && "line-through text-gray-400"
            )}
          >
            {task.body}
          </span>
          <span className="text-sm text-gray-500">
            {task.createdAt.toLocaleDateString()}
          </span>
        </div>
      </div>
      {/* Actions */}
      <div className="flex items-center space-x-2">
        {/* Delete */}
        <IconButton
          onClick={() => {
            deleteTask.mutateAsync({ id: task.id })
          }}
        >
          <HiTrash className="text-gray-600" />
        </IconButton>
        {/* Update */}
        <IconButton
          onClick={() => setOpenModal({ isOpen: true, view: "update", task })}
        >
          <HiPencil className="text-gray-600" />
        </IconButton>
      </div>
    </li>
  )
}

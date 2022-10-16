import { Task } from "@prisma/client"
import { Dispatch, SetStateAction, useState } from "react"
import { BiTask } from "react-icons/bi"
import { HiX } from "react-icons/hi"
import { ModalType } from "../pages/app"
import { trpc } from "../utils/trpc"
import { Button } from "./Button"

import InputField from "./Form/InputField"

type TaskModalProps = {
  setOpenModal: Dispatch<SetStateAction<ModalType>>
  view: "update" | "create"
  taskToUpdate?: Task
}

const TaskModal = ({ setOpenModal, view, taskToUpdate }: TaskModalProps) => {
  const [taskText, setTaskText] = useState(
    view === "update" && taskToUpdate ? taskToUpdate.body : ""
  )

  const utils = trpc.useContext()
  const addTask = trpc.tasks.add.useMutation({
    async onSuccess() {
      await utils.tasks.all.invalidate()
    },
  })
  const updateTask = trpc.tasks.update.useMutation({
    async onSuccess() {
      await utils.tasks.all.invalidate()
    },
  })

  return (
    <div className="absolute bg-black/50 inset-0 flex justify-center items-center ">
      <div className="bg-slate-100 p-5 rounded-md relative max-w-lg  w-full  ">
        <button
          onClick={() => setOpenModal({ isOpen: false, view: "create" })}
          className="p-2 rounded-md bg-gray-300 absolute top-0 right-0 -translate-y-12 group transition-all hover:bg-red-500  "
        >
          <HiX className="text-2xl group-hover:text-gray-300" />
        </button>
        <p className="text-gray-600 font-bold text-xl">
          {view == "create" ? "Add New Task" : "Update Task"}
        </p>
        <div className="mt-3 w-full  flex flex-col justify-between">
          <InputField
            label="Task"
            leftIcon={<BiTask />}
            type="text"
            placeholder="New task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          {view === "create" && (
            <Button
              className="self-end mt-3
          "
              onClick={() => {
                addTask.mutateAsync({ body: taskText })
                setOpenModal((prevState) => ({ ...prevState, isOpen: false }))
              }}
            >
              Add
            </Button>
          )}
          {view === "update" && (
            <Button
              className="self-end mt-3
          "
              onClick={() => {
                updateTask.mutateAsync({
                  body: taskText,
                  id: taskToUpdate?.id ?? "",
                })
                setOpenModal((prevState) => ({ ...prevState, isOpen: false }))
              }}
            >
              Update
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskModal

import { Task } from "@prisma/client"
import { useState } from "react"
import { TaskList } from "../components"
import HeaderActions from "../components/HeaderActions"
import TaskModal from "../components/TaskModal"
import User from "../components/User"
import { trpc } from "../utils/trpc"

export type ModalType = {
  isOpen: boolean
  view: "create" | "update"
  task?: Task
}

const AppPage = () => {
  const [openModal, setOpenModal] = useState<ModalType>({
    isOpen: false,
    view: "create",
  })
  const [filter, setFilter] = useState<string | null>(null)

  const { data, error, status } = trpc.tasks.all.useQuery({
    status:
      filter === "completed" ? true : filter === "incomplete" ? false : null,
  })
  if (error) {
    return <h1 className="text-red-500">{error.message}</h1>
  }

  if (status !== "success") {
    return <h1>Loading...</h1>
  }

  return (
    <main className="h-screen  bg-slate-200">
      {/* Title */}

      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-10">
          <h1 className="text-center font-bold  text-6xl  text-gray-600">
            Tasks List
          </h1>
          <User />
        </div>
        <HeaderActions
          setOpenModal={setOpenModal}
          openModal={openModal.isOpen}
          setFilter={setFilter}
          filter={filter}
        />
        {openModal.isOpen && (
          <TaskModal
            view={openModal.view}
            setOpenModal={setOpenModal}
            taskToUpdate={openModal.task}
          />
        )}
        <TaskList tasks={data.tasks} setOpenModal={setOpenModal} />
      </div>
    </main>
  )
}

export default AppPage
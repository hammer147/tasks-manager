import { Dispatch, SetStateAction } from "react";
import { Button } from ".";
import { ModalType } from "../pages/app";

type HeaderActionsProps = {
  setOpenModal: Dispatch<SetStateAction<ModalType>>;
  setFilter: Dispatch<SetStateAction<string | null>>;
  filter: string | null;
  openModal: boolean;
};

const HeaderActions = ({
  setOpenModal,
  setFilter,
  filter,
  openModal,
}: HeaderActionsProps) => {
  return (
    <div className="flex items-center justify-between">
      <Button onClick={() => setOpenModal({ isOpen: true, view: "create" })}>
        Add Task
      </Button>
      <select
        onChange={(e) => setFilter(e.target.value)}
        value={filter ?? "all"}
        className="border-none py-3 bg-indigo-500 text-slate-50 font-semibold rounded-md cursor-pointer hover:bg-indigo-600 focus:ring-indigo-500"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default HeaderActions;

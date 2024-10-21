import React from 'react';
import NavBar from '../NavBar';

type EditTaskProps = {
  newTodo: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
  startEditing: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
  editingId: number;
  setEditingText: (text: string) => void;
  editingText: string;
  saveEdit: (id: number) => void;
  mutationType: 'add' | 'edit';
};

const EditTask = ({
  newTodo,
  handleInputChange,
  addTodo,
  deleteTodo,
  editingId,
  setEditingText,
  editingText,
  saveEdit,
  mutationType,
}: EditTaskProps) => {
  return (
    <div className="w-[648px]">
      <NavBar
        component={
          <p className="font-medium text-white text-2xl text-shadow">
            {mutationType === 'edit' ? 'Edit' : 'Add'} Task{' '}
          </p>
        }
      />
      <div className="pl-4 py-6 pr-5 flex flex-col justify-between flex-grow h-[720px]">
        <div>
          <label htmlFor=""> Task Name</label>
          {mutationType === 'edit' ? (
            <input
              className="w-[596px] h-[69px] border-2 border-[#CBCBCB] rounded-md px-6 placeholder:text-blue-secondary placeholder:text-[20px]"
              type="text"
              value={editingText}
              onChange={(e) => {
                setEditingText(e.target.value);
              }}
            />
          ) : (
            <>
              <input
                className="w-[596px] h-[69px] border-2 border-[#CBCBCB] rounded-md px-6"
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="Add a new todo"
              />
            </>
          )}
        </div>

        <div className="flex gap-x-3 mb-0">
          <button
            className="bg-[#720D0D] hover:bg-[#AB3535] custom-shadow w-[121px] rounded-md text-white"
            onClick={() => deleteTodo(editingId)}
          >
            Delete
          </button>

          {mutationType === 'edit' ? (
            <button
              className="bg-[#0D2972] custom-shadow w-[436px] py-4 rounded-md text-white"
              onClick={() => saveEdit(editingId)}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-[#0D2972] custom-shadow w-[436px] py-4 rounded-md text-white"
              onClick={addTodo}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTask;

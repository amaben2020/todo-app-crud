import NavBar from '../NavBar';
import Banner from '../elements/Banner';
import ButtonWithIcon from './../../assets/Button.svg';
import Completed from './../../assets/checked.svg';
import Incomplete from './../../assets/Incomplete.svg';
import clsx from 'clsx';
import { Todo } from '../../App';
import UserInfo from '../elements/UserInfo';

type CreateAndViewTaskProps = {
  toggleComplete: (id: number) => void;
  saveEdit: (id: number) => void;
  startEditing: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
  setEditingText: (text: string) => void;
  editingText: string;
  todos: Todo[];
  editingId: number | null;
  handleMutationType: (type: 'add' | 'edit') => void;
};

const CreateAndViewTask = ({
  toggleComplete,
  startEditing,
  editingText,
  todos,
  editingId,
  handleMutationType,
}: CreateAndViewTaskProps) => {
  return (
    <div className="w-[414px] shadow-right">
      <NavBar
        component={
          <UserInfo username="Jhon" details=" What are your plans for today?" />
        }
      />

      <Banner text="Go Pro Upgrade Now" price={1} />

      <div className="mt-6 space-y-6 w-full ml-1 overflow-y-auto h-[600px] relative">
        <ul className="flex items-center flex-col gap-y-6 ">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center h-[91px] shadow-custom-black-shadow rounded-md w-[382px] border border-card px-3 bg-white-primary"
            >
              {editingId === todo.id ? (
                <>
                  <p>{editingText}</p>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      flex: 1,
                      color: todo.completed ? '#8D8D8D' : '',
                    }}
                  >
                    <button
                      className={
                        (clsx(
                          todo.completed ? 'line-through text-[#8D8D8D]' : ''
                        ),
                        'flex items-center gap-x-5')
                      }
                      onClick={() => toggleComplete(todo.id)}
                    >
                      <img
                        src={todo.completed ? Completed : Incomplete}
                        alt="status"
                        className={clsx(
                          todo.completed ? ' text-[#8D8D8D]' : ''
                        )}
                      />
                      {todo.text}
                    </button>
                  </span>

                  <button
                    className="border border-[#071D55] rounded-[4px] p-2 font-medium"
                    onClick={() => {
                      handleMutationType('edit');
                      startEditing(todo.id, todo.text);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <button
          aria-label="Add Todo"
          onClick={() => handleMutationType('add')}
          className="absolute bottom-4 right-4"
        >
          <img src={ButtonWithIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CreateAndViewTask;

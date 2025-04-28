import { useState } from 'react';
import OutlineInput from './components/OutlineInput';
import PrimaryButton from './components/PrimaryButton';
import TextButton from './components/TextButton';
import ToDo from './components/ToDo';

interface ToDoItem {
  value: string;
  isComplete: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDOlist, setToDOlist] = useState<ToDoItem[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addToDO();
    }
  }

  const addToDO = () => {
    if (inputValue.trim() !== '') {
      setToDOlist((current) => [...current, { value: inputValue, isComplete: false }]);
      setInputValue('');
    }
  }

  const toggleComplete = (index: number) => {
    setToDOlist((current) => current.map((toDo, toDoIndex) => {
      if (toDoIndex === index) {
        return { ...toDo, isComplete: !toDo.isComplete };
      }
      return toDo;
    }));
  };

  const inUncompletedToDo = (toDo: ToDoItem) => !toDo.isComplete;
  const getUncompletedToDoList = () => toDOlist.filter(inUncompletedToDo);
  const removeAllCompletedToDo = () => {
    setToDOlist((current) => current.filter(inUncompletedToDo));
  }

  const completeAllUncompleted = () => {
    setToDOlist((current) => current.map((toDo) => {
      if (!toDo.isComplete) {
        return { ...toDo, isComplete: true };
      }
      return toDo;
    }));
  };
  
  const uncompleteAllUncompleted = () => {
    setToDOlist((current) => current.map((toDo) => {
      if (toDo.isComplete) {
        return { ...toDo, isComplete: false };
      }
      return toDo;
    }));
  };

  return (
    <div className="app">
      <h1 className='app-title'>𐂂 TO DO List</h1>

      <div className="app-form">
        <OutlineInput
          placeholder="내용을 입력하세요. &crarr; Enter"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <PrimaryButton
          label="오늘의 할 일 추가하기"
          onClick={addToDO}
        />
      </div>

      <div className="app-list">
        {toDOlist.map((toDo, index) => (
          <ToDo
            key={index}
            isComplete={toDo.isComplete}
            value={toDo.value}
            onClick={() => toggleComplete(index)}
          />
        ))}
      </div>

      <div className="app-footer">
        <div className="app-footer-left">
          <p>남은 일 :{getUncompletedToDoList().length}개</p>
        </div>
        <div className="app-footer-right">
          <div className="app-footer-buttons">
            <TextButton
              label="완료 목록 지우기"
              onClick={removeAllCompletedToDo}
            />
            <TextButton
              label="전체 선택"
              onClick={completeAllUncompleted}
            />
            <TextButton
              label="전체 선택 취소"
              onClick={uncompleteAllUncompleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

// Input.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Input({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmitClick = (event) => {
    event.preventDefault();


// 제목 또는 내용이 빈 문자열일 경우 함수 종료
    if (!title.trim() || !contents.trim) {
      return alert("제목과 내용을 입력해 주세요.");
    }


    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);

    setTitle('');
    setContents('');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmitClick}
      >
        제목 : <input value={title} onChange={handleChangeTitle} />
        내용 : <input value={contents} onChange={handleChangeContents} />
        <button type="submit">추가</button>
      </form>
    </section>
  );
}

export default Input;



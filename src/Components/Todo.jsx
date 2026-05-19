import React, { useEffect, useState } from 'react'
import instance from './Services/axios'

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const result = await instance.post('/todos', {
        title: newTodo,
        description: "newTodo",  
      });
      if (result.data.success) {
        getTodos();
        setNewTodo('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => async () => {
    try {
      const result = await instance.delete(`/todos/${id}`);
      if (result.data.success) {
        getTodos();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getTodos = async () => {
    try {
      const result = await instance.get('/todos'); 
      setTodos(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --todo-bg: #0f172a;
          --todo-card-bg: #020617;
          --todo-accent: #38bdf8;
          --todo-accent-soft: rgba(56, 189, 248, 0.15);
          --todo-success: #22c55e;
          --todo-text-main: #e5e7eb;
          --todo-text-muted: #9ca3af;
          --todo-border: rgba(148, 163, 184, 0.25);
          --todo-done: #059669;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(circle at top, #1d2433 0%, #020617 55%);
          min-height: 100vh;
        }

        .todo-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .todo-card {
          width: 100%;
          max-width: 520px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), #020617);
          border-radius: 20px;
          padding: 32px 28px 24px;
          border: 1px solid var(--todo-border);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.85),
            0 0 0 1px rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
        }

        .todo-title {
          margin: 0 0 24px;
          font-size: 2.2rem;
          letter-spacing: 0.04em;
          color: var(--todo-text-main);
          text-align: center;
        }

        .todo-input-group {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .todo-input {
          flex: 1;
          padding: 14px 18px;
          border: 1px solid var(--todo-border);
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.7);
          color: var(--todo-text-main);
          font-size: 0.95rem;
          transition: all 0.18s ease;
        }

        .todo-input::placeholder {
          color: var(--todo-text-muted);
        }

        .todo-input:focus {
          outline: none;
          border-color: var(--todo-accent);
          box-shadow: 0 0 0 3px var(--todo-accent-soft);
        }

        .todo-add-btn {
          padding: 14px 24px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--todo-accent), #0ea5e9);
          color: #0b1220;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.18s ease;
          white-space: nowrap;
        }

        .todo-add-btn:hover {
          background: linear-gradient(135deg, #0ea5e9, var(--todo-success));
          transform: translateY(-1px);
          box-shadow: 0 12px 30px rgba(56, 189, 248, 0.4);
        }

        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 500px;
          overflow-y: auto;
        }

        .todo-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid transparent;
          transition: all 0.18s ease;
        }

        .todo-item:hover {
          background: var(--todo-accent-soft);
          border-color: var(--todo-accent);
          transform: translateY(-1px);
        }

        .todo-item.completed {
          opacity: 0.7;
          background: rgba(5, 150, 105, 0.15);
          border-color: var(--todo-done);
        }

        .todo-content {
          flex: 1;
          color: var(--todo-text-main);
          font-size: 0.95rem;
        }

        .todo-content.completed {
          text-decoration: line-through;
          color: var(--todo-text-muted);
        }

        .todo-status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--todo-accent-soft);
          color: var(--todo-accent);
          margin-left: 12px;
        }

        .todo-status.completed {
          background: rgba(5, 150, 105, 0.2);
          color: var(--todo-done);
        }

        .todo-delete {
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .todo-delete:hover {
          background: rgba(239, 68, 68, 0.4);
          color: #ef4444;
          transform: translateY(-1px);
        }

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: var(--todo-text-muted);
        }

        @media (max-width: 480px) {
          .todo-card {
            padding: 24px 18px 18px;
            border-radius: 16px;
            margin: 12px;
          }

          .todo-title {
            font-size: 1.8rem;
          }

          .todo-input-group {
            flex-direction: column;
          }

          .todo-add-btn {
            padding: 14px 20px;
          }
        }
      `}</style>

      <div className="todo-wrapper">
        <div className="todo-card">
          <h1 className="todo-title">Todo App</h1>

          <div className="todo-input-group">
            <input 
              type="text" 
              className="todo-input"
              placeholder="Enter todo title..."
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button className="todo-add-btn" onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>

          {todos.length === 0 ? (
            <div className="empty-state">
              No todos yet. Add one above! ✨
            </div>
          ) : (
            <div className="todo-list">
              {todos.map((item) => (
                <div 
                  key={item.id || item._id}
                  className={`todo-item ${item.completed ? 'completed' : ''}`}
                >
                  <div>
                    <div className={`todo-content ${item.completed ? 'completed' : ''}`}>
                      {item.title}
                    </div>
                    <span className={`todo-status ${item.completed ? 'completed' : ''}`}>
                      {item.completed ? 'Done' : 'Pending'}
                    </span>
                  </div>
                  <button 
                    className="todo-delete"
                    onClick={handleDelete(item.id || item._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;

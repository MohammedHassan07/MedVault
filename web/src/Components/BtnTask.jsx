import React from 'react';
import { Link } from 'react-router-dom';

const BtnTask = ({ taskName, tasks }) => {
    return (
        <span className="dropdown m-2">
            <button
                className="btn btn-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {taskName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Link className="dropdown-item" to={task.path}>
                            {task.taskName}
                        </Link>
                    </li>
                ))}
            </ul>
        </span>
    );
};

export default BtnTask;

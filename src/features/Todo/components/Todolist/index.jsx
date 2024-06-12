import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todolist: PropTypes.array,
};

Todolist.defaultProps = {
    todolist: [],
}

function Todolist({ todolist1 }) {

    return (
        <ul>
            {todolist1.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default Todolist;
import React from 'react';
import PropTypes from 'prop-types';
import Todolist from '../components/Todolist';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todolist = [
        {
            id: 1,
            title: 'EAT'
        },
        {
            id: 2,
            title: 'SLEEP'
        },
        {
            id: 3,
            title: 'CODE'
        }
    ]
    return (
        <div>
            <h3>Todo list</h3>
            <Todolist todolist={todolist}></Todolist>
        </div>
    );
}

export default TodoFeature;
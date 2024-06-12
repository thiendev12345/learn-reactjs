import React from 'react';
import PropTypes from 'prop-types';
import Todolist from '../components/Todolist';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todolist = [
        {
            id: 1,
            title: 'EAT123456'
        },
        {
            id: 2,
            title: 'SLEEP23'
        },
        {
            id: 3,
            title: 'CODE'
        }
    ]
    return (
        <div>
            <h3>Todo list</h3>
            <Todolist todolist1={todolist}></Todolist>
        </div>
    );
}

export default TodoFeature;
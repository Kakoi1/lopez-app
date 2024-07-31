import React, { useState, useEffect } from 'react';
import Task from './Task';
import Complete from './Complete';
import SearchFilter from './SearchFilter';

export default function Tasks(){
    const [tasks, setTasks] = useState([
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Nakamura', deadline: '01/08/2024', status: 'Completed' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Tanaka', deadline: '03/08/2024', status: 'Completed' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Kobayashi', deadline: '07/08/2024', status: 'Completed' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Yamada', deadline: '08/08/2024', status: 'Completed' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Matsumoto', deadline: '10/08/2024', status: 'Pending' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Sasaki', deadline: '11/08/2024', status: 'Pending' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Yamamoto', deadline: '12/08/2024', status: 'Pending' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Yamaguchi', deadline: '13/08/2024', status: 'Pending' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Takahashi', deadline: '14/08/2024', status: 'Pending' },
    { description: 'Lorem Ipsum is simply dummy', assignee: 'Saito', deadline: '15/08/2024', status: 'Pending' },
      ]);
      const toggleTaskStatus = (index) => {
        setTasks(tasks.map((task, i) =>(
          i === index
            ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
            : task
        )));
      };

      const [searchQuery, setSearchQuery] = useState('');
      const [filteredTasks, setFilteredTasks] = useState(tasks);

      useEffect(() => {
        const filterTasks = () => {
          if (searchQuery.trim() === '') {
            setFilteredTasks(tasks);
          } else {
            setFilteredTasks(
              tasks.filter(task =>
                task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
              )
            );
          }
        };
    
        filterTasks();
      }, [searchQuery, tasks]);

      return (
        <div>

    <h1>Task List</h1>
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <h1>Task List</h1>
      <h2>Completed Task</h2>
      {filteredTasks.map((task, index) => (
        <Task key={index} number = {index+1} task={task} onToggleStatus={toggleTaskStatus} />
      ))}
      <hr />
       <h2>Pending Task</h2>
      {filteredTasks.map((task, index) => (
        <Complete key={index} number = {index+1} task={task} onToggleStatus={toggleTaskStatus} />
      ))}
    </div>
      );
      
}
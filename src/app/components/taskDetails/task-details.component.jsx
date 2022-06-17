import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from '../button/button.component';

import './task-details.component.scss';

const TaskDetails = () => {
  const param = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{param.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam placeat quis quisquam, distinctio quos voluptate aliquam explicabo eligendi et labore dolor totam. Nesciunt enim atque suscipit unde saepe eveniet?</p>
      </div>
    </>
  );
}
 
export default TaskDetails;
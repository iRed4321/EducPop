
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

import Question from "./Question";
import DropZone from "./DropZone";
import { manager } from './dnd-utils'

import "../styles/components/DragNDropQuestions.scss";


const DragNDropQuestions = ({ displayDropZone, questions = [], onDrop }) => {
    console.log('I re-rendered');
    console.log(questions);
    const moveQuestion = (fromIndex, toIndex) => {
        const newQuestions = [...questions];
        const [removed] = newQuestions.splice(fromIndex, 1);
        newQuestions.splice(toIndex, 0, removed);
        questions=newQuestions;
    };

    return (
        <DndProvider  manager={manager}>
            {questions.map((question, index) => (
                <Question key={question.id} id={question.id} text={question.text} index={index} moveQuestion={moveQuestion} />
            ))} 
        {
            !displayDropZone ? null : (
                <DropZone onDrop={onDrop} />
            )
            
        }
        </DndProvider>
    );
};

export default DragNDropQuestions;


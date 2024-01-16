// PrintQuestion.js
import React, { useState } from 'react';
import DragNDropQuestions from '../components/DragNDropQuestions';

const PrintQuestion = () => {
    const questions = [
        { id: 1, text: 'Question 1' },
        { id: 2, text: 'Question 2' },
        { id: 3, text: 'Question 3' },
    ];

    const handleDrop = (questionId) => {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            const draggedQuestion = questions.find((question) => question.id === questionId);
            newWindow.document.write(`<html><head><title>${draggedQuestion.text}</title></head><body>${draggedQuestion.text}</body></html>`);
            newWindow.document.close();
        }
    };

    return (
        <div>
            <h2>Questions</h2>
            <DragNDropQuestions questions={questions} onDrop={handleDrop} />
        </div>
    );
};

export default PrintQuestion;

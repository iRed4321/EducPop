// PrintQuestion.js
import React, { useState, useEffect } from 'react';
import DragNDropQuestions from '../components/DragNDropQuestions';
import axios from '../axios.js';

function PrintQuestion() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        const getQuestions = async () => {
            let params = new URLSearchParams(document.location.search);
            let id = params.get("id");
            const recu = await axios.get("/session/"+id+"/update?token="+localStorage.getItem("accessToken"));
            const questionsR = recu.data.value0;

            
            
            setQuestions(questionsR);
         };

        getQuestions();
  
    }, []);

    var q = questions.map((question, index) => ({ id: index+1, text: question }));
    console.log(q);

    const handleDrop = (questionId) => {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            const draggedQuestion = questions.find((question) => question.id === questionId);
            newWindow.document.write(`<html><head><title>${draggedQuestion.text}</title></head><body>${draggedQuestion.text}</body></html>`);
            newWindow.document.close();
        }
    };

    return (
        <div id="printQuestionContainer">
            <DragNDropQuestions questions={questions} onDrop={handleDrop} />
        </div>
    );
};

export default PrintQuestion;

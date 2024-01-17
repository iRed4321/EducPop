import {useDrag} from "react-dnd";
import React from "react";
import "../styles/components/DropQuestion.css";

const Question = ({ id, text, index, moveQuestion }) => {

    const generateRandomName = () => {
        let names = ["@Ours", "@Panda", "@Lapin", "@Chien", "@Chat", "@Poisson", "@Poule", "@Cheval", "@Vache", "@Mouton", "@Lion", "@Tigre", "@Singe", "@Souris", "@Elephant", "@Girafe", "@Kangourou", "@Koala", "@Panda", "@Rhinoceros", "@Zebre", "@Chameau", "@Loup", "@Ours", "@RatonLaveur", "@Castor", "@Ragondin", "@Belette", "@Furet", "@Chacal", "@Renard", "@Lievre", "@Cerf", "@Biche", "@Chevreuil", "@Sanglier", "@Ours", "@OursPolaire"]
        let random = Math.floor(Math.random() * names.length);
        let randomName = names[random];
        let randomNum = Math.floor(Math.random() * 100);
        return randomName + randomNum;
    }

    const [{ isDragging }, drag] = useDrag({
        type: 'QUESTION',
        item: { id, index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div id="question" ref={(node) => drag(node)} >
            {/* <p id="questionUser"> {generateRandomName()} </p> */}
            <p id="questionText" p>{text}</p>
        </div>
    );
};
export default Question;

import { FC, useState } from "react";
import styles from "./QuestionDropdown.module.css";
import CarretArrow from "@/assets/svg/CarretArrow";

interface IQuestionDropdown {
  question: string;
  answer: string;
  idx: number;
}

const QuestionDropdown: FC<IQuestionDropdown> = ({ question, answer, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.container} ${idx === 1 && styles.first}`}
      onClick={toggleAnswer}
    >
      <div className={styles.question_container}>
        <p className={styles.question}>{question}</p>
        <CarretArrow
          className={`${isOpen && styles.arrow_rotate} ${styles.arrow}`}
        />
      </div>
      <p className={`${styles.answer} ${isOpen && styles.answer_open}`}>
        {answer}
      </p>
    </div>
  );
};

export default QuestionDropdown;

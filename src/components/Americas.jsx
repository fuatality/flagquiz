import React,{useState,useEffect} from 'react'
import axios from 'axios';


const Americas = () => {
    const sectionStyle = {
        borderStyle: "groove",
        width: "40%",
        margin: "50px auto 0",
        textAlign: "center",
        padding: "0px"
    };

    const buttonStyle = {
        display: "inline-block", 
        width: "40%",
        margin: "5% 0 5% 0",
        fontSize: "90%"
    }
    const [questions,setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);


    const fetchQuestion = async () => {
        const response = await axios.get("http://localhost:3000/americas");
        setQuestions(response.data)
    }

    useEffect(() => {
       fetchQuestion();
    },[])

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (
        <div className='app'>
			{showScore ? (
				<>
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
                <div className='score-section'>
                    <a href="/home"> Go Back </a>
                </div>
                </>
			) : (
				<>
                {questions.map((item,index) => 
					<div className='question-section' style={sectionStyle}>
						<div className='question-count'>
							<span>Question {index + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{item.questionText}</div>
					<div className='answer-section'>
						{item.answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} style={buttonStyle}>{answerOption.answerText}</button>
						))}
					</div>
                    </div>
                )}
				</>
			)}
		</div>
    )
}


export default Americas

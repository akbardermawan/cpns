import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { dataQues } from '../../database/pkn';
import './ques.scss';

export default function Ques({ quesNumber, setQuesNumber }) {
    const [ques, setQues] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('');
    const navigate = useNavigate(); // Inisialisasi useNavigate

    useEffect(() => {
        setQues(dataQues[quesNumber - 1]);
        setClassName('');
    }, [quesNumber]);

    const delay = (duration, callback) => {
        setTimeout(callback, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName(a.correct ? 'correct' : 'incorrect');

        delay(100, () => {
            if (a.correct) {
                if (quesNumber < dataQues.length) {
                    setQuesNumber((prev) => prev + 1);
                } else {
                    alert("Selamat, Anda telah menyelesaikan semua pertanyaan!");
                    navigate('/twk'); // Navigasi ke halaman awal
                }
                setSelectedAnswer(null);
                setClassName('');
            } else {
                alert("Jawaban salah. Coba lagi!"); 
            }
        });
    };

    return (
        <div className="question-container">
            <div className="question-text">
                {ques?.question}
            </div>
            <div className="answers-container">
                {ques?.answer.map((a, index) => (
                    <div
                        key={index}
                        className={`answer ${className} ${selectedAnswer === a ? 'active' : ''}`}
                        onClick={() => handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
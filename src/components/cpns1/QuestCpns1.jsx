import React from "react";

const QuestCpns1 = ({ question, onChecked, check }) => {
  function onSelect(i) {
    onChecked(i);
  }
  if (!question) return <div>No Question</div>;

  return (
    <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        {question.id}. {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-2 border p-2 rounded cursor-pointer"
          >
            <input
              type="radio"
              name="option"
              value={index}
              id={`q${index}-option`}
              onChange={() => onSelect(index)}
              checked={check === index}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestCpns1;

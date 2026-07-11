import React from "react";

const QuestCpns7 = ({ question, onChecked, check }) => {
  function onSelect(i) {
    onChecked(i);
  }
  if (!question) return <div>No Question</div>;

  return (
    <div className="w-full h-full  max-w-xl bg-white p-6 rounded-xl shadow flex flex-col justify-center">
      <div className="flex items-start">
        <span className="pr-2 text-sm md:text-xl font-semibold">
          {question.id}.
        </span>

        <h2 className="flex-1 text-sm md:text-xl font-semibold pb-2 pt-0 whitespace-pre-line leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-2 border p-2 rounded cursor-pointer text-sm md:text-xl"
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

export default QuestCpns7;

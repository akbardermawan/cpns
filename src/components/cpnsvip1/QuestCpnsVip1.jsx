import React from "react";

const QuestCpnsVip1 = ({ question, onChecked, check }) => {
  function onSelect(i) {
    onChecked(i);
  }
  if (!question) return <div>No Question</div>;

  return (
    <div className="w-full h-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header Soal */}
      <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
        <span className="text-sm font-semibold text-blue-600">
          SOAL NO. {String(question.id).padStart(2, "0")}
        </span>

        <h3 className="mt-2 text-base font-bold text-gray-800 md:text-lg">
          Pilih jawaban yang paling tepat!
        </h3>
      </div>

      {/* Pertanyaan */}
      <div className="p-5 md:p-8">
        <div className="mb-5">
          <p className="text-base font-semibold leading-relaxed text-gray-800 md:text-lg whitespace-pre-line">
            {question.question}
          </p>
        </div>

        {/* Pilihan Jawaban */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`group flex cursor-pointer items-center gap-3 rounded-xl border p-3 md:p-4 transition-all duration-200 ${
                check === index
                  ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50"
              }`}
            >
              {/* Radio Button */}
              <input
                type="radio"
                name={`option-${question.id}`}
                value={index}
                id={`q${question.id}-option-${index}`}
                onChange={() => onSelect(index)}
                checked={check === index}
                className="h-4 w-4 shrink-0 cursor-pointer accent-blue-600 md:h-5 md:w-5"
              />

              {/* Label A, B, C, D */}
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  check === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>

              {/* Isi Jawaban */}
              <span
                className={`flex-1 text-sm leading-relaxed md:text-base ${
                  check === index
                    ? "font-semibold text-blue-800"
                    : "font-medium text-gray-700"
                }`}
              >
                {option}
              </span>

              {/* Indikator Pilihan */}
              {check === index && (
                <span className="text-sm font-semibold text-blue-600">
                  Terpilih
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestCpnsVip1;

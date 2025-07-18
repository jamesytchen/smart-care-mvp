// app/Form.tsx
import questionsJson from "../data/questions.json" assert { type: "json" };

/**
 * 題目型別定義（對應 questions.json）
 */
interface Question {
  id: string;
  order: number;
  label: string;
  type: "text" | "number" | "date" | "radio" | "checkbox" | "select";
  required: boolean;
  options?: string[];
}

// 轉型成陣列方便 .map
const questions = questionsJson as unknown as Question[];

export default function Form() {
  return (
    <form className="space-y-6 max-w-xl mx-auto py-10">
      {questions
        .sort((a, b) => a.order - b.order)
        .map((q) => (
          <div key={q.id} className="flex flex-col">
            <label className="font-medium mb-1">{q.label}</label>

            {/* 根據題型輸出對應輸入框 */}
            {q.type === "text" || q.type === "number" || q.type === "date" ? (
              <input
                name={q.id}
                type={q.type}
                required={q.required}
                className="border rounded p-2"
              />
            ) : null}

            {q.type === "radio" && q.options?.map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2">
                <input type="radio" name={q.id} value={opt} required={q.required} />
                {opt}
              </label>
            ))}

            {q.type === "checkbox" && q.options?.map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2">
                <input type="checkbox" name={q.id} value={opt} />
                {opt}
              </label>
            ))}

            {q.type === "select" && (
              <select
                name={q.id}
                required={q.required}
                className="border rounded p-2"
              >
                <option value="" disabled selected>
                  -- 請選擇 --
                </option>
                {q.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        送出
      </button>
    </form>
  );
}

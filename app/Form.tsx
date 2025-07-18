// app/Form.tsx
import raw from "../data/questions.json";

interface Question {
  id: string;
  order: number;
  label: string;
  type: "text" | "number" | "date" | "radio" | "checkbox" | "select";
  required: boolean;
  options?: string[];
}

/**
 * 確保匯入的 JSON 真的是陣列；若不是，就顯示錯誤訊息
 */
const questions: Question[] = Array.isArray(raw) ? (raw as Question[]) : [];

export default function Form() {
  if (questions.length === 0) {
    return (
      <div className="text-center py-20 text-red-600">
        ⚠️ `data/questions.json` 目前不是題目陣列，請依部署指南「附錄」貼上完整 18 題 JSON！
      </div>
    );
  }

  return (
    <form className="space-y-6 max-w-xl mx-auto py-10">
      {questions
        .sort((a, b) => a.order - b.order)
        .map((q) => (
          <div key={q.id} className="flex flex-col">
            <label className="font-medium mb-1">{q.label}</label>

            {["text", "number", "date"].includes(q.type) && (
              <input
                name={q.id}
                type={q.type}
                required={q.required}
                className="border rounded p-2"
              />
            )}

            {q.type === "radio" &&
              q.options?.map((opt) => (
                <label key={opt} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    required={q.required}
                  />
                  {opt}
                </label>
              ))}

            {q.type === "checkbox" &&
              q.options?.map((opt) => (
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

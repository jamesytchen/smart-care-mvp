// app/Form.tsx
import questions from "@/data/questions.json";

export default function Form() {
  return (
    <form className="space-y-4 max-w-xl mx-auto py-10">
      {questions.map((q) => (
        <div key={q.id} className="flex flex-col">
          <label className="font-medium">{q.label}</label>
          <input
            required={q.required}
            name={q.id}
            type={q.type === "number" ? "number" : "text"}
            className="border rounded p-2"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        送出
      </button>
    </form>
  );
}

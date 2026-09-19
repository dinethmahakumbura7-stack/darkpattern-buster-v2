import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="w-80 bg-slate-900 text-slate-100 p-4 font-sans select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🛡️</span>
          <h1 className="text-base font-bold text-slate-100">DarkPattern Buster</h1>
        </div>
        <span className="text-[10px] font-semibold tracking-wider bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full border border-slate-700">
          V1.0
        </span>
      </div>

      {/* Score Card */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-center mb-4 shadow-sm">
        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
          Deception Risk Score
        </p>
        <div className={`text-4xl font-black ${score > 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
          {score}
          <span className="text-base font-medium text-slate-500">/100</span>
        </div>
        <p className="text-xs mt-1 font-medium text-slate-300">
          {score === 0 ? "No dark patterns detected yet" : "3 Deceptions flagged on this page"}
        </p>
      </div>

      {/* Action Button */}
      <div className="space-y-2">
        <button
          onClick={() => setScore(prev => (prev === 0 ? 70 : 0))}
          className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white rounded-lg text-sm font-semibold transition shadow"
        >
          {score === 0 ? "Test Scan Page" : "Reset Score"}
        </button>
      </div>
    </div>
  );
}
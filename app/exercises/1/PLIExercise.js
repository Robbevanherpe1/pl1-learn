"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function PLIExercise() {
  const [userCode, setUserCode] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const correctPLIAnswer = `
DECLARE SUM FIXED BIN(15);
SUM = 2 + 2;
PUT SKIP LIST('The sum is:', SUM);
  `;

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 text-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">PL/I Code Exercise</h2>
      <p className="mb-4">
        Write a PL/I program that adds 2 + 2 and displays the result.
      </p>

      <div className="flex flex-row gap-8">
        {/* User Input Code Editor */}
        <div className="w-2/3"> {/* Adjusted width for larger input area */}
          <h3 className="text-lg font-semibold mb-2">Your Code</h3>
          <CodeMirror
            value={userCode}
            height="300px" /* Increased height */
            extensions={[javascript()]}
            onChange={(value) => setUserCode(value)}
            theme="dark"
            className="rounded-lg"
          />
        </div>

        {/* Correct Answer Display */}
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2">Correct Answer</h3>
          {!showAnswer ? (
            <button
              onClick={toggleShowAnswer}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Show Answer
            </button>
          ) : (
            <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                <code className="pl1-syntax">{correctPLIAnswer}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .pl1-syntax {
          font-family: monospace;
          color: #d1d5db;
        }
        .pl1-syntax .keyword {
          color: #a855f7;
        }
        .pl1-syntax .number {
          color: #f59e0b;
        }
      `}</style>
    </div>
  );
}

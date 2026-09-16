import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [checkType, changeType] = useState<QuestionType>(
        "short_answer_question",
    );
    return (
        <div>
            <Button
                onClick={() => {
                    changeType(
                        checkType === "short_answer_question" ?
                            "multiple_choice_question"
                        :   "short_answer_question",
                    );
                }}
            >
                Change Type
            </Button>
            <p>
                {checkType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>
        </div>
    );
}

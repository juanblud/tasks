import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [response, setResponse] = useState<string>("");

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label> Answer: </Form.Label>
                <Form.Control value={response} onChange={updateResponse} />
            </Form.Group>
            <span>{response === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}

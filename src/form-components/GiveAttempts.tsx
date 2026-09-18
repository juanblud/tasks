import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setRequestedAttempts(event.target.value);
    }

    function gainAttempts(): void {
        const amount = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setAttempts(amount + attempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p> Attempts Left: {attempts}</p>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
            <Form.Group controlId="requestedAttempts">
                <Form.Label> Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}

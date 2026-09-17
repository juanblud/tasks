import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    return (
        <div>
            <p>Two Dice</p>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>
            <p data-testid="left-die">Left Die: {leftDie}</p>
            <p data-testid="right-die">Right Die: {rightDie}</p>

            {leftDie === 1 && rightDie === 1 && <p>Lose </p>}
            {leftDie === rightDie && leftDie !== 1 && <p>Win</p>}
        </div>
    );
}

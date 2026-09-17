import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisble] = useState<boolean>(false);
    return (
        <div>
            <p> Click to Reveal Answer</p>
            <Button
                onClick={() => {
                    setVisble(!visible);
                }}
            >
                Reveal Answer
            </Button>

            {visible && <p>42</p>}
        </div>
    );
}

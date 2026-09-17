import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisble] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setVisble(!visible);
                }}
            >
                Reveal Answer
            </Button>

            {visible && <span>42</span>}
        </div>
    );
}

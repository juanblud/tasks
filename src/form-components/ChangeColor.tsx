import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("crimson");
    const colors: string[] = [
        "crimson",
        "orchid",
        "coral",
        "navy",
        "gold",
        "teal",
        "slategray",
        "limegreen",
    ];
    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((c) => (
                <Form.Check inline key={c} type="radio">
                    <Form.Check.Input
                        type="radio"
                        value={c}
                        checked={color === c}
                        onChange={() => {
                            setColor(c);
                        }}
                    />
                    <Form.Check.Label style={{ backgroundColor: c }}>
                        {c}
                    </Form.Check.Label>
                </Form.Check>
            ))}

            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </p>
        </div>
    );
}

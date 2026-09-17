import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Valentines"
    | "Christmas"
    | "Thanksgiving"
    | "Halloween"
    | "New Years";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setHoliday] = useState<Holiday>("Christmas");
    function nextInYear(current: Holiday): Holiday {
        if (current === "Valentines") {
            return "Halloween";
        }

        if (current === "Halloween") {
            return "Thanksgiving";
        }
        if (current === "Thanksgiving") {
            return "Christmas";
        }

        if (current === "Christmas") {
            return "New Years";
        }

        return "Valentines";
    }

    function nextAlphabetically(current: Holiday): Holiday {
        if (current === "Valentines") {
            return "Christmas";
        }
        if (current === "Christmas") {
            return "Halloween";
        }
        if (current === "Halloween") {
            return "New Years";
        }

        if (current === "New Years") {
            return "Thanksgiving";
        }

        return "Valentines";
    }

    function setEmoji(current: Holiday): string {
        if (current === "Valentines") {
            return "💖";
        }

        if (current === "Christmas") {
            return "🎅";
        }

        if (current === "Thanksgiving") {
            return "🦃";
        }

        if (current === "Halloween") {
            return "👻";
        }

        return "🥳";
    }

    return (
        <div>
            <p>Cycle Through Holidays</p>
            <Button
                onClick={() => {
                    setHoliday(nextAlphabetically(currentHoliday));
                }}
            >
                Advance by Alphabetical Order
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextInYear(currentHoliday));
                }}
            >
                Advance by Order in Year
            </Button>
            <p>Current Holiday: {setEmoji(currentHoliday)}</p>
        </div>
    );
}

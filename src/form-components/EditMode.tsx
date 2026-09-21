import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            <p className="d-flex justify-content-center">
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event) => {
                        setEditMode(event.target.checked);
                    }}
                />
            </p>
            {!editMode && (
                <p>
                    {isStudent ?
                        `${name} is a student`
                    :   `${name} is not a
                    student`
                    }
                </p>
            )}
            {editMode && (
                <Form>
                    <Form.Control
                        className="text-center"
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    ></Form.Control>
                    <p className="d-flex justify-content-center">
                        <Form.Check
                            id="student"
                            type="checkbox"
                            label="student"
                            checked={isStudent}
                            onChange={(event) => {
                                setIsStudent(event.target.checked);
                            }}
                        />
                    </p>
                </Form>
            )}
        </div>
    );
}

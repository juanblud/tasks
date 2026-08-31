import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    function logHelloWorld(): void {
        console.log("Hello World!");
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p className="StudentName">Juan Rodriguez</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kIhv15XaX_PtNkKwvNBIOsHPUn9AMydkYITPE86hLQ&s"
                alt="Kuromi"
            />
            <ul>
                <li>Pizza</li>
                <li>Pasta</li>
                <li>Alfredo</li>
            </ul>
            <Button onClick={logHelloWorld}>Log Hello World</Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

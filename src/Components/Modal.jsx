import React, { useState } from "react";
import './styles/modal.css'
export default function Modal() {

    const [modalClass, setModalClass] = useState("");

    const handleClick = (buttonId) => {
        setModalClass(buttonId);
        document.body.classList.add("modal-active");
    };

    const closeModal = () => {
        setModalClass("out");
        document.body.classList.remove("modal-active");
    };
    return (
        <div>
            {/* Modal */}
            <div id="modal-container" className={modalClass} onClick={closeModal}>
                <div className="modal-background">
                    <div className="modal">
                        <h2>I'm a Modal</h2>
                        <p>Hear me roar.</p>
                        <svg
                            className="modal-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                        >
                            <rect
                                x="0"
                                y="0"
                                fill="none"
                                width="226"
                                height="162"
                                rx="3"
                                ry="3"
                            ></rect>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="frame">
                <header>
                    {/* <h2>Save These</h2> */}
                    <h1 >CSS Modals</h1>
                    <h2 >with animations</h2>
                </header>

                {/* Button Grid */}
                <div className="button-grid">
                    <div className="button-item">
                        <button type="button" onClick={() => handleClick("one")}>
                            Unfolding
                        </button>
                    </div>
                    <div className="button-item">
                        <button type="button" onClick={() => handleClick("two")}>
                            Revealing
                        </button>
                    </div>
                    <div className="button-item">
                        <button type="button" onClick={() => handleClick("six")}>
                            Sketch
                        </button>
                    </div>
                    <div className="button-item">
                        <button type="button" onClick={() => handleClick("side")}>
                            Side
                        </button>
                    </div>
                    <div className="button-item">
                        <button type="button" onClick={() => handleClick("five")}>
                            Speedy
                        </button>
                    </div>
                    <div className="button-item">
                        <button type="button" onClick={() => handleClick("seven")}>
                            Bond
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}


// learnt from Lun Dev @ https://youtu.be/yqaLSlPOUxM?si=4h3QQuuh5Gbps24-
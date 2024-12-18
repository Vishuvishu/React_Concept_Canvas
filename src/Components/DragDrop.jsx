import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles/dragdrop.css";

// Card Component
const Card = ({ id, text }) => {
    const [, drag] = useDrag(() => ({
        type: "CARD",
        item: { id },
    }));

    return (
        <div ref={drag} className="card">
            {text}
        </div>
    );
};

// Column Component
const Column = ({ id, cards, addCard, moveCard }) => {
    const [, drop] = useDrop(() => ({
        accept: "CARD",
        drop: (item) => moveCard(item.id, id),
    }));

    const handleAddCard = () => {
        const newCardText = prompt("Enter the card content:");
        if (newCardText) {
            addCard(id, newCardText);
        }
    };

    return (
        <div ref={drop} className="column">
            <h3>Column {id + 1}</h3>
            {cards.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} />
            ))}
            <button onClick={handleAddCard}>Add Card</button>
        </div>
    );
};

// Main Board Component
const Board = () => {
    const [columns, setColumns] = useState([
        [{ id: 1, text: "Card 1" }, { id: 2, text: "Card 2" }], // Column 1
        [{ id: 3, text: "Card 3" }], // Column 2
        [{ id: 4, text: "Card 4" }], // Column 3
    ]);

    const addCard = (columnIndex, text) => {
        setColumns((prevColumns) => {
            const newColumns = [...prevColumns];
            newColumns[columnIndex] = [
                ...newColumns[columnIndex],
                { id: Date.now(), text },
            ];
            return newColumns;
        });
    };

    const moveCard = (cardId, targetColumnIndex) => {
        setColumns((prevColumns) => {
            let cardToMove = null;

            // Remove the card from its current column
            const updatedColumns = prevColumns.map((cards) =>
                cards.filter((card) => {
                    if (card.id === cardId) {
                        cardToMove = card; // Store the card to move
                        return false;
                    }
                    return true;
                })
            );

            // If the card is found, add it to the target column
            if (cardToMove) {
                updatedColumns[targetColumnIndex] = [
                    ...updatedColumns[targetColumnIndex],
                    cardToMove,
                ];
            }

            // Log the updated columns
            console.log("Updated Columns:", updatedColumns);

            return updatedColumns;
        });
    };

    const handleSave = async () => {
        // Example: Send the columns data to an API
        console.log("Columns Data to Save:", columns);

        // Uncomment the following code to send data to an API
        // try {
        //     const response = await fetch("https://example.com/api/save-columns", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({ columns }),
        //     });
        //     const result = await response.json();
        //     alert("Data saved successfully!");
        // } catch (error) {
        //     console.error("Error saving data:", error);
        // }
    };

    return (
        <div>
            <div className="board">
                {columns.map((cards, index) => (
                    <Column
                        key={index}
                        id={index}
                        cards={cards}
                        addCard={addCard}
                        moveCard={moveCard}
                    />
                ))}
            </div>
            <button className="save-button" onClick={handleSave}>
                Save Columns Data
            </button>
        </div>
    );
};

export default function DragDrop() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Board />
        </DndProvider>
    );
}

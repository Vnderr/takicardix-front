import React from "react";
import DynamicTexts from "../molecules/DynamicTexts";
import Image from "../atoms/Image";

function CardsDisplay({ content = [], className = "p-4", isCardList = false }) {
    return (
        <div className={className}>
            <div
                className={
                    isCardList
                        ? "flex flex-col gap-6 max-w-6xl mx-auto"
                        : "grid grid-cols-1 md:grid-cols-3 gap-4"
                }
            >
                {content.map((item, index) => (
                    <div
                        key={index}
                        className={
                            isCardList
                                ? "flex flex-col sm:flex-row items-start border p-4 rounded-lg shadow-md"
                                : "border p-4 rounded-lg shadow-md"
                        }
                    >
                        {item.card.map((element, idx) => {
                            if (element.type === "image") {
                                return (
                                    <img
                                        key={idx}
                                        src={element.src}
                                        alt={element.alt}
                                        className={
                                            isCardList
                                                ? "w-24 h-24 object-contain sm:mr-4 mb-4 sm:mb-0"
                                                : element.className
                                        }
                                    />
                                );
                            }
                            if (element.type === "text") {
                                return (
                                    <DynamicTexts
                                        key={idx}
                                        Texts={[element]}
                                        className={isCardList ? "flex-1" : ""}
                                    />
                                );
                            }
                            if (element.type === "button") {
                                return (
                                    <button
                                        key={idx}
                                        onClick={element.onClick}
                                        className={element.className || "btn btn-primary mt-2"}
                                    >
                                        {element.text}
                                    </button>
                                );
                            }
                            if (element.type === "list") {
                                return (
                                    <ul key={idx} className={element.className || "list-disc pl-5"}>
                                        {element.items.map((li, i) => (
                                            <li key={i}>{li}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (element.type === "iconRow") {
                                return (
                                    <div
                                        key={idx}
                                        className={`flex ${element.hasBottomBorder ? "pb-3 border-b border-[#E3E3E3]" : ""}`}
                                    >
                                        <div
                                            className={`flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md ${element.iconContainerClassName}`}
                                        >
                                            {element.icon}
                                        </div>
                                        <div className="text-left ml-2.5">
                                            <p className="text-xs text-gray-600">{element.title}</p>
                                            <p>{element.text}</p>
                                            {element.items && (
                                                <ul className="list-disc pl-5 mt-2">
                                                    {element.items.map((li, i) => (
                                                        <li key={i}>{li}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsDisplay;

import React, { useState } from "react";

export default function TextForm(props) {
  const isDarkMode = props.theme;

  const [text, setText] = useState("");
  const [selectedFontColour, setSelectedFontColour] = useState("Black");
  const [selectedColourOption, setSelectedColourOption] = useState("Black");
  const [selectedFontStyleOption, setSelectedFontStyleOption] = useState("Lugrasimo");
  const [isCopied, setIsCopied] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    italicChecked: false,
    boldChecked: false,
    underlineChecked: false
  });

  const ColourDropdown = () => {
    const handleColourOptionChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedColourOption(selectedValue);
      setSelectedFontColour(selectedValue);
    };

    return (
      <div>
        <p style={{ color: isDarkMode ? "white" : "black" }}>
          Select colour: {selectedColourOption}
        </p>
        <select
          value={selectedColourOption}
          onChange={handleColourOptionChange}
        >
          <option disabled value>
            --Select Font Colour--
          </option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
        </select>
      </div>
    );
  };

  const FontStyleDropdown = () => {
    const handleFontStyleOptionChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFontStyleOption(selectedValue);
    };

    return (
      <div>
        <p style={{ color: isDarkMode ? "white" : "black" }}>
          Select Font Style:
        </p>
        <select
          value={selectedFontStyleOption}
          onChange={handleFontStyleOptionChange}
        >
          <option disabled value>
            --Select Font Style--
          </option>
          <option value="Lugrasimo" className="Lugrasimo">
            Lugrasimo
          </option>
          <option value="lobster" className="lobster">
            Lobster
          </option>
          <option value="bungeeShade" className="bungeeShade">
            Bungee Shade
          </option>
          <option value="tektur" className="tektur">
            Tektur
          </option>
          <option value="anton" className="anton">
            Anton
          </option>
          <option value="waitingForTheSunrise" className="waitingForTheSunrise">
            Waiting for the Sunrise
          </option>
          <option value="akronim" className="akronim">
            Akronim
          </option>
          <option value="tangerine" className="tangerine">
            Tangerine
          </option>
        </select>
      </div>
    );
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName]
    });
  };

  const FontStylingCheckbox = () => {
    return (
      <div
        className="checkboxStyle"
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        <label>
          <input
            type="checkbox"
            checked={checkboxes.italicChecked}
            onChange={() => handleCheckboxChange("italicChecked")}
          />
          Italic
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkboxes.boldChecked}
            onChange={() => handleCheckboxChange("boldChecked")}
          />
          Bold
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkboxes.underlineChecked}
            onChange={() => handleCheckboxChange("underlineChecked")}
          />
          Underline
        </label>
      </div>
    );
  };

  const countWords = () => {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    return trimmedText === "" ? 0 : words.length;
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    if (selectedFontStyleOption === "bungeeShade") {
      alert("Lower case is not possible for selected Font Style");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalizeFirst = () => {
    if (selectedFontStyleOption === "bungeeShade") {
      alert("Lower case is not possible for selected Font Style");
      return;
    }
    const lowerText = text.toLowerCase();
    let words = lowerText.split(/\s/);
    const newWords = words.map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
    const newText = newWords.join(" ");
    setText(newText);
  };

  const handleExtraSpaces = () => {
    const trimmedText = text.trim();
    const removedSpaceText = trimmedText.split(/\s+/);
    const newText = removedSpaceText.join(" ");
    setText(newText);
  }

  const handleCopy = async () => {
    var textcopy = document.getElementById("textBox");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
    console.log("text copied ");

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleReset = () => {
    setText("");
    console.log("text cleared");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <div className="singleRow" style={{ marginBottom: "25px" }}>
          <ColourDropdown />
          <FontStyleDropdown />
        </div>
        <FontStylingCheckbox />
        <h4 style={{ color: isDarkMode ? "white" : "black" }}>
          {props.heading}
        </h4>
        <div className={selectedFontStyleOption}>
          <textarea
            className="form-control"
            value={text}
            style={{
              color: selectedFontColour,
              fontStyle: checkboxes.italicChecked ? "italic" : "",
              fontWeight: checkboxes.boldChecked ? "bold" : "",
              textDecorationLine: checkboxes.underlineChecked ? "underline" : "",
              fontSize: "25px",
              backgroundColor: isDarkMode ? "slategrey" : "whitesmoke"
            }}
            onChange={handleOnChange}
            id="textBox"
            rows="8"
          ></textarea>
        </div>
      </div>

      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to UPPERCASE
      </button>

      <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
        Convert to lowercase
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleCapitalizeFirst}
      >
        Convert to Title Case
      </button>

      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
        Remove extra spaces
      </button>

      <button className="btn btn-primary mx-2 my-2" onClick={handleReset}>
        Reset Text
      </button>

      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        Copy Text
      </button>
      {isCopied && (
        <span style={{ color: isDarkMode ? "white" : "black" }}>
          Text Copied!
        </span>
      )}

      <h4 style={{ color: isDarkMode ? "white" : "black" }}>
        Your text summary:
      </h4>
      <p style={{ color: isDarkMode ? "white" : "black" }}>
        No. of word(s) = {countWords()}
      </p>
      <p style={{ color: isDarkMode ? "white" : "black" }}>
        No. of character(s) = {text.length}
      </p>
    </div>
  );
}

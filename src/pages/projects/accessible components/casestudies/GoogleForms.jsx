const GoogleForms = {
  title: "Google Forms",
  mouseImages: [
    {
      src: "/images/FormsDefault.png",
      alt: "Forms Default State",
      description: "Forms Default State.",
    },
    {
      src: "/images/FormsMouseHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/FormsMouseClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/FormsMouseTextfield.png",
      alt: "Checkbox with a textfield",
      description: "Checkbox with a textfield.",
    },
    {
      src: "/images/FormsMouseRequiredPopup.png",
      alt: "Popup indicating a required question",
      description: "Popup indicating a required question.",
    },

    // more images
  ],
  keyboardImages: [
    {
      src: "/images/FormsKeyboardHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/FormsKeyboardClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/FormsKeyboardTextfield.png",
      alt: "Checkbox with a textfield",
      description: "Checkbox with a textfield.",
    },
    {
      src: "/images/FormsKeyboardRequiredPopup.png",
      alt: "Popup indicating a required question",
      description: "Popup indicating a required question.",
    },

    // more images
  ],
  mobileImages: [
    {
      src: "/images/FormsMobileDefault.png",
      alt: "Mobile Default State",
      description: "Mobile Default State.",
    },
    {
      src: "/images/FormsMobileClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/FormsMobileTextfield.png",
      alt: "Checkbox with a textfield",
      description: "Checkbox with a textfield.",
    },

    // more images
  ],
  firstChartRow1: {
    left: "Mouse / Touchpad",
    right: ["Aesthetically pleasing with color theme matching"],
  },
  firstChartRow2: {
    left: "Keyboard",
    right: [
      "Accessible through tab",
      "The enter button does not work to check the checkbox, instead it is space which is not intuitive",
    ],
  },
  firstChartRow3: {
    left: "Touch",
    right: ["Same look and functionality on mobile"],
  },
  secondChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Hover:A darker circle appears encapsulating the check box indicating the hovered area",
      "Click: The box turns the theme color",
      "Click: A check appears in the box",
      "Click: The dark circle persists",
    ],
  },
  secondChartRow2: {
    left: "Keyboard",
    right: [
      "Focus order makes complete sense as you move throughout the form",
      "Voiceover for each box:",
      "“Option 1, unchecked, checkbox, list Untitled Question Required question 4 items, level 2 Required”",
      "“Option 2, unchecked, checkbox”",
      "“Option 3, unchecked, checkbox”",
      "“Other:, unchecked, checkbox”",
      "“Other response, edit text”",
    ],
  },
  secondChartRow3: {
    left: "Touch",
    right: [
      "Click: A darker circle appears encapsulating the check box indicating the selected area",
      "Click: The box turns the theme color",
      "Click: A check appears in the box",
    ],
  },
};

export default GoogleForms;

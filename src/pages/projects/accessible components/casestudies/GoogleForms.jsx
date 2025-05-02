const GoogleForms = {
  title: "Google Forms",
  mouseImages: [
    {
      src: "/images/accessible components/FormsDefault.png",
      alt: "Forms Default State",
      description: "Forms Default State.",
    },
    {
      src: "/images/accessible components/FormsMouseHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/accessible components/FormsMouseClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/accessible components/FormsMouseTextfield.png",
      alt: "Checkbox with a textfield",
      description: "Checkbox with a textfield.",
    },
    {
      src: "/images/accessible components/FormsMouseRequiredPopup.png",
      alt: "Popup indicating a required question",
      description: "Popup indicating a required question.",
    },

    // more images
  ],
  keyboardImages: [
    {
      src: "/images/accessible components/FormsKeyboardHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/accessible components/FormsKeyboardClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/accessible components/FormsKeyboardTextfield.png",
      alt: "Checkbox with a textfield",
      description: "Checkbox with a textfield.",
    },
    {
      src: "/images/accessible components/FormsKeyboardRequiredPopup.png",
      alt: "Popup indicating a required question",
      description: "Popup indicating a required question.",
    },

    // more images
  ],
  mobileImages: [
    {
      src: "/images/accessible components/FormsMobileDefault.png",
      alt: "Mobile Default State",
      description: "Mobile Default State.",
    },
    {
      src: "/images/accessible components/FormsMobileClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/accessible components/FormsMobileTextfield.png",
      alt: "Checkbox with a textfield",
      description: "Checkbox with a textfield.",
    },

    // more images
  ],
  firstChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Visually clean and matches form color theme",
      "Easy and intuitive to click",
    ],
  },
  firstChartRow2: {
    left: "Keyboard",
    right: [
      "Navigable via tab",
      "Only spacebar checks boxes, not enter (non-intuitive)",
    ],
  },
  firstChartRow3: {
    left: "Touch",
    right: [
      "Mobile version looks and behaves the same",
      "Easy to tap with clear visual feedback",
    ],
  },

  secondChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Hover shows a dark circle; click fills with theme color",
      "Checkmark appears clearly inside the circle",
    ],
  },
  secondChartRow2: {
    left: "Keyboard",
    right: [
      "Logical focus order across items",
      "Screen reader announces full label and checkbox state",
    ],
  },
  secondChartRow3: {
    left: "Touch",
    right: [
      "Tap fills checkbox with theme color and checkmark",
      "Touch response mirrors mouse interaction",
    ],
  },
};

export default GoogleForms;

const Notion = {
  title: "Notion",
  mouseImages: [
    {
      src: "/images/accessible components/NotionDefault.png",
      alt: "Notion Default State",
      description: "Notion Default State.",
    },
    {
      src: "/images/accessible components/NotionMouseHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/accessible components/NotionMouseClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/accessible components/NotionMouseHoverAfterClick.png",
      alt: "Checkbox hovered after being clicked",
      description: "Checkbox hovered after being clicked.",
    },

    // more images
  ],
  keyboardImages: [
    {
      src: "/images/accessible components/NotionKeyboardHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/accessible components/NotionKeyboardClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },

    // more images
  ],
  mobileImages: [
    {
      src: "/images/accessible components/NotionMobileDefault.png",
      alt: "Mobile Default State",
      description: "Mobile Default State.",
    },
    {
      src: "/images/accessible components/NotionMobileClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },

    // more images
  ],
  firstChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Clean and minimal interaction",
      "Click triggers animation for feedback",
    ],
  },
  firstChartRow2: {
    left: "Keyboard",
    right: [
      "Fully accessible via tab and enter",
      "No animation on keyboard toggle",
    ],
  },
  firstChartRow3: {
    left: "Touch",
    right: [
      "Same appearance and behavior as desktop",
      "Responsive and easy to tap",
    ],
  },

  secondChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Hover shows grey shadow; click turns box blue",
      "Checkmark appears, shadow fades out",
    ],
  },
  secondChartRow2: {
    left: "Keyboard",
    right: [
      "Logical focus order across fields",
      "Screen reader clearly announces checkbox state",
    ],
  },
  secondChartRow3: {
    left: "Touch",
    right: ["Tap turns box blue", "Checkmark appears inside the box"],
  },
};

export default Notion;

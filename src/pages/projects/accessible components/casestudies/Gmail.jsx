const Gmail = {
  title: "Gmail",
  mouseImages: [
    {
      src: "/images/accessible components/GmailDefault.png",
      alt: "Gmail Default State",
      description: "Gmail Default State.",
    },
    {
      src: "/images/accessible components/GmailMouseHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/accessible components/GmailMouseClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/accessible components/GmailSelectAllMouseHover.png",
      alt: "Select-all checkbox on hover",
      description: "Select-all checkbox on hover.",
    },
    {
      src: "/images/accessible components/GmailSelectAllMouseClick.png",
      alt: "Select-all checkbox on click",
      description: "Select-all checkbox on click.",
    },
    // more images
  ],
  keyboardImages: [
    {
      src: "/images/accessible components/GmailKeyboardHover.png",
      alt: "Select-all checkbox on hover",
      description: "Select-all checkbox on hover.",
    },
    {
      src: "/images/accessible components/GmailKeyboardClick.png",
      alt: "Select-all checkbox on click",
      description: "Select-all checkbox on click.",
    },
    // more images
  ],
  mobileImages: [
    {
      src: "/images/accessible components/GmailMobileDefault.png",
      alt: "Select-all checkbox on click",
      description: "Gmail Default State.",
    },
    {
      src: "/images/accessible components/GmailMobileClick.png",
      alt: "Select-all checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/accessible components/GmailMobileSelectAll.png",
      alt: "Select-all checkbox on click",
      description: "Select-all checkbox on click.",
    },
    // more images
  ],
  firstChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Efficient for bulk selection",
      "Clear visual feedback when selecting emails",
    ],
  },
  firstChartRow2: {
    left: "Keyboard",
    right: [
      "Only 'Select All' is accessible",
      "No way to navigate to individual checkboxes via tab",
    ],
  },
  firstChartRow3: {
    left: "Touch",
    right: [
      "Not intuitive for new users",
      "Relies more on visual design than clear cues",
    ],
  },

  secondChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Hover shows a circle and 'Select' label",
      "Click highlights the email and checks the box",
    ],
  },
  secondChartRow2: {
    left: "Keyboard",
    right: [
      "Confusing focus order for 'Select All'",
      "Screen reader feedback is verbose and unclear",
    ],
  },
  secondChartRow3: {
    left: "Touch",
    right: [
      "Tap replaces profile picture with a check mark",
      "Selected email is highlighted in blue",
    ],
  },
};

export default Gmail;

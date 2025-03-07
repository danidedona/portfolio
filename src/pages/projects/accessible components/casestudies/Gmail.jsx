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
    right: ["Very efficient in terms of being able to select multiple emails"],
  },
  firstChartRow2: {
    left: "Keyboard",
    right: [
      "The only option available is to select all emails",
      "Individual emails checkboxes can not be checked or unchecked via tab",
    ],
  },
  firstChartRow3: {
    left: "Touch",
    right: ["Not as intuitive but is more aesthetically pleasing"],
  },
  secondChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Hover: A darker circle appears encapsulating the check box indicating the hovered area",
      "Hover: A tag saying “select appears”",
      "Click: A check appears in the box",
      "Click: The dark circle persists",
      "Click: The emails is highlighted blue indicating it was selected",
    ],
  },
  secondChartRow2: {
    left: "Keyboard",
    right: [
      "The focus order is a bit confusing for those who can not see as the “Select all” button only appears after the “More” tab under “Labels”",
      "Voiceover for select all button: “Select, menu pop up, button, main”",
      "Voiceover for dropdown select all button: “You are currently in a menu”",
    ],
  },
  secondChartRow3: {
    left: "Touch",
    right: [
      "Click: Blue check mark replaces the email sender's profile picture",
      "Click: The email is highlighted blue",
    ],
  },
};

export default Gmail;

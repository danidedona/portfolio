const Gmail = {
  title: "Gmail",
  mouseImages: [
    {
      src: "/images/GmailDefault.png",
      alt: "Gmail Default State",
      description: "Gmail Default State.",
    },
    {
      src: "/images/GmailMouseHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/images/GmailMouseClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/GmailSelectAllMouseHover.png",
      alt: "Select-all checkbox on hover",
      description: "Select-all checkbox on hover.",
    },
    {
      src: "/images/GmailSelectAllMouseClick.png",
      alt: "Select-all checkbox on click",
      description: "Select-all checkbox on click.",
    },
    // more images
  ],
  keyboardImages: [
    {
      src: "/images/GmailKeyboardHover.png",
      alt: "Select-all checkbox on hover",
      description: "Select-all checkbox on hover.",
    },
    {
      src: "/images/GmailKeyboardClick.png",
      alt: "Select-all checkbox on click",
      description: "Select-all checkbox on click.",
    },
    // more images
  ],
  mobileImages: [
    {
      src: "/images/GmailMobileDefault.png",
      alt: "Select-all checkbox on click",
      description: "Gmail Default State.",
    },
    {
      src: "/images/GmailMobileClick.png",
      alt: "Select-all checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/images/GmailMobileSelectAll.png",
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

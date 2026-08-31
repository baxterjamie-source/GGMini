// GG Mini — shared UI text for the win screen / high-score flow.
// Edit the strings below to change the wording across every puzzle page at once.
// Loaded by each puzzle page via <script src="messages.js"></script> before its main script.
window.GG_MESSAGES = {
  winTitle: "You solved it!",
  winTime: (t) => `Your time: ${t}`,
  initialsLabel: "Enter your initials",
  initialsPlaceholder: "AAA",
  saveButton: "Save",
  savingText: "Saving…",
  savedText: "Score saved!",
  alreadyLoggedText: "Score already logged (first solve only).",
  invalidInitialsText: "Enter exactly 3 letters.",
  saveErrorText: "Couldn't save — check your connection and try again.",
  leaderboardLinkText: "View full leaderboard →",
  closeButtonText: "Close"
};

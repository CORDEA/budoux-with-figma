const text = figma.currentPage.selectedTextRange;
if (!text) {
  figma.closePlugin();
}

async function updateText() {
  const font = text.node.fontName;
  await figma.loadFontAsync(font as FontName);

  const rawText = text.node.characters;
  text.node.characters = rawText;
  figma.closePlugin();
}

updateText();

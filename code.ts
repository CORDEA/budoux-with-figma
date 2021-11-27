const text = figma.currentPage.selectedTextRange;
if (!text) {
  figma.closePlugin();
}

const rawText = text.node.characters;
figma.closePlugin();

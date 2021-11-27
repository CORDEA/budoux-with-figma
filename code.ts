import { loadDefaultJapaneseParser } from 'budoux';

function updateText(node: TextNode) {
  const parser = loadDefaultJapaneseParser();
  const rawText = node.characters;
  node.characters = parser.parse(rawText).join('\n');
}

async function run() {
  const text = figma.currentPage.selectedTextRange;
  if (!text) {
    figma.closePlugin();
    return;
  }
  const font = text.node.fontName;
  await figma.loadFontAsync(font as FontName)
  updateText(text.node);
  figma.closePlugin();
}

run();

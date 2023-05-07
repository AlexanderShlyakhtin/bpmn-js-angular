import ReplaceMenuProvider from "./ReplaceMenuProvider";

export default {
  __depends__: ["popupMenu", "bpmnReplace"],
  __init__: ["replaceMenuProvider"],
  replaceMenuProvider: ["type", ReplaceMenuProvider]
};

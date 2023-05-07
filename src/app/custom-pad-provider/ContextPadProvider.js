export default class CustomContextPadProvider {
    constructor(contextPad) {
      contextPad.registerProvider(this);
    }
    getContextPadEntries(element) {
      return function (entries) {
        delete entries["append.gateway"];
        delete entries["append.intermediate-event"];
        delete entries["append.append-task"];

        return entries;
      };
    }
  }

  CustomContextPadProvider.$inject = ["contextPad"];

export default class CustomContextPadProvider {
    constructor(contextPad) {
      contextPad.registerProvider(this);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getContextPadEntries(element) {
      return function (entries) {
        delete entries["append.gateway"];
        delete entries["append.intermediate-event"];
        delete entries["append.append-task"];
  
  
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return entries;
      };
    }
  }
  
  CustomContextPadProvider.$inject = ["contextPad"];
  
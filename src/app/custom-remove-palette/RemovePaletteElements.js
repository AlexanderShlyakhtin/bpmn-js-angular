export default class RemovePaletteElements {
  constructor(eventBus, palette, translate) {
    this.eventBus = eventBus;
    palette.registerProvider(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPaletteEntries(element) {
    return function(entries) {
      delete entries["create.data-store"];
      delete entries["create.data-object"];
      delete entries["create.participant-expanded"];
      delete entries["create.group"];
      delete entries["create.task"];
      delete entries["create.subprocess-expanded"]
      delete entries["create.intermediate-event"];
      // delete entries["create.exclusive-gateway"];
      return entries;
    };
  }
}

RemovePaletteElements.$inject = [
  'eventBus',
  'palette',
  'translate'
];

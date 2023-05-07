export var START_EVENT = [
  {
    label: "Start Event",
    actionName: "replace-with-none-start",
    className: "bpmn-icon-start-event-none",
    target: {
      type: "bpmn:StartEvent"
    }
  },
  {
    label: "End Event",
    actionName: "replace-with-none-end",
    className: "bpmn-icon-end-event-none",
    target: {
      type: "bpmn:EndEvent"
    }
  }
];

// export var START_EVENT_SUB_PROCESS = [
//   {
//     label: "Start Event",
//     actionName: "replace-with-none-start",
//     className: "bpmn-icon-start-event-none",
//     target: {
//       type: "bpmn:StartEvent"
//     }
//   },
//   {
//     label: "End Event",
//     actionName: "replace-with-none-end",
//     className: "bpmn-icon-end-event-none",
//     target: {
//       type: "bpmn:EndEvent"
//     }
//   }
// ];

export var END_EVENT = [
  {
    label: "Start Event",
    actionName: "replace-with-none-start",
    className: "bpmn-icon-start-event-none",
    target: {
      type: "bpmn:StartEvent"
    }
  },
  {
    label: "End Event",
    actionName: "replace-with-none-end",
    className: "bpmn-icon-end-event-none",
    target: {
      type: "bpmn:EndEvent"
    }
  }
];

export var GATEWAY = [
  {
    label: "Gateway Decision",
    actionName: "replace-with-exclusive-gateway",
    className: "bpmn-icon-gateway-xor",
    target: {
      type: "bpmn:ExclusiveGateway"
    }
  },
  {
    label: "Gateway Parallel",
    actionName: "replace-with-parallel-gateway",
    className: "bpmn-icon-gateway-parallel",
    target: {
      type: "bpmn:ParallelGateway"
    }
  }
];

export var SUBPROCESS_EXPANDED = [
 /*  {
    label: "Transaction",
    actionName: "replace-with-transaction",
    className: "bpmn-icon-transaction",
    target: {
      type: "bpmn:Transaction",
      isExpanded: true
    }
  },
  {
    label: "Event Sub Process",
    actionName: "replace-with-event-subprocess",
    className: "bpmn-icon-event-subprocess-expanded",
    target: {
      type: "bpmn:SubProcess",
      triggeredByEvent: true,
      isExpanded: true
    }
  },
  {
    label: "Sub Process (collapsed)",
    actionName: "replace-with-collapsed-subprocess",
    className: "bpmn-icon-subprocess-collapsed",
    target: {
      type: "bpmn:SubProcess",
      isExpanded: false
    }
  } */
];

export var TRANSACTION = [
  {
    label: "Sub Process",
    actionName: "replace-with-subprocess",
    className: "bpmn-icon-subprocess-expanded",
    target: {
      type: "bpmn:SubProcess",
      isExpanded: true
    }
  },
  {
    label: "Event Sub Process",
    actionName: "replace-with-event-subprocess",
    className: "bpmn-icon-event-subprocess-expanded",
    target: {
      type: "bpmn:SubProcess",
      triggeredByEvent: true,
      isExpanded: true
    }
  }
];

export var EVENT_SUB_PROCESS = [
  {
    label: "Sub Process",
    actionName: "replace-with-subprocess",
    className: "bpmn-icon-subprocess-expanded",
    target: {
      type: "bpmn:SubProcess",
      isExpanded: true
    }
  },
  {
    label: "Transaction",
    actionName: "replace-with-transaction",
    className: "bpmn-icon-transaction",
    target: {
      type: "bpmn:Transaction",
      isExpanded: true
    }
  }
];

export var TASK = [
  // {
  //   label: "Communication Request",
  //   actionName: "replace-with-send-task",
  //   className: "bpmn-icon-send",
  //   target: {
  //     type: "bpmn:SendTask"
  //   }
  // },
  {
    label: "User Task",
    actionName: "replace-with-user-task",
    className: "bpmn-icon-user",
    target: {
      type: "bpmn:UserTask"
    }
  },
  // {
  //   label: "Generic Task",
  //   actionName: "replace-with-manual-task",
  //   className: "bpmn-icon-manual",
  //   target: {
  //     type: "bpmn:ManualTask"
  //   }
  // },
  // {
  //   label: "Questionnaire",
  //   actionName: "replace-with-rule-task",
  //   className: "bpmn-icon-business-rule",
  //   target: {
  //     type: "bpmn:BusinessRuleTask"
  //   }
  // },
  {
    label: "Service Task",
    actionName: "replace-with-service-task",
    className: "bpmn-icon-service",
    target: {
      type: "bpmn:ServiceTask"
    }
  },
  // {
  //   label: "Sub Process (expanded)",
  //   actionName: "replace-with-expanded-subprocess",
  //   className: "bpmn-icon-subprocess-expanded",
  //   target: {
  //     type: "bpmn:SubProcess",
  //     isExpanded: true
  //   }
  // }
];

export var EVENT_SUB_PROCESS_START_EVENT = [
  {
    label: "Message Start Event",
    actionName: "replace-with-message-start",
    className: "bpmn-icon-start-event-message",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:MessageEventDefinition"
    }
  },
  {
    label: "Timer Start Event",
    actionName: "replace-with-timer-start",
    className: "bpmn-icon-start-event-timer",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:TimerEventDefinition"
    }
  },
  {
    label: "Conditional Start Event",
    actionName: "replace-with-conditional-start",
    className: "bpmn-icon-start-event-condition",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:ConditionalEventDefinition"
    }
  },
  {
    label: "Signal Start Event",
    actionName: "replace-with-signal-start",
    className: "bpmn-icon-start-event-signal",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:SignalEventDefinition"
    }
  },
  {
    label: "Error Start Event",
    actionName: "replace-with-error-start",
    className: "bpmn-icon-start-event-error",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:ErrorEventDefinition"
    }
  },
  {
    label: "Escalation Start Event",
    actionName: "replace-with-escalation-start",
    className: "bpmn-icon-start-event-escalation",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:EscalationEventDefinition"
    }
  },
  {
    label: "Compensation Start Event",
    actionName: "replace-with-compensation-start",
    className: "bpmn-icon-start-event-compensation",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:CompensateEventDefinition"
    }
  },
  {
    label: "Message Start Event (non-interrupting)",
    actionName: "replace-with-non-interrupting-message-start",
    className: "bpmn-icon-start-event-non-interrupting-message",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:MessageEventDefinition",
      isInterrupting: false
    }
  },
  {
    label: "Timer Start Event (non-interrupting)",
    actionName: "replace-with-non-interrupting-timer-start",
    className: "bpmn-icon-start-event-non-interrupting-timer",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:TimerEventDefinition",
      isInterrupting: false
    }
  },
  {
    label: "Conditional Start Event (non-interrupting)",
    actionName: "replace-with-non-interrupting-conditional-start",
    className: "bpmn-icon-start-event-non-interrupting-condition",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:ConditionalEventDefinition",
      isInterrupting: false
    }
  },
  {
    label: "Signal Start Event (non-interrupting)",
    actionName: "replace-with-non-interrupting-signal-start",
    className: "bpmn-icon-start-event-non-interrupting-signal",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:SignalEventDefinition",
      isInterrupting: false
    }
  },
  {
    label: "Escalation Start Event (non-interrupting)",
    actionName: "replace-with-non-interrupting-escalation-start",
    className: "bpmn-icon-start-event-non-interrupting-escalation",
    target: {
      type: "bpmn:StartEvent",
      eventDefinitionType: "bpmn:EscalationEventDefinition",
      isInterrupting: false
    }
  }
];

export var SEQUENCE_FLOW = [
  {
    label: "Sequence Flow",
    actionName: "replace-with-sequence-flow",
    className: "bpmn-icon-connection"
  },
  {
    label: "Default Flow",
    actionName: "replace-with-default-flow",
    className: "bpmn-icon-default-flow"
  },
  {
    label: "Conditional Flow",
    actionName: "replace-with-conditional-flow",
    className: "bpmn-icon-conditional-flow"
  }
];

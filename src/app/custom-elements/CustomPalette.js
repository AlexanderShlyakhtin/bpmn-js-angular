export default class CustomPalette {
  constructor(bpmnFactory, create, elementFactory, palette, translate) {
    this.bpmnFactory = bpmnFactory;
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;
    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    const {
      create,
      elementFactory,
      translate
    } = this;

    function startCommunicationRequestCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:SendTask' }
      );
      create.start(event, serviceTaskShape);
    }

    function startMedicationRequestCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:UserTask' }
      );
      create.start(event, serviceTaskShape);
    }

    function startGenericTaskCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:ManualTask' }
      );
      create.start(event, serviceTaskShape);
    }

    function startQuestionnaireCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:BusinessRuleTask' }
      );
      create.start(event, serviceTaskShape);
    }

    function startServiceRequestCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:ServiceTask' }
      );
      create.start(event, serviceTaskShape);
    }
    function startUserRequestCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:UserTask' }
      );
      create.start(event, serviceTaskShape);
    }

    function startDecisionGatewayCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:ExclusiveGateway' }
      );
      create.start(event, serviceTaskShape);
    }
    function startParallelGatewayCreate(event) {
      var serviceTaskShape = elementFactory.create(
        'shape', { type: 'bpmn:ParallelGateway' }
      );
      create.start(event, serviceTaskShape);
    }

    return {
      // 'create.send-task': {
      //   group: 'activity',
      //   className: 'bpmn-icon-send',
      //   title: translate('Communication Request'),
      //   action: {
      //     dragstart: startCommunicationRequestCreate,
      //     click: startCommunicationRequestCreate
      //   }
      // },
      // 'create.service-user': {
      //   group: 'activity',
      //   className: 'bpmn-icon-user',
      //   title: translate('Medication Request'),
      //   action: {
      //     dragstart: startMedicationRequestCreate,
      //     click: startMedicationRequestCreate
      //   }
      // },
      // 'create.service-manual': {
      //   group: 'activity',
      //   className: 'bpmn-icon-manual',
      //   title: translate('Generic Task'),
      //   action: {
      //     dragstart: startGenericTaskCreate,
      //     click: startGenericTaskCreate
      //   }
      // },
      // 'create.service-business-rule': {
      //   group: 'activity',
      //   className: 'bpmn-icon-business-rule',
      //   title: translate('Questionnaire'),
      //   action: {
      //     dragstart: startQuestionnaireCreate,
      //     click: startQuestionnaireCreate
      //   }
      // },
      'create.user-task': {
        group: 'activity',
        className: 'bpmn-icon-user',
        title: translate('Task User'),
        action: {
          dragstart: startUserRequestCreate,
          click: startUserRequestCreate
        }
      },
      'create.service-task': {
        group: 'activity',
        className: 'bpmn-icon-service',
        title: translate('Task Service'),
        action: {
          dragstart: startServiceRequestCreate,
          click: startServiceRequestCreate
        }
      },
      'create.exclusive-gateway': {
        group: 'activity',
        className: 'bpmn-icon-gateway-xor',
        title: translate('Gateway Decision'),
        action: {
          dragstart: startDecisionGatewayCreate,
          click: startDecisionGatewayCreate
        }
      },
      'create.parallel-gateway': {
        group: 'activity',
        className: 'bpmn-icon-gateway-parallel',
        title: translate('Gateway Parallel'),
        action: {
          dragstart: startParallelGatewayCreate,
          click: startParallelGatewayCreate
        }
      }
    };
  }
}

CustomPalette.$inject = [
  'bpmnFactory',
  'create',
  'elementFactory',
  'palette',
  'translate'
];

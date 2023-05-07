import {ProcessObjectEnum} from '../process-object.enum';

export default class CustomPrinceContextPad {
  constructor(bpmnFactory, config, contextPad, create, elementFactory, injector, translate) {
    this.bpmnFactory = bpmnFactory;
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get('autoPlace', false);
    }

    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    const {
      autoPlace,
      bpmnFactory,
      create,
      elementFactory,
      translate
    } = this;

    function appendUserTask() {
      return function (event, element) {
        if (autoPlace) {
          const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_USERTASK);

          const shape = elementFactory.createShape({
            type: ProcessObjectEnum.BPMN_USERTASK,
            // eslint-disable-next-line object-shorthand
            businessObject: businessObject
          });

          autoPlace.append(element, shape);
        } else {
          this.appendUserTaskStart(event, element);
        }
      };
    }

    function appendUserTaskStart() {
      return function (event) {
        const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_USERTASK);

        const shape = elementFactory.createShape({
          type: ProcessObjectEnum.BPMN_USERTASK,
          businessObject: businessObject
        });

        create.start(event, shape, element);
      };
    }

    function appendServiceTask() {
      return function (event, element) {
        if (autoPlace) {
          const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_SERVICE_TASK);

          const shape = elementFactory.createShape({
            type: ProcessObjectEnum.BPMN_SERVICE_TASK,
            // eslint-disable-next-line object-shorthand
            businessObject: businessObject
          });

          autoPlace.append(element, shape);
        } else {
          this.appendUserTaskStart(event, element);
        }
      };
    }

    function appendServiceTaskStart() {
      return function (event) {
        const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_USERTASK);

        const shape = elementFactory.createShape({
          type: ProcessObjectEnum.BPMN_USERTASK,
          businessObject: businessObject
        });

        create.start(event, shape, element);
      };
    }

    function appendDecisionGatewayRequest() {
      return function (event, element) {
        if (autoPlace) {
          const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_EXCLUSIVE_GATEWAY);

          const shape = elementFactory.createShape({
            type: ProcessObjectEnum.BPMN_EXCLUSIVE_GATEWAY,
            // eslint-disable-next-line object-shorthand
            businessObject: businessObject
          });

          autoPlace.append(element, shape);
        } else {
          this.appendDecisionGatewayRequestStart(event, element);
        }
      };
    }

    function appendDecisionGatewayRequestStart() {
      return function (event) {
        const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_USERTASK);

        const shape = elementFactory.createShape({
          type: ProcessObjectEnum.BPMN_USERTASK,
          businessObject: businessObject
        });

        create.start(event, shape, element);
      };
    }

    function appendParallelGatewayRequest() {
      return function (event, element) {
        if (autoPlace) {
          const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_PARALLEL_GATEWAY);

          const shape = elementFactory.createShape({
            type: ProcessObjectEnum.BPMN_PARALLEL_GATEWAY,
            // eslint-disable-next-line object-shorthand
            businessObject: businessObject
          });

          autoPlace.append(element, shape);
        } else {
          this.appendParallelGatewayRequestStart(event, element);
        }
      };
    }

    function appendParallelGatewayRequestStart() {
      return function (event) {
        const businessObject = bpmnFactory.create(ProcessObjectEnum.BPMN_USERTASK);

        const shape = elementFactory.createShape({
          type: ProcessObjectEnum.BPMN_USERTASK,
          businessObject: businessObject
        });

        create.start(event, shape, element);
      };
    }



    return {
      'append.service-manual': {
        group: 'model',
        className: 'bpmn-icon-user',
        title: translate('User Task'),
        action: {
          click: appendUserTask(),
          dragstart: appendUserTaskStart()
        }
      },
      'append.service-user': {
        group: 'model',
        className: 'bpmn-icon-service',
        title: translate('Service Task'),
        action: {
          click: appendServiceTask(),
          dragstart: appendServiceTaskStart()
        }
      },
      'append.service-gateway-xor': {
        group: 'model',
        className: 'bpmn-icon-gateway-xor',
        title: translate('Decision Gateway'),
        action: {
          click: appendDecisionGatewayRequest(),
          dragstart: appendDecisionGatewayRequestStart()
        }
      },
      'append.service-gateway-parallel': {
        group: 'model',
        className: 'bpmn-icon-gateway-parallel',
        title: translate('Parallel Gateway'),
        action: {
          click: appendParallelGatewayRequest(),
          dragstart: appendParallelGatewayRequestStart()
        }
      }
    }
  }
}

CustomPrinceContextPad.$inject = [
  'bpmnFactory',
  'config',
  'contextPad',
  'create',
  'elementFactory',
  'injector',
  'translate'
];

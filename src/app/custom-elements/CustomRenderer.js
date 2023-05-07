import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate
} from 'tiny-svg';

import {
  getRoundRectPath
} from 'bpmn-js/lib/draw/BpmnRenderUtil';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import { ProcessObjectEnum } from '../process-object.enum';

const HIGH_PRIORITY = 1500,
  TASK_BORDER_RADIUS = 2


export default class CustomRenderer extends BaseRenderer {
  constructor(eventBus, bpmnRenderer) {
    super(eventBus, HIGH_PRIORITY);
    this.bpmnRenderer = bpmnRenderer;
  }

  canRender(element) {
    // ignore labels
    return !element.labelTarget;
  }

  drawShape(parentNode, element) {
    const shape = this.bpmnRenderer.drawShape(parentNode, element);
    // Added Icon of Connector when Implementation Type is External or Connector
    if ((element.type === ProcessObjectEnum.BPMN_SERVICE_TASK &&
            element.businessObject.type === ProcessObjectEnum.BPMN_GENERAL) || (element.type === ProcessObjectEnum.BPMN_SERVICE_TASK
              && element.businessObject.type === ProcessObjectEnum.BPMN_CONNECTOR)) {
        var icon = svgCreate('image');
        svgAttr(icon, {
          href: "assets/connector-icon.jpg",
          x: 5,
          y: 55,
          width: 18,
          height: 18
        });
        svgAppend(parentNode, icon);
    }
    return shape;
  }


  getShapePath(shape) {
    if (is(shape, 'bpmn:Task')) {
      const test = getRoundRectPath(shape, TASK_BORDER_RADIUS);
      return test;
    }

    return this.bpmnRenderer.getShapePath(shape);
  }

}

CustomRenderer.$inject = ['eventBus', 'bpmnRenderer'];

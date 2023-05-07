import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import PaletteProvider from 'bpmn-js/lib/features/palette'
import CustomPadProvider from './custom-pad-provider';
import CustomMenuProvider from './custom-menu-provider';
import RemovePaletteElementsModule from './custom-remove-palette';
import CustomRenderModule from './custom-elements';
import FormPropertiesProvider from './custom-properties-panel/form-properties-provider';
import * as formModdleDescriptor from './custom-properties-panel/form-properties-provider/discriptors/FormModdleDescriptor.json';


import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule
} from 'bpmn-js-properties-panel';
import * as CamundaModdlePackage from 'camunda-bpmn-moddle/resources/camunda.json';

import {from, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('ref', { static: true }) private el: ElementRef;

  title = 'veda-bpmn-angular';

  bpmnModeler: BpmnJS;

  defaultXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0jwh7qa" targetNamespace="http://bpmn.io/schema/bpmn" xmlns:modeler="http://camunda.org/schema/modeler/1.0" exporter="Camunda Modeler" exporterVersion="5.10.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.19.0">\n' +
    '  <bpmn:process id="Process_0b3dkxb" isExecutable="true">\n' +
    '    <bpmn:startEvent id="StartEvent_1" />\n' +
    '  </bpmn:process>\n' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0b3dkxb">\n' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n' +
    '        <dc:Bounds x="179" y="159" width="36" height="36" />\n' +
    '      </bpmndi:BPMNShape>\n' +
    '    </bpmndi:BPMNPlane>\n' +
    '  </bpmndi:BPMNDiagram>\n' +
    '</bpmn:definitions>'

  constructor() {}

  ngOnInit(): void {
    this.bpmnModeler = this.mountBpmnModelerInCanvas();
    this.importXml(this.defaultXml);
    this.onImportDone();
  }


  private importXml(xml: string): void {
    this.importDiagram(xml).subscribe(
      (result) => {
        const warnings = result.warnings
        console.log(warnings)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  private mountBpmnModelerInCanvas() {
    return new BpmnModeler({
      container: '#js-canvas',
      propertiesPanel: {
        parent: '#properties'
      },
      keyboard: { bindTo: document },
      additionalModules: [
        CustomPadProvider,
        CustomMenuProvider,
        CustomRenderModule,
        RemovePaletteElementsModule,
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        FormPropertiesProvider,
        // CamundaPlatformPropertiesProviderModule
      ],
      // needed if you'd like to maintain camunda:XXX properties in the properties panel
      moddleExtensions: {
        form: formModdleDescriptor
        // camunda: CamundaModdlePackage
      }
    });
  }

  private onImportDone() {
    this.bpmnModeler.on('import.done', ({ error }) => {
      if (error) {
        console.error('--- Failed to render diagram'.concat(error), 'x', 'info');
      }
      else {
        this.bpmnModeler.attachTo(this.el?.nativeElement);
        this.bpmnModeler.get('canvas').zoom('fit-viewport');
        console.log("OK");
      }
    });
  }
  private importDiagram(xml: string): Observable<{ warnings: Array<any> }> {
    return from(this.bpmnModeler.importXML(xml) as Promise<{ warnings: Array<any> }>);
  }

  saveDiagram() {
    this.bpmnModeler.saveXML().then(xml => console.log(xml));
  }
}

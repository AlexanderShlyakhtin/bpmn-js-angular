/**
 * Enum for all objects of process
 * consumed by this application
 *
 * @author 2038
 * @version 1.0
 */
 export enum ProcessObjectEnum {
  BPMN_PROCESS = 'bpmn:Process',
  BPMN_START_EVENT = 'bpmn:StartEvent',
  BPMN_PARTICIPANT = 'bpmn:Participant',
  BPMN_USERTASK = 'bpmn:UserTask',
  BPMN_USERTASK_2 = 'bpmn2:UserTask',
  BPMN2_TASK = 'bpmn2:Task',
  BPMN_TASK = 'bpmn:Task',
  BPMN_END_EVENT = 'bpmn:EndEvent',
  BPMN_TEXT_ANNOTATION = 'bpmn:TextAnnotation',
  BPMN_SEQUENCE_FLOW = 'bpmn:SequenceFlow',
  BPMN_ASSOCIATION = 'bpmn:Association',
  BPMN_DATA_STORE_REFERENCE = 'bpmn:DataStoreReference',
  BPMN_EXCLUSIVE_GATEWAY = 'bpmn:ExclusiveGateway',
  BPMN_PARALLEL_GATEWAY = 'bpmn:ParallelGateway',
  BPMN_BUSINESS_RULE_TASK = 'bpmn:BusinessRuleTask',
  BPMN_SERVICE_TASK = 'bpmn:ServiceTask',
  BPMN_GENERAL = 'general',
  BPMN_CONNECTOR = 'connector',
  BPMN_SUB_PROCESS = 'bpmn:SubProcess',
  BPMN_MANUAL_TASK = 'bpmn:ManualTask',
  BPMN_SEND_TASK = 'bpmn:SendTask',
  BPMN_ACTIVITY_OBJ = 'Activity_'
}

export enum TaskName {
  COMUNICATION_REQUEST = 'CommunicationRequest',
  MEDICATION_REQUEST = 'MedicationRequest',
  SERVICE_REQUEST = 'ServiceRequest',
}

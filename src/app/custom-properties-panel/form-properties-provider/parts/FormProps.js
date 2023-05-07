import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';

export default function(element) {

  return [
    {
      id: 'spell',
      element,
      component: Form,
      isEdited: isTextFieldEntryEdited
    }
  ];
}

function Form(props) {
  const { element, id } = props;

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return element.businessObject.form || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      form: value
    });
  }

  return TextFieldEntry({
    id: id,
    element: element,
    description: translate('Form Setting'),
    label: translate('Form Setting'),
    getValue: getValue,
    setValue: setValue,
    debounce: debounce
  })

  // <TextFieldEntry
  //   id={ id }
  //   element={ element }
  //   description={ translate('Form Setting') }
  //   label={ translate('') }
  //   getValue={ getValue }
  //   setValue={ setValue }
  //   debounce={ debounce }/>
}

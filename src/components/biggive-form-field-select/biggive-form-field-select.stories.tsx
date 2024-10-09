const args = {
  backgroundColour: 'grey',
  options: JSON.stringify(
    [
      { label: '10%', value: '10' },
      { label: 'Default 12%', value: 'default' },
    ],
    null,
    0,
  ),
  prompt: 'Select a percentage',
  selectedText: 'Default 12%',
  selectedValue: 'default',
  selectStyle: 'bordered',
};

export default {
  title: 'Components/Forms',
  args,
  argTypes: {
    backgroundColour: {
      control: 'radio',
      options: ['white', 'grey'],
    },
    options: { name: 'Options', control: 'text' },
    prompt: { control: 'text' },
    selectedText: { control: 'text' },
    selectedValue: { control: 'text' },
    selectionChanged: { control: 'function' },
    selectStyle: {
      control: 'radio',
      options: ['bordered', 'underlined'],
    },
  },
};

const Template = () => `
      <biggive-form-field-select
        prompt="${args.prompt}"
        options='${args.options}'
        select-style="${args.selectStyle}"
        background-colour="${args.backgroundColour}"
        selected-option-colour="blue"
      >
      </biggive-form-field-select>
      `;

document.addEventListener('doOptionSelect', () => alert('doOptionSelect event emitted!'));

export const FormFieldSelect = {
  render: Template,
};

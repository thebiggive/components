import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Content',
  argTypes: {
    spaceBelow: {
      name: 'Space below',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    headerTextColour: colorSelector,
    headerBackgroundColour: colorSelector,
    bodyTextColour: colorSelector,
    bodyBackgroundColour: colorSelector,
  },
};

const Template = (args: any) => `
              <biggive-table
                space-below="${args.spaceBelow}"
                header-text-colour="${args.headerTextColour}"
                header-background-colour="${args.headerBackgroundColour}"
                body-text-colour="${args.bodyTextColour}"
                body-background-colour="${args.bodyBackgroundColour}"/>

                <table>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                        </tr>
                        <tr>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                        </tr>
                    </tbody>
                </table>
              </biggive-table>
              `;

export const TableComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    headerTextColour: 'white',
    headerBackgroundColour: 'primary',
    bodyTextColour: 'black',
    bodyBackgroundColour: 'white',
  },
};

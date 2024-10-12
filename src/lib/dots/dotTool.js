const dotTool = {
  name: 'display_dots',
  description:
    'Displays a number of dots (0 to 64) to the user',
  parameters: {
    type: 'object',
    properties: {
      dotCount: {
        type: 'number',
        description: 'How many dots should be displayed to the user',
      },
    },
    required: ['dotCount'],
  },
}

export default dotTool;

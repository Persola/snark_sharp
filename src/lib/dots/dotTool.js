const dotTool = {
  name: 'display_dots',
  description:
    'Displays a number of dots (0 to 64) to the user',
  parameters: {
    type: 'object',
    properties: {
      howManyDots: {
        type: 'number',
        description: 'How many dots should be displayed to the user',
      },
    },
    required: ['howManyDots'],
  },
}

export default dotTool;

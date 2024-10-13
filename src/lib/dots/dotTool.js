const dotTool = {
  name: 'display_dots',
  description:
    'Displays a number of dots (0 to 64) to the user',
  parameters: {
    type: 'object',
    properties: {
      howManyDots: {
        type: 'number',
        description: 'The number of dots to display',
      },
      dotColor: {
        type: 'string',
        description: 'The color of dots to display. It should be a hex string as used in CSS. For example, black is "#000000" and white is "#ffffff".',
      },
    },
    required: ['howManyDots', 'dotColor'],
  },
}

export default dotTool;

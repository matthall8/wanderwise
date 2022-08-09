export default {
  name: 'faq',
  title: 'faq',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      description: 'What is the question',
      type: 'string'
    },
    {
        name: 'answer',
        title: 'Answer',
        description: 'What is the answer?',
        type: 'string'
      },
      
  ],
  preview: {
    select: {
      question: 'question',
      answer: 'answer'
    },
    prepare(selection) {
      const {question, answer} = selection
      return {
        title: question,
      }
    }
  }
}

import {Server, Model, hasMany} from 'miragejs';

new Server({
  models: {
    question: Model.extend({
      answers: hasMany()
    }),
    answer: Model
  },

  routes() {
    this.namespace = '/api';

    this.get('/questions', () => {
      return [
        {
          id: 0,
          text: 'What is your favorite super hero?',
          answers: [
            { id: 0, text: 'Captain America' },
            { id: 1, text: 'Thor' },
            { id: 2, text: 'Hulk' },
            { id: 3, text: 'Black Widow' }
          ]
        },
        {
          id: 1,
          text: 'What is your favorite food?',
          answers: [
            { id: 4, text: 'Hot Dogs' },
            { id: 5, text: 'Roast Venison' },
            { id: 6, text: 'Salad' },
            { id: 7, text: 'Borsch' }
          ]
        },
        {
          id: 2,
          text: 'What is your favorite drink?',
          answers: [
            { id: 8, text: 'Coke' },
            { id: 9, text: 'Beer' },
            { id: 10, text: 'Water' },
            { id: 11, text: 'Wine' }
          ]
        },
        {
          id: 3,
          text: 'How do you spend your free time?',
          answers: [
            { id: 12, text: 'I go watch a baseball game.' },
            { id: 13, text: 'I make party with my mates.' },
            { id: 14, text: 'I make some relaxation exercises.' },
            { id: 15, text: 'I don\'t have free time.' }
          ]
        }
      ]
    });
  },
});

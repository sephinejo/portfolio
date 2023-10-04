'use strict';

new TypeIt('.home__title-strong', {
  speed: 130,
  loop: true,
})
  .move(-7)
  .type('Front-end Engineer ')
  .move(-10)
  .delete(10)
  .type('Back-end ')
  .delete(9)
  .type('Full-stack')
  .move(null, { to: 'END' })
  .go();

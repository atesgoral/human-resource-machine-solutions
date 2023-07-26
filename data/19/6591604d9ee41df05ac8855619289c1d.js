callback({
  "levelNumber": 19,
  "size": 90,
  "steps": 64,
  "successRatio": 1,
  "type": "specific",
  "legal": false,
  "worky": true,
  "author": "Mygod",
  "hash": "6591604d9ee41df05ac8855619289c1d",
  "path": "19-Countdown-10.82/90.64.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 90/10 - SPEED 64/82 --\n\n-- This solution is level-specific (quality-limited input) and assumes inbox\n-- items with value of no less than -9 or greater than 9.\n\n    INBOX\n    JUMPN    u\n    JUMPZ    a\n    COPYTO   0\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\nu:\n    COPYTO   0\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    BUMPUP   0\na:\n    OUTBOX\n    INBOX\n    JUMPN    u\n    JUMPZ    a\n    COPYTO   0\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX\n    BUMPDN   0\n    JUMPZ    a\n"
});
callback({
  "levelNumber": 19,
  "size": 12,
  "steps": 78,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "riophae",
  "hash": "772cdfd1cc67eed58360004c1de66402",
  "path": "19-Countdown-10.82/12.78.obsolete-riophae.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 12/10 - SPEED 78/82 --\n\n-- This solution is superseded by 10.83-18111398.asm being functionally same\n-- with further optimization.\n\na:\nb:\n    INBOX\n    COPYTO   0\n    JUMPN    d\nc:\n    OUTBOX\n    BUMPDN   0\n    JUMPN    a\n    JUMP     c\nd:\ne:\n    OUTBOX\n    BUMPUP   0\n    JUMPN    e\n    OUTBOX\n    JUMP     b\n"
});
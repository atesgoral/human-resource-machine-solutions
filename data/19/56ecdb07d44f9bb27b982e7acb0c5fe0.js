callback({
  "levelNumber": 19,
  "size": 10,
  "steps": 114,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "hermanprawiro",
  "hash": "56ecdb07d44f9bb27b982e7acb0c5fe0",
  "path": "19-Countdown-10.82/10.114.obsolete-hermanprawiro.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 10/10 - SPEED 114/82 --\n\n-- This solution is superseded by 10.83-18111398.asm being functionally same\n-- with further optimization.\n\na:\n    INBOX\n    COPYTO   0\nb:\nc:\n    OUTBOX\n    COPYFROM 0\n    JUMPZ    a\n    JUMPN    d\n    BUMPDN   0\n    JUMP     b\nd:\n    BUMPUP   0\n    JUMP     c\n"
});
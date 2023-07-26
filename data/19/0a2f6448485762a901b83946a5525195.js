callback({
  "levelNumber": 19,
  "size": 16,
  "steps": 82,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "clarfonthey",
  "hash": "0a2f6448485762a901b83946a5525195",
  "path": "19-Countdown-10.82/16.82.obsolete-clarfonthey.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 16/10 - SPEED 82/82 --\n\n-- This solution is superseded by 10.83-18111398.asm being functionally same\n-- with further optimization.\n\n    JUMP     d\na:\nb:\nc:\n    OUTBOX\nd:\n    INBOX\n    JUMPZ    c\n    COPYTO   0\n    OUTBOX\n    COPYFROM 0\n    JUMPN    f\ne:\n    BUMPDN   0\n    JUMPZ    b\n    OUTBOX\n    JUMP     e\nf:\ng:\n    BUMPUP   0\n    JUMPZ    a\n    OUTBOX\n    JUMP     g\n"
});
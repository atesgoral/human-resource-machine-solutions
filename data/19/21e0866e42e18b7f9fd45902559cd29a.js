callback({
  "levelNumber": 19,
  "size": 12,
  "steps": 77,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "landfillbaby",
  "hash": "21e0866e42e18b7f9fd45902559cd29a",
  "path": "19-Countdown-10.82/12.77.obsolete-landfillbaby.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 12/10 - SPEED 77/82 --\n\n-- This solution is superseded by 10.83-18111398.asm being functionally same\n-- with further optimization.\n\n    JUMP     c\na:\nb:\n    OUTBOX\n    BUMPUP   0\n    JUMPN    b\n    OUTBOX\nc:\nd:\n    INBOX\n    COPYTO   0\n    JUMPN    a\ne:\n    OUTBOX\n    BUMPDN   0\n    JUMPN    d\n    JUMP     e\n"
});
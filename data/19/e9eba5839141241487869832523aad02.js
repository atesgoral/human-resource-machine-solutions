callback({
  "levelNumber": 19,
  "size": 12,
  "steps": 77,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "landfillbaby",
  "hash": "e9eba5839141241487869832523aad02",
  "path": "19-Countdown-10.82/12.77-landfillbaby.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 19-Countdown - SIZE 12/10 - SPEED 77/82 --\r\n\r\n    JUMP     c\r\na:\r\nb:\r\n    OUTBOX\r\n    BUMPUP   0\r\n    JUMPN    b\r\n    OUTBOX\r\nc:\r\nd:\r\n    INBOX\r\n    COPYTO   0\r\n    JUMPN    a\r\ne:\r\n    OUTBOX\r\n    BUMPDN   0\r\n    JUMPN    d\r\n    JUMP     e\r\n"
});
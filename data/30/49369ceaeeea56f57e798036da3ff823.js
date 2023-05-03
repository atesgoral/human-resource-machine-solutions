callback({
  "levelNumber": 30,
  "size": 95,
  "steps": 86,
  "successRatio": 1,
  "type": "exploit",
  "legal": false,
  "worky": true,
  "author": "Mygod",
  "hash": "49369ceaeeea56f57e798036da3ff823",
  "path": "30-String-Storage-Floor-7.203/95.86.exploit-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 30-String-Storage-Floor - Size 95/7 - Speed 86/203 --\n\n-- This solution is an exploit discovered by Otto42;\n-- the message is known in advance.\n-- There are random numbers of X's in the places in the message they occur, so\n-- it fast forwards the message to them and uses three jumps to output the\n-- correct number of X's.\n\n    COPYFROM 12\n    SUB      8\n    COPYTO   24\n    BUMPDN   24\n    COPYFROM 4\n    OUTBOX\n    COPYFROM 5\n    OUTBOX\n    COPYFROM 15\n    OUTBOX\n    COPYFROM 7\n    OUTBOX\n    COPYFROM 8\n    OUTBOX\n    COPYFROM 9\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    INBOX\n    INBOX\n    INBOX\n    INBOX\n    INBOX\n    SUB      24\n    JUMPN    a3\n    JUMPZ    a2\n    JUMP     a1\na3:\n    COPYFROM 22\n    OUTBOX\na2:\n    COPYFROM 22\n    OUTBOX\na1:\n    COPYFROM 22\n    OUTBOX\n    COPYFROM 17\n    OUTBOX\n    COPYFROM 18\n    OUTBOX\n    COPYFROM 11\n    OUTBOX\n    COPYFROM 12\n    OUTBOX\n    COPYFROM 13\n    OUTBOX\n    COPYFROM 14\n    OUTBOX\n    COPYFROM 15\n    OUTBOX\n    INBOX\n    INBOX\n    INBOX\n    SUB      24\n    JUMPN    b3\n    JUMPZ    b2\n    JUMP     b1\nb3:\n    COPYFROM 22\n    OUTBOX\nb2:\n    COPYFROM 22\n    OUTBOX\nb1:\n    COPYFROM 22\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    COPYFROM 13\n    OUTBOX\n    COPYFROM 14\n    OUTBOX\n    COPYFROM 15\n    OUTBOX\n    COPYFROM 4\n    OUTBOX\n    COPYFROM 5\n    OUTBOX\n    COPYFROM 17\n    OUTBOX\n    COPYFROM 18\n    OUTBOX\n    INBOX\n    INBOX\n    INBOX\n    INBOX\n    INBOX\n    SUB      24\n    JUMPN    c3\n    JUMPZ    c2\n    JUMP     c1\nc3:\n    COPYFROM 22\n    OUTBOX\nc2:\n    COPYFROM 22\n    OUTBOX\nc1:\n    COPYFROM 22\n    OUTBOX\n"
});
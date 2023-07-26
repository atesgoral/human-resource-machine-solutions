callback({
  "levelNumber": 31,
  "size": 65,
  "steps": 51,
  "successRatio": 0.7,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "Eirik0",
  "hash": "296b6144ea06bdfeac2a7bb0682b4d23",
  "path": "31-String-Reverse-11.122/65.51.specific-Eirik0.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 65/11 - SPEED 51/122 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- It assumes that the input consists of 3 strings with length 2-5.\n\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    INBOX\n    JUMPZ    c\n    COPYTO   2\n    INBOX\n    JUMPZ    b\n    COPYTO   3\n    INBOX\n    JUMPZ    a\n    OUTBOX\n    INBOX\na:\n    COPYFROM 3\n    OUTBOX\nb:\n    COPYFROM 2\n    OUTBOX\nc:\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    INBOX\n    JUMPZ    f\n    COPYTO   2\n    INBOX\n    JUMPZ    e\n    COPYTO   3\n    INBOX\n    JUMPZ    d\n    OUTBOX\n    INBOX\nd:\n    COPYFROM 3\n    OUTBOX\ne:\n    COPYFROM 2\n    OUTBOX\nf:\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\n    INBOX\n    JUMPZ    i\n    COPYTO   2\n    INBOX\n    JUMPZ    h\n    COPYTO   3\n    INBOX\n    JUMPZ    g\n    OUTBOX\ng:\n    COPYFROM 3\n    OUTBOX\nh:\n    COPYFROM 2\n    OUTBOX\ni:\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 0\n    OUTBOX\n"
});
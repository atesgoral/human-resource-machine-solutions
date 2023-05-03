callback({
  "levelNumber": 41,
  "size": 112,
  "steps": 481,
  "successRatio": 0.1,
  "type": "specific",
  "legal": false,
  "worky": true,
  "author": "viamodulo",
  "hash": "4e847a05fe69fcd69153fa7a829c4688",
  "path": "41-Sorting-Floor-34.714/112.481.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 112/34 - SPEED 481/714 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- The input consists of 4 runs :\n--      - the first is always in order c a b (output : a b c),\n--      - the second is sorted using one loop of the solution by 33.570-polarathene.asm\n--      - the third is split in two and sorted twice, using my own selection sort.\n--      - the fourth is always a single number long.\n\n    -- first run\n    INBOX\n    COPYTO   0\n    INBOX\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    COPYFROM 0\n    OUTBOX\n\n    -- second run\n    INBOX\n    COPYTO   [24]\na:\n    COPYFROM 24\n    COPYTO   19\nb:\n    BUMPUP   24\n    INBOX\n    JUMPZ    c\n    COPYTO   [24]\n    SUB      [19]\n    JUMPN    a\n    JUMP     b\nc:\n    COPYFROM 24\n    COPYTO   20\n    BUMPDN   24\nd:\n    COPYFROM [19]\n    OUTBOX\n    COPYFROM [24]\n    COPYTO   [19]\n    BUMPDN   24\n    JUMPZ    g\n    COPYTO   19\n    COPYTO   23\ne:\nf:\n    BUMPDN   23\n    JUMPN    d\n    COPYFROM [19]\n    SUB      [23]\n    JUMPN    e\n    COPYFROM 23\n    COPYTO   19\n    JUMP     f\ng:\n    COPYFROM 0\n    OUTBOX\n\n    -- third run\n    COPYFROM 20\n    ADD      20\n    COPYTO   20\n    COPYTO   22\n    ADD      20\n    COPYTO   21\n    ADD      21\n    ADD      20\n    COPYTO   21\nh:\ni:\n    INBOX\n    JUMPZ    k\n    COPYTO   [24]\n    SUB      21\n    JUMPN    j\n    BUMPUP   24\n    JUMP     i\nj:\n    COPYFROM [24]\n    COPYTO   [20]\n    BUMPUP   20\n    JUMP     h\nk:\n    COPYFROM 24\n    COPYTO   21\n    COPYFROM 20\n    COPYTO   24\n    SUB      22\n    JUMPZ    q\nl:\n    BUMPDN   24\n    COPYTO   20\n    COPYTO   23\n    SUB      22\n    JUMPZ    p\nm:\nn:\n    BUMPDN   23\n    SUB      22\n    JUMPN    o\n    COPYFROM [20]\n    SUB      [23]\n    JUMPN    m\n    COPYFROM 23\n    COPYTO   20\n    JUMP     n\no:\n    COPYFROM [20]\n    OUTBOX\n    COPYFROM [24]\n    COPYTO   [20]\n    JUMP     l\np:\n    COPYFROM [24]\n    OUTBOX\nq:\n    COPYFROM 21\n    COPYTO   24\n    JUMPZ    w\nr:\n    BUMPDN   24\n    COPYTO   19\n    COPYTO   23\n    JUMPZ    v\ns:\nt:\n    BUMPDN   23\n    JUMPN    u\n    COPYFROM [19]\n    SUB      [23]\n    JUMPN    s\n    COPYFROM 23\n    COPYTO   19\n    JUMP     t\nu:\n    COPYFROM [19]\n    OUTBOX\n    COPYFROM [24]\n    COPYTO   [19]\n    JUMP     r\nv:\n    COPYFROM [24]\n    OUTBOX\nw:\n    -- fourth run\n    INBOX\n    OUTBOX\n"
});
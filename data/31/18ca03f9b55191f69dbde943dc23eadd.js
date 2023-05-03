callback({
  "levelNumber": 31,
  "size": 112,
  "steps": 58,
  "successRatio": 1,
  "type": "unroll",
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "18ca03f9b55191f69dbde943dc23eadd",
  "path": "31-String-Reverse-11.122/112.58.unroll-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 112/11 - SPEED 58/122 --\n\n-- This solution is floor-specific. The strings to be reverse can be up to 13 chars in length.\n-- This is the same limitation as the pointer based solutions. The solution can be shorter by\n-- reducing this maximum. It also accepts empty strings (just a zero).\n\na:\nb:\nc:\n    INBOX\n    JUMPZ    a\n    COPYTO   0\n    INBOX\n    JUMPZ    ab\n    COPYTO   1\n    INBOX\n    JUMPZ    z\n    COPYTO   2\n    INBOX\n    JUMPZ    x\n    COPYTO   3\n    INBOX\n    JUMPZ    v\n    COPYTO   4\n    INBOX\n    JUMPZ    t\n    COPYTO   5\n    INBOX\n    JUMPZ    r\n    COPYTO   6\n    INBOX\n    JUMPZ    p\n    COPYTO   7\n    INBOX\n    JUMPZ    n\n    COPYTO   8\n    INBOX\n    JUMPZ    l\n    COPYTO   9\n    INBOX\n    JUMPZ    j\n    COPYTO   10\n    INBOX\n    JUMPZ    h\n    COPYTO   11\n    INBOX\n    JUMPZ    f\n    COPYTO   12\n    INBOX\n    JUMPZ    d\n    OUTBOX\n    INBOX\nd:\ne:\n    COPYFROM 12\n    OUTBOX\nf:\ng:\n    COPYFROM 11\n    OUTBOX\nh:\ni:\n    COPYFROM 10\n    OUTBOX\nj:\nk:\n    COPYFROM 9\n    OUTBOX\nl:\nm:\n    COPYFROM 8\n    OUTBOX\nn:\no:\n    COPYFROM 7\n    OUTBOX\np:\nq:\n    COPYFROM 6\n    OUTBOX\nr:\ns:\n    COPYFROM 5\n    OUTBOX\nt:\nu:\n    COPYFROM 4\n    OUTBOX\nv:\nw:\n    COPYFROM 3\n    OUTBOX\nx:\ny:\n    COPYFROM 2\n    OUTBOX\nz:\naa:\n    COPYFROM 1\n    OUTBOX\nab:\nac:\n    COPYFROM 0\n    OUTBOX\n    INBOX\n    JUMPZ    c\n    COPYTO   0\n    INBOX\n    JUMPZ    ac\n    COPYTO   1\n    INBOX\n    JUMPZ    aa\n    COPYTO   2\n    INBOX\n    JUMPZ    y\n    COPYTO   3\n    INBOX\n    JUMPZ    w\n    COPYTO   4\n    INBOX\n    JUMPZ    u\n    COPYTO   5\n    INBOX\n    JUMPZ    s\n    COPYTO   6\n    INBOX\n    JUMPZ    q\n    COPYTO   7\n    INBOX\n    JUMPZ    o\n    COPYTO   8\n    INBOX\n    JUMPZ    m\n    COPYTO   9\n    INBOX\n    JUMPZ    k\n    COPYTO   10\n    INBOX\n    JUMPZ    i\n    COPYTO   11\n    INBOX\n    JUMPZ    g\n    COPYTO   12\n    INBOX\n    JUMPZ    e\n    OUTBOX\n    JUMP     b\n"
});
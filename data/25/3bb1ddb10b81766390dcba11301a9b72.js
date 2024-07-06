callback({
  "levelNumber": 25,
  "size": 117,
  "steps": 39,
  "successRatio": 0.07,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "18111398",
  "hash": "3bb1ddb10b81766390dcba11301a9b72",
  "path": "25-Cumulative-Countdown-12.82/117.39.specific-18111398.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 25-Cumulative-Countdown - SIZE 117/12 - SPEED 39/82 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n\n\n    BUMPUP   5\n    BUMPUP   5\n    ADD      5\n    COPYTO   4\n    INBOX\n    SUB      4\n    JUMPN    a\n    COPYFROM 4\n    ADD      4\n    ADD      5\n    JUMP     b\na:\n    COPYFROM 4\n    ADD      5\nb:\n    OUTBOX\n    BUMPUP   4\n    INBOX\n    COPYTO   0\n    SUB      4\n    JUMPN    c\n    JUMPZ    g\n    SUB      5\n    JUMPZ    i\n    JUMPN    h\n    SUB      5\n    JUMPZ    k\n    JUMPN    j\nc:\n    ADD      5\n    JUMPZ    f\n    JUMPN    d\n    COMMENT  6\n    BUMPUP   0\n    ADD      0\n    JUMP     p\nd:\n    ADD      5\n    JUMPZ    e\n    COMMENT  4\n    BUMPUP   0\n    JUMP     n\ne:\n    COMMENT  3\n    COPYFROM 0\n    JUMP     l\n    COMMENT  5\nf:\n    COPYFROM 0\n    ADD      0\n    JUMP     o\ng:\n    COMMENT  1\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     q\nh:\n    COMMENT  2\n    BUMPUP   0\n    ADD      0\n    ADD      0\n    JUMP     r\ni:\n    COMMENT  0\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     s\nj:\n    COMMENT  7\n    BUMPUP   0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     t\nk:\n    COMMENT  8\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\nl:\nm:\nn:\no:\np:\nq:\nr:\ns:\nt:\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n    COPYTO   0\n    SUB      4\n    JUMPN    u\n    JUMPZ    y\n    SUB      5\n    JUMPZ    aa\n    JUMPN    z\n    SUB      5\n    JUMPZ    ac\n    JUMPN    ab\nu:\n    ADD      5\n    JUMPZ    x\n    JUMPN    v\n    BUMPUP   0\n    ADD      0\n    JUMP     af\nv:\n    ADD      5\n    JUMPZ    w\n    BUMPUP   0\n    JUMP     ad\nw:\n    COPYFROM 0\n    JUMP     m\nx:\n    COPYFROM 0\n    ADD      0\n    JUMP     ae\ny:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     ag\nz:\n    BUMPUP   0\n    ADD      0\n    ADD      0\n    JUMP     ah\naa:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     ai\nab:\n    BUMPUP   0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     aj\nac:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\nad:\nae:\naf:\nag:\nah:\nai:\naj:\n    OUTBOX\n\n\nDEFINE COMMENT 0\neJwTZWBgaM5ZI5VdWqrY2lyqyNj6R3VWOwgnaD5p9jb0blR03FT3KGJu1euehso1S56X7T0O1MIQmXK0\n8FLR0cK5VVqlcm1apU0TjhZKT7bPnT7FPpdhFIyCUTBkAAB4biSE;\n\nDEFINE COMMENT 1\neJyTZWBgiK6+ZBpdbWZ5v1LR8X4lj+ehiu8Bhyo4Sn62c5Tw9Xyu/jbFekb/9K7FB+aYHz4wZ8X5m5N/\n3HKY+PhRaWfI+y+1Ie+jq9+/vl+Z+fx+JcsToHEMf6oumVbUXDI93jTb5mf7bJubky+Zcs98rmszL0GT\nfdkfVYZRMApGwaABANQ8O2c;\n\nDEFINE COMMENT 2\neJyTYmBgqKh5rnuowsxSs6zN5XuBUUpcnmzO0eyqhqPZARMe5VjPqM5XW7C2RHBFckXiZr2GS/vvtF3a\nP6nr+fYj/YIrjvQHTPjYVdVQ2lnVsL9Vq1SteUmBYL197v1K+1y38p0Z1fkgLJvDMApGwSgYlAAASH8x\nLw;\n\nDEFINE COMMENT 3\neJzjZWBguBC9wrUuydvQJC1B81GOmtj/XBCeL1idP1/wUY6i46McoxTPrNQOzyzzw2nZ5ocZRsEoGAXD\nBgAADLgUOQ;\n\nDEFINE COMMENT 4\neJyTYGBgqEt6FDE7+VGEeGpd6Ib0yb5nM1a4ri3xNjxV+lzXrRyEvQ3vVyo6Tq1dUjC1tqohuvpe8/3K\nk91u5VsmV+ebH36Us+K8Z9bk60D990/Ehbw/mxHy/n9u5vPSzsznDKNgFIyCQQ0AswAwKg;\n\nDEFINE COMMENT 5\neJxTYmBgeBqv6LghPUHTsDhB837lBpOKGkVHwXoeT8H6swkVNbI59ytlcyYUf66uzq9qmJxW1XCqtKrh\nfuW95oqa1A7B+oAJqxq3TF7VaD3jZ3vp6kldPrsndf24FdHx+NH+1seP1Jozn/c2ZD6vqGF5IlLE8qQ6\nv+7+0ey6+zqZk69vSAdhvSszCiZfZxgFo2AUDAgAAHT8RAE;\n\nDEFINE COMMENT 6\neJyTYmBgeBp/yfRE3CVT/ZjZNtMi21xeBp1NCAgwSjH2l83Z7iubI+fNUXLFr79iXtjn6qfx95pnFNxr\nTq6oaphaC8KitRU1orWaZUsKgEYxgMx5Gv8oYkP68+2eWUqn07JXnH+Us+I8wygYBaNgUAIAWNIvLQ;\n\nDEFINE COMMENT 7\neJzTYmBgUGs+qiNYX6pYUSMop1lmxVedb8W3If2WyuS0ozriqbNtxFPdY0zSdmaczZDNeZTTX1Gd/7n6\nVGnAhIqa+bNXNZauTmj12V3aufd4aefk6xEdP265lf+4tbZE74pIEQivOF+dv+L8o5y9x3UyI45MTru0\n/1fy8+2JiYIrZidfmyKeGjDBJC21Y0N6asejHNHa+5V1oX+qJvv+qVJ0FKx/rqvX8Fx3VWOCJsMoGAWj\ngCYAABCgT5s;\n\nDEFINE COMMENT 8\neJyTZGBgcCt3j/lTxeP5p8rM8n6lt+HakgRNz6wEzV/J3oYn4jaYbI4ys5SKUHT8G8bj+TfsUcSF6J0Z\nmXGyOUyJHCVp2RwlMwrsc0+VZsaeKq0LnVCc2iFSZD2jOl9wRVze8+1xeeaHGUbBKBgFgxYAAD+YKPs;\n"
});
callback({
  "levelNumber": 38,
  "size": 24,
  "steps": 817,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "Mygod",
  "hash": "c0021e62ac2179da7f43b6184633b0a6",
  "path": "38-Digit-Exploder-30.165/24.817-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 24/30 - SPEED 817/165 --\n\na:\n    INBOX\n    COPYTO   0\n    COPYFROM 9\n    COPYTO   8\n    COPYTO   11\nb:\n    BUMPUP   11\n    COPYFROM 9\n    COPYTO   [11]\nc:\n    COPYFROM [8]\n    SUB      10\n    JUMPN    d\n    COPYTO   [8]\n    BUMPUP   [11]\n    JUMP     c\nd:\n    COPYFROM [11]\n    JUMPZ    e\n    BUMPUP   8\n    JUMP     b\ne:\n    COPYFROM 8\nf:\n    JUMPN    a\n    COPYFROM [8]\n    OUTBOX\n    BUMPDN   8\n    JUMP     f\n\n\nDEFINE LABEL 8\neJxjY2BgqCqWbrhSPHGPYvHzy0Aug1iRhy0DEpgTzlHyIPR7ukLY9ACpiLOeU6JOuvHGdrn/TZIM+pWc\nmwBSM7XwoMOp0ibH/5Vd7l9qZUO/1BqlfK/ZmbG36k+WZ5l1VlihYsSlohA/v5KznmA7OlfoCXSv0Gvv\nq7Rm63d3be8L8QOJz5x/LzRm3r3Q+LmPIuTnbkiaOf9PVviCkyWy8yZXL54dUa81c3pdzoyQGoZRMApG\nAVUAAHxLR98;\n\nDEFINE LABEL 9\neJwTYmBgeNDiVKjSvS3dqndbesyEq5kLpq2rYJlh1cQyQ2Si2zSZxY+mdK760Se6ZV6b8/bCJtbNUQ1v\n5zM2GE/mbcxsfdAyvzy6QzmfYRSMglEwJAEAjE8gbQ;\n\nDEFINE LABEL 11\neJzjZmBgeFV6YL9z2bm5URVPsh7UTE990xqRGNCekXS660nW1gmRLZKTlCedmZS8k4HK4EdfYvHWCUYF\n1DZ3FIyCUUA8AAAmWBox;\n"
});
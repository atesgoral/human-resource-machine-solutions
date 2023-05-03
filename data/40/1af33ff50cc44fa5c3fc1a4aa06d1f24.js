callback({
  "levelNumber": 40,
  "size": 28,
  "steps": 437,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "clarfonthey",
  "hash": "1af33ff50cc44fa5c3fc1a4aa06d1f24",
  "path": "40-Prime-Factory-28.399/28.437.obsolete-clarfonthey.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 40-Prime-Factory - SIZE 28/28 - SPEED 437/399 --\n\n-- This solution is superseded by 22.423-steambap.asm being functionally same\n-- with further optimization.\n\na:\n    COPYFROM 24\n    COPYTO   20\n    COPYTO   22\n    BUMPUP   22\n    BUMPUP   22\n    INBOX\n    COPYTO   19\n    JUMP     c\nb:\n    COPYFROM 22\n    OUTBOX\n    BUMPDN   20\n    JUMPZ    a\n    COPYTO   19\n    COPYFROM 24\n    COPYTO   20\n    BUMPUP   19\nc:\nd:\ne:\n    SUB      22\n    JUMPN    f\n    COPYTO   21\n    BUMPUP   20\n    COPYFROM 21\n    JUMPZ    b\n    JUMP     e\nf:\n    BUMPUP   22\n    COPYFROM 24\n    COPYTO   20\n    COPYFROM 19\n    JUMP     d\n\n\nDEFINE LABEL 19\neJwTZmBg2BNf4bErpc5fKmtb3Kkcu0zP/M8lTcULJk4p8123vDJyT0fNtqMldbwnXjTynoht/XoYqIVB\nLeXkob/pPWu+l/1K3ljxLnRCQ4kmwygYBaNgyAEA3WskgA;\n\nDEFINE LABEL 20\neJyTZ2BgiM29bsmas9rib3quFWPcdrfA6N/efBFuEZ7h5Ql3w292aEfNXLQl2nedRnzr3pwkjoPxGUUH\n3hcx7Sqp49/Q1ui+/Erz31n7Wz+X7G8VzpjRohCn1yASYFQmbX8vq1EeaDzDqZz+GubCWV0dNW77VRqF\nzyu2nbi1ubv/McMoGAWjYMABABXpNe0;\n\nDEFINE LABEL 21\neJyTZ2BgYIxL1JFLmJAikvh9smvi4hM3EqddupF4fYF/Qp3/poQPtjcSv+vsSrGV+pxxX6Al7xOve4mX\nQHZVgPjBhqMqrC0hZuktvu6FzYzB7PW3CuZWXW58W97YdqFUvJ09/XLjxAz/aQLZ+our8h+vE6wLOlvY\nPO3StE6GS4HdL84yjIJRMAoGHAAAw6A4hw;\n\nDEFINE LABEL 22\neJyTYGBgmF/KGMxbUL9tZo73PcfsPWdqsg7mrM2y8pqZI2rxPK/KYGHBDr1bJd913pYr69XVWhuxtly3\n9GgvdjTpvOCl1XUyWqurNt2u41bB1rbYkpI628b5pSxdf9N7pyQl+09jGAWjYBQMagAA7fEqGQ;\n\nDEFINE LABEL 24\neJyTZ2BgCG5LcOlr5XCaVP3KLLroib5j9g69rHQN010pCS5JyasC/idtizuSfDCnLjW5+m/62vZ7WSUT\nCgr+zppb5bSgrXHN/MJmzTnMnWGtPzoXVv7oXJd/vNMuc0EHb2Jhs6KbYN0Ma6AVDHGhZ4XfxoeYza2a\n0nyrZ/vaV1Mi9zCMglEwCgYcAADruzkP;\n"
});
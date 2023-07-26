callback({
  "levelNumber": 32,
  "size": 16,
  "steps": 392,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "michiexile",
  "hash": "923937b6c0c19184d97f3aab4b8c0ac8",
  "path": "32-Inventory-Report-16.393/16.392.obsolete-michiexile.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 16/16 - SPEED 392/393 --\n\n-- This solution is superseded by 16.377-cowboy.asm being functionally same with\n-- further optimization.\n\nsetup:\n    COPYFROM 14\n    COPYTO 15\n    BUMPDN 15\n    COPYTO 16\nstart:\n    INBOX\n    COPYTO 19\ncount:\n    BUMPUP 16\nloop:\n    BUMPUP 15\n    COPYFROM [15]\n    JUMPZ out\n    SUB 19\n    JUMPZ count\n    JUMP loop\nout:\n    COPYFROM 16\n    OUTBOX\n    JUMP setup\n"
});
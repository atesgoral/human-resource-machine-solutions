callback({
  "levelNumber": 26,
  "size": 15,
  "steps": 73,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "clarfonthey",
  "hash": "6980c8eb852007988fe6a0bcf9a32de1",
  "path": "26-Small-Divide-15.76/15.73.obsolete-clarfonthey.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 15/15 - SPEED 73/76 --\n\n-- This solution is superseded by 15.71-ekx.asm being functionally same with\n-- further optimization.\n\n    JUMP     b\na:\n    COPYFROM 2\n    OUTBOX\nb:\n    COPYFROM 9\n    COPYTO   2\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   1\nc:\n    COPYFROM 0\n    SUB      1\n    JUMPN    a\n    COPYTO   0\n    BUMPUP   2\n    JUMP     c\n\n\nDEFINE LABEL 0\neJwTYWBgeBp/xckm+aXV1+xLpnUll0zdyl9a3a987X6k9nWPd+OFTd+aZu682JK7Z3uH4362/kv7gVoY\n+DO4j83LuLNbKLdrcVd1dlZtm7NTaedxS4ZRMApGwZACADOvJp8;\n\nDEFINE LABEL 1\neJyTY2Bg+Jq9wUQ/b4vfrfyD4ZeKpOM1yxqS5lYJJmc0sURpdOz3SurKt1/fvcVvffe/8iuddbN+tm+5\nUdu2/Slj66/nbxoyn5vVFj82qWC6Ll5ec+lU6exjmmV/1ouXh6y6Xym9xKFebcG71hsLp0+5sdBkocEc\nxxXpU2VWMU1iGAWjYBQMCgAAAak74g;\n\nDEFINE LABEL 2\neJyTYWBgyIxTdLwd+z5xdayi476YMN11SYu1z9eX61U1OpruaVB0/FLr6t9WyNV4Idd1ilRW74buzEv7\nb2RxH1uQO/HU/UreyxU1cy97N0ZdtGiyvPCtyflMRlPDcqCxDFdTL1X15UXUV9S8rL/S+bnatmdDJcMo\nGAWjYFABAHr7NHM;\n\nDEFINE LABEL 9\neJyTY2Bg6G34ZzS36o6heHmf8a/SS6ZhhVHuF3JtE5pznhdNy77SPi27a7FjruzGp4Xy+36Vih6aXLHs\n0KrG3D3POjzXefRtX6A8YfKkoAknuz/3R9R79JkUzukxSintrAvd08Bl01TXYt5QmWsEtIbhREGfsXfj\nr0VzelbdYRgFo2AUDAoAAJQ0OPw;\n"
});
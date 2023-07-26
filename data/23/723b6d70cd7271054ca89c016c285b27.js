callback({
  "levelNumber": 23,
  "size": 31,
  "steps": 64,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "723b6d70cd7271054ca89c016c285b27",
  "path": "23-The-Littlest-Number-13.75/31.64-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 23-The-Littlest-Number - SIZE 31/13 - SPEED 64/75 --\n\n-- Based on 19.69-whathecode.asm. Won 1 speed by better seperating the two cases. Won 4 by unrolling each case.\n\n    JUMP     c\na:\nb:\n    COPYFROM 0\n    OUTBOX\nc:\n    COMMENT  0\n    INBOX\n    COPYTO   0\nd:\ne:\nf:\n    INBOX\n    JUMPZ    a\n    COPYTO   1\n    SUB      0\n    JUMPN    i\n    INBOX\n    JUMPZ    b\n    COPYTO   1\n    SUB      0\n    JUMPN    j\n    JUMP     d\ng:\nh:\n    COPYFROM 1\n    OUTBOX\n    COMMENT  1\n    INBOX\n    COPYTO   1\ni:\nj:\nk:\n    INBOX\n    JUMPZ    g\n    COPYTO   0\n    SUB      1\n    JUMPN    e\n    INBOX\n    JUMPZ    h\n    COPYTO   0\n    SUB      1\n    JUMPN    f\n    JUMP     k\n\n\nDEFINE COMMENT 0\neJxTZ2BgKLDoWvzTp84uN3C2anxYW9G1SKNJQGEGTve92cfdGfKqfJryVwb9yQKJxba5u2Y0nfX8WX0v\nlL18Q9LVQu+yNw1aPRe7qqaD5A+sYHGuXiXos2P1n6zvqyFiu1ftsMpbv8VcZlul9aSdBx0m7Orzmrrj\nVtDWNTsz5LYezJu1ra1IbEdITcT2mKbMjZ8n5a2vmv59tf1shlEwCkYBzQEA+dVFfA;\n\nDEFINE COMMENT 1\neJxTZWBgWGVlZplttaRd0zpkFZDLkG1VanHQc4fVHu8/Nnu821wcvAR9+Fy14ubaf0+fb/c9vde1Lqfe\n62TJb++I+t/eS9ptvXP72Dz+zFhq078MpN+s9rOZdXWdXXT+mvjVmX+yPtY97wSJsy5P7fi/wiz909rP\nZpkbz0ov3XRJ7sxuHs/SIwGVIPnvq2NCzI5c8mEYBaNgFNANAAAD5D29;\n\nDEFINE LABEL 0\neJzjZmBgeJTTdq66+nEbw8QNbFkzjczk54r6ty1zX6izYc1LoDRDRlNEfeCi6XUMRIAMa8UIQReecu2g\nk26vAxPCP/pPrzMIuNcMkrsQvaaXIWlL6o6UNherlBC/DelaPSBxpsRz5SD6f2WAt12VbKhn2bml/ysF\nV2g2uS8EiZdPeR5tO6kpn2Eiy/yaSe4LP089Ol92XtV0kNzqDStiVmz8np62aX6L4pYtk2dtM5s6YVfp\nFIhcV6n3nrocEPv5RsWINcdPuoHY/Zfmh0mcTwh/eeJ1nPaJDUkLT//J8rriXcZ6TbTW/ersRonzhROX\nnPozA6RW6KVs6IWXHCVhzyH8kjuyoSEvVsQcfbsi5tOXmBBiwmQUjILBDABtU3cg;\n\nDEFINE LABEL 1\neJyTYWBgmFHwx+Z8sVGKd+mtdcfLnM8AhRgmFJdasFSsMcxufK4b2rlCL6B7jWFX70EHjr4A767eW0Hn\nutWi5dr+ZG2qO1d+tDykJrZNtFagW7LBo29F17E+vX62/rpZHH0hqy52vd51s33nkYL6tnPOFd0XGUbB\nKBgFgwoAAGy9M2k;\n"
});
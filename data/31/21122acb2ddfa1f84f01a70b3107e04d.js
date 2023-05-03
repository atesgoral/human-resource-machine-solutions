callback({
  "levelNumber": 31,
  "size": 14,
  "steps": 103,
  "successRatio": 0.7,
  "legal": false,
  "worky": false,
  "author": "FireGoblin",
  "hash": "21122acb2ddfa1f84f01a70b3107e04d",
  "path": "31-String-Reverse-11.122/14.103-FireGoblin.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 14/11 - SPEED 103/122 --\n\n    JUMP     c\n    COMMENT  2\na:\n    COPYFROM [14]\n    OUTBOX\n    COMMENT  0\nb:\nc:\n    INBOX\n    JUMPZ    d\n    COPYTO   [14]\n    BUMPUP   14\n    JUMP     b\n    COMMENT  1\nd:\n    BUMPDN   14\ne:\n    COPYFROM [14]\n    OUTBOX\n    BUMPDN   14\n    JUMPZ    a\n    JUMP     e\n\n\nDEFINE COMMENT 0\neJyTZ2Bg6HB8p3Y8wFP7VN5eHSCX4U24s3VR+Aaf7lCPjOkhMrOnh1y/IBtifBUk980pa/89F8ujJh5T\nTwqGfjgrn/Hh7M3GqSdBcre6i4pudbfU53Rx9Ym1K5741Jm1//w0xwrJ2d35X+Z25xstbqn/uvzgtIur\nCtdfXAXRMwpGwSgYWAAAMBw45Q;\n\nDEFINE COMMENT 1\neJwzZmBgqAsrMb3sb6jn4O5sLeVw0rPaYlXMEaPu/Cq9nKZ52r5TVbRn76zSqzlzxIjpNqOFzlNvm9+v\ndrmHv4/0X/CsKNz4ak88/+6TKZcWy2fU9c/MOFcmnzExfm/qUn3/FHnFt4kZEnuiGUyA1jA863Ks+NSp\nWd3SYd3B1VE+/1/H37UJ3d/2GvRznP4/af/l0GnGV7fPSDnfNufeAbtFlxarLTk4jW9Z/KKOZfcOgPR/\n37gnc9GOxTmNN8XzQHytM21OG04fitQ6E9xqdlp9B8MoGAWjgGQAACGLXR0;\n\nDEFINE COMMENT 2\neJzTYmBgsLetD7K3rUyqtkidxGu+aGW49dZKKQez6Hsuua4O7kKOU73m2X/3EXK87H/SE6icYVaRdcfZ\npu58pbYraRPaJ8ZzdXAHKrXZeJ9tOun5sd7Gmz1rT2ZJ4o+GnvhpPULx5fPZEnYti0522Gqe9m3v+2zF\nEy75U0/eKFc8ATLr9tRVMW1z3iZfWJCQ6rDtShpILH/FecspSyfGv5iXOqlq7t+1VXP5dzOMglEwCmgC\nABq7R90;\n\nDEFINE LABEL 14\neJxzZGBg+OZ0Jc3YLiF1u3FC6h2DK2keGufKxJXWd+orHJy2VX7LtpUKQYfElaae/Kxy/cI2zesXeHRr\nzoQZHj380nLXsovWJjO8baw71to5VtxzSUi95HppsYO7+g6gsQy/s4qKhDO78/1TxPM2xAS3+kV9nPAg\nonx+UfjsnW/C1x57EDH15IkoxRN7U/+u3VSwvvNMRWWSZVV90OYqLbu48pb6rDLmeU/KOteAzJo8Wzzv\n+ZQfDeIT6/o9evVWePRu2WbTp77DoH/Lts+TO9fMn8U878KCaT0Lljwrrln+wqxm+V6d/BUCdS9X1PXf\nXSkz++5K0dUgc37sjiqt262+w//kubKYS2bRsXeOtzGMglEwggEAaN19hg;\n"
});
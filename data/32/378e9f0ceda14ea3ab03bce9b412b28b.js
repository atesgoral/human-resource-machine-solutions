callback({
  "levelNumber": 32,
  "size": 26,
  "steps": 341,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "qefn",
  "hash": "378e9f0ceda14ea3ab03bce9b412b28b",
  "path": "32-Inventory-Report-16.393/26.341-qefn.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 26/16 - SPEED 341/393 --\n\n    JUMP     b\na:\n    COPYFROM 15\n    OUTBOX\n    COPYFROM 17\n    OUTBOX\nb:\n    COPYFROM 14\n    COPYTO   15\n    COPYTO   17\n    COPYTO   19\n    INBOX\n    COPYTO   16\n    INBOX\n    COPYTO   18\nc:\n    COPYFROM [19]\n    JUMPZ    a\n    SUB      16\n    JUMPZ    d\n    JUMP     e\nd:\n    BUMPUP   15\ne:\n    COPYFROM [19]\n    SUB      18\n    JUMPZ    f\n    JUMP     g\nf:\n    BUMPUP   17\ng:\n    BUMPUP   19\n    JUMP     c\n\n\nDEFINE LABEL 14\neJxzZmBg+CxkmB+qeiSlzup53Bsr2RQzy9+ZbXovOq8pT1n2V955i4Bc+P6FCksPeJkf3+XgprgLqIVB\nIPJLO1uGa9XdvDOF7/MN89UK1mZMzZ0Z+zCDK7IzmSvySKxDnGnE78wdwdX16oE9M9UDrZdbBqWtyw09\nvut69KeDKSkXjq/MvnC8IK/pWFP+88MgMzdWr824UtvftbrF4XBJy58pD9pDMuM7LySJdvfFL5nwL6py\nlmg4SN26nf+itmy4kJS/sivv7NLqevElLT0PF3NMfriYdVHrktpVLMvmbP6wvHW7x9rkvVmbNuy7upVz\nn+PO47se77m/jeXQ6dVTj/TMZD56t1vs8JuqVfun5XTuupB0devzOIZRMApGIAAAdXmFYQ;\n\nDEFINE LABEL 15\neJzzZ2BgeKs4WzVIZLbqQz4jMzXegw4vuWVD1Xjdi+/xP26bImw2tV+0btZpMfvZlbL2s8vlPk8CamFo\ndzcyk3R8b1xm5uz0x1gy6ICRWfoBo5Mlv0wetz2xYZkf4HJpBbPn5JW13u4LLXyrpm/3zey28K3LqfL5\nnOLsOTu438XddbqjmeVc+89mIPOkIt4bS0UkhItGORcci2eYsy/Je8mPFJb5H9Kn173K3GEFUtNcYW3z\nvYajpLQ2tw/E31W9xvB7zXtjvQYGh4wmQZ+HLc+jp3SqdXL3Msxx7V/Svm/iBhOQuqPL9IwPrJjs+3dl\nU/6vVf3LQGIP5ihqXV6oqGWy9pbK0k23VEBi185P9g290OfFeu2oc+N1Bgfz22sMS+5k6m+8O1/j6+0m\nx6+3r/mvvl83a/X9Syve3pPdyDAKRsEwAAB8tISV;\n\nDEFINE LABEL 16\neJxLYGBgqGCbrbqdTdDHgdl7iTXruaVzBJrmMkuxzLeVcV8IlGaYppWiI6Oxc1qceumUBWqZ3Ylqkg2J\namviZTTWGIprPdI6oS8o98uER1rHarI8SD2L4YakXSa5CdEOeokgfoj2ml5+3ff9QH4/iK8QJqmSFHpy\nEYhd7zVbNSQqQdM+KUFzW+pibZDYrmo13eI6e/tNdRxum+qMJr2vT9z8vn7nEZDc3bxHWrkNj7Tuta7Q\nE+7K1Ofoe64LEo+Z995Yfm5V5u15B+fcnuddtmxWik7k/DWG7MuMzH6tKrUoXrvFHKTu9BL3Ytbl7sXZ\nGwIqQXzxBQHL/6/wXpK8WXAFiH98r7MTy37Z0IYDCa0NB2Q3/juwYse/A7xLD+0/V35o/5LIn4e+Wxof\n/W758gSDQ9LpAG+FM7KhD0+rRWecfB1nfehzyq5DVZlrjgtWqZ1633/z3K11IDPZ394LffOtzeX5D2en\nhN8szsm/7oUm/7Ke8fyHJFh+FIyCgQQA2DOaLA;\n\nDEFINE LABEL 17\neJyLYWBgkNGwtlFX+WPDLHXUOUowxC+Jb35YKm9ughpvSM1Dvr0zpQUj1gqLrNixWf7zgTj1skM3NLcc\nvKqVu+eqltIWoHaGfhfFCDn72Y0Jdmt659sB1TucWyrsnLjZ2+39XmZP88M7ff4c0w3cezw+bMtBoejU\nbSfiTi5qSdDqaUngKe+M+5wyMXpJpFSEZNBvbx7PM67eHhed+7yuO8aEgMyeWnjSTaQoxC+4qGnu2RK1\n7a3lZYf+V1ofy234c2xRy4Z90u2Jm0M7ORYJd73uudLJU36t430iSN+3KbKhn6d+TzeaNn3Nxmlau0Bi\nNZMu+byeUZcjtGj+prZlRgccV+TusV85e33dyqPz/6/4k9W8fH4Y63J7e5BakZ1d7s773RdaHIboldtq\nZim5vdKab3el9bOTG0xAYlLPIgJvPAvxE3o5PcDzzZLIo29zE/6/dy7Y+2FF194PpVMa3h+dP+Hl9DWR\nz2I28LxesvXV9w37GEbBKBhkAAAre6ZE;\n\nDEFINE LABEL 18\neJwrYGBgsGC7pmjBJupvzZqbYMfyvp+RuWsxI/OWg7cFyg7NFDQ6AFTCUCJvZJavaDZ1m1z/sh+yDHPM\n5a7VmsqviNFXPOigqyQo91ZxtqqP3mzVQ4b31P8bPdIC6UlRTY2yM14SWWamFg3iFypMX9NseGvdI1vJ\ndSD+y6D5GkmhSyKVQxNaNYJvgcVOunlLHXc/K/0g1FvqdOxkeZDY95p76hU19rm1VXr9+yvf7wWJrc48\nKeFW3iX5vcZdfFELjzRIbNms2aovZt4K0p0RUf9uuuhqkNjj2SEK5mtmq4LYN+brJTYv/54OYq+c+Xz7\n7XnzN3UuvbXu+UaI3Sz7F2uz7Bf0YTxwrpzxAESs4QAwbA5fU3xzPEZt4ennulHnjMwuXzjqLHwxwDv0\nQkzI7bOpUUVHd2Z8POpc8PKEbPPjU/3L4s/M3wTSK/LioEPgy0rrjjefzQ68L7Ww/GRtY/KFxdnwq6BP\n3rcVMXnf/mRZfqqbVffBfaHLO8EVE15eWz35heQ6+Se31ik9Fl29+FHX4sTHbQvCnjPM4XltP5vp/dH5\nvz5eWqHz/d7G+7+XbJX8t2QrwygYBRQCADr9wI4;\n\nDEFINE LABEL 19\neJzTZ2BgKDO7F8pukBC+QO194mqlvdnb5CZXM0i/7mGVtJ99TCJkVaPU8+1WskYHMpWtj4loVx29oPP5\nAFAbQ4DLhqReV96l7e5GB5w9D56y8J18vdTv2k2DgGs3s4IuXUsKZTkbFZG5c2K00SSvOLVokJ719VWZ\nljX37lvWfD7wvt4+N7sxM1ateX7YopZ7obFtCeGhnbkJR/r7K/ZMUuusmVQ4kWHij6kB3W0LArr7l3n1\n3ttYNC3g6rJZSo9uz8t9xTAKRsEooBgAAHmAVOY;\n"
});
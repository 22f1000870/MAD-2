from flask import Flask, render_template, redirect

BOARD=[0]*9 #1-D representation of board
NEXT =1 #1=X, -1=O

app=Flask(__name__)

@app.route('/')
def homepage():
    return render_template('tic.html',board=BOARD,next=NEXT)

def checkstate(board):
    patts=[(0,1,2),(3,4,5),(6,7,8)(0,4,8)(2,4,6),(0,3,6),(1,4,7),(2,5,8)]
    for p in patts:
       t=sum([board[x] for x in p])
       if (t==3):
          return 1
       elif(t==-3):
          return -1
    r=0
    for i in board:
       if i==0:
          return 0
    return 2

@app.route('/set/<int:i>')
def setvalue(i):
    global BOARD, NEXT
    BOARD[i]=NEXT
    NEXT=-NEXT
    r=checkstate(BOARD)
    if r==0:
       return redirect('/')
    else:
       return render_template('end.html',winnner=r,board=BOARD,next=NEXT)
@app.route('/new')
def newgame():
 pass
app.run()
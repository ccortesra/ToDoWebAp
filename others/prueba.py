
class Stack:
    def __init__(self):
        self.stack = []

    def Push(self,val):
        self.stack.append(val)
    
    def Pop(self):
        return self.stack.pop()
    

def main():
    siguientes = Stack()
    siguientes.stack = ['p5','p4','p3','p2','p1']

    pasados = Stack()

    while siguientes != [] or pasados != []:
        d = input()

        if d == '1': # Responder
            siguientes.Pop()
            if siguientes.stack == []:
                siguientes.stack = pasados.stack.copy()
                pasados.stack = [] 

        elif d == '2': # Siguiente
            if len(siguientes.stack) > 1:
                X = siguientes.Pop()
                pasados.Push(X)
        else: # Anterior
            if len(pasados.stack) > 0:
                X = pasados.Pop()
                siguientes.Push(X)

    
main()
        


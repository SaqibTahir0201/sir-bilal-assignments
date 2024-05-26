import tkinter as tk

def calculator(value):
    try:
        h1.config(text=eval(f"{display_1.get()} {value} {display_2.get()}"))
    except ZeroDivisionError:
        h1.config(text="ERROR")
    except Exception as e:
        print(e)
        h1.config(text="")

root = tk.Tk()

display_1 = tk.Entry(root)
display_1.pack()

display_2 = tk.Entry(root)
display_2.pack()

h1 = tk.Label(root)
h1.pack()

button_plus = tk.Button(root, text="+", command=lambda: calculator("+"))
button_plus.pack()

button_minus = tk.Button(root, text="-", command=lambda: calculator("-"))
button_minus.pack()

button_multiply = tk.Button(root, text="*", command=lambda: calculator("*"))
button_multiply.pack()

button_divide = tk.Button(root, text="/", command=lambda: calculator("/"))
button_divide.pack()

root.mainloop()
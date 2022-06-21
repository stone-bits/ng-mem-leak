# Angular App Memory Leak Demo

Project demonstrating how memory leaks occur in angular apps, when we forget to unsubscribe from infinite RxJs strems of data.

Project reproduces memory leak in feature-a/comp-a/comp-a.component.

To reproduce:
1. After app loaded take initial memory snapshot.
2. "Go to A" link, that load leaky component.
3. "Go to Home" you got leak. Take memory snapshot. Compare it with previous. You have new detached DOM nodes that will never be collected by garbage collertor. Compontnt "comp-a" should have been destroyed, but it wasn't. You have js memory leak (compontnt itself), callback leak (events still handled) and DOM nodes leak (paragraph with text "comp-a works!"). 
     
Every time you return to "Go to A" link again from home or B component, you get additional new leak.

To fix leak uncomment code in ngOnInit function.

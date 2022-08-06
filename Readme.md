# Pobu 
**LTS version:** Not deployed yet

**Latest version:** v0.1.1

Pobu is programming language for creating scripts and simulating user-like events. Thanks to C/C++ native addons, pobu is fast and safe to type. Language itself is really beginner friendly, no previous expiriences in programming are not a problem.

Pobu's Website is under construction. You can check its status in [website folder](https://github.com/Borecjeborec1/Pobu/tree/main/website).

# Documentation
Pobu is open-source programming language and everyone can use it. Please, use only for your personal purposes ONLY. Do NOT harass others! You never know, when you can be the target.

- [Basic setup & Hello world](#1-basic-setup--hello-world)
    - [Installation](#11-installation)
    - [Hello World](#12-hello-world)
- [Syntaxes](#2-syntaxes)
    - [Comments](#20-comments)
    - [Listeners](#21-listeners)
        - [On Press](#211-on-press)
        - [On Release](#212-on-release)
        - [On Write](#213-on-write)
        - [On Click](#214-on-click)
        - [On Start](#216-on-start)
    - [Event emitters](#22-event-emitters)
        - [Press](#221-press)
        - [Write](#222-write)
        - [Move](#223-move)
        - [Click](#224-click)
        - [Wait/Sleep](#225-waitsleep)
- [Examples](#3-examples)
- [Limitations](#4-known-limitations)


## 1. Basic setup & Hello world

### 1.1 Installation 
You can download the latest stable version [Here](https://github.com/Borecjeborec1/Pobu/releases/tag/v0.1.1).
Or you can go to the GitHub releases and find your desired version there.

When the download is completed, you are done. No other tasks are needed for basic usage. *(Later we will look closer to the windows PATH enviroment settings and file location. The whole Pobu installer is comming soon!)*

### 1.2 Hello world
We will start with the most basic programm. The *Hello World* writer. You can find the source code in examples folder or [here](./examples/hello_world/hello_world.pobu)

```Pobu
on write hello
write world
```

Lets dive into it. So we have 2 lines of code. Even if you do not know any programming language, you can understand this programm. 
Basicly, here is what the programm will do: 
- On write hello -> Listen for keyboard, if you type hello the following block will be executed 
- write world -> Simulate the keyboard presses in **w o r l d** order

Without further explanation, let's test it. You can download the Hello world source code [here](./examples/hello_world/hello_world.pobu), or you can copy & paste it into the text file, in any text editor you like. Don't forget to save it, before closing! 

Now when we have our code ready, we can run it. Here comes the trickier part if you have no previous expiriences, but if you follow these steps, nothing can go wrong.
1. Open a terminal
2. Paste Pobu file location followed by a space (*"C:/Users/test/Pobu.exe "* in my case, your path should be the path where you downloaded the pobu software)
3. Now paste your hello_world app location (*"C:/Users/test/hello_world.pobu"* in my case).
4. Your whole terminal command should look like this *"C:/Users/test/Pobu.exe C:/Users/test/hello_world.pobu"*. Now press enter.
Any time you write hello, this app will simulate *"world"* for you. If you want to quit press `CTRL`+`Q` to the terminal or just close it, the process will be ended together.
 
## 2. Syntaxes
### 2.0 Comments
They are just lines of code that are ignored by the compiler. They start with the `//` prefix
```
// Here can be written anything
// literally
on press a // it's ignored
press b // -.-
```
### 2.1 Listeners
Listeners are key part of Pobu Language. They are lines of code that starts with the keyword `on`.
##### 2.1.1 on press
The most common listener. It will listen on any key press. **On press only listens to keys not whole words!**
```
on press a // listener for the press of key "a"
*do stuff*
```
##### 2.1.2 on release
This listener will listen on any key released. 
```
on release a // listener for the release of key "a"
*do stuff*
```
##### 2.1.3 on write
This listener will listen on any word written. 
```
on write best // listen for "best" word 
*do stuff*
```
##### 2.1.4 on click
This listener will listen to any mouse click. 
```
on click // listener for the mouse tap
*do stuff*
```
##### 2.1.5 on start
This is not listener at all, because it is fired only once, when the programm begins, but still useful for some cases.
```
on start // do when the app starts
*do stuff*
```
### 2.2 Event emitters
Event emitters are doing the hard work for us. They are used to simulate the user-like events.
##### 2.2.1 press
The most common emitter. It will press any key. **press only emitts one character!**
```
press a // press "a" key
```
##### 2.2.2 write
This emitter is nearly same as press emitter, but it is used for whole words not characters.
```
write you are the best // write "you are the best" keys sequence
```
##### 2.2.3 move
This emitter is used to control the mouse cursor. It will move the cursor to desired positions
```
// relative movement
move 100 200 // move the cursor 100 on x axis and 200 on y axis

//absolute movement
move absolute 100 200 // move the cursor on the 100, 200 coordinates
```
##### 2.2.4 click
This emitter is used to control and click the mouse cursor. It will click cursor on desired positions
```
// relative movement
click 100 200 // click on the 100 on x axis and 200 on y axis

//absolute movement
click absolute 100 200 // click on the on the 100, 200 coordinates
```
##### 2.2.5 wait/sleep
This emitter initiate an stop. How long the stop will be indicates the parameter in miliseconds!
```
wait 1000
```

## 3. Examples 
##### [3.1 League of Legends](./examples/league-of-legends/)
##### [3.2 Osu!]() Not yet!
##### [3.3 Fortnite]() Not yet!


## 4. Known limitations
v0.1.1

- Windows only! (More OS support in future)


## 5. Comming soon!
v0.1.1

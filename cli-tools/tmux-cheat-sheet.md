---
tags: ["tmux","cli"]
---

<TagLinks />

# Tmux Cheat Sheet

## Sessions

Start a new session
``` sh
$ tmux

$ tmux new

$ tmux new-session

# while in tmux
:new
```

Start named session
``` sh
$ tmux new -s mysession

# while in tmux
:new -s mysession
```

Kill/Delete named session
``` sh
$ tmux kill-ses -t mysession

$ tmux kill-session -t mysession
```

Kill/Delete all Sessions
``` sh
$ tmux kill-session -a
```

Kill/Delete all Sessions but named session
``` sh
$ tmux kill-session -a -t mysession
```

<br>

Rename session `Ctrl` + `b` `$`

Detach session `Ctrl` + `b` `d`

<br>

Detach others on the session (Maximize window by detach other clients)
```sh
# while in tnux 
:attach -d
```

List sessions
```sh 
$ tmux ls

$ tmux list-sessions
```

`Ctrl` + `b` `s`


Attach to last session
```sh
$ tmux a

$ tmux at

$ tmux attach

$ tmux attach-session
```

Attach to named session
``` sh
$ tmux a -t mysession

$ tmux at -t mysession

$ tmux attach -t mysession

$ tmux attach-session -t mysession
```

Move to previous session `Ctrl` + `b` `(`

Move to next session `Ctrl` + `b` `)`


## Windows

Start named session with a named window 
```sh
$ tmux new -s mysession -n mywindow
```

Create window `Ctrl` + `b` `c`

Rename current window `Ctrl` + `b` `,`

Close current window `Ctrl` + `b` `&`

Previous window `Ctrl` + `b` `p`

Next window `Ctrl` + `b` `n`

Switch/select window by number `Ctrl` + `b` `0` ... `9`


Reorder window, swap window number 2(src) and 1(dst)
``` sh
# while in tmux
:swap-window -s 2 -t 1
```

Move current window to the left by one position
```sh
# while in tmux
:swap-window -t -1
```



## Panes

Toggle last active pane
`Ctrl` + `b` `;`

Split pane vertically
`Ctrl` + `b` `%`

Split pane horizontally
`Ctrl` + `b` `"`

Move the current pane left
`Ctrl` + `b` `{`

Move the current pane right
`Ctrl` + `b` `}`

Switch to pane to the direction

`Ctrl` + `b` `←` 

`Ctrl` + `b` `→` 

`Ctrl` + `b` `↓` 

`Ctrl` + `b` `↑` 

Toggle synchronize-panes(send command to all panes)
```
# while in tmux 
:setw synchronize-panes
```

Toggle between pane layouts
`Ctrl` + `b` `Spacebar`

Switch to next pane
`Ctrl` + `b` `o`

Show pane numbers
`Ctrl` + `b` `q`

Switch/select pane by number
`Ctrl` + `b` `q` `0` ... `9`

Toggle pane zoom
`Ctrl` + `b` `z`

Convert pane into a window
`Ctrl` + `b` `!`

Resize current pane height(holding second key is optional)

`Ctrl` + `b` + `↑` 

`Ctrl` + `b` `Ctrl` + `↑` 

`Ctrl` + `b` + `↓` 

`Ctrl` + `b` `Ctrl` + `↓` 

Resize current pane width(holding second key is optional)

`Ctrl` + `b` + `←` 

`Ctrl` + `b` `Ctrl` + `←` 

`Ctrl` + `b` + `→` 

`Ctrl` + `b` `Ctrl` + `→` 

Close current pane
`Ctrl` + `b` `x`


## Copy Mode

Use vi keys in buffer
``` sh
:setw -g mode-keys vi
```

Enter copy mode
`Ctrl` + `b` `[`

Enter copy mode and scroll one page up
`Ctrl` + `b` `PgUp`

Quit mode `q`

Go to top line `g`

Go to bottom line `G`

Scroll up `↑`

Scroll down `↓`

Move cursor left `h`

Move cursor down `j`

Move cursor up `k`

Move cursor right `l`

Move cursor forward one word at a time `w`

Move cursor backward one word at a time `b`

Search forward `/`

Search backward `?`

Next keyword occurance `n`

Previous keyword occurance `N`

Start selection `Spacebar`

Clear selection `Esc`

Copy selection `Enter`

Paste contents of buffer_0
`Ctrl` + `b` `]`

Display buffer_0 contents
```sh 
# while in tmux 
:show-buffer
```

Copy entire visible contents of pane to a buffer
```sh 
# while in tmux 
capture-pane
```

Show all buffers
```sh 
# while in tmux 
list-buffers
```

Show all buffers and paste selected
```sh 
# while in tmux 
choose-buffer
```

Save buffer contents to buf.txt
```sh 
# while in tmux 
save-buffer buf.txt
```

Delete buffer_1
```sh 
# while in tmux 
delete-buffer -b 1
```

## Misc

Enter command mode `Ctrl` + `b` `:`

Set OPTION for all sessions
```sh
# while in tmux
:set -g OPTION
```

Set OPTION for all windows
```sh
# while in tmux
:setw -g OPTION
```

## Help

Show every session, window, pane, etc...
```sh
$ tmux info
```

<br>

Show shortcuts `Ctrl` + `b` `?`

RTFM
```sh
$ man tmux
```
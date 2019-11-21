---
tags: ["cli", "jump", "cd", "file-system"]
---

<TagLinks />

# z - jump around


If you find yourself cd-ing to the same directories all the time then [*z*](https://github.com/rupa/z) is the command for you. After installing *z* start cd-ing around. After a sometime *z* will have enough data to start jumping around.

Basic Usage:
```sh
z Dow # Im my case jumps to ~/Downloads
``` 

Jump around subdirectories:
```sh
z -c Dow 
``` 

Delete the current directory from z's history:
```sh
z -x
```

::: warning Note &mdash; 2019-11-20
z is currently only available for bash and zsh
:::
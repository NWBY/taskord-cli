taskord-cli
===========

Create tasks from your terminal

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/taskord-cli.svg)](https://npmjs.org/package/taskord-cli)
[![Downloads/week](https://img.shields.io/npm/dw/taskord-cli.svg)](https://npmjs.org/package/taskord-cli)
[![License](https://img.shields.io/npm/l/taskord-cli.svg)](https://github.com/NWBY/taskord-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g taskord-cli
$ taskord COMMAND
running command...
$ taskord (-v|--version|version)
taskord-cli/0.0.0 darwin-x64 node-v16.2.0
$ taskord --help [COMMAND]
USAGE
  $ taskord COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`taskord create TASK`](#taskord-create-task)
* [`taskord hello [FILE]`](#taskord-hello-file)
* [`taskord help [COMMAND]`](#taskord-help-command)
* [`taskord setup [FILE]`](#taskord-setup-file)

## `taskord create TASK`

Create a new task

```
USAGE
  $ taskord create TASK

OPTIONS
  -d, --done
  -h, --help  show CLI help
```

_See code: [src/commands/create.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.0/src/commands/create.ts)_

## `taskord hello [FILE]`

describe the command here

```
USAGE
  $ taskord hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ taskord hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.0/src/commands/hello.ts)_

## `taskord help [COMMAND]`

display help for taskord

```
USAGE
  $ taskord help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `taskord setup [FILE]`

describe the command here

```
USAGE
  $ taskord setup [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/setup.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.0/src/commands/setup.ts)_
<!-- commandsstop -->

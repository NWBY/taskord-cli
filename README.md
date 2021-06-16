# taskord-cli

Create tasks from your terminal

<!-- toc -->
* [taskord-cli](#taskord-cli)
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
taskord-cli/0.0.1 darwin-x64 node-v14.17.1
$ taskord --help [COMMAND]
USAGE
  $ taskord COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`taskord create TASK`](#taskord-create-task)
* [`taskord help [COMMAND]`](#taskord-help-command)
* [`taskord setup`](#taskord-setup)

## `taskord create TASK`

Create a new task

```
USAGE
  $ taskord create TASK

OPTIONS
  -d, --done
  -h, --help             show CLI help
  -p, --product=product
```

_See code: [src/commands/create.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.1/src/commands/create.ts)_

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

## `taskord setup`

Setup your Taskord webhook

```
USAGE
  $ taskord setup

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/setup.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.1/src/commands/setup.ts)_
<!-- commandsstop -->

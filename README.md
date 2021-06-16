# taskord-cli

Create tasks from your terminal

<!-- toc -->

-   [Usage](#usage)
-   [Commands](#commands)
    <!-- tocstop -->

# Usage

<!-- usage -->

1. Install with NPM

```sh-session
$ npm install -g taskord-cli
```

2. Then run the setup command:

```sh-session
$ taskord setup
```

You will need to enter your Webhook URL which you can create on the 'Integrations' page in your Taskord account. Make sure to create a **Simple Webhook** and select whether you want it to be for a product or just a general webhook.

Once you've entered your webhook URL, you will be asked `Is this a product webhook? [y/n]`. If you created the webhook for a product enter `y` and hit enter, you will then be asked for the name of your product, make sure the name is the same as the product on Taskord.

3. Create a new task:

```sh-session
$ taskord create "Enter your task here"
```

If the task is done you can pass the `--done` or `-d` flag like so:

```sh-session
$ taskord create "Enter your task here" --done
```

If the task is for a product you will need to tell the CLI which product it is for by passing the `--product` or `-p` flag like so:

```sh-session
$ taskord create "Enter your task here" --product="Sotent"
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`taskord create TASK`](#taskord-create-task)
-   [`taskord help [COMMAND]`](#taskord-help-command)
-   [`taskord setup`](#taskord-setup)

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

_See code: [src/commands/create.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.0/src/commands/create.ts)_

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

_See code: [src/commands/setup.ts](https://github.com/NWBY/taskord-cli/blob/v0.0.0/src/commands/setup.ts)_

<!-- commandsstop -->

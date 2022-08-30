---
title: Cudos blast
id: install-blast
---

**Cudos Blast** is a CLI toolkit designed to make developing on the Cudos chain as simple as possible. You easily build a project ready to work with the Cudos chain. 

You can use it to:

1. **Scaffold**, **compile** and test **Rust** smart contracts. (You can test using JavaScript and Rust).

2. **Deploy** smart contracts on a local, test or public network.

3. **Interact** with smart contracts using `blast.config.js` on a specified network.

4. **Spin up a local** [**`Cudos node`**](https://github.com/CudoVentures/cudos-node) to interact with. 

# 00 Prerequisites

Before you get started with **Cudos Blast**, ensure you have met the following prerequisites:

| Prerequisite   | Minimum version | Recommended version |
| ---            | ---             | ---                 |
| Install [Node.js](https://nodejs.org/en/download/package-manager/)       | 14.15.0         | 16.10.0             |
| Install [npm](https://www.npmjs.com/)            | 6.9.0           | 7.24.0              |
| Install [Docker engine](https://docs.docker.com/engine/install)  | 19.03.13        | 20.10.12            |
| Install [Docker compose](https://github.com/docker/compose) | 1.27.4          | 1.29.2              |  

:::tip WINDOWs USERS
> For Windows users we recommend using Windows Subsystem for Linux ([WSL](https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros)).
> To avoid permission issues with `WSL`, you may have to [change](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory) `npm` default directory. 
:::

## 01 Setup Rust

The Cudos chain works with Rust

Checkout [Setup Rust](/docs/build/setup-rust)

## 02 Install Cudos Blast

### Globally - Create a new project anywhere

Use `npm` to install Cudos Blast CLI tool globally. This means you can create a new project anywhere. 

```bash
npm install cudos-blast -g

# confirm installation

blast --version
```
:::info TIP

Use `npx cudos-blast` to run commands. This ensures you are always using the latest version. 
:::

### Locally - Add to a single project

If you only want to install Cudos Blast into a single project then do the following:

```bash
# Create a folder for your project

mkdir myproject
cd myproject

# Initialise a project and follow the prompts

npm init 

# Install Cudos Blast 

npm install cudos-blast

# Confirm installation

blast --version

# Example response
2.0.0
```

:::success Congratulations 🎉

If a blast version is returned, you have **successfully** installed Cudos Blast.

:::

## 03 Use Blast help. 

You can run the following commands to get help on the command line at any time.

```shell
blast --help

```

```shell
Usage: blast <command> [arguments] [command options]

Commands:
  blast init                  Create a sample project
  blast compile               Compile the smart contracts in the workspace in
                              alphabetical order
  blast test                  Run the JavaScript tests
  blast rusttest              Run smart contracts' rust tests
  blast node                  Manage a local CUDOS node
  blast run <scriptFilePath>  Run a single script
  blast keys                  Manage node's accounts (keys)

Options:
  --version  Show version number                                       [boolean]
  --help     Show help 
```


Now try out the Counter project tutorial. 

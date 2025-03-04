# Dropbox Ignore node_modules

It is a fork of https://github.com/tmackness/dropbox-ignore-node_modules.

This NodeJS script works as a CLI that tells Dropbox to ignore the node_modules directory.

As per [Dropbox Documentation](https://help.dropbox.com/en-us/files-folders/restore-delete/ignored-files) you can see the simple command used to do this.

## Usage

Install package globally.

```bash
npm install @louislam/dropbox-ignore-node_modules -g
```

Navigate to the working directory that contains your NodeJS project with the node_modules directory. Then you can run the this script.

You may use the command `dropignore` or `di` for short.

```bash
cd C:\Dropbox\my-project
di
```

## Advanced Usage

```
Usage: di [status|ignore|reset] [folder]
Default folder: node_modules
Default action: ignore
```

## Notes

Tested on Windows only. 

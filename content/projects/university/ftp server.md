+++
title = "FTP Server"
date = 2021-10-01
[taxonomies]
primary-language = ["Python"]
[extra]
image = "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
category = "Networks and Distributed Systems"
+++
This project is currently in a private repository. If you would like a full demonstration of features, please shoot me an email at [agnesshan@live.com](mailto:agnesshan@live.com).

### Project Description
The goal of this project was to develop a client for FTPS to securely transfer files to and from a FTPS server. 

The following text is duplicated from the README for this project.

## Approach

My program follows the following steps:

1. Default arguments are set to ensure if optional arguments aren't given, the defaults are used.
2. Arguments are parsed and kept in an array
3. If no arguments are given, an error is thrown and the client quits.
4. If the command given is not supported, an error is thrown and the client quits
5. If the command is `ls`, `mkdir`, `rm`, or `rmdir`, the client checks that there is only one additional argument given (the URL). If there are extra arguments or insufficient arguments, an error is thrown. 
	1. The URL is then parsed and default arguments are overridden if the optional is given in the URL. If no HOST or PATH is given, an error is thrown and the client quits.
6. If the command is `cp` or `mv`, the client checks that one of the arguments is a URL and the other is a local path. 
	1. The URL is then parsed and default arguments are overridden if the optional is given in the URL. If no HOST or PATH is given, an error is thrown and the client quits.
	2. If both arguments are a local path or both paths are URLs, the client throws an error and quits.
	3. If the local path given is invalid, the client throws an error and quits.
7. Each command goes through the respective FTP command.

## Challenges

- When uploading file with STOR, not all the bytes were sending. This was addressed in Piazza post @260, with the solution being unwrapping and closing the data channel.
- After executing LIST on a directory, I wasn't receiving an end message from the control channel. This was also fixed by unwrapping and closing the data channel. 
- Testing was a big challenge, as there were a lot more test cases for this client. I ended up listing all the possible cases (seen below) and going through them one by one. I didn't conclude testing until I was able to go through each test case in order without having to edit the client. 
- Organization was also a big challenge. I started off by writing the FTP commands into different helper functions. However, this proved to be challenging when having to parse the args given in the command line. I ended up re-organizing the program to what it is now. 

## Testing

The following tests were run both locally and on the Khoury linux machines:
- Testing different URLs formats passed:
	- ftps://ftp.3700.network/PATH
	- ftps://ftp.3700.network
	- ftps://user@ftp.3700.network/PATH
	- ftps://user:pass@ftp.3700.network/PATH
	- ftps://ftp.3700.network:21/PATH
	- ftps://user:pass@ftp.3700.network:21/PATH
	- etc.
- Testing invalid arguments:
	- No command given
	- Too many arguments given
	- Too little arguments given
- Testing the different commands (Attempt meaning it was expected to fail):
	- `ls`
		- Base directory, with "/" and ""
		- One level
		- Two level
		- Three level
		- Nonexistant directories
		- Empty directories
		- File given instead of directory
	- `mkdir`
		- Create directory in "/"
		- Attempt to recursively make two levels
		- Two levels when first level exists
	- `rm`
		- Delete file in "/"
		- Delete file in subdirectory
		- Attempt to delete nonexistant file
	- `rmdir`
		- Delete directory in "/"
		- Delete directory in a directory
		- Attempt to delete directory with content
	- `cp`
		- Copying local file to server
			- Image
			- Text file
		- Copying server file to local
			- Image
			- Text file
		- Attempt to copy nonexistant local file
		- Attempt to copy to nonexistant server location
		- Attempt to copy nonexistant server file
		- Attempt to copy to nonexistant local location
		- Overriding existing local file
		- Overriding existing server file
		- Attempt to copy local to local
		- Attempt to copy server to server
	- `mv`
		- Moving local file to server
			- Image
			- Text file
		- Moving server file to local
			- Image
			- Text file
		- Attempt to move nonexistant local file
		- Attempt to move to nonexistant server location
		- Attempt to move nonexistant server file
		- Attempt to move to nonexistant local location
		- Overriding existing local file
		- Overriding existing server file
		- Attempt to move local to local
		- Attempt to move server to server
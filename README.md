# snoop
TCC restricts access to the device camera and microphone to protect user data from unauthorized access.

But... If you trusted your browser with your microphone, Snoop can show you how a man-in-the-browser attack can secretly record you.

## Usage
If you don't have VOODOO installed
```sh
$: gem install get-voodoo
```

Clone or download the repository, and run the `voodoo template` command.
```sh
$: git clone git@github.com:breakpointHQ/snoop.git
$: voodoo template ./snoop -o play.webm
```

The `save` parameter can be used to choose of often (in milliseconds) audio will be saved to the file.
```sh
$: voodoo template ./snoop -o play.webm --params save:1000
```

## Legal Disclaimer
Usage of this code for attacking targets without prior mutual consent is illegal. It's the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program. Only use for educational purposes.

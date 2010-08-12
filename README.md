## One File Remote Console.log for node.js

LICENSE: BSD 
AUTHOR: Alex Kessinger http://alexkessinger.net @voidfiles
REQUIREMENTS: node.js 


This should be fairly simple to run, you just need to include the provided debug js in your webpage before you want to use it.

### Instructions 

Install node.js, once you have node.js installed you can run this script from the command line like so

    
    >>> node remove_console.js
    Server running at http://127.0.0.1:8124/
    

Then you can in your HTML include this http://127.0.0.1:8124/debug.js

And then you will be able to call log() and see the output in your console

There is also helper function called catchRemote. It accepts a function, which it will immediately execute. If it catches an error it log it remotely.

    
    >>> catchRemote(function(){ throw("WTF");});
    [ { error: 'WTF' } ]
    
If you want you can change the host, and port 
by passing them as arguments

    >>> node remove_console.js 192.168.1.101 8001
    Server running at http://92.168.1.101:8001/
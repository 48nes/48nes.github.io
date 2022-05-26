+++
title = "Reliable Transport Protocol"
date = 2021-11-05
[extra]
image = "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
languages = ["Python"]
+++
This project is currently in a private repository. If you would like a full demonstration of features, please shoot me an email at [agnesshan@live.com](mailto:agnesshan@live.com).

### Project Description
We implemented two programs: 3700send and 3700recv to send and receive packets respectively. Our 3700send program would start off by sending a packet and then check to see the full message is sent. Once we received an ACK from 3700recv, the packet would be checked off.

Our 3700recv program would continuously listen for packets while searching for an EOF flag, at which point it would send an ACK back to our sender program. 
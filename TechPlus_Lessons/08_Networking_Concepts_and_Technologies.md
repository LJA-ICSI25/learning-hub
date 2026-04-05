# Lesson 8: Networking Concepts and Technologies

Source: CompTIA Tech+ (FC0-U71) Study Guide PDF — chapter content, lab, and review questions (PDF pages 463–528).

---
Chapter
8
Networking Concepts
and Technologies
THE FOLLOWING COMPTIA TECH+ FC0- U71
EXAM OBJECTIVES
ARE COVERED IN THIS
CHAPTER:
 ✓ 1.0 IT Concepts and T erminology
 ✓ 1.3 Compar
e and contrast common units of measure.
 ■ Throughput unit
 ■ Bits per second (bps)
 ■ Kilobits per second (Kbps)
 ■ Megabits per second (Mbps)
 ■ Gigabits per second (Gbps)
 ■ Terabytes per second (Tbps)
 ✓ 2.0 Infrastructure
 ✓ 2.3 Compare and contr
ast storage types.
 ■ Local network storage
 ■ Network- attac hed storage (NAS)
 ■ File server
 ■ Cloud storage service
 ✓ 2.7 Compare and contr ast common internet service types.
 ■ Fiber optic
 ■ Cable
 ■ Digital subscriber line (DSL)
 ■ Wireless
 ■ RF
 ■ Satellite
 ■ Cellular

 ✓ 2.8 Identify basic networ king concepts.
 ■ Basics of network communication
 ■ Network identifiers
 ■ IP address
 ■ Media access control (MAC) address
 ■ Ports
 ■ Basic network services
 ■ Secure web browsing
 ■ File transfer
 ■ Email
 ■ Networking devices
 ■ Modem
 ■ Router
 ■ Switch
 ■ Access point
 ■ Firewall
 ■ Networking models
 ■ Client/server
 ■ Peer- to- peer
 ■ Local area network (LAN)
 ■ Wide area network (WAN)
 ✓ 2.9 Explain the basic capabilities of a small wireless
netw
ork.
 ■ 802.1 1n/ac/ax
 ■ Speed considerations
 ■ Interference and attenuation factors
 ■ Older vs. newer standards
 ■ Band options
 ■ 2.4GHz
 ■ 5GHz
 ■ 6GHz
Technet24

 ✓ 6.0 Security
 ✓ 6.5 Given a scenar
io, configure security settings for a small
wireless network.
 ■ Changing the service set identifier (SSID)
 ■ Changing the default password
 ■ Encrypted vs. unencrypted
 ■ Open
 ■ Pre- shared key
 ■ Wireless Protected Access (WPA)
 ■ Wireless Protected Access 2 (WPA2)
 ■ Wireless Protected Access 3 (WPA3)

It seems like nearly everyone is on the Internet these days.
Media used to be restricted to desktop and laptop computers
but is now accessible by small handheld devices such as smart-
phones and even smartwatches. This chapter is called “Networking Concepts and Technol-
ogies,” but it could just as easily be called “Getting on the Internet.”
Now, to be fair, this chapter is about setting up a small network for your small office/
home office (SOHO) environment, which means it’s about connecting computers to each
other and not just the Internet. It just happens that many of us get twitchy when we have to
go more than a few hours without getting our update on what’s going on in the world.
To start off this chapter, I’ll cover network connection types and features. If you’re new
to networking, this will be a good primer for you to understand the different types of con-
nections that you can make both within a network and when connecting your network to
the outside world. As part of that discussion, I’ll compare and contrast the different types of
connections so that you can make the best decision possible for your needs.
The second major section of this chapter will discuss key networking concepts. This
includes devices to make the network function, protocols and addressing, and the basics of
data transmission.
The third major section of this chapter will focus on setting up a small wireless network.
First, I’ll show you some key steps to take in order to set up and configure the network. I will
then take that base of information and dive into securing the network. All of this is designed to
give you what you really want: a reliable connection to other computers (and the Internet!).
Exploring Connection Types
and Features
There are a lot of analogies that we can make between humans and computers. You’ve
already heard analogies for hardware, such as the motherboard being the nervous system
of a computer and the processor the brain. These comparisons continue when it comes to
connecting computers together.
For people to communicate with one another, they need to be connected somehow. It used
to be that people needed to be in the same physical location to speak to each other. Then,
technology improved, and by 1876 people could say things like, “Mr. Watson, come here.
I want to see you,” into a little box with wires sticking out of it, and other people could hear
them in the next room. That technology worked well enough, but then humans figured out
how to communicate via radio waves. Today, humans are so advanced as a species that when
some apparently crazy individual walks down the street seemingly talking loudly to himself,
Technet24

Exploring Connection Types and Features 423
he might actually be talking to a good friend halfway around the world by using a small
wireless device in his ear. The line between insanity and technology- enabled has blurred a bit
possibly,
 but that’s not the point of this section.
The point is that computers need to be connected to each other to communicate as well.
The same also holds true for our other mobile electronic devices. The first computer net-
works relied on wired physical connections, and technology has evolved to provide relatively
high- speed wireless communications as well.
There are several available options when it comes to connecting devices together.
 These
options fall into two major buckets: wired and wireless. In the next two sections, I am going
to cover these in terms of connections that you might make to the external world (that is, the
Internet) and then connections that you might make on an internal network.
There are two reasons for organizing the chapter this way. First, later in this chapter you
will learn how to set up and configure a small wireless network using a SOHO router. The
assumption is that you’re setting up a network because you will have computers (or mobile
devices) connected to this router, and you will also have this router connected to the rest of
the world. It’s hard to know how to make these connections without the right background.
Second, wired and wireless technologies have different pros and cons, which make some
better suited for external connections than for internal connections, and vice versa.
Finally, you also need to think about the future. When choosing a connection type, think
not only about what your needs are today but also what they could be in two or three years.
There is no sense in going overboard and buying a top- of- the- line solution if it’s not needed,

but you do want to plan for expansion if that’s a possibility.
The goal is that by the end of this section, you will be able to make informed decisions on
which type of connection is best for any situation.
Choosing External Network Connections
By “external” connection, I really mean “Internet” connection because that’s the most
common connection type, by a significant margin. Historically, Internet connections were
always wired and could be broadly broken into two categories: dial- up and broadband, such
as DSL or cable Internet.
 Now with 5G and other technologies, a wireless connection can
be viable for Internet use as well. Each has pros and cons but the major factors to weigh are
throughput and cost.
Your Internet connection will give you online service through an Internet service provider
(ISP). The type of service that you want will often determine your ISP choices. For example,
if you want cable Internet, your choices are limited to your local cable companies and a few
national providers. I’ll outline some of the features of each type of service and discuss why
you might or might not want a specific connection type based on the situation.
Dial- up/POTS
One of the oldest ways of communicating with ISPs and remote networks is through dial- up
connections.
 Although this is still possible, dial- up is rarely used anymore because of the
prevalence of broadband options. In addition,
 dial- up is painfully slow because of limi-
tations on modem speed,
 which tops out at 56 Kbps. (The U.S. Federal Communications

424 Chapter 8 ■  Networking Concepts and Technologies
Commission [FCC] actually limits download speeds to 53 Kbps, so there was never any
sense in modem manufacturers trying to exceed this threshold.) Dial- up uses modems that
operate over regular phone lines—  that is, the
plain old telephone service (POTS)—  and
cannot compare to speeds possible with broadband.
 In 2000, about 74 percent of American
households used dial- up Internet connections. By 2021 that number had dropped to about
0.1 percent.
 Most of the people who still use dial- up do it because high- speed access isn’t
available where they live.
The biggest advantage to dial- up is that it’s cheap and relatively easy to configure.
 The
only hardware that you need is a modem and a phone cable. You dial into a server (such as
an ISP’s server), provide a username and a password, and you’re on the Internet.
Companies also have the option to grant users dial- up access to their networks.
As with
Internet connections, this option used to be a lot more popular than it is today. Microsoft
offers a server- side product to facilitate this called Remote Access Service (RAS),
 as do many
other companies. Today, you might still hear people talking about connecting remotely to
your company’s network as “remote access.”
It seems that dial- up is considered to be a relic from the Stone Age of Internet access.
 But
these are some reasons why it might be the right solution:
 ■ The only hardware it requires is a modem and a phone cord.
 ■ It’s relatively easy to set up and configure.
 ■ It’s the cheapest online solution (usually $10 to $20 per month).
 ■ You can use it wherever there is phone service, which is just about everywhere.
Of course, there are reasons why a dial- up connection might not be appropriate.
The big
one is speed. If you need to download files or have substantial data requirements, dial- up is
probably too slow.
 In addition, with limited bandwidth, it’s really good only for one com-
puter. It is possible to share a dial- up Internet connection by using software tools, but it’
s
also possible to push a stalled car up a muddy hill. Neither option sounds like much fun.
Reviewing Throughput Speeds
In Chapter 2, “Peripherals and Connectors, ” you were introduced to throughput units as part
of Tech+ exam objective 1.3, “Compare and contrast common units of measure. ” Here’s a
reminder of that concept.
The most basic measure of throughput is in bits per second (bps)—  that is, how many bits
are transmit
ted across the network media (or wireless connection) any given second. Each
of the following designations increases that speed by 1000 times:
 ■ Kilobits per second (Kbps)
 ■ Megabits per second (Mbps)
 ■ Gigabits per second (Gbps)
 ■ Terabits per second (Tbps)
Technet24

Exploring Connection Types and Features 425
So, Kbps is 1,000 bps, Mbps is one million bits per second, Gbps is one trillion bits per
second, and Tbps is one quadrillion bits per second. Note that in the exam objectives, the
Tbps acronym is spelled out as Terabytes per second. Any abbreviation of bits will use a
lowercase b, whereas bytes will always be abbreviated with an uppercase B.
DSL
One of the two most popular broadband choices for home use is digital subscriber line
(DSL). It utilizes existing phone lines and provides fairly reliable high- speed access.
To use
DSL, you need a DSL modem (see Figure 8.1) and a network card in your computer. The
ISP usually provides the DSL modem (the one shown in Figure 8.1 is also a router), but you
can also purchase them in a variety of electronics stores. You use a network cable with an
RJ45 connector to plug your network card into the DSL modem (see Figure 8.2) and use the
phone cord to plug the DSL modem into the phone outlet.
FIGURE 8.1  A DSL modem

426 Chapter 8 ■  Networking Concepts and Technologies
Instead of plugging your computer directly into the DSL modem, you can
plug your computer into a router (such as a wireless router) and then plug
the router into the DSL modem. This allows multiple devices to use the
DSL connection.
There are actually several different forms of DSL, including high bit- rate DSL (HDSL) ,
very high bit- rate DSL (VDSL)
, rate- adaptiv
e DSL (RADSL), symmetric DSL (SDSL), and
asymmetric DSL (ADSL). The most popular in- home form of DSL is ADSL.
 It’s asymmet-
rical because it supports download speeds that are faster than upload speeds. Dividing up
the total available bandwidth this way makes sense because most Internet traffic is down-
loaded, not uploaded. Imagine a 10- lane highway.
 If you knew that 8 out of 10 cars that
drove on the highway went south, wouldn’t you make 8 lanes southbound and only 2 lanes
northbound? That is essentially what ADSL does.
FIGURE 8.2  The back of the DSL modem
Technet24

Exploring Connection Types and Features 427
ADSL and voice communications can work at the same time over the
phone line because they use different frequencies on the same wire.
The first ADSL standard was approved in 1998 and offered maximum download speeds
of 8 Mbps and upload speeds of 1 Mbps. Today, you will see telephone companies offer
maximum DSL download speeds of around 30 Mbps with 5 Mbps uploads. The speed you
actually get will vary depending on a lot of factors, including the distance you are from the
phone company’s equipment.
You will probably see Internet providers offering broadband speeds of
1 Gbps or faster, and they might call it DSL. Technically, though, speeds
that fast are fiber- op
tic connections, which are covered later. Over the last
few years, the lines between DSL and fiber- op
tic Internet have blurred
considerably. It used to be that you ordered one or the other. Today, it’s
more common to order a broadband speed and the provider figures out
if they will give it to you via traditional copper wires (DSL) or fiber- op
tic.
It usually depends simply upon which type of cable is run to the curb in
front of your residence. While most existing homes have copper cabling
run to them, not all have fiber. DSL providers are replacing copper with
fiber, but it will take a while for all of the old copper lines to be replaced.
Conversely, new construction might have fiber- op
tic cabling but no
copper. Ultimately, the DSL provider will tell you what speeds are avail-
able to you based on the wiring type available at your location.
One major advantage that DSL providers tout is that with DSL you do not share band-
width with other customers, whereas that may not be true with cable modems.
To summarize, here are some advantages to using DSL:
 ■ It’s much faster than dial- up.
 ■ Your bandwidth is not shared with other users.
 ■ It’s generally very reliable (depending on your ISP).
There are some potential disadvantages of using DSL:
 ■ DSL may not be available in your area. There are distance limitations as to how far
away from the phone company’s central office you can be to get DSL. Usually this isn’t a
problem in metro areas, but it could be a problem in rural areas.
 ■ DSL requires more hardware than dial- up: a network card, a network cable,  a DSL
modem, a phone cord, and line filters for each phone in the home. And you usually pay
a monthly rental fee for the DSL modem.
 ■ The cost is higher. Lower- speed packages often start off at around $30 to $40 per month,
but the ones advertised with great data rates can easily run you $100 a month or more.
 ■ If you are in a house or building with older wiring, the older phone lines may not be
able to support the full speed for which you were paying.

428 Chapter 8 ■  Networking Concepts and Technologies
That said, DSL is a popular choice for both small businesses and home users. If it’s avail-
able, it’s easy to get the phone company to bundle your service with your landline and bill
you at the same time. Often, you’ll also get a package discount for having multiple services.
Most important, you can hook up the DSL modem to your router or wireless router and
share the Internet connection among several computers.
To see whether DSL is available in your area, go to
www.dslreports.com.
You can also talk to your local telephone service provider.
With many people using their mobile phones as their home phones and landlines slowly
fading into history, you may wonder whether this causes a problem if you want DSL. Not
really. Many phone providers will provide you DSL without a landline (called naked DSL).
Of course, you are going to have to pay a surcharge for the use of the phone line if you don’t
already use one.
Tech+ exam objective 2.7, “Compare and contrast common internet ser-
vice types,” wants you to be familiar with DSL, cable, and fiber- op
tic
wired connectivity.
Cable
The other half of the popular home- broadband duet is the cable modem . These provide
high- speed Internet access through your cable service, much like DSL does over phone lines.

You plug your computer into the cable modem using a standard Ethernet cable, just as you
would plug into a DSL modem. The only difference is that the other connection goes into a
cable TV jack instead of the phone jack. Cable Internet provides broadband Internet access
via a specification known as Data Over Cable Service Internet Specification (DOCSIS).
Anyone who can get a cable TV connection should be able to get the service.
As advertised, cable Internet connections are generally faster than DSL connections. While
cable is generally regarded as faster than DSL, a big caveat to these speeds is that they are
not guaranteed, and they can vary. And again, with many phone companies not really differ-
entiating between DSL and fiber- optic, it can be difficult to understand exactly what you’re
comparing.
One of the reasons that speeds may vary is that you are sharing available bandwidth
within your distribution network.
 The size of the network varies, but it is usually between
100 and 2,000 customers. Some of them may have cable modems too, and access can be
slower during peak usage times. Another reason is that cable companies make liberal use of
bandwidth throttling. If you read the fine print on some of their packages that promise the
fast speeds, one of the technical details is that they boost your download speed for the first
10 MB or 20 MB of a file transfer, and then they throttle your speed back down to your
normal rate.
Technet24

Exploring Connection Types and Features 429
It may seem as though I am a bit negative about cable modems, but you need to under-
stand exactly what you are getting. In practice, the speeds of cable modems are pretty
comparable to those of DSL. Both have pros and cons when it comes to reliability and speed
of service, but most of that varies by service provider and isn’t necessarily reflective of the
technology. When it comes right down to it, the choice you make between DSL and cable (if
both are available in your area) may depend on which company offers the best package deal:
phone and DSL through your telephone company or cable TV and cable modem from your
cable provider.
To summarize, here are the advantages to using cable:
 ■ It’s much faster than dial- up, and it can be faster than DSL (particularly for uploads).
 ■ You’re not required to have or use a telephone landline.
 ■ It’s generally very reliable (depending on your ISP).
As with anything else, there are possible disadvantages to using cable.
 ■ Cable may not be available in your area. In metro areas this normally isn’t a problem,
but it could be in rural areas.
 ■ Cable requires more hardware than dial- up: a network card, a network cable,  and a
cable modem. Most ISPs will charge you a one- time fee or a monthly lease fee for the
cable modem.
 ■ Your bandwidth is shared with everyone on your network segment, usually a
neighborhood- sized group of homes. Everyone shares the available bandwidth.

 During peak times, your access speed may slow down.
 ■ The cost is higher. Lower- speed packages often start off at around $20 to $30 per
month, but the ones they advertise with the great data rates can easily run you $100 a
month or more.
Cable modems can be connected directly to a computer
, but they can also be connected to
a router or wireless router just like a DSL modem. Therefore, you can share an Internet con-
nection over a cable modem.
For detailed information about broadband Internet availability and
performance, check out www.highspeedinternet.com.
Fiber- Optic Internet
Fiber- optic cable is pretty impressive with the speed and bandwidth it delivers. For nearly all
of fiber
- optic cable’s existence,
 it’s been used mostly for high- speed telecommunications and
for network backbones.
This is because it is much more expensive than copper to install and
operate. The cables themselves are pricier, and so is the hardware at the end of the cables.
Technology follows this inevitable path of getting cheaper the longer it exists, and fiber is
really starting to embrace its destiny. Many telephone and media companies offer fiber- optic
Internet connections for home subscribers.

430 Chapter 8 ■  Networking Concepts and Technologies
An example of one such option is Fios, offered by Verizon. It offers Fiber- to- the- Home
(FTTH) service,
 which means that the cables are 100 percent fiber from their data centers
to your home. As of this writing, the fastest speeds offered were 2.3 Gbps download and
1.5 Gbps upload. That means you could download a two-  hour HD movie in just about
25 seconds.
 That’s ridiculous.
Are there any downsides to a fiber Internet connection? Really only two come to mind.
The first is availability. It’s more limited than cable or DSL, although phone companies are
rapidly installing fiber throughout the country. More rural areas will likely be the last to see
it. The second is price. That great fast connection can cost you about $200 a month.
Wireless Internet
The four Internet service types covered so far are all wired options. In some cases, wired
isn’t an option. Perhaps someone lives on a mountainside without wired choices, or maybe
someone simply wants the convenience of not being tethered to a location for Internet. The
next three options covered are wireless.
The wireless Internet options you need to know for exam objective 2.7 are
satellite, cellular, and radio frequency (RF).
Satellite
One type of broadband Internet connection that does not get much fanfare is satellite Internet.
Satellite Internet is not much like any other type of broadband connection. Instead of a cabled
connection, it uses a satellite dish to receive data from an orbiting satellite and relay station
that is connected to the Internet. Satellite connections are typically a little slower than wired
broadband connections, often maxing out at around 150 Mbps download and 3 Mbps upload.
The need for a satellite dish and the reliance on its technology are one of the major
drawbacks to satellite Internet. People who own satellite dishes will tell you that there are
occasional problems due to weather and satellite alignment. You must keep the satellite
dish aimed precisely at the satellite or your signal strength (and thus your connection reli-
ability and speed) will suffer. Plus, cloudy or stormy days can cause interference with the
signal, especially if there are high winds that could blow the satellite dish out of align-
ment. Receivers are typically small satellite dishes (like the ones used for DIRECTV or Dish
 Network) but can also be portable satellite modems (modems the size of a briefcase) or por-
table satellite phones.
Satellite Internet is often referred to as line- of - s ight wireless because it
does require a clear line of sight between the user and the transmitter.
Another drawback to satellite technology is the delay (also called connection delay), or
latency. The delay occurs because of the length of time required to transmit the data and
receive a response via the satellite. This delay (between 250 and 350 milliseconds) comes
from the time it takes the data to travel the approximately 35,000 kilometers into space and
return. To compare it with other types of broadband signals, cable and DSL have a delay
Technet24

Exploring Connection Types and Features 431
between the customer and an ISP of 10 to 30 milliseconds. With standard web and email
traffic, this delay, while slightly annoying, is acceptable. However, with technologies like
VoIP and live Internet gaming, the delay is intolerable.
Online gamers are especially sensitive to latency. They often refer to it
as ping time. The higher the ping time (in milliseconds), the worse the
response time in the game. It sometimes means the difference between
winning and losing an online game.
Finally, installation can be tricky. When installing a satellite system, you need to ensure
that the satellite dish on the ground is pointed at precisely the right spot in the sky to ensure
line of sight. This can be tricky to do if you’re not trained, but some have a utility that helps
you see how close you are to being right on (you’re getting warmer . . . warmer . . .).
Of course, satellite also has advantages or no one would use it. First, satellite connections
are incredibly useful when you are in an area where it’s difficult or impossible to run a cable
or if your Internet access needs are mobile and cellular data rates just don’t cut it.
The second advantage is due to the nature of the connection. This type of connection is
called point- to- multipoint
 because one satellite can provide a signal to a number of receivers
simultaneously. It’s used in a variety of applications from telecommunications and handheld
GPSs to television and radio broadcasts and a host of others.
All in the Name of Entertainment
As a teenager, I worked for a local television station during the summer. Each summer, the
television station would broadcast a Senior PGA golf tournament that was held at a nearby
mountain course.
Before the tournament, the crew would spend three days setting up the control truck,
cameras, and link back to the station. (It was a network with TV cameras instead of work-
stations!) Because of the remote location, the crew had to set up a satellite uplink to get
the signals back to civilization. From the control truck, a transmitter was pointed at a relay
station on the side of the mountain, which in turn was pointed at a satellite orbiting the
earth. It took a team of four engineers to get it set up. Two engineers would stay at the truck,
and two others would board ATVs and journey up the remote mountainside. Once in posi-
tion, they would set up the relay station, which looked a lot like a keg of beer with a few
antennas. The engineers at the truck would adjust their directional microwave transmitter
until the relay station received a strong signal. Then the engineers on the mountainside
would perform the arduous task of pointing their transmitter at the satellite.
It was a long and tedious process, and that’s really the point of the story. Satellite was the
only option available to complete the network, but satellite networks can be a challenge to
set up and configure.

432 Chapter 8 ■  Networking Concepts and Technologies
Cellular (Cellular Networking)
Cellular Internet connections were for years relegated to serving only one mobile device,
because connection speeds were limited. Now with fifth generation (5G) cellular available,
speeds are good enough that cellular can be considered a legitimate wireless Internet option.
5G started to become available in early 2019, replacing the earlier fourth generation (4G)
standard, which of course replaced third- generation (3G) cellular in about 2011. If you’ve
learned anything so far from this book,
 it might be that newer generations of technology
are always faster than older ones, and cellular is no different. 3G technology was limited to
about 500 Kbps downloads, and 4G enhancements over time increased that to a respect-
able 100 Mbps. With 5G, users can currently get up to 1 Gbps downloads, and major cel-
lular providers are always looking for ways to increase that.
The sixth generation (6G) of cellular networking is currently under
development, with standardization expected sometime between 2025
and 2029. Experts in the field suggest it will become commercially avail-
able around the year 2030.
Because 5G is so fast, many users choose to connect laptops or similar devices to the
Internet through their smartphones or cellular- enabled tablets.
This is called using the smart-
phone as a mobile hotspot. Once enabled on the smartphone, the laptop makes a Wi- Fi con-
nection to the phone and then has Internet access.
 In iOS, a hotspot is enabled in Settings ➢
Personal Hotspot, as shown in Figure 8.3a. Toggle the Allow Others To Join option on, and
then enter the password on the device that needs access. Android users can find the hotspot
option in Settings ➢ Connections ➢ Mobile Hotspot And Tethering ➢ Mobile Hotspot
(Figure 8.3b). Once enabled, the password and security settings are customized by tapping
Configure.
Before enabling a phone as a hotspot, be sure to understand if the
wireless plan supports it and under what conditions. Hotspot usage can
quickly consume significant amounts of data and you don’t want to be hit
with surprise charges!
Radio Frequency Internet
Wireless radio frequency (RF) broadband Internet access is one of the newest options
for home Internet. Cellular providers might offer it as “cellular home Internet” or “fixed
wireless” plans. Typically, the service provider uses a transmitter, similar to a cell tower (but
much less powerful), to broadcast a signal. At the receiving end, customers need a radio
Technet24

Exploring Connection Types and Features 433
receiver and wireless antenna. The receiver plugs into a router or computer just like a cable
or DSL modem. Cellular providers will note that it might not be available in all areas.
Radio frequency Internet speed is similar to cellular Internet. The maximum will depend
on the technology at play, so a 5G fixed wireless connection will give the user up to about
1 Gbps. The cost generally starts off at around $40–$60 per month, and you may get a dis-
count if you bundle your cellular service with it.
Table 8.1 summarizes the connection types that you have just learned. In Exercise 8.1,
you will scout out the Internet connection options in your area.
(a) (b)
FIGURE 8.3  iOS (a) and Android (b) hotspot configuration

434 Chapter 8 ■  Networking Concepts and Technologies
Sometimes the Choices Are Limited
Before you decide which broadband connection is most appealing to you, you should also
factor in something very important: what is available in your area? DSL is available at dif-
ferent rates of connectivity based on distance from a central station. If you live far enough
from a central station or near a central station that has not been updated lately (such as in
the middle of rural America), DSL may not be an option. Similarly, not all cable providers
are willing to take the steps necessary to run a connection in all situations.
Make certain that you know the available options—  not just the technological options—
before you spend too much time determining what is best for you.
T
ABLE 8.1  Common Internet connection types and speeds
Designation Maximum download speed Description
Dial- up Up to 56 Kbps Plain old telephone service.
A regular analog
phone line.
DSL Up to 30 Mbps Digital subscriber line. Shares existing phone
wires with voice service.
Cable Up to 50 Mbps Inexpensive broadband Internet access
method with wide availability.
Fiber- optic Around 2 Gbps Incredibly fast and more expensi
ve than DSL
or cable.
Cellular Up to 1 Gbps Great range; supported by cellular providers.
Best for a very limited number of devices.
Satellite Up to 150 Mbps For rural or remote areas without wired
broadband methods.
Radio
frequency
Around 1 Gbps Fixed wireless from cellular providers. May
be 5G or 4G.
Technet24

Exploring Connection Types and Features 435
EXERCISE 8.1
Pricing Internet Connectivity
If you’re unsure which websites to visit to perform this exercise, visit www
. highspeedinternet.com to see who offers service in your area.
1. Visit the website for a telephone provider in your area, and see what offers are avail-
able for DSL. What is the most basic package that you can get, and what does it cost?
What is the fastest package that you can get, and what does it cost?
2. Visit the website for a cable television provider in your area, and see what offers are
available for cable Internet. What is the most basic package that you can get, and what
does it cost? What is the fastest package that you can get, and what does it cost?
3. Visit the website for a satellite Internet provider. If you’re not familiar with one, www
.hughesnet.com is a popular provider. What is the fastest package that you can get,
and what does it cost?
4. (Optional) Can you find a dial- up ISP in your area? How much does it cost?
Choosing Internal Network Connections
Along with deciding how your computers will get to the outside world, you need to think
about how your computers will communicate with each other on your internal network.
The choices you make will depend on the speed you need, distance and security require-
ments, and cost involved with installation and maintenance. It may also depend some on the
abilities of the installer. You may feel comfortable replacing copper cables but not so much
when it comes to fiber- optic.
Your choices for internal connections can be lumped into two
groups: wired and wireless.
Many networks today are a hybrid of wired and wireless connections.
Understand the fundamentals of how each works separately; then you
can understand how they work together. Every wireless connection even-
tually connects back to a wired network point somehow.
Wired Network Connections
Wired connections form the backbone of nearly every network in existence. Even as wireless
becomes more popular, the importance of wired connections remains strong. In general,
wired networks are faster and more secure than their wireless counterparts.

436 Chapter 8 ■  Networking Concepts and Technologies
When it comes to choosing a wired network connection type, you need to think about
speed, distance, and cost. Your two choices are unshielded twisted pair (UTP), which is
copper and transmits using electrical pulses, and fiber- optic
, which is made of glass or plastic
and transmits using light. You’ll run one of the two (or maybe a combination of the two),
with UTP being by far the most popular choice. The most common configuration when you
use either of these is to connect all computers to a central connectivity device, such as a
switch. If you’re using a wireless router with some wired ports, that works too.
The first question you need to ask yourself is, “How fast does this network need to be?”
For home networks, the 1 Gbps provided by UTP running Gigabit Ethernet is probably
sufficient. If you have higher throughput requirements, then you can start looking into faster
standards (10–40 Gbps).
What Is Ethernet?
Ethernet is a standard for wired computer network communications, as defined by the
Institute of Electrical and Electronics Engineers (IEEE) 802.3 specification. It specifies that
only one computer can talk on a wired network at one time; a computer will listen on the
network cable, and if it doesn’t hear any traffic, it will transmit. If two or more computers
attempt to talk at once, the network packets will collide, and no communication will get to
its destination. The sending computers will detect this, wait a short random amount of time,
and then resend their data. This whole process is called Carrier Sense Multiple Access with
Collision Detection (CSMA/CD).
In 1990, the Ethernet specification called for transmissions of 10 Mbps over twisted- pair
copper cable. At the time, the cable standard w
as Category 3 (Cat 3) UTP . By 1991, a
standard was developed for Cat 5 cable, and it could handle speeds of 100 Mbps. (They
increased the number of twists per foot in the cable.) The Ethernet standard was updated to
account for this faster speed and was called Fast Ethernet.
The Cat 5e (enhanced) cable standard was introduced in 2001 and could handle speeds of
1 Gbps, so running Ethernet over Cat 5e became known as Gigabit Ethernet. Cat 6a came
along in 2008, supporting speeds of 10 Gbps (10- Gigabit Ethernet).
The most current ver-
sion is Cat 8. It was ratified in 2016 and supports speeds up to 40 Gbps at up to 30 meters
or 10 Gbps at up to 100 meters. It will be used mostly in server rooms for the foresee-
able future.
In the real world, you’ll hear people ask if you have an Ethernet cable, which is typically
synonymous with the words network cable and twisted- pair
cable. Most of the time, people
don’t differentiate between the standards, assuming that you just have Cat 5e or better. It’s
usually a good assumption, considering it’s hard to find anything older. If you know that
you’re running 10- Gig E, then you might want to specify at least a Cat 6a cable.
Technet24

Exploring Connection Types and Features 437
When referring to UTP cable types, there is no consensus on how to
abbreviate category names. For example, you will see Cat 8, Cat- 8, C
AT 8,
and CAT- 8 al
l used. None of them are right or wrong, and it makes no
difference in the cable’s performance.
The second question is then, “What is the maximum distance I’ll need to run any one
cable?” In most office environments, you can configure your network in such a way that
100 meters will get you from any connectivity device to the end user. If you need to go
longer than that, you’ll definitely need fiber for that connection unless you want to mess
with signal repeaters.
As you’re thinking about what type of cable to use, also consider the hardware that you’ll
need. If you are going to run fiber to the desktop, you’ll need fiber network cards, routers,
and switches. If you are running UTP, you’ll need network cards, routers, and switches with
RJ45 connectors. If you’re going to run gigabit, all of your devices will need to support it.
The third question to ask yourself is, “How big of a deal is security?” Most of the time,
the answer lies somewhere between “very” and “extremely”! Copper cable is pretty secure,
but it does emit a signal that can be intercepted, meaning that people can tap into your
transmissions (hence the term wiretap). Fiber- optic cables are immune to wiretapping.
Normally
, this isn’t a big deal because copper cables don’t exactly broadcast your data all
over as a wireless connection does. But if security is of the utmost concern, then fiber is the
way to go.
Fourth, “Is there a lot of electrical interference in the area?” Transmissions across a
copper cable can be ravaged by the effects of electromagnetic interference (EMI), which is
interference from objects like motors, power cables, microwave ovens, and fluorescent lights.
The effects include shortened distances that electrical signals can travel or lower transmis-
sion speeds. Fiber is immune to those effects.
Finally, ask yourself about cost. Fiber cables and hardware are more expensive than their
copper counterparts. Table 8.2 summarizes your cable choices and provides characteristics
of each.
Understand that the costs shown in Table 8.2 are approximate and are for
illustrative purposes only. The cost for this equipment in your area may
differ. Fiber has gotten considerably cheaper in the last 10 to 15 years, but
it’s still far more expensive than copper.
Fiber- optic cabling has some obvious advantages over copper,  but as you can see, it may
be prohibitively expensive to run fiber to the desktop. What a lot of organizations will do is
to use fiber sparingly, where it is needed the most, and then run copper to the desktop. Fiber
will be used in the server room and perhaps between floors of a building as well as any place
where a very long cable run is needed.

438 Chapter 8 ■  Networking Concepts and Technologies
Wireless Network Connections
People love wireless networks for one major reason: convenience. Wireless connections
enable a sense of freedom in users. They’re not stuck to their desk— they can work from any-
where! (I’m not sure if this is actually a good thing.)
Wireless isn’t as fast, and it tends to be
a bit more expensive than wired copper networks, but the convenience factor far outweighs
these drawbacks.
Wireless LAN (WLAN)
When thinking about using wireless for network communications, the only real technology
option available today for a wireless local area network (WLAN) is IEEE 802.11. Bluetooth
TABLE 8.2  Cable types and characteristics
Characteristics T wisted- pair Fiber - optic
T
ransmission rate Cat 5e: 1 Gbps
Cat 6a: 10 Gbps
Cat 8: 40 Gbps
100 Mbps to 100 Gbps
Maximum length 100 meters (328 feet) for up to
10 Gbps
30 meters (100 feet) for 40 Gbps
∼100 kilometers (62 miles)
Flexibility Very flexible Fair
Ease of installation Very easy Difficult
Connector RJ45 Special (SC, ST , and others)
Interference
(security)
Susceptible Not susceptible
Overall cost Inexpensive Expensive
NIC cost 1 Gbps: $25–$40
10 Gbps+: $70 and up
$50–$150; easily $600–$800
for server NICs
10- foot cable cost Cat 6/6a: $8–$15
Cat 8: $1
0– $20
Depends on mode and
connector type, but generally
$15–$30
8- port switc
h cost 10/100 Mbps: $30–$50
1 Gbps: $70–$400
10 Gbps: $200– $80
0
$350 and up
Technet24

Exploring Connection Types and Features 439
and infrared (which I’ll cover in just a bit) can help mobile devices communicate, but they
aren’t designed for full WLAN use. Your choice becomes which 802.11 standard you want
to use. Table 8.3 summarizes the different standards.
Tech+ exam objective 2.9, “Explain the basic capabilities of a small
wireless network,” focuses on Wi-  Fi s
tandards and specifications. You
should be the most familiar with 802.11n/ac/ax, and understand basic
speed differences and interference and attenuation factors. Also be
familiar with the older standards, and understand implications of differ-
ent frequency band options.
Not So Fast . . .
The maximum data rates and distances shown in Table 8.3 are theoretical maximums and
should be taken with a large grain of salt. They’re estimates based on testing in ideal con-
ditions. First, the distance from the wireless access point to your device makes a huge
difference because wireless suffers from attenuation (the weakening of signals) more than
wired signals. For example, Wi- Fi 5 users will only get the maximum data rate at a range of
up to about 5 meter
s from the access point. At about 20 meters, the data rate is cut in half,
and it just gets worse from there. Also keep in mind that’s for a clear, unobstructed signal.
TABLE 8.3  802.1 1 standards
Standard
Generation
name Y ear Frequency
Maximum data
rate
Indoor
range
Outdoor
range
a 1999 5 GHz 54 Mbps 35 m 120 m
b 1999 2.4 GHz 1 1 Mbps 40 m 140 m
g 2003 2.4 GHz 54 Mbps 40 m 140 m
n 2008 2.4/5 GHz 600 Mbps 70 m 250 m
ac Wi- Fi
5 2014 5 GHz 3500 Mbps 35 m 120 m
ax Wi- Fi
6 2019 2.4/5 GHz 9600 Mbps 70 m 250 m
ax Wi- Fi
6E 2021 6 GHz 9600 Mbps 15 m 15 m
be Wi- Fi
7 2024 2.4/5/6 GHz 46 Gbps 30 m 100 m

440 Chapter 8 ■  Networking Concepts and Technologies
Attenuation effects can’t be overstated as it affects all forms of wireless communication.
At higher frequencies, the maximum distance becomes shorter and attenuation problems
are magnified. For example, Wi- Fi 6E, which operates at the highest licensed
Wi- Fi fre-
quency of 6 GHz, has a maximum range of about 1
5 meters, and some users even report
losing connection if devices lose line of sight. Granted, Wi- Fi 6E routers have the option to
fall bac
k to lower frequencies to maintain longer connections, but the speed will be slower.
As a second example of the effects of frequency on distance, consider terrestrial AM radio. In
the United States, AM radio is regulated between 540 kHz and 1700 kHz. During the daytime,
the maximum range is about 162 kilometers (100 miles). At night, AM radio signals can bounce
off the atmosphere and reach three times as far. AM radio signals interfering with each other
became such a problem that in 1934 the FCC made a law that AM radio stations must decrease
their power at night as to decrease their signal range or cease broadcasting altogether.
Second, interference from other electronics and obstructions will lower the data rate.
Radio frequency interference (RFI) from communications devices will degrade the signal.
Microwave ovens and electrical motors are notoriously harsh on wireless signals. Solid
objects, especially concrete block walls and steel, cut down on range as well.
Third, wireless bandwidth is shared among all devices connecting on that wireless net-
work. Real- world testing shows that Wi- Fi 5 devices usually deliver between 30
0 Mbps and
1.7 Gbps, and Wi- Fi 6 will range from 600 Mbps to 4.8 Gbps.
New generation
Wi- Fi speeds are still incredibly fast. Just don
’t be too disappointed if the
wireless performance you’re expecting isn’t quite as great as advertised!
So, how do you choose which one is right for your situation? You can apply the same
thinking that you would do for a wired network in that you need to consider speed, distance,
security, and cost. Generally speaking, though, with wireless it’s best to start with the most
robust technology and work your way backward.
Security concerns on wireless networks are similar regardless of your choice. Since you’re
broadcasting network signals through air, there will always be some security concerns. It
really comes down to speed and cost.
In today’s environment, it’s silly to consider anything older than 802.11n, and good luck
finding hardware that old anyway. Deciding that you are going to install an 802.11g/n net-
work from the ground up at this point is a bit like saying you are going to build a mud
house in Manhattan. You could, but why?
Earlier in the “Wired Network Connections” section you learned what
Ethernet is, and it’s based on the CDMA/CD access method. Wireless
802.11 networks use a similar method to access the network medium (in
this case, air), called Carrier Sense Multiple Access with Collision Avoid-
ance (CSMA/CA). The inner workings of these access methods is well
beyond the scope of the Tech+ exam, but it’s interesting stuff to know.
Technet24

Exploring Connection Types and Features 441
That brings you to your most likely choices: 802.11ac (Wi- Fi 5) and 802.11ax
(Wi- Fi 6/6E). Devices are plentiful and are backward compatible with the previous versions,

provided they broadcast on the same frequency. (Many routers are labeled dual- band
, which
means that they support multiple frequencies, such as 5 GHz and 2.4 GHz.) It will come
down to cost. In Exercise 8.2, you will go shopping for Wi- Fi gear to understand the cost
differences.
To summarize this section and explicitly bring it back to exam objectives,
 remember the
following:
 ■ The three newest standards, from oldest to newest, are 802.11n, 802.11ac (Wi- Fi 5),
and 802.11ax (W
i- Fi 6).
As standards get newer, they provide faster speeds. Wi- Fi 7 is
out but is not currently listed in the T
ech+ Exam objectives.
 ■ As a rule of thumb, higher frequencies (e.g., 6 GHz versus 2.4 GHz) will have higher
throughput rates, but shorter distances and are more susceptible to attenuation.
 ■ Interference from other devices broadcasting on the same frequency as a Wi- Fi network
and natural signal attenuation will shorten maximum distances.
EXERCISE 8.2
The Cost of Networking
1. Visit the website for an electronics store. If you’re unfamiliar with any, try www
.bestbuy.com or www.newegg.com.
2. Find a Wi- Fi 6 wireless router. How muc h is it?
3. Find an older standard. See if you can find an 802.1 1n one. (Probably not, except for
maybe on eBay.) If not, go for Wi- Fi 5. How much is it?
4. Now price out wireless network cards. Find one supporting different standards. How
much difference is there?
Bluetooth
Bluetooth is not designed to be a WLAN but rather a wireless personal area network
(WPAN). In other words, it’s not the right technology to use if you want to set up a wireless
network for your office. It is, however, a great technology to use if you have wireless devices
with which you want your computer to be able to communicate. Examples include smart-
phones, mice, keyboards, headsets, speakers, and printers.
Every laptop comes with built- in W
i- Fi capabilities, and most come Bluetooth-enabled.

Desktops don’t always have it built in, though. To use Bluetooth devices, you might need to
add an adapter, such as the one shown in Figure 8.4.

442 Chapter 8 ■  Networking Concepts and Technologies
Almost all smartphones and other mobile devices today support
Bluetooth.
Bluetooth devices can belong to one of three classes. Most mobile Bluetooth devices are
Class 2 devices, which have a maximum range of 10 meters.
Like some of the 802.11X standards, Bluetooth uses the unlicensed
2.4 GHz range for communication. To avoid interference, Bluetooth can
“signal hop” at different frequencies to avoid conflicts with devices using
other technologies in the area. Thanks to technology improvements,
interference with Wi-  Fi i
s unlikely, but it can still occur.
One of the unusual features of Bluetooth networks is their temporary and informal
nature. With Wi- Fi, you need a central communication point,
 such as a wireless access point
or router. Bluetooth networks are formed on an ad hoc basis, meaning that whenever two
Bluetooth devices get close enough to each other, they can communicate directly with each
other. This dynamically created network is called a piconet. A Bluetooth- enabled device can
communicate with up to seven other devices in one piconet.
FIGURE 8.4  Bluetooth USB adapter
Technet24

Exploring Connection Types and Features 443
Infrared
Infrared (IR) waves have been around since the beginning of time. They are longer than light
waves but shorter than microwaves. The most common use of infrared technology is the tele-
vision remote control, although infrared is also used in night- vision goggles and medical and
scientific imaging.
In 1993, the
Infrared Data Association (IrDA) was formed as a technical consortium to
support “interoperable, low- cost infrared data interconnection standards that support a walk-
 up, point- to- point user model.”
 The key terms here are walk- up
 and point- to- point
, meaning
that you need to be at very close range to use infrared, and it’s designed for one- to- one com-
munication.
 Infrared requires line of sight, and generally speaking, the two devices need to be
pointed at each other to work. If you point your remote away from the television, how well
does it work?
You can find more information on the IrDA standard at the organization’s
website: www.irda.org.
Some laptops and mobile devices have a built- in infrared port, which is a small,  dark
square of plastic, usually black or dark red. For easy access, infrared ports are located on the
front or side of devices that have them. Figure 8.5 shows an example of an infrared port on
a laptop.
Current IrDA specifications allow transmission of data up to 1 Gbps. Because infrared
does not use radio waves, there are no concerns of interference or signal conflicts. Atmo-
spheric conditions can play a role in disrupting infrared waves, but considering that the
maximum functional range of an IrDA device is about 1 meter, weather is not likely to cause
you any problems.
Security is not much of an issue with infrared. The maximum range is about 1 meter with
an angle of about 30 degrees, and the signal does not go through walls, so hacking prospects
are limited. If someone is making an attempt to intercept an infrared signal, it’s going to be
pretty obvious. The data is directional, and you choose when and where to send it.
FIGURE 8.5  Infrared port

444 Chapter 8 ■  Networking Concepts and Technologies
Different Infrared Technologies
You might have read the 1- meter distance limitation regarding infrared and thought, “But
my television remote works at longer distances than that”—  and you are right. T
elevision
and other consumer electronics remote controls are not governed by IrDA. They use a dif-
ferent infrared technology, based on the RC- 5 protocol developed by Philips in the late
1980s.
The maximum functional distance of these remote controls is about 15–20 feet,
depending on the device.
Computer communications standards using infrared are managed by IrDA, and the
maximum distance is about 1 meter. There are methods that IR manufacturers can use to
modify this, but the general specification guarantees data rates at only 1 meter.
Understanding Network
Connectivity Essentials
The ultimate goal of this chapter is to teach you how to set up your own small wireless net-
work successfully. To do it right and really understand what you’re doing, it’s important to
know some critical details. After all, there’s a difference between plugging in a box and hav-
ing it work and being able to make it work if things don’t quite go smoothly.
In the first section of this chapter, you learned how to connect your computers physically
to the Internet, as well as to each other via cables or wireless connections. That’s the first
part. But now that they’re connected to each other, how do they communicate? That’s just as
important, and that’s what I’ll cover here in the second part.
The “how” has two components. The first is the hardware involved, and the second is by
using a protocol, which is the communication language. In the next section, you will learn
about some common networking devices used to connect computers to each other. Then, the
following sections will teach you the basics of networking protocols and TCP/IP, which is the
language that most computers speak when they talk to each other on a network. Finally, this
section will finish with a discussion of network storage concepts.
Common Networking Devices
It seems like devices on a network do a lot of talking to each other. Users tell their computers
to connect to the Internet, send jobs to printers, and spam co- workers who are 5 feet away
with emails.
All of this happens even though the sending and receiving devices aren’t directly
connected to each other. Instead, they use connectivity devices to manage the communica-
tion. In this section, we’ll talk about some of those connectivity devices, as well as a few
other important devices to know.
Technet24

Understanding Network Connectivity Essentials 445
Tech+ exam objective 2.8, “Identify basic networking concepts,” wants
you to be familiar with several networking devices. They are modems,
switches, access points, routers, and firewalls.
Modem
Chapter 1, “Core Hardware Components,” covered modems, so I won’t repeat too much
here. Here’s a quick refresher: modems are used to connect to a network via telephone lines.
They do that by converting digital signals from a computer into analog signals that can be
transmitted over phone lines and back again. As you learned earlier in this chapter, modems
are dreadfully slow by today’s standards and essentially obsolete.
Switch
A switch is the network connectivity device at the center of most networks. You might hear
some people call them hubs, but a hub is a similar device that’s not quite as good as a switch.
They often look similar to hubs, so it’s easy to confuse them. There are big performance differ-
ences, though. Hubs pass along all traffic, but switches examine the header (beginning portion)
of the incoming data packet and forward it properly to the right port and only to that port.
(Only one device is plugged into each port.) This greatly reduces overhead and thus improves
performance because there is essentially a virtual connection between sender and receiver.
When taking about switches and other connectivity devices, I will refer to
ports. Those are literally the physical holes the network cable plugs into
on the device. Later in this chapter you will learn about ports in relation to
TCP/IP communications (and they are an exam objective)— th
ose are logical
in nature and entirely different. Don’t let the terminology mess you up!
Nearly every hub or switch that you will see has one or more status indicator lights on it.
If there is a connection to a port of the switch, a light either above the connector or on an
LED panel elsewhere on the device will light up. If traffic is crossing the port, the light may
flash, or there may be a secondary light that will light up. Many devices can also detect a
problem in the connection. If a normal connection produces a green light, a bad connection
might produce an amber one. Figure 8.6 shows a basic eight-  port switch.
FIGURE 8.6  Eight- por t switch

446 Chapter 8 ■  Networking Concepts and Technologies
Switches direct traffic based on the destination computer’s Media Access
Control (MAC) address, which is its physical address built into the net-
work card.
Access Point
An access point is any point that allows a user on to a network. The term is commonly
used in reference to a wireless access point, which lets users connect to your network via
an 802.11 technology. Wireless access points may connect to other wireless access points or
wireless routers, but eventually they connect back to a wired connection with the rest of the
network. Wireless access points look nearly identical to wireless routers and provide central
connectivity like wireless routers, but they don’t have nearly as many features.
Router
A router is a highly intelligent network connectivity device that can connect multiple net-
work types to each other. Routers use routing tables to store network addresses and route
packets based on the best path available.
Routers are much more advanced than switches. One of the big differences between the
two is that while switches direct traffic based on the physical MAC address, routers use the
logical IP address to make decisions. (I’ll cover MAC and IP addresses in more depth later in
this chapter.) Routers are also capable of connecting more devices to each other than switches
can do. Figure 8.7 shows you how routers and switches might work together on a network.
InternetSwitch
Router
Router
Switch
Switch
Switch
FIGURE 8.7  Sample network with router s and switches
Technet24

Understanding Network Connectivity Essentials 447
Figure 8.7 depicts a wired network, but it could just as easily show a wireless one. Instead
of switches, there would be wireless access points. The routers could be wired or wireless,
but remember that all connections lead back to wired ones at some point.
Wireless routers are common in homes and offices. Physically, they look like wireless
access points. Figure 8.8 shows the back of a wireless router with four wired ports.
Functionally, wireless routers work just like their wired cousins.
Firewall
Firewalls were initially covered in Chapter 5, “Software Applications.” They are incredibly
important devices for network security, though—  they’re gatekeepers that can help thwart
hackers and malware. Here’
s a review:
Firewalls filter network traffic. Firewalls filter inbound and outbound network traffic based
on rules defined by the administrator.
 That list of rules is called an access control list (ACL).
By default, most firewalls are configured as default deny, which means that all traffic is
blocked unless specifically authorized by the administrator.
Firewalls can be software- based, hard
ware- based, or a combination of both. Firewalls can
be stand- alone “black boxes,
” software installed on a server or router, or some combination
of hardware and software. Many routers have firewall capabilities.
There are two types of firewalls: network- based and host- based. A network- based fire-
wall is designed to protect a whole network of computers and almost always is a hardware
FIGURE 8.8  A wireless router

448 Chapter 8 ■  Networking Concepts and Technologies
solution with software on it. Host- based firewalls protect only one computer and are almost
always software solutions.
Windows comes with a built- in software firewall called W
indows
Firewall, also known as Microsoft Defender Firewall.
Network- based firew
alls separate public versus private networks and can also create a screened
 subnet. Most network- based firewalls have at least two network connections: one to the Internet,
or public side,
 and one to the internal network, or private side. Some firewalls have a third network
port for a second semi- internal network.
This port is used to connect servers that can be considered
both public and private, such as web and email servers. This intermediary network is known as a
screened subnet. A screened subnet can also be configured as a space between two firewalls.
Understanding LANs and WANs
When talking with others about networks, you’re certain to hear the acronyms LAN and
WAN. What do they mean?
A local area network (LAN) is a small network, usually confined to one office or building.
While you need at least two devices to count it as a network, there’s no hard and fast limit
to the number of devices allowed on a LAN. Devices will be connected to each other with
switches, hubs, and access points. A LAN might or might not have a router and might or
might not be connected to the Internet.
A wide area network (WAN), as its name implies, is larger. Think of it as two or more
LANs connected to each other. A WAN configuration is usually spread across multiple
geographical areas and certainly requires the use of a router. WAN locations are generally
connected to each other using a dedicated connection. Historically, WAN connections were
much slower than LAN connections. While this is still mostly true today, WAN connections
have gotten much faster thanks to broadband and fiber- optic Internet.
Sometimes the lines between the two get a lit
tle blurry. And to make things even more con-
fusing, there are other network designations such as a metropolitan area network (MAN),
which encompasses a town or city. The network depicted in Figure 8.7 would most likely be
considered a WAN, but it depends on a few things. First, where are the network segments
located? If they are all co- located, it’s more lik
ely a LAN. Second, what is the connection
speed between the network segments? If it’s a fast connection, say, faster than broadband,
it’s probably a LAN as well. If the network segments are in different places and connected
via broadband or something slower, it’s a WAN.
There are different management considerations for each. For example, if you have a LAN,
do you want to use a router to connect to the Internet or another network? And with a WAN,
you need to worry about securing the connections between sites. For now, though, just be
able to classify a network based on the location of the site or sites and the speed of the con-
nection between them.
Be sure to understand the difference between a LAN and a WAN, as they are part of Tech+
exam objective 2.8.
Technet24

Understanding Network Connectivity Essentials 449
Networking Protocol Basics
Networking protocols are a lot like human languages in that they are the language that com-
puters speak when talking to each other. Technically speaking, a protocol is a set of rules
that govern communications. If computers don’t speak the same language, they won’t be
able to talk to each other. To complicate matters, there are dozens of different languages that
computers can use. Just like humans, computers can understand and use multiple languages.
Imagine that you are on the street and someone comes up to you and speaks in Spanish.
If you know Spanish, you will likely reply in kind. It doesn’t matter if both of you know
English as well because you’ve already established that you can communicate. On the other
hand, it’s going to be a pretty quick conversation if you don’t know Spanish. This same con-
cept applies to computers that are trying to communicate. They must have a network pro-
tocol in common for the conversation to be successful.
Throughout the years, hundreds of network protocols have been developed. As the advent
of networking exploded, various companies developed their own networking hardware,
software, and proprietary protocols. Although a few achieved long- term success, most have
faded into oblivion.
 The one protocol suite that has sustained is TCP/IP. While it has some
structural plusses such as its modularity, it didn’t necessarily succeed because it was inher-
ently superior to other protocols. It succeeded because it is the protocol of the Internet.
This is why I focus on TCP/IP. It is the protocol used on the Internet, but it’s also the pro-
tocol used by the vast majority of home and business networks today. I’ll start by taking a
quick look at the history of TCP/IP, the model on which it’s based, and a few of the common
protocols you’ll hear about. Then, I’ll spend some time on IP addressing, which is essential
for proper communication. This chapter will give you the foundation you need to under-
stand it well and set up your own network.
For a more detailed discussion of networking protocols and TCP/IP,
read the CompTIA A+ Complete Study Guide by Quentin Docter and Jon
 Bu
hagiar (Sybex, 2022). The A+ certification is a great one to get after you
pass your CompTIA Tech+ exam!
TCP/IP Essentials
Every computer protocol that’s created needs to accomplish a specific set of tasks for com-
munication to be successful. To give some structure to these tasks, theoretical networking
models were developed in the 1970s. TCP/IP’s structure is based on a model created by the
U.S. Department of Defense: the Department of Defense (DoD) model. The DoD model has
four layers that specify the tasks that need to happen: Process/Application, Host- to- Host,
Internet,
 and Network Access.
The Transmission Control Protocol/Internet Protocol (TCP/IP) suite is based on the
DoD’s theoretical model. While the protocol suite is named after two of its hardest- working
protocols,
Transmission Control Protocol (TCP) and Internet Protocol (IP), TCP/IP actually
contains dozens of protocols working together to help computers communicate with one
another. Figure 8.9 shows the DoD model’s four layers and some of the TCP/IP protocols
that correspond to those layers.

450 Chapter 8 ■  Networking Concepts and Technologies
Don’t feel the need to memorize the components of the TCP/IP suite— ye t.
When you move on to more advanced exams, more detailed knowledge
will be required.
Think of TCP/IP as a puzzle. You need one item from each layer to make the puzzle fit
together. The majority of TCP/IP protocols are located at the Process/Application layer. You
might already be familiar with a few of these, such as Hypertext Transfer Protocol (HTTP),
Hypertext Transfer Protocol Secure (HTTPS), File Transfer Protocol (FTP), Post Office
 Protocol 3 (POP3),
Internet Message Access Protocol (IMAP), and Simple Mail Transfer
Protocol (SMTP).
At the Host- to- Host layer
, there are only two protocols: TCP and User Datagram  Protocol
(UDP). Most applications will use one or the other to transmit data,
 although some can use
both but will do so for different tasks.
The most important protocol at the Internet layer is IP. This is the backbone of TCP/IP.
Other protocols at this layer work in conjunction with IP, such as Internet Control  Message
Protocol (ICMP) and Address Resolution Protocol (ARP).
Y
ou’ll notice that the Network Access layer doesn’t have any protocols per se. This
layer describes the type of network access method you are using, such as Ethernet, Wi- Fi,
or others.
Host-to-Host
Process/
Application
DoD Model
IMAP
TFTP
FTP
SMTP
TCP UDP
Ethernet
IP
Fast
Ethernet 802.11 FDDI
LPD
HTTP
SNMP
HTTPS
Internet
Network
Access
ICMP ARP RARP
FIGURE 8.9  DoD model and the TCP/IP protocol suite
Technet24

Understanding Network Connectivity Essentials 451
Basic Network Services and Protocols
If you’ve used the Internet, you’ve used HTTPS. Websites using the HTTPS protocol have
https:// at the front of their addresses. Most of the time the browser hides it for sim-
plicity. HTTPS replaced the older, unsecure HTTP , which did not encrypt data as it went
back and forth between the web server and client’s browser. HTTPS does encrypt data in
transit and makes things such as entering passwords or financial information into a web-
site secure.
If you download a file from a site, it might redirect you to a server dedicated to file down-
loads. Its website would possibly start with ftp:// because FTP is specifically designed for
file downloads.
POP3, IMAP , and SMTP are all email protocols. POP3 and IMAP are used to receive (down-
load) email, and SMTP is used to send email.
Many times a basic network service such as downloading a file will share the name of the
protocol that is used, as is the case with FTP . You might have FTP client software, and FTP is
the protocol it uses. Another example is email client software that might tell you to connect
to a POP3 server or SMTP server. Those servers, as you might expect based on their names,
use the POP3 or SMTP protocols to communicate with their clients to transfer email over
the network.
Understand basic network services such as secure web browsing, file transfers, and email
because they are part of Tech+ exam objective 2.8.
Understanding IP Addressing
To communicate on a TCP/IP network, each device needs to have a unique address, which is
called an IP address. Any device with an IP address is referred to as a host. This can include
servers, workstations, printers, and routers. If you can assign it an IP address, it’s a host.
The material here focuses on the version of IP addresses called IPv4.
There is a newer standard called IPv6, which will be covered shortly. Both
are currently used. Assume people are talking about IPv4 when they say
“IP address” unless they specify IPv6.
An IP address is a 32- bit hierarchical address that identifies a host on the network. It’ s
typically written in dotted- decimal notation, such as 192.168.10.55.
 Each of the numbers in
this example represents 8 bits (or 1 byte) of the address, also known as an octet. The same
address written in binary (how the computer thinks about it) would be 11000000 10101000
00001010 00110111. As you can see, the dotted- decimal version is a much more convenient

452 Chapter 8 ■  Networking Concepts and Technologies
way to write these numbers! The addresses are said to be hierarchical, as opposed to “flat,”
because the numbers at the beginning of the address identify groups of computers that
belong to the same network. Because of the hierarchical address structure, you’re able to do
really cool things like route packets between local networks and on the Internet.
IP addresses are logical addresses that can be changed. Remember
also that every network card has a physical MAC address that does not
change. MAC addresses are not used in a hierarchical fashion.
A great example of hierarchical addressing is your street address. Let’s say that you
live in Apartment 4B on 123 Main Street, Anytown, Kansas, USA. If someone sent you a
letter via snail mail, the hierarchy of your address would help the postal service and carrier
deliver it to the right place. First and broadest is USA. Kansas helps narrow it down a bit,
and Anytown narrows it down more. Eventually they get to your street, the right number
on your street, and then the right apartment. If the address space were flat (for example,
Kansas didn’t mean anything more specific than Main Street), or you could name your state
anything you wanted to, it would be really hard to get the letter to the right spot.
Take this analogy back to IP addresses. They’re set up to organize networks logically to
make delivery between them possible and then to identify an individual node within a net-
work. If this structure weren’t in place, a huge, multinetwork space like the Internet wouldn’t
be possible. It would simply be too unwieldy to manage.
Each IP address is made up of two components: the network ID and the host ID. The
network portion of the address always comes before the host portion. Because of the way IP
addresses are structured, the network portion does not have to be a specific fixed length. In
other words, some computers will use 8 of the 32 bits for the network portion and the other
24 for the host portion, while other computers might use 24 bits for the network portion
and the remaining 8 bits for the host portion. Here are a few rules that you should know
about when working with IP addresses:
 ■ All host addresses on a network must be unique.
 ■ On a routed network (such as the Internet), all network addresses must be unique
as well.
 ■ Neither the network ID nor the host ID can be set to all 0s. A host ID portion of all 0s
means “this network.”
 ■ Neither the network ID nor the host ID can be set to all 1s. A host ID portion of all 1s
means “all hosts on this network,” commonly known as a broadcast address.
Computers are able to differentiate where the network ID ends and the host address
begins through the use of a subnet mask. This is a value written just like an IP address and
may look something like 255.255.255.0. Any bit that is set to a 1 in the subnet mask makes
the corresponding bit in the IP address part of the network ID. The rest will be the host
ID. The number 255 is the highest number you will ever see in IP addressing, and it means
that all bits in the octet are set to 1.
Technet24

Understanding Network Connectivity Essentials 453
Here’s an example based on two numbers I have used in this chapter. Look at the
IP address of 192.168.10.55. Assume that the subnet mask in use with this address
is 255.255.255.0. This indicates that the first three octets are the network portion of
the address and the last octet is the host portion. Said another way, the network ID is
192.168.10, and the unique host ID is 55.
All of this is important to know because it governs how computers communicate. If a
computer wants to send a message to another computer on the same network, it just spits
the message out on the wire (or wireless) and the other computer receives it. If the destina-
tion is on a different network (as determined by the network address), then the router comes
into play. The sender will forward the message to the router to send to the destination. In
this case, your router is called a default gateway. It’s basically the door from your network to
the outside world.
All of this TCP/IP stuff can get a little heady. On more advanced CompTIA
exams, such as A+ and Network+, you will need to know how to deter-
mine the network and host portions of the address based on a given sub-
net mask. You shouldn’t be asked this on Tech+, though. For now, the key
things to remember are:
 ■ To communicate using TCP/IP , each computer is required to have an IP
address and a correct subnet mask.
 ■ Each IP address on a network must be unique.
 ■ If you want to connect your network to other networks (such as the Inter-
net), a default gateway is also required.
TCP/IP Ports
In the previous section, you learned that an IP address identifies a unique host on a TCP/IP
network. Knowing the right IP address is just part of the equation, however. To complete
communication between two hosts, an additional identifier called a port (or port number) is
used. Ports are based on the Process/Application layer protocol used.
TCP/IP applications combine the host’s IP address with the port number
in order to communicate. This combination is known as a socket.
A good analogy for understanding port numbers is to think of cable or satellite television.
In this analogy, the IP address is your house. The cable company needs to know where to
send the data. But once the data is in your house, which channel are you going to receive it
on? If you want sports, that might be on one channel, but weather is on a different channel,
and the cooking show is on yet another. Those channels are analogous to ports. You know
that if you want a cooking show, you need to turn to channel 923 (or whatever). Similarly, a
client computer on a network knows that if it needs to ask a question in HTTPS, it needs to
do it on port 443.

454 Chapter 8 ■  Networking Concepts and Technologies
There are 65,536 ports numbered from 0 to 65535. Ports 0 through 1023 are called the
well- known ports and are assigned to commonly used services, and 1024 through 49151 are
called the registered ports.
 Anything from 49152 to 65535 is free to be used by application
vendors. Fortunately, you don’t need to memorize them all. Table 8.4 lists a few network ser-
vices (the ones in the Tech+ exam objectives), associated protocols, and port numbers used.
A complete list of registered port numbers can be found at www.iana.org.
For the Tech+ exam, be sure to understand the following, as they are part
of exam objective 2.8:
 ■ IP address (It’s a logical address and can be changed.)
 ■ MAC address (It’s a physical address built into the NIC and can’t be
changed.)
 ■ Ports (They are like a channel within TCP/IP to identify a service.)
Quick Intro to IPv6
IPv4 was originally developed in 1973. Considering how fast technology evolves, it’s pretty
amazing to think that the protocol still enjoys immense popularity over 50 years later.
There are a few problems with IPv4, though. One is that we ran out of available network
addresses, and the other is that TCP/IP can be somewhat tricky to configure (I’m pointing at
you, subnet masks).
IPv4 has 32 bits of addressing space, which allows for nearly 4.3 billion addresses! So
how could we run out of addresses? With the way it’s structured, only about 250 million of
those addresses are actually usable, and all of those are pretty much spoken for.
TABLE 8.4  Common port number s
Service Protocol Port
Web browsing (not secure) HTTP 80
Secure web browsing HTTPS 443
File transfer FTP 20, 21
Email (sending) SMTP 25
Email (receiving) POP3 110
Email (receiving) IMAP4 143
Technet24

Understanding Network Connectivity Essentials 455
A new version of TCP/IP has been developed, and it’s called IPv6. Instead of a 32- bit
address, it uses 128- bit addresses.
That provides for 3.4 × 1038 addresses, which theoreti-
cally should be more than enough that they will never run out globally. (Famous last words,
right?) Figure 8.10 shows an example of an IPv6 address.
IPv6 also includes, as standard features, many optional but useful IPv4 ones. While the
addresses may be more difficult to remember, the automatic configuration and enhanced flex-
ibility make the new version sparkle compared to the old one. Best of all, it’s backward com-
patible with and can run on the computer at the same time as IPv4, so networks can migrate
to IPv6 without a complete restructure. Figure 8.11 brings this section to a close by showing
you a sample output from the ipconfig /all command. In it, you can see examples of an
IPv4 address and subnet mask, MAC address (labeled physical address), and IPv6 address.
DHCP and DNS
Two critical TCP/IP services about which you need to be aware are Dynamic Host
 Configuration Protocol (DHCP)
 and Domain Name System (DNS). Both are services that
are typically installed on a server (or in the case of DHCP, a router), and both provide key
Interface ID
2001:0db8:3c4d:0012:0000:0000:1234:56ab
Global preﬁx Subnet
FIGURE 8.10  IPv6 address
FIGURE 8.11  ipconfig /all output

456 Chapter 8 ■  Networking Concepts and Technologies
functionality to network clients. I’ll talk about them now because they’re important compo-
nents of TCP/IP, and you will see them come up when you configure your router.
DHCP servers are configured to provide IP configuration information automatically to
clients. The following configuration information is typically provided:
 ■ IP address
 ■ Subnet mask
 ■ Default gateway
 ■ DNS server address
DHCP servers can provide a lot more than the items on this list, but those are the
most common.
The alternative to DHCP is for an administrator to enter in the IP configuration
information manually on each host. This is called static IP addressing, and it is administra-
tively intensive as compared to DHCP’s dynamic addressing.
DNS has one function on the network, and that is to resolve hostnames (or URLs) to IP
addresses. This sounds simple enough, but it has profound implications.
Think about using the Internet. You open your browser, and in the address bar you type
the uniform resource locator (URL) of your favorite website, something like www.google
.com, and press Enter. The first question your computer asks is, “Who is that?” (Remember,
computers understand only 0s and 1s.) Your machine requires an IP address to connect to
the website. The DNS server provides the answer, “That is 72.14.205.104.” Now that your
computer knows the address of the website you want, it’s able to traverse the Internet to
connect to it.
Each DNS server has a database where it stores hostname-  to - IP - ad dress
pairs. If the DNS server does not know the address of the host you are
seeking, it has the ability to query other DNS servers to help answer the
request.
Think about the implications of that for just a minute. We all probably use Google sev-
eral times a day, but in all honesty how many of us know its IP address? It’s certainly not
something that we are likely to have memorized. Much less, how could you possibly mem-
orize the IP addresses of all of the websites you visit? Because of DNS, it’s easy to find
resources. Whether you want to find Coca- Cola,
Toyota, Amazon.com, or thousands of other
companies, it’s usually pretty easy to figure out how. Type in the name with a .com on the
end of it and you’re usually right. The only reason why this is successful is that DNS is there
to perform resolution of that name to the corresponding IP address.
DNS works the same way on an intranet (a local network not attached to the Internet) as
it does on the Internet. The only difference is that instead of helping you find www.google
.com, it may help you find Jenny’s print server or Joe’s file server. From a client- side perspec-
tive,
 all you need to do is to configure the host with the address of a legitimate DNS server
and you should be good to go.
Technet24

Understanding Network Connectivity Essentials 457
How to Get from Point A to Point B on a Network
Understanding the basics of network communication is important. I’ve already hit a few of
the key points in this chapter, but it’s time to tie them all together.
Imagine a scenario where a laptop user connected to the Internet just pressed Send on an
email to a friend. It’s a pretty common occurrence, right? Well, what happens next?
Based on the software used (an email client), the laptop knows that it needs to send the
message to the email server. And, the email software has been configured with the name
of the email server: mail.wiley.com. An IP address is needed, so the laptop looks in its
TCP/IP configuration information for the address of a DNS server. It then sends a message
to the DNS server asking for the IP address to mail.wiley.com. The DNS server responds
with an address, and the laptop can send the message.
Let’s take a more granular look at what happens next. The next thing that the laptop needs
to decide is whether the mail server is on the same network as the laptop. It does this by
looking at its IP address and subnet mask to determine its network address. It then looks at
the destination address with its (the sender’s) subnet mask. If the network addresses are the
same, the message will get sent out on the local network. If not, then the message will get
sent to the default gateway, the router, for transmission to the next network. Usually this is
to the Internet.
The message does not get sent all in one piece, though. The message will be broken down
into smaller chunks called packets. A packet has a couple of main sections: a header and the
data. The header contains, among other things, the sending and destination IP addresses
and the protocol being used. When the router receives the packet, it sends it on to the next
router based on the destination IP address. The packet will bounce from router to router
until it gets to the network where the mail server is located. Once the mail server receives
all of the packets, it reassembles the message.
(Technically speaking, packets are broken into even smaller chunks called frames, and then
frames are broken down and sent across the wired or wireless connection as individual
bits. The receiving device reassembles the bits into frames and frames into packets. But that
is way more detail than you need to remember for the Tech+ exam!)
The process sounds complicated, and it really is. It’s pretty amazing that the Internet works
at all, much less as smoothly as it does! If you’re curious to see how many routers (hops)
it takes to get from your computer to a website you like, use the trace route (tracert)
command, shown in Figure 8.12. In this example, I traced the route to Amazon.com. For
my computer to talk to Amazon, the packet went through 17 hops. You can see how long
each hop took in milliseconds, as well as the name or address of the router it went through.
The lines with asterisks are routers where the owner set it up to not return an IP address
or name.

458 Chapter 8 ■  Networking Concepts and Technologies
In Exercise 8.3, you will find your computer’s IP configuration information.
EXERCISE 8.3
Finding Your IP Configuration Information in Windows
1. In the Windows search bar, type cmd and press Enter. This will open a
Command Prompt.
2. At the prompt, type ipconfig and press Enter. This will display the IP configura-
tion information for your computer. Can you find your IP address, subnet mask, and
(optional) default gateway?
The link- local address shown is an IPv6 address, which is writ
ten in hexadecimal.
3. At the prompt, type ipconfig /all and press Enter. This will show you much more
information, including the address of your DHCP and DNS servers, if you have them.
4. Type exit and press Enter to close the Command Prompt.
To get IP configuration in macOS, open the terminal by pressing
Cmd+spacebar and typing terminal. At the prompt, type ifconfig. The
ifconfig command also works in Linux, as does the ip command.
FIGURE 8.12  tracert output
Technet24

Understanding Network Connectivity Essentials 459
Network Storage Options
Joining a computer to a network provides it with many more storage options than it
would have on its own. There are several scenarios in which more storage is desirable. One
common one is for mobile devices with limited space—  storing data in the cloud can be a tre-
mendous help.
 Another is for laptop users with small SSDs. A third is when multiple users
need to access data, making it impractical to store on someone’s local drive. In this section,
you’ll learn about network storage types, including file servers, network- attached storage
(NAS), and cloud storage service.
Tech+ exam objective 2.3 is “Compare and contrast storage types.” Ones
you need to know are file server, network- at
tached storage (NAS), and
cloud storage.
Local Network Storage T ypes
There are two types of local network storage with which you need to be familiar. The first is
a file server, and the second is NAS.
File Server
A file server is a server computer that is specialized to store user files. It can be a dedicated or
nondedicated server. The primary hardware requirement for a file server is lots of hard drive
space. Oftentimes, file servers will have multiple optical drives as well.
Since we’re on the subject of servers, now is as good a time as any to
remind you about two networking models you need to be familiar with
as part of exam objective 2.8. They are client/server and peer- to
- pe
er.
In a client/server network, some computers are designated as servers
whereas others are clients (also called workstations). Client/server
models have the advantages of centralized security and resources,
but the disadvantage of requiring more administration. A peer- t
o- p
eer
network is one in which no servers exist, and all hosts are considered
equals. Peer- to
- pe
er networks, sometimes called workgroups, are only
practical to manage for up to about 10 computers.
Network- Attached Storage
A network- attached stor age (NAS) device takes hard drive storage to the next level. Based on
its name, you can probably guess that it’s attached to the network, which it is, but that’s just
the beginning. First, take a look at a simple NAS device in Figure 8.13.

460 Chapter 8 ■  Networking Concepts and Technologies
Figure 8.13 shows is a self-  enclosed unit that can hold up to four hard drives. Some hold
more; some hold less.
 Nicer NAS systems will allow you to hot- swap hard drives, meaning
that if one fails,
 you can remove it and replace it without shutting the NAS down. Most NAS
systems will also offer Redundant Array of Independent Disks (RAID) configurations for
you with very little intervention required. RAID is a form of fault tolerance, which means
it can help protect against data loss in the event of a single drive failure. In addition to the
hardware, the NAS device contains its own operating system, meaning that it acts like its
own file server. In most cases, you can plug it in, do some very minor configuration, and have
instant storage space on your network.
As far as connectivity goes, NAS devices typically connect directly to the network, and
that is how all of the network users access the storage space. NAS systems will also connect
to a PC through a USB port, but that is primarily so you can use that PC to run the configu-
ration software for the NAS. If you are running a small office and need additional local cen-
tralized storage, a NAS system is a good way to go.
FIGURE 8.13  NETGEAR NAS device
Source: PJ / Wikimedia Commons / CC BY -SA 3.0.
Technet24

Understanding Network Connectivity Essentials 461
Accessing a NAS server over the network will generally be slower than
having an external hard drive on your computer. The advantage is that if
you have multiple users on a network, everyone can easily get to it.
Cloud Storage Services
Storage is the area in which cloud computing got its start. The idea is simple—  you store files
just like you would on a hard drive but with two major advantages. One,
 you don’t need to
buy the hardware, and two, users can access the files regardless of where they are physically
located. You can have users in the United States, China, and Germany, and all of them have
access via their web browser. In that respect, cloud storage is much easier to configure than a
file server or NAS.
You will learn more about cloud computing in Chapter 9, “Cloud
 Co
mputing and Artificial Intelligence.”
There is no shortage of cloud- based storage providers on the market today.  Each one
offers slightly different features. Most of them will offer limited storage for free and
premium services for more data- heavy users or organizations.
Table 8.5 shows you a
comparison of some personal plans from the more well- known providers. Please note that
this table is for illustrative purposes only
, as the data limits and cost can change. Most of
these providers offer business plans with very high or unlimited storage as well for an addi-
tional fee.
TABLE 8.5  Cloud provider per sonal plans
Service Free Premium Cost per year
Dropbox 2 GB 3 TB $199
Apple iCloud 5 GB 50 GB, 200 GB, or 2 TB $12, $36, or $120
Box 10 GB 100 GB $120
Microsoft OneDrive (part of Microsoft 365) 5 GB 100 GB or 1 TB $20 or $70
Google Drive 15 GB 100 GB or 2 TB $20 or $100

462 Chapter 8 ■  Networking Concepts and Technologies
Which one should you choose? If you want extra features such as web- based applications,
then Google or Microsoft is probably the best choice.
 If you just need data storage, then Box
or Dropbox might be a better option.
Nearly all client OSs will work with any of the cloud- ba sed storage pro-
viders, with the exception of Linux, which natively works only with
Dropbox.
Most cloud storage providers offer synchronization to the desktop, which makes it so that
you have a folder on your computer, just as if it were on your hard drive. And importantly,
that folder will always have the most current edition of the files stored in the cloud and be
automatically backed up.
Accessing the sites is done through your web browser or an app you download. Once you
are in the site, managing your files is much like managing them on your local computer. In
Figure 8.14, you can see the Google Drive interface, with four folders and two files in it.
You have a few options to share a folder with another user. The easiest way to do this is
to right- click the folder and choose Share ➢
 Share. You’ll be asked to enter their name or
email address and indicate whether they can view or edit the file (see Figure 8.15).
FIGURE 8.14  Google Drive
Technet24

Setting Up a Small Wireless Network 463
Setting Up a Small Wireless Network
Finally, the part you have been waiting for! This is the section where I will show you how to
configure a router for your small wireless network. The exam objectives mention small wireless
networks; most of the routers you buy today for small office home office (SOHO) use are
wireless but also have about four wired ports. Plugging your computer into one of those ports
makes you wired, but you still use the router to get to the Internet as a wireless client would.
Each wireless router manufacturer uses different software, but you can usually configure
their parameters with a web- based configuration utility or downloadable app.
While the
software is convenient, you still need to know which options to configure and how those
configurations will affect users on your networks. The items that require configuration
depend on the choices you make about your wireless network. I will divide this part into
three sections: basic configuration, security options, and additional services.
Basic Configuration
The Wi- Fi Alliance (www.wi- fi.org) is the authoritative expert in the field of wireless
LANs. It lists five critical keys to setting up a secured wireless router:
1. Change the router’s SSID.
2. Change the administrator username and password. Make sure that it’s a strong password.
FIGURE 8.15  Sharing a folder on Google Drive

464 Chapter 8 ■  Networking Concepts and Technologies
3. Enable WPA3, WPA2 Personal, or the highest level of security the router supports.
4. Choose a high- quality security passphrase. Make it different from the administrator
password!
5. From the clients, select WPA3 (or security that matches your router’s setting) and enter
the security passphrase to connect.
This list has a few new acronyms in it, and I’ll define each of them in just a minute. To
set up the Linksys router, you need to download the Linksys app. Open the app and follow
the directions. They have tried to make it as easy as possible for users to set up wireless net-
works without the help of a technician. If you need step- by- step directions for a router,
 you
will likely be able to find them on the manufacturer’s website as well. After it’s set up, you
can administer the router from the app or from a browser by typing in the IP address of the
default gateway. For the examples in this section, I am going to show images from a Linksys
MR9000, because that’s what I have.
Before we start changing settings, first take a look at the home page for the Linksys
Smart Wi- Fi software, as shown in Figure 8.16.
 The SSID is shown as well as some other
basic parameters. Options are changed by using the menu on the left. For a comparison,
Figure 8.17 shows the home page of the Linksys app. All menu options are accessed from the
hamburger menu icon in the upper- left corner.
 The rest of the examples in this section will
feature the browser version.
FIGURE 8.16  Linksys Smar t Wi- Fi
Technet24

Setting Up a Small Wireless Network 465
Changing the SSID
The parameter that you will configure first is the service set identifier (SSID), which is
your wireless network name. An SSID is a unique name given to the wireless network.
All hardware that is to participate on the network must be configured to use the same
SSID. When you are connecting clients to a wireless network, all available wireless networks
will be listed by their SSIDs.
The SSID in Linksys Smart Wi- Fi is changed from the W
i- Fi Settings menu (Figure 8.18).
The default network name will likely be the brand name of the router followed by some
random numbers,
 such as Linksys03451. You need to change the default to something more
memorable.
FIGURE 8.17  Linksys app home page

466 Chapter 8 ■  Networking Concepts and Technologies
For better security, you should set your network name to something that
doesn’t identify to whom it belongs. This keeps potential hackers from
coming after you personally or possibly being able to guess your password
based on information about you. I am probably setting a bad example in
Figure 8.18 by naming my network something close to my last name.
This router has the option to change SSIDs for different bands. To change any of them,
click in the box next to Wi- Fi Name and type in the new name.
Changing the Administrator Username and Password
Keeping the administrator name and password away from users or potential hackers is of
utmost importance. The username should be difficult to guess and not linked to your name
or other user account names you have, and the password should be very secure.
FIGURE 8.18  Wi- Fi Settings
Technet24

Setting Up a Small Wireless Network 467
In Linksys’s case, the username will be based off the email address used to create the
account. The password is changed from the Connectivity menu shown in Figure 8.19. Notice
also that this page is where the firmware updates are configured. Always keep the firmware
up-to-date to help protect the network!
If you forget your wireless router’s administrator password, you won’t
be able to make any configuration changes. Wireless routers have a
recessed reset button on them, usually on the bottom or the back. You
may need a pen or a paperclip to be able to push it. Push that button in
and hold it for about 20 to 30 seconds. The router’s lights will flash sev-
eral times, and it will reset to factory settings. Then, launch your configu-
ration utility to set up the router again.
Enabling the Best Security
Security modes are configured by SSID and done from the Wi- Fi settings tab (refer to
Figure 8.18).
You might recall from the “Basic Configuration” section earlier in this chapter
that the recommendation is WPA3, WPA2, or the highest security setting possible. On this
router, the two options for encryption are WPA2 Personal and Open, so WPA2 is the best
choice. You will learn about encryption options in the upcoming “Wireless Router Security”
section. Having an open, unencrypted wireless network is never a good idea.
FIGURE 8.19  Connectivity set tings

468 Chapter 8 ■  Networking Concepts and Technologies
Choosing a High- Quality Passphr ase
When users attempt to join the network, they need to enter the passphrase. In the Linksys
software Wi- Fi settings (Figure 8.18 again), it’
s labeled Wi- Fi Password.
To change it, click in
the box and type the new password. It should be different than the administrator password
and challenging to guess.
Connecting Clients to the Network
To join the network, clients will need to find or manually enter the SSID and then enter the
appropriate passphrase. Most client OSs today will automatically detect the security mode
used by the router and adjust to match it. If the client does not, you will need to set it manu-
ally. A mismatched security mode will result in the inability to connect.
In iOS, joining a network is done in Settings ➢ Wi- Fi (Figure 8.20). It automatically detects

the security mode and there is no way to change it, not that you should need to. Android users
will join the network in Settings ➢ Connections ➢  Wi- Fi.
Tapping the Settings icon next to the
network SSID will show the security mode in use, like what you see in Figure 8.21.
FIGURE 8.20  iOS joining a wireless network
Technet24

Setting Up a Small Wireless Network 469
Once the client is connected to the network, verify Internet connectivity. Do this by
 opening the browser of your choice and seeing whether you can get to a website such as
www.google.com.
Tech+ exam objective 6.5, “Given a scenario, configure security settings
for a small wireless network,” wants you to know about changing the
SSID and default passwords.
Wireless Router Security
By their very nature, wireless routers are less secure than their wired counterparts. The fact
that their signals travel through the air makes them a little harder to contain. The best
way to help protect network data while it’s being transmitted is to use wireless encryption.
FIGURE 8.21  Android Wi- Fi settings

470 Chapter 8 ■  Networking Concepts and Technologies
While you can create an open network connection, it’s recommended that instead you use
one of the encryption methods outlined in this section.
Open Portals
The growth of wireless systems has created several opportunities for attackers. These systems
are relatively new, they use well- established communications mechanisms, and they’re easily
intercepted.
 Wi- Fi routers use SSIDs to allow communications with a specific access point.
Because by default wireless routers will broadcast their SSID
, all someone with a wireless
client needs to do is to search for an available signal. If it’s not secured, they can connect
within a few seconds.
The advantage of an open portal is that potential users don’t need to enter a password.
If the goal is to let everyone within range onto the network, then an open portal is the
way to go.
Some administrators implement a captive portal feature when using open portals. A cap-
tive portal is a welcome page notifying the user of the conditions of the network, including
which behaviors are permitted. For example, they will often say something to the effect that
hacking and other malicious behaviors are prohibited, and the user assumes responsibility
for their own security. Of course, a sternly worded message won’t keep those with bad intent
from doing bad things, but it can (in theory) absolve the portal owner from any liability.
The point is, open portals pose security risks to the network and to users on the network.
Use them with caution.
WEP
Wired Equivalency Protocol (WEP) was one of the first security standards for wireless
devices. WEP encrypts data to provide data security. It uses a static key (password); the client
needs to know the right key to gain communication through a WEP- enabled device.
The keys
are commonly 10, 26, or 58 hexadecimal characters long.
You may see the use of the notation WEP.x, which refers to the key size;
64- bi
t and 128- bi
t are the most widely used, and 256- bi
t keys are sup-
ported by some vendors (WEP.64, WEP.128, and WEP.256). WEP.64 uses a
10- ch
aracter key. WEP.128 uses 26 characters, and WEP.256 uses 58.
The protocol has always been under scrutiny for not being as secure as initially intended.
WEP is vulnerable because of the nature of static keys and weaknesses in the encryption
algorithms. These weaknesses allow the algorithm potentially to be cracked in a very short
amount of time—  no more than two or three minutes.
This makes WEP one of the more vul-
nerable protocols available for security.
Because of security weaknesses and the availability of newer protocols, WEP is not used
widely. It’s still better than nothing, though, and it does an adequate job of keeping casual
snoops at bay. But if you have any other options, it’s best to avoid WEP.
Technet24

Setting Up a Small Wireless Network 471
WPA
Wi- Fi Protected Access (WP A) is an improvement on WEP that was first available in 1999
but did not see widespread acceptance until around 2003. Once it became widely available,
the Wi- Fi Alliance recommended that networks no longer use
WEP in favor of WPA.
This standard was the first to implement some of the features defined in the IEEE 802.11i
security specification. Most notable among them was the use of the Temporal Key Integ-
rity Protocol (TKIP). Whereas WEP used a static 64-  or 128- bit key,
 TKIP uses a 128- bit
dynamic per- packet key.
 It generates a new key for each packet sent. WPA also introduced
message integrity checking.
When WPA was introduced to the market, it was intended to be a temporary solution to
wireless security. The provisions of 802.11i had already been drafted, and a standard that
employed all of the security recommendations was in development. The upgraded standard
would eventually be known as WPA2.
WPA2
Even though their names might make you assume that WPA and WPA2 are very similar, they
are quite different in structure. Wi- Fi Protected Access 2 (WP
A2) is a huge improvement
over WEP and WPA. As mentioned earlier, WPA2 implements all of the required elements
of the 802.11i security standard. Most notably, it uses Counter Mode CBC- MAC Protocol
(CCMP),
 which is a protocol based on the Advanced Encryption Standard (AES) security
algorithm. CCMP was created to address the shortcomings of TKIP, so consequently it’s
much stronger than TKIP. Typical WPA2 security keys are 128 bits long.
The terms CCMP and AES tend to be interchangeable in common par-
lance. You might also see it written as AES- CC
MP.
Since 2006, wireless devices have been required to support WPA2 to be certified as Wi- Fi
compliant.
WPA2 provides strong encryption and data protection, although it can be some-
what susceptible to brute- force attacks, where passwords are rapidly guessed until the right
one is found.
Both WPA and WPA2 can use an authentication mode called preshared
key (PSK), in which a security key is generated by the server (or router)
and shared with all clients on the network. In Wi- Fi
, PSK is in use any-
time the “personal” suffix is added, for example, “WPA2 Personal”
like you saw in Figure 8.18. This is in contrast to the more secure WPA2
Enterprise, where each user or device gets individualized security creden -
tials to join the network. As long as the WPA2 passphrase is kept confi-
dential, it’s very secure.

472 Chapter 8 ■  Networking Concepts and Technologies
WPA3
The newest and best wireless encryption standard is Wi- Fi Protected Access 3 (WP A3), intro-
duced in 2018. It uses AES- CCMP like WP
A2 as well as the more advanced AES Galois/
Counter Mode Protection (AES- GCMP) standard. It supports security keys of 128 bits and
256 bits in length.
One major improvement over
WPA2 is the replacement of PSK with a more secure
method called Simultaneous Authentication of Equals (SAE), also known as the Dragonfly
Key Exchange. SAE basically works by generating unique security codes every time the
device connects and authenticates (logs in) to the router, rather than using the same passcode
every time.
Exam objective 6.5 specifies that you should know Wi- Fi e ncryption
options such as an open network, preshared key, WPA, WPA2, and WPA3.
I threw a lot of acronyms and detail at you in describing each of these,
and it’s very likely way more than you will need to know for the Tech+
exam. Focus on understanding that open networks are unsecure, and
that WPA3 is better than WPA2, which is better than WPA. Also know the
basic workings of PSK, in that the same passphrase (or passcode) is used
by all clients.
Additional Wireless Router Services
Wireless routers offer many more services than I’ve been able to cover to this point, and
most of them are out of the scope of Tech+ exam training. Still, there are a few items men-
tioned earlier in this book that I want to cover while on the subject.
Guest Access
Clients who access your wireless network can see other clients on the network and access
their resources that are shared. If you have clients who need Internet access but you don’t
want them to see the rest of the network, you can let them on as guests.
As a security precaution, leave your guest network disabled unless you
have a specific reason to enable it.
Guest clients will need to know the SSID of your guest network as well as the password.
Of course, make sure this password is different than the other ones you have configured
so far. If you look back at Figure 8.16, you can see the guest network configuration on my
router. Notice that the password is displayed in plain text. Clicking any of the links in the
Guest Access box, or clicking the Guest Access icon in the left menu, will bring up the Guest
Access window (Figure 8.22), where you can change the settings.
Technet24

Setting Up a Small Wireless Network 473
DHCP
Earlier in this chapter, I talked about DHCP and how it automatically configures your cli-
ents with IP addresses. This router has it enabled (see Figure 8.23), and you can see some
of the configuration options. For the most part, you won’t need to change any of these,
unless perhaps you want to allow more than the default of 50 clients onto your network.
Odds are if you have that many clients, you will need a second wireless access point to
handle the traffic.
Firewall
Software firewall functionality was detailed in Chapter 5. A router is often used as a
hardware firewall to protect several computers. Figure 8.24 shows you the Security section
of the router’s configuration, which allows you to set up your firewall rules.
FIGURE 8.22  Guest network configuration

474 Chapter 8 ■  Networking Concepts and Technologies
FIGURE 8.24  Firewall set tings
FIGURE 8.23  DHCP configuration
Technet24

Setting Up a Small Wireless Network 475
On these three security tabs, you can set an Internet access policy and block proto-
cols such as HTTPS, FTP, and others. Other security options are under Parental Controls,
which allows you to block websites by URL and limit Internet access times, as shown in
Figure 8.25.
Configuring a Small Office Network
You are helping a friend who is opening a small tax preparation firm. She needs to set up
an office network for five users. Her office will need Internet access, and because she is
dealing with confidential financial information, security is a big concern.
When clients come into the office, some bring their laptops to help the tax preparer find
all of the documentation needed. The clients may need Internet access for this. What steps
should you take to help her configure a network in the most appropriate way?
FIGURE 8.25  Parental controls

476 Chapter 8 ■  Networking Concepts and Technologies
Answers can vary somewhat, but here are some recommended steps:
1. Contact the local phone company and the local cable company to see what the best
deal is for Internet access and set up an account. Once the DSL or cable modem
arrives, begin the network setup.
2. While you are waiting for the modem, purchase a wireless router. It’s generally best to
get the most current technology, so 802.1 1ac or 802.1 1ax is the best choice.
3. Set up the wireless router:
a. Plug in the cables per the instructions.
b. Change the SSID from the default. If she is highly concerned about security, using
her company name is probably not the best option.
c. Set the network to use WPA3 or WPA2 security. Do not leave the network open to
Wi- Fi
access!
d. Change the network password to something difficult to guess. Random characters
are good, but she might want something she can remember if for some reason
she needs to add a client to the network. Maybe Tx$pr4y2 (Tax dollars prep for
you too).
e. Change the admin password to something equally difficult to guess, if not more
so. Go with something like 7ygH$2p*.
f. Enable the guest network. The SSID can be easier to use than the regular network
SSID, such as TaxPrepGuest. The password should be challenging but not overly
so—  something like tpg$2024.
g. Update the firmware on the router or set it to update automatically.
4. Add the client computers to the network. Verify Internet connectivity.
5. Using your laptop, verify that the guest network works and that you are able to get on
the Internet using it.
Summary
This chapter provided an in- depth discussion of networking concepts. You started off by
learning about the connection types and features of each. For example, external connec-
tions to the Internet are almost always broadband today, and the most popular choices are
fiber- optic, DSL,
 and cable Internet. For internal networking, you have two primary choices:
wired and wireless. Wireless networking really means Wi- Fi, which is based on the IEEE
802.11 standard.
 Other wireless connection types include Bluetooth and infrared, but those
are specialized connection types not intended for full- scale networking.
Technet24

Exam Essentials 477
The next topic was networking essentials, starting with important devices such as
modems, switches, access points, routers, and firewalls. You then learned about protocols
and in particular the most important protocol used today, TCP/IP. You learned about IP
addresses, subnet masks, and default gateways. In addition, you learned about DHCP and
DNS. The section finished with a discussion of network storage options.
This chapter concluded with a detailed look at how to set up and configure a wireless
router enabling a wireless network. Important facets included changing the SSID, setting up
the best security possible, and making sure that clients can access the Internet.
Exam Essentials
Know what the three network storage types are. The three types are a file server,  NAS, and
the cloud.
Remember common designations for network throughput units. From slowest to fastest,
they are bits per second (bps),
 kilobits per second (Kbps), megabits per second (Mbps), giga-
bits per second (Gbps), and terabits per second (Tbps). The exam objectives say Terabytes
per second is Tbps, but any acronym using bytes will have an uppercase B.
Understand what the common options are for Internet access. Options include dial- up,
DSL,
 cable modems, fiber- optic Internet, satellite,
 cellular, and radio frequency.
Know the two types of internal network connections and pros and cons of each. The two
choices are wired and wireless.
Wired is more secure and faster, but wireless is popular
because of its vastly superior mobility.
Know what five networking devices do. Modems are used to connect computers via tele-
phone lines.
 Switches connect computers in a LAN. Access points are used in wireless net-
works to provide connectivity. Routers connect networks to each other, and firewalls are
security appliances that can block network traffic.
Understand two networking models. They are client/server,
 where some computers are
designated as servers and others as clients or workstations, and peer- to- peer,
 where all com-
puters are treated as equals.
Know the difference between a LAN and a WAN. A local area network (LAN) is typically
confined to a small area.
A wide area network (WAN) is usually geographically dispersed
and connected via broadband networking.
Know which IP configuration options are required. To communicate on a network,
 every
host needs an IP address and a subnet mask. If you want to get on the Internet, you also
need a default gateway (such as a wireless router).
Understand what DHCP and DNS do for you. DHCP automatically assigns TCP/IP config-
uration information to clients.
 DNS resolves user- friendly hostnames such as www.google
.com to an IP address.

478 Chapter 8 ■  Networking Concepts and Technologies
Understand three types of network identifiers. IP addresses are logical addresses and can
be changed. MA
C addresses are physical addresses built into the network card and cannot
be changed. Ports are like an extension of the IP address that identify which protocol is
being used.
Know the best wireless security options. WPA3 is the best,
 followed by WPA2, WPA, and
as a minimum, WEP.
Understand three basic network services and what six related key network protocols
do. HTTP and HTTPS are used on the Internet; HTTPS is secure. FTP is for file transfers.

POP3 and IMAP are protocols used to retrieve (download) email from a mail server. SMTP
is used to send emails.
Understand the 802.11 standards, speed limitations, and interference and attenuation
factors. The standards are 802.11a/b/g/n/ac/ax. 802.11ax is the newest and fastest.
 Dis-
tance, radio frequency interference, and physical obstacles are factors that will cause signals
to attenuate faster.
Know the three bands that Wi- Fi uses. They are 2.4 GHz, 5 GHz,
 and 6 GHz. Generally
speaking, the higher the band number, the more data throughput it can support, but it will
also cover shorter distances due to higher attenuation and risk of interference.
Given a scenario, configure small network security settings. In addition to changing the
SSID and default passwords, remember the difference between open (unencrypted) networks
and those encrypted by some version of
WPA.
Chapter 8 Lab
You can find the answers in Appendix A.
The Chapter 8 lab has two parts to it. In Part 1, you will set up your own secure network. In
Part 2, you will see how well others around you have done.
Part 1: Setting Up Y our Wireless Router
1. Plug in your router per the manufacturer’s instructions, and configure the connection to
your Internet device (if applicable).
2. Run the setup routine.
3. Set your SSID.
4. Set security to the strongest available option.
5. Change the wireless password to something that is challenging to guess.
6. Change the administrator password to something that’s even harder to guess.
7. Connect your client computer to the network.
8. Verify Internet access.
9. Update the firmware; set the firmware to update automatically if you like.
Technet24

Chapter 8 Lab 479
Part 2: T esting Y our Neighbors
In this part, you will check to see how well your neighbors have set up their wireless
networks.
1. Open the list of available networks on your client computer (or mobile device). How
many do you see available?
If you live in a densely populated area, especially an apartment or condominium, you
will probably have a really long list of available networks.
2. How many of those networks are unsecured?
3. Don’t try to connect to neighbors’ unsecured networks. One big reason why is that it’s
illegal. Another reason is that it could expose your computer to potential threats on that
unsecured network.

480 Chapter 8 ■  Networking Concepts and Technologies
Review Questions
You can find the answers in Appendix B.
1. You are configuring a computer to participate on a TCP/IP network. Which of the following
are mandatory? (Choose two.)
A
. IP address
B. Default gateway
C. DHCP server
D. Subnet mask
2. Which one of the following types of network connections can give you the highest data
transfer rates?
A. T1
B. DSL
C. ISDN
D. Cellular
3. You are configuring a wireless network with six computers and no dedicated administrator
.
Which networking model is most appropriate?
A. LAN
B. WAN
C
. Peer- to- peer
D. Client- server
4
. You have a scenario where you need to disable the guest network on your wireless router
.
You try to log in, but your password does not work. After several attempts, you realize that
you forgot your password. What can you do?
A. Use the password reset option in your router configuration utility.
B
. Unplug the router and plug it back in.
C. Use the default password of admin.
D. Hold the reset button down for 30 seconds to reset the router.
5
. Your company has a remote office on a cruise ship that sails across the ocean.
 Which type of
Internet service is likely the best choice?
A. Fiber- optic
B
. Satellite
C. Cellular
D. RF
Technet24

Review Questions 481
6. This question refers to the scenario at the end of the chapter,  in “Configuring a Small Office
Network.” When connecting client computers to the network, what password do they need
to enter?
A. tpg$2015
B. 7ygH$2p*
C. Tx$pr4y2
D. No password is required.
7. Your friend Maria asks you which router feature helps secure against malicious network
traffic.
 What do you tell her?
A. DNS
B. DHCP
C. Firewall
D. DSL
8. Which of the following is true about TCP/IP ports?
A
. It’s based on the protocol being used.
B
. It’s the network address of the host.
C
. It will differ based on the MAC address.
D. It will differ based on the networking model used.
9. Your friend Michael is setting up a wireless network and asks you which security option he
should choose to make the network the most secure.
 What do you suggest?
A. WEP
B. WPA
C
. WPA2
D. Open
10. Which of the following connectivity options gives you the best mobility?
A. Cellular
B. Wireless
C
. Wired
D. Broadband
11. You need to set up a wireless network.
 Which standard will give you the highest speed?
A. 802.11a
B. 802.11ac
C. 802.11g
D. 802.11n

482 Chapter 8 ■  Networking Concepts and Technologies
12. Which of the following W
i- Fi band options will cover the shortest distance?
A. 6 GHz
B. 5 GHz
C. 2.4 GHz
D. 1180 kHz
13. Which one of these connection types has the longest delay?
A. Wireless
B
. Infrared
C. Wired
D. Cellular
14. Which networking device is designed to connect networks to each other?
A. Switch
B. Router
C. Firewall
D. Access point
15. Which network protocol is designed specifically for uploading and downloading files?
A. HTTPS
B. POP3
C. SMTP
D. FTP
16. You are connecting to an email server to download email.
 Which of the following protocols
is your computer most likely using? (Choose two.)
A. HTTPS
B. POP3
C. SMTP
D. IMAP
1 7. What command would you use in macOS to determine your TCP/IP configuration
information?
A
. ifconfig
B. ipconfig
C. ipinfo
D. tcpipconfig
Technet24

Review Questions 483
18. By definition, what is an SSID?
A
. A wireless network name
B. A wireless network security protocol
C. A wireless network security password
D. A wireless network authentication method
19
. When configuring a wireless router,
 which of the following should you always do?
(Choose two.)
A. Enable DHCP.
B
. Change the SSID.
C
. Change the admin password.
D. Configure the firewall.
20. This question refers to the scenario at the end of the chapter.
 Your friend wants the tax prep
agents to be able to let clients connect their wireless devices to the network. Which password
should she tell the agents to give to clients?
A. 7ygH$2p*
B. tpg$2015
C. Tx$pr4y2
D. No password is required.

Technet24

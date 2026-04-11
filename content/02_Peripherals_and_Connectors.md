# Lesson 2: Peripherals and Connectors

Source: CompTIA Tech+ (FC0-U71) Study Guide PDF — chapter content, lab, and review questions (PDF pages 111–178).

---
Peripherals and
Connectors
THE FOLLOWING COMPTIA TECH+ FC0- U71
EXAM OBJECTIVES
ARE COVERED IN THIS
CHAPTER:
 ✓ 1.0 IT Concepts and T erminology
 ✓ 1.3:
 Compare and contrast common units of measure.
 ■ Throughput unit
 ■ Bits per second (bps)
 ■ Kilobits per second (Kbps)
 ■ Megabits per second (Mbps)
 ■ Gigabits per second (Gbps)
 ■ Terabytes per second (Tbps)
 ✓ 2.0 Infrastructure
 ✓ 2.3: Compar
e and contrast storage types.
 ■ Local network storage
 ■ Network-attached storage (NAS)
 ✓ 2.4: Given a scenario, install and configure common
per
ipheral devices.
 ■ Devices
 ■ Printer
 ■ Scanner
 ■ Keyboard
 ■ Mouse
 ■ Web camera
 ■ External drive
Chapter
2

 ■ Speakers/headset
 ■ Display
 ■ Smart TV
 ■ Projector
 ■ Monitor
 ■ Uninterruptible power supply (UPS)
 ■ Installation types
 ■ Plug-and-play vs. driver installation
 ■ Other required steps
 ■ IP- based peripherals
 ■ Webbased configuration steps
 ✓ 2.5: Compare and contrast common types of input/output device interfaces.
 ■ Networking
 ■ Wired
 ■ Ethernet connector (RJ45)
 ■ Fiber connector small form-factor pluggable (SFP)
 ■ Wireless
 ■ Bluetooth
 ■ Nearfield communication (NFC)
 ■ 802.11
 ■ Networking devices and tools
 ■ Crimpers
 ■ Cable testers
 ■ Peripheral devices
 ■ USB (A/B/C)
 ■ Thunderbolt
 ■ Bluetooth
 ■ Radio frequency (RF)
 ■ Lightning
 ■ Display ports
 ■ Video Graphics Array (VGA)
 ■ Digital Visual Interface (DVI)
 ■ High Definition Media Interface (HDMI)
 ■ DisplayPort
 ■ USB-C
 ■ Display Technology
 ■ Mirroring
 ■ Casting

The hardware inside your computer’s case is critical to its operation, no doubt about it. By contrast, the peripheral hardware
outside the case is optional. Your computer doesn’t need a
monitor or a keyboard to work properly. Granted, these devices add functionality that you
really want. No one is going to bother using a computer without a display for very long.
Dozens of different types of peripherals can be attached to a computer. It would be impractical to cover all possible peripherals here, so let’s focus on some of the most common ones that
you will encounter. Each one, of course, provides specific functionality to make a computer do
the things you want it to do. Some devices have one specific function— take the keyboard, for

example. It’s designed solely to provide input. Other peripherals can do multiple things, such
as many printers. Not only do they print, but most can also scan and maybe even send and
receive faxes. In this way, a multifunctional printer is both an input and an output device.
In this chapter, you’ll learn about three different categories of computer peripherals:
those that provide audio and video, those that allow for external storage and communication, and those that perform input and output functions and manage power. I will group the
peripheral devices the best I can, but know that there will be some overlap because of their
functionality or the technologies used. For example, audio and video are clearly output, but
they’re so specialized that they deserve their own sections. In addition, some of the connectors used for external storage can also be used for video or other devices. Some technologies
are multipurpose, so they naturally fall into multiple camps.
Along with the devices themselves, there are lots of different connector types to address.
Even though I have many to discuss, the good news is that it’s hard to plug something
into the wrong spot. I’m not saying that you can’t do it (I know some of you like a good
challenge), but it’s pretty tough to do.
Finally, at the end of the chapter, I’ll explain installation steps for various devices.
Topics will include driver installation as well as special considerations for IP-   and
webbased peripherals.
Then, there will be one final review of all the connectors covered in
this chapter.
Installing and Configuring Audio and
Video Devices
While it might be hard to believe such a scenario, the first computers didn’t have video
output. In those nowancient times, output could have been delivered via punch cards,

a series of lights, or printed paper. Back then, computers were basically used as giant
Installing and Configuring Audio and Video Devices 71
calculators so the output didn’t require fancy graphics. Fortunately, monitors started
making common appearances in the mid-  1970s, and the technology has steadily

improved. The inclusion of audio output, other than basic beeping, wasn’t common for
another decade.
In this first section, you’ll look at audio and video peripherals, which are generally classified as output devices. Now this designation doesn’t completely hold true, as you will see.
For example, sound cards have connections for microphones, which allow users to input
as well as output sound, and touchscreens allow for user input as well. Regardless, most
of what I cover here will be specifically related to computer output, and I’ll talk about the
exceptions as I move through the chapter objectives.
Audio Connectors
Audio and audio connectors are a pretty easy topic in the grand scheme of computers, so
let’s tackle it first and get it out of the way. As you learned in Chapter 1, “Core Hardware
Components,” computers can have internal sound cards (or audio cards) that will let the
computer produce music, sound for games, or even the voices of your friends and loved ones.
To hear the sound, though, you need speakers. Speakers come in a variety of shapes and
sizes, from simple and cheap headphones to complex speaker systems that rival those found
in high- end home theaters. Depending on for what purpose you intend to use your computer
,
you can choose the right kind for your needs. Laptops almost always have speakers built
into their case.
Figure 2.1 shows you the backpanel connectors of a desktop system.
You can tell that
these connectors are all built into the motherboard because of their location. If this system
had a separate sound card, the audio connectors would be in an expansion slot instead. On
the right side you see three round audio connectors designed for 1∕8″ (3.5 mm) plugs. This
system also gives you a handy icon next to each plug, letting you know which one is for
audio input, which one is for speakers (it’s usually green), and which one is for the micro-
phone (usually pink).
FIGURE 2.1  Audio connectors

The example in Figure 2.1 is pretty basic. Some sound cards give you a few more plugs,
such as the one in Figure 2.2. In this one, the black plug is for a subwoofer (if you have
one), green is for speakers, and pink is still for the microphone. It’s really hard to see, but on
sound cards such as this, there are small icons etched into the metal plate to let you know
what should be plugged into each port. To me, decoding them is a little like trying to read
hieroglyphics. This sound card also has a DA15 connector on the right, called a game port,
which can be used to plug in olderstyle joysticks.
Game ports have been made obsolete by USB ports, which I will talk about
shortly. Any joysticks that you find today will most likely be USB.
So, this is the first example of a component (the sound card) handling both input and
output duties. Speakers most definitely provide output, and microphones and joysticks are
input devices. But they both plug into the same device—  either the sound card or the audio
ports built into the motherboard.
Tech+ exam objective 2.4, “Given a scenario, install and configure
common peripheral devices,” includes speakers/headset as a
subobjective.
If your neighbors don’t want to hear your music, or if you want to have a private
conversation, a headset is a better choice than external speakers. Headsets combine speakers
and a microphone into one device, conveniently worn on your head. (Of course, earbuds and
other in- ear devices count, too.) Nearly all wired headsets,
 like the one shown in Figure 2.3,
will connect via USB. Wireless headsets will either have a USB dongle or use Bluetooth,
which we will get into later in this chapter.
FIGURE 2.2  Sound card with g ame port
Installing and Configuring Audio and Video Devices 73
Display Devices and Connectors
Can you imagine not having monitors on computers? Well, the earliest computers didn’t have
video output, and academics and scientists still used them. Granted, the machines also took up
the entire room and had a fraction of the computing power of your wristwatch, but they were
still computers. It’s a good thing that technology has come a long way since then. It’s doubtful
that computers would enjoy the popularity they have today if they weren’t visual.
In Chapter 1, you learned about video cards. Here, I’ll talk about the other end of that
system, which is the display device. After that, I’ll spend some time talking about the types of
connectors that you will use to join the display and computer together. Finally, you will look
at how to configure some common video settings on your computer.
Display Devices
When it comes to display devices, you have quite a few choices in the marketplace. In many
ways, choosing a display device for a computer is much like shopping for a television.
FIGURE 2.3  A USB headset

They use similar technologies and give you similar features. Here, I’ll group display devices
into these four broad categories:
 ■ Monitors
 ■ Smart TVs
 ■ Touchscreens
 ■ Projectors
In upcoming sections, I’ll discuss each one in order.
Tech+ exam objective 2.4 lists Display as a subobjective that includes
smart TV, projector, and monitor.
Monitors
Flatscreen monitors  are by far and away the most popular type of display device you will
encounter today. Flat screens replaced old and bulky cathode ray tube (CRT) monitors
because they are much thinner and lighter than conventional CRTs, and they also consume
significantly less power.
The rise of flatscreen displays coincided with the rise in popularity of laptops. Said a
better way
, it’s likely that flatscreen technology—  which made laptops far smaller and more
portable than they ever had been—  helped laptops explode in popularity.
Monitors are mostly based on one of two underlying technologies,
 LCD and LED:
Liquid Crystal Display Monitor A liquid crystal displa
y (LCD) monitor has two polarized
filters, between which are liquid crystals. For light to appear on the display screen, it must
pass through both filters and the crystals. The second filter, however, is at an angle to the
first, so by default nothing passes through. By applying current to the crystal, you can cause
it to twist, which also twists the light passing through it. If the light twists so that it matches
the angle of the second filter, it can pass through the filter and light up an area of the display.
On a color LCD, an additional filter splits the light into separate cells for red, green, and
blue. An LCD monitor needs a light source, which is called a backlight and is either behind
or near the edge of the display.
LightEmitting Diode Monitor If you can’t tell the difference between an LCD display and
a
lightemitting diode (LED) monitor,
 you’re not alone. LED displays are just LCD panels
with lightemitting diodes (LEDs) as light sources instead of the cold cathode fluorescent
(CCFL) backlighting used by conventional LCD monitors.
This results in brighter colors and
darker blacks.
There are of course offshoots to these technologies. If you go monitor shopping today you
will be introduced to:
 ■ In- plane switching (IPS), which delivers wide viewing angles but has slower response
times,
 so it isn’t as good for fastmotion video such as games or live sports.
 ■ Organic lightemitting diode (OLED), where the pixels themselves emit their own light
without the need of a backlight. OLEDs have good response times, but more limited
Installing and Configuring Audio and Video Devices 75
viewing angles, may not be as bright (but have darker black versus backlight monitors that
might look a little gray when images are dark), and can be susceptible to image burnin.
 ■ Quantum dot LED (QLED) screens need a backlight. They use an LCD screen overlaid
with very small quantum dots to sharpen the picture. Their primary advantage is that
they are brighter than OLEDs.
It’s unlikely that the Tech+ exam will quiz you in much detail about how IPS, OLED, or
QLED work, but knowing the basics is still useful. For the real world, understand that different technologies exist, and each has pros and cons that may better suit a user’s needs.
Smart TVs
A smart TV is very much so like a monitor. The biggest differences are that smart TVs
are usually larger and they have builtin Internet connectivity as well as preinstalled apps.
Because of their larger size,
 they often won’t produce as crisp of an image as a monitor will.
I will talk about this more in the “Adjusting and Configuring Displays” section later in this
chapter. Connecting a smart TV is just like connecting a monitor.
Just like when you are shopping for a computer or monitor, the specs of similarly sized
or priced smart TVs might be very different. It’s best to shop around to see what features
each has to determine what’s best for your needs and budget. Table 2.1 shows some sample
specifications for three similarly priced 75″  smart TVs. Don’t worry if you’re not familiar
with all of the specification types; we will cover the ones you need to know throughout
this chapter.
TABLE 2.1  Smart TV specifications
Brand LG Hisense Samsung Sony
Resolution 4K (2160p) 4K (2160p) 4K (2160p) 4K (2160p)
Backlight Edge lit Full array local
dimming
Full array local
dimming
Direct lit
Voice assistant Amazon
Alexa
Google Assistant Amazon Alexa Google
Assistant
LED panel type QNED QLED QLED Standard LED
Picture quality
enhancement
Active HDR 4K Active HDR Quantum HDR 4X 4K HDR Processor X1
Motion
enhancement
None Motion Rate 480 Motion Xcelerator
Turbo+
Motionflow
XR960
Refresh rate 120 Hz 144 Hz 120 Hz 120 Hz
Smart platform (OS) webOS Google TV Tizen Google TV

T ouchscreens
Touchscreens have exploded in popularity in recent years. They are pretty much standard
fare for smartphones and tablets, and most laptop computers (except for lowerend models)
offer them as well.
The idea is pretty simple; it looks like any other display device, but you
can touch the screen and the system senses it. It can be as simple as registering a click, like a
mouse, or it can be more advanced such as capturing handwriting and saving it as a digital
note. It’s both an output device and an input device.
Although the technical details of how touchscreens work are beyond the scope of this
book, there are a few things to know. One is that some touchscreens will work with any
object touching them, whereas others require a conductive input, such as your finger. Smartphones are a great example of this, as anyone who lives in cold climates and wears gloves
can attest. The second thing is that some touchscreens are coated with a film that is sensitive
to touch. Cleaning these screens with regular glass cleaner can ruin the touchscreen nature of
the device. It’s best to clean those devices only with a damp cloth as needed.
What About Webcams?
Since I’m discussing video devices in this section, this is probably the best place to talk about
web cameras, or webcams. A webcam is a small camera attached or built into your computer
that allows you to capture video. It does not record the video itself, but it transmits the video
signals to the computer for display or processing. Those signals can be recorded or streamed
live in a webcast or video chat. Almost all laptops now have webcams built into their cases,
whereas desktop webcams generally connect to the computer via USB.
Web cameras are a subobjective of Tech+ exam objective 2.4, so ensure you are familiar
with them.
Projectors
Another major category of display device is the video projection system, or projector. Portable projectors are incredibly useful if you travel a lot or if you can’t afford projectors for
Brand LG Hisense Samsung Sony
Major streaming
services
11 8 11 7
HDMI inputs 4 4 4 4
Weight (lbs) 72.8 79.4 72.1 74.5
TABLE 2.1  Smart TV
specifications (continued)
Installing and Configuring Audio and Video Devices 77
every conference room in your office. Interactive whiteboards allow presenters to project
an image onto the board as they use virtual markers to draw electronically on the displayed
image. Remote participants can see the slide on their computer, as well as the markups made
by the presenter. The presenter can see the same markups because the board transmits them
to the computer to which the projector is attached, causing them to be displayed by the projector in real time.
Projection systems are required to produce a lighted image and display it many feet
away from the system. The inherent challenge to this is that ambient light tends to inter-
fere with the image’s projection. The best way to fight this problem is to ensure that your
projector has a high brightness rating, which is measured in lumens. Projection systems are
usually rated and chosen for purchase based on lumens of brightness, once a maximum supported resolution has been chosen. In a relatively darkened room, a projector producing as
little as 1,300 lumens is adequate. However, in a very well- lit area, you may need 5,000 to
6,000 lumens for the image to be readily visible to viewers.
 By way of comparison, standard
indoor light bulbs typically produce between 800 lumens and 1,200 lumens.
Bulb replacements tend to be relatively expensive, so treat your projector
with care when moving it!
Video Connectors
Now that I have talked about the characteristics of different display devices, let’s discuss
how to plug them into a computer. I will start with the oldest technologies and work toward
the present, and I’ll show you what each connector and port looks like.
The Tech+ exam objective 2.5, “Compare and contrast common types of
input/output device interfaces,” lists several display ports (video connec -
tors) you need to know for the exam:
 ■ Video Graphics Array (VGA)
 ■ Digital Visual Interface (DVI)
 ■ High Definition Media Interface (HDMI)
 ■ DisplayPort
 ■ USB-C
VGA
The video graphics array (VGA) connector was the de facto video standard for computers
for years and is still in use today. First introduced in 1987 by IBM, it was quickly adopted
by other PC manufacturers. The term VGA is often used interchangeably to refer to generic
analog video, the 15- pin video connector I’m talking about here, or a 640 × 480 screen resolution (even though the
VGA standard can support much higher resolutions). Figure 2.4
shows a VGA connector, as well as the male connector that plugs into the monitor. Nearly all
VGA connectors are blue in color.

VGA technology is the only one on the objectives list that is analog. It has been superseded by newer digital standards such as DVI (discussed next), and it was supposed to be
phased out starting in 2013. A technology this widely used will be around for quite a while,
though, and you’ll still see a lot of these in the wild.
All of the video connector types introduced from here on are digital
standards.
DVI
Digital visual interface (DVI) was introduced in 1999. It’s the first widely used digital video
standard for computers, but it also supports analog signals. On video cards, it’s a white
blocky connector about an inch long. Figure 2.5 shows what the connector looks like coming from the monitor.
FIGURE 2.4  VGA connector s
FIGURE 2.5  DVI connector
Installing and Configuring Audio and Video Devices 79
The designers of DVI were smart to make it compatible with analog signals, as well as
VGA technology. If you have a monitor with a DVI cable but a computer with only a VGA
port (or vice versa), you can buy an adapter to connect the two.
USB
Universal serial bus (USB) is a ubiquitous connector, so it should come as no surprise that
there are USB display devices. The first widely used standard was USB 1.1, which was
released in 1998, but it was pretty slow (only 12 Mbps), so it was really only used for keyboards, mice, and printers. When USB 2.0 came out in 2000 with a high- speed transfer rate
of 480 Mbps, video devices were possible.
 I am guessing that everyone has seen USB, and the
familiar connector is technically USB- A. USB-C is the newest connector,
 and it’s an elongated
oval shape, as shown in Figure 2.6. It was designed to replace older USB connectors, and
it’s reversible, meaning that you can plug it in with either edge up— there is no such thing as
“upside down” with USB-C.
The current fastest USB standard is USB 4, which supports data transfer speeds of up
to 40 Gbps.
 Keep in mind that to achieve these speeds, all of the relevant components,
including the motherboard, cable, and USB device, need to support that standard. If not, the
chain will work only as fast as the slowest link.
Just How Fast Is It?
It’s important to understand the different throughput units of measure. For example, I will
refer to speeds in terms of bits per second (bps) throughout this chapter. In the case of the
old USB 1.1, it’s megabits per second (Mbps), whereas USB 4 is gigabits per second (Gbps).
In the field, you will also see kilobits per second (Kbps) and terabits per second (Tbps).
The good news is that the naming conventions are similar to the storage units you learned
FIGURE 2.6  USB-C (top) and USB- A (bottom) connector s

about in Chapter 1. The math is the same. If the speed is 1,000 bits per second, that equals
1 kilobit per second, and a speed of 1,000 Kbps is the same as 1 Mbps.
Just to confuse things a little, some devices will have throughput rated in bytes per second.
Remember that a byte is 8 bits, so it’s a big difference! In terms of abbreviations, bits per
second (bps) uses a lowercase b, and bytes per second (Bps) uses an uppercase B.
Tech+ exam objective 1.3, “Compare and contrast common units of measure, ” asks you to
be familiar with these throughput units. In the exam objectives, Tbps is incorrectly labeled
terabytes per second. Remember that bytes will always have an uppercase B, and bits will
always use a lowercase b.
Perhaps the nicest feature of USB display devices is that they can draw their power from
the USB cable, so you do not need to plug in a separate power cord for the display.
HDMI
One of the newest standards, and a very popular one in the home theater market today,
is high- definition multimedia interface (HDMI)
. (The exam objectives also call it high-
definition media interface, but the difference is unimportant.) It was introduced in 2002,

which makes it seem old in technology years, but it’s a great, fast, reliable connector that will
probably be around for several years to come. Figure 2.7 shows an HDMI cable and port on
a motherboard.
FIGURE 2.7  HDMI cable and connector
Installing and Configuring Audio and Video Devices 81
The HDMI standard is very fast; the most current version, HDMI 2.1 (released in
November 2017), has a data rate of 48 Gbps. HDMI 2.1 supports 4K and 8K video at a
120 Hz refresh rate. Like USB, HDMI also has an advantage over DVI and other older standards in that it can carry audio signals and network connectivity as well as video.
Even though HDMI can transmit more than video, it’s nearly always
considered a “video standard.”
DisplayPort and Thunderbolt
DisplayPort was introduced in 2008 by the Video Electronics Standards Association (VESA).
It was designed to be an industry standard and replace VGA and DVI. It’s also backward
compatible with VGA and DVI through the use of adapters. Figure 2.8 shows a DisplayPort
port on a laptop and a connector. A DisplayPort port is intended to be for video devices only,
but like HDMI and USB, it can transmit audio and video simultaneously.
Thunderbolt was developed as an offshoot of the DisplayPort technology. The short history is that Apple announced a mini DisplayPort (MDP) standard in late 2008 and stated
that the standard would have no licensing fee. In early 2009, VESA responded by saying
that MDP would be included in the upcoming DisplayPort 1.2 specification. Apple was
not pleased about this, and it teamed up with Intel to rework the specification. It added in
support for PCIe, renamed it Thunderbolt, and launched it in 2011. Thunderbolt supports
not only video devices but also several other types of peripherals. In terms of versatility, it’s
really only second to USB. I’ll talk more about Thunderbolt in the “External Storage Connectors” section later in this chapter. All Apple laptops made today contain a Thunderbolt
port; other laptops can too if the manufacturer licenses the technology from Apple. It looks
a lot like a DisplayPort, only smaller, and has the characteristic lightning bolt icon, as shown
in Figure 2.9.
FIGURE 2.8  DisplayPor t port and connector

Looking at Figure 2.9, you might think that Thunderbolt ports look a lot like USB-C
ones, and you’re right.
 They use the same connectors, and a device supporting one technology can be plugged into a port supporting the other. Without getting into too much
detail, most USB-C devices will work in a Thunderbolt port,
 but Thunderbolt devices likely
will not work if plugged into a computer that only supports USB.
Adjusting and Configuring Displays
Now that we’ve talked about the different types of display devices and how you can hook
them up to your computer, let’s shift gears a bit and talk about how to keep monitors
behaving properly once they’re connected. First, we’ll start with the adjustments on the monitor itself.
When you change the monitor resolution (via the display driver properties in Control
Panel in Windows, for example), the on- screen image may shift in one direction or become
slightly larger or smaller than it was before. Most monitors have on- screen controls that can
be used to adjust the image size, image position,
 contrast, brightness, and other factors. Inexpensive or old monitors may have just a couple of buttons for monitor adjustment; nearly
all newer monitors will have a complete digital menu system of controls that pop up when
you press a certain button. You then move through the menu system by clicking buttons to
change the setting you want. If you’re unsure of what the buttons do, check the monitor’s
manual to figure out how the controls work; they’re different for each model.
Four key concepts to know for adjusting and configuring displays are resolution, refresh
rate, mirroring, and casting.
Resolution Resolution is defined by how many software picture elements (pixels) are used
to draw the screen.
 Resolution is described in terms of the visible image’s dimensions, which
indicate how many rows and columns of pixels are used to draw the screen. For example, a
resolution of 1024 × 768 means 1,024 pixels across (columns) and 768 pixels down (rows)
were used to draw the pixel matrix. Resolution is a software setting that is common among
all display devices.
FIGURE 2.9  Two Thunderbolt ports
Installing and Configuring Audio and Video Devices 83
An advantage of higher resolutions is that more information can be displayed in the same
screen area. A disadvantage is that the same objects and text displayed at a higher resolution
appear smaller and might be harder to see. Some displays will only support specific resolutions. If set to an incorrect option, the image will become warped or distorted.
Refresh Rate The refresh r
ate is the frequency (times per second) at which the image on
the screen is completely redrawn. It’s measured in screen draws per second, or hertz (Hz).
Imagine taking a long ruler and placing it horizontally at the bottom of the display, and
then leaving it parallel to the bottom of the display as you move the ruler to the top of the
display. That’s analogous to a screen draw. Images are refreshed on a display multiple times
per second. The lowest common refresh rate is 60 Hz and is fine for most users and applications. Higher refresh rates translate to more fluid video motion. Gamers and others who
watch fast action will use displays with at least 144Hz, and some displays support 240 Hz.
Refresh rates are typically preset in the display and often can’t be changed. However,
some displays will let you adjust the refresh rate up or down.
Mirroring In some instances, a user will want to have multiple displays,
 such as when
working on a project that requires referencing a spreadsheet and a presentation at the same
time, or when projecting a visual to an audience. If two or more displays are used at the
same time to project the same image, that is called mirroring. Mirroring can be done with a
wired (HDMI, DisplayPort) or wireless (Bluetooth, Miracast, Apple’s AirPlay, or other apps)
connection. We will look at how to configure mirroring on a laptop in Exercise 2.1. When
mirroring, all actions performed on one display (such as moving the mouse or changing
slides) will be shown on the mirrored display.
Casting Screen casting
 is when someone streams media from one device to another over
an Internet connection. For example, you can cast music or a movie from a tablet to a smart
TV. The music or movie then appears on the smart TV and not on the tablet, allowing the
tablet to be used for other things such as Internet surfing. Google’s Chromecast is a popular
example of casting technology.
Mirroring and casting are in Tech+ exam objective 2.5, so be able to compare and contrast the two.
Exercise 2.1 gives you practice in adjusting display settings.
EXERCISE 2.1
Adjusting a Desktop Monitor
1. Locate the buttons on your monitor that control its image. They are usually on the side
or back of the monitor’s case.
2. Experiment with the buttons to see whether you can determine what they do. Or, look
up the buttons in the monitor’s documentation or on the manufacturer’s website.

On a laptop’s builtin monitor, adjustment controls are usually not on the monitor itself but
built into the keyboard. Several of the keys on your keyboard, most often the Function (Fn)
keys near the top of the keyboard, will have extra symbols, sometimes in a contrasting
color. In Figure 2.10, you can see several of these on a laptop’s F3–F8 keys.
Pressing these keys in combination with the Function (Fn) key, as shown in Figure 2.11, activates that special function. For example, there may be a key with a picture of the sun with
an up arrow that increases the display brightness, like the F8 key in Figure 2.10.
It’s fairly common for laptop users to plug in an external display device such as a larger
monitor or a projector. When you do this, you might need to toggle your video output to
the correct device. In the example shown in Figure 2.10, you would press Fn and F4 at the
same time. Options usually include displaying on the internal or external monitor only, displaying the same image on both, or extending the desktop to stretch across both devices.
Figure 2.12 shows you what these options might look like on your laptop.
FIGURE 2.10  Video adjustment keys including F4 (LCD toggle), F7 (dim), and F8 (brighten)
FIGURE 2.11  Function (Fn) k ey
EXERCISE 2.1  (continued)
Installing and Configuring Audio and Video Devices 85
Some older laptops just cycle through the choices without giving you this visual, but
most newer laptops show you what’s happening. Once you have a second monitor attached,
you can configure various aspects of it, such as if it’s the primary or secondary display and
if it appears to the left or the right of your laptop monitor (so if you move your mouse to
the edge of one screen, it automatically flows to the other screen). Exercise 2.2 walks you
through some multiplemonitor configuration options.
EXERCISE 2.2
Changing the Settings for Multiple Monitors
1. Rightclick a blank portion of the desktop.
2. Click Display Settings. If you have multiple displays, you will see a screen similar to the one shown in the book. If you have a single display, you won’t see the same screen; the display settings will start off with the Brightness & Color section instead. You can still make display settings changes, just not configure multiple displays.
FIGURE 2.12  Laptop video toggle
FIGURE 2.13  Display Settings

3. Click and drag the second monitor to the desired virtual position around the primary
monitor. This affects the direction in which you drag objects from one display to the
other. You can see in Figure 2.14 that I placed the secondary display to the right of the
primary one built into the laptop. This affects how your mouse will move between the
two screens.
4. Click the down arrow next to Extend These Displays. You will get a screen similar to the
one in Figure 2.15.
Here you can choose to duplicate the displays (mirroring), extend the displays for a larger
desktop, or show on only one or the other screens.
5. Scroll down in Display settings until you see the Scale & Layout section, like what’s
shown in Figure 2.16.
Notice that here you can change the size of the text, resolution, and orientation. On some
displays, you may also have an option to set the refresh rate. As an optional step, change
the display resolution to something besides the recommended setting and see what happens to the images on the screen. Don’t worry—  you will be able to change it bac
k if you
don’t like it!
6. Click the X in the upperright corner to save your changes and exit.
FIGURE 2.14  Multiple displays
EXERCISE 2.2  (continued)
Installing and Configuring Audio and Video Devices 87
FIGURE 2.15  Multiple display options
FIGURE 2.16  Scale & Layout

Understanding External Storage and
Communications Connectors
In this section, you will look at two types of technologies: external storage and communications connectors. It might seem like an odd combination of technologies, and it’s true
that they don’t always go together. External storage devices are commonly used today, and
they require their own dedicated high- speed connections to work. I’ll talk about the types of
devices as well as those connections.
 Many external devices are networkcompatible, though,

so that relates closely to communications (network) connections.
External Storage Devices
On first glance, it might seem like external storage devices are a relatively new technology in
the computer world. The truth is, external storage was all that computers had before internal
hard drives were created. When PCs started gaining popularity in the early 1980s, internal
storage was more the exception than the rule. Practically every computer had two external
floppy disk drives, usually of the 5¼″ variety. To boot your computer, you would put a boot
disk in the primary floppy drive and then turn on the computer. It would read the floppy
drive and load the operating system into memory from there. Once the operating system
was loaded, you would then take that disk out and put another one in with the program or
data you needed. External storage was the norm, but it didn’t resemble the external storage
options we have today.
Now if you said that high- speed, ultrahigh- capacity external storage was relatively new
to personal computing, you would be right.
 It’s only been since the early 2000s that external
connection speeds were fast enough to support the data requirements of external hard drives.
As speeds have increased, so have the options available for external storage. In this section, I
will talk about several common types of external storage options, as well as the primary connectors you will see used with them.
Types of External Storage
As I have said before, we’ve come a long way since the days of floppy disk drives. Even the
smallest external storage devices used today hold 1,000 or more times the data that the best
floppy disks held. It’s just another indication of how technology has progressed. We need the
larger storage space because we have lots of pictures, videos, and presentations on our computers, and we need to store and transfer them easily. These devices help us do just that.
Tech+ exam objective 2.4 lists external drives under types of peripheral
devices you should know how to install and configure. It doesn’t specify
which type of external drives, so all of the ones listed here may be
fair game.

Flash Drives
We talked about flash drives in Chapter 1, but since we’re specifically covering external
storage options here let’s do a quick review. Flash drives have, for all practical purposes,
replaced external floppy disk drives in computers. They’re compact and cheap, store a lot,
and are easy to use. As you can see in Figure 2.17, they have USB connectors. All you have to
do is to plug in the drive, wait for the system to detect it, and away you go. Most flash drives
have a small light on them that illuminates when they’re ready for use and that blinks when
data is being written to or read from it.
Internally, flash drives use the same technology as solidstate drives (SSDs).
There are no
moving parts. Flash drives are small and can be misplaced, and have about a 10- year shelf
life, which could be considered downsides.
 In 10 years, the flash drive you have will be so
hopelessly outdated, you will want a new one anyway.
Memory Cards
From an internal composition standpoint, memory cards use the same technology as flash
drives. They look a little different, though (see Figure 2.18), and they require a special card
FIGURE 2.17  A flash drive
FIGURE 2.18  SD memory cards

reader. Desktops, laptops, and printers may have memory card readers built into them, like
the laptop shown in Figure 2.19, where it is located next to the USB port. It’s becoming less
and less common to see these readers built into systems today, though, because users have
gravitated towards easyto- use flash drives. If your system doesn’
t have a memory card
reader, you can buy an external one that plugs into a USB port.
There are several different standards of memory cards, and they’re all slightly different
sizes. Three prominent standards are as follows:
 ■ Smart media
 ■ Compact flash
 ■ Secure digital (SD)
Of the three, SD is the most popular and the one most likely to be built into your
laptop or other device today. The standard secure digital (SD) cards are tiny—  barely
over an inch long (32 mm) and 0.08
″ (2.1 mm) thick. You can easily find SD cards up to
512 GB in size, although the theoretical maximum for the current standard (called SD
Extended Capacity, or SDXC) is 2 TB. Memory cards are more expensive than flash drives
of the same capacity.
SD cards also come in two smaller sizes, the mini SD and the micro
SD. Smaller cards will fit into devices built for larger cards, if you use an
adapter.
Memory cards are capable of storing any type of data, but their small size makes them
popular for inserting into devices such as digital cameras and video cameras, as well as small
portable gaming devices.
FIGURE 2.19  SD memory card slot and USB port

External Hard Drives
An external hard drive is basically the same thing as an internal hard drive, except that it’s
enclosed in a protective case and connects via an external connector. External drives can be
conventional HDDs or SSDs. You can see that the one in Figure 2.20 has a USB connector
on the back. This example is a little older; it’s about 6 inches tall and can be set upright as
pictured or laid flat. It has a light on the front to let you know that it’s working, and the
light flashes when the drive is reading or writing.
External hard drives will connect via USB or Thunderbolt connectors. I’ll discuss the differences in the “External Storage Connectors” section later in this chapter.
With current technology, regardless of the type of external hard drive
connection you have, an external drive will be slower than using an
internal SATA hard drive. USB 4 and Thunderbolt are faster than internal
PATA hard drives, however. (USB 4 and Thunderbolt specifications are
outlined in the upcoming “USB” and “Thunderbolt” sections.)
External Optical Drives
In the “External Hard Drives” section, I said that external drives are basically just like
internal drives but with different connectors. The same holds true for external optical drives,
FIGURE 2.20  External hard drive

whether they are CD, DVD, or Bluray devices. Like their external hard drive cousins,  they
will connect via USB or Thunderbolt.
NetworkAttached Storage
A network-attached storage (NAS) device takes hard drive storage to the next level. Based on
its name, you can probably guess that it’s attached to the network, which it is, but that’s just
the beginning. First, take a look at a simple NAS device in Figure 2.21.
Looking at Figure 2.21, you can see that this is a self-  enclosed unit that can hold up to
four hard drives. Some hold more; some hold less.
 Nicer NAS systems will allow you to hotswap hard drives, meaning that if one fails,
 you can remove it and replace it without shutting
the NAS down. Additionally, most NAS systems will have builtin fault tolerance as well,
meaning that if one drive fails,
 your data will still be protected.
In Tech+ exam objective 2.3, “Compare and contrast storage types,”
networkat
tached storage (NAS) is listed under Local Network Storage.
In addition to the hardware, the NAS device contains its own operating system, meaning
that it acts like its own file server. In most cases, you can plug it in, do some very minor configuration, and have instant storage space on your network.
As far as connectivity goes, NAS systems will connect to a PC through a USB or Thunderbolt port, but that is primarily so you can use that PC to run the configuration software for
the NAS. The NAS also connects to the network, and that is how all of the network users
access the storage space.
FIGURE 2.21  Netgear NAS device
Source: PJ / Wikimedia Commons / CC BY -SA 3.0

If you are running a small office and need additional centralized storage, a NAS system is
a good way to go.
Accessing a NAS server over the network will generally be slower than
having an external hard drive on your computer. The advantage is that if
you have multiple users on a network, everyone can easily get to it.
External Storage Connectors
In this section, I want to focus on the three types of connectors that you’re most likely to see
with external hard drives and other peripherals. I’ve mentioned their names throughout this
chapter, and I’ve already covered USB in a bit of depth. It’s important, though, to cover all of
them in the same place so that you’re able to compare and contrast the benefits of each, as
well as to differentiate what they look like.
USB (A/B/C), Thunderbolt, and Lightning are all subobjectives of Tech+
exam objective 2.5. You should be able to compare and contrast these
different peripheral connection types.
USB
USB is the connector I have talked about the most, but it’s such a critical one that it’s good
to review again. And here, I’ll get into a bit more depth than I did before.
Like all other standards, USB has gone through several stages of evolution. The first
published standard was USB 1.0, released in 1986. Because of some technical limitations, it
didn’t really catch on. Those limitations were fixed by 1998 when USB 1.1 was released. It
caught fire in a hurry. It was slow (only 12 Mbps), so it was primarily used for keyboards,
mice, and printers. Since 1998, there have been four major upgrades to the USB standard;
Table 2.2 shows the dates and important facts.
TABLE 2.2  USB specifications
Version Y ear Speed Port/color T rade name
USB 1.1 1998 12 Mbps USB- A
White Full Speed
USB 2.0 2000 480 Mbps USB- A
Black High Speed
USB 3.0 2008 5 Gbps USB- A
Blue, USB-C SuperSpeed
USB 3.1 2
013 10 Gbps USB- A
Teal, USB-C SuperSpeed+
USB 3.2 2
017 20 Gbps USB-C SuperSpeed 20 Gbps
USB 4 2
019 40 Gbps USB-C USB4 40 Gbps

USB 3.1 had people really excited because that version put USB in the same ballpark as
the fastest standards at the time, which were FireWire, eSATA, and Thunderbolt. USB 3.2,
which was finalized in September 2017, doubled the speed of USB 3.1, delivering 20 Gbps
over standard USB-C cables up to 3 meters in length. USB 4 again doubled the speed,
 but
with a maximum cable length of 0.8 meters.
The majority of USB ports that you see in the market today are still USB 2.0. If you
have a newer USB device, it will work while plugged into a USB 2.0 port, but it will just
run at the slower speed. SuperSpeed USB-  A ports and connectors are all supposed to be
colored blue or teal to differentiate them easily from older versions.
 USB-C connectors
won’
t be colorcoded.
There is some confusion in the marketplace over USB versions and
adapters. For example, what is the difference, if anything, between USB
Type- C (o
r USB-C) c
ables and USB 3.1? They are very different things. If
you see USB- A, U
SB- B, o
r USB-C, t
his refers to the connection type on
the USB cable. The current gold standard is USB-C. T
he versions, which
define speed, are given numbers, such as USB 3.1, USB 3.2, and USB 4.
Regardless of the standard, low- power devices can get their power from the USB port
itself. Devices with higher power requirements (such as the external hard drive shown in
Figure 2.20) can still use their own power sources.
 Up to 127 devices can be connected to
one USB bus at once. As far as the types of devices that can be connected to USB, it’s almost
limitless. If you can think of a computer peripheral, odds are it comes in a USB version.
The Standards Graveyard
If you think there are a lot of computer technology standards to know, you’re right. The list
of outdated standards, though, dwarfs what we currently have in- market.
Two of them that
related to external peripherals were eSATA and FireWire.
External Serial ATA (eSATA) used the same technology as internal SATA, with a smaller connector. It entered the market in 2003 and was intended mostly for hard drive use. It topped
out at about 6 Gbps, and most versions did not provide power to the device. Now, the
speed and lack of power are antiquated, and the standard has fallen by the wayside in favor
of USB-C and Thunderbolt.
FireWire was developed by Apple and released in 2000. Its maximum throughput was
3.2 Gbps, which was fast at the time, but again, antiquated today. In 2011, Apple started
installing Thunderbolt connectors on its laptops instead, and FireWire disappeared
as well.

Thunderbolt
I already talked about Thunderbolt a bit in the context of video connectors because the technology was developed as an offshoot of DisplayPort technology. As a quick review, remember
that Apple partnered with Intel and launched Thunderbolt in 2011. Consequently, you will
find Thunderbolt ports as standard features on Apple laptops, but they are hitor- miss on
other brands.
 Figure 2.9 has a picture of the port, which has a lightning bolt next to it. In
terms of versatility, Thunderbolt is second only to USB in the types of devices made for it. You
will find video devices, hard drives, printers, laptop docking stations, audio devices, and PCIe
expansion enclosures that use Thunderbolt. Table 2.3 compares Thunderbolt standards.
You’ve seen the trend with other technologies where the newer version doubles the speed of
the previous one, and Thunderbolt for the most part is no different. Version 4.0 didn’t double the
throughput of 3.0, but it does add support for dual 4k video displays. The first two versions used
the nowoutdated mini DisplayPort (shown in Figure 2.22), but current versions use USB-C.
Lightning
Where there is a thunderbolt there must be lightning, right? Bad joke attempts aside, Lightning is an Apple proprietary connector introduced in 2012 with the iPhone 5 and is used
TABLE 2.3  Thunderbolt standards
Version Y ear Speed Connector
1.0 2 011 10 Gbps Mini DisplayPort
2.0 2013 20 Gbps Mini DisplayPort
3.0 2015 40 Gbps USB-C
4.0 2020 40 Gbps USB-C
FIGURE 2.22  mini DisplayPor t on a MacBook Pro
Source: Jena Selle / Wikimedia Commons / CC BY -SA 2.0

with iPhones and iPads. It’s an 8- pin connector,  shown in Figure 2.23, that is not keyed,
meaning that you can put it in with either edge up.
Lightning cables support USB 2.0. You will find cables that are USB- A to Lightning,
USB-C to Lightning, as well as various Lightning adapters,
 such as those to HDMI, DisplayPort, audio, power, and Lightning to female USB Type- A (so you can plug a USB device into
an iPad or iPhone).
For years (since about 2017), there have been rumors that
Apple may do away with the
Lightning connector in a future iPhone release and instead move to USB-C.
After all, Apple
had added USB-C ports to laptops and iPads, and USB-C is the port of the future.
This
rumor finally came true with the iPhone 15 released in 2023, when Lightning was replaced
with USB-C. It would make sense that future iPhones will have USB-C as well.
Communications Connectors
The last three connectors I will talk about in this section are for communications. Two will
get you onto a wired network, and the other is designed to use telephone lines.
Network Connectors
To be fair, there are more than a dozen different types of network connectors in existence.
The connector used depends on the type of network cable you’re using. For example, oldschool coaxial cable (similar to cable TV cabling) uses different connectors than does twisted
pair
, and there are probably a dozen different fiberoptic cables alone.
The good news for
the CompTIA Tech+ test is that there’s only two you have to know about. One is used with
copper cables, and the other with fiberoptic ones.
You will learn more about different cable types in Chapter 8, “Networking
Concepts and Technologies.”
FIGURE 2.23  Lightning cable

RJ45
The most common connector on the end of a copper network cable in use today is the
registered jack 45 (RJ45) connector, also known as an Ethernet connector. You’ll find
RJ45 connectors on the ends of twistedpair network cables, which you will hear people

call Ethernet cables or sometimes Cat 5 or Cat 6 cables (Cat is short for category). It looks
like a telephone plug, except that it’s wider. A twistedpair cable has four pairs of wires,
so there are eight leads on the connector
. You plug it in just as you would a telephone
cord. The maximum speed depends on a lot of factors, such as the communication standard you are using and distance, but the maximum you’ll get from twisted pair is 40 Gbps.
Figure 2.24 shows two RJ connectors: registered jack 11 (RJ11) on the left and RJ45
on the right.
RJ45 and SFP are subobjectives of Tech+ exam objective 2.5. Be able to
compare and contrast them.
SFP
Of the myriad fiberoptic cable connectors, the one you need to know is the small formfactor plugg
able (SFP) connector. Fiberoptic network cables provide significantly higher
throughput rates over longer distances than copper cables do.
They are also immune to
eavesdropping (someone physically hacking in and listening to network traffic between two
computers), which can improve network security. The SFP connector (Figure 2.25) is an
easyto- use, hotpluggable (you can plug in or unplug a device while the power is on) connector
. The connector slides into place much like an RJ45 and clicks when it’s locked in. To
unplug it, you press on the latch and pull straight out.
FIGURE 2.24  RJ11 and RJ45 connectors

There are many different SFP standards, with the fastest supporting speeds at 400 Gbps
over 40 kilometers, compared to 40 Gbps up to 50 meters for the most advanced copper
cabling.
You will learn a lot more about networking specifics in Chapter 8. For now, though,
remember there is RJ45 for twistedpair copper cables and SFP for fiberoptic cables. Fiber
connections will be faster
, but also more expensive to implement.
Wireless Networking Options
The networking connectors I just talked about are for wired networking; it’s likely, though,
that you’ve used wireless networking far more often than wired. In view of the ubiquitous
nature of smartphones and laptops, it’s only natural that wireless is everywhere.
For our purposes, there are three types of wireless connection types about which you
should be aware:
 ■ Wi-Fi (802.11)
 ■ Bluetooth
 ■ Radio frequency (RF)
Wi-Fi is the global de facto wireless networking standard. To connect to a Wi-Fi network,
you need a wireless network card and some sort of central connectivity device, such as
a wireless router or access point. Devices that are Bluetoothenabled can communicate
directly from peer to peer. No special network card or central hub is needed.
Devices that use
radio frequency (RF) transmit a very limited range, typically only a few
inches or so. This technology is fairly common in mobile payment applications. Because of
the short distances involved, a related term you’ll see is nearfield communication (NFC).
Again, no extra hardware is needed, just NFC-enabled sending and receiving devices.
FIGURE 2.25  SFP connector

This section covers connectors and interfaces, but there really isn’t a picture I can show you
of built-in Bluetooth or RF. If your smartphone (or other device) has them, you just enable
them with software settings. Networking is an important topic, and wireless networking is
given ample coverage in Chapter 8.
Networking Devices and T ools
Most users are perfectly happy to buy premade network cables from a store. There are times,
though, when offthe- shelf solutions don’t work.
 Perhaps you need a longer cable than you
can find, or perhaps your boss realizes that making cables in- house is cheaper than purchasing them premade.
Bulk cable and connectors are sold separately and can be connected together with a tool
called a crimper.
 A crimper is basically a fancy pair of pliers with a wire cutter/stripper, specifically designed to fasten a connector to a cable. An RJ45 crimper and a few connectors are
shown in Figure 2.26.
While it’s relatively easy to make an RJ45 cable once you get the hang of it, making fiberoptic cables is far more difficult and requires greater precision. It’s doable but most likely
relegated to a specialist.
Once the cable is made, how do you know if it works? Or, if you have an existing cable
that appears to have failed, how do you check it? In situations like these, you need a cable
tester. This is an indispensable tool for any network technician. Usually, you would use a
cable tester before you install a cable to make sure it works. Of course, you can test them
after they’ve been run as well. A decent cable tester will tell you the type of cable, and more
elaborate models will have connectors for multiple types of cables. Figure 2.27 shows a
TRENDnet cable tester.
FIGURE 2.26  RJ45 crimper

Crimpers and cable testers are called out as networking devices and tools
to understand in Tech+ exam objective 2.5.
Telephone Connectors
Back before high- speed Internet was the norm, computers used a device called a modem to
get online. Modems used the analog telephone lines to communicate back and forth. Users
would call in to an Internet service provider (ISP), log in to the ISP’s network, and then have
Internet access. While nearly obsolete today, modems are still listed in the networking objectives of the Tech+ exam, so I will cover telephone line connectors here too. The telephone
connector that you will see in use is called RJ11. Telephone cables often have two pairs of
wires, but only one is used. Figure 2.24 shows an RJ11. In Figure 2.28, you can see an RJ11
port next to an RJ45 port on a laptop.
FIGURE 2.28  RJ11 and RJ45 ports
FIGURE 2.27  A TRENDnet cable tester
Source: With permission of TRENDnet, Inc.

The biggest reason modems are no longer used is lack of speed. The fastest modems ever
produced had a transfer rate of 56 Kbps, but in practice the most you ever really got out
of the connection was around 40 Kbps. That’s barely fast enough to download text files
without pulling out your hair, never mind music or videos! The only reason they would be
used today is if there is no other possible option (wired, satellite, cellular, anything) to connect to the Internet.
Both RJ45 and RJ11 connectors have been in existence for nearly 70
years, but they were mandated as standards in 1976.
Understanding Input, Output, and
Power Devices
Even though artificial intelligence has made rapid strides in recent years, computers are still
unable truly to “think” for themselves. This is probably a good thing, but my goal isn’t to
kick off a debate on cyberethics here.
The point is that computers don’t do anything until
they are given input telling them what to do. The input can be as simple as a single keystroke
or click or as complicated as millions of lines of computer code. Either way, input is critical.
The earliest computers used punch cards as input; for example, ENIAC (which is recognized as the first electronic generalpurpose computer) used punch cards for input and
output in 1946. Keyboards were already widely available in the form of typewriters and
were introduced as computer input devices by 1948.
 Pointing devices actually preceded
them, with the trackball being invented in 1946. (Mice didn’t really become popular until
much later, in 1984.) Today, a keyboard and a mouse is still the most common duo of input
devices, so I’ll discuss both of them in the upcoming sections.
After that, we will look at an input device of sorts of an entirely different variety. You know
that computers need power to work, but what if the power is lost? An uninterruptible power
supply can help resolve lossof- power issues as well as help protect from damaging power surges.
Providing output is also a critical function of computers. Having a
“black box” where
input goes in but nothing comes out isn’t very useful— although we probably all know some
devices or even people like this! There are several kinds of output,
 with the most common
being video and printing. Since we’ve already talked about video devices, the output section
here will focus on printers. But first, let’s talk about input devices.
Keyboards
The keyboard owes its history to that of the typewriter. The typewriter was first patented
in 1868, and as of 1877 they were in mass production. In the 1930s, the keyboard was
combined with the telegraph and also with punch card systems to create keypunches. For
entering data, the typewriter keyboard was the technology of choice. So, it shouldn’t come as
a surprise that computer makers adopted the technology as well.

The most common keyboard configuration for Latin script languages is called QWERTY,
named for the first six letters on the top row, from left to right. Keys were laid out as they
were to minimize jamming of the metal arms within mechanical typewriters; the most commonly used letters were spaced farther apart to avoid issues. The Remington company,
which was the leader in typewriter production in the 1870s, popularized the design, and the
rest, as they say, is history.
Today, of course, we still use keyboards that have this configuration even though we
don’t need to worry about mechanical arms running into each other in the inner
workings of our typewriters. Even when keyboards are built into devices such as the
BlackBerry or reproduced on our smartphone screens, the default layout has not changed.
After video displays, keyboards are pretty much the most essential thing that we plug
into our computer.
Connecting Keyboards
The most common way to connect keyboards today is through your USB port. But wait,
what about wireless keyboards, you ask? They’re also usually connected via USB, just with a
wireless USB receiver, as shown in Figure 2.29.
Prior to USB, the standard for several years was the PS/2 port (also known as a
mini- DIN 6 connector), which was a keyboard and mouse interface port first found on

the IBM PS/2 (hence the name). It is smaller than previous interfaces (the DIN 5 keyboard port and serial mouse connector), and thus its popularity increased quickly. It’s
shown in Figure 2.30. You’ll notice that in addition to having an icon next to each port,
the keyboard port is usually purple, and the mouse port is usually green. You will rarely
see these connectors in the wild today. If you run into a keyboard that has a PS/2 connector (and it’s not in a museum), you can buy a PS/2 to USB adapter. Or you could buy
a new keyboard.
FIGURE 2.29  Wireless USB receiver

Keyboard Configuration Options
There are two directions I am going to take this. First, let’s talk about the physical configuration of your keyboard. Keyboards haven’t changed a great deal over the last 140 or so years,
but newer advances in ergonomics have led to some more comfortable (and interestinglooking)
typing options.
 If your wrists or arms get sore or numb from typing too much, you might have
bad form, and typing on a standard keyboard (or especially a small laptop keyboard) can be part
of the problem. One design that’s been out for several years is called the natural keyboard. It’s
shown in Figure 2.31, and it is designed to promote more natural hand and arm positions. And
as a bonus, the keyboard in Figure 2.31 is vintage and has a PS/2 connector and a USB adapter!
FIGURE 2.30  Keyboard and mouse PS/2 por ts
FIGURE 2.31  A natural keyboard

Other types of ergonomic keyboards are on the market, too, ranging from the interesting
looking to downright bizarre. If a natural keyboard does not help ease the pain in your
wrists, a different kind might do the trick.
Second, you have some configuration options within your operating system. One of the
more interesting ones is that you can change your keyboard layout. If you have programs
in which you type using a different alphabet than Latinbased, you can change it to a different character type.
 In addition, there’s another Latinbased layout called Dvorak, which
is an alternative to QWER
TY. It’s designed to place more commonly used letters in better
spots, increasing your typing speed. After all, we don’t need to worry about mechanical
keys sticking together on our typewriters any longer! Personally, I think it would take a
lot of frustrating time to get used to it, but a former boss of mine used it and swore by
its efficiency. It could also be fun to change it on an unsuspecting co- worker,
 not that I
would recommend that. Exercise 2.3 shows you how to change your keyboard layout in
Windows 10.
EXERCISE 2.3
Changing Your Keyboard Layout in Windows 11
1. Open the Language & Region settings app by typing language into the Windows
search box. Click Language Settings. You will get a screen similar to the one shown in
Figure 2.32.
FIGURE 2.32  Language & Region S ettings

2. This computer has English installed. Click the more options button (it’s the three dots in a
horizontal line) to the right of English (United States) and then click Language Options. If
you scroll down, you will see the Keyboards section, like the one in Figure 2.33.
3. Click Add A Keyboard, and from the list choose United StatesDvorak. That will add
Dvorak to your list of keyboards at the bottom of Figure 2.33. Close the window to save
your changes.
4. In the system tray (just to the left of the clock in your taskbar, by default in the lowerright corner of your screen) you should now see an option that says ENG US. Click it.
5. In the window that appears, choose the option that says United StatesDvorak. Now
your k
eyboard is set to use the Dvorak layout. Good luck!
6. To change it back, click ENG DV in the system tray and then choose ENG US. You can
also change input options by pressing the Windows key and the spacebar.
Pointing Devices
Pointing devices are so named because they allow you to move your cursor around the screen
and point at what you want; they’re a convenient handheld tool that lets you easily navigate
on- screen. Pointing devices have been in use since the beginning of humankind,
 if you include
the index finger. They’ve pretty much been available for computers as long as computers have
FIGURE 2.33  Language & Region options

existed. For example, the trackball was developed in 1946 to replace the joystick as an input
device for an early electronic radarplotting system.
The mouse came along in the 1960s, but it
didn’t gain much popularity until Apple came out with the Macintosh 128K in 1984.
You might think that a mouse or another pointing device is basically required for today’s
PCs, but it’s not. When I teach classes for computer technicians, one of the activities I like to
have them do is disconnect their mouse and then navigate through Windows with just their
keyboard. It can be difficult to get used to, but it’s a helpful skill if you find yourself stuck
with a broken mouse at some point.
Mice are the most popular pointing device you’ll see today, although touchpads are a
close second. I’ll cover them both next.
Mouse
The mouse is the most common pointing device in use today. It’s named so because the
original mice that were created had the connector cord (a tail) leading from the rear of their
body, pointing toward the user. Later designs put the cord at the head of the unit, but by
then the name had stuck.
Per exam objective 2.4, you should be able to install and configure keyboards and mice.
For most of its existence, the mouse had a ball inside it that touched two rollers: one
positioned to detect vertical movement and one positioned to detect horizontal movement.
By moving the mouse around on a solid surface, the ball would roll, causing movement in
the rollers, which would get translated into electrical signals and move the cursor on your
screen. Slippery surfaces would cause the ball to skid, making the mouse less useful, so people started using mouse pads to compensate.
The progression of technology allowed mice to lose their tails and their balls (replaced
by a light that senses movement), and so most mice today are wireless or optical or both.
Figure 2.34 shows a typical wireless optical mouse.
FIGURE 2.34  Wireless optical mouse

Mice come in a variety of shapes, sizes, and styles. Some are very small, designed to be
more portable and used with laptops and tablets. As with keyboards, ergonomic designs
exist as well. Most mice will have two or more buttons for leftand rightclicking, as well as
a wheel to scroll up and down.
 You’ll find some variance, such as mice for Macs, which have
historically had only one button.
T ouchpad
Instead of using an external device such as a mouse, you can do as our ancient ancestors did and point at something using your finger. Granted, they didn’t have a touchpad
to use because touchpads didn’t rise to prominence until the laptop computer became
commonplace. Functionally, a touchpad works just like a mouse in that you can move your
finger around to control the cursor, and you’ll often have two buttons, one for leftclicking
and one for rightclicking. Many touchpads also let you tap the pad itself to indicate a click.

Figure 2.35 shows a typical touchpad.
You’ll notice that the touchpad is conveniently placed right below the laptop keyboard,
which happens to be where your palms rest when you type. Sometimes this will cause problems because you can inadvertently cause your mouse cursor to do random things such as
jump across the screen. Most touchpads today have settings to allow you to control the
sensitivity, and they will also differentiate between a palm touching them and a finger. In
addition, if you have a sensitive touchpad that is giving you trouble, you can disable it altogether. Let’s do that in Exercise 2.4.
EXERCISE 2.4
Disabling a Touchpad in Windows 11
1. Open the Touchpad Settings app by typing touchpad into the Windows search box and
pressing Enter. You will get a screen like the one shown in Figure 2.36.
FIGURE 2.35  touchpad

2. To disable the touchpad, simply slide the Touchpad toggle from on to off. With the
down arrow to the right of the toggle, you can automatically disable the touchpad
when a mouse is connected, and below there is a slider to change the cursor speed.
3. (Optional) Scroll down through the Touchpad settings to see what else you can configure.
Options include tapping, scroll and zoom, and gesture settings. For example, you can make
it so a down motion scrolls up, or a down motion scrolls down, whichever you prefer.
4. Close the Touchpad Settings window.
Although touchpads are primarily used with laptop computers, you can also buy external
touchpads that connect to a computer just as a mouse would.
Connecting Pointing Devices
This section can almost be summed up with one acronym: USB. By far and away, USB is the
most common connector you will see used with pointing devices.
FIGURE 2.36  touchpad settings
EXERCISE 2.4  (continued)

Before USB was invented, mice would be connected via PS/2 ports, just like keyboards. For
a refresher on what that looks like, refer to Figure 2.30. The mouse port is the green one at the
top. Prior to PS/2, mice and other pointing devices were connected via RS- 232 serial ports.
Pointing Device Configuration Options
For as simple as pointing devices such as mice are, there are a few configuration options you can
set on them. For example, you can change the button configuration so that the mouse becomes
more natural for lefthanded people.
You can also change how fast the cursor moves across the
screen, what it looks like, and how quickly you need to click for the system to register it as a double click. In Windows, all of these settings are configured through Mouse Properties in the Mouse
app within Control Panel. Exercise 2.5 walks you through a few of the conveniencerelated
options.
 Note that some of these are purely aesthetic, but others are useful to some people with
disabilities or who would otherwise have difficulty using the pointing device.
EXERCISE 2.5
Configuring a Mouse in Windows 11
1. Open the Mouse Settings app by typing mouse into the Windows search box and
pressing Enter. A window similar to the one shown in Figure 2.37 will appear.
FIGURE 2.37  Mouse settings

2. Notice that in the Mouse settings there are basic options such as switching the primary
button, setting the cursor speed, and choosing how much to scroll when the mouse
wheel is used.
3. Under Related Settings, click Additional Mouse Settings to open Mouse Properties,
as shown in Figure 2.38. This is where more options such as accessibility can be
configured.
4. Under Button Configuration, select the Switch Primary And Secondary Buttons
check box.
5. Click the Pointer Options tab (you will need to use the other button now), shown in
Figure 2.39.
FIGURE 2.38  Mouse Proper ties window
EXERCISE 2.5  (continued)

6. In the Motion section, drag the pointer speed all the way to the Slow end. Notice how
slowly the mouse moves. Slide the bar all the way to Fast to see the difference.
7. Click OK to save the changes if you like or click Cancel.
Windows 11 will often provide multiple ways to get to similar settings,
and occasionally it can be confusing. You might have noticed this with
Exercise 2.5. In the paragraph preceding it, I mentioned Mouse Properties
in Control Panel. You can get to this in two ways:
 ■ Opening Control Panel, selecting View By: Category in the upper right
corner, then clicking Hardware and Sound, and then clicking Mouse under
Devices and Printers.
 ■ Opening Control Panel, selecting View By: Large icons (or Small icons) in
the upper right corner, then clicking Mouse.
FIGURE 2.39  Pointer Options tab

In the exercise, I instead had you type mouse into the Windows search box
and press Enter. This opened the Mouse settings app shown in Figure 2.37,
which is not part of Control Panel. (Microsoft seems to be slowly moving
away from using Control Panel to configure all settings and is instead promoting Settings apps such as this.) Then in step 3 you clicked Additional
Mouse Settings which opened the Mouse Properties window—  the same one
you can open through Control Panel. It’
s not so important how you get there
when multiple paths exist, as long as you can find the setting you need.
Sometimes it’s just a matter of playing around with it until you find the path
you prefer.
Uninterruptible Power Supplies
Nearly every computer has a single power supply. Normally this is fine, but if the computer is vital enough that a power failure will cause catastrophic harm, a redundant option
should be considered. An uninterruptible power supply (UPS) is a battery backup system
that a computer can plug into. The UPS plugs into the wall, which keeps its batteries
charged. In the event of a power outage or a brownout (sometimes called an undervoltage event) where power isn’t completely lost but there is a drop in voltage, the UPS can
supply the attached computer with power for a limited amount of time and provide for a
graceful shutdown. Figure 2.40 shows a small UPS and Figure 2.41 shows the back of the
device, where the computer plugs into. Other UPSs can be as large as a generator or several feet tall.
FIGURE 2.40  An uninterruptible power supply
Source: With permission of Schneider Electric

Inside the UPS are one or more batteries and fuses. Much like a surge suppressor, a UPS
is designed to protect everything that’s plugged into it from power surges. UPSs are also
designed to protect against power sags and even power outages. Energy is stored in the batteries, and if the power fails, the batteries can power the computer for a period of time so
that someone can then safely power it down.
Per Tech+ exam objective 2.4, you should understand the basics of
installing and configuring a UPS.
Many UPSs and operating systems will also work together to (and safely) power down automatically a system that gets switched to UPS power. Notice on Figure 2.41 that the back of this
UPS has an RJ45 data port. A network cable attached to that port, along with the right software
such as APC’s PowerChute, allow for configuration. Configuration options will include how
long to leave the computer running before it shuts down and if it will send any connected users
a warning message (if it’s a server, for example). These types of devices may be overkill for Uncle
Bob’s machine at home, but they’re critically important fixtures in server rooms.
The UPS should be checked periodically to make sure that its battery is operational. Most
UPSs have a test button that you can press to simulate a power outage. You will find that
FIGURE 2.41  The back of an uninter ruptible power supply

batteries wear out over time, and you should replace the battery in the UPS every couple of
years to keep the UPS dependable.
UPSs all have a limit as to how many devices they can handle at once.
These power limitations should be strictly observed. Overloading the
UPS can cause a short, which could potentially result in fire.
Printers
Printers are electromechanical output devices that are used to put information from the computer onto paper. They have been around since the introduction of the computer and are still
popular today. Even though our society keeps inching closer toward electronic documents,
there are times when a paper copy makes more sense or is required.
In this section, I will discuss the details of the two most common printer technologies:
inkjet printers and laser printers. I will also talk about additional functionality that many
printers now have built in, such as scanning and faxing. Once I cover printer technologies,
I’ll talk about how to connect a printer to a computer.
Printer T echnologies
At the end of the day, all the printer needs to do is make an image appear on paper. Most
of the time this is done with ink, but there are other ways, too. You can use several different technologies to get an image on paper; the list of printer types includes impact, solid
ink, dyesublimation, inkjet,
 thermal, laser, and plotters. The two you will see the most often
today are inkjet and laser printers.
Inkjet Printers
For home use, inkjet printers are the most popular choice, although you will see them used
in businesses as well. You might also hear these types of printers referred to as bubblejet

printers, but the term Bubble Jet is copyrighted by Canon. These printers spray ink on the
page to form the image. Older inkjet printers used a reservoir of ink, a pump, and a nozzle
to accomplish this. They were messy, noisy, and inefficient. Bubble Jet printers and newer
inkjet printers work much more efficiently and are much cheaper. For all practical pur -
poses, consider them one and the same because their components and printing processes
are nearly identical.
Inkjet printers are simple devices. They contain very few parts and thus are inexpensive to manufacture. It’s common today to have a $40 to $50 inkjet printer with print
quality that rivals that of basic laser printers. These types of printers can use normal
copy paper, and most of them can print fairly high-  quality photos on glossy photo paper
as well.
The primary consumable for inkjet printers is the
ink cartridge. This is a small plastic
container that holds the liquid ink the printer uses to create images. Printers that print
only in black and white need only a black cartridge, whereas color printers need black

in addition to cyan, magenta, and yellow. Color printers can have one of three cartridge
configurations:
 ■ All ink in one cartridge. These are often referred to as CMYK (cyan, magenta, yellow,
black) cartridges.
 ■ One black cartridge and a separate CMY color cartridge.
 ■ Four cartridges total, one for each color.
From a printquality standpoint, it doesn’
t matter that much which configuration you
get. From a money standpoint, though, it can matter quite a bit. Most people use a lot more
black ink than color ink. If you have a CMYK cartridge and run out of black, you’ll need to
replace the entire cartridge even if there are other colors remaining. In Figure 2.42, you can
see a printer that has two cartridges: one color and one black.
Ink cartridges are held in place by plastic clips. They are folded back above the cartridges
in Figure 2.42. To replace a cartridge, you release the clip, slide out the old cartridge, slide
in the new one, and lock it into place. Make sure that the ink cartridges are the right size for
your printer—  in Figure 2.42, you can see that these are HP 61 (the XL on these cartridges
indicate that they have more ink than a standard HP 61 cartridge).
Laser Printers
A laser printer works much like a photocopier. The main difference is that a photocopier
scans a document to produce an image, whereas the laser printer receives digitized data
FIGURE 2.42  Inkjet printer cartridges

from a computer. Laser printers are generally bigger, faster, and more expensive than inkjet
printers. Thus, you’re more likely to find them in office settings than in homes. Laser printers
also do not use ink. They use a dry powdery plastic resin called toner, which is stored in a
replaceable toner cartridge. Toner cartridges are more expensive than ink cartridges, but
they produce many more pages and are generally more costeffective on a perpage basis.
Figure 2.43 shows a small laser printer’
s toner carriage with four cartridges—  black, cyan,

magenta, and yellow from front to back.
FIGURE 2.43  Laser printer toner cartridges in a printer

A laser printer contains a large cylinder known as a drum, which carries a high negative
electrical charge. During the print process, the printer directs a laser beam to partially neutralize the charge in certain areas of the drum. When the drum rotates past a toner reservoir,
the toner clings to the areas of lesser charge, and the page image is formed on the drum. The
drum then rotates past positively charged paper, and the toner jumps off onto the paper. The
paper then passes through a fuser that melts the plastic particles of the toner so that they
stick to the paper.
Laser printers are available in color or monochrome models. To print in color, a
laser printer must make four passes across the same page, laying down a different color
each time. Such a printer has four separate toner cartridges: cyan, magenta, yellow,
and black.
Although you’re unlikely to do so, if you spill any toner, let it settle before
you clean it up. Toner is a fine powder and is carcinogenic. A carcinogen
is a product that, with long-term continued exposure, may cause cancer. Also, don’t use a normal vacuum cleaner to try to pick up toner. The
powder is so fine that it will pass through the vacuum’s filters and out the
vent. Use a special computer vacuum that is designed with finer filters to
catch the toner.
Other T echnologies Often Bundled with Printers
A lot of the printers you see on the market today combine printing with additional features, such as scanning, copying, and faxing. Such printers are called multifunctional
printers or allin- one
printers. Adding features changes the printer from being solely
an output device to being an input device as well. Printers with a builtin scanner usually incorporate them as a flatbed scanner on top of the printer; they generally don’t

cost much more than a single-  function printer and can be handy to have around. In

Figure 2.44, you can see a laser printer with its top slightly opened. To scan or copy a document, you would either place it into the paper feed mechanism on top (which is handy for
multipage documents) or lay it on the glass and close the lid. Scanning or copying is initiated from the touchscreen or from software on a connected computer, such as the HP Scan
utility shown in Figure 2.45. The difference between scanning and copying is simple—
scanning sends it to a computer either directly or via email, whereas copying produces a

physical replica on the printer.
Nowadays, you will rarely see standalone scanners, which are input devices,
 or fax
machines, which can be input and output devices.
Per Tech+ exam objective 2.4, given a scenario, you should know how to
install and configure printers and scanners.

FIGURE 2.44  Laser printer with lid ajar to reveal scanning glass
FIGURE 2.45  HP Scan utility

Connecting Printers
For your printer to work properly, you must have a connection to it. The printer can be
connected directly to your computer, or you can connect to one via a network. In this section, we’ll look at various types of connectors that have been popular for printers over
the years.
Serial Connections
When computers send data serially, they send it 1 bit at a time, one after another. The bits
stand in line like people waiting to get into a movie theater. In Chapter 1, I talked about how
oldtime serial connections were painfully slow but that new serial technology makes it a
more viable option than parallel. In this particular instance,
 the serial I’m talking about is
the oldschool variety.
Specifically
, olderstyle serial connectors were based on a standard called RS- 232 and
were called serial ports
. They came in 9- pin (DE9) and 25- pin (DB25) varieties; Figure 2.46
shows the male DE9. It’
s aqua colored and conveniently labeled “Serial.”
Serial connections like this really aren’t used for printers anymore. Modems used serial
connectors, too, but they have also gone the way of the dinosaur. About the only time that
you will see serial connections used today are for server, router, and switch consoles that can
be used for management and diagnostics.
Parallel Connections
When a printer uses parallel communication, it is receiving data 8 bits at a time over eight
separate wires (one for each bit). Parallel communication was the most popular way of
communicating from computer to printer for many years, mainly because it was faster than
serial. In fact, the parallel port became so synonymous with printing that a lot of companies
simply started referring to parallel ports as printer ports. In Figure 2.46, the pink 25-  pin
parallel port has a printer icon above it.
FIGURE 2.46  Backpanel connectors, including serial and parallel por ts

A parallel cable consists of a male DB25 connector that connects to the computer and
a male 36- pin Centronics connector that connects to the printer.
 Parallel cables work best
when they are less than 10′ long, and they should be IEEE 1284 compliant. Figure 2.47
shows a typical printer cable, with the parallel connector on the left and the Centronics connector on the right.
USB
Earlier in the chapter, you learned that USB stands for Universal Serial Bus, but the U could
as easily stand for “ubiquitous.” USB is everywhere and seemingly connects everything.
Printers are no exception. USB is the most common physical connector type that you will see
used with printers today.
Networked Printers
Rather than connect the printer to your computer, you can connect it to the network. This
setup is popular in businesses and is becoming more popular in home networks as well.
When connecting a printer to the network, you have two choices. The first is to connect it
via a network cable, which typically uses an RJ45 connector. The second is to connect it via
wireless networking. You’ll examine wireless networking in detail in Chapter 8.
In addition to connecting the printer, you need to install a special piece
of software called a printer driver so the operating system knows how
to talk to the printer. I will talk about drivers and how to install them in
Chapter 5, “Software Applications.”
FIGURE 2.47  Parallel cable

Configuring Printers
Once the printer is installed you may want to configure various settings, such as if users
can print in color or if the printer is shared on the network for others to use. Many printers
today come with their own configuration software, downloaded with the driver, and it
would be impractical to cover them all here. Instead, let’s take a look at some common configuration options available through Windows.
Printers are managed through the Printers & Scanners settings app. To open it, type
printers in the Windows search box and press Enter. It will look similar to Figure 2.48. Click
the printer you want to configure, and it will take you to the printer management window
like the one in Figure 2.49.
Let’s take a look at the options in Figure 2.49 from the top down:
 ■ The print queue is where print jobs are sent and held until they are printed. Open print
queue lets you look at the jobs waiting in line. If a job has stalled, it might hold up other
jobs. In here you can cancel or delete waiting print jobs.
FIGURE 2.48  Printer s & Scanners

 ■ Open printer app does what you might think it does. There are configuration options
within the app, but here we’re focusing on standard Windows capabilities.
 ■ Print test page is a useful troubleshooting tool. After installing a printer, print a test page
to ensure it works. Also, if you send a job to the printer and it doesn’t work, try printing
a test page.
 ■ Run the troubleshooter runs basic connectivity troubleshooting.
 ■ Printer properties is one of the three key utilities, along with Open Print Queue and
Printing Preferences. It’s shown in Figure 2.50, and all tabs will look the same regardless
of the printer you have installed. The Sharing tab is where you can share the printer for
others to use on the network. On the Advanced tab, you can make the printer available
only during certain times of the day, among other things, and the Security tab lets you
configure who can use the printer.
 ■ Printing preferences is the last of the three key utilities, shown in Figure 2.51. Available
options will be somewhat customized based on the printer’s capabilities. Here you can
manage the printer quality, effects, finishing, and color options.
 ■ Hardware properties lets you look at basic stuff like the printer name and when it was
installed.
FIGURE 2.49  Managing a printer

FIGURE 2.50  Printer proper ties
FIGURE 2.51  Printing preferences

Understanding Installation Basics
So far in this chapter, you’ve learned a lot about different types of devices and connectors.
Perhaps you still have a few questions on your mind, though, like “How do I get these
devices to work? Do I just plug them in and that’s it?” There isn’t a simple answer because a
lot depends on the type of device you’re connecting. Instead of trying to cover each possible
type of device, I’ll show you some principles to help you regardless of the situation or device
you’re trying to connect.
Per Tech+ exam objective 2.4, you should understand plug- n- pl ay versus
driver installation, other required steps, IP- ba
sed peripherals, and webba
sed configuration steps.
Internal Devices
By an internal device, I mean anything that goes inside the computer case. This can include
sound cards, network cards, video cards, and hard drives, or even memory or a processor. (I
know, the last two aren’t peripherals, but some of the same principles apply.) Here are some
good steps to follow:
1. Always make sure that the computer is powered off. Most technicians will leave it
plugged in to help electrically ground the components and prevent disastrous static discharge (which can fry your electronics).
2. Practice electrical safety by properly grounding yourself. Either use an antistatic wrist
strap (it secures to your wrist and connects to the case using an alligator clip) or
maintain contact with a metal part of the pluggedin (but turned off) computer while
handling sensitive components.
3. Remove the component you are replacing, if necessary.
4. Identify the slot or connection you will use for the new device.
5. Insert the new device. Make sure to connect power if it requires a direct connection to
the power supply.
6. Turn the computer back on. (Replacing the case is optional at this point. Some techs like
to leave it off just in case something doesn’t work right. But once it’s working properly,
always replace the case.)
One of two things should happen when you reboot the computer: Either the operating
system will automatically detect the device or you will need to install a driver. Let’s take a
scenario using Windows 11. You replace an old video card with a newer one and reboot
Windows. Windows might automatically detect the new video card and install the proper
driver. When an operating system does this, it’s referred to as plugand- pla
y. Literally, you
plug the device in and you can play. If not, you will need to install the driver manually. You
might have gotten it on a CD or flash drive, or you may need to download it from the Inter-
net. I’ll talk about drivers a lot more in Chapter 5.

Sometimes the OS will recognize the device but install the incorrect or an
older driver. In these cases, you will want to install the driver manually.
Processors, memory, and internal hard drives don’t require you to install
drivers. They will need to be properly detected by the system BIOS, however. If the BIOS doesn’t see them, there’s no way the operating system
can use them.
During or after driver installation, you might be asked to perform other required steps,
such as configuring the device. It all really depends on what you’re installing.
External Devices
Installing an external device (one that resides outside the case) is often much easier than
installing an internal device. Namely, you don’t have to turn the power off and open the
case! Most external devices will connect via USB, Thunderbolt, or one of the video connections you learned about earlier.
So, plug it in, and if it has its own external power source, make sure that’s plugged in,
too. Then let plugand- play do its thing. In fact,
 installing an external device is really the
type of scenario for which plugand- play was designed. Using
Windows as an example again,
when the device is plugged in, Windows should recognize it as an attempt to install a driver.
If Windows is successful, you will get a message from your system tray saying that the device
was installed successfully and is ready to use. Otherwise, you will get a message saying it was
detected but a driver could not be installed. Then it’s your turn to install it manually.
IP-  and WebBased Devices
As of this writing, printers are pretty much the only peripherals that you will install that may
require IP-  or webbased configuration steps. Let’
s take a quick look at each.
IP- Based Printers
In some cases, you might want to print to a printer that’s not attached directly to your computer,
but it is on the same network as you. In scenarios like this, you will need to install an IP printer.
It’s usually pretty straightforward. Exercise 2.6 shows you how to do this in Windows 11.
EXERCISE 2.6
Installing an IP Printer
1. Open the Printers & Scanners app by typing printers into the Windows search box and
pressing Enter.
2. In the Printers & Scanners app, click the Add Device button at the top of the screen.

3. Regardless of whether your computer finds a printer, click the Add Manually link next
to The Printer That I Want Isn’t Listed, as shown in Figure 2.52.
4. In the Add Printer window that pops up, click the Add A Printer Using An IP Address Or
Hostname radio button and click Next.
5. In the next window, like the one shown in Figure 2.53, choose TCP/IP Device as the
device type and enter the IP address of the printer you want to install. Click Next.
6. Windows will attempt to contact the printer and, once connected, install the appropriate driver.
FIGURE 2.52  Adding a new printer
FIGURE 2.53  Entering the IP address of the printer
EXERCISE 2.6  (continued)

WebBased Printers
Several printer manufacturers allow you to configure a printer to be available via the Inter-
net or by sending it an email. For example, many HP printers are compatible with HP ePrint,
giving you access to your printer from anywhere in the world. Imagine being on vacation
and being able to print your favorite photo on your home printer—  before you even get
home! Granted, you won’
t be there to see it, but it’s still pretty cool. If you have an HP
printer, here are the basic steps to get started:
1. Go to www.hpsmart.com and create a user account.
2. Enable web services on your printer, and link it to the HP Smart account.
3. Set up an email address for the printer, and configure proper security, such as who can
print to the printer.
In the example shown in Figure 2.54, you can see an HP Envy 5530 series printer,
already configured for HP ePrint. Options that you can configure include the email
address of the printer ( whatever@hpeprint.com ) and who is allowed to send jobs to
the printer. The security list is configured by email address, so it’s not foolproof from a
security standpoint.
To use the service, open your email, create a new email to the printer’s email address, and
then attach the document or file you want to print. Provided that the printer is powered on
and available, the job will print.
Reviewing Connector Types
We’ve covered a lot of different types of connectors in this chapter. Instead of having you
bounce around between pages to compare and contrast them to each other, Table 2.4
lists them all. In it, I’ve included the approximate release date, the maximum speed of the
newest standard in that family, and the types of devices that you will commonly see associated with the connector. For some of the maximum speeds, I listed n/a because no one
ever really talks about the speed of those connections. In cases like that, just assume that
they’re slow!
FIGURE 2.54  HP ePrint configuration

Summary
In this chapter, you learned about external peripheral devices and the connector types used
to hook them to your computer. There are dozens of different types of external peripherals in
the marketplace, but we covered some of the most common ones, such as audio and video,
external storage, networking, and input and output.
First, I covered audio and video devices. To hear sound, you need a sound card in your
system as well as a set of speakers or headphones. Video devices are critical to modern computers; I talked about different types of monitors and projectors as well as the different video
connectors that have been used in the past or are in use today.
Second, you learned about external storage and communications devices. There are many
different types of external storage devices that you’ll use, from tiny memory cards and small
TABLE 2.4  Summary of connectors
Type Released Max speed Primary uses
VGA 1987 n/a Video (analog)
DVI 1999 3.96 Gbps Video (digital and analog)
HDMI 2002 48 Gbps Video (digital)
DisplayPort 2008 25.9 Gbps Video (digital)
Thunderbolt 2 011 40 Gbps Video, hard drives, audio, docks, PCIe expansion
Lightning 2012 480 Mbps iPhones and iPads; earbuds/headsets, power, and
other accessories
USB- A 1
998 10 Gbps Keyboards, mice, printers, and many others
USB-C 2
014 40 Gbps Keyboards, mice, printers, and many others
PS/2 1987 n/a Keyboards and mice
Parallel 1970 20 Mbps Printers
Serial (RS- 232) 1
962 1 15 Kbps Modem, printers, mice, control console for server
and router management
RJ45 1976 40 Gbps Network cards
RJ11 1976 56 Kbps Modems
Exam Essentials 129
thumb drives to largecapacity networkattached storage to mobile devices such as media
players and smartphones. Communications devices such as network cards and modems help
computers connect with each other
.
Third, I covered input and output devices. Input devices include keyboards and pointing
devices like the mouse and touchpad. For output devices, I specifically covered printers,
which put ink on paper. Printers are one example of a device that can fall into multiple
camps as far as input and output goes. A basic printer is just for output, but a multifunctional printer that also has scanning or faxing capabilities can be considered an input
device as well.
Finally, we covered some principles for installing peripherals. Concepts included drivers
(which I’ll cover in more detail in Chapter 5), plugand- play,
 and the steps required for IP-
based peripherals and webbased configuration.
Exam Essentials
Be able to compare and contrast common throughput units. From slowest to fastest, know
bits per second (bps),
 kilobits per second (Kbps), megabits per second (Mbps), gigabits per
second (Gbps), and terabits per second (Tbps). Anything with a capital B would be bytes.
Understand the features of common video connectors. The video connectors you need to
know are V
GA, DVI, HDMI, DisplayPort, Thunderbolt, and USB.
Understand the way in which laser printers and inkjet printers create images. Laser printers
use a powdery toner,
 and inkjet printers use liquid ink in small cartridges.
Know which connection types are used for external storage. Connections that are used for
external storage devices are USB and Thunderbolt.
Understand what a UPS does. A uninterruptible power supply (UPS) is a battery backup
for a computer that can provide power in the event of a power failure, and most often protect against power surges as well.
Kno
w how best to connect keyboards and mice to computers. Keyboards and mice
today all use USB. In the past,
 the PS/2 connector was used. Before PS/2, mice could use
serial ports.
Know the two key wired networking connectors and telephone line connector. Twistedpair
copper cables use an RJ45 connector
, also called an Ethernet connector. Fiberoptic cables
can use a small formfactor pluggable (SFP) connector.
 If you have a modem, it will use telephone lines and an RJ11 connector.
Know which tools are used to create and test network cables. Network cables are created
using a crimper and tested using a cable tester.
Kno
w which connector types are used for peripheral devices. The most common connector
types are USB- A, USB-C,
Thunderbolt, and Lightning.

Understand the difference between mirroring and casting. In mirroring, the exact same
image is shown on both displays.
 In casting, one device sends the image to a second display,
where it is displayed, and the casting device can perform other tasks.
Know the common wireless networking technologies. Wi-Fi is the most common wireless
networking technology.
 Mobile devices can also use Bluetooth and radio frequency (RF) for
nearfield communication (NFC).
Giv
en a scenario, understand how to install and configure common peripherals. Steps will
vary based on the peripheral. However
, in general, you need to plug the device in, install the
driver (or let plugand- play install it), and configure the device.
Chapter 2 Lab
You can find the answers in Appendix A.
Your friend Elise comes to you looking for help. You know that she is talented at producing
videos and has recently started her own company to make videos for local restaurants and
entertainment venues to put on their websites.
Elise tells you that her business is growing quickly, and she’s very excited. She’s had so
much business that she needed to bring in another friend, James, to do some work for her,
and both of them have been very busy. Elise had purchased an external hard drive for additional storage, but now she is running out of room and needs a better solution, preferably
one that both she and James can use. Elise uses a MacBook Pro. James has some sort of Mac
as well, but it’s a few years old.
In order, Elise’s goals are to increase storage space, make it easily available for her and
James, and have some protection against losing all of the data she has compiled to date. She
also doesn’t want to spend a fortune, because she needs to keep costs down for her business
to keep growing.
1. What types of hardware does Elise need to accomplish her goals?
2. Are there any peripherals that would let her accomplish all of her goals with one device?
3. How much will that option cost if she wants to get 10 TB of storage space?
4. Are there other options Elise has that might save her money?
Feel free to use the Internet to research and come up with at least two options for Elise.
Review Questions 131
Review Questions
You can find the answers in Appendix B.
1. Which of the following ports was developed by Apple and is found on MacBooks?
A
. eS
ATA
B. USB
C. Thunderbolt
D. Mac Video
2
. If you want to plug in a keyboard, which types of connectors might you use? (Choose two.)
A
. Parallel
B. Serial
C. USB
D. PS/2
3. What is the name of the connector that you are likely to find at the end of a twistedpair network cable?
A
. RJ11
B. RJ45
C. HDMI
D. TPI
4. You want to use the video connector with the best resolution.
 Which one should you pick?
A. HDMI
B. HEMI
C. DVI
D. VGA
5
. Which of the following connectors provides support for dual 4k displays?
A. DVI
B
. USB
C. RJ45
D. Thunderbolt
6. Which type of printer uses a powdery substance to create images on paper?
A. Powder
B. Thermal
C. Inkjet
D. Laser

7. Rebecca points at a flat square below her keyboard on her laptop and asks what that is.
What is it?
A
. Trackpad
B
. Touchpad
C
. Touchstick
D. Webcam
8
. Which of the following are wireless networking technologies? (Choose two.)
A. NFC
B. DVI
C
. RJ45
D. Bluetooth
9. If you are installing a peripheral device and plugand- play works as expected, which of the
following is true?
A
. You will need to install the device driver to make the peripheral work.
B
. The peripheral should function normally.
C
. You will need to complete webbased configuration steps for the peripheral to work.
D. You will need to configure IP- based options for the peripheral to work.
10. You want to install a device in your office that allows for extra storage and has builtin fault
tolerance.
Which device do you need?
A. NAS
B. RAS
C. SAS
D. External hard drive
11. One of your friends asks you if you have any SuperSpeed devices.
What type of device is she
talking about?
A. SSD
B. OLED
C. USB
D. eS
ATA
12. You have a color inkjet printer
. What type of ink cartridge does it most likely use?
A. CMYB
B. CMYK
C. RGB
D. RO
YGBIV
Review Questions 133
13. In your office, you need to set up your computer for a video teleconference with another
office.
 What peripheral do you need to make this work?
A. Scanner
B. CRT
C
. Projector
D. Webcam
14. Which of the following devices can provide power to a computer in the event of a
power outage?
A. UPS
B. PSU
C. USB
D. RF
15. Which of the following connectors does not provide digital video output?
A. HDMI
B. DVI
C
. VGA
D. Thunderbolt
16. List the units of throughput from fastest to slowest.
A. Tbps, Gbps,
 Mbps, Kbps
B. Tbps, Mbps,
 Gbps, Kbps
C. Kbps, Mbps,
 Gbps, Tbps
D. Kbps, Gbps,
 Mbps, Tbps
1 7. You are asked to create a working twistedpair cable from a bulk roll and some extra connectors.
 Which device would you use?
A. Cable tester
B. Crimper
C. Splicer
D. Multimeter
18
. Which of the following statements is true about DVI connectors?
A
. They are digital only.
B
. They are analog only.
C
. They are digital and analog.
D. They support hybrid video technology.

19. You just installed a printer and want to share it on the network.
 Where do you perform this
task in Windows?
A. Printing preferences
B. Printer properties
C. Print queue
D. IP printing configuration
20. Robert complains that the cursor on his laptop screen often jumps around unexpectedly
when he’s typing.
 What can he do to solve the problem?
A. Reinstall the mouse driver.
B
. Reinstall the video driver.
C
. Reboot the computer.
D. Disable the touchpad.
E. Stop typing.

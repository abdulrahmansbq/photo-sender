# Operating system project

## Introduction:
This project finds a solution to the problem of managing images and delivering them to attendees in conferences and exhibitions that are held periodically. Many people can't find their photos after conferences and exhibitions, and there is no way to get the photos handed to the public. Also, this project is a way to manage the mechanism of photographers in personal photography, so this project has been done.

<hr>

## Problem Statement:
We all attend exhibitions and conferences, and there is always a photo booth with a camera and a photographer. The booth always bears the identity of the exhibition or conference. When attending such exhibitions, many ask the photographer in the booth to take a picture of them. But when taking a photo, handing it over to the public is always a hurdle, as it takes a long time, and this causes crowding. Usually, photographers tell the public that photos will be uploaded to social media, but in reality, not all photos are uploaded.
Some photographers resort to creating a page on Google Drive to upload the photos of the attendees. However, this solution is not the best solution here in Saudi Arabia, because some women refuse to publish photos in a public link where anyone can view their photos.

<hr>

## Description:
This project solves the problem of photographers by monitoring the folder in which images are uploaded. In the event that a new image is created in the folder, the program will automatically rename the image with a specific numeric name. At the same time, the program shows the numeric label on the terminal. Meanwhile, the attendees can, through a QR code, communicate with a programmed bot on Telegram and send the photo number. Then, the bot automatically sends the image and changes its name so that the image is not sent again to another person.


### The project has three main sections:
- The start.sh, the main file it is programmed by bash language, which runs the program, loads all the dependecies, and then monitors the folder through the inotifywait tool. In the event that a new image is created in the folder, the program will automatically rename the file to a numerical name as follows: picbot-{number}.png.

- The second file is the Telegram bot programmed by Node.JS language. This file is automatically run by the main file. The bot has two main commands on the Telegram, which are
  - `/start` : Sends the welcome message and explains how the bot works to receive the image
  - `/image` {number} : It automatically searches for the image in the folder, and if it exists, the bot sends the image to the user and changes its name to picbot-{number}-sent.png.

- The third folder, images, is the folder to which images are uploaded and monitored.

### Steps to run the project
Run below command:
```bash
sudo bash start.sh
```

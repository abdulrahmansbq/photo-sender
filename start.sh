#!/bin/bash
i=1
cd sender_bot/
npm install
node main.js &
sleep 1s
apt install inotify-tools
apt install  figlet
cd ..
inotifywait -m images/ -e create -e moved_to |
    while read dir action file; do
        if [[ $action == "CREATE" || $action == "MOVED_TO" ]]; then
          extension="${file##*.}";
          if [[ "$file" == "picbot-"* ]]; then
            continue
          fi
          if [[ $extension != "png" && $extension != "jpeg" && $extension != "jpg" ]]; then
            continue
          fi
          randomNumber=$(shuf -i 1-100 -n1)
          newFileName="$((i++))${randomNumber}";
          mv "${dir}${file}" "${dir}picbot-${newFileName}.${extension}";
          clear;
          figletName=$(echo ${newFileName} | sed 's/./& /g')
          figlet ${figletName}
        fi
    done

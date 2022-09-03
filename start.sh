#!bin/bash
i=1
cd sender_bot/
node main.js &
sleep 1s
cd ..
inotifywait -m images/ -e create -e moved_to |
    while read dir action file; do
        if [ $action == "CREATE" ]; then
          clear;
          extension="${file##*.}";
          randomNumber=$(shuf -i 1-100 -n1)
          newFileName="$((i++))${randomNumber}";
          mv "${dir}${file}" "${dir}${newFileName}.${extension}";
          figletName=$(echo ${newFileName} | sed 's/./& /g')
          figlet ${figletName}
        fi
    done
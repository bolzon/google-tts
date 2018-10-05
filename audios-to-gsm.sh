#!/bin/bash

# this software uses SOX lib
# to install it, run command below:

#sudo apt-get install sox libsox-fmt-all

if [ -d 'audios' ]
then
    mkdir audios
fi

if [ -z $1 ]
then
    echo "
  USAGE
    $0 <audio_extension>   # mp3, wav
"
    exit 0;
else
    AUDIO_EXTENSION=$1
fi

# converts mp3 files to gsm (gsm files will be in gsm folder)
for f in audios/*.$AUDIO_EXTENSION; do
    F=$(echo $f | sed "s/\.$AUDIO_EXTENSION//")
    sox $f -r 8000 -c 1 audios/gsm/$F.gsm
done

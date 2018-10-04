# Text synthesizer with Google TTS API

This script reads the file `input.txt` in format below and synthesizes the text with the configured voice using Google Text-to-Speech API.

## File format

Each line represents a new audio and they are divided in 2 parts each, separated with a `[TAB]`.

```
1. <audio_name_no_spaces>[TAB]<text-or-phrase-to-speech>
2. <audio_name_no_spaces>[TAB]<text-or-phrase-to-speech>
3. <audio_name_no_spaces>[TAB]<text-or-phrase-to-speech>
```

> If any line can't be understood by script, it will tell you the line numbers that are invalid.

## Usage

To run this script, be sure you have the file `input.txt` in the project root path with the content you want to synthesize and also an existing folder called `audios`, where the files will be put when created.

Install dependencies:

```sh
npm install
```

Run script:

```sh
npm start
```

## Premises

You need to have the Google Cloud environment configured and authenticated in your machine before you are able to run this script.

You also need to enable the [Cloud Text-To-Speech](https://cloud.google.com/text-to-speech/) service in your GCP account.

Get further information on how to do this at the [Google Cloud Platform official content](https://cloud.google.com/text-to-speech/docs/quickstart-protocol).

## Author

October, 2018  
[Alexandre Bolzon](https://about.me/bolzon)

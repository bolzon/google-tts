const tts = require('@google-cloud/text-to-speech');

const AudioEncodingEnum = {
  MP3: 'MP3',
  LINEAR16: 'LINEAR16',
  OGG_OPUS: 'OGG_OPUS',
  AUDIO_ENCODING_UNSPECIFIED: 'AUDIO_ENCODING_UNSPECIFIED'
};

class TtsService {

  constructor() {
    this.ttsClient = new tts.TextToSpeechClient();
  }

  speech(text, encoding) {
    const self = this;
    const request = {
      input: { text },
      voice: { languageCode: 'pt-BR', ssmlGender: 'FEMALE' },
      audioConfig: { audioEncoding: 'LINEAR16', sampleRateHertz: 8000 }
    };
    return new Promise((resolve, reject) => {
      self.ttsClient.synthesizeSpeech(request, (err, response) => 
        err ? reject(err) : resolve(response.audioContent));
    });
  }
}

module.exports = TtsService;

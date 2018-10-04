const tts = require('@google-cloud/text-to-speech');

class TtsService {

  constructor() {
    this.ttsClient = new tts.TextToSpeechClient();
  }

  speech(text) {
    const self = this;
    const request = {
      input: { text },
      audioConfig: { audioEncoding: 'MP3' },
      voice: { languageCode: 'pt-BR', ssmlGender: 'FEMALE' }
    };
    return new Promise((resolve, reject) => {
      self.ttsClient.synthesizeSpeech(request, (err, response) => 
        err ? reject(err) : resolve(response.audioContent));
    });
  }
}

module.exports = TtsService;

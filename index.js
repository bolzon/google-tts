const fs = require('fs');
const path = require('path');
const TtsService = require('./tts-service');

(async () => {

  const ttsService = new TtsService();
  const data = fs.readFileSync('input.txt');
  const lines = data.toString().split(/[\r\n]/);

  for (let idx in lines) {

    let text = lines[idx];
    if (text.length === 0) {
      continue;
    }

    // breaks text as "[audio_name_no_space]<tab>[text]"
    const m = text.match(/^(\S+)\t(.+)$/);

    if (!m) {
      console.error(`Invalid line: ${parseInt(idx) + 1}`);
      console.error(`  text = ${text}`);
      continue;
    }

    console.log('');

    text = RegExp.$2;

    const fileName = RegExp.$1.replace(/\s/g, '_')
      .replace(/[áàäâã]/, 'a').replace(/[ÁÀÄÂÃ]/, 'A')
      .replace(/[íìïîĩ]/, 'i').replace(/[ÍÌÏÎĨ]/, 'I')
      .replace(/[óòöôõ]/, 'o').replace(/[ÓÒÖÔÕ]/, 'O')
      .replace(/[úùüûũ]/, 'u').replace(/[ÚÙÜÛŨ]/, 'U')
      .replace(/[éèëê]/,  'e').replace(/[ÉÈËÊ]/,  'E')
      .replace(/[ç]/, 'c').replace(/[Ç]/, 'C') + '.mp3';
      
    const filePath = path.join(__dirname, 'audios', fileName);
    const exists = fs.existsSync(filePath);
    
    if (exists) {
      console.log(`Already exists`);
      console.log(`  file = ${fileName}`);
    }
    else {
      console.log(`Synthesizing`);
      console.log(`  file = ${fileName}`);
      console.log(`  text = ${text}`);

      const ttsData = await ttsService.speech(text);
      fs.writeFileSync(filePath, ttsData, 'binary');
    }
  }

  console.log('Done.');

})();

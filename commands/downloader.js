const _0x1cef02=_0x1aaa;(function(_0x45f4dc,_0x171a35){const _0x2c5bcf=_0x1aaa,_0x2d580a=_0x45f4dc();while(!![]){try{const _0x1ba96d=parseInt(_0x2c5bcf(0x28d))/0x1+parseInt(_0x2c5bcf(0x1e3))/0x2+parseInt(_0x2c5bcf(0x233))/0x3*(parseInt(_0x2c5bcf(0x239))/0x4)+parseInt(_0x2c5bcf(0x220))/0x5+parseInt(_0x2c5bcf(0x1d0))/0x6+-parseInt(_0x2c5bcf(0x279))/0x7+-parseInt(_0x2c5bcf(0x20d))/0x8;if(_0x1ba96d===_0x171a35)break;else _0x2d580a['push'](_0x2d580a['shift']());}catch(_0x474c53){_0x2d580a['push'](_0x2d580a['shift']());}}}(_0x10fe,0x1ffbd));const {tlang,ringtone,cmd,fetchJson,sleep,botpic,getBuffer,pinterest,prefix,Config}=require('../lib'),{mediafire}=require('../lib/mediafire.js'),{GDriveDl}=require(_0x1cef02(0x1f0)),fbInfoVideo=require(_0x1cef02(0x1d6)),googleTTS=require(_0x1cef02(0x280)),ytdl=require('ytdl-secktor'),cheerio=require('cheerio'),fs=require(_0x1cef02(0x24c)),axios=require(_0x1cef02(0x1ba));var videotime=0xe10,dlsize=0x64;cmd({'pattern':_0x1cef02(0x1ae),'desc':_0x1cef02(0x1be),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1ff)},async(_0x5e8cd5,_0xf64d86,_0x24fc5b)=>{const _0x228b50=_0x1cef02;if(!_0x24fc5b)return await _0xf64d86[_0x228b50(0x23b)]('_Enter\x20a\x20tg\x20sticker\x20url_\x0aEg:\x20.tgs\x20https://t.me/addstickers/Oldboyfinal\x0aKeep\x20in\x20mind\x20that\x20there\x20is\x20a\x20chance\x20of\x20ban\x20if\x20used\x20frequently');if(!_0x24fc5b[_0x228b50(0x247)](_0x228b50(0x255)))return await _0xf64d86['reply'](_0x228b50(0x1f6));let _0x46a4c3=_0x24fc5b[_0x228b50(0x1fc)]('|')[0x0],_0x514e9e=_0x46a4c3['split']('/addstickers/')[0x1],{result:_0x2c2a93}=await fetchJson(_0x228b50(0x207)+encodeURIComponent(_0x514e9e)+'\x20'),_0xd9a8b5=_0x24fc5b[_0x228b50(0x1fc)]('|')[0x1]||'',_0x27b213=(_0x228b50(0x261)+_0x2c2a93[_0x228b50(0x199)][_0x228b50(0x231)]+'\x0a*Estimated\x20complete\x20in:*\x20'+_0x2c2a93[_0x228b50(0x199)][_0x228b50(0x231)]*1.5+_0x228b50(0x1e8))['trim']();if(_0x2c2a93['is_animated'])return await _0xf64d86['reply'](_0x228b50(0x1c9));else{if(_0xd9a8b5[_0x228b50(0x1a9)](_0x228b50(0x1e9)))return await _0xf64d86['reply'](_0x27b213);}let _0x724ff0=parseInt(_0xd9a8b5['split'](',')[0x0])||0xa,_0x59b422=parseInt(_0xd9a8b5[_0x228b50(0x1fc)](',')[0x1])||0x0,_0xc0ba5f=_0xd9a8b5['split'](';')[0x1]||_0x228b50(0x1aa),_0x194e28=!![];_0xc0ba5f[_0x228b50(0x247)](_0x228b50(0x217))&&(_0x194e28=![],_0xc0ba5f='Photo');_0x724ff0>_0x2c2a93[_0x228b50(0x199)]['length']&&(_0x724ff0=_0x2c2a93[_0x228b50(0x199)][_0x228b50(0x231)]);_0x59b422>_0x2c2a93[_0x228b50(0x199)]['length']&&(_0x59b422=_0x2c2a93[_0x228b50(0x199)]['length']-0x5);if(_0x59b422>_0x724ff0){let _0x537017=_0x724ff0;_0x724ff0=_0x59b422,_0x59b422=_0x537017;}await _0xf64d86['reply'](_0x27b213+_0x228b50(0x198)+_0xc0ba5f+_0x228b50(0x246)+_0x59b422+_0x228b50(0x1e5)+_0x724ff0+'*._\x0aIf\x20you\x20wants\x20more\x20to\x20download\x20then\x20use\x20Like\x20\x0a\x0a\x20.tgs\x20'+_0x46a4c3+'\x20|\x20\x2010\x20,\x20\x2020\x20;\x20photo');for(_0x59b422;_0x59b422<_0x724ff0;_0x59b422++){let _0x4d4eac=await fetchJson(_0x228b50(0x212)+_0x2c2a93[_0x228b50(0x199)][_0x59b422][_0x228b50(0x270)]),_0x18f7a0=_0x228b50(0x1af)+_0x4d4eac[_0x228b50(0x24e)][_0x228b50(0x1a7)];if(_0x194e28){let _0x3e717a=await getBuffer(_0x18f7a0);await _0xf64d86[_0x228b50(0x23b)](_0x3e717a,{'packname':Config[_0x228b50(0x27e)],'author':'SONIC-Md'},_0x228b50(0x25e));}else await _0x5e8cd5[_0x228b50(0x257)](_0xf64d86[_0x228b50(0x1cb)],{'image':{'url':_0x18f7a0},'caption':_0x228b50(0x224)+(_0x59b422+0x1)+_0x228b50(0x1e2)});}});async function tiktokdl(_0x33fa42){const _0x4666a7=_0x1cef02,_0x30ef44=await axios[_0x4666a7(0x228)]('https://tikdown.org/id'),_0x3eca18=cheerio[_0x4666a7(0x193)](_0x30ef44[_0x4666a7(0x262)]),_0x20fce9=_0x3eca18(_0x4666a7(0x232))[_0x4666a7(0x1bd)](_0x4666a7(0x1b7)),_0x150219={'url':_0x33fa42,'_token':_0x20fce9},{data:_0x29fac3}=await axios[_0x4666a7(0x189)](_0x4666a7(0x1ac),{'method':_0x4666a7(0x1e6),'data':new URLSearchParams(Object[_0x4666a7(0x191)](_0x150219)),'headers':{'content-type':_0x4666a7(0x1a6),'user-agent':_0x4666a7(0x27f)}});var _0x376f72=cheerio[_0x4666a7(0x193)](_0x29fac3[_0x4666a7(0x19f)]);if(_0x29fac3[_0x4666a7(0x290)])return{'status':!![],'thumbnail':_0x376f72(_0x4666a7(0x250))[_0x4666a7(0x1bd)]('src'),'video':_0x376f72('div.download-links\x20>\x20div:nth-child(1)\x20>\x20a')[_0x4666a7(0x1bd)]('href'),'audio':_0x376f72(_0x4666a7(0x23d))['attr'](_0x4666a7(0x26b))};else return{'status':![]};}function _0x10fe(){const _0x128191=['text\x20to\x20speech.','1340096ddBrdf','fileName','statSync','Uhh\x20Please,\x20Give\x20me\x20\x20Google\x20Drive\x20Url','35PEQglD','https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=','test','Yt\x20Song\x20Searched\x20Data','ytvid','push','photo','<yt\x20video\x20url>','ytv','song','yts\x20WhatsApp\x20Bot\x20by\x20KALINDU','ytmp3','<text|image\x20name>','What\x20picture\x20are\x20you\x20looking\x20for?','<Dowanload\x20Tiktok\x20Sounds>','165670RNRLDY','138413xPKNHX','facebook','Gives\x20descriptive\x20info\x20of\x20query\x20from\x20youtube..','*_Telegram\x20Sticker\x20At\x20Index\x20','Error\x20While\x20Downloading\x20Video\x20:\x20','\x0a\x20\x20\x20───────────────────\x20\x0a','music','get','pint','tiktok','could\x20not\x20found\x20anything','Downloads\x20apks\x20\x20.','\x0a💃\x20Views\x20:\x20','Give\x20link\x20','❌\x20URL\x20is\x20empty!\x20\x0aSend\x20','sound\x205*','length','#download-form\x20>\x20input[type=hidden]:nth-child(2)','28746rRSnne','<faded-Alan\x20Walker>','\x09\x20\x20*GOOGLE\x20DRIVE\x20DOWNLOADER*\x20\x20\x0a','match','Here\x20it\x20is✨','quoted','12KXpnzP','\x0a💃\x20Author\x20:\x20','reply','mfire','div.download-links\x20>\x20div:nth-child(2)\x20>\x20a','\x0a*App\x20Size\x20\x20\x20\x20\x20:*\x20','*_APP\x20not\x20Found,\x20Try\x20Other\x20Name_*','1658310SEINIG','\x0a*Url\x20:\x20','urls','shift','\x0a*Mɪᴍᴇ*\x20:\x20','.apk','\x20From\x20index\x20*','includes','ytsearch','Downloads\x20audio\x20by\x20yt\x20link.','title','send','fs-extra','video\x20Back\x20in\x20black','result','audio','img','application/zip','1184926hEShul','getAudioUrl','File\x20deleted\x20successfully','addstickers','Uhh\x20Plese,\x20Give\x20me\x20a\x20Name.\x20Ex\x20.pint\x20apple','sendMessage','application/vnd.android.package-archive','2PeIoKa','secktor-pack','floor','Downloads\x20ringtone.','nama','sticker','lengthSeconds','audioBitrate','Total\x20stickers:\x20','data','downloadUrl','fbdl','<Hii,this\x20is\x20Suhail>','https://api.github.com/repos/','<yt\x20search\x20text>','*Title\x20:\x20','all','random','href','finish','❌\x20Give\x20youtube\x20link!','\x0a💃\x20Uploaded\x20:\x20','Downloads\x20video\x20from\x20youtube.','file_id','Downloads\x20video\x20from\x20yt.','Downloads\x20audio\x20by\x20yt\x20link\x20as\x20document.','itag','error','catch','views','ytmp3\x20url','https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound','930006KSCqJN','mumaker','ringtone','https://','unlink','packname','Mozilla/5.0\x20(Windows\x20NT\x206.3;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/100.0.4896.88\x20Safari/537.36','google-tts-api','HEAD','thumbnail','readFileSync','*_Please\x20Give\x20me\x20Facebook\x20Video\x20Url_*\x0a*Example\x20_','ttsCitelVoid.m4a','pushName','Downloads\x20image\x20from\x20pinterest.','Downloads\x20Tiktok\x20Videos\x20Via\x20Url.','ago','File\x20downloaded\x20successfully','audio/mpeg','```❌\x20Give\x20Me\x20A\x20Number\x20From\x201\x20to\x20160```','218559jfgHEU','NaN','http','status','videos','❌\x20File\x20size\x20bigger\x20than\x20200mb.','\x09\x20*SONIC-MD-YT-SEARCH*\x20\x20\x20\x0a\x0a💃\x20Title\x20:\x20','Downloads\x20media\x20from\x20Mediafire.','videoDetails','*Uhh\x20Please,\x20Provide\x20me\x20tiktok\x20Video\x20Url*\x0a*_Ex\x20.tiktok\x20https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*','url','request','greet','Uhh\x20Please,\x20Give\x20me\x20Valid\x20Google\x20Drive\x20Url','\x0a\x0a\x0a💛\x20Reply\x201\x20To\x20Video\x20\x0a💛\x20Reply\x202\x20To\x20Audio','<add\x20tiktok\x20url.>','video','../lib/scraper','sound','entries','*YouTube\x20Search*\x0a\x20Result\x20From\x20','load','then','\x0a💃\x20Url\x20:\x20','❌\x20File\x20size\x20bigger\x20than\x20150mb.','1014UUWswG','\x0a\x0a_Downloading\x20as\x20','stickers','link','Error\x20While\x20Downloading\x20Your\x20Song','\x0a*App\x20id\x20\x20\x20\x20\x20\x20\x20\x20:*\x20','_Downloading\x20','\x20\x20*Here\x27s\x20Your\x20Video*','html','1746PlRQCZ','<add\x20fb\x20url.>','*Uhh\x20Please,\x20Give\x20me\x20Valid\x20Tiktok\x20Video\x20Url!*','name','play\x20back\x20in\x20black*','ytd','application/x-www-form-urlencoded;\x20charset=UTF-8','file_path','mediafire.com','startsWith','Sticker','708PUYfdf','https://tikdown.org/getAjax?','log','tgs','https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/','youtube.com/c/SuhailTechInfo','30pRwULz','\x0a*Sɪᴢᴇ*\x20:','find','getyt','*Give\x20A\x20Number\x20Example:\x20','getInfo','value','./ytsong.mp4','1016672YZUonb','axios','The\x20link\x20you\x20provided\x20is\x20invalid','<faded-Alan\x20walker.>','attr','Downloads\x20telegram\x20stickers.','<ytdoc\x20video\x20url>','apk','unlinkSync','Sends\x20info\x20about\x20the\x20query(of\x20youtube\x20video/audio).','mimetype','<url\x20of\x20mediafire>','Example:\x20','*File\x20Name\x20:*\x20','headers','content-disposition','Animated\x20stickers\x20are\x20not\x20supported','8252tKuWQa','chat','yts','\x0a💃\x20Description\x20:\x20','caption','Give\x20Song\x20Name,\x20Ex\x20','314478RlKqJI','Url\x20:','text','6784105ebUaPI','gitclone','https://translate.google.com','fb-info-video','❌\x20Video\x20file\x20too\x20big!','downloader','package','❌Please\x20provide\x20me\x20a\x20url','video/mp4','.mp3','mime','❌\x20I\x20can\x27t\x20download\x20that\x20long\x20video!','\x20\x20*Here\x27s\x20Your\x20File*\x0a','pipe','ID\x20Not\x20Found','\x20Downloaded_*','197046BohMMn','timestamp','*\x20to\x20*','post','<give\x20text>','\x20seconds\x0aKeep\x20in\x20mind\x20that\x20there\x20is\x20a\x20chance\x20of\x20a\x20ban\x20if\x20used\x20frequently','info','ytmp4','ownername','mediafire','lastup','ytdoc','<ringtone\x20name>','../lib/scraper.js','*_Apk\x20not\x20Found,\x20Sorry_*','1041800hTaUXQ','yta','.mp4','createWriteStream','_Uhh\x20Please\x20Enter\x20a\x20Valid\x20tg\x20sticker\x20url_\x0aEg:\x20.tgs\x20https://t.me/addstickers/Oldboyfinal','replace','toString','2316wQYdmj','*\x20\x0a\x20\x20\x20\x20\x20*──────────────────*\x20\x20\x20\x0a','❌\x20File\x20size\x20bigger\x20than\x20100mb.','split','211117duABrL','Error\x20deleting\x20file:','<add\x20sticker\x20url.>','Downloads\x20fb\x20videos.','fb\x20https://www.facebook.com/watch/?v=2018727118289093_*','ringtone\x20back\x20in\x20black','*Provide\x20Repo\x20Url,\x20Ex:-\x20_.gitclone\x20https://github.com/KALINDU-LK/SONIC-MD_*','Example\x20:\x20','key','*song\x20not\x20Found,\x20Try\x20Differ\x20Name*','https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=','size','tts','*App\x20Name\x20:*\x20','stream'];_0x10fe=function(){return _0x128191;};return _0x10fe();};function _0x1aaa(_0x5a16e2,_0x700a36){const _0x10fe54=_0x10fe();return _0x1aaa=function(_0x1aaac3,_0x2c1f4d){_0x1aaac3=_0x1aaac3-0x182;let _0x363c69=_0x10fe54[_0x1aaac3];return _0x363c69;},_0x1aaa(_0x5a16e2,_0x700a36);}cmd({'pattern':_0x1cef02(0x22a),'alias':['tt','ttdl'],'desc':_0x1cef02(0x288),'category':'downloader','filename':__filename,'use':_0x1cef02(0x18d)},async(_0x3cffb3,_0x5ed68e,_0x38c7b4)=>{const _0x524b09=_0x1cef02;if(!_0x38c7b4)return await _0x5ed68e['reply'](_0x524b09(0x187));let _0x5003ab=_0x38c7b4?_0x38c7b4[_0x524b09(0x1fc)]('\x20')[0x0]:'';if(!/tiktok/[_0x524b09(0x213)](_0x5003ab))return await _0x5ed68e['send'](_0x524b09(0x1a2));const {status:_0x2b14a0,thumbnail:_0x33f9b1,video:_0x1698c7,audio:_0x5f2b7f}=await tiktokdl(_0x5003ab);if(_0x2b14a0)return await _0x3cffb3[_0x524b09(0x257)](_0x5ed68e[_0x524b09(0x1cb)],{'video':{'url':_0x1698c7},'caption':Config[_0x524b09(0x1ce)]},{'quoted':_0x5ed68e});else return await _0x5ed68e[_0x524b09(0x24b)]('Error\x20While\x20Downloading\x20Your\x20Video');}),cmd({'pattern':_0x1cef02(0x222),'alias':['fb',_0x1cef02(0x264)],'desc':_0x1cef02(0x200),'category':'downloader','filename':__filename,'use':_0x1cef02(0x1a1)},async(_0x2331f9,_0x5db9fa,_0x2c2358)=>{const _0x148f39=_0x14927d;(function(_0xdda8f,_0x18ca12){const _0x1b84e1=_0x1aaa,_0x5eca36=_0x14927d,_0x202f22=_0xdda8f();while(!![]){try{const _0x27142e=parseInt(_0x5eca36(0x1a6))/0x1*(parseInt(_0x5eca36(0x1b8))/0x2)+parseInt(_0x5eca36(0x1af))/0x3*(parseInt(_0x5eca36(0x1b7))/0x4)+parseInt(_0x5eca36(0x1b9))/0x5+-parseInt(_0x5eca36(0x1a7))/0x6+-parseInt(_0x5eca36(0x1ba))/0x7*(-parseInt(_0x5eca36(0x1a9))/0x8)+parseInt(_0x5eca36(0x1b3))/0x9*(-parseInt(_0x5eca36(0x1bb))/0xa)+-parseInt(_0x5eca36(0x1aa))/0xb*(parseInt(_0x5eca36(0x1ad))/0xc);if(_0x27142e===_0x18ca12)break;else _0x202f22['push'](_0x202f22[_0x1b84e1(0x243)]());}catch(_0x51b77c){_0x202f22[_0x1b84e1(0x216)](_0x202f22[_0x1b84e1(0x243)]());}}}(_0x2c1454,0xace66));function _0x2c1454(){const _0x500b5b=_0x1aaa,_0x391a5b=['2894193URITZc',_0x500b5b(0x201),_0x500b5b(0x242),'chat',_0x500b5b(0x1ca),_0x500b5b(0x259),_0x500b5b(0x1d3),_0x500b5b(0x211),_0x500b5b(0x1b1),'*_Error,\x20Video\x20Not\x20Found_*','url','caption',_0x500b5b(0x252),_0x500b5b(0x240),'startsWith',_0x500b5b(0x1b9),_0x500b5b(0x221),_0x500b5b(0x27c),_0x500b5b(0x1ad),_0x500b5b(0x1f9),_0x500b5b(0x27a),_0x500b5b(0x1a0),_0x500b5b(0x257),_0x500b5b(0x284),_0x500b5b(0x24b)];return _0x2c1454=function(){return _0x391a5b;},_0x2c1454();}function _0x14927d(_0x3c847f,_0x27976f){const _0x4c7776=_0x2c1454();return _0x14927d=function(_0x5d572a,_0x27de3f){_0x5d572a=_0x5d572a-0x1a3;let _0x485cc2=_0x4c7776[_0x5d572a];return _0x485cc2;},_0x14927d(_0x3c847f,_0x27976f);}if(!_0x2c2358||!_0x2c2358[_0x148f39(0x1a8)](_0x148f39(0x1ab)))return await _0x5db9fa[_0x148f39(0x1b2)](_0x148f39(0x1b1)+prefix+_0x148f39(0x1b4));try{const {facebook:_0x533a60}=require(_0x148f39(0x1ae));let _0xe91f21=await _0x533a60(_0x2c2358);return await _0x2331f9[_0x148f39(0x1b0)](_0x5db9fa[_0x148f39(0x1b6)],{'video':{'url':_0xe91f21[_0x148f39(0x1b5)][0x0][_0x148f39(0x1a4)]},'caption':Config[_0x148f39(0x1a5)]},{'quoted':_0x5db9fa});}catch(_0x4486ce){return await _0x5db9fa[_0x148f39(0x1b2)](_0x148f39(0x1a3));console[_0x148f39(0x1ac)]('error\x20while\x20Fb\x20Downloading\x20:\x20',_0x4486ce);}}),cmd({'pattern':_0x1cef02(0x1c0),'desc':'Downloads\x20apks\x20\x20.','category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1ff)},async(_0x4dd8e3,_0x28af99,_0x3fe24c)=>{const _0x186318=_0x1cef02;if(!_0x3fe24c)return _0x28af99[_0x186318(0x23b)]('*_Give\x20me\x20App\x20Name_*');const _0xbcc31e=_0x4c6881=>{const _0x2243b4=_0x186318;return''+Math[_0x2243b4(0x25b)](Math[_0x2243b4(0x26a)]()*0x2710)+_0x4c6881;};let _0x3cfefb=_0xbcc31e(_0x186318(0x245));const _0xc134fb='./'+_0x3cfefb,{search:_0xc90e8f,download:_0xa59cb5}=require('aptoide-scraper');let _0x3442f6=await _0xc90e8f(_0x3fe24c),_0x2ea214={};if(_0x3442f6[_0x186318(0x231)])_0x2ea214=await _0xa59cb5(_0x3442f6[0x0]['id']);else return _0x28af99[_0x186318(0x24b)](_0x186318(0x23f));const _0x3ca456=parseInt(_0x2ea214[_0x186318(0x208)]);if(_0x3ca456>0x64)return _0x28af99[_0x186318(0x24b)](_0x186318(0x196));const _0x1d598d=_0x2ea214['dllink'];let _0x288faf=_0x186318(0x20a)+_0x2ea214[_0x186318(0x1a3)];_0x288faf+=_0x186318(0x19c)+_0x2ea214[_0x186318(0x1d9)],_0x288faf+='\x0a*Last\x20Up\x20\x20\x20\x20\x20\x20\x20:*\x20'+_0x2ea214[_0x186318(0x1ed)],_0x288faf+=_0x186318(0x23e)+_0x2ea214[_0x186318(0x208)],_0x288faf+='\x0a\x0a\x20'+Config[_0x186318(0x1ce)],axios[_0x186318(0x228)](_0x1d598d,{'responseType':_0x186318(0x20b)})[_0x186318(0x194)](_0xf0e9a3=>{const _0x1d9010=_0x186318,_0x3eab7d=fs[_0x1d9010(0x1f5)](_0xc134fb);return _0xf0e9a3[_0x1d9010(0x262)][_0x1d9010(0x1e0)](_0x3eab7d),new Promise((_0xf818c8,_0x13983e)=>{const _0xf8a106=_0x1d9010;_0x3eab7d['on'](_0xf8a106(0x26c),_0xf818c8),_0x3eab7d['on']('error',_0x13983e);});})[_0x186318(0x194)](()=>{const _0x12bc79=_0x186318;let _0x251abb={'document':fs[_0x12bc79(0x283)](_0xc134fb),'mimetype':_0x12bc79(0x258),'fileName':_0x2ea214[_0x12bc79(0x1a3)]+_0x12bc79(0x245),'caption':_0x288faf};_0x4dd8e3['sendMessage'](_0x28af99[_0x12bc79(0x1cb)],_0x251abb,{'quoted':_0x28af99}),console[_0x12bc79(0x1ad)](_0x12bc79(0x28a)),fs[_0x12bc79(0x27d)](_0xc134fb,_0x242341=>{const _0x25b85f=_0x12bc79;_0x242341?console[_0x25b85f(0x274)](_0x25b85f(0x1fe),_0x242341):console[_0x25b85f(0x1ad)](_0x25b85f(0x254));});})[_0x186318(0x275)](_0x19adde=>{const _0x3f5a3a=_0x186318;return fs[_0x3f5a3a(0x27d)](_0xc134fb),_0x28af99[_0x3f5a3a(0x24b)](_0x3f5a3a(0x1f1));});}),cmd({'pattern':'gdrive','desc':_0x1cef02(0x1be),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1ff)},async(_0x87c6eb,_0xcdaf79,_0x5ea72c)=>{const _0xc94952=_0x1cef02;if(!_0x5ea72c)return _0xcdaf79[_0xc94952(0x24b)](_0xc94952(0x210));if(!(_0x5ea72c&&_0x5ea72c[_0xc94952(0x236)](/drive\.google/i)))_0xcdaf79[_0xc94952(0x24b)](_0xc94952(0x18b));let _0x519c7c=(_0x5ea72c[_0xc94952(0x236)](/\/?id=(.+)/i)||_0x5ea72c[_0xc94952(0x236)](/\/d\/(.*?)\//))[0x1];if(!_0x519c7c)return _0xcdaf79[_0xc94952(0x23b)](_0xc94952(0x1e1));try{GDriveDl(_0x519c7c)['then'](async _0x34446c=>{const _0x3ec893=_0xc94952;let _0x43f7f4=_0x3ec893(0x1c6)+_0x34446c['fileName'];_0x43f7f4+='\x0a*File\x20Size\x20:*\x20'+_0x34446c[_0x3ec893(0x208)]+'Mb',_0x43f7f4+='\x0a*File\x20Type\x20:*\x20'+_0x34446c[_0x3ec893(0x1c3)][_0x3ec893(0x1fc)]('/')[0x1]+'\x0a'+Config[_0x3ec893(0x1ce)];let _0x14f96a={'document':{'url':_0x34446c[_0x3ec893(0x263)]},'fileName':_0x34446c[_0x3ec893(0x20e)],'mimetype':_0x34446c[_0x3ec893(0x1c3)],'caption':_0x3ec893(0x235)+_0x43f7f4};return await _0x87c6eb[_0x3ec893(0x257)](_0xcdaf79[_0x3ec893(0x1cb)],_0x14f96a,{'quoted':_0xcdaf79});});}catch(_0x2bde49){return _0xcdaf79[_0xc94952(0x23b)]('```File\x20Not\x20Found```');}}),cmd({'pattern':_0x1cef02(0x1d4),'desc':_0x1cef02(0x22c),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1ff)},async(_0x4ce7dc,_0x5af5da,_0x22c845)=>{const _0x2d2288=_0x1cef02;if(!_0x22c845)return await _0x5af5da[_0x2d2288(0x24b)](_0x2d2288(0x203));const _0x168186=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!_0x168186[_0x2d2288(0x213)](_0x22c845))return await _0x5af5da['send']('*Uhh\x20Please,\x20Provide\x20Valid\x20Repositry\x20Url*');let [_0x5cfdaf,_0x1eab7,_0x4c3542]=_0x22c845[_0x2d2288(0x236)](_0x168186)||[];_0x4c3542=_0x4c3542[_0x2d2288(0x1f7)](/.git$/,'');let _0x1bed8e=_0x2d2288(0x266)+_0x1eab7+'/'+_0x4c3542+'/zipball',_0x279940=(await fetch(_0x1bed8e,{'method':_0x2d2288(0x281)}))[_0x2d2288(0x1c7)][_0x2d2288(0x228)](_0x2d2288(0x1c8))[_0x2d2288(0x236)](/attachment; filename=(.*)/)[0x1];await _0x4ce7dc['sendMessage'](_0x5af5da[_0x2d2288(0x1cb)],{'document':{'url':_0x1bed8e},'fileName':_0x279940,'mimetype':_0x2d2288(0x251)});}),cmd({'pattern':_0x1cef02(0x209),'desc':_0x1cef02(0x20c),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x265)},async(_0x2ec105,_0x131f05,_0x314ffc)=>{const _0x546065=_0x1cef02;if(!_0x314ffc&&!_0x131f05['quoted'])return _0x131f05[_0x546065(0x23b)]('*Please\x20give\x20me\x20Text*\x0a\x20*_Example\x20:\x20.tts\x20Hi,I\x20am\x20SONIC-MD._*');!_0x314ffc&&(_0x314ffc=_0x131f05[_0x546065(0x238)][_0x546065(0x1d2)]);let _0x50c4fe=_0x314ffc;const _0x282090=googleTTS[_0x546065(0x253)](_0x50c4fe,{'lang':'en','slow':![],'host':_0x546065(0x1d5)});return _0x2ec105['sendMessage'](_0x131f05[_0x546065(0x1cb)],{'audio':{'url':_0x282090},'mimetype':'audio/mpeg','fileName':_0x546065(0x285)},{'quoted':_0x131f05});}),cmd({'pattern':_0x1cef02(0x18e),'desc':_0x1cef02(0x271),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x234)},async(_0x5ee24f,_0x3a81ab,_0x820390)=>{const _0x5bbac9=_0x1cef02;if(!_0x820390)return _0x3a81ab[_0x5bbac9(0x23b)](_0x5bbac9(0x204)+prefix+_0x5bbac9(0x24d));let _0x2748cd=require(_0x5bbac9(0x25a)),_0x159817=await _0x2748cd(_0x820390),_0x34d5c1=_0x159817['all'][0x1];const _0x4d5015=_0x194e95=>{const _0x8aeab5=_0x5bbac9;return''+Math[_0x8aeab5(0x25b)](Math['random']()*0x2710)+_0x194e95;};try{let _0x215510=_0x34d5c1[_0x5bbac9(0x188)],_0x39b38a=await ytdl[_0x5bbac9(0x1b6)](_0x215510),_0x47aba4=Math[_0x5bbac9(0x25b)](_0x34d5c1[_0x5bbac9(0x1e4)]*0x3c);if(_0x47aba4>=videotime)return await _0x3a81ab[_0x5bbac9(0x23b)](_0x5bbac9(0x1d7));let _0x3915c1=_0x39b38a[_0x5bbac9(0x186)]['title'],_0x19f3d9=_0x4d5015(_0x5bbac9(0x1f4));const _0x472dce=ytdl(_0x215510,{'filter':_0x5ebf2a=>_0x5ebf2a['itag']==0x16||_0x5ebf2a[_0x5bbac9(0x273)]==0x12})[_0x5bbac9(0x1e0)](fs[_0x5bbac9(0x1f5)]('./'+_0x19f3d9));await new Promise((_0x5c9edc,_0x2a8c73)=>{const _0x5eb30f=_0x5bbac9;_0x472dce['on'](_0x5eb30f(0x274),_0x2a8c73),_0x472dce['on'](_0x5eb30f(0x26c),_0x5c9edc);});let _0x5d476a={'video':fs[_0x5bbac9(0x283)]('./'+_0x19f3d9),'mimetype':_0x5bbac9(0x1db),'caption':'\x20\x20Here\x27s\x20Your\x20Video'+Config[_0x5bbac9(0x1ce)]};return _0x5ee24f[_0x5bbac9(0x257)](_0x3a81ab['chat'],_0x5d476a,{'quoted':_0x3a81ab}),fs[_0x5bbac9(0x1c1)]('./'+_0x19f3d9);}catch(_0x2c9cf9){return await _0x3a81ab['reply'](_0x5bbac9(0x225)+_0x2c9cf9);}}),cmd({'pattern':'play','alias':[_0x1cef02(0x227)],'desc':_0x1cef02(0x1c2),'category':'downloader','filename':__filename,'use':_0x1cef02(0x1bc)},async(_0x1ca051,_0x4375d5,_0x564f94)=>{const _0x39d928=_0x1cef02,_0x3f564b=_0x22e1ec=>{const _0x41a5b6=_0x1aaa;return''+Math['floor'](Math[_0x41a5b6(0x26a)]()*0x2710)+_0x22e1ec;};if(_0x564f94[_0x39d928(0x231)]==0x0&&!_0x4375d5['quoted'])return _0x4375d5[_0x39d928(0x23b)](_0x39d928(0x1cf)+prefix+_0x39d928(0x1a4));try{let _0x10989c=_0x564f94;!_0x564f94&&(_0x564f94=_0x4375d5['quoted'][_0x39d928(0x1d2)]);if(!_0x10989c[_0x39d928(0x1a9)]('http')){let _0x1b79e3=require('secktor-pack'),_0x493723=await _0x1b79e3(_0x564f94),_0x2c48b5=_0x493723[_0x39d928(0x182)][0x0];_0x10989c=_0x2c48b5[_0x39d928(0x188)];}let _0x4cdb96=await ytdl[_0x39d928(0x1b6)](_0x10989c);if(_0x4cdb96[_0x39d928(0x186)][_0x39d928(0x25f)]>=0x4b0)return _0x4375d5[_0x39d928(0x23b)](_0x39d928(0x206));let _0x5664f1=_0x4cdb96[_0x39d928(0x186)]['title'];_0x4375d5[_0x39d928(0x23b)](_0x39d928(0x19d)+_0x4cdb96['videoDetails'][_0x39d928(0x24a)]+'?_');let _0xf991f5=_0x3f564b(_0x39d928(0x1dc));const _0x12f472=ytdl(_0x10989c,{'filter':_0x283df4=>_0x283df4[_0x39d928(0x260)]==0xa0||_0x283df4[_0x39d928(0x260)]==0x80})['pipe'](fs[_0x39d928(0x1f5)]('./'+_0xf991f5));await new Promise((_0x255e5e,_0x263488)=>{const _0x53c4b8=_0x39d928;_0x12f472['on'](_0x53c4b8(0x274),_0x263488),_0x12f472['on']('finish',_0x255e5e);});let _0x488043=fs['statSync']('./'+_0xf991f5),_0x2e3f7c=_0x488043[_0x39d928(0x208)],_0x1042ce=_0x2e3f7c/(0x400*0x400);if(_0x1042ce<=dlsize){let _0x31f9a3=require(_0x39d928(0x25a)),_0x2dd931=await _0x31f9a3(_0x564f94),_0x1d9a8d={'audio':fs['readFileSync']('./'+_0xf991f5),'mimetype':'audio/mpeg','fileName':_0x5664f1+_0x39d928(0x1dc),'headerType':0x4};return await _0x1ca051[_0x39d928(0x257)](_0x4375d5[_0x39d928(0x1cb)],_0x1d9a8d,{'quoted':_0x4375d5}),fs[_0x39d928(0x1c1)]('./'+_0xf991f5);}else _0x4375d5[_0x39d928(0x23b)](_0x39d928(0x1fb));return fs[_0x39d928(0x1c1)]('./'+_0xf991f5);}catch(_0x5a6ff){return _0x4375d5['reply'](_0x39d928(0x19b));}}),cmd({'pattern':_0x1cef02(0x190),'desc':_0x1cef02(0x25c),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x21f)},async(_0x8aac63,_0x51d38d,_0x2e33db)=>{const _0x814491=_0x1cef02;if(!_0x2e33db)return _0x51d38d['send'](_0x814491(0x1b5)+prefix+_0x814491(0x230));const _0x393e1e=parseInt(_0x2e33db);if(_0x393e1e[_0x814491(0x1f8)]()==_0x814491(0x28e)||_0x393e1e<0x1||_0x393e1e>0xa0)return _0x51d38d[_0x814491(0x23b)](_0x814491(0x28c));let _0x499e70=_0x814491(0x278)+_0x393e1e[_0x814491(0x1f8)]()+_0x814491(0x1dc),_0x11252d=await getBuffer(_0x499e70),_0x189658={'audio':_0x11252d,'fileName':_0x499e70[_0x814491(0x1f8)](),'mimetype':'audio/mp4','ptt':!![]};return _0x8aac63[_0x814491(0x257)](_0x51d38d[_0x814491(0x1cb)],_0x189658,{'quoted':_0x51d38d});}),cmd({'pattern':_0x1cef02(0x27b),'desc':_0x1cef02(0x25c),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1ef)},async(_0x1c6acc,_0x5df157,_0x23baca)=>{const _0x8b9ac3=_0x1cef02;if(!_0x23baca)return _0x5df157[_0x8b9ac3(0x24b)](_0x8b9ac3(0x1c5)+prefix+_0x8b9ac3(0x202));const {ringtone:_0xd4b495}=require(_0x8b9ac3(0x18f));let _0x5885cf=await _0xd4b495(_0x23baca),_0x10047b={'audio':{'url':_0x5885cf[0x0][_0x8b9ac3(0x24f)]},'caption':'*'+_0x5885cf[0x0][_0x8b9ac3(0x24a)]+'*','fileName':_0x5885cf[0x0][_0x8b9ac3(0x24a)]+_0x8b9ac3(0x1dc),'mimetype':_0x8b9ac3(0x28b)};return _0x1c6acc[_0x8b9ac3(0x257)](_0x5df157['chat'],_0x10047b,{'quoted':_0x5df157});}),cmd({'pattern':_0x1cef02(0x229),'desc':_0x1cef02(0x287),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x21d)},async(_0x433d63,_0x4008f1,_0x56e87b)=>{const _0x2e8a13=_0x1cef02;if(!_0x56e87b)return _0x4008f1[_0x2e8a13(0x24b)](_0x2e8a13(0x21e))&&_0x433d63[_0x2e8a13(0x257)](_0x4008f1[_0x2e8a13(0x1cb)],{'react':{'text':'❌','key':_0x4008f1[_0x2e8a13(0x205)]}});try{let _0x36f845=await pinterest(_0x56e87b),_0xc6c983=_0x36f845[Math['floor'](Math[_0x2e8a13(0x26a)]()*_0x36f845[_0x2e8a13(0x231)])],_0x613d82={'image':{'url':_0xc6c983},'caption':Config['caption'],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x2e8a13(0x237),'body':''+Config[_0x2e8a13(0x1eb)],'thumbnail':log0,'mediaType':0x2,'mediaUrl':'','sourceUrl':_0x2e8a13(0x1b0)}}};return _0x433d63[_0x2e8a13(0x257)](_0x4008f1[_0x2e8a13(0x1cb)],_0x613d82,{'quoted':_0x4008f1});}catch(_0x224f4c){return _0x4008f1['reply'](_0x2e8a13(0x256));}}),cmd({'pattern':_0x1cef02(0x1ec),'alias':['mf',_0x1cef02(0x23c)],'desc':_0x1cef02(0x185),'category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1c4)},async(_0x57bdc5,_0x93a1f8,_0x3a2e0c)=>{const _0x46d599=_0x1cef02;if(!_0x3a2e0c)return _0x93a1f8[_0x46d599(0x23b)](_0x46d599(0x22e)+tlang()[_0x46d599(0x18a)]);if(!_0x3a2e0c[_0x46d599(0x247)](_0x46d599(0x1a8)))return _0x93a1f8['reply'](_0x46d599(0x1bb));let _0x550823=_0x3a2e0c;const _0xecb03=await mediafire(_0x550823);if(!_0xecb03[_0x46d599(0x231)])return _0x93a1f8['reply'](_0x46d599(0x22b));const _0x3620d5=parseInt(_0xecb03[0x0]['size']);if(_0x3620d5>0x64)return _0x93a1f8[_0x46d599(0x23b)]('❌\x20File\x20size\x20bigger\x20than\x20150mb.');let _0x3d50c8='\x20*Mᴇᴅɪᴀғɪʀᴇ\x20Dᴏᴡɴʟᴏᴀᴅᴇʀ*\x0a*Nᴀᴍᴇ*\x20:\x20'+_0xecb03[0x0][_0x46d599(0x25d)]+_0x46d599(0x1b2)+_0xecb03[0x0][_0x46d599(0x208)]+_0x46d599(0x244)+_0xecb03[0x0][_0x46d599(0x1dd)]+'\x0a\x0a';_0x3d50c8+=Config['caption'];let _0x12e5f2={'document':{'url':_0xecb03[0x0][_0x46d599(0x19a)]},'caption':_0x3d50c8,'fileName':_0xecb03[0x0][_0x46d599(0x25d)],'mimetype':_0xecb03[0x0][_0x46d599(0x1dd)]};return await _0x57bdc5[_0x46d599(0x257)](_0x93a1f8[_0x46d599(0x1cb)],_0x12e5f2);}),cmd({'pattern':_0x1cef02(0x21a),'alias':[_0x1cef02(0x24f)],'desc':'Downloads\x20audio\x20from\x20youtube.','category':_0x1cef02(0x1d8),'filename':__filename,'use':_0x1cef02(0x1e7)},async(_0x471e68,_0x3985c5,_0x28759c)=>{const _0x1fc0d7=_0x1cef02;if(!_0x28759c)return await _0x3985c5[_0x1fc0d7(0x23b)]('*_Ohh\x20PLease,\x20Give\x20Me\x20Song\x20Name_*');let _0x1440b4=require(_0x1fc0d7(0x25a)),_0x32e240=await _0x1440b4(_0x28759c),_0x1c5ab1=_0x32e240[_0x1fc0d7(0x269)][0x1],_0x2efd51=_0x1fc0d7(0x184)+_0x1c5ab1[_0x1fc0d7(0x24a)]+_0x1fc0d7(0x195)+_0x1c5ab1[_0x1fc0d7(0x188)]+_0x1fc0d7(0x1cd)+_0x1c5ab1[_0x1fc0d7(0x1e4)]+_0x1fc0d7(0x22d)+_0x1c5ab1[_0x1fc0d7(0x276)]+_0x1fc0d7(0x26e)+_0x1c5ab1[_0x1fc0d7(0x289)]+_0x1fc0d7(0x23a)+_0x1c5ab1['author'][_0x1fc0d7(0x1a3)]+_0x1fc0d7(0x18c);_0x471e68['sendMessage'](_0x3985c5[_0x1fc0d7(0x1cb)],{'image':{'url':_0x1c5ab1['thumbnail']},'caption':_0x2efd51});}),cmd({'pattern':_0x1cef02(0x1cc),'alias':[_0x1cef02(0x248),_0x1cef02(0x1b4)],'desc':_0x1cef02(0x223),'category':'downloader','filename':__filename,'use':_0x1cef02(0x267)},async(_0x411024,_0x28a7c8,_0x152b31)=>{const _0x55b2be=_0x1cef02;let _0x241911=require('secktor-pack');if(!_0x152b31)return _0x28a7c8[_0x55b2be(0x23b)](_0x55b2be(0x204)+prefix+_0x55b2be(0x21b));let _0x25481c=await _0x241911(_0x152b31),_0x36517b=_0x55b2be(0x192)+_0x152b31+_0x55b2be(0x226),_0x27abe2=0x1;for(let _0xed2b65 of _0x25481c['all']){_0x36517b+=_0x55b2be(0x268)+_0xed2b65['title']+'*',_0x36517b+=_0x55b2be(0x241)+_0xed2b65[_0x55b2be(0x188)]+_0x55b2be(0x1fa);}return _0x411024[_0x55b2be(0x257)](_0x28a7c8[_0x55b2be(0x1cb)],{'image':{'url':_0x25481c['all'][0x0]['thumbnail']},'caption':_0x36517b},{'quoted':_0x28a7c8});}),cmd({'pattern':_0x1cef02(0x1ea),'alias':[_0x1cef02(0x219),_0x1cef02(0x215),'ytvideo'],'desc':_0x1cef02(0x26f),'category':_0x1cef02(0x1d8),'filename':__filename,'use':'<yt\x20video\x20url>'},async(_0x59b773,_0x564a17,_0x3aceb3)=>{const _0x4192d3=_0x1cef02,_0x1d3571=_0x46dad5=>{const _0xc9c9e7=_0x1aaa;return''+Math[_0xc9c9e7(0x25b)](Math[_0xc9c9e7(0x26a)]()*0x2710)+_0x46dad5;};if(!_0x3aceb3){_0x564a17[_0x4192d3(0x23b)](_0x4192d3(0x1da));return;}try{let _0x1962c9=_0x3aceb3;if(!_0x1962c9[_0x4192d3(0x1a9)](_0x4192d3(0x28f)))return _0x564a17[_0x4192d3(0x23b)](_0x4192d3(0x26d));let _0x5cacb7=await ytdl['getInfo'](_0x1962c9);if(_0x5cacb7[_0x4192d3(0x186)]['lengthSeconds']>=videotime)return _0x564a17['reply'](_0x4192d3(0x1d7));let _0x45630d=_0x5cacb7[_0x4192d3(0x186)]['title'],_0x24405f=_0x1d3571(_0x4192d3(0x1f4));const _0x14a2fe=ytdl(_0x1962c9,{'filter':_0x4a9b3b=>_0x4a9b3b['itag']==0x16||_0x4a9b3b[_0x4192d3(0x273)]==0x12})['pipe'](fs['createWriteStream']('./'+_0x24405f));await new Promise((_0x40cff3,_0x2cf864)=>{const _0x29b21f=_0x4192d3;_0x14a2fe['on'](_0x29b21f(0x274),_0x2cf864),_0x14a2fe['on']('finish',_0x40cff3);});let _0x5bc1c7=fs[_0x4192d3(0x20f)]('./'+_0x24405f),_0x2ff0a6=_0x5bc1c7['size'],_0x1295ec=_0x2ff0a6/(0x400*0x400);if(_0x1295ec<=dlsize){let _0x43937e=require(_0x4192d3(0x25a)),_0x46188d=await _0x43937e(_0x3aceb3),_0x2a192d={'video':fs[_0x4192d3(0x283)]('./'+_0x24405f),'mimetype':'video/mp4','fileName':_0x45630d+_0x4192d3(0x1f4),'caption':_0x4192d3(0x19e)+Config[_0x4192d3(0x1ce)],'gifPlayback':![],'height':0x1f0,'width':0x280,'headerType':0x4,'headerType':0x4};return _0x59b773[_0x4192d3(0x257)](_0x564a17[_0x4192d3(0x1cb)],_0x2a192d,{'quoted':_0x564a17}),fs[_0x4192d3(0x1c1)]('./'+_0x24405f);}else _0x564a17[_0x4192d3(0x23b)](_0x4192d3(0x183));return fs[_0x4192d3(0x1c1)]('./'+_0x24405f);}catch(_0x1add3e){console[_0x4192d3(0x1ad)](_0x1add3e);}}),cmd({'pattern':_0x1cef02(0x21c),'alias':[_0x1cef02(0x1f3)],'desc':_0x1cef02(0x249),'category':_0x1cef02(0x1d8),'use':_0x1cef02(0x218)},async(_0x1e0b3f,_0x25a991,_0x5b554f)=>{const _0x4f2a05=_0x1cef02,_0x100060=_0x580d01=>{return''+Math['floor'](Math['random']()*0x2710)+_0x580d01;};if(_0x5b554f[_0x4f2a05(0x231)]===0x0){_0x25a991[_0x4f2a05(0x23b)](_0x4f2a05(0x22f)+prefix+_0x4f2a05(0x277));return;}try{let _0x12d411=_0x5b554f;if(!_0x12d411[_0x4f2a05(0x1a9)]('http')){_0x25a991['reply'](_0x4f2a05(0x26d));return;}let _0x522bc8=await ytdl[_0x4f2a05(0x1b6)](_0x12d411);if(_0x522bc8[_0x4f2a05(0x186)][_0x4f2a05(0x25f)]>=videotime){_0x25a991[_0x4f2a05(0x23b)](_0x4f2a05(0x1de));return;}let _0xa39ee3=_0x522bc8[_0x4f2a05(0x186)][_0x4f2a05(0x24a)],_0x3bf7f5=_0x100060('.mp3');const _0xbae237=ytdl(_0x12d411,{'filter':_0x38a714=>_0x38a714[_0x4f2a05(0x260)]==0xa0||_0x38a714[_0x4f2a05(0x260)]==0x80})[_0x4f2a05(0x1e0)](fs['createWriteStream']('./'+_0x3bf7f5));await new Promise((_0x4a0c2f,_0xd63672)=>{const _0x4d052=_0x4f2a05;_0xbae237['on'](_0x4d052(0x274),_0xd63672),_0xbae237['on'](_0x4d052(0x26c),_0x4a0c2f);});let _0x2174ae=fs['statSync']('./'+_0x3bf7f5),_0x2c8efd=_0x2174ae['size'],_0x4982f8=_0x2c8efd/(0x400*0x400);if(_0x4982f8<=dlsize){let _0x36624f=require('secktor-pack'),_0x2c08d0=await _0x36624f(_0x5b554f),_0x42b7e4={'audio':fs[_0x4f2a05(0x283)]('./'+_0x3bf7f5),'mimetype':_0x4f2a05(0x28b),'fileName':_0xa39ee3+_0x4f2a05(0x1dc),'headerType':0x4};return await _0x1e0b3f[_0x4f2a05(0x257)](_0x25a991['chat'],_0x42b7e4,{'quoted':_0x25a991}),fs[_0x4f2a05(0x1c1)]('./'+_0x3bf7f5);}else _0x25a991[_0x4f2a05(0x23b)](_0x4f2a05(0x183));fs[_0x4f2a05(0x1c1)]('./'+_0x3bf7f5);}catch(_0x3c16f0){console[_0x4f2a05(0x1ad)](_0x3c16f0);}}),cmd({'pattern':_0x1cef02(0x1ee),'alias':[_0x1cef02(0x1a5)],'desc':_0x1cef02(0x272),'category':_0x1cef02(0x1d8),'use':_0x1cef02(0x1bf)},async(_0x572a29,_0x2c979d,_0x42bf29)=>{const _0x949e53=_0x1cef02,_0xd003f4=_0x20ff47=>{const _0x4c7607=_0x1aaa;return''+Math['floor'](Math[_0x4c7607(0x26a)]()*0x2710)+_0x20ff47;};if(_0x42bf29[_0x949e53(0x231)]===0x0)return await _0x2c979d[_0x949e53(0x23b)](_0x949e53(0x22f)+prefix+_0x949e53(0x277));try{let _0x36f165=_0x42bf29;if(!_0x36f165[_0x949e53(0x1a9)](_0x949e53(0x28f)))return await _0x2c979d[_0x949e53(0x23b)](_0x949e53(0x26d));let _0x1f1240=await ytdl[_0x949e53(0x1b6)](_0x36f165);if(_0x1f1240[_0x949e53(0x186)][_0x949e53(0x25f)]>=videotime)return await _0x2c979d['reply'](_0x949e53(0x1de));let _0x52d87f=_0x1f1240[_0x949e53(0x186)][_0x949e53(0x24a)],_0x56c74d=_0xd003f4('.mp3');const _0x10b913=ytdl(_0x36f165,{'filter':_0x295f59=>_0x295f59['audioBitrate']==0xa0||_0x295f59['audioBitrate']==0x80})[_0x949e53(0x1e0)](fs[_0x949e53(0x1f5)]('./'+_0x56c74d));await new Promise((_0x49e98a,_0x365c89)=>{const _0x310c42=_0x949e53;_0x10b913['on'](_0x310c42(0x274),_0x365c89),_0x10b913['on'](_0x310c42(0x26c),_0x49e98a);});let _0x25cc12=fs['statSync']('./'+_0x56c74d),_0x12f5a4=_0x25cc12['size'],_0x29ed6b=_0x12f5a4/(0x400*0x400);if(_0x29ed6b<=dlsize){let _0x51ea96=require('secktor-pack'),_0x25cfca=await _0x51ea96(_0x42bf29),_0xf42ff5={'document':fs[_0x949e53(0x283)]('./'+_0x56c74d),'mimetype':_0x949e53(0x28b),'fileName':_0x52d87f+'.mp3','caption':_0x949e53(0x1df)+Config[_0x949e53(0x1ce)],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x52d87f,'body':_0x2c979d[_0x949e53(0x286)],'renderLargerThumbnail':!![],'thumbnailUrl':_0x25cfca[_0x949e53(0x269)][0x0]['thumbnail'],'mediaUrl':_0x42bf29,'mediaType':0x1,'thumbnail':await getBuffer(_0x25cfca[_0x949e53(0x269)][0x0][_0x949e53(0x282)]),'sourceUrl':_0x42bf29}}};return await _0x572a29['sendMessage'](_0x2c979d[_0x949e53(0x1cb)],_0xf42ff5,{'quoted':_0x2c979d}),fs['unlinkSync']('./'+_0x56c74d);}else _0x2c979d[_0x949e53(0x23b)]('❌\x20File\x20size\x20bigger\x20than\x20200mb.');fs['unlinkSync']('./'+_0x56c74d);}catch(_0x3f162b){console[_0x949e53(0x1ad)](_0x3f162b);}}),cmd({'on':_0x1cef02(0x1d2)},async(_0x214c4d,_0x26173f,_0x396ee5,{isCreator:_0x140ec4})=>{const _0x22ee17=_0x1cef02,_0x4cae95=_0x4aa438;(function(_0x58ce19,_0x146166){const _0x4a40a1=_0x1aaa,_0x1bd2f1=_0x4aa438,_0x58eaf4=_0x58ce19();while(!![]){try{const _0x1b2c06=parseInt(_0x1bd2f1(0x1b9))/0x1+-parseInt(_0x1bd2f1(0x1a7))/0x2*(parseInt(_0x1bd2f1(0x1b4))/0x3)+-parseInt(_0x1bd2f1(0x1bc))/0x4+-parseInt(_0x1bd2f1(0x1a9))/0x5+parseInt(_0x1bd2f1(0x1bb))/0x6*(parseInt(_0x1bd2f1(0x1ad))/0x7)+parseInt(_0x1bd2f1(0x1c0))/0x8+-parseInt(_0x1bd2f1(0x1be))/0x9;if(_0x1b2c06===_0x146166)break;else _0x58eaf4[_0x4a40a1(0x216)](_0x58eaf4[_0x4a40a1(0x243)]());}catch(_0x56df60){_0x58eaf4[_0x4a40a1(0x216)](_0x58eaf4[_0x4a40a1(0x243)]());}}}(_0x2d6d69,0x4e44a));function _0x4aa438(_0x351f4e,_0x8cd6fe){const _0x19f523=_0x2d6d69();return _0x4aa438=function(_0x5d6210,_0x3c3ae0){_0x5d6210=_0x5d6210-0x1a4;let _0x5683fb=_0x19f523[_0x5d6210];return _0x5683fb;},_0x4aa438(_0x351f4e,_0x8cd6fe);}if(_0x26173f[_0x4cae95(0x1c1)]&&_0x26173f[_0x4cae95(0x1b6)]){const _0x151299=_0x26173f[_0x4cae95(0x1c1)][_0x4cae95(0x1b6)][_0x4cae95(0x1b8)]('\x0a');if(_0x151299[0x0][_0x4cae95(0x1a8)](_0x22ee17(0x214))){const _0x441506=_0x151299[_0x4cae95(0x1ab)](_0x47b01a=>_0x47b01a[_0x4cae95(0x1a5)](_0x4cae95(0x1b1)));let _0x6f1f16=_0x441506[_0x22ee17(0x1f7)](_0x22ee17(0x1d1),'')['trim']();try{let _0x221520;if(_0x26173f[_0x4cae95(0x1b6)][_0x4cae95(0x1a5)]('1')){_0x221520=_0x4cae95(0x1a6);const _0x13567e=ytdl(_0x6f1f16,{'filter':_0x11829e=>_0x11829e[_0x4cae95(0x1af)]==0x16||_0x11829e[_0x4cae95(0x1af)]==0x12})[_0x4cae95(0x1a4)](fs[_0x4cae95(0x1c2)](_0x221520));await new Promise((_0x492027,_0x39721a)=>{const _0x1f6966=_0x22ee17,_0x1117ef=_0x4cae95;_0x13567e['on'](_0x1117ef(0x1ba),_0x39721a),_0x13567e['on'](_0x1f6966(0x26c),_0x492027);}),await _0x214c4d[_0x4cae95(0x1bd)](_0x26173f[_0x4cae95(0x1b7)],{'video':fs[_0x4cae95(0x1bf)](_0x221520),'mimetype':_0x4cae95(0x1ac),'caption':Config[_0x22ee17(0x1ce)]},{'quoted':_0x26173f});}else{if(_0x26173f[_0x4cae95(0x1b6)][_0x22ee17(0x1a9)]('2')){_0x221520='./ytsong.mp3';const _0x47f14f=ytdl(_0x6f1f16,{'filter':_0x18cc73=>_0x18cc73[_0x4cae95(0x1ae)]==0xa0||_0x18cc73[_0x22ee17(0x260)]==0x80})[_0x4cae95(0x1a4)](fs[_0x4cae95(0x1c2)](_0x221520));await new Promise((_0x4b2b19,_0x428cf4)=>{const _0x138b8c=_0x22ee17,_0x3bbcaa=_0x4cae95;_0x47f14f['on'](_0x138b8c(0x274),_0x428cf4),_0x47f14f['on'](_0x3bbcaa(0x1b3),_0x4b2b19);}),await _0x214c4d[_0x4cae95(0x1bd)](_0x26173f[_0x4cae95(0x1b7)],{'audio':fs[_0x22ee17(0x283)](_0x221520),'mimetype':_0x4cae95(0x1b2)},{'quoted':_0x26173f});}}try{return fs[_0x4cae95(0x1aa)](_0x221520);}catch(_0x266ef9){}}catch(_0x2708ef){return await _0x26173f[_0x4cae95(0x1b0)](_0x4cae95(0x1b5)+_0x2708ef);}}}function _0x2d6d69(){const _0x3b60fc=_0x22ee17,_0x2835a4=['video/mp4','33215aEaqLO',_0x3b60fc(0x260),_0x3b60fc(0x273),_0x3b60fc(0x23b),_0x3b60fc(0x1d1),'audio/mpeg',_0x3b60fc(0x26c),_0x3b60fc(0x1ab),'Error\x20While\x20Downloading\x20Video\x20:\x20','text',_0x3b60fc(0x1cb),_0x3b60fc(0x1fc),_0x3b60fc(0x1fd),_0x3b60fc(0x274),'540vpKxFa',_0x3b60fc(0x1f2),_0x3b60fc(0x257),'1389897APKDJS',_0x3b60fc(0x283),'4173952CbWaym',_0x3b60fc(0x238),'createWriteStream',_0x3b60fc(0x1e0),_0x3b60fc(0x1a9),_0x3b60fc(0x1b8),_0x3b60fc(0x197),_0x3b60fc(0x247),'1523950KcTWbR',_0x3b60fc(0x1c1),_0x3b60fc(0x1b3)];return _0x2d6d69=function(){return _0x2835a4;},_0x2d6d69();}});

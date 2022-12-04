﻿(self.webpackChunkvk=self.webpackChunkvk||[]).push([[5360],{18233:(t,e,i)=>{"use strict";i.d(e,{Api:()=>l});var r=i(70655),n=i(9621),s=i(16405),o=i(90831),a=i(91047),u=i(89798),c=i(26271),d=["messages.getLongPollServer","messages.getLongPollHistory","queue.subscribe","account.setOnline"],l=function(){function t(t){var e=this;this.abortTrackers=new Map,this.fetch=function(t,i,s){return void 0===s&&(s={}),(0,r.__awaiter)(e,void 0,Promise,(function(){var e,o,a,u,l,f,h,g,v,_,m=this;return(0,r.__generator)(this,(function(y){switch(y.label){case 0:if("queue.subscribe"===t)return[2,Promise.resolve({base_url:"mock",queues:[]})];s.timeout||(s.timeout=1e4),i=this.enrichParams(t,i),e=d.includes(t),o=t+" "+JSON.stringify(i),a=s.retries||0,u=0,y.label=1;case 1:0,y.label=2;case 2:return y.trys.push([2,7,,9]),!e||!window.curNotifier||window.curNotifier.is_server||c.browser.safari?[3,5]:[4,p((w=500,k=1500,Math.random()*(k-w+1)+w))];case 3:return y.sent(),[4,this.cache.get(o)];case 4:if(l=y.sent())return[2,l];y.label=5;case 5:return f=this.request(t,i,s.timeout),h=f.response,g=f.abort,s.trackId&&this.abortTrackers.set(s.trackId,g),[4,h.catch((function(t){if("api_error"===t.type){var e=t.error,i=e.error_code,s=e.error_message,o=(0,r.__rest)(e,["error_code","error_message"]);throw new n.IApi.RequestError(i,s,o)}throw t})).finally((function(){s.trackId&&m.abortTrackers.delete(s.trackId)}))];case 6:if((v=y.sent()).execute_errors)throw new n.IApi.ExecuteErrors(v.execute_errors);return e&&this.cache.set(o,v).catch((function(){})),[2,v];case 7:if((_=y.sent())instanceof n.IApi.AbortError)throw _;if(++u===a+1)throw _;return[4,p(Math.min(500*Math.pow(2,u-1),2e4))];case 8:return y.sent(),[3,9];case 9:return[3,1];case 10:return[2]}var w,k}))}))},this.request=function(t,e,i){var o,a,c,d=new AbortController,l=!1;i&&(c=window.setTimeout((function(){l=!0,d.abort()}),i));var f={};try{for(var p=(0,r.__values)(Object.keys(e)),h=p.next();!h.done;h=p.next()){var g=h.value;void 0!==e[g]&&(f[g]=e[g])}}catch(t){o={error:t}}finally{try{h&&!h.done&&(a=p.return)&&a.call(p)}finally{if(o)throw o.error}}return{response:(0,u.api)(t,f,{version:s.API_VERSION},{signal:d.signal}).catch((function(t){if(d.signal.aborted)throw l?new n.IApi.TimeoutError:new n.IApi.AbortError;throw t})).finally((function(){c&&clearTimeout(c)})),abort:function(){d.abort()}}},this.enrichParams=function(t,e){var i=t.slice(0,t.indexOf(".")),n={messages:Array.from(new Set((0,r.__spreadArray)((0,r.__spreadArray)([],(0,r.__read)(o.API_USER_FIELDS),!1),(0,r.__read)(o.API_GROUP_FIELDS),!1))).join(","),users:o.API_USER_FIELDS.join(","),groups:o.API_GROUP_FIELDS.join(",")}[i];return(0,r.__assign)((0,r.__assign)({},e),{extended:1,fields:n})},this.cache=new f(3e3,t)}return t.dropCache=function(){indexedDB.deleteDatabase(f.CACHE_DB_NAME)},t.prototype.dangerouslyAbort=function(t){var e;t&&(null===(e=this.abortTrackers.get(t))||void 0===e||e(),this.abortTrackers.delete(t))},t.prototype.fetchMany=function(t,e){for(var i=[],r=[],n=0;n<t.length;n++){var s=t[n];if(s){var o="res"+n;i.push("var "+o+"=fork(API."+s.method+"("+JSON.stringify(this.enrichParams(s.method,s.params))+"));"),r.push("wait("+o+")")}else r.push("null")}var a=i.join("")+"return ["+r.join(",")+"];";return this.fetch("execute",{code:a},e)},t.prototype.fetchSeq=function(t,e){for(var i=[],r=[],n=0;n<t.length;n++){var s=t[n];if(s){var o="res"+n;i.push("var "+o+"=API."+s.method+"("+JSON.stringify(this.enrichParams(s.method,s.params))+");"),r.push(""+o)}else r.push("null")}var a=i.join("")+"return ["+r.join(",")+"];";return this.fetch("execute",{code:a},e)},t}(),f=function(){function t(e,i){this.invalidateTimeout=e,this.cache=a.createStore(t.CACHE_DB_NAME,"api-cache-"+i)}return t.prototype.get=function(t){var e=this;return a.get(t,this.cache).then((function(i){if(void 0!==i){if(!(i.expiresAt<Date.now()))return setTimeout((function(){a.del(t,e.cache).catch((function(){}))}),Date.now()-i.expiresAt),i.response;a.del(t,e.cache).catch((function(){}))}})).catch((function(){}))},t.prototype.set=function(t,e){var i=this,r={response:e,expiresAt:Date.now()+this.invalidateTimeout};return a.set(t,r,this.cache).then((function(){setTimeout((function(){a.del(t,i.cache).catch((function(){}))}),i.invalidateTimeout)})).catch((function(){}))},t.CACHE_DB_NAME="reforged-db-v1",t}();function p(t){return new Promise((function(e){return setTimeout(e,t)}))}},91747:(t,e,i)=>{"use strict";i.d(e,{BrowserNotifications:()=>n});var r=i(12202),n=function(){var t=this;this.getState=function(){var e;return(null===(e=window.pushNotifier)||void 0===e?void 0:e.loadEndpoint())||window.ls.get("im_ui_notify_off")?"external":t.isBrowserNotificationsEnabled()},this.onChange=function(e){return e&&!t.isBrowserNotificationsEnabled()?new Promise((function(e){window.DesktopNotifications.requestPermission((function(){t.statlogsBrowserNotificationsOn(),e("external")}))})):!e&&t.isBrowserNotificationsEnabled()?(window.ls.set("im_ui_notify_off",1),t.statlogsBrowserNotificationsOff(),Promise.resolve(!1)):Promise.resolve(e)},this.onExternal=function(){return window.nav.go("/settings?act=notify")},this.isBrowserNotificationsEnabled=function(){return window.DesktopNotifications.supported()&&!window.DesktopNotifications.checkPermissionNeeded()&&!window.ls.get("im_ui_notify_off")},this.statlogsBrowserNotificationsOn=function(){(0,r.statlogsProbValueEvent)(1,"im_browser_notifications_on",1)},this.statlogsBrowserNotificationsOff=function(){(0,r.statlogsProbValueEvent)(1,"im_browser_notifications_off",1)}}},97138:(t,e,i)=>{"use strict";i.d(e,{GeoLocation:()=>s});var r=i(70655),n=i(66372),s=function(){function t(){}return t.prototype.get=function(){return new Promise((function(t){(0,n.sendLocationFromKeyboard)((function(e){var i=(0,r.__read)(e,2)[1],n=(0,r.__read)(i.split("_"),2),s=n[0],o=n[1];t([s,o])}))}))},t}()},59003:(t,e,i)=>{"use strict";i.d(e,{Idle:()=>n});var r=i(70655),n=function(t){var e=this;this.logger=t,this.listeners=new Set,this.isIdle=function(){return void 0===e.timeoutId},this.subscribe=function(t){return e.listeners.add(t),function(){e.listeners.delete(t)}},this.onVisibilityChange=function(){document.hidden?(document.removeEventListener("mousemove",e.onActive),document.removeEventListener("keydown",e.onActive,!0),e.onIdle()):(document.addEventListener("mousemove",e.onActive),document.addEventListener("keydown",e.onActive,!0),e.onActive())},this.onIdle=function(){e.timeoutId&&(clearTimeout(e.timeoutId),e.timeoutId=void 0,e.notify())},this.onActive=function(){var t=void 0!==e.timeoutId;e.timeoutId&&clearTimeout(e.timeoutId),e.timeoutId=window.setTimeout(e.onIdle,3e4),t||e.notify()},this.notify=function(){var t,i;e.logger.info("[IDLE]","user became "+(e.isIdle()?"idle":"active"));try{for(var n=(0,r.__values)(e.listeners),s=n.next();!s.done;s=n.next())(0,s.value)(e.isIdle())}catch(e){t={error:e}}finally{try{s&&!s.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}},this.onVisibilityChange(),document.addEventListener("visibilitychange",this.onVisibilityChange)}},2508:(t,e,i)=>{"use strict";i.d(e,{Logger:()=>s});var r=i(70655),n=i(21422),s=function(){var t=this;this.visible=!1,this.configureScope=function(){},this.info=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];t.visible&&console.log.apply(console,(0,r.__spreadArray)([],(0,r.__read)(e),!1))},this.error=function(t,e){e?console.error(t,e):console.error(t);var i=function(t){(0,n.logError)(t,{environment:"messenger"})};if(e instanceof Error){var r=new Error(t+" "+e.message);return r.name=e.name,r.stack=e.stack,i(r)}if("string"==typeof e)return i(new Error(t+" "+e));if(e&&"api_error"===e.type){var s=JSON.stringify(e.error);return i(new Error(t+" "+s))}return i(new Error(t))},this.show=function(){t.visible=!0},this.hide=function(){t.visible=!1}}},86204:(t,e,i)=>{"use strict";i.d(e,{Navigate:()=>c});var r=i(25489),n=i(54612),s=i(93560),o=i(13165),a=i(26338),u=i(51225),c=function(){function t(){}return t.prototype.checkIsolation=function(){return!1},t.prototype.openApp=function(t){(0,s.showWiki)({w:t})},t.prototype.getProfileLink=function(t){return(0,a.isUserPeer)(t)?"/id"+t:(0,a.isCommunityPeer)(t)?"/club"+Math.abs(t):(0,a.isContactPeer)(t)?"/im?sel=mr"+(t-1e9):"/im?sel="+t},t.prototype.openLink=function(t,e,i){if(!(i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){if(i.preventDefault(),e)switch(e.kind){case"peer":break;case"attachMedia":if("Photo"===(a=e.attach).kind)return void(0,s.showPhoto)(a.ownerId+"_"+a.id,a.messageAccessKey||a.accessKey||"",{queue:1},i.nativeEvent);if("Video"===a.kind)return void(0,r.showVideo)(a.ownerId+"_"+a.id,a.accessKey||"",{autoplay:1,minimized:0,module:"",queue:1},i.nativeEvent);case"attach":var a;switch((a=e.attach).kind){case"Poll":return void(0,s.showWiki)({w:"poll"+a.ownerId+"_"+a.id},!1,i.nativeEvent,{queue:1});case"Story":return void(0,o.showStory)("story"+a.ownerId+"_"+a.id+"/"+a.ownerId+"_"+a.id);case"Gift":return a.isStickerStyle&&a.id?window.Emoji.clickSticker(Math.abs(a.id)):void(0,n.showBox)("al_gifts.php",{act:"box",tab:"sent",mid:window.vk.id},{cache:1,stat:["gifts.css",window.jsc("web/gifts.js")]});case"MoneyTransfer":return void(0,n.showBox)("al_payments.php?act=money_transfer_history_box",{});case"Geo":return void(0,n.showBox)("al_places.php",{act:"show_photo_place",lat:a.coordinates.latitude,long:a.coordinates.longitude,provider:4});case"MiniApp":var u=a.appLink.replace("/","");return void(0,s.showWiki)({w:u,app_ref:"snippet_im"},!1,i.nativeEvent)}}window.nav.go(t)}},t.prototype.getAttachLink=function(t){return u.link(t)},t.prototype.getChannelLink=function(){return""},t}()},70894:(t,e,i)=>{"use strict";i.d(e,{Notification:()=>r});var r=function(){function t(){}return t.prototype.notify=function(){},t.prototype.playSound=function(){},t.prototype.setCounters=function(){},t}()},89754:(t,e,i)=>{"use strict";i.d(e,{FCVoicePlayer:()=>l,FCPlayer:()=>f});var r=i(70655),n=i(134),s=i(93560),o=i(67766),a=i(31811),u=function(t,e){var i=(0,r.__read)(t,25),n=i[0],s=i[1];return{kind:"Audio",id:s+"_"+n,ownerId:s,url:i[2],title:i[3],artist:i[4],duration:i[5],albumId:i[6],subtitle:i[16],trackCode:i[20],contentRestricted:i[21],albumPartNumber:i[22],accessKey:i[24],progress:e}},c=function(t){var e=(0,r.__read)(t,2),i=e[0];return e[1]+"_"+i},d=function(t){var e=t.id,i=t.ownerId,n=t.url,s=t.title,o=t.artist,a=t.duration,u=t.albumId,c=t.subtitle,d=t.trackCode,l=t.contentRestricted,f=t.albumPartNumber,p=t.accessKey;return[(0,r.__read)(e.split("_"),2)[1],i,n,s,o,a,u||0,0,"",0,0,"im","[]","/////"+p+"/","",{},c||"","","",!1,d||"",l||0,f||0,0,p||"",!1]},l=function(t){function e(){var e=t.call(this)||this;return e.state={status:"stopped",playedTimeAccumulator:{}},window.AudioMessagePlayer.events.on("playing",(function(t){if(e.state.currentAudioTrack&&t!==e.audioEl){var i=e.state.currentAudioTrack;e.state={status:"stopped",playedTimeAccumulator:{},currentAudioTrack:(0,r.__assign)((0,r.__assign)({},i),{progress:0})},e.emit("stateupdated",e.state),e.audioEl=void 0,e.state={status:"stopped",playedTimeAccumulator:{}},e.emit("stateupdated",e.state)}if(t===e.audioEl&&"string"==typeof t.dataset.audioTrack){i=JSON.parse(t.dataset.audioTrack);e.state=(0,r.__assign)((0,r.__assign)({},e.state),{status:"playing",currentAudioTrack:i}),e.emit("stateupdated",e.state)}})),window.AudioMessagePlayer.events.on("progress",(function(t,i){if(e.audioEl===i&&e.state.currentAudioTrack){var n=e.state.currentAudioTrack;e.state=(0,r.__assign)((0,r.__assign)({},e.state),{currentAudioTrack:(0,r.__assign)((0,r.__assign)({},n),{progress:t})}),e.emit("stateupdated",e.state)}})),window.AudioMessagePlayer.events.on("fc_paused",(function(t){t===e.audioEl&&"playing"===e.state.status&&(e.state=(0,r.__assign)((0,r.__assign)({},e.state),{status:"paused"}),e.emit("stateupdated",e.state))})),window.AudioMessagePlayer.events.on("finished",(function(t){if(t===e.audioEl&&e.state.currentAudioTrack){var i=e.state.currentAudioTrack;e.state={status:"ended",playedTimeAccumulator:{},currentAudioTrack:(0,r.__assign)((0,r.__assign)({},i),{progress:0})},e.emit("stateupdated",e.state),e.state={status:"stopped",playedTimeAccumulator:{},currentAudioTrack:(0,r.__assign)((0,r.__assign)({},i),{progress:0})},e.emit("stateupdated",e.state)}})),e}return(0,r.__extends)(e,t),e.prototype.play=function(t){var e;if(t.id===(null===(e=this.state.currentAudioTrack)||void 0===e?void 0:e.id)&&"paused"===this.state.status)return this.state.currentAudioTrack=t,void this.resume();if(this.state.currentAudioTrack&&t.id!==this.state.currentAudioTrack.id){var i=this.state.currentAudioTrack;this.state={status:"stopped",playedTimeAccumulator:{},currentAudioTrack:(0,r.__assign)((0,r.__assign)({},i),{progress:0})},this.emit("stateupdated",this.state)}var n=t.linkMp3,s=t.linkOgg,o=t.duration,a=t.id,u='<div id="audiomsgpl_'+window.vk.id+"_"+a+'" class="audio-msg-track " data-duration="'+o+'" data-mp3="'+n+'" data-ogg="'+s+'"> <button class="audio-msg-track--btn"></button> <button class="audio-msg-track--transcriptToggle _msg_asr_toggle"> <span class="audio-msg-track--transcriptToggleShow"></span> <span class="audio-msg-track--transcriptToggleHide"></span> </button> <div class="audio-msg-track--duration"></div> <div class="audio-msg-track--wave-wrapper"> <svg class="audio-msg-track--wave"></svg></div></div>';this.audioEl=ce("div",{innerHTML:u}).firstChild,this.audioEl.dataset.audioTrack=JSON.stringify(t),this.state={status:"playing",playedTimeAccumulator:{},currentAudioTrack:t},this.emit("stateupdated",this.state),window.AudioMessagePlayer.togglePlay(this.audioEl),window.AudioMessagePlayer.seek(t.progress)},e.prototype.pause=function(){this.audioEl&&window.AudioMessagePlayer.toggle()},e.prototype.stop=function(){this.audioEl&&window.AudioMessagePlayer.toggle()},e.prototype.resume=function(){this.audioEl&&this.state.currentAudioTrack&&(this.audioEl.dataset.audioTrack=JSON.stringify(this.state.currentAudioTrack),window.AudioMessagePlayer.seek(this.state.currentAudioTrack.progress),window.AudioMessagePlayer.toggle())},e.prototype.getState=function(){return this.state},e.prototype.playNext=function(){return!1},e.prototype.init=function(){},e}(a.EventBus),f=function(t){function e(){var e=t.call(this)||this;return e.vkComPlayer=(0,s.getAudioPlayer)(),e.state={status:"stopped",playedTimeAccumulator:{}},e.vkComPlayer.on(e,n.events.PLAY_REQUESTED,(function(t){if(t){if(e.state.currentAudioTrack){var i=e.state.currentAudioTrack;e.state={status:"stopped",playedTimeAccumulator:{},currentAudioTrack:(0,r.__assign)((0,r.__assign)({},i),{progress:0})},e.emit("stateupdated",e.state)}var n=u(t,0);e.state={status:"playing",playedTimeAccumulator:{},currentAudioTrack:n},e.emit("stateupdated",e.state)}})),e.vkComPlayer.on(e,n.events.PLAY,(function(t){t&&(e.state.currentAudioTrack&&e.state.currentAudioTrack.id===c(t)||(e.state.currentAudioTrack=u(t,0)),e.state=(0,r.__assign)((0,r.__assign)({},e.state),{status:"playing"}),e.emit("stateupdated",e.state))})),e.vkComPlayer.on(e,n.events.PAUSE,(function(t){t&&(e.state.currentAudioTrack&&e.state.currentAudioTrack.id===c(t)||(e.state.currentAudioTrack=u(t,0)),e.state=(0,r.__assign)((0,r.__assign)({},e.state),{status:"paused"}),e.emit("stateupdated",e.state))})),e.vkComPlayer.on(e,[n.events.STOP,n.events.ENDED],(function(t){t&&(e.state.currentAudioTrack&&e.state.currentAudioTrack.id===c(t)||(e.state.currentAudioTrack=u(t,1)),e.state=(0,r.__assign)((0,r.__assign)({},e.state),{status:"stopped"}),e.emit("stateupdated",e.state))})),e.vkComPlayer.on(e,n.events.PROGRESS,(function(t,i){if(t&&"number"==typeof i){e.state.currentAudioTrack&&e.state.currentAudioTrack.id===c(t)||(e.state.currentAudioTrack=u(t,i)),"stopped"===e.state.status&&i&&(e.state.status="paused");var n=(0,r.__assign)({},e.state),s=n.currentAudioTrack;e.state=(0,r.__assign)((0,r.__assign)({},n),{currentAudioTrack:(0,r.__assign)((0,r.__assign)({},s),{progress:i})}),e.emit("stateupdated",e.state)}})),e}return(0,r.__extends)(e,t),e.prototype.play=function(t,e){var i=t.progress,r=this.vkComPlayer.getPlaylist(o.AudioPlaylist.TYPE_TEMP,window.vk.id,"im"+(t.peerId||""));r.mergeWith({list:null==e?void 0:e.getConvoAudiosList().map(d)}),this.vkComPlayer.play(d(t),r,"im"),i>0&&this.vkComPlayer.seek(i),this.vkComPlayer.play()},e.prototype.pause=function(){this.vkComPlayer.pause()},e.prototype.stop=function(){this.vkComPlayer.stop()},e.prototype.resume=function(){this.vkComPlayer.resume()},e.prototype.getState=function(){return this.state},e.prototype.playNext=function(){return!1},e.prototype.init=function(){},e}(a.EventBus)},7660:(t,e,i)=>{"use strict";i.d(e,{ProxyStorage:()=>s});var r=i(70655),n=i(17254),s=function(t){var e=this;this.identify=function(t){e.storage.identify(t)},this.get=function(t){return"settings-sound-notifications-on"===t?!window.ls.get("sound_notify_off"):e.storage.get(t)},this.set=function(t,i){"settings-sound-notifications-on"!==t?e.storage.set(t,i):window.ls.set("sound_notify_off",Number(!i))},this.del=function(t){"settings-sound-notifications-on"!==t?e.storage.del(t):window.ls.remove("sound_notify_off")},this.getIDB=function(t){return(0,r.__awaiter)(e,void 0,Promise,(function(){return(0,r.__generator)(this,(function(e){return[2,this.storage.getIDB(t)]}))}))},this.setIDB=function(t,i){return(0,r.__awaiter)(e,void 0,Promise,(function(){return(0,r.__generator)(this,(function(e){return this.storage.setIDB(t,i),[2]}))}))},this.delIDB=function(t){return(0,r.__awaiter)(e,void 0,Promise,(function(){return(0,r.__generator)(this,(function(e){return this.storage.delIDB(t),[2]}))}))},this.storage=new n.Storage(t),this.dbName=t}},34943:(t,e,i)=>{"use strict";i.d(e,{SharedEngine:()=>s});var r=i(70655),n=i(11719),s=function(t,e){var i=this;if(this.logger=t,this.isMaster=e,this.queued={kind:"Buffer",buffer:[]},this.ts=0,this.pts=0,this.connect=function(t){return i.ts=t.ts,i.pts=t.pts,i.engine.connect(t)},this.poll=function(){return i.engine.poll()},this.isConnected=function(){return i.engine.isConnected()},this.switch=function(t){if(i.broadcast)switch(i.logger.info("[SHARED ENGINE] switch to",t),t){case"master":switch(i.queued.kind){case"Callback":i.queued.cancel();break;case"Buffer":i.queued.buffer=[]}return void(i.isMaster=!0);case"slave":return void(i.isMaster=!1)}},this.fetch=function(t,e,r){return Promise.resolve().then((function(){if(!i.isMaster)return i.fetchSlave();var n="number"==typeof e.ts?e.ts:1/0;return i.logger.info("[SHARED ENIGNE]",i.ts,n),n>i.ts?Promise.resolve({failed:1}):i.fetchMaster(t,e,r)})).then((function(t){return"ts"in t&&(i.ts=t.ts,i.pts=t.pts),t}))},this.fetchMaster=function(t,e,r){i.logger.info("[SHARED ENGINE] fetch master",t);var n=new Headers;n.append("Connection","keep-alive"),n.append("Content-Type","application/x-www-form-urlencoded");var s=Object.keys(e).reduce((function(t,i){return void 0!==e[i]&&t.append(i,e[i]),t}),new URLSearchParams);return fetch(t,{method:"POST",signal:r,headers:n,body:s}).then((function(t){if(!t.ok)throw new Error("ServerError "+t.status);return t.json()})).then((function(t){var e=i.ts;return setTimeout((function(){i.broadcast&&i.broadcast({type:"updates",payload:{tsOld:e,data:t}})})),t}))},this.fetchSlave=function(){if("Callback"===i.queued.kind)return Promise.reject(new Error("vkcom engine slave double fetch error"));i.logger.info("[SHARED ENGINE] fetch slave");var t=i.queued.buffer.shift(),e=t?Promise.resolve(t):new Promise((function(t){i.queued={kind:"Callback",push:function(e){i.queued={kind:"Buffer",buffer:[]},t(e)},cancel:function(){i.queued={kind:"Buffer",buffer:[]},t({tsOld:i.ts,data:{ts:i.ts,pts:i.pts,updates:[]}})}}}));return e.then((function(t){return t.tsOld>i.ts?(i.queued={kind:"Buffer",buffer:[]},Promise.resolve({failed:1})):t.data}))},this.engine=new n.Engine(this.logger,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return i.fetch.apply(i,(0,r.__spreadArray)([],(0,r.__read)(t),!1))})),this.version=this.engine.version,void 0!==window.BroadcastChannel){var s=new BroadcastChannel("messenger-shared-engine");this.broadcast=function(t){return s.postMessage(t)},s.onmessage=function(t){if("updates"===t.data.type){var e=t.data.payload;if(i.isMaster)return;if(i.logger.info("[SHARED ENGINE] broadcast received",e),!i.isConnected())return;return"Callback"===i.queued.kind?void i.queued.push(e):void i.queued.buffer.push(e)}i.logger.error("[SHARED ENGINE] Неизвестный бродкаст")}}}},46767:(t,e,i)=>{"use strict";i.d(e,{SharedQueue:()=>r});var r=function(){function t(){var t=this;this.MAX_BUFFER_SIZE=50,this.unsubscribe=null,this.empty=function(){return{kind:"Buffer",buffer:[]}},this.poll=function(){if("Callback"===t.queued.kind)return t.queued.reject("Queue.poll вызван дважды!"),new Promise((function(e,i){t.queued={kind:"Callback",resolve:e,reject:i}}));var e=t.queued.buffer.shift();if(e)return Promise.resolve(e);if(!t.isConnected())throw new Error("Queue.connect еще не был вызван!");return new Promise((function(e,i){t.queued={kind:"Callback",resolve:e,reject:i}}))},this.disconnect=function(){switch(t.unsubscribe&&t.unsubscribe(),t.unsubscribe=null,t.queued.kind){case"Callback":t.queued.resolve({kind:"Disconnected",reason:"manual"}),t.queued=t.empty();break;case"Buffer":t.queued.buffer.push({kind:"Disconnected",reason:"manual"});break;default:t.queued}},this.isConnected=function(){return!!t.unsubscribe},this.queued=this.empty()}return t.prototype.connect=function(){var t=this;if(!this.isConnected()){this.queued=this.empty();var e=window.Notifier.getEventQueueInstance();this.unsubscribe=e.subscribe((function(e){var i={kind:"Batch",ts:"1",events:[e]};if("Callback"===t.queued.kind){var r=t.queued.resolve;return t.queued=t.empty(),void r(i)}if(t.queued.buffer.length>=t.MAX_BUFFER_SIZE)return t.unsubscribe&&t.unsubscribe(),t.unsubscribe=null,void t.queued.buffer.push({kind:"Disconnected",reason:"backpressure"});t.queued.buffer.push(i)}))}},t}()},36223:(t,e,i)=>{"use strict";i.d(e,{Stats:()=>u});var r=i(40441),n=i(24702),s=i(46133),o=i(49171),a=new(function(){function t(){this.productStatCollector=new o.ProductionStatCollector,this.actionStatCollector=new o.ActionStatCollector(this.productStatCollector)}return t.prototype.logEvent=function(t){var e={type:"type_settings_changes_item",type_settings_changes_item:t};this.actionStatCollector.logEvent(e)},t}()),u=function(){this.logEvent=function(t,e){!function(t,e){if("type_action"===t){var i=e;switch(i.type){case"type_ab_custom_metrics_item":r.customMetricsCollector.logEvent(i.type_ab_custom_metrics_item);break;case"type_messaging_action_item":n.messagingActionItemStatCollector.logEvent(i.type_messaging_action_item);break;case"type_messaging_audio_message_item":s.audioMessageStatCollector.logEvent(i.type_messaging_audio_message_item);break;case"type_settings_changes_item":a.logEvent(i.type_settings_changes_item)}}}(t,e)}}}}]);try{stManager.done("dist/3f009728a63528384f06cb38ea4ede79.f4143cc464d628c32ecf.js")}catch(t){}
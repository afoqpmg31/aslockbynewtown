/**
	コンテンツ取得
 */
function getRunningPosition() {
	var request = new XMLHttpRequest();
	request.open("get", "https://www.jreast.co.jp/traininfo/runnningposition.json", false);
	request.onload = function (event) {
		if (request.readyState === 4) {
			if (request.status === 200) {
				setDataRP(request.responseText); // => "OK"
			} else {
				console.log(request.statusText); // => Error Message
			}
		}
	};
	request.onerror = function (event) {
	  console.log(event.type); // => "error"
	};
	request.send();
}
function setDataRP(data) {
	const json = JSON.parse(data);
	space = document.querySelector('.afterwriteRP');
	var html = '';
	var zaisenInfo='';
	for(var i = 0 ;i < json.length; i++){
		if(json[i].metainfo.dummy==''){
			zaisenInfo=json[i].content;
		}
	}

	html+='                    <section id="traininfo_webapp">'
	html+='                        <div class="appSns_infoBox">'
	html+='                            <h2 class="appSns_infoBox_h">情報はアプリ・ソーシャルメディアでもご確認いただけます。</h2>'
	if(zaisenInfo!=''){
	html+='                            <div class="sns_emText">'+zaisenInfo+'</div>';
	}
	html+='                            <ul class="appSns_infoBox_list">'
	html+='                                <li>'
	html+='                                    <a href="https://jreast-app.onelink.me/AUmo?c=jreappstart&pid=jreast-app&af_ios_url=https%3A%2F%2Fitunes.apple.com%2Fjp%2Fapp%2Fapple-store%2Fid820004378%3Fpt%3D641888%26ct%3Djreastweb%26mt%3D8&af_android_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Djp.co.jreast%26referrer%3Dutm_source%253Djreastweb" target="_blank" rel="noopener">'
	html+='                                        <img src="/train_info/img/app-jreastapp.png" alt="JR東日本アプリのアイコン" class="appSns_img"><span class="screen-reader-text">別ウィンドウで開きます</span></a>'
	html+='                                    <div class="appSns_infoBox_right">'
	html+='                                        <h3 class="appSns_infoBox_list_h"><a href="https://jreast-app.onelink.me/AUmo?c=jreappstart&pid=jreast-app&af_ios_url=https%3A%2F%2Fitunes.apple.com%2Fjp%2Fapp%2Fapple-store%2Fid820004378%3Fpt%3D641888%26ct%3Djreastweb%26mt%3D8&af_android_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Djp.co.jreast%26referrer%3Dutm_source%253Djreastweb" target="_blank" rel="noopener">'
	html+='                                            JR東日本アプリ<span class="screen-reader-text">別ウィンドウで開きます</span></a></h3>'
	html+='                                        <p class="appSns_infoBox_text">'
	html+='                                            列車在線位置<br class="sp">'
	html+='                                            （首都圏）'
	html+='                                        </p>'
	html+='                                    </div>'
	html+='                                </li>'
	html+='                                <li>'
	html+='                                    <a href="http://doko-train.jp/" target="_blank" rel="noopener">'
	html+='                                        <img src="/train_info/img/logo-dokotore.png" alt="どこトレのアイコン" class="appSns_img"><span class="screen-reader-text">別ウィンドウで開きます</span></a>'
	html+='                                    <div class="appSns_infoBox_right">'
	html+='                                        <h3 class="appSns_infoBox_list_h"><a href="http://doko-train.jp/" target="_blank" rel="noopener">どこトレ<span class="screen-reader-text">別ウィンドウで開きます</span></a></h3>'
	html+='                                        <p class="appSns_infoBox_text">'
	html+='                                            列車在線位置<br class="sp">'
	html+='                                            （首都圏）'
	html+='                                        </p>'
	html+='                                    </div>'
	html+='                                </li>'
	html+='                                <li>'
	html+='                                    <a href="https://www.jreast.co.jp/t_i/">'
	html+='                                        <img src="/train_info/img/app-twitter.svg" alt="運行情報 公式Xのアイコン" class="appSns_img"></a>'
	html+='                                    <div class="appSns_infoBox_right">'
	html+='                                        <h3 class="appSns_infoBox_list_h"><a href="https://www.jreast.co.jp/t_i/">運行情報 公式X</a></h3>'
	html+='                                        <p class="appSns_infoBox_text">運行情報</p>'
	html+='                                    </div>'
	html+='                                </li>'
	html+='                                <li>'
	html+='                                    <a href="https://info.jreast-chat.com/" target="_blank" rel="noopener">'
	html+='                                        <img src="/train_info/img/app-kodomo.png" alt="JR東日本LINE公式アカウント" class="appSns_img"><span class="screen-reader-text">別ウィンドウで開きます</span></a>'
	html+='                                    <div class="appSns_infoBox_right">'
	html+='                                        <h3 class="appSns_infoBox_list_h"><a href="https://info.jreast-chat.com/" target="_blank" rel="noopener">JR東日本<br>'
	html+='                                            LINE公式アカウント<span class="screen-reader-text">別ウィンドウで開きます</span></a></h3>'
	html+='                                        <p class="appSns_infoBox_text">運行情報</p>'
	html+='                                    </div>'
	html+='                                </li>'
	html+='                            </ul>'
	html+='                            <p class="linkPage ta-r mt10"><a href="/train_info/#appWrap">アプリ詳細はこちら</a></p>'
	html+='                        </div>'
	html+='                    </section>'	
	space.insertAdjacentHTML('afterend', html);
}

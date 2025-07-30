﻿window.addEventListener('DOMContentLoaded' , () => {
/*アプリ・ソーシャルメディア*/
const appWrap = `
<h2 class="heading02 sp_font26">アプリ・ソーシャルメディア</h2>
<section>
	<div class="col2 mb10">
		<div class="cardsBox">
			<div class="dispFlex mb25">
				<p class="mt15 sp_mt10"><img class="auto" src="/train_info/img/app-jreastapp.png" width="60" height="60" alt="JR東日本アプリのアイコン"></p>
				<dl class="calc01 ml15">
					<dt class="fontBold font16 mb2p linkBlank02"><a href="https://jreast-app.onelink.me/AUmo?c=jreappstart&pid=jreast-app&af_ios_url=https%3A%2F%2Fitunes.apple.com%2Fjp%2Fapp%2Fapple-store%2Fid820004378%3Fpt%3D641888%26ct%3Djreastweb%26mt%3D8&af_android_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Djp.co.jreast%26referrer%3Dutm_source%253Djreastweb" target="_blank" rel="noopener">
						JR東日本アプリ<span class="screen-reader-text">別ウィンドウで開きます</span></a></dt>
					<dd>JR東日本管内の運行情報、首都圏の主な路線の列車の走行位置、時刻表・構内図、輸送障害発生時の振替輸送情報などをご案内しています。</dd>
				</dl>
			</div>
			<div class="dispFlex jcC">
				<p class="bnrLink"><a href="https://apps.apple.com/app/apple-store/id820004378?pt=641888&ct=jreastweb&mt=8" target="_blank" rel="noopener" title="App Storeからダウンロード"><img class="auto" src="/train_info/img/bnr-appstore.svg" alt="App Storeからダウンロード" width="110" height="41"><span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
				<p class="bnrLink ml2p"><a href="https://play.google.com/store/apps/details?id=jp.co.jreast&referrer=utm_source%3Djreastweb%26utm_medium%3Dbanner" target="_blank" rel="noopener" title="Google playで手に入れよう"><img class="auto" src="/train_info/img/bnr-googleplay.svg" alt="Google playで手に入れよう" width="135" height="40"><span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
			</div>
		</div>
		<div class="cardsBox">
			<div class="dispFlex mb45">
				<p class="mt15 sp_mt10"><img class="auto" src="/train_info/img/app-kodomo.png" width="60" height="60" alt="JR東日本LINE公式アカウントのアイコン"></p>
				<dl class="calc01 ml15">
					<dt class="fontBold font16 mb2p linkBlank02"><a href="https://info.jreast-chat.com/" target="_blank" rel="noopener">JR東日本LINE公式アカウント<span class="screen-reader-text">別ウィンドウで開きます</span></a></dt>
					<dd>ご登録いただいたMy路線の運行情報をご案内しています。My路線は4つまで登録可能です。</dd>
				</dl>
			</div>
			<div class="dispFlex jcC">
				<p class="bnrLink ml2p"><a href="https://line.me/R/ti/p/%40jreastcb" target="_blank" rel="noopener" title="友達追加"><img class="auto" src="/train_info/img/ja.png" alt="友達追加" width="135" height="40"><span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
			</div>
		</div>
	</div>
	<div class="col2">
		<div class="cardsBox">
			<div class="dispFlex">
				<p class="mt15 sp_mt10"><img class="auto" src="/train_info/img/app-twitter.svg" width="60" height="60" alt="運行情報 公式Xのアイコン"></p>
				<dl class="calc01 ml15">
					<dt class="fontBold font16 mb2p link02"><a href="https://www.jreast.co.jp/t_i/">運行情報 公式X</a></dt>
					<dd>JR東日本管内の運行情報をXでご案内しています。</dd>
				</dl>
			</div>
		</div>
		<div class="cardsBox">
			<div class="dispFlex">
				<p class="mt15 sp_mt10"><img class="auto" src="/train_info/img/logo-dokotore.png" width="60" height="60" alt="どこトレのアイコン"></p>
				<dl class="calc01 ml15">
					<dt class="fontBold font16 mb2p linkBlank02"><a href="http://doko-train.jp/" target="_blank" rel="noopener">どこトレ<span class="screen-reader-text">別ウィンドウで開きます</span></a></dt>
					<dd>地方線区を中心に在来線58路線及びBRT区間の運行状況、運休情報、時刻表情報、過去の遅延情報をご案内しています。</dd>
				</dl>
			</div>
		</div>
	</div>
	<div class="grayBox pt10 pr5 pb10 pl5">
		<ul>
			<li class="linkBlank ml25 sp_ml0"><a href="https://jreastfaq.jreast.co.jp/category/show/2?site_domain=default" target="_blank" rel="noopener">運行情報についてよくいただくご質問<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
		</ul>
	</div>
	<p class="indent01 mt30">※このページの情報を無断転載、複写または電磁媒体等に加工することを禁じます。</p>
</section>
`;
if(document.getElementById('appWrap')) {
	document.getElementById('appWrap').insertAdjacentHTML('beforeend' , appWrap);
}

//入場規制アコーディオン
const el_acc_btn = document.querySelectorAll('.js_acc > dt');
for (let i = 0; i < el_acc_btn.length; i++) {
	el_acc_btn[i].addEventListener('click' , function(e) {
		let thisBtn = e.currentTarget;
		if(thisBtn.classList.contains('is-active')) {
			thisBtn.classList.remove('is-active');
			thisBtn.nextElementSibling .classList.remove('is-show');
		} else {
			thisBtn.classList.add('is-active');
			thisBtn.nextElementSibling .classList.add('is-show');
		}
	});
}

//お知らせ欄の表示
const el_noticeBox = document.getElementById('train_noticeBox');
if(el_noticeBox) {
	const el_infoBoxList = el_noticeBox.getElementsByClassName('informationBox');
	for (let i = 0; i < el_infoBoxList.length; i++) {
		if(el_infoBoxList[i].childElementCount === 0) {
			el_noticeBox.classList.add('is-hidden');
		}
	}
}

/*TOP SP表示の提供エリア アコーディオン*/
if(window.matchMedia('(max-width:750px)').matches)  {
	const temp_acc_btn = document.getElementsByClassName('accBtn');
	for (let i = 0; i < temp_acc_btn.length; i++) {
		temp_acc_btn[i].addEventListener('click' , (e) => {
			let thisBtn = e.currentTarget;
			if(thisBtn.classList.contains('is-active')) {
				thisBtn.classList.remove('is-active');
				thisBtn.nextElementSibling.classList.remove('is-show');
			} else {
				thisBtn.classList.add('is-active');
				thisBtn.nextElementSibling.classList.add('is-show');
			}
		});
	}
}

/*もっと見るボタンアコーディオン*/
const temp_accMore_btn = document.getElementsByClassName('accMore_btn');
const temp_accMore_cont = document.querySelectorAll('.accMore_cont tbody tr:nth-of-type(n+8)');
for (let i = 0; i < temp_accMore_btn.length; i++) {
	temp_accMore_btn[i].addEventListener('click' , (e) => {
		let thisBtn = e.currentTarget;
		if(thisBtn.classList.contains('is-active')) {
			thisBtn.classList.remove('is-active');
			thisBtn.textContent = 'もっと見る';
			for (let i = 0; i < temp_accMore_cont.length; i++) {
				temp_accMore_cont[i].classList.remove('is-show');
			}
		} else {
			thisBtn.classList.add('is-active');
			thisBtn.textContent = '閉じる';
			for (let i = 0; i < temp_accMore_cont.length; i++) {
				temp_accMore_cont[i].classList.add('is-show');
			}
		}
	});
}


/*非表示ボタン*/
const temp_accdisp_btn = document.getElementsByClassName('acc_dispBtn');
for (let i = 0; i < temp_accdisp_btn.length; i++) {
	temp_accdisp_btn[i].addEventListener('click' , (e) => {
		let thisBtn = e.currentTarget;
		if(thisBtn.classList.contains('is-active')) {
			thisBtn.classList.remove('is-active');
			thisBtn.nextElementSibling.classList.remove('is-show');
			thisBtn.getElementsByClassName('accTxt')[0].textContent = '表示';
		} else {
			thisBtn.classList.add('is-active');
			thisBtn.nextElementSibling.classList.add('is-show');
			thisBtn.getElementsByClassName('accTxt')[0].textContent = '非表示';
		}
	});
}

});


/* すべてが読み込まれたら実行 */
window.addEventListener('load' , () => {
	/*運行情報・運休情報マップ枠*/
	const operation_statusImage = document.getElementById('operation_status_image');
	if(operation_statusImage) {

		// 運行情報・運休情報マップ画像を取得
		const img = new Image();
		img.src = operation_statusImage.getAttribute('src');

		// オリジナルサイズを取得
		const w = img.width;
		const h = img.height;

		// 画像サイズが1x1の場合
		if( w == 1 && h == 1 ) {
			operation_statusImage.classList.add('operation_status_image-none');// 非表示
		} else {// そうでない場合
			operation_statusImage.classList.add('operation_status_image-show');// 表示
		}
	}
});
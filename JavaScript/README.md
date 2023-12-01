
# **Java Script**
<br/>

## 목차


- [Vanilla JS를 활용 한 예시](#vanilla-js를-활용-한-예시)
   1. [tap버튼\_클릭시\_cont\_전환](#tap버튼_클릭시_cont_전환)
   2. [tap버튼\_클릭시\_스크롤\_이동](#tap버튼_클릭시_스크롤_이동)
   3. [스크롤할때\_class\_핸들링](#스크롤할때_class_핸들링)
   <br/><br/>
- [Vanilla JS 적용 한 페이지](#Vanilla-JS-적용-한-페이지)
	1. [슬덩라스트게임 뽑기](#슬덩라스트게임_뽑기)

--------------------------------------------------------------------

<br/>
<br/>

## Vanilla JS를 활용 한 예시
<br/>

### tap버튼_클릭시_cont_전환

<br/>

> 개요
- Tap 버튼 클릭 시 클릭한 버튼에 해당하는 내용을 출력<br/>
- `Vanilla JS`만 사용하여 제작
<br/>
<br/>

> 코드

``` javascript
	//Java Script

	const tapBtnAll = document.querySelectorAll('.tap__btn a');//탭버튼 전체  

	for (const tapBtn of tapBtnAll) {	   
		tapBtn.addEventListener('click' , () => {
		   //console.log(tapBtnAll)
						 
			const tapBtnAllNum = tapBtnAll.length;//탭버튼 전체갯수
			const tapBtnHref =  tapBtn.getAttribute('href');//탭버튼 href  
			const tapCon = document.querySelector(`${tapBtnHref}`);//선택자 지정
			const tapConAll = document.querySelectorAll('.tap__con > div');//탭 con 전체
			const tapConAllNum = tapBtnAll.length;//탭 con 전체갯수
			
			for(let i = 0 ; i < tapBtnAllNum ; i++){
				 tapBtnAll[i].classList.remove('on');//$('.tap__btn a').removeClass('on')
			}
			for(let i = 0 ; i < tapConAllNum ; i++){
				tapConAll[i].classList.remove('on');//$('.tap__con > div').removeClass('on')
			}
			tapBtn.classList.add('on');//$(this).addClass('on')
			tapCon.classList.add('on');//('.tap__con > div').addClass('on')
		   
			 //console.log(tapBtn)
		});
	}

```
<br/>

------------------------------------------------------------------------

<br/>
<br/>

### tap버튼_클릭시_스크롤_이동

<br/>


> 개요
- Tap 버튼 클릭 시 클릭한 버튼에 해당하는 내용으로 스크롤 이동<br/>
- `Vanilla JS`만 사용하여 제작
<br/>
<br/>

> 코드

``` javascript
	//Java Script

	function gotoScroll(gotoId){

		const wT = document.documentElement.scrollTop;//
		const headerH = document.querySelector('#header').getBoundingClientRect().height;//header 높이값
		const tapCon = document.querySelector(gotoId);//스크롤 대상
		const tapConRect = tapCon.getBoundingClientRect();
		const tapConT = tapConRect.top ;
		const absoluteTop  = wT + tapConT - headerH ;// 절대 좌표

		//console.log(tapConRect)
		window.scroll({
			top:absoluteTop,
			behavior: 'smooth'
		})
	}   

```
<br/>

------------------------------------------------------------------------

<br/>
<br/>

### 스크롤할때_class_핸들링

<br/>


> 개요
- 스크롤 이동 시 보여지는 해당 콘텐츠에 class를 컨트롤 한다<br/>
- `Vanilla JS`만 사용하여 제작
<br/>
<br/>

> 코드

``` javascript
	//Java Script

	document.addEventListener('scroll',()=>{
		const wT = document.documentElement.scrollTop;//
		const wH = window.innerHeight * 0.6 ;//window 높이값 * 0.6
		const banner = document.querySelectorAll('.banner');//모든 배너(선택자 변경가능)
		const num = banner.length

		for(let  i = 0; i < num; i++){
			const bannerRect = banner[i].getBoundingClientRect();
			const bannerT = bannerRect.top ;
			const absoluteTop  = wT + bannerT - wH ;// 절대좌표(클래스 들어오는 시점)
			
			if(wT > absoluteTop){
				banner[i].classList.add('on');
			}//else{banner[i].classList.remove('on');}//스크롤 업 할때 클래스 빼기
		}
		
	});

```
<br/>

------------------------------------------------------------------------
<br/><br/>

## Vanilla JS 적용 한 페이지
<br/>

### 슬덩라스트게임 뽑기

<br/>

> 개요
- 카드를 클릭 하여 랜덤으로 값을 출력
- `css애니메이션, js`를 활용한 인터랙션
-  최초 JQuery로 제작(주석처리) 추후 `Vanilla JS`로 변경
<br/>
<br/>

> 코드
```html
	<div class="last-game">
		<audio src="src/bgm.m4a" loop autoplay controls></audio>
		<div class="bg-box">
			<div class="black left"></div>
			<div class="black right"></div>
			<div class="center"></div>
			<div class="center bk"></div>
			<div class="logo"><img src="src/title.jpg" alt=""></div>			
		</div>
		<div class="result-box">
			<div class="result fadeIn">
				<div class="front on">
					<img src="src/business_card1.jpg" alt="" >
				</div>
				<div class="back">
					<img src="src/business_card2.jpg" alt="" >
					<ul class="result__con">
						<li>No 밴</li>
						<li>밴</li>
						<li>더블밴</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
```
``` css
	*{margin: 0;padding: 0;}
	.bg-box{
		position: fixed;
		width: 100vw;
		height: 100vh;
		font-size: 0;
		overflow: hidden;
		background: rgb(0,0,0) url(src/bg.jpg) center / 1200px no-repeat;
	}
	.bg-box > div.black{
		position: relative;
		width: 50%;
		height: 100%;
		background-color: rgb(0,0,0);
		display: inline-block;
		transition: all 1.5s;
	}
	.bg-box > div.left{
		transform: translateX(-120%);
	}
	.bg-box > div.right{
		transform: translateX(120%);
	}
	.bg-box > div.center{
		position: fixed;
		width: 100%;
		height: 0%;
		background-color: rgb(255,255,255);
		z-index: 1;
		top: 50%;
		transform: translateY(-50%);
		transition: all 1s;
	}
	.bg-box > div.center.bk{
		z-index: 2;
		background-color: rgb(0,0,0);
		transition-delay: 1.2s;
	}
	.bg-box > div.center.on{height: 100%;}
	.bg-box > div.logo{
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%,-50%);
		cursor: pointer;
		opacity: 0;
	}		
	.bg-box > div.logo.off{display: none !important;}
	audio{
		position: fixed;
		bottom: 0;
		right: 0;
		opacity: 0;
		z-index: 9999;
		transition: all .5s;
	}
	audio:hover{opacity: 1;}

	
	.result-box > div.result{
		position: fixed;		
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		opacity: 0;
		animation-delay: 2s !important;
		z-index: -1;
		cursor: pointer;
	}
	
	.result-box > div.result > div {
		position: relative;
		display: none;
		width: 377px;
		height: 212px;
		background: url(src/business_card2.jpg) center / 100% no-repeat;
	}
	.result-box > div.result > div.on{display: block;}
	.result-box > div.result > div .result__con{
		position: absolute;
		width: 100%;
		top: 50%;
		left: 0;
		right: 0;
		margin: auto;
		transform: translateY(-50%);
		height: auto;
		text-align: center;
	}
	.result-box > div.result > div .result__con li{
		display: none;
		width: 100%;
		font-size: 30px;
		font-weight: 700;
		opacity: 0;
	}
	.result-box > div.result > div .result__con li.on{
		display: block;
		animation: fadeIn 1s forwards;
		animation-delay: 3s !important;
	}
	.result-box > div.fadeIn.on{animation: fadeIn 2s forwards;z-index: 3;}
	.result-box > div.updown.on > div {animation: updown 1.75s infinite;}
	
	.result-box > div.rotate{cursor: auto;}
	.result-box > div.rotate.on > div {animation: rotate 3s forwards;}

	@keyframes fadeIn{
		0%{opacity: 0;}
		100%{opacity: 1;}
	}
	@keyframes updown{
		0%{transform: translateY(0px);}
		50%{transform: translateY(20px);}
		100%{transform: translateY(0px);}
	}
	
	@keyframes rotate{
		0%{transform: rotateX(0deg);}
		100%{transform: rotateX(7200deg);}
	}
```

``` javascript
	window.onload = () => {
			//Vanilla JS
			// 첫번째 챕터 > 첫 화면 검은 배경 닫히는 효과
			const bgBlackAll = document.querySelectorAll('.black'); //black 배경
			bgBlackAll.forEach(bgBlack => {
				bgBlack.classList.remove('left');
				bgBlack.classList.remove('right');
			});

			// 두번재 챕터 > 로고 출력 로고 클릭 시 이벤트
			const logo = document.querySelector('.logo')// logo
			const wtBkBgAll = document.querySelectorAll('.center')// 흰색,검은색 배경
			const bCard = document.querySelector('.result');
			//fade In 효과
			logo.style.display = 0;
			logo.style.transition = 'opacity 1s';
			setTimeout(function(){
				logo.style.opacity = 1;
			},1500);
			logo.addEventListener('click', () => {
				logo.style.opacity = 0;
				setTimeout(function(){
					logo.style.display ='none'; //logo 삭제
					for(const wtBkBg of wtBkBgAll){
						wtBkBg.classList.add('on');	// 흰색,검은색 배경 출력
					}
					bCard.classList.add('on')
				},1000);
				setTimeout(function(){
					bCard.classList.add('updown');
				},3500);
			});

			//세번째 챕터 > 명함 클릭 시 이벤트
			const bCardFront = document.querySelector('.front');// 명함 앞면
			const bCardBack = document.querySelector('.back');// 명함 뒷면
			const resultList = document.querySelectorAll('.result__con li'); // 전체 결과 값
			const max = resultList.length; // 결과 값 갯수

			bCard.addEventListener('click',function handleClick(){
				let num = Math.floor(Math.random() * (max)); // 랜덤 돌리기

				this.classList.add('rotate');
				bCard.classList.remove('updown');
				bCardFront.classList.remove('on');
				bCardBack.classList.add('on');
				resultList[num].classList.add('on');
				bCard.removeEventListener('click', handleClick); // 카드 돌리기 끝
			});
		}

		//jQuery	
		//$(function(){
			//$('.bg-box > div.black').removeClass(['left','right']);
			// 타이틀
			// setTimeout(function(){
			// 	$('.bg-box > div.logo').fadeIn(1000);
			// },1500);
			
			// 타이틀 클릭 시
			// $('.bg-box > div.logo').on('click',function(){
			// 	$(this).fadeOut(1000); //타이틀 삭제
			// 	setTimeout(function(){
			// 		$('.bg-box > div.center').addClass('on');// 흰색,검은색 배경 노출
			// 		$('.result-box > div.result').addClass('on');// 명함 노출
			// 	},1000);				
			// 	setTimeout(function(){
			// 		$('.result-box > div.result').addClass('updown');//명함 업다운 효과
			// 	},3500);
			// 	$('.bg-box > div.logo').off();
			// });
			// 명함 클릭 시
			// $('.result-box > div.result').on('click',function(){
			// 	$(this).addClass('rotate');
			// 	$('.result-box > div.result').removeClass('updown');
			// 	$('.result-box > div.result .font').removeClass('on');
			// 	$('.result-box > div.result .back').addClass('on');
				
			// 	var max = $('.result__con li').length;
			// 	 var num = Math.floor(Math.random() * (max)) + 1;
			// 	$('.result__con li:nth-child('+ num +')').addClass('on')
			// 	$('.result-box > div.result').off();
				
			// });
			 

		//});

```
<br/>

------------------------------------------------------------------------
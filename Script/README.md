
# **Java Script**
<br/>

## 목차


- [Vanilla JS를 활용 한 예시](#vanilla-js를-활용-한-예시)
   1. [tap버튼\_클릭시\_cont\_전환](#tap버튼_클릭시_cont_전환)
   2. [tap버튼\_클릭시\_스크롤\_이동](#tap버튼_클릭시_스크롤_이동)
   3. [스크롤할때\_class\_핸들링](#스크롤할때_class_핸들링)

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
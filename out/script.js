/*

linear
swing
easeInQuad
easeOutQuad
easeInOutQuad
easeInCubic
easeOutCubic
easeInOutCubic
easeInQuart
easeOutQuart
easeInOutQuart
easeInQuint
easeOutQuint
easeInOutQuint
easeInExpo
easeOutExpo
easeInOutExpo
easeInSine
easeOutSine
easeInOutSine
easeInCirc
easeOutCirc
easeInOutCirc
easeInElastic
easeOutElastic
easeInOutElastic
easeInBack
easeOutBack
easeInOutBack
easeInBounce
easeOutBounce
easeInOutBounce
 
http://api.jqueryui.com/easings/
 
*/



(function( $ ){
	var gitems	=	[];
	var index_img_items					=	1000;
	var globaloption_bindloadscroll				=	false;
	var globaloption_lastmorecheckviewbeforeajaxquery	=	0;
	var globaloption_woocommerce_productisaddedbyajax	=	0;
	
	function wyznaczszerokoscidlaelementow(x) {
		
		ilmod			=	Object.keys(gitems[x][1].itemmaxwidthforrows).length;
		init			=	0;
		currentrow		=	0;
		current_maxitems	=	0;
		current_maxitems_item	=	0;
		ml	=	getvalueWH(gitems[x][0].find(".nihon-items li").css('marginLeft'));
		mr	=	getvalueWH(gitems[x][0].find(".nihon-items li").css('marginRight'));
		bl	=	getvalueWH(gitems[x][0].find(".nihon-items li").css('borderLeftWidth'));
		br	=	getvalueWH(gitems[x][0].find(".nihon-items li").css('borderRightWidth'));
		
		
		
		
		wrapwidth	=	$(gitems[x][0]).find(".nihon-items").width();
		
		add_for_rows	=	[];
		
		currentsumwidthwithmargins	=	0;
		getcurrent_maxitems		=	false;
		for(key in gitems[x][2]) {
			
			if(gitems[x][2][key].portgal_show==1) {
			
				current_maxitems_item		=	current_maxitems_item + 1;
				add_for_rows[currentrow]	=	0;
				
				if(init>0 && current_maxitems_item>current_maxitems) {
					
					// add_for_rows[currentrow]	=	Math.floor((wrapwidth - currentsumwidthwithmargins) / 2);
					
					currentsumwidthwithmargins	=	0;
					getcurrent_maxitems	=	true;
					currentrow++;
					current_maxitems_item	=	1;
					
				}
				
				
				
				getdatafrom		=	currentrow % ilmod;
				
				
				
				evalstr	=	' current_max_width = gitems[' + x + '][1].itemmaxwidthforrows.row' + getdatafrom + '.itemmaxwidth; ';
				eval(evalstr);
				evalstr	=	' current_min_width = gitems[' + x + '][1].itemmaxwidthforrows.row' + getdatafrom + '.itemminwidth; ';
				eval(evalstr);
				
				maxwidth	=	current_max_width;
				wam		=	maxwidth + ml + mr + bl + br;
				
				itemcountfrow	=	Math.ceil(wrapwidth / wam);
				wam		=	Math.floor(wrapwidth / itemcountfrow);
				diff		=	wrapwidth - (itemcountfrow * wam); 
				peritem		=	Math.floor(diff / itemcountfrow);
				
				wam		=	wam + peritem - ml - mr;
				if(init==0 || getcurrent_maxitems) {
					getcurrent_maxitems	=	false;
					current_maxitems	=	itemcountfrow;
				}
				
				
				if(wam<current_min_width) { wam = current_min_width; }
				
				currentsumwidthwithmargins	=	currentsumwidthwithmargins + wam + ml + mr;
				
				// gitems[x][1].current_item_width	=	wam;
				// gitems[x][0].find(".nihon-items li").css('width', wam + 'px');
				
				$(gitems[x][2][key]).css('width', wam + 'px');
				
				
				
				init++;
				
				
				// console.log(current_maxitems);
				
				
			}
			
		}
		
		return	add_for_rows;
		
	}
	
	function getcurrentoffsettop(forx) {
		p	=	$(gitems[forx][0]).find(".nihon-portgal-top-line").parent().offset();
		par	=	$(gitems[forx][0]).find(".nihon-portgal-top-line").offsetParent().offset();
		addtop	=	p.top - par.top;
		return	addtop;
	}
	
	function portgal_wyliczpozycjeelementow_oblicz(x) {
		
		wrapwidth	=	$(gitems[x][0]).width();
		ml		=	getvalueWH(gitems[x][0].find(".nihon-items li").css('marginLeft'));
		mr		=	getvalueWH(gitems[x][0].find(".nihon-items li").css('marginRight'));
		bl		=	getvalueWH(gitems[x][0].find(".nihon-items li").css('borderLeftWidth'));
		br		=	getvalueWH(gitems[x][0].find(".nihon-items li").css('borderRightWidth'));
		
		add_for_rows	=	wyznaczszerokoscidlaelementow(x);
		
		$(gitems[x][0]).find('.nihon-items .portgal-bgscale').each(function() {
			xc	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
			show	=	false;
			if($(this).parent('li').css('display')=='none') {
				show	=	true;
				$(this).parent('li').show();
			}
			w	=	$(this).width();
			if(show) {
				$(this).parent('li').hide();
			}
			h	=	Math.floor(w * gitems[xc][1].bgscaleratio);
			$(this).attr('portgallastsetheight', h);
			$(this).height(h);
			if(gitems[x][1].bgscalebestheight) {
				porgalfiximgwidth(this);
			}
		});
		
		p	=	$(gitems[x][0]).find(".nihon-portgal-top-line").parent().offset();
		par	=	$(gitems[x][0]).find(".nihon-portgal-top-line").offsetParent().offset();
		
		addtop	=	p.top - par.top;
		addleft	=	p.left - par.left;
		
		array_left	=	[];
		array_height	=	[];
		array_top	=	[];
		lastrowmax	=	0;
		left		=	0;
		if(add_for_rows[0]!=undefined) {
			left		=	add_for_rows[0];
		}
		c_kolumna	=	0;
		c_item		=	0;
		c_row		=	0;
		max_heightwrap	=	0;
		ml		=	9999999;
		for(key in gitems[x][2]) {
			array_left[key]	=	0;
			array_top[key]	=	0;
			if(gitems[x][2][key].portgal_show==1) {
				if(ml==9999999) {
					ml	=	getvalueWH($(gitems[x][2][key]).css('marginLeft'));
					mr	=	getvalueWH($(gitems[x][2][key]).css('marginRight'));
					mt	=	getvalueWH($(gitems[x][2][key]).css('marginTop'));
					mb	=	getvalueWH($(gitems[x][2][key]).css('marginBottom'));
					bl	=	getvalueWH($(gitems[x][2][key]).css('borderLeftWidth'));
					br	=	getvalueWH($(gitems[x][2][key]).css('borderRightWidth'));
					bt	=	getvalueWH($(gitems[x][2][key]).css('borderTopWidth'));
					bb	=	getvalueWH($(gitems[x][2][key]).css('borderBottomWidth'));
					pl	=	getvalueWH($(gitems[x][2][key]).css('paddingLeft'));
					pr	=	getvalueWH($(gitems[x][2][key]).css('paddingRight'));
					pt	=	getvalueWH($(gitems[x][2][key]).css('paddingTop'));
					pb	=	getvalueWH($(gitems[x][2][key]).css('paddingBottom'));
				}
				wi	=	$(gitems[x][2][key]).width();
				he	=	$(gitems[x][2][key]).height();
				addwidth	=	wi + ml + mr + pl + pr + bl + br;
				addheight	=	he + mt + mb + pt + pb + bb + bt;
				if((left + addwidth)>wrapwidth) {
					c_row		=	c_row + 1;
					left		=	0;
					if(add_for_rows[c_row]!=undefined) {
						left		=	add_for_rows[c_row];
					}
					c_kolumna	=	0;
					// jeśli ilmod > 1 to nastepny wiersz od najwyzszej pozycji
					if(ilmod>1) {
						max	=	0;
						for(kk in array_height){
							max	=	Math.max(max, array_height[kk]);
						}
						for(kk in array_height){
							array_height[kk]	=	max;
						}
						lastrowmax	=	max;
					}
				} 
				array_left[key]		=	left;
				if(array_height[c_kolumna]==undefined) {
					array_height[c_kolumna]	=	lastrowmax;
				}
				array_top[key]		=	array_height[c_kolumna];
				array_height[c_kolumna]	=	array_height[c_kolumna] + addheight;
				if(max_heightwrap<array_height[c_kolumna]) {
					max_heightwrap	=	array_height[c_kolumna];
				}
				left		=	left + addwidth;
				c_kolumna	=	c_kolumna + 1;
			}
		}
		

		
		ar	=	[];
		ar['array_height']	=	array_height;
		ar['array_left']	=	array_left;
		ar['array_top']		=	array_top;
		ar['max_heightwrap']	=	max_heightwrap;
		return	ar;
		
	}
	
	function portgal_wyliczpozycjeelementow(x,isinit) {
		
		ar	=	portgal_wyliczpozycjeelementow_oblicz(x);
		
		max_heightwrap		=	ar['max_heightwrap'];
		array_left		=	ar['array_left'];
		array_height		=	ar['array_height'];
		array_top		=	ar['array_top'];
		
		
		if(gitems[x][1].fullscreenmode==1 && isinit) { 
			$(gitems[x][0]).find('.nihon-items').height(max_heightwrap);
			portgal_fullscreemode_width(x);
			ar	=	portgal_wyliczpozycjeelementow_oblicz(x);
			max_heightwrap		=	ar['max_heightwrap'];
			array_left		=	ar['array_left'];
			array_height		=	ar['array_height'];
			array_top		=	ar['array_top'];
			$(gitems[x][0]).find('.nihon-items').height(0);
		}
		
		
		
		
		
		if($(gitems[x][0]).attr('portgal-init')=='1') {
			$(gitems[x][0]).attr('portgal-init', 0);
			for(key in gitems[x][2]) {
				$(gitems[x][2][key]).css('left', array_left[key]);
				$(gitems[x][2][key]).css('top', array_top[key]);
				$(gitems[x][2][key]).hide();
			}
		}
		
		commondelay	=	0;
		commondelayadd	=	0;
		// console.log("A" + microtime());
		
		$(gitems[x][0]).find('.nihon-items .portgal-bgscale').attr('portgalmoved', '0')
		
		for(key in gitems[x][2]) {
			display		=	$(gitems[x][2][key]).css('display');
			klassnew	=	false;
			if($(gitems[x][2][key]).hasClass("portgalnewitem")) {
				klassnew	=	true;
			}
			// $(gitems[x][2][key]).stop(true, true);
			
			if(gitems[x][2][key].portgal_show) {
				
				if(display=='list-item' && klassnew==false) {
					// może trzeba przesunąć
					
					
					
					left		=	getvalueWH($(gitems[x][2][key]).css('left'));
					topposition	=	getvalueWH($(gitems[x][2][key]).css('top'));
					
					$(gitems[x][2][key]).find('.portgal-bgscale').each(function() { // musi by ć tu bo moze się zdarzyć ze obrazek nie będzie przesuwany ale musi byc przeskalowany
						porgalfiximgwidth(this);
					});
					
					if(!(array_top[key]==topposition && array_left[key]==left)) {
						
						//	skew	-- begin
						lewo	=	0;
						prawo	=	0;
						gora	=	0;
						dol	=	0;
						
						if(array_left[key]>left) {		prawo	=	1;	}
						if(array_left[key]<left) {		lewo	=	1;	}
						if(array_top[key]>topposition) {	gora	=	1;	}
						if(array_top[key]<topposition) {	dol	=	1;	}
						
						$(gitems[x][2][key]).attr('portgal-skew-prawo',	prawo);
						$(gitems[x][2][key]).attr('portgal-skew-lewo',	lewo);
						$(gitems[x][2][key]).attr('portgal-skew-dol',	dol);
						$(gitems[x][2][key]).attr('portgal-skew-gora',	gora);
						//	skew	-- end
						
						
						$(gitems[x][2][key]).attr('portgal-diffmovehorizontal',	Math.abs(array_left[key] - lewo));
						$(gitems[x][2][key]).attr('portgal-diffmovevertical',	Math.abs( topposition - array_top[key] ) );
						
						wykonajobj	=	{
							left:	array_left[key],
							top:	array_top[key],
							ccCustomPropName:	1000
						};
						$(gitems[x][2][key]).css('z-index', 999999);
						$(gitems[x][2][key]).css('ccCustomPropName', 0);
						$(gitems[x][2][key]).animate( wykonajobj , { 
						easing:		gitems[x][1].animation_easing ,
						duration:	gitems[x][1].animation_movehidespeed ,
						step:		function(value, fx ) {
							
							portgalnr	=	$(this).closest(".nihon-portgal").attr("nihon-portgal-nr");
							
							if (fx.prop === 'ccCustomPropName' ) {
								//	skew	-- begin
								wyliczskewdlaelementu(portgalnr, this, value);
								//	skew	-- end
								
							}
							
						} , 
						complete: function() { 
							$(this).css('z-index', 'auto');
							//$(this).find('.portgal-bgscale').each(function() {
								// porgalfiximgwidth(this);
							//});
							// $(this).css('top', array_top[key]);
							// $(this).css('left', array_left[key]);
						} } );
						
					}
					
				} else {
					
					
					
					$(gitems[x][2][key]).css('-ms-transform' , 'skew(0deg,0deg)');
					$(gitems[x][2][key]).css('-webkit-transform', 'skew(0deg,0deg)');
					$(gitems[x][2][key]).css('transform' , 'skew(0deg,0deg)');
					
					// pokazywanie ukrytego
					if($(gitems[x][2][key]).hasClass("portgalnewitem")) {
						commondelayadd	=	commondelayadd + 10;
						commondelayadd	=	Math.min(100, commondelayadd);
						commondelay	=	commondelay + commondelayadd;
					}
					
					$(gitems[x][2][key]).css('top', array_top[key] + 'px');
					$(gitems[x][2][key]).css('left', array_left[key] + 'px');
					$(gitems[x][2][key]).css('z-index', 999999);
					//	console.log( key + ' -- ' + array_top[key] + ' -- ' + array_left[key] + ' -- ' + commondelay );
					
					
					if(gitems[x][1].animation_fadeinoutwithscale) {
					  
						$(gitems[x][2][key]).css('-ms-transform' , 'scale(0,0)');
						$(gitems[x][2][key]).css('-webkit-transform', 'scale(0,0)');
						$(gitems[x][2][key]).css('transform' , 'scale(0,0)');
					}
					
					$(gitems[x][2][key]).css('opacity', 0);
					$(gitems[x][2][key]).css('ccCustomPropNameScale', 0);
					
					$(gitems[x][2][key]).show();
					
					$(gitems[x][2][key]).find('.portgal-bgscale').each(function() {
						porgalfiximgwidth(this);
					});
					current_left	=	array_left[key];
					current_top	=	array_top[key];
					wykonajobj	=	{
						left:		array_left[key] + 'px' ,
						opacity:	1 ,
						ccCustomPropNameScale:	1000
					};
					
					
					
					
					
					lewo	=	0;
					prawo	=	0;
					gora	=	0;
					dol	=	0;
					
					movevertical	=	0;
					movehorizontal	=	0;
					
					if(gitems[x][1].animation_fadeinoutwithgoout) {
						
						topoverflow	=	Math.floor(getcurrentoffsettop(x));
						
						widthitem	=	$(gitems[x][2][key]).width();
						heightitem	=	$(gitems[x][2][key]).height();
						wykonajobj.top	=	array_top[key]	+	'px'; 
						wykonajobj.left	=	array_left[key] + 'px';
						srodek		=	Math.floor($(window).width() / 2);
						
						offsettop	=	Math.floor(getcurrentoffsettop(x));
						sumtop		=	array_top[key] + offsettop;
						cantop		=	false;
						canfromtop	=	0;
						if(sumtop>500) {
							cantop		=	true;
							canfromtop	=	array_top[key] - 500;
						}
						
						ct	=	$(document).height() - sumtop - heightitem;
						canbottom		=	false;
						canfrombottom		=	0;
						if(ct>500) {
							canbottom	=	true;
							canfrombottom	=	array_top[key] + 500;
						}
						
						
						if((Math.random()*10)>5) {
							if( ( array_left[key] + (widthitem / 2) ) >= srodek) {
								// z prawej
								lewo	=	1;
								lefts	=	$(window).width() - $(gitems[x][2][key]).width() - 50;
								movehorizontal	=	lefts - array_left[key];
								$(gitems[x][2][key]).css('left',  lefts + 'px');
							} else {
								prawo	=	1;
								movehorizontal	=	array_left[key];
								$(gitems[x][2][key]).css('left', '0px');
							}
						} else {
							if((Math.random()*10)>5) {
								if(cantop)	{
									$(gitems[x][2][key]).css('top', canfromtop + 'px');
									movevertical	=	500;
									gora	=	1;
								}
							} else {
								if(canbottom)	{ 
									movevertical	=	500;
									$(gitems[x][2][key]).css('top', canfrombottom + 'px');
									dol	=	1;
								}
							}
						}
						
					}
					
					
					$(gitems[x][2][key]).attr('portgal-skew-prawo',	prawo);
					$(gitems[x][2][key]).attr('portgal-skew-lewo',	lewo);
					$(gitems[x][2][key]).attr('portgal-skew-dol',	dol);
					$(gitems[x][2][key]).attr('portgal-skew-gora',	gora);
					
					$(gitems[x][2][key]).attr('portgal-diffmovehorizontal',	Math.abs(movehorizontal));
					$(gitems[x][2][key]).attr('portgal-diffmovevertical',	Math.abs(movevertical));
					
					
					
					
					
					$(gitems[x][2][key]).delay(commondelay).animate( wykonajobj , { 
					easing:		gitems[x][1].animation_easing ,
					duration:	gitems[x][1].animation_movehidespeed ,
					step:		function(value, fx ) {
						if (fx.prop === 'ccCustomPropNameScale' ) {
							valuesource	=	value;
							  
							value	=	value / 1000;
							value	=	value;
							
							portgalnr	=	$(this).closest(".nihon-portgal").attr("nihon-portgal-nr");
							
							if(gitems[portgalnr][1].animation_fadeinoutwithscale) {  
								  $(this).css('-ms-transform' , 'scale('+value+','+value+')');
								  $(this).css('-webkit-transform', 'scale('+value+','+value+')');
								  $(this).css('transform' , 'scale('+value+','+value+')');
							}
							
							if(gitems[portgalnr][1].animation_fadeinoutwithrotate) {
								valueset	=	Math.floor( 90 - ( ( valuesource / 1000 ) * 90 ) );
								$(this).css('-webkit-transform', 'rotateY(-'+valueset+'deg)');
								$(this).css('transform' , 'rotateY(-'+valueset+'deg)');
							}
							
							if(gitems[x][1].animation_fadeinoutwithgoout) {
								wyliczskewdlaelementu(portgalnr, this, valuesource);
							}
							
						}
					} , 
					complete: function() { 
						
						$(this).css('-ms-transform' , 'skew(0deg,0deg)');
						$(this).css('-webkit-transform', 'skew(0deg,0deg)');
						$(this).css('transform' , 'skew(0deg,0deg)');
						
						$(this).css('-ms-transform' , 'scale(1,1)');
						$(this).css('-webkit-transform', 'scale(1,1)');
						$(this).css('transform' , 'scale(1,1)');
						
						// na operze nie odtawarza filmów video z youtuba wiec musi byc none
						$(this).css('transform' , 'none');
						
						$(this).css('z-index', 'auto');
						$(this).css('opacity', 1);
					} } );
					
					
				}
			} else {
				
				
				
				$(gitems[x][2][key]).css('-ms-transform' , 'skew(0deg,0deg)');
				$(gitems[x][2][key]).css('-webkit-transform', 'skew(0deg,0deg)');
				$(gitems[x][2][key]).css('transform' , 'skew(0deg,0deg)');
				
				if(display=='list-item') {
					// ukrywanie pokazywanego
					
					$(gitems[x][2][key]).css('z-index', 999999);
					$(gitems[x][2][key]).css('ccCustomPropNameScale', 0);
					$(gitems[x][2][key]).css('opacity', 1);
					
					posleft		=	getvalueWH($(gitems[x][2][key]).css('left'));
					postop		=	getvalueWH($(gitems[x][2][key]).css('top'));
					width		=	$(gitems[x][2][key]).width();
					
					wykonajobj	=	{
						left:			posleft + 'px',
						ccCustomPropNameScale : 1000 ,
						opacity:		0
					};
					
					idztop	=	postop;
					idzleft	=	posleft;
					
					lewo	=	0;
					prawo	=	0;
					gora	=	0;
					dol	=	0;
					
					movevertical	=	0;
					movehorizontal	=	0;
					
					if(gitems[x][1].animation_fadeinoutwithgoout) {
						
						
						topoverflow	=	Math.floor(getcurrentoffsettop(x));
						
						widthitem	=	$(gitems[x][2][key]).width();
						heightitem	=	$(gitems[x][2][key]).height();
						// wykonajobj.top	=	array_top[key]	+ 'px'; 
						// wykonajobj.left	=	array_left[key] + 'px';
						srodek		=	Math.floor($(window).width() / 2);
						
						offsettop	=	Math.floor(getcurrentoffsettop(x));
						sumtop		=	postop + offsettop;
						cantop		=	false;
						canfromtop	=	0;
						if(sumtop>500) {
							cantop		=	true;
							canfromtop	=	postop - 500;
						}
						
						ct	=	$(document).height() - sumtop - heightitem;
						canbottom		=	false;
						canfrombottom		=	0;
						if(ct>500) {
							canbottom	=	true;
							canfrombottom	=	postop + 500;
						}
						
						
						if((Math.random()*10)>5) {
							if( ( posleft + (widthitem / 2) ) >= srodek) {
								// z prawej
								lefts	=	$(window).width() - $(gitems[x][2][key]).width() - 50;
								wykonajobj.left	=	lefts + 'px';
								movehorizontal	=	posleft - lefts;
								prawo		=	1;
							} else {
								lewo		=	1;
								movehorizontal	=	posleft;
								wykonajobj.left	=	'0px';
							}
						} else {
							if((Math.random()*10)>5) {
								if(cantop)	{ 
									gora		=	1;
									movevertical	=	500;
									wykonajobj.top	=	canfromtop + 'px';
								}
							} else {
								if(canbottom)	{ 
									dol		=	1;
									movevertical	=	500;
									wykonajobj.top	=	canfrombottom + 'px';
								}
							}
						}
						
					}
					
					$(gitems[x][2][key]).attr('portgal-skew-prawo',	prawo);
					$(gitems[x][2][key]).attr('portgal-skew-lewo',	lewo);
					$(gitems[x][2][key]).attr('portgal-skew-dol',	dol);
					$(gitems[x][2][key]).attr('portgal-skew-gora',	gora);
					
					$(gitems[x][2][key]).attr('portgal-diffmovehorizontal',	Math.abs(movehorizontal));
					$(gitems[x][2][key]).attr('portgal-diffmovevertical',	Math.abs(movevertical));
					
					
					
					
					$(gitems[x][2][key]).animate( wykonajobj , { 
					easing:		gitems[x][1].animation_easing ,
					duration:	gitems[x][1].animation_movehidespeed ,
					step:		function(value, fx ) {
						if (fx.prop === 'ccCustomPropNameScale') {
							portgalnr	=	$(this).closest(".nihon-portgal").attr("nihon-portgal-nr");
							valuesource	=	value;
							if(gitems[portgalnr][1].animation_fadeinoutwithscale) {
								value	=	value / 1000;
								value	=	1 - value;
								$(this).css('-ms-transform' , 'scale('+value+','+value+')');
								$(this).css('-webkit-transform', 'scale('+value+','+value+')');
								$(this).css('transform' , 'scale('+value+','+value+')');
							}
							if(gitems[portgalnr][1].animation_fadeinoutwithrotate) {
							      valueset	=	Math.floor( ( ( valuesource / 1000 ) * 90 ) );
							      $(this).css('-webkit-transform', 'rotateY('+valueset+'deg)');
							      $(this).css('transform' , 'rotateY('+valueset+'deg)');
							}
							
							if(gitems[x][1].animation_fadeinoutwithgoout) {
								wyliczskewdlaelementu(portgalnr, this, valuesource);
							}
						}
					} , 
					complete: function() { 
						
						$(this).css('-ms-transform' , 'skew(0deg,0deg)');
						$(this).css('-webkit-transform', 'skew(0deg,0deg)');
						$(this).css('transform' , 'skew(0deg,0deg)');
						
						$(this).css('z-index', 'auto');
						$(this).css('opacity', 1);
						$(this).hide();
						
						$(this).css('-ms-transform' , 'scale(1,1)');
						$(this).css('-webkit-transform', 'scale(1,1)');
						$(this).css('transform' , 'scale(1,1)');
						
						// na operze nie odtawarza filmów video z youtuba wiec musi byc none
						$(this).css('transform' , 'none');
						
					} } );
					
					
				}
				// $(gitems[x][2][key]).hide();
			}
		}
		//console.log("B" + microtime());
		// $(gitems[x][0]).find('.nihon-items .portgal-bgscale').each(function() {
		// 	 porgalfiximgwidth(this);
		// });
		//console.log("C" + microtime());
		
		/* for(key in array_left) {
			$(gitems[x][2][key]).css('top',		array_top[key] + 'px');
			$(gitems[x][2][key]).css('left',	array_left[key] + 'px');
		} */
		
		gitems[x][0].find(".nihon-items").finish();
		
		currentheight	=	gitems[x][0].find(".nihon-items").height();
		time	=	0;
		if(currentheight>max_heightwrap) {
			  time	=	gitems[x][1].animation_movehidespeed;
		}
		
		
		portgal_scaleemptyheight(x, max_heightwrap, time);
		
		if(gitems[x][0].find(".nihon-items").height()!=max_heightwrap) {
			gitems[x][0].find(".nihon-items").delay(time).animate( { height: max_heightwrap , easing: gitems[x][1].animation_easing });
		}
		//console.log("D" + microtime());
	}
	
	
	
	
	
	function wyliczskewdlaelementu(portgalnr, th, value) {
		
		value	=	(value / 1000);
		if(value>0.5) { 
		  b		=	value - 0.5;	
		  value	=	0.5 - b;
		}
		value	=	value * 2;
		value	=	1 - ( value / 2 );
		
		if(gitems[portgalnr][1].animation_movewithskew) {  
			skew	=	Math.floor((value-1) * 25);
			skewy	=	0;
			skewx	=	0;
			if($(th).attr('portgal-skew-prawo')=='1') {
			      skewx	=	skew;
			}
			if($(th).attr('portgal-skew-lewo')=='1') {
			      skewx	=	skew * -1;
			}
			if($(th).attr('portgal-skew-gora')=='1' || $(th).attr('portgal-skew-dol')=='1') {
			      skewx	=	0;
			      if(     ( $(th).attr('portgal-skew-gora')=='1' && $(th).attr('portgal-skew-prawo')=='1' ) || 
				      ( $(th).attr('portgal-skew-dol')=='1' && $(th).attr('portgal-skew-lewo')=='1' ) /* ||
				      ( $(th).attr('portgal-skew-gora')=='1' && $(th).attr('portgal-skew-prawo')=='0' && $(th).attr('portgal-skew-lewo')=='0' ) */
			      ) {
				      skewx	=	skew * -1;
				      skewy	=	skewx;
			      }
			      
			      if(    ( $(th).attr('portgal-skew-dol')=='1' && $(th).attr('portgal-skew-prawo')=='0' && $(th).attr('portgal-skew-lewo')=='0' )
			      ) {
				      skewy	=	skew;
			      }
			      
			      if(    ( $(th).attr('portgal-skew-gora')=='1' && $(th).attr('portgal-skew-prawo')=='0' && $(th).attr('portgal-skew-lewo')=='0' )
			      ) {
				      skewy	=	skew * -1;
			      }
			      
			      
			      
			      if(     ( $(th).attr('portgal-skew-gora')=='1' && $(th).attr('portgal-skew-lewo')=='1' ) || 
				      ( $(th).attr('portgal-skew-dol')=='1' && $(th).attr('portgal-skew-prawo')=='1' )
			      ) {
				      skewx	=	skew;
				      skewy	=	skewx;
			      }
			}
			
			diffmovehorizontal		=	parseInt($(th).attr('portgal-diffmovehorizontal'));
			diffmovevertical		=	parseInt($(th).attr('portgal-diffmovevertical'));
			
			
			diffmovehorizontal_skew_x	=	Math.floor(diffmovehorizontal / 100);
			diffmovehorizontal_skew_y	=	Math.floor(diffmovevertical / 100);
			if(skewx<0) {
				diffmovehorizontal_skew_x	=	diffmovehorizontal_skew_x * -1;
				skewx	=	Math.max(skewx, diffmovehorizontal_skew_x);
			} else {
				skewx	=	Math.min(skewx, diffmovehorizontal_skew_x);
			}
			if(skewy<0) {
				diffmovehorizontal_skew_y	=	diffmovehorizontal_skew_y * -1;
				skewy	=	Math.max(skewy, diffmovehorizontal_skew_y);
			} else {
				skewy	=	Math.min(skewy, diffmovehorizontal_skew_y);
			}
			
			skewy	=	Math.floor(skewy * 0.5);
			
			$(th).css('-ms-transform' , 'skew('+skewx+'deg,'+skewy+'deg)');
			$(th).css('-webkit-transform', 'skew('+skewx+'deg,'+skewy+'deg)');
			$(th).css('transform' , 'skew('+skewx+'deg,'+skewy+'deg)');
		}
		
	}
	
	
	
	
	
	
	
	function portgal_active_category(x) {
		
		$(gitems[x][0]).find('.portgal-dlayer').attr('portgal-block-dl', 0);
		$(gitems[x][0]).find(".portgalvideotv").each(function() {
			
			if(gitems[x][1].darklayertype=='greyscale') {
				$(this).closest("li").find('.fdlayer-wrapper').addClass('portgal-bggray');
			}
			
			$(this).remove();
			
		});
		
		
		
		
		category	=	gitems[x][1].current_category;
		orderby		=	gitems[x][1].current_orderby;
		orderbytype	=	gitems[x][1].current_orderbytype;
		
		if(orderby!='') {
			//	portgal-attribute-order1
			arrayfororder	=	[];
			arrayfororder2	=	[];
			for(key in gitems[x][2]) {
				//	gitems[x][2][key]
				
				v	=	$(gitems[x][2][key]).attr('portgal-attribute-order' + orderby);
				
				
				switch(gitems[x][1].orderby[orderby].type) {
				  case 'numeric':
					arrayfororder[key]	=	parseInt(v);  
				  break;
				  case 'string':
				  default:
					arrayfororder[key]	=	v;
				  break;
				}
				
				arrayfororder2[key]	=	v;
			}
			
			
			switch(gitems[x][1].orderby[orderby].type) {
			  case 'numeric':
				arrayfororder.sort(function(a, b){return a-b});
			  break;
			  default:
			  case 'string':
				arrayfororder.sort(function(a, b){
				    
				    return a.localeCompare(b);
				    
				    if(a < b) return -1;
				    if(a > b) return 1;
				    return 0;
				})
			  break;
			}
			
			newx	=	0;
			newmainitems	=	[];
			for(key in arrayfororder) {
				// arrayfororder[key]
				for(key2 in arrayfororder2) {
					if(arrayfororder2[key2]==arrayfororder[key]){
						newmainitems[newx]	=	gitems[x][2][key2];
						arrayfororder2[key2]	=	undefined;
						newx	=	newx + 1;
					}
				}
			}
			
			if(orderbytype==1) {
			  newmainitems.reverse();
			}
			
			gitems[x][2]	=	newmainitems;
			
		}
		
		for(key in gitems[x][2]) {
			$(gitems[x][2]).finish();
			gitems[x][2][key].portgal_show	=	0;
			if(category=='') {
				gitems[x][2][key].portgal_show	=	1;
			} else {
				ar	=	$(gitems[x][2][key]).attr('portgal-category');
				items	=	ar.split(',');
				if($.inArray(category, items)>=0) {
					gitems[x][2][key].portgal_show	=	1;
				}
			}
		}
		
		if(gitems[x][1].search) {
			val	=	gitems[x][0].find(".portgal-search").val();
			val	=	val.toLowerCase();
			if(val!='') {
				//	str.indexOf("welcome"); 
				for(key in gitems[x][2]) {
					if(gitems[x][2][key].portgal_show==1) {
						i	=	gitems[x][2][key].search_string.indexOf(val);
						if(i<0) {
							gitems[x][2][key].portgal_show	=	0;
						}
					}
				}
			}
		}
		
		portgal_wyliczpozycjeelementow(x, false);
		
	}
	
	function portgal_makeordernavigation(x) {
		addstr	=	'';
		
		
		if(gitems[x][1].orderbyshow) {
			addstr	=	addstr + '<div class="portgalorderby-wrap"><span class="portgalorderby-txt">' + gitems[x][1].orderby_label + ' </span> <span class="portgalorderby-txtshow">None</span><select class="portgalorderby"><option value="">None</option>';
			for(key in gitems[x][1].orderby) {
				name	=	gitems[x][1].orderby[key].name;
				addstr	=	addstr + '<option value="' + key + '">' + name + '</option>';
			}
			str	=	"some_name_" + Math.random();
			//	ASC <input type="radio" name="' + str + '" value="0" class="portgal-orderbytype" CHECKED> DESC <input type="radio" class="portgal-orderbytype" name="' + str + '" value="1">
			addstr	=	addstr + '</select></div>  <span class="portgal-orderbytype-button asc"></span>';
		}
		
		
		
		if(gitems[x][1].search) {
			 
			// if(gitems[x][0].find(".portgal-navigation-type-1").hasClass("portgal-navigation-type-1")) {
			// 	addstr	=	addstr + '<span class="portgal-search-button"></span><input type="text" class="portgal-search">';
			// } else {
				addstr	=	addstr + '<input type="text" class="portgal-search"><span class="portgal-search-button"></span>';
			// }
			if(gitems[x][1].search_clear_button) {
				addstr	=	addstr + '<span class="portgal-clear-search-button">' + gitems[x][1].search_clear_button_label + '</span>';
			}
		}
		
		gitems[x][0].find(".portgal-navigation-order").html(addstr);
		
		if(gitems[x][1].search) {
			gitems[x][0].find(".portgal-search").keypress( function(event) {
				if(event.which==13) {
					x	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
					portgal_active_category(x);
				}
			});
		}
		
		gitems[x][0].find(".portgal-navigation-order select, .portgal-navigation-order .portgal-orderbytype").change(function() {
			x	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
			gitems[x][1].current_orderby		=	gitems[x][0].find('.portgal-navigation-order select').val();
			value	=	0;	//	0 ASC 1 DESC
			value	=	gitems[x][0].find('.portgal-navigation-order .portgal-orderbytype:checked').val();
			html	=	gitems[x][0].find('.portgal-navigation-order select option:selected').html();
			
			gitems[x][0].find('.portgalorderby-txtshow').html(html);
			
			gitems[x][1].current_orderbytype	=	value;
			portgal_active_category(x);
		})
		
		gitems[x][0].find(".portgal-orderbytype-button").click(function() {
			x	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
			if($(this).hasClass('desc')) {
				$(this).removeClass('desc').addClass('asc');
				gitems[x][1].current_orderbytype	=	0;
			} else {
				$(this).removeClass('asc').addClass('desc');
				gitems[x][1].current_orderbytype	=	1;
			}
			portgal_active_category(x);
			
		});
		
		if(gitems[x][1].search) {
			
			gitems[x][0].find(".portgal-search-button").click(function() {
				x	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
				portgal_active_category(x);
			});
			
			if(gitems[x][1].search_clear_button) {
				gitems[x][0].find(".portgal-clear-search-button").click(function() {
					x	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
					gitems[x][0].find(".portgal-search").val('');
					portgal_active_category(x);
				});
			}
		}
		
	}
	
	function before_activedarklayer(obj, xcurrentportgal, optionmain) {
		
		if(typeof optionmain != 'object' ) {
			height		=	$(obj).find(".portgal-dlayer").height();
			szerokosc	=	$(obj).find(".portgal-dlayer").width();
			optionmain	=	{};
			optionmain.durationmainanimation	=	200;
			optionmain.dl_width	=	szerokosc;
			optionmain.dl_height	=	height;
		}
		
		
		
		
		
		switch(gitems[xcurrentportgal][1].dlinneranimtype) {
			case 'linkstextfromcursor':
				
				$(obj).find(".portgal-link-nr1").stop(true, true);
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				
				$(obj).find(".portgal-link-nr1").css('left', 0); // musi byc na zero zeby dobrze okreslic szerokosc
				
				h1	=	$(obj).find(".portgal-link-nr1").height();
				w1	=	$(obj).find(".portgal-link-nr1").width();
				$(obj).find(".portgal-link-nr1").width(w1);
				pl	=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingLeft'));
				pr	=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingRight'));
				w1	=	w1 + pl + pr;
				
				h1p	=	Math.floor(h1 / 2);
				w1p	=	Math.floor(w1 / 2);
				
				e1wc	=	Math.floor((optionmain.dl_width / 2) - w1p);
				e1hc	=	Math.floor((optionmain.dl_height / 2) - h1p);
				settop	=	0;
				setleft	=	0;
				
				from	=	$(obj).attr("portgalfromcursor");
				switch(from) {
					case 'left':
						setleft	=	0;
						settop	=	e1hc;
					break;
					case 'right':
						setleft	=	optionmain.dl_width;
						settop	=	e1hc;
					break;
					case 'bottom':
						setleft	=	e1wc;
						settop	=	optionmain.dl_height;
					break;
					default:
					case 'top':
						setleft	=	e1wc;
						settop	=	0;
					break;
				}
				
				$(obj).find(".portgal-link-nr1").css('left', setleft).css('top', settop).delay(halfduration).animate( {
				  	top:		e1hc,
					left:		e1wc,
					opacity:	1
				} , {
					easing:		"easeOutQuint",
					duration:	optionmain.durationmainanimation * 2,
					complete:	function() {
						$(obj).find(".portgal-link-nr1").css('width', 'auto');
					}
				});
				
				
			break;
			case 'linkscirclefromtop':
				
				
				height		=	$(obj).find(".portgal-dlayer").height();
				szerokosc	=	$(obj).find(".portgal-dlayer").width();
				if(height!=null) {
					
					
					wi	=	$(obj).find(".portgal-link-viewcard").width();
					
					if(wi!=null) {
						
						pl	=	getvalueWH($(obj).find(".portgal-link-viewcard").css('paddingLeft'));
						pr	=	getvalueWH($(obj).find(".portgal-link-viewcard").css('paddingRight'));
						cl	=	Math.floor((szerokosc - (wi + pl + pr)) / 2)
						
						bottom	=	Math.floor(height / 6);
						
						$(obj).find(".portgal-link-viewcard").css('left', cl + 'px').css('bottom', bottom + 'px');
						
					}
					
					
					
					polowa		=	Math.floor(height / 2);
					el		=	$(obj).find(" .portgal-circle-anchor");
					wysokosckolka	=	el.height();
					if(wysokosckolka!=null) {
						szerokosckolka	=	el.width();
						bl	=	getvalueWH(el.css('borderLeftWidth'));
						br	=	getvalueWH(el.css('borderRightWidth'));
						bt	=	getvalueWH(el.css('borderTopWidth'));
						bb	=	getvalueWH(el.css('borderBottomWidth'));
						pl	=	getvalueWH(el.css('paddingLeft'));
						pr	=	getvalueWH(el.css('paddingRight'));
						pt	=	getvalueWH(el.css('paddingTop'));
						pb	=	getvalueWH(el.css('paddingBottom'));
						wysokosckolka	=	wysokosckolka + bt + bb;
						szerokosckolka	=	szerokosckolka + bl + br;
						if(wysokosckolka!=null) {
							ilosckolek	=	0;
							$(obj).find(".portgal-circle-anchor").each(function() {
								ilosckolek	=	ilosckolek + 1;
							})
							polowa	=	polowa - Math.floor(wysokosckolka / 2);
							switch(ilosckolek) {
								case 1: 
									srodek	=	Math.floor((szerokosc / 2) - (szerokosckolka / 2));
									$(obj).find(".portgal-dlayer .portgal-circle-anchor").animate({
										opacity:	1,
										top:		polowa + 'px'
									}, {
									  duration:	200
									});
									
									srodek	=	Math.floor(szerokosc / 2);
									p1left	=	Math.floor(srodek - (szerokosckolka / 2));
									
									$(obj).find(".portgal-circle-anchor.portgal-circle-nr1").css('left', p1left + 'px').animate({
										opacity:	1,
										top:		polowa + 'px',
									}, {
										duration:	200
									});
									
								break;
								case 2:
									srodek	=	Math.floor(szerokosc / 2);
									p1left	=	srodek - 10 - szerokosckolka;
									p2left	=	srodek + 10;
									$(obj).find(".portgal-circle-anchor.portgal-circle-nr1").css('left', p1left + 'px').animate({
										opacity:	1,
										top:		polowa + 'px',
									}, {
										duration:	200
									});
									$(obj).find(".portgal-circle-anchor.portgal-circle-nr2").css('left', p2left + 'px').animate({
										opacity:	1,
										top:		polowa + 'px',
									}, {
										duration:	400
									});
								break;
							}
						}
					}
				}
			break;
			case 'linkstextfromtopandbottom':
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				szerokosc	=	optionmain.dl_width;
				height		=	optionmain.dl_height;
				
				ilosc	=	0;
				$(obj).find(".portgal-link").each(function() {
					ilosc	=	ilosc + 1;
				});
				
				
				txtwidth	=	$(obj).find(".portgal-link-nr1").width();
				pl		=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingLeft'));
				pr		=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingRight'));
				txtwidth	=	txtwidth + pl + pr;
				positioncenter	=	Math.floor(( szerokosc / 2) - (txtwidth / 2));
				$(obj).find(".portgal-link-nr1").css('left', positioncenter);
				
				
				switch(ilosc) {
				case 1:
					// wysokosc pierwszego linku
					h1	=	$(obj).find(" .portgal-link-nr1").height();
					to	=	Math.floor(h1 / 2);
					polowa		=	Math.floor(height / 2);
					setvtext	=	polowa	-  to;
					
					$(obj).find(" .portgal-link-nr1").delay(halfduration).animate({
						opacity:	1,
						top:		setvtext + 'px'
					}, { duration: optionmain.durationmainanimation });
				break;
				case 2:
					
					txtwidth	=	$(obj).find(".portgal-link-nr2").width();
					pl		=	getvalueWH($(obj).find(".portgal-link-nr2").css('paddingLeft'));
					pr		=	getvalueWH($(obj).find(".portgal-link-nr2").css('paddingRight'));
					txtwidth	=	txtwidth + pl + pr;
					positioncenter	=	Math.floor(( szerokosc / 2) - (txtwidth / 2));
					$(obj).find(".portgal-link-nr2").css('left', positioncenter);
					
					h1	=	$(obj).find(".portgal-link-nr1").height();
					h2	=	$(obj).find(".portgal-link-nr2").height();
					polowa		=	Math.floor(height / 2);
					top1		=	polowa - h1 - 10;
					top2		=	polowa + 10;
					$(obj).find(".portgal-link-nr1").delay(halfduration).animate( {
						opacity:	1,
						top:		top1 + 'px'
					}, { duration: optionmain.durationmainanimation });
					$(obj).find(".portgal-link-nr2").css('top', height + 'px');
					$(obj).find(".portgal-link-nr2").delay(halfduration).animate( {
						opacity:	1,
						top:		top2 + 'px'
					}, { duration: optionmain.durationmainanimation });
				break;
				}
				
			break;
			case 'linkscirclefromleftandtop':	//	linkscirclefromleftandtop
					
					halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
					
					szerokosc	=	optionmain.dl_width;
					height		=	optionmain.dl_height;
					
					polowaszerokosci =	Math.floor( szerokosc / 2 );
					
					toppos		=	Math.floor((height / 2) - 30);
					
					$(obj).find(".portgal-link-nr1").css('top', toppos + 'px').css('left', '0px');
					$(obj).find(".portgal-link-nr1").delay(halfduration).animate( {
						opacity:	1,
						top:		toppos + 'px',
						left:		(polowaszerokosci - 70) + 'px'
					} , { duration: optionmain.durationmainanimation });
					
					leftpos		=	(polowaszerokosci - 70);
					
					$(obj).find(".portgal-link-nr2").css('top', '0px').css('right', leftpos + 'px');
					$(obj).find(".portgal-link-nr2").delay(halfduration).animate( {
						opacity:	1,
						top:		toppos + 'px',
					        right:		leftpos + 'px'
					} , { duration: optionmain.durationmainanimation });
			break;
			case 'linkstextfromleftandrightwidthscale':
				
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				
				szerokosc	=	optionmain.dl_width;
				height		=	optionmain.dl_height;
				
				ilosc	=	0;
				$(obj).find(".portgal-link").each(function() {
					ilosc	=	ilosc + 1;
				});
				
				if(ilosc==0) {
					return;
				}
				
				$(obj).find(".portgal-link-nr1").css( { left : '0px' } );
				h1	=	$(obj).find(".portgal-link-nr1").height();
				polowa		=	Math.floor(height / 2);
				top1		=	Math.floor(polowa - ( polowa / 2) - ( h1 / 2) ) + 20;
				if(ilosc==1) {
					top1	=	polowa - ( h1 / 2 );
				}
				top1		=	Math.floor(top1);
				
				
				w1	=	$(obj).find(".portgal-link-nr1").width() + getvalueWH($(obj).find(".portgal-link-nr1").css('paddingLeft')) + getvalueWH($(obj).find(".portgal-link-nr1").css('paddingRight'));
				cene1	=	( (szerokosc / 2) - ( w1 / 2 ) );
				
				$(obj).find(".portgal-link-nr1").css( { left : '0px', top: top1 + 'px', ccCustomPropNameScale: 0 }).css('-ms-transform', 'scale(0,0)').css('-webkit-transform', 'scale(0,0)').css('transform','scale(0,0)');
				
				$(obj).find(".portgal-link-nr1").delay(halfduration).animate( {
					opacity:	1,
					left:		cene1 + 'px',
					ccCustomPropNameScale:	200
				} , {
					easing:		'easeOutBack',
					duration:	optionmain.durationmainanimation,
					step: function(value, fx ) {
						if (fx.prop === 'ccCustomPropNameScale' ) {
							value	=	value / 200;
							$(this).css('-ms-transform' , 'scale('+value+','+value+')');
							$(this).css('-webkit-transform', 'scale('+value+','+value+')');
							$(this).css('transform' , 'scale('+value+','+value+')');
						}
					}
				});
				
				if(ilosc==2) {
					$(obj).find(".portgal-link-nr2").css('width', 'auto');
					$(obj).find(".portgal-link-nr2").css('left', '0px');
					
					h05		=	Math.floor($(obj).find(".portgal-link-nr2").height() / 2);
					
					top2		=	Math.floor( (polowa - h05) + (polowa / 2) ) - 20;
					
					$(obj).find(".portgal-link-nr2").css('top', top2 + 'px').css('ccCustomPropNameScale', 0).css('-ms-transform', 'scale(0,0)').css('-webkit-transform', 'scale(0,0)').css('transform','scale(0,0)');
					
					w	=	$(obj).find(".portgal-link-nr2").width() + getvalueWH($(obj).find(".portgal-link-nr2").css('paddingLeft')) + getvalueWH($(obj).find(".portgal-link-nr2").css('paddingRight'));
					
					left	=	Math.floor( (szerokosc / 2) - ( w / 2 ) );
					 $(obj).find(".portgal-link-nr2").css('left', szerokosc + 'px');
					$(obj).find(".portgal-link-nr2").delay(halfduration).animate( {
						ccCustomPropNameScale:	200,
						opacity:		1,
						left:			left + 'px'
					} , {
					easing:		'easeOutBack',
					duration:	optionmain.durationmainanimation,
					step: function(value, fx ) {
						if (fx.prop === 'ccCustomPropNameScale' ) {
							value	=	value / 200;
							$(this).css('-ms-transform' , 'scale('+value+','+value+')');
							$(this).css('-webkit-transform', 'scale('+value+','+value+')');
							$(this).css('transform' , 'scale('+value+','+value+')');
						}
					}
					});
				}
				
			break;
			case 'circlerotate':
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				szerokosc	=	optionmain.dl_width;
				height		=	optionmain.dl_height;
				ilosc	=	0;
				$(obj).find(".portgal-circle-anchor").each(function() {
					ilosc	=	ilosc + 1;
				});
				if(ilosc==1) {
					w1		=	$(obj).find(".portgal-circle-nr1").width();
					h1		=	$(obj).find(".portgal-circle-nr1").height();
					centere1	=	Math.floor((szerokosc / 2) - (w1 / 2) );
					hc1		=	Math.floor( (height / 2) - (h1 / 2) );
					$(obj).find(".portgal-circle-nr1").css('left', centere1).css('top', hc1);
				} else {
					w1		=	$(obj).find(".portgal-circle-nr1").width();
					w2		=	$(obj).find(".portgal-circle-nr2").width();
					centere1	=	Math.floor((szerokosc / 2) + 20);
					centere2	=	Math.floor((szerokosc / 2) - 20 - w2);
					hc1		=	Math.floor( (height / 2) - (w1 / 2) );
					hc2		=	Math.floor( (height / 2) - (w2 / 2) );
					$(obj).find(".portgal-circle-nr1").css('left', centere1).css('top', hc1);
					$(obj).find(".portgal-circle-nr2").css('left', centere2).css('top', hc2);
				}
				$(obj).find(".portgal-circle-anchor").css('-webkit-transform', 'rotateY(0deg)').css('transform', 'rotateY(0deg)').css('ccCustomPropName', 0);
				$(obj).find(".portgal-circle-anchor").delay(halfduration).animate( {
					ccCustomPropName:	200,
					opacity:		1
				} , {
				duration:	400,
				step: function(value, fx ) {
					if (fx.prop === 'ccCustomPropName' ) {
						value	=	90 - ( (value / 200) * 90 );
						$(this).css('-webkit-transform' , 'rotateY('+value+'deg)');
						$(this).css('transform', 'rotateY('+value+'deg)');
					}
				},
				finish: function() {
					$(this).css('ccCustomPropName',200);
				}
				});
			break;
			case 'likeadoor':
				
				ilosc	=	0;
				$(obj).find(".portgal-link").each(function() {
					ilosc	=	ilosc + 1;
				});
				
				if(ilosc==1) {
					$(obj).find(".portgal-link").addClass('darklayerlikedooronce');
				} else {
					$(obj).find(".portgal-link").addClass('darklayerlikedoordouble');
				}
				
				szerokosc	=	$(obj).find(".portgal-dlayer").width();
				height		=	$(obj).find(".portgal-dlayer").height();
				p		=	Math.floor(szerokosc / 2);
				heightp		=	Math.floor(height / 2);
				
				h1		=	Math.floor($(obj).find(".portgal-link-nr1").height()/2);
				h2		=	Math.floor($(obj).find(".portgal-link-nr2").height()/2);
				
				top1		=	heightp - h1;
				top2		=	heightp - h2;
				
				$(obj).find(".portgal-link-nr1").css('top', top1 + 'px');
				
				if(ilosc==2) {
					$(obj).find(".portgal-link-nr2").css('top', top2 + 'px');
				}
				
				$(obj).find(".portgal-dlayer").css('-webkit-perspective', p + 'px').css('perspective', p + 'px');
				
				$(obj).find(".portgal-link-nr1").css('ccCustomPropName', 0).css('opacity', 0.5).css('transform', 'rotateY(0deg)').css('-webkit-transform', 'rotateY(0deg)').animate( {
					ccCustomPropName:	200,
					opacity:		1
				} , {
				duration:	500,
				step: function(value, fx ) {
					if (fx.prop === 'ccCustomPropName' ) {
						value	=	120 - ( (value / 200) * 120 );
						$(this).css('-webkit-transform' , 'rotateY('+value+'deg)');
						$(this).css('transform', 'rotateY('+value+'deg)');
					}
				},
				finish: function() {
					$(this).css('ccCustomPropName',200);
				}
				});
				
				if(ilosc==2) {
					$(obj).find(".portgal-link-nr2").css('ccCustomPropName', 0).css('opacity', 0.5).css('transform', 'rotateY(0deg)').css('-webkit-transform', 'rotateY(0deg)').animate( {
						ccCustomPropName:	200,
						opacity:		1
					} , {
					duration:	500,
					step: function(value, fx ) {
						if (fx.prop === 'ccCustomPropName' ) {
							value	=	120 - ( (value / 200) * 120 );
							$(this).css('-webkit-transform' , 'rotateY(-'+value+'deg)');
							$(this).css('transform', 'rotateY(-'+value+'deg)');
						}
					}
					});
				}
				
			break;
			case 'tofloor':
				
				szerokosc	=	$(obj).find(".portgal-dlayer").width();
				$(obj).find(".portgal-dlayer").css('-webkit-perspective', szerokosc + 'px').css('perspective', szerokosc + 'px').css('perspective-origin', 'center bottom').css('-webkit-perspective-origin', 'center bottom');
				
				ilosc	=	0;
				$(obj).find(".portgal-link").each(function() {
					ilosc	=	ilosc + 1;
				});
				
				if(ilosc==1) {
					$(obj).find(".portgal-link").css('width', '100%');
				} else {
					$(obj).find(".portgal-link").css('width', '50%');
					$(obj).find(".portgal-link-nr2").css('right', '0px');
				}
				
				szerokosc	=	$(obj).find(".portgal-dlayer").width();
				height		=	$(obj).find(".portgal-dlayer").height();
				p		=	Math.floor(szerokosc / 2);
				heightp		=	Math.floor(height / 2);
				
				h1		=	Math.floor($(obj).find(".portgal-link-nr1").height()/2);
				h2		=	Math.floor($(obj).find(".portgal-link-nr2").height()/2);
				
				top1		=	heightp - h1;
				top2		=	heightp - h2;
				
				$(obj).find(".portgal-link-nr1").css('top', top1 + 'px');
				$(obj).find(".portgal-link-nr2").css('top', top2 + 'px');
				
				$(obj).find(".portgal-link").css('ccCustomPropName', 0).css('transform', 'rotateX(60deg)').css('-webkit-transform', 'rotateX(60deg)').animate( {
					ccCustomPropName:	200,
					opacity:		1
				} , {
				duration:	500,
				step:		function(value, fx ) {
					if (fx.prop === 'ccCustomPropName' ) {
						value	=	60 - ( (value / 200) * 60 );
						$(this).css('-webkit-transform' , 'rotateX('+value+'deg)');
						$(this).css('transform', 'rotateX('+value+'deg)');
					}
				}
				});
				
			break;
			case 'linktxtandbuttons':
				
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				
				szerokosc	=	optionmain.dl_width;
				height		=	optionmain.dl_height;
				
				$(obj).find(".portgal-link-nr1").css('top', '10px');
				h1		=	$(obj).find(".portgal-link-nr1").height();
				
				$(obj).find(".portgal-link-nr2").css('top', (20 + h1) + 'px');
				
				$(obj).find(".portgal-link-nr1 , .portgal-link-nr2").css('ccCustomPropNameScale', 0).css('-ms-transform', 'scale(0,0)').css('-webkit-transform', 'scale(0,0)').css('transform','scale(0,0)');
				
				$(obj).find(".portgal-link-nr1").delay(halfduration).animate( {
					opacity:	1,
					ccCustomPropNameScale:	200
				} , {
				duration:	optionmain.durationmainanimation,
				step: function(value, fx ) {
					if (fx.prop === 'ccCustomPropNameScale' ) {
						value	=	value / 200;
						$(this).css('-ms-transform' , 'scale('+value+','+value+')');
						$(this).css('-webkit-transform', 'scale('+value+','+value+')');
						$(this).css('transform' , 'scale('+value+','+value+')');
					}
				}
				});
				
				
				$(obj).find(".portgal-link-nr2").delay(halfduration).animate( {
					opacity:	1,
					ccCustomPropNameScale:	200
				} , {
				duration:	optionmain.durationmainanimation,
				step: function(value, fx ) {
					if (fx.prop === 'ccCustomPropNameScale' ) {
						value	=	value / 200;
						$(this).css('-ms-transform' , 'scale('+value+','+value+')');
						$(this).css('-webkit-transform', 'scale('+value+','+value+')');
						$(this).css('transform' , 'scale('+value+','+value+')');
					}
				}
				});
				
				
				w1	=	$(obj).find(".portgal-link-nr3").width();
				w2	=	$(obj).find(".portgal-link-nr4").width();
				
				if(w1!=null) {
					
					tw		=	Math.floor( ( szerokosc / 2 ) - w1 - 10 );
					
					$(obj).find(".portgal-link-nr3").css('left', tw + 'px').css('bottom', '-50px');
					$(obj).find(".portgal-link-nr4").css('left', Math.floor( ( szerokosc / 2 ) ) + 'px').css('bottom', '-50px');
					
					$(obj).find(".portgal-link-nr3").delay(halfduration).animate( {
						opacity:	1,
						bottom:		'0px'
					}, { 
						duration: 	optionmain.durationmainanimation
					});
					
					$(obj).find(".portgal-link-nr4").delay(halfduration).animate( {
						opacity:	1,
						bottom:		'0px'
					}, { 
						duration: 	optionmain.durationmainanimation
					});
					
				}
				
			break;
			case 'linktextfadein':
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				szerokosc	=	optionmain.dl_width;
				height		=	optionmain.dl_height;
				h1		=	$(obj).find(".portgal-link-nr1").height();
				w1		=	$(obj).find(".portgal-link-nr1").width();
				if(h1!=null) {
					pl		=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingLeft'));
					pr		=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingRight'));
					w1		=	w1 + pl + pr;
					left		=	Math.floor( ( ( szerokosc / 2 ) - ( w1 / 2) ) );
					
					$(obj).find(".portgal-link-nr1").css('bottom', '10px');
					
					txtwidth	=	$(obj).find(".portgal-link-nr1").width();
					pl		=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingLeft'));
					pr		=	getvalueWH($(obj).find(".portgal-link-nr1").css('paddingRight'));
					txtwidth	=	txtwidth + pl + pr;
					positioncenter	=	Math.floor(( szerokosc / 2) - (txtwidth / 2));
					$(obj).find(".portgal-link-nr1").css('left', positioncenter);
					
					
					$(obj).find(".portgal-link-nr1").delay(halfduration).animate({
						opacity:	1
					}, { duration: optionmain.durationmainanimation });
				}
			break;
			case 'circlefromleftandrightwithtxt':
				
				havetxt		=	false;
				$(obj).find(".portgal-text-link").each(function() { havetxt = true; });
				
				halfduration	=	Math.floor(optionmain.durationmainanimation / 2);
				
				szerokosc	=	optionmain.dl_width;
				center		=	Math.floor( szerokosc / 2 );
				
				halfitem	=	$(obj).find(".portgal-circle-nr1").height() / 2;
				wysokosc	=	Math.floor((optionmain.dl_height / 2) - halfitem);
				
				if(havetxt) {
					wysokosc	=	wysokosc - 30;
				}
				
				$(obj).find(".portgal-circle-nr1").css('left', '0px').css('top', wysokosc + 'px');
				
				$(obj).find(".portgal-circle-nr2").css('right', '0px').css('top', wysokosc + 'px');
				
				$(obj).find(".portgal-circle-nr1").delay(halfduration).animate({
					left:		(center-65) + 'px',
					opacity:	1
				}, { duration: optionmain.durationmainanimation , easing: 'easeOutQuart' });
				
				$(obj).find(".portgal-circle-nr2").delay(halfduration).animate({
					right:		(center-65) + 'px',
					opacity:	1
				}, { duration: optionmain.durationmainanimation , easing: 'easeOutQuart' });
				
				if(havetxt) {
					txtwidth	=	$(obj).find(".portgal-text-link").width();
					pl		=	getvalueWH($(obj).find(".portgal-text-link").css('paddingLeft'));
					pr		=	getvalueWH($(obj).find(".portgal-text-link").css('paddingRight'));
					txtwidth	=	txtwidth + pl + pr;
					positioncenter	=	Math.floor(( szerokosc / 2) - (txtwidth / 2));
					$(obj).find(".portgal-text-link").css('left', positioncenter).css('top', optionmain.dl_height + 'px');
					$(obj).find(".portgal-text-link").delay(halfduration).animate({
						top:		Math.floor(optionmain.dl_height / 2) + 20,
						opacity:	1
					}, { duration: optionmain.durationmainanimation, easing: 'easeOutQuart' });
				}
			break;
		}
		
		
		
		
		
		
	}
	
	function after_activedarklayer(obj, xcurrentportgal) {
		
		
		
		
	}
	
	function before_deactivedarklayer(obj) {
		$(obj).find('.portgaldlinsideanimation').stop(true, false);
		switch(gitems[xcurrentportgal][1].dlinneranimtype) {
			case 'linktxtandbuttons':
				
				$(obj).find(".portgal-link-nr1, .portgal-link-nr2, .portgal-link-nr3, .portgal-link-nr4").animate({
					opacity:	0
				}, {
					duration:	200
				});
				
			break;
			case 'linkstextfromcursor':
				$(obj).find(".portgal-link-nr1").animate({
					opacity:	0
				}, {
				  duration:	500
				});
			break;
			case 'linkscirclefromtop':
				$(obj).find(".portgal-circle-anchor").animate({
					opacity:	0,
					top:		'0px'
				}, {
				  duration:	200
				});
			break;
			case 'circlerotate':
				$(obj).find(".portgal-circle-anchor").animate({
					opacity:	0
				}, {
				  duration:	200
				});
			break;
			case 'linkstextfromtopandbottom':
				$(obj).find(".portgal-link-nr1").stop(true, false).animate({
					opacity:	0,
					top:		'0px'
				});
				wysokosc	=	$(obj).find(".portgal-dlayer").height();
				$(obj).find(".portgal-link-nr2").stop(true, false).animate({
					opacity:	0,
					top:		wysokosc + 'px'
				});
			break;
			case 'linkscirclefromleftandtop':
				$(obj).find(".portgal-link-nr1").stop(true, false).animate({
					opacity:	0,
					left:		'0px'
				}, {
				  duration:	200
				});
				$(obj).find(".portgal-link-nr2").stop(true, false).animate({
					opacity:	0,
					top:		'0px'
				}, {
				  duration:	200
				});
			break;
			case 'linkstextfromleftandrightwidthscale':
				
				$(obj).find(".portgal-link-nr2").width( $(obj).find(".portgal-link-nr2").width() );
				szerokosc	=	$(obj).find(".portgal-dlayer").width();
				$(obj).find(".portgal-link-nr1").stop(true, false).animate({
					opacity:	0,
					left:		( Math.floor( ( szerokosc / 2 ) * -1 ) ) + 'px'
				});
				$(obj).find(" .portgal-link-nr2").stop(true, false).animate({
					opacity:	0,
					left:		szerokosc + 'px'
				});
			break;
			case 'likeadoor':
				$(obj).find(".portgal-link").stop(true, false).animate({
					opacity:	0
				});
			break;
			case 'linktextfadein':
				$(obj).find(".portgal-link-nr1").stop(true, false).animate({
					opacity:	0
				}, { duration: 200 });
			break;
			case 'circlefromleftandrightwithtxt':
				wysokosc	=	$(obj).find(".portgal-dlayer").height();
				szerokosc	=	$(obj).find(".portgal-dlayer").width();
				
				
				$(obj).find(".portgal-circle-nr1").animate({ left: '0px', opacity: 0 }, {duration : 200 });
				$(obj).find(".portgal-circle-nr2").animate({ right: '0px', opacity: 0  }, {duration : 200 });
				$(obj).find(".portgal-text-link").animate({ top: wysokosc + 'px', opacity: 0  }, {duration : 200 });
				
			break;
		}
	}
	
	function after_deactivedarklayer(obj) {
		$(obj).find('.portgal-out-dl').show();
		
		
		
		
		
		
	}
	
	function portgal_activedarklayer(obj, event) {
		// określenie from cursor
		
		// $(obj).find(".portgal-dlayer").css('height', $(obj).find('.fdlayer-wrapper').height());
		bl	=	$(obj).find(".portgal-dlayer").attr('portgal-block-dl');
		
		if(bl=='1') {
		  return;
		}
		
		$(obj).find(".portgal-dlayer-after").show();
		$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 1);
		/*
		bordertop	=	event.currentTarget.offsetTop	+	event.currentTarget.offsetParent.offsetTop + 1;
		borderleft	=	event.currentTarget.offsetLeft	+	event.currentTarget.offsetParent.offsetLeft;
		*/
		w		=	$(obj).offset();
		bordertop	=	w.top + 1;
		borderleft	=	w.left;
		borderright	=	borderleft	+	event.currentTarget.offsetWidth - 1;
		borderbottom	=	bordertop	+	event.currentTarget.offsetHeight - 1;
		
		diff1		=	event.pageY - bordertop;
		diff2		=	borderright - event.pageX;
		diff3		=	borderbottom - event.pageY;
		diff4		=	event.pageX - borderleft;
		
		min		=	Math.min(diff1, diff2, diff3, diff4);
		from		=	'top';
		if(min==diff2) { from = 'right'; }
		if(min==diff3) { from = 'bottom'; }
		if(min==diff4) { from = 'left'; }
		
		$(obj).attr('portgalfromcursor', from);
		
		x		=	$(obj).closest('.nihon-portgal').attr('nihon-portgal-nr');
		xcurrentportgal	=	x;
		switch(gitems[x][1].darklayertype) {
		case 'imagescaledown':
			
			$(obj).find(".portgal-dlayer").css('height', '100%');
			$(obj).find(".portgal-dlayer").css('width', '100%');
			
			$(obj).find(".portgal-dlayer").stop(true, false);
			
			// $(obj).find(".portgal-dlayer").css('background-color', 'transparent');
			portgalbgscaleload	=	$(obj).find(".portgal-bgscale").attr('portgalbgscaleload');
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			$(obj).find(".portgal-dlayer").css('opacity', 0).show().animate( { opacity: 1}, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
				  
			}});
			
			if(portgalbgscaleload=='1') {
				
				$(obj).find(".portgal-bgscale").finish();
				porgalfiximgwidth($(obj).find(".portgal-bgscale"));
				size		=	$(obj).find(".portgal-bgscale").css('background-position', 'center center').css('background-size');
				myarr 		=	size.split(" ");
				myarr[0]	=	parseInt(myarr[0].substr(0, myarr[0].length - 2));
				w		=	myarr[0] - 40;
				$(obj).find(".portgal-bgscale").attr('portgalanimationfromwidth', myarr[0]).animate( { 'background-size' : w + 'px' }, { duration: 300, easing: 'easeOutQuad', complete : function() { 
					 after_activedarklayer(obj, xcurrentportgal);
				} } );
			} else {
				 after_activedarklayer(obj, xcurrentportgal);
			}
		break;
		case 'fromcorner':
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			$(obj).find(".portgal-dlayer").css('width', optionmain.dl_width);
			$(obj).find(".portgal-dlayer").css('height', optionmain.dl_height);
			
			$(obj).find(".portgal-dlayer").stop(true, false);
			
			$(obj).find(".portgal-dlayer").css('left', '-' + optionmain.dl_width + 'px');
			$(obj).find(".portgal-dlayer").css('top', '-' + optionmain.dl_height + 'px');
			
			dl	=	$(obj).find(".portgal-dlayer");
			
			objwykonaj	= { top: '0px', left: '0px' };
			
			before_activedarklayer(obj, xcurrentportgal , optionmain);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	300 ,
				complete:	function() {
				  after_activedarklayer(obj, xcurrentportgal);
			}});
			
		break;
		case 'imagescale':
			$(obj).find(".portgal-bgscale").stop();
			portgalbgscaleload	=	$(obj).find(".portgal-bgscale").attr('portgalbgscaleload');
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			if(portgalbgscaleload=='1') {
				$(obj).find(".portgal-bgscale").finish();
				porgalfiximgwidth($(obj).find(".portgal-bgscale"));
				size		=	$(obj).find(".portgal-bgscale").css('background-position', 'center center').css('background-size');
				myarr 		=	size.split(" ");
				myarr[0]	=	parseInt(myarr[0].substr(0, myarr[0].length - 2));
				w		=	myarr[0] + 40;
				$(obj).find(".portgal-bgscale").attr('portgalanimationfromwidth', myarr[0]).animate( { 'background-size' : w + 'px' }, { duration: 300, easing: 'easeOutQuad', complete : function() { 
					after_activedarklayer(obj, xcurrentportgal);
				} } );
			} else {
				after_activedarklayer(obj, xcurrentportgal);
			}
		break;
		case 'downtext':
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			
			
			$(obj).find(".portgal-dlayer-upbg").stop(true, false);
			$(obj).find(".portgal-dlayer").stop(true, false);
			
			wys	=	$(obj).find(".portgal-dlayer").find(".portgal-dl-downtext-subtext_bottom").height();
			pt	=	getvalueWH($(obj).find(".portgal-dlayer").find(".portgal-dl-downtext-subtext_bottom").css('paddingTop'));
			pb	=	getvalueWH($(obj).find(".portgal-dlayer").find(".portgal-dl-downtext-subtext_bottom").css('paddingBottom'));
			
			wys	=	wys + pt + pb;
			
			$(obj).find(".portgal-dlayer").find(".portgal-dl-downtext-subtext_bottom").show().animate({ 'bottom' : '-' + wys + 'px' }, { duration: 300 , complete : function() {
			  after_activedarklayer(obj, xcurrentportgal);
			} });
		break;
		case 'uptext':
			$(obj).find(".portgal-dlayer").css('height', '100%');
			$(obj).find(".portgal-bgscale.fdlayer-wrapper").stop(true, false);
			$(obj).find(".portgal-dlayer-upbg").stop(true, false);
			$(obj).find(".portgal-dlayer").stop(true, false);
			$(obj).find(".portgal-dlayer").find(".portgal-dl-header").height();
			wysokoscsub	=	$(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").height();
			$(obj).find(".portgal-dlayer").find(".portgal-dl-header").animate({ 'bottom' : wysokoscsub + 'px' }, { duration: 300 });
			$(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").css({ 'bottom' : '-' + wysokoscsub + 'px' });
			$(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").show().animate({ 'bottom' : '0px' }, { duration: 300 });
		break;
		case 'upbg':
			
			$(obj).find(".portgal-dlayer").css('height', '100%');
			$(obj).find(".portgal-bgscale.fdlayer-wrapper").stop(true, false);
			$(obj).find(".portgal-dlayer-upbg").stop(true, false);
			$(obj).find(".portgal-dlayer").stop(true, false);
			
			dodajw	=	50;
			wys	=	$(obj).find(".portgal-bgscale.fdlayer-wrapper").height();
			
			w	=	$(obj).find(".portgal-bgscale.fdlayer-wrapper").attr('portgal-darklayer-upbg-init-height');
			if(w==undefined) {
				$(obj).find(".portgal-bgscale.fdlayer-wrapper").attr('portgal-darklayer-upbg-init-height', wys);
			} else {
				wys	=	parseInt(w);
			}
			
			
			$(obj).find(".portgal-bgscale.fdlayer-wrapper").animate({
			  height:	(wys - 50) + 'px'
			}, { 
			  duration: 200 
			});
			
			$(obj).find(".portgal-dlayer-upbg").show().animate({ 
			  height:	dodajw + 'px' ,
			  opacity:	1
			}, {
			   duration:	200
			});
			
			$(obj).find(".portgal-dlayer").css('opacity', 0).show().animate( { opacity: 1}, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
				  
			}});
			
		break;
		case 'withunderlineandautoheight':
			$(obj).find(".portgal-dlayer").stop(true, false);
			wys	=	$(obj).find(".portgal-after-dlayer-content").height();
			$(obj).find(".portgal-dlayer").height("100%");
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	200;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			if(wys!=null) {
				wys	=	parseInt(wys);
				allh	=	parseInt($(obj).find('.fdlayer-wrapper').height());
				wys	=	allh - wys - 10;
				objwykonaj	= { top: wys + 'px', left: '0px'  };
				$(obj).find(".portgal-dlayer").animate(objwykonaj, {
					easing:		'swing' ,
					duration:	200 ,
					complete:	function() {
					  after_activedarklayer(obj, xcurrentportgal);
				}});
			}
		break;
		case 'withunderline':
		
			$(obj).find(".portgal-dlayer").stop(true, false);
			dl	=	$(obj).find(".portgal-dlayer");
			objwykonaj	= { top: '0px', left: '0px' };
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	200;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
				   after_activedarklayer(obj, xcurrentportgal);
			}});
			
		break;
		case 'withbottomarea':
			$(obj).css('transform', '');
			$(obj).css('-webkit-transform', '');
			
			
			
			h	=	$(obj).find('.fdlayer-wrapper').height();
			sz	=	$(obj).find('.fdlayer-wrapper').width();
			$(obj).find(".portgal-dlayer-withbottomarea").show();
			
			
			pl	=	getvalueWH($(obj).find(".portgal-dlayer-withbottomarea").css('paddingLeft'));
			pr	=	getvalueWH($(obj).find(".portgal-dlayer-withbottomarea").css('paddingRight'));
			// sz	=	sz - pl - pr;
			$(obj).closest(".nihon-items").css('perspective', 'none');
			$(obj).closest(".nihon-items").css('-webkit-perspective', 'none');

			$(obj).find(".fdlayer-wrapper").addClass('fdlayer-wrapper-with-overflow-visible');
			$(obj).find(".portgal-dlayer-withbottomarea").css('top', h + 'px').css('width', sz + 'px').show();
			
		case 'classic':
		case 'classicimgasdl':
			
			$(obj).find(".portgal-dlayer").css('height', $(obj).find('.fdlayer-wrapper').height());
			
			if(gitems[x][1].darklayertype=='classicimgasdl') {
				$(obj).find(".portgal-dlayer").css('background-color', 'transparent');
				$(obj).find('.portgal-bgscale').each(function() {
					hide	=	false;
					if($(this).css('display')=='none') {
						hide	=	true;
						$(this).show();
					}
					porgalfiximgwidth(this);
					if(hide) {
						$(this).hide();
					}
				});
			}
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 0);
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			objwykonaj	=	{ opacity: 1 };
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'swing' ,
			duration:	300,
			step: function(value, fx ) {
			} , 
			complete: function() {
				
				after_activedarklayer(obj, xcurrentportgal);
				
			} } );
			
		break;
		case 'perspectivewithscale':
			$(obj).find(".portgal-bgscale").stop();
			portgalbgscaleload	=	$(obj).find(".portgal-bgscale").attr('portgalbgscaleload');
			if(portgalbgscaleload=='1') {
				size	=	$(obj).find(".portgal-bgscale").css('background-size');
				myarr 	=	size.split(" ");
				myarr[0]	=	parseInt(myarr[0].substr(0, myarr[0].length - 2));
				myarr[1]	=	parseInt(myarr[1].substr(0, myarr[1].length - 2));
				w	=	$(obj).find(".portgal-bgscale").attr('hoverscalebeginwidth');
				if(w==undefined) {
					$(obj).find(".portgal-bgscale").attr('hoverscalebeginwidth', myarr[0]);
					$(obj).find(".portgal-bgscale").attr('hoverscalebeginheight', myarr[1]);
				}
				
				$(obj).find(".portgal-bgscale").css('background-position', 'center center');
				
				$(obj).find(".portgal-bgscale").animate( { 'background-size' : '-=' + myarr[0] + 'px' }, { duration: 500, complete : function() { 
					$(obj).find(".portgal-bgscale").css('background-size', '0px');
				} } );
			}
			
			p	=	$(obj).width();
			$(obj).find(".fdlayer-wrapper").css('-webkit-perspective', p + 'px').css('perspective', p + 'px').css('overflow', 'hidden');
			$(obj).find(".portgal-dlayer").css('height', $(obj).find('.fdlayer-wrapper').height());
			$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 0);
			$(obj).find(".portgal-dlayer").css('opacity', 0);
			$(obj).find(".portgal-dlayer").css('-webkit-transform', 'rotateY(-50deg)');
			$(obj).find(".portgal-dlayer").css('transform' , 'rotateY(-50deg)');
			
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			objwykonaj	=	{ ccCustomPropName : 200 , opacity: 1 };
			
			
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'linear' ,
			duration:	300,
			step: function(value, fx ) {
				if (fx.prop === 'ccCustomPropName' ) {
					valuesource	=	value;
					valueset	=	Math.floor( -50 + ( ( valuesource / 200 ) * 50 ) );
					$(this).css('-webkit-transform', 'rotateY('+valueset+'deg)');
					$(this).css('transform' , 'rotateY('+valueset+'deg)');
				}
			} , 
			complete: function() {
				$(this).css('ccCustomPropName', 0);
				//	$(this).portgal-animation-type
				
				after_activedarklayer(obj, xcurrentportgal);
				
			} } );
			
			
			
		break;
		case 'fromdarkbg':
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	200;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			objwykonaj	=	{ opacity: 0 };
			$(obj).find('.portgal-fromdarkbg-before').animate( objwykonaj , { 
				easing:		'linear' ,
				duration:	200,
				step: function(value, fx ) {
				} , 
				complete: function() {
					after_activedarklayer(obj, xcurrentportgal);
					$(this).hide();
					$(this).parent().find(".portgal-dlayer").show();
				} }
			);
		break;
		case 'greyscale':
			
			$(obj).find('.fdlayer-wrapper').removeClass('portgal-bggray');
			 
			$(obj).find(".portgal-dlayer").addClass('portgal-dlayer-transparent');
			
			url		=	$(obj).find('.fdlayer-wrapper').css('background-image');
			size		=	$(obj).find('.fdlayer-wrapper').css('background-size');
			 
			if(url!=undefined) {
				$(obj).find(".portgal-dlayer").css('background-image', url);
				$(obj).find(".portgal-dlayer").css('background-size', size);
			}
			
			
			
			$(obj).find(".portgal-dlayer").css('height', $(obj).find('.fdlayer-wrapper').height());
			$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 0)
			objwykonaj	=	{ opacity: 1 };
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	200;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'linear' ,
			duration:	200,
			step: function(value, fx ) {
			} , 
			complete: function() {
				after_activedarklayer(obj, xcurrentportgal);
			} } );
			
		break;  
		case 'fromcursor':
			$(obj).find(".portgal-dlayer").css('height', $(obj).find('.fdlayer-wrapper').height());
			$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 1);
			/*
			w	=	$(obj).offset();
			 
			bordertop	=	w.top + 1;
			borderleft	=	w.left;
			 
			borderright	=	borderleft	+	event.currentTarget.offsetWidth - 1;
			borderbottom	=	bordertop	+	event.currentTarget.offsetHeight - 1;
			
			diff1		=	event.pageY - bordertop;
			diff2		=	borderright - event.pageX;
			diff3		=	borderbottom - event.pageY;
			diff4		=	event.pageX - borderleft;
			
			min		=	Math.min(diff1, diff2, diff3, diff4);
			from		=	'top';
			if(min==diff2) { from = 'right'; }
			if(min==diff3) { from = 'bottom'; }
			if(min==diff4) { from = 'left'; }
			
			setleft	=	0;
			settop	=	0;
			*/
			ch	=	$(obj).height();
			cw	=	$(obj).find(".portgal-dlayer").width();
			dl	=	$(obj).find(".portgal-dlayer");
			from	=	$(obj).attr('portgalfromcursor');
			switch(from) {
			  case 'top':
				dl.css('top', (0 - ch) + 'px');
				dl.css('left', '0px');
			  break;
			  case 'left':
				dl.css('top', '0px');
				dl.css('left', (0 - cw) + 'px');
			  break;
			  case 'right':
				dl.css('top', '0px');
				dl.css('left', (cw) + 'px');
			  break;
			  case 'bottom':
				dl.css('top', (ch) + 'px');
				dl.css('left', '0px');
			  break;
			}
			
			objwykonaj	= { top: '0px', left: '0px' };
			
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	$(obj).find('.fdlayer-wrapper').width();
			optionmain.dl_height			=	$(obj).find('.fdlayer-wrapper').height();
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	300 ,
				complete:	function() {
				
				after_activedarklayer(obj, xcurrentportgal);
				
			}});
			
		break;
		case 'perspective':
			
			
			
			
			$(obj).find(".portgal-dlayer").css('height', $(obj).find('.fdlayer-wrapper').height());
			$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 0)
			$(obj).find(".portgal-dlayer").css('-webkit-transform', 'rotateX(45deg)');
			$(obj).find(".portgal-dlayer").css('transform' , 'rotateX(45deg)');;
			objwykonaj	=	{ ccCustomPropName : 200 , opacity: 1 };
			
			
			targetheight	=	$(obj).find('.fdlayer-wrapper').height();
			targetwidth	=	$(obj).find('.fdlayer-wrapper').width();
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	targetwidth;
			optionmain.dl_height			=	targetheight;
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'linear' ,
			duration:	300,
			step: function(value, fx ) {
				if (fx.prop === 'ccCustomPropName' ) {
					valuesource	=	value;
					valueset	=	Math.floor( 90 - ( ( valuesource / 200 ) * 90 ) );
					$(this).css('-webkit-transform', 'rotateX('+valueset+'deg)');
					$(this).css('transform' , 'rotateX('+valueset+'deg)');
				}
			} , 
			complete: function() {
				$(this).css('ccCustomPropName', 0);
				//	$(this).portgal-animation-type
				
				after_activedarklayer(obj, xcurrentportgal);
				
			} } );
			
		break;
		case 'rotateallx':
		case 'imagerotation':
			
			if(gitems[x][1].darklayertype=='imagerotation') {
				$(obj).find('.portgal-bgscale').each(function() {
					hide	=	false;
					if($(this).css('display')=='none') {
						hide	=	true;
						$(this).show();
					}
					porgalfiximgwidth(this);
					if(hide) {
						$(this).hide();
					}
				});
			}
			
			$(obj).find(".fdlayer-rotateallx-before").finish();
			$(obj).find(".fdlayer-rotateallx-after").finish();
			
			p	=	$(obj).width();
			$(obj).css('-webkit-perspective', p + 'px').css('perspective', p + 'px').css('overflow', 'hidden');
			
			wykonajobj	=	{
				ccCustomPropName : 200
			};
			
			
			targetheight	=	$(obj).find('.fdlayer-rotateallx-before').height();
			targetwidth	=	$(obj).find('.fdlayer-rotateallx-before').width();
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	targetwidth;
			optionmain.dl_height			=	targetheight;
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			// $(obj).find(".fdlayer-rotateallx-before").css('top'		,	'0px');
			// $(obj).find(".fdlayer-rotateallx-before").css('position'	,	'absolute');
			
			$(obj).find(".fdlayer-rotateallx-before").animate( wykonajobj , { 
				easing:		'swing' ,
				duration:	200 ,
				step:		function(value, fx ) {
				
				if (fx.prop === 'ccCustomPropName' ) {
					// $(this).css('ccCustomPropName',value);
					
					this.ccCustomPropName_v	=	value;
					
					valuesource	=	value;
					valueset	=	Math.floor( ( ( valuesource / 200 ) * 90 ) );
					$(this).css("-webkit-transform", "rotateY(" + valueset + "deg)");
					//$(this).css("-o-transform", "rotateY(" + valueset + "deg)"); 
					$(this).css("transform", "rotateY(" + valueset + "deg)");
				}
			} , 
			complete: function() {
				
				$(this).ccCustomPropName	=	200;
				
				$(this).parent().find(".fdlayer-rotateallx-after").css("-webkit-transform", "rotateY(90deg)").css("transform", "rotateY(90deg)").css('ccCustomPropName', 0).show(); 
				
				wykonajobj	=	{
					ccCustomPropName : 200
				}; 
				
				
				h	=	$(this).height();
				$(this).parent().find(".fdlayer-rotateallx-after").height(h);
				
				$(this).hide();
				
				$(this).parent().find(".fdlayer-rotateallx-after").animate( wykonajobj , {
					easing:		'swing' ,
					duration:	200 ,
					step:		function(value, fx ) {
					
					if (fx.prop === 'ccCustomPropName' ) {
						valuesource	=	value;
						valueset	=	270 + Math.floor( ( ( valuesource / 200 ) * 90 ) );
						$(this).attr('ccCustomPropName', value);
						$(this).css("-webkit-transform", "rotateY(" + valueset + "deg)"); 
						//$(this).css("-o-transform", "rotateY(" + valueset + "deg)"); 
						$(this).css("transform", "rotateY(" + valueset + "deg)");
					}
					
					} , complete: function() {
						$(this).css('ccCustomPropName',0);
						$(this).css("-webkit-transform", "rotateY(0deg)"); 
						//$(this).css("-o-transform", "rotateY(0deg)"); 
						$(this).css("transform", "rotateY(0deg)");
						after_activedarklayer(obj, xcurrentportgal);
					} 
				} );
				
			} } );
			
			
		break;
		case 'frombigger':
		case 'frombiggerimgasdl':
			$(obj).find(".portgal-dlayer").closest('.fdlayer-wrapper ').css('overflow', 'visible');
			
			targetheight	=	$(obj).find('.fdlayer-wrapper').height();
			targetwidth	=	$(obj).find('.fdlayer-wrapper').width();
			
			height20procent	=	Math.floor(targetheight / 4);
			width20procent	=	Math.floor(targetwidth / 4);
			
			sourceheight	=	targetheight + height20procent;
			sourcewidth	=	targetwidth + width20procent;
			
			$(obj).find(".portgal-dlayer").height(sourceheight);
			$(obj).find(".portgal-dlayer").width(sourcewidth);
			
			if(gitems[x][1].darklayertype=='frombiggerimgasdl') {
				
				$(obj).find(".portgal-dlayer").css('background-color', 'transparent');
				$(obj).find('.portgal-dlayer.portgal-bgscale').each(function() {
					hide	=	false;
					if($(this).css('display')=='none') {
						hide	=	true;
						$(this).show();
					}
					
					porgalfiximgwidth(this);
					
					if(hide) {
						$(this).hide();
					}
				});
				
				$(obj).find(".portgal-dlayer.portgal-bgscale").css('background-position', 'center center');
				$(obj).find(".portgal-dlayer.portgal-bgscale").css('background-size' , '+=' + width20procent + 'px');
				
			}
			
			
			$(obj).find(".portgal-dlayer").css('left', '-' + Math.floor( width20procent / 2 ) + 'px');
			$(obj).find(".portgal-dlayer").css('top', '-' + Math.floor( height20procent / 2 ) + 'px');
			
			$(obj).find(".portgal-dlayer").finish().hide().show().css('opacity', 0);
			
			optionmain	=	{};
			optionmain.durationmainanimation	=	300;
			optionmain.dl_width			=	targetwidth;
			optionmain.dl_height			=	targetheight;
			
			before_activedarklayer(obj, xcurrentportgal, optionmain);
			
			objwykonaj	=	{ 
			  opacity :	1 , 
			  top:		'0px',
			  left:		'0px',
			  width :	targetwidth + 'px' ,
			  height :	targetheight + 'px',
 			  'background-size': '-=' + width20procent + 'px'
			};
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
				easing:		'swing' ,
				duration:	300 ,
				step: 		function(value, fx ) {
			} , 
			complete: function() {
				
				after_activedarklayer(obj, xcurrentportgal);
				
			} } );
			
		break;
		}
		//	darklayertype
		
	}
	
	function portgal_deactivedarklayer(obj, event) {
		x	=	$(obj).closest('.nihon-portgal').attr('nihon-portgal-nr');
		
		switch(gitems[x][1].darklayertype) {
		case 'fromcorner':
			h	=	$(obj).find(".portgal-dlayer").css('height');
			w	=	$(obj).find(".portgal-dlayer").css('width');
			
			$(obj).find(".portgal-dlayer").stop();
			
			dl	=	$(obj).find(".portgal-dlayer");
			
			objwykonaj	= { top: '-' + h, left: '-' + w };
			
			before_deactivedarklayer(obj);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
					
					after_deactivedarklayer(obj);
					
			}});
			
		break;
		case 'imagescaledown':
		case 'imagescale':
			
			$(obj).find(".portgal-bgscale").stop();
			portgalbgscaleload	=	$(obj).find(".portgal-bgscale").attr('portgalbgscaleload');
			
			before_deactivedarklayer(obj);
			
			if(portgalbgscaleload=='1') {
				width	=	parseInt($(obj).find(".portgal-bgscale").attr('portgalanimationfromwidth'));
				$(obj).find(".portgal-bgscale").finish().animate( { 'background-size' : width + 'px' }, { duration: 200, complete : function() { 
					after_deactivedarklayer(obj);
					porgalfiximgwidth(this);
				} } );
			} else {
				after_deactivedarklayer(obj);
			}
			$(obj).find(".portgal-dlayer").stop(true, false);
			$(obj).find(".portgal-dlayer").animate({opacity: 0}, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
				  $(this).hide();
			}});
		break;
		case 'downtext':
			
			before_deactivedarklayer(obj);
			
			$(obj).find(".portgal-dlayer").find(".portgal-dl-downtext-subtext_bottom").stop(true, false);
			$(obj).find(".portgal-dlayer").find(".portgal-dl-downtext-subtext_bottom").animate({ 'bottom' : '0px' }, { duration: 300 , complete: function() {
				after_deactivedarklayer(obj);
			} });
		break;
		case 'uptext':
			$(obj).find(".portgal-dlayer").find(".portgal-dl-header").stop(true, false);
			$(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").stop(true, false);
			wysokoscsub	=	$(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").height();
			pt		=	getvalueWH($(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").css('paddingTop'));
			pb		=	getvalueWH($(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").css('paddingBottom'));
			wysokoscsub	=	wysokoscsub + pt + pb;
			$(obj).find(".portgal-dlayer").find(".portgal-dl-header").animate({ 'bottom' : '0px' }, { duration: 300 });
			$(obj).find(".portgal-dlayer").find(".portgal-dl-subtext").animate({ 'bottom' : '-' + wysokoscsub + 'px' }, { duration: 300 });
		break;
		case 'upbg':
			
			$(obj).find(".portgal-bgscale.fdlayer-wrapper").stop(true, false);
			$(obj).find(".portgal-dlayer-upbg").stop(true, false);
			$(obj).find(".portgal-dlayer").stop(true, false);
			
			w	=	$(obj).find(".portgal-bgscale.fdlayer-wrapper").attr('portgal-darklayer-upbg-init-height');
			
			objwykonaj	=	{
			  height:	(w) + 'px'
			};
			
			$(obj).find(".portgal-bgscale.fdlayer-wrapper").animate(
			  objwykonaj, { 
			  duration:	200 ,
			  complete:	function() {
			    
			  }
			});
			
			$(obj).find(".portgal-dlayer-upbg").animate({ 
			  opacity:	0,
			  height:	'0px' 
			}, {
			  duration: 200 ,
			  complete: function(){
			    $(this).hide();
			  }
			});
			
			$(obj).find(".portgal-dlayer").animate({opacity: 0}, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
				  $(this).hide();
			}});
			
		break;
		case 'withunderlineandautoheight':
			$(obj).find(".portgal-dlayer").stop();
			dl	=	$(obj).find(".portgal-dlayer");
			h	=	parseInt($(obj).find(".fdlayer-wrapper").height());
			objwykonaj	= { top: (h - 10) + 'px' };
			
			before_deactivedarklayer(obj);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
					after_deactivedarklayer(obj);
				} }
			);
		break;
		case 'withunderline':
			$(obj).find(".portgal-dlayer").stop();
			h	=	parseInt($(obj).find(".fdlayer-wrapper").height());
			dl	=	$(obj).find(".portgal-dlayer");
			objwykonaj	= { top: (h - 10) + 'px' };
			
			before_deactivedarklayer(obj);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	200 ,
				complete:	function() {
					
					after_deactivedarklayer(obj);
					
				} }
			);
			
		break;
		case 'withbottomarea':
			$(obj).find(".portgal-dlayer-withbottomarea").hide();
		
		case 'classic':
		case 'classicimgasdl':
			$(obj).find(".portgal-dlayer").stop();
			
			before_deactivedarklayer(obj);
			
			objwykonaj	=	{ opacity: 0 };
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'swing' ,
			duration:	300,
			step: function(value, fx ) {
			} , 
			complete: function() {
				$(this).css('opacity', 0);
				$(this).hide();
				
				after_deactivedarklayer(obj);
				
			} } );
			
		break;
		case 'perspectivewithscale':
			
			portgalbgscaleload	=	$(obj).find(".portgal-bgscale").attr('portgalbgscaleload');
			if(portgalbgscaleload=='1') {
				$(obj).find(".portgal-bgscale").stop();
				ile	=	$(obj).find(".portgal-bgscale").attr('hoverscalebeginwidth');
				
				$(obj).find(".portgal-bgscale").animate( { 'background-size' : ile + 'px' } , {
				  easing:		'swing' ,
				  duration:	200,
				  complete : function() {
					str	=	$(this).attr('hoverscalebeginwidth') + 'px ';
					str	=	str + $(this).attr('hoverscalebeginheight') + 'px';
					
					$(this).css('background-size', str);
					
					porgalfiximgwidth(this);
					
				  }
				} );
				
			}
			
			$(obj).find(".portgal-dlayer").stop();
			
			before_deactivedarklayer(obj);
			
			width	=	$(obj).find(".fdlayer-wrapper").width();
			width	=	width * 2;
			$(obj).find(".fdlayer-wrapper").css('-webkit-perspective', width + 'px').css('perspective', width + 'px');
			objwykonaj	=	{ ccCustomPropName : 200 , opacity: 0 };
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'swing' ,
			duration:	200,
			step: function(value, fx ) {
				if (fx.prop === 'ccCustomPropName' ) {
					valuesource	=	value;
					valueset	=	0 - Math.floor( ( ( valuesource / 200 ) * 50 ) );
					$(this).css('-webkit-transform', 'rotateY('+valueset+'deg)');
					$(this).css('transform' , 'rotateY('+valueset+'deg)');
					if(value>190) {
						$(this).hide();
					}
				} 
				
			} , 
			complete: function() {
				$(this).css('ccCustomPropName', 0);
				$(this).css('-webkit-transform', 'rotateY(-50deg)');
				$(this).css('transform' , 'rotateY(-50deg)');
				
				after_deactivedarklayer(obj);
			} } );
			
			
			
		break;
		case 'fromdarkbg':
			
			before_deactivedarklayer(obj);
			
			$(obj).find(".portgal-fromdarkbg-before").stop().show();
			$(obj).find(".portgal-dlayer").stop().fadeOut();
			objwykonaj	=	{ opacity: 1 };
			$(obj).find('.portgal-fromdarkbg-before').animate( objwykonaj , { 
				easing:		'linear' ,
				duration:	200,
				step: function(value, fx ) {
					
				} , 
				complete: function() {
					
					after_deactivedarklayer(obj);
					
				} } 
			);
		break;
		case 'greyscale':
			
			before_deactivedarklayer(obj);
			
			$(obj).find(".portgal-dlayer").finish();
			objwykonaj	=	{ opacity: 0 };
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'linear' ,
			duration:	10,
			step: function(value, fx ) {
				
			} , 
			complete: function() {
				
				after_deactivedarklayer(obj);
				
				hastv	=	false;
				$(this).closest("li").find(".portgalvideotv").each(function() {
					hastv	=	true;
				})
				
				if(!hastv) {
					$(this).closest('.fdlayer-wrapper').addClass('portgal-bggray');
				}
				
			} } );
			
		break;    
		case 'fromcursor':
			
			$(obj).find(".portgal-dlayer").stop();
			
			// console.log($(obj).offsetParent().offset());
			
			w		=	$(obj).offset();
			//	bordertop	=	event.currentTarget.offsetTop	+	event.currentTarget.offsetParent.offsetTop + 1;
			//	borderleft	=	event.currentTarget.offsetLeft	+	event.currentTarget.offsetParent.offsetLeft;
			bordertop	=	w.top;
			borderleft	=	w.left;
			
			borderright	=	borderleft	+	event.currentTarget.offsetWidth - 1;
			borderbottom	=	bordertop	+	event.currentTarget.offsetHeight - 1;
			
			diff1		=	event.pageY - bordertop;
			diff2		=	borderright - event.pageX;
			diff3		=	borderbottom - event.pageY;
			diff4		=	event.pageX - borderleft;
			
			min		=	Math.min(diff1, diff2, diff3, diff4);
			from		=	'top';
			if(min==diff2) { from = 'right'; }
			if(min==diff3) { from = 'bottom'; }
			if(min==diff4) { from = 'left'; }
			
			setleft	=	0;
			settop	=	0;
			
			ch	=	$(obj).height();
			cw	=	$(obj).find(".portgal-dlayer").width();
			dl	=	$(obj).find(".portgal-dlayer");
			switch(from) {
			  case 'top':
				objwykonaj	= { top: (0 - ch) + 'px', left: '0px' };
			  break;
			  case 'left':
				objwykonaj	= { top: '0px', left: (0-cw) + 'px' };
			  break;
			  case 'right':
				objwykonaj	= { top: '0px', left: (cw) + 'px' };
			  break;
			  case 'bottom':
				objwykonaj	= { top: ch + 'px', left: '0px' };
			  break;
			}
			
			before_deactivedarklayer(obj);
			
			dl.animate(objwykonaj, {
				easing:		'swing' ,
				duration:	300 ,
				complete:	function() {
					
					after_deactivedarklayer(obj);
					
				} }
			);
			
		break;
		case 'perspective':
			
			
			
			$(obj).find(".portgal-dlayer").stop(true, false);
			width	=	$(obj).find(".fdlayer-wrapper").width();
			width	=	width * 2;
			$(obj).find(".fdlayer-wrapper").css('-webkit-perspective', width + 'px').css('perspective', width + 'px');
			objwykonaj	=	{ ccCustomPropName : 200 , opacity: 0 };
			
			before_deactivedarklayer(obj);
			
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
			easing:		'linear' ,
			duration:	100,
			step: function(value, fx ) {
				if (fx.prop === 'ccCustomPropName' ) {
					valuesource	=	value;
					valueset	=	Math.floor( ( ( valuesource / 200 ) * 90 ) );
					$(this).css('-webkit-transform', 'rotateX('+valueset+'deg)');
					$(this).css('transform' , 'rotateX('+valueset+'deg)');
					if(value>190) {
						$(this).hide();
					}
				} 
				
			} , 
			complete: function() {
				
				after_deactivedarklayer(obj);
				
				$(this).css('ccCustomPropName', 0);
				$(this).css('-webkit-transform', 'rotateX(90deg)');
				$(this).css('transform' , 'rotateX(90deg)');
			} } );
			
		break;
		case 'imagerotation':
		case 'rotateallx':
			
			$(obj).find(".fdlayer-rotateallx-before").stop(true, false);
			
			wykonajobj	=	{
				ccCustomPropName : 200
			};
			
			timeduration	=	300;
			if($(obj).find(".fdlayer-rotateallx-after").css('display')=='none') {
				timeduration	=	0;
			}
			
			before_deactivedarklayer(obj);
			
			$(obj).find(".fdlayer-rotateallx-after").animate( wykonajobj , {
				easing:		'swing' ,
				duration:	timeduration ,
				step:		function(value, fx ) {
				if (fx.prop === 'ccCustomPropName' ) {
					valuesource	=	value;
					valueset	=	360 - Math.floor( ( ( valuesource / 200 ) * 90 ) );
					$(this).css("-webkit-transform", "rotateY(" + valueset + "deg)"); 
					$(this).css("transform", "rotateY(" + valueset + "deg)");
				}
				} , complete: function() {
					$(this).hide();
					$(this).css('ccCustomPropName',0);
					wykonajobj	=	{
						ccCustomPropName : 0
					};
					$(this).parent().find(".fdlayer-rotateallx-before").show().animate( wykonajobj , { 
						easing:		'swing' ,
						duration:	300 ,
						step:		function(value, fx ) {
						if (fx.prop === 'ccCustomPropName' ) {
							valuesource	=	value;
							valueset	=	Math.floor( ( ( valuesource / 200 ) * 90 ) );
							$(this).css("-webkit-transform", "rotateY(" + valueset + "deg)"); 
							$(this).css("transform", "rotateY(" + valueset + "deg)");
						}
					} , 
					complete: function() {
						
						after_deactivedarklayer(obj);
						
						$(this).ccCustomPropName	=	0;
						
					} } );
					
				} 
			} );
			
			
		break;
		case 'frombigger':
		case 'frombiggerimgasdl':
			
			targetheight	=	$(obj).find('.fdlayer-wrapper').height();
			targetwidth	=	$(obj).find('.fdlayer-wrapper').width();
			
			height20procent	=	Math.floor(targetheight / 5);
			width20procent	=	Math.floor(targetwidth / 5);
			
			sourceheight	=	targetheight + height20procent;
			sourcewidth	=	targetwidth + width20procent;
			
			$(obj).find(".portgal-dlayer").stop();
			
			objwykonaj	=	{ 
			  opacity :	0 , 
			  top: 		'-' + Math.floor( height20procent / 2 ) + 'px',
			  left:		'-' + Math.floor( width20procent / 2 ) + 'px',
			  width :	sourcewidth + 'px' ,
			  height :	sourceheight + 'px',
			  'background-size' : '+=' + width20procent + 'px'
			};
			
			before_deactivedarklayer(obj);
			
			$(obj).find(".portgal-dlayer").animate( objwykonaj , { 
				easing:		'swing' ,
				duration:	200 ,
				step: 		function(value, fx ) {
			} , 
			complete: function() {
				$(this).height( $(obj).find('.fdlayer-wrapper').height() );
				$(this).width( $(obj).find('.fdlayer-wrapper').width() );
				
				after_deactivedarklayer(obj);
				
			} } );
			
		break;
		}
	}
	
	function getvalueWH(str) {
		if(str===undefined) {
			return	0;
		}
		str	=	str.substr(0, str.length - 2);
		return	parseInt(str);
	}
	
	function porgalfiximgwidth(th) {
		
		if($(th).attr('portgalbgscaleload')!='1') {
			return;
		}
		
		
		portgalnr	=	$(th).closest(".nihon-portgal").attr("nihon-portgal-nr");
		
		/*
		lastscaledfor	=	$(th).attr('lastscaledfor');
		
		wwidth		=	$(window).width();
		
		if(lastscaledfor==wwidth) {
		  alert(lastscaledfor + ' -- ' + wwidth);
		  return;
		}
		$(th).attr('lastscaledfor', wwidth);
		*/
		itemheight	=	parseInt($(th).attr('portgal-init-height'));
		itemwidth	=	parseInt($(th).attr('portgal-init-width'));
		
		width_border	=	$(th).width();
		height_border	=	$(th).attr('portgallastsetheight');
		
		// $(th).attr('hh', 'hh: ' + height_border );
		
		if(itemheight<height_border && itemheight>70 && gitems[portgalnr][1].bgscalebestheight) {
			$(th).height(itemheight);
		}
		
		
		if(itemheight<height_border && itemwidth<width_border) {
			
			px	=	Math.floor((width_border - itemwidth) / 2);
			py	=	Math.floor((height_border - itemheight) / 2);
			
			//	opera źle wykrywa background postion dla center center
			// $(th).attr('pxpy', 'wb: ' + width_border + " iw:  " + itemwidth + ' hb: ' + height_border + ' ih: ' + itemheight );
			
			$(th).css({'background-position': px + "px " + py + 'px' });
			
			$(th).css({'background-size': itemwidth + "px " + itemheight + "px" });
			return;
		}
		
		
		propszer	=	itemwidth	/	width_border;
		propwyso	=	itemheight	/	height_border;
		
		doszerokosci	=	true;
		if(propszer>propwyso) {
			doszerokosci	=	false;
		}
		
		
		
		sizewidth	=	width_border;
		sizeheight	=	height_border;
		if(doszerokosci) {
			
			sizewidth	=	width_border;
			sizeheight	=	Math.ceil(itemheight / propszer);
			
		} else {
			
			sizeheight	=	height_border;
			sizewidth	=	Math.ceil(itemwidth / propwyso);
			
		}
		
		if(sizeheight>70 && gitems[portgalnr][1].bgscalebestheight) {
			$(th).height(sizeheight);
		}
		
		
		$(th).css({'background-size': sizewidth + "px " + sizeheight + "px" });
		px	=	Math.floor((width_border - sizewidth) / 2);
		py	=	Math.floor((height_border - sizeheight) / 2);
		
		$(th).css({'background-position': px + "px " + py + 'px' });
		
		return;
		
		
		
		
		
		/*
		doszerokosci	=	true;
		hr		=	itemheight / height_border;
		wr		=	itemwidth / width_border;
		if(wr>hr) {
		  doszerokosci	=	false;
		}
		
		sizewidth	=	width_border;
		sizeheight	=	height_border;
		
		if(doszerokosci) {
			if(itemwidth<width_border) {	//	musi byc ten warunek bo robi jakies glupie odstepy w szerokosci
				sizewidth	=	Math.ceil(itemwidth / hr);
			}
		} else {
			sizeheightb	=	sizeheight;
			sizeheight	=	Math.ceil(itemheight / wr)
		}
		
		if(sizeheight>70 && gitems[portgalnr][1].bgscalebestheight) {
			$(th).height(sizeheight);
		}
		
		
		$(th).css({'background-size': sizewidth + "px " + sizeheight + "px" });
		px	=	Math.floor((width_border - sizewidth) / 2);
		py	=	Math.floor((height_border - sizeheight) / 2);
		
		//	opera źle wykrywa background postion dla center center
		// $(th).attr('pxpy', 'wb: ' + width_border + " iw:  " + sizewidth + ' hb: ' + height_border + ' sh: ' + sizeheight );
		
		$(th).css({'background-position': px + "px " + py + 'px' });
		*/
	}
	
	
	function functioninitportgallightboxactiveitems(portgalnr) {
		
		$(gitems[portgalnr][0]).find("li.portgalnewitem .portgal-button-run-lightbox").click(function(e) {
			
			$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').fadeIn(200);
			
			$(this).closest('.nihon-portgal').find(".portgal-ajaxpreolader").show();
			
			imgurl	=	$(this).attr("portgalshowinlightboximg");
			imgtxt	=	$(this).attr("portgalshowinlightboxtxt");
			
			// alert( $(this).closest('.nihon-portgal').html() );
			
			buttoncurrent	=	this;
			
			//	navigacja - begin
				allitemsforportgallightbox	=	[];
				portgalnr	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
				for(key in gitems[portgalnr][2]) {
					if(gitems[portgalnr][2][key].portgal_show==1) {
						$(gitems[portgalnr][2][key]).find(".portgal-button-run-lightbox").each(function() {
							img	=	$(this).attr('portgalshowinlightboximg');
							txt	=	$(this).attr('portgalshowinlightboxtxt');
							il	=	allitemsforportgallightbox.length;
							allitemsforportgallightbox[il]		=	[];
							allitemsforportgallightbox[il][0]	=	img;
							allitemsforportgallightbox[il][1]	=	txt;
							allitemsforportgallightbox[il][2]	=	0;
							if(buttoncurrent==this) {
								allitemsforportgallightbox[il][2]	=	1;
							}
						});
					}
				}
			//	navigacja - end
			
			if(allitemsforportgallightbox.length<=1) {
				$(this).closest('.nihon-portgal').find(".portgal-lightbox-navigation").hide();
			} else {
				$(this).closest('.nihon-portgal').find(".portgal-lightbox-navigation").show();
			}
			
			
			
			$(this).closest('.nihon-portgal').find(".portgal-lightboximgwrap").css('background-color', 'rgba(0, 0, 0, 0.5)').finish();
			
			$(this).closest('.nihon-portgal').find('.portgal-lightboxhidden').html('<img src="' + imgurl + '">');
			$(this).closest('.portgal-lightboxwrap').find(".portgal-textunderimage").html('');
			
			
			
			$(this).closest('.nihon-portgal').find('.portgal-lightboxhidden img').each(function() {
				
				$(this).load(function() {
					
					$(this).closest('.nihon-portgal').find(".portgal-ajaxpreolader").fadeOut(100);
					
					width	=	$(this).width();
					height	=	$(this).height();
					w	=	$(window).width();
					h	=	$(window).height();
					wmax		=	w - 100;
					setwidth	=	width;
					setheight	=	height;
					if(width>wmax) {
						setwidth	=	wmax;
						ratio		=	width / wmax;
						setheight	=	Math.floor(height * ratio);
					}
					// alert(width + ' -- ' + height);
					
					url	=	$(this).attr('src');
					
					
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").css('width', setwidth + 'px');
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").css('height', setheight + 'px');
					
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").show().html('<img src="' + imgurl + '" style="width: 0px; height: 0px">');
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-textunderimage").html(imgtxt);
					
					h	=	setheight;	//	$(this).closest('.portgal-lightboxwrap').find(".portgal-lightboxwrapimage").height();
					topset	=	Math.floor( ($(window).height() / 2) - (h / 2));
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-textunderimage").css('top', (topset + height) + 'px');
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").find("img").animate(
					  { 
						width: setwidth + 'px' , 
						height: setheight + 'px' 
					  }, {
					  complete:	function() {
						$(this).closest(".portgal-lightboximgwrap").css('background-color', 'white');
					  }
					});
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboxwrapimage").css('top', topset + 'px').animate({ opacity: 1 });
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightbox-navigation li span").css('top', ((h / 2)-12) + 'px');
				});
				
			});
			
		});
		
	}
	
	function functioninitportgallightbox(th) {
		
		$(th).find(".portgal-lightboxclose, .portgal-lightboxwrap").click(function() {
			$(this).closest('.portgal-lightboxwrap').fadeOut();
			$(this).closest('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").fadeOut(function() {
				$(this).css('width' , 'auto');
				$(this).css('height' , 'auto');
				$(this).html('');
			});
		});
		
		
		

		
		$(th).find(".portgal-lightboxnavigationleft, .portgal-lightboxnavigationright").click(function(e) {
			e.preventDefault();
			kierunek	=	'left';
			if($(this).hasClass('portgal-lightboxnavigationright')) {
				kierunek	=	'right';
			}
			
			currentkey	=	0;
			for(key in allitemsforportgallightbox) {
				if(allitemsforportgallightbox[key][2]==1) {
					currentkey	=	key;
					break;
				}
			}
			
			if(kierunek=='left') {
				currentkey	=	parseInt(currentkey) - 1;
			} else {
				currentkey	=	parseInt(currentkey) + 1;
			}
			
			if(currentkey>(allitemsforportgallightbox.length-1)) {
				currentkey	=	0;

			}
			if(currentkey<0) {
				currentkey	=	allitemsforportgallightbox.length - 1;
			}
			
			
			imgurl	=	allitemsforportgallightbox[currentkey][0];
			imgtxt	=	allitemsforportgallightbox[currentkey][1];
			
			$(this).closest('.nihon-portgal').find('.portgal-lightboxhidden').html('<img src="' + imgurl + '">');
			$(this).closest('.portgal-lightboxwrap').find(".portgal-textunderimage").finish().animate({opacity: 0} , { complete: function() {
				$(this).html('');
			} });
			
			$(this).closest('.nihon-portgal').find('.portgal-lightboxhidden img').each(function() {
				$(this).load(function() {
					width	=	$(this).width();
					height	=	$(this).height();
					w	=	$(window).width();
					h	=	$(window).height();
					wmax	=	w	-	100;
					setwidth	=	width;
					setheight	=	height;
					if(width>wmax) {
						setwidth	=	wmax;
						ratio		=	width / wmax;
						setheight	=	Math.floor(height * ratio);
					}
					
					for(k in allitemsforportgallightbox) {
						allitemsforportgallightbox[k][2]	=	0;
						if(k==currentkey) {
							allitemsforportgallightbox[k][2]	=	1;
						}
					}
					
					curwidth	=	$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap img").width();
					curheight	=	$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap img").height();
					
					url	=	$(this).attr('src');
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").css('height', curheight + 'px').css('width', curwidth + 'px').html('<img src="' + imgurl + '" style="width: ' + setwidth + 'px; height: ' + setheight + 'px">');
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap img").hide();
					
					h	=	setheight;	//	$(this).closest('.portgal-lightboxwrap').find(".portgal-lightboxwrapimage").height();
					topset	=	Math.floor( ($(window).height() / 2) - (h / 2));
					
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").stop(true, false).animate({ width: setwidth + 'px', height: setheight + 'px' }, {
						complete: function() {
							
							
							$(this).closest('.portgal-lightboxwrap').find(".portgal-textunderimage").css('top', (topset + height) + 'px');
							
							
							$(this).find("img").fadeIn(200);
							$(this).closest('.portgal-lightboxwrap').find(".portgal-textunderimage").html(imgtxt).finish().animate({opacity: 1});
						}
					});
					
					//	$(this).closest('.portgal-lightboxwrap').find(".portgal-lightboximgwrap").find("img").animate({ width: setwidth + 'px' , height: setheight + 'px' });
					// .css('top', topset + 'px')
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightboxwrapimage").animate({ opacity: 1, top : topset + 'px' });
					$(this).closest('.nihon-portgal').find('.portgal-lightboxwrap').find(".portgal-lightbox-navigation li span").css('top', ((h / 2)-12) + 'px');
				});
			});
			
			return	false;
		});
		
		$(th).find(".portgal-lightboxwrapimage").click(function(e) {
			e.preventDefault();
			return	false;
		});
		
	}
	
	function afterimageisload(th) {
		$(th).attr('portgaldataload', '1');
		url	=	$(th).attr('src');
		width	=	$(th).width();
		height	=	$(th).height();
		indexs	=	$(th).attr('portgalindex');
		$(th).closest('.nihon-portgal').find(".nihon-items .portgal-bgscale").each(function() {
			index	=	$(this).attr('portgal-bg-index');
			// alert(indexs + ' -- ' + index);
			if(indexs==index) {

				$(this).css('background-image', 'url(' + url + ')');
				$(this).attr('portgal-init-height', height).attr('portgal-init-width', width).attr('portgalbgscaleload', 1);
				id	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
				if($(this).hasClass('fdlayer-wrapper') && gitems[id][1].darklayertype=='greyscale') {
					$(this).addClass('portgal-bggray');
				}
				porgalfiximgwidth(this);

				$(this).css('opacity', 0);
				$(this).animate({'opacity': 1},300);
				
			}
		});
	}
	
	function uruchomvideo(th) {
		
		$(th).closest('.nihon-portgal').find('.portgal-dlayer').attr('portgal-block-dl', 0);
		
		$(th).closest('.nihon-portgal').find(".portgalvideotv").fadeOut(function() {
		  x	=	 $(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
		  if(gitems[x][1].darklayertype=='greyscale') {
			  $(this).closest("li").find('.fdlayer-wrapper').addClass('portgal-bggray');
		  }
		  $(this).remove();
		  
		});
		type	=	$(th).attr('portgalvideotype');
		html	=	'';
		
		switch(type) {
		case 'youtube':
			videourl	=	$(th).attr('portgalvideourl');
			
			
			html	=	'<iframe width="100%" height="100%" src="' + videourl +'?&autoplay=1" frameborder="0" allowfullscreen  type="application/x-shockwave-flash" allowscriptaccess="always"  class="portgalvideotv"></iframe>';
			
			//	html	=	'<iframe width="100%" height="200px" src="' + videourl +'?&autoplay=1" frameborder="0" allowfullscreen  type="application/x-shockwave-flash" allowscriptaccess="always"  class="portgalvideotv"></iframe>';
			
			// html	=	'<iframe width="1024" height="576" src="' + videourl + '?version=3&amp;enablejsapi=1&amp;html5=1&amp;controls=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" data-src="' + videourl + '?version=3&amp;enablejsapi=1&amp;html5=1&amp;controls=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" style="position: absolute; top: 0px; left: 0px; display: block; height: 194px; width: 345px; opacity: 1; visibility: inherit;" wmode="Opaque" class="esg-youtube-frame haslistener esg-youtubevideo isplaying" id="ytiframe49698"></iframe>';
			
		break;
		case 'vimmeo':
			videourl	=	$(th).attr('portgalvideourl');
			html	=	'<iframe src="' + videourl +'?&autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="portgalvideotv"></iframe>';
		break;
		case 'html5':
		  html	=	'<div style="width: 100%; height: 100%; background-color: black"  class="portgalvideotv"><video width="100%" height="100%" controls="" autoplay >';
		  ogg	=	$(th).attr('portgalvideoogg');
		  webm	=	$(th).attr('portgalvideowebm');
		  mp4	=	$(th).attr('portgalvideomp4');
		  if(ogg!='' && ogg!=undefined) {
			    html	=	html + '<source type="video/ogg" src="' + ogg + '"></source>';
		  }
		  if(webm!='' && webm!=undefined) {
			    html	=	html + '<source type="video/webm" src="' + webm + '"></source>';
		  }
		  if(mp4!='' && mp4!=undefined) {
			    html	=	html + '<source type="video/mp4" src="' + mp4 + '"></source>';
		  }
		  html	=	html + '</video></div>';
		break;
		}
		
		$(th).closest('.fdlayer-wrapper').find('.portgal-dlayer').attr('portgal-block-dl', 1).hide();
		$(th).closest('.fdlayer-wrapper').find('.portgal-dlayer-after').hide();
		/*
		html	=	'<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"/>';

		
		
		html	=	'<iframe width="1024" height="576" src="https://www.youtube.com/embed/JuyB7NO0EYY?version=3&amp;enablejsapi=1&amp;html5=1&amp;controls=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" data-src="https://www.youtube.com/embed/JuyB7NO0EYY?version=3&amp;enablejsapi=1&amp;html5=1&amp;controls=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" style="position: absolute; top: 0px; left: 0px; display: block; height: 247px; width: 439px; opacity: 1; visibility: inherit;" wmode="Opaque" class="esg-youtube-frame haslistener esg-youtubevideo isplaying" id="ytiframe89843"></iframe>';
		
		
 		html	=	'<iframe width="1024" height="576" src="' + videourl + '?version=3&amp;enablejsapi=1&amp;html5=1&amp;controls=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" data-src="' + videourl + '?version=3&amp;enablejsapi=1&amp;html5=1&amp;controls=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" style="position: absolute; top: 0px; left: 0px; display: block; height: 194px; width: 345px; opacity: 1; visibility: inherit;" wmode="Opaque" class="esg-youtube-frame haslistener esg-youtubevideo isplaying" id="ytiframe49698"></iframe>';
		*/
		$(th).closest('.fdlayer-wrapper').append(html);
		
	}
	
	function uruchomkupienie(th) {
		
		/*
		aw	=	$(th).closest('li').find(".portgal-link-viewcard").width();
		pl	=	getvalueWH($(th).closest('li').find(".portgal-link-viewcard").css('paddingLeft'));
		pr	=	getvalueWH($(th).closest('li').find(".portgal-link-viewcard").css('paddingRight'));
		allw	=	aw + pl + pr;
		pw	=	$(th).closest('li').find(".portgal-link-viewcard").parent().width();
		ph	=	$(th).closest('li').find(".portgal-link-viewcard").parent().height();
		center	=	Math.floor( ( pw - allw ) / 2 );
		
		bottom	=	Math.floor( ph / 6 );
		$(th).closest('li').find(".portgal-link-viewcard").css('left', center + 'px').css('bottom', bottom).css('display', 'block');
		*/
		
		if(globaloption_woocommerce_productisaddedbyajax==0) {
			globaloption_woocommerce_productisaddedbyajax	=	1;
		} else {
			alert("Operation in progress");
			return;
		}
		portgalnr	=	$(th).closest(".nihon-portgal").attr("nihon-portgal-nr");
		pwpid		=	$(th).attr("portgalwoocommerceproductid");
		url		=	gitems[portgalnr][1].wordpressurl;
		//	url		=	'http://localhost/wordpress40/';
		url		=	url + 'wp-admin/admin-ajax.php';
		
		$(th).closest('li').find(".portgal-link-viewcard").attr('href', gitems[portgalnr][1].woocommerce_cart_url);
		
		$(th).closest('li').find(".portgal-item-ajaxpreloader").fadeIn(200);
		$.post( url , { action: "woocommerce_add_to_cart", product_id: pwpid, quantity: 1 }).done(function( data ) {
			globaloption_woocommerce_productisaddedbyajax	=	0;
			$(th).closest('li').find(".portgal-item-ajaxpreloader").fadeOut(200);
			if(data.error==true) {
				alert( "Unknown error" );
			} else {
				$(th).closest('li').find(".portgal-link-viewcard").animate({opacity: 1});
			}
		});
	}
	
	function portgalinitbinditems(indexgitems) {
		
		
		
		elements	=	gitems[indexgitems][2];
		x		=	elements.length; 
		$(gitems[indexgitems][0]).find(".nihon-items > li.portgalnewitem").each(function() {
			this.portgal_show	=	1;
			this.search_string	=	$(this).find('.portgal-vfsearch').val();
			if(this.search_string==undefined) {
				this.search_string	=	'';
			}
			this.search_string	=	this.search_string.toLowerCase();
			elements[x]		=	this;
			x	=	x + 1;
		});
		
		
		gitems[indexgitems][2]	=	elements;
		
		array_bg_scale		=	[];
		
		$(gitems[indexgitems][0]).find(".nihon-items .portgalnewitem .portgal-bgscale").each(function() {
			
			$(this).attr('portgalbgscaleload', 0);
			url	=	$(this).css('background-image');
			
			url1	=	url;
			url	=	url.substr(4, url.length-5);
			if(url.substr(0,1)=='"') {
				url	=	url.substr(1, url.length-2);
			}
			if(url!=window.location.href) {
				$(this).attr('portgal-bg-index' , index_img_items);
				$(this).css('background-image' , 'url("' + gitems[indexgitems][1].preloader + '")');

				$(this).closest('.nihon-portgal').find(".portgal-hidden-for-load").append("<img src='" + url + "' portgaldataload='0' portgalindex='" + index_img_items + "' >");
				array_bg_scale[index_img_items]	=	url;
				index_img_items			=	index_img_items + 1;
			}
		});
		
		
		
		$(gitems[indexgitems][0]).find(".portgalnewitem .portgal-button-run-video").click(function() {
			uruchomvideo(this);
		});
		
		$(gitems[indexgitems][0]).find(".portgalnewitem .portgal-button-addtocart").click(function() {
			uruchomkupienie(this);
		});
		
		$(gitems[indexgitems][0]).find(".portgal-hidden-for-load img").each(function() {
			if(this.complete) {
				afterimageisload(this);
				$(this).remove();
			} else {
				$(this).load(function() {  
					afterimageisload(this);
					$(this).remove();
				});
			}
		});
		
		$(gitems[indexgitems][0]).find(".nihon-items > li.portgalnewitem").hover(function(e) {
			portgal_activedarklayer(this, e);
		}, function(e) {
			portgal_deactivedarklayer(this, e);
		});
		
		portgal_wyliczpozycjeelementow(indexgitems, true);
		
	}
	
	function fordarklayertypebind(itemlength) {
		
		switch(gitems[itemlength][1].darklayertype) {
			case 'imagescaledown':
				$(gitems[itemlength][0]).find(".portgalnewitem .portgal-bgscale").stop().css('background-color', 'white');
			break;
			case 'withunderline':
			case 'withunderlineandautoheight':
				$(gitems[itemlength][0]).find(".portgalnewitem .portgal-dlayer").addClass("portgal-dlayer_widthborderbottom");
			break;
			case 'uptext':
			case 'downtext':
				$(gitems[itemlength][0]).find(".portgalnewitem .portgal-dlayer").show().css('opacity', 1).css('height', '100%').css('background-color', 'transparent');
			break;
		}
		
	}
	
	function portgal_initloadmore(itemlength) {
		if(gitems[itemlength][1].loadmore=='bybutton') {
			if(gitems[itemlength][1].loadmorehavemore==0) {
				gitems[itemlength][0].find(".portgal-button-loadmore-wrap").hide();
			}
			$(gitems[itemlength][0]).find(".portgal-button-loadmore").click(function() {
				portgalnr	=	$(this).closest(".nihon-portgal").attr("nihon-portgal-nr");
				begin			=	gitems[portgalnr][1].loadmoredatabegin;
				databaseid		=	gitems[portgalnr][1].databaseid;
				initload_byajaxdatafor(portgalnr, begin, databaseid);
			});
		}
	}
	
	function microtime(get_as_float) {  
	    var now = new Date().getTime() / 1000;  
	    var s = parseInt(now);  
	    return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;  
	} 
	
	function initload_byajaxdatafor(portgalnr, begin, databaseid) {
		
		if(gitems[portgalnr][1].loadmoreactive!=0) {
			return;
		}
		
		if(gitems[portgalnr][1].loadmorehavemore==0) {
			if(gitems[portgalnr][1].loadmore=='bybutton') {
				gitems[portgalnr][0].find(".portgal-button-loadmore-wrap").slideUp();
			}
			return;
		}
		
		gitems[portgalnr][1].loadmoreactive	=	1;
		
		$(gitems[portgalnr][0]).find(".portgal-load-moreisrun").stop().slideDown(function() {
			$(this).find(".portgal-load-moreisrun_inner").stop().fadeIn();
		});
		
		jQuery.ajax({
			type		: "post",
			url		: myAjax.ajaxurl,
			// dataType	: "script" ,
			data		: { action: "portgal_get_next_items" , databaseid: databaseid , begin : begin, portgalnr: portgalnr },
			success 	: function(data) {
				eval(data);
				//	alert(response);
				
				//	alert(return_data);
				$(gitems[return_portgalnr][0]).find(".portgal-load-moreisrun_inner").stop().fadeOut(function() {
					$(gitems[return_portgalnr][0]).find(".portgal-load-moreisrun").stop().slideUp();
				});
				
				
				$(gitems[return_portgalnr][0]).find(".nihon-items").append(return_data);
				
				fordarklayertypebind(return_portgalnr);
				
				portgalinitbinditems(return_portgalnr);
				
				functioninitportgallightboxactiveitems(return_portgalnr);
				
				$(gitems[return_portgalnr][0]).find(".nihon-items > li.portgalnewitem").removeClass("portgalnewitem");
				gitems[return_portgalnr][1].loadmoredatabegin	=	return_begin;
				gitems[return_portgalnr][1].loadmoreactive	=	0;
				gitems[return_portgalnr][1].loadmorehavemore	=	return_havemore;
				// alert(return_havemore);
				CheckView();
				
			}
		});
		
		/*
		$.getScript( "http://localhost/wordpress/portgal.txt", function( data ) {
			$(gitems[return_portgalnr][0]).find(".nihon-items").append(return_data);
			
			fordarklayertypebind(return_portgalnr);
			
			portgalinitbinditems(return_portgalnr);
			
			functioninitportgallightboxactiveitems(return_portgalnr);
			
			$(gitems[return_portgalnr][0]).find(".nihon-items > li.portgalnewitem").removeClass("portgalnewitem");
			gitems[return_portgalnr][1].loadmoredatabegin	=	return_begin;
			gitems[return_portgalnr][1].loadmoreactive	=	0;
			
			CheckView();
		});
		*/
		
	}
	
	function portgal_scaleemptyheight(x, addh, timedelay) {
		return ;
		if(gitems[x][1].fullscreenmode) {
			
			navigation	=	gitems[x][0].find(".portgal-navigation-wrap");
			wysokosc	=	navigation.height();
			pt		=	getvalueWH($(navigation).css('paddingTop'));
			pb		=	getvalueWH($(navigation).css('paddingBottom'));
			mb		=	getvalueWH($(navigation).css('marginBottom'));
			mt		=	getvalueWH($(navigation).css('marginTop'));
			navh		=	wysokosc + pb + pt + mb + mt;
			add 		=	0;
			time		=	0;
			if(addh!=undefined) {
				add	=	addh;
			}
			if(timedelay!=undefined) {
				time	=	timedelay;
			}
			addlmh	=	0;
			lmh	=	gitems[x][0].find(".portgal-button-loadmore-wrap").height();
			if(lmh!=null) {
				pt	=	getvalueWH(gitems[x][0].find(".portgal-button-loadmore-wrap").css('paddingTop'));
				pb	=	getvalueWH(gitems[x][0].find(".portgal-button-loadmore-wrap").css('paddingBottom'));
				mb	=	getvalueWH(gitems[x][0].find(".portgal-button-loadmore-wrap").css('marginBottom'));
				mt	=	getvalueWH(gitems[x][0].find(".portgal-button-loadmore-wrap").css('marginTop'));
				addlmh	=	lmh + mt + mb + pb + pt;
			}
			
			
			gitems[x][0].next(".portgal-fullscreen-empty-height").finish().delay(time).animate( { height: navh + add + addlmh });
			//
		}
	}
	
	function CheckView() {
		$(".nihon-portgal .portgal-loadmore-byscroll").each(function() {
			if($(this).portgal_is_on_screen()) {
				currenttime	=	Math.floor(new Date().getTime() / 1000);	//	Max raz na sekunde
				if(currenttime==globaloption_lastmorecheckviewbeforeajaxquery) { return; }
				globaloption_lastmorecheckviewbeforeajaxquery		=	  currenttime;
				portgalnr	=	$(this).closest(".nihon-portgal").attr("nihon-portgal-nr");
				begin			=	gitems[portgalnr][1].loadmoredatabegin;
				databaseid		=	gitems[portgalnr][1].databaseid;
				initload_byajaxdatafor(portgalnr, begin, databaseid);
			}
		});
	}
	
	function portgal_fullscreemode_width(itemlength) {
		$(gitems[itemlength][0]).css('width', '100%');
		docwidth	=	$(document).width();
		
		if (!($(document).height() > $(window).height())) {
		    // docwidth	=	docwidth - 16;	//	jeśli nie ma scrollbara to odejmuje 16 px
		}
		
		minus		=	Math.floor(( docwidth - $(gitems[itemlength][0]).width() ) / 2);
		if(minus>0) {
			$(gitems[itemlength][0]).css('left' , '-' + minus + 'px');
		}
		$(gitems[itemlength][0]).width( docwidth );
		
	}
	
	$.fn.portgal	=	function(options) {
		
		itemlength			=	gitems.length;
		gitems[itemlength]		=	[];
		gitems[itemlength][0]	=	this;
		var defaults	=	{ 
			// animationfadein:	true,
			// animationfadeout:	true,
			databaseid:		0,
			loadmore:		'',	//	bybutton	byscroll
			loadmoredatabegin:	0,
 			loadmoreactive:		0,
  			loadmorehavemore:	1,
			loadmore_label:		'LOAD MORE',
			
			wordpressurl:		'/',
			
			woocommerce_cart_url:	'',
			
			preloader:		'',
			darklayertype:		'classic',	//	downtext	frombiggerimgasdl	classicimgasdl	imagerotation	fromcorner	imagescaledown	imagescale	uptext	frombigger	withbottomarea	withunderlineandautoheight	withunderline	classic  	perspectivewithscale	fromdarkbg	greyscale	fromcursor	perspective	rotateallx
			dlinneranimtype:	'linktextfadein',	//	circlefromleftandrightwithtxt	linktextfadein	linktxtandbuttons	tofloor		likeadoor	linkstextfromleftandrightwidthscale	linkstextfromtopandbottom	linkscirclefromtop	linkscirclefromleftandtop	linkstextfromcursor	circlerotate
			itemmaxwidthforrows:	{
				row0:	{
					itemminwidth:	100,
					itemmaxwidth:	400
				} 
			},
			animationmode:		'',
			workmode:		0,
			
			fullscreenmode:		false,
			
			current_category:	'',
			current_orderby:	'',
 			current_orderbytype:	'',
			
			bgscaleratio:		0.75,
			bgscalebestheight:	false,
			
			search:				false,
			search_clear_button:		false,
			search_clear_button_label:	'Clear',
			
			navigation_skin_id:		0,
			
			animation_movehidespeed:	600,
			animation_easing:		'swing',
			
			animation_movewithskew:		true,
			animation_fadeinoutwithscale:	false,
			animation_fadeinoutwithrotate:	false,
			animation_fadeinoutwithgoout:	false,
			
			orderby_label:		'Sort By:',
			orderby:		{ },
			orderbyshow:		false
			
		};
		
		
		var options		=	$.extend({}, defaults, options); 
		
		// options.animationmode	=	'wooida';
		
		switch(options.animationmode) {
		  case 'veronica':
			 options.darklayertype		=	'frombiggerimgasdl';
			 options.dlinneranimtype	=	'linktextfadein';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	350
			 } }; */
		  break;
		  case 'sophie':
		  case 'sophielight':
			 options.darklayertype		=	'classic';
			 options.dlinneranimtype	=	'linkscirclefromtop';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	350
			 } }; */
		  break;
		  case 'misha':
			 options.darklayertype		=	'perspectivewithscale';
			 options.dlinneranimtype	=	'circlefromleftandrightwithtxt';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	350
			 } }; */
		  break;
		  case 'kristina':
			 options.darklayertype		=	'fromcorner';
			 options.dlinneranimtype	=	'linkscirclefromleftandtop';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	350
			 } }; */
		  break;
		  case 'irina':
			 options.darklayertype		=	'fromdarkbg';
			 options.dlinneranimtype	=	'linkstextfromleftandrightwidthscale';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	350
			 } }; */
		  break;
		  case 'alexis':
			 options.darklayertype		=	'perspective';
			 options.dlinneranimtype	=	'linkscirclefromtop';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	350
			 } }; */
		  break;
		  case 'angelina':
			 options.darklayertype		=	'downtext';
			 options.dlinneranimtype	=	'circlefromleftandrightwithtxt';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'chihiro':
			 options.darklayertype		=	'classic';
			 options.dlinneranimtype	=	'linkstextfromtopandbottom';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'videorose':
			 options.darklayertype		=	'classic';
			 options.dlinneranimtype	=	'linkstextfromtopandbottom';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'videoaoi':
			 options.darklayertype		=	'fromcursor';
			 options.dlinneranimtype	=	'linkstextfromcursor';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'videoayumi':
			 options.darklayertype		=	'greyscale';
			 options.dlinneranimtype	=	'linkscirclefromtop';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'silvia':
			 options.darklayertype		=	'withunderlineandautoheight';
			 options.dlinneranimtype	=	'linkscirclefromtop';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'marie':
			 options.darklayertype		=	'withunderline';
			 options.dlinneranimtype	=	'circlerotate';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'kayla':
			 options.darklayertype		=	'withbottomarea';
			 options.dlinneranimtype	=	'linktextfadein';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'adele':
			 options.darklayertype		=	'rotateallx';
			 options.dlinneranimtype	=	'circlefromleftandrightwithtxt';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'bridget':
			 options.darklayertype		=	'classicimgasdl';
			 options.dlinneranimtype	=	'circlefromleftandrightwithtxt';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	400
			 } }; */
		  break;
		  case 'lisa':
			 options.darklayertype		=	'imagescaledown';
			 options.dlinneranimtype	=	'linkstextfromleftandrightwidthscale';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	250
			 } }; */
		  break;
		  case 'caroline':
			 options.darklayertype		=	'imagescale';
			 options.dlinneranimtype	=	'linkstextfromcursor';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	250
			 } }; */
		  break;
		  case 'jessie':
			 options.darklayertype		=	'uptext';
			 options.dlinneranimtype	=	'linkstextfromcursor';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	370
			 } }; */
		  break;
		  
		  
		  case 'wooadriana':
			 options.darklayertype		=	'classic';
			 options.dlinneranimtype	=	'linkscirclefromtop';
			/*  options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	370
			 } }; */
			 //	options.bgscalebestheight	=	true;
		  break;
		  case 'wooida':
			 options.darklayertype		=	'classic';
			 options.dlinneranimtype	=	'linkscirclefromtop';
			 /* options.itemmaxwidthforrows	=	 { row0 : {
					itemmaxwidth:	370
			 } }; */
			 //	options.bgscalebestheight	=	true;
		  break;
		  
		}
		
		$(this).addClass('workmode-' + options.animationmode);
		
		if(options.fullscreenmode) {
			$(this).addClass('nihon-portgal-fullscreenmode');
		}
		
		if(options.fullscreenmode) {
			$('<div class="portgal-fullscreen-empty-height"></div>').insertAfter(gitems[itemlength][0]);
		}
		
		gitems[itemlength][1]	=	options;
		
		
		switch(options.loadmore) {
			case 'bybutton':
				$(gitems[itemlength][0]).append('<div class="portgal-button-loadmore-wrap portgal-blm-type-' + options.navigation_skin_id + ' "><span class="portgal-button-loadmore ">' + options.loadmore_label + '</span></div>');
			break;
			case 'byscroll':
				if(globaloption_bindloadscroll==false) {
					$(window).bind("load scroll touchmove", function() {
						clearTimeout($.data(this, 'scrollTimer'));
						$.data(this, 'scrollTimer', setTimeout(function() {
							CheckView();
						}, 30));
					} );
					globaloption_bindloadscroll	=	true;
				}
				$(gitems[itemlength][0]).append('<div class="portgal-loadmore-byscroll"></div>');
			break;
		}
		portgal_initloadmore(itemlength);
		
		
		
		
		$(this).attr('portgal-init', 1);
		$(this).addClass(" nihon-workmode" + options.workmode);
		
		html	=	$(this).find(".nihon-items-list").html();
		
		$(this).attr('nihon-portgal-nr', itemlength);
		
		$(this).find(".portgal-navigation span").click(function() {
			
			$(this).closest(".portgal-navigation").find("span").removeClass('portgal-check');
			$(this).addClass('portgal-check');
			portgalnr	=	$(this).closest('.nihon-portgal').attr('nihon-portgal-nr');
			gitems[portgalnr][1].current_category	=	$(this).attr('portgal-category');
			portgal_active_category(portgalnr);
		});
		
		
		$('<div class="nihon-items-wrapper"><span class="nihon-portgal-top-line"></span><ul class="nihon-items">' + html + "</ul></div>").insertBefore($(this).find(".nihon-items-list"));
		
		$(this).append('<div class="portgal-hidden-for-load" style="position: absolute; top: -99999px; "></div>');
		
		
		$(this).find(".nihon-items > li").addClass("portgalnewitem");
		
		portgal_makeordernavigation(itemlength);
		
		fordarklayertypebind(itemlength);
		
		functioninitportgallightbox(this);
		
		
		elements		=	[];
		gitems[itemlength][2]	=	elements;
		
		portgalinitbinditems(itemlength);
		
		functioninitportgallightboxactiveitems(itemlength);
		
		$(gitems[itemlength][0]).find(".nihon-items > li.portgalnewitem").removeClass("portgalnewitem");
		
		
		
		
		
		

		
		

		
		if(itemlength==0) {
			
			$(window).resize(function() {
				clearTimeout($.data(this, 'resizeTimer'));
				$.data(this, 'resizeTimer', setTimeout(function() {
					for(key in gitems) {
						if(gitems[key][1].fullscreenmode==1) {
							portgal_fullscreemode_width(key);
						}
						portgal_wyliczpozycjeelementow(key, false);
						
					}
				}, 200));
			});
		}
		
		
		return this.each(function() { }); 
		
	};
})(jQuery);


jQuery.fn.portgal_is_on_screen = function(){
    var win = jQuery(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

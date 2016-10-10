
function portgal_sort_up(x) {
	curentlp	=	parseInt(jQuery("#" + x + " .orderinput").val());
	if(curentlp==0) { return; }
	newlp		=	curentlp - 1;
	html		=	"<tr id=\'" + x + "\'>" + jQuery("#" + x).html() + "</tr>";
	tableall	=	jQuery("#" + x).closest("table");
	jQuery("#" + x).remove();
	c	=	0;
	jQuery(tableall).find("tbody tr").each(function() {
		if(c==newlp) { jQuery(html).insertBefore(this); }
		c	=	c + 1;
	});
	c	=	0;
	jQuery(tableall).find("tbody tr .orderinput").each(function() {
		jQuery(this).val(c);
		c	=	c + 1;
	});
}

function portgal_sort_down(x) {
	tableall	=	jQuery("#" + x).closest("table");
	curentlp	=	parseInt(jQuery("#" + x + " .orderinput").val());
	maxlp		=	-1;
	jQuery(tableall).find("tbody tr").each(function() {
		maxlp	=	maxlp + 1;
	});
	if(curentlp==maxlp) { return; }
	newlp		=	curentlp;
	html		=	"<tr id=\'" + x + "\'>" + jQuery("#" + x).html() + "</tr>";
	jQuery("#" + x).remove();
	c	=	0;
	jQuery(tableall).find("tbody tr").each(function() {
		if(c==newlp) { jQuery(html).insertAfter(this); }
		c	=	c + 1;
	});
	c	=	0;
	jQuery(tableall).find("tbody tr .orderinput").each(function() {
		jQuery(this).val(c);
		c	=	c + 1;
	});
}













function portgal_sort_up2(x) {
	 
	tableall	=	jQuery("." + x).closest("table");
	c	=	0;
	
	  
	jQuery(tableall).find("tbody tr .orderinput").each(function() {
		jQuery(this).val(c);
		c	=	c + 1;
	});
	
	curentlp	=	parseInt(jQuery("." + x + " .orderinput").val());
	if(curentlp==0) { return; }
	
	newlp		=	curentlp - 1;
	
	id		=	jQuery("." + x).attr('id');
	addidhtml	=	'';
	if(id!=undefined) { addidhtml = ' id="' + id + '" '; }
	
	html	=	jQuery("." + x).clone();
	
	jQuery("." + x).remove();
	c	=	0;
	jQuery(tableall).find("tbody tr").each(function() {
		if(c==newlp) { jQuery(html).insertBefore(this); }
		c	=	c + 1;
	});
	
	c	=	0;
	jQuery(tableall).find("tbody tr .orderinput").each(function() {
		jQuery(this).val(c);
		c	=	c + 1;
	});
}

function portgal_sort_down2(x) {
	tableall	=	jQuery("." + x).closest("table");
	
	c	=	0;
	jQuery(tableall).find("tbody tr .orderinput").each(function() {
		jQuery(this).val(c);
		c	=	c + 1;
	});
	
	curentlp	=	parseInt(jQuery("." + x + " .orderinput").val());
	maxlp		=	-1;
	jQuery(tableall).find("tbody tr").each(function() {
		maxlp	=	maxlp + 1;
	});
	if(curentlp==maxlp) { return; }
	newlp		=	curentlp;
	
	id		=	jQuery("." + x).attr('id');
	addidhtml	=	'';
	if(id!=undefined) { addidhtml = ' id="' + id + '" '; }
	
	html	=	jQuery("." + x).clone();
	
	jQuery("." + x).remove();
	c	=	0;
	jQuery(tableall).find("tbody tr").each(function() {
		if(c==newlp) { jQuery(html).insertAfter(this); }
		c	=	c + 1;
	});
	
	c	=	0;
	jQuery(tableall).find("tbody tr .orderinput").each(function() {
		jQuery(this).val(c);
		c	=	c + 1;
	});
}

jQuery(document).ready(function() {
	jQuery(".media-button-select-image").click(function(event) {
		currentbutton	=	this;
		event.preventDefault();
		if(wp.media.frames.portgal_frame) {
		  wp.media.frames.portgal_frame.open();
		  return;
		}
		wp.media.frames.portgal_frame = wp.media({
		    title: 'Select graphics',
		    multiple: false,
		    library: { type: 'image' },
		    button: { text: 'Use this photo' }
		});
		var portgal_media_set_image = function() {
			var selection = wp.media.frames.portgal_frame.state().get('selection');
			if (!selection) {
			    return;
			}
			selection.each(function(attachment) {
				where	=	jQuery(currentbutton).closest("div").find(".portgalwhereim").val();
				//	console.log(attachment.attributes);
				
				if(attachment.attributes.sizes==undefined) {
					url_image	=	attachment.attributes.url;
				} else {
					if(attachment.attributes.sizes.thumbnail==undefined) {
						url_image	=	attachment.attributes.sizes.full.url;
					} else {
						url_image	=	attachment.attributes.sizes.thumbnail.url;
					}
				}
				
				jQuery("#"+ where).attr("src", url_image);
				jQuery("#" + where).fadeIn();
				jQuery(currentbutton).closest("div").find(".thumbnailpreview").val(url_image);
				jQuery(currentbutton).closest("div").find(".portgalimageid").val(attachment.attributes.id);
			});
		};
		wp.media.frames.portgal_frame.on('close', portgal_media_set_image);
		wp.media.frames.portgal_frame.on('select', portgal_media_set_image);
		wp.media.frames.portgal_frame.open();
	});
	jQuery(".cpa-color-picker").wpColorPicker();
});






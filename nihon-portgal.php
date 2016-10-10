<?php
/**
 * Plugin Name: Nihon-Portgal
 * Description: Dynamically filtering images
 * Version: 1.0
 */


include_once("nihon-portgal-functions-static.php");
include_once("lista.php");


register_deactivation_hook(__FILE__, 'uninstal_nihonportgal_table');

function uninstal_nihonportgal_table() {
	global	$wpdb;
	
	$postid	=	get_option('plugin_portgal_preview');
	if($postid!='') {
		wp_delete_post($postid);
	}
	
	delete_option('plugin_portgal_preview'); 
	delete_option('plugin_portgal_version'); 
	
	$tables	=	array(
		'nihon_portgal',
		'nihon_portgal_cache',
		'nihon_portgal_categories',
		'nihon_portgal_categories_relations',
		'nihon_portgal_items'
	);
	
	foreach($tables as $table) {
		$wpdb->query(" DROP TABLE IF EXISTS `".$wpdb->prefix.$table."` ");
	}
}

register_activation_hook( __FILE__, 'create_nihonportgal_table' );

// add_action('activate_nihon-portgal/nihon-portgal.php', 'create_nihonportgal_table');

function create_nihonportgal_table() {
	global	$wpdb;
	
	$version	=	get_option('plugin_portgal_version');
	
	switch($version) {
	case '':
		$sql_query	=	"
		CREATE TABLE IF NOT EXISTS `".$wpdb->prefix."nihon_portgal` (
		`id` int(11) NOT NULL AUTO_INCREMENT,
		`name` varchar(255) CHARACTER SET utf8 NOT NULL,
		`sourcedata` tinyint(4) NOT NULL,
		`showhideanimation` tinyint(4) NOT NULL,
		`skewonmove` tinyint(4) NOT NULL,
		`easing` int(11) NOT NULL,
		`duration` int(11) NOT NULL,
		`widthmode` tinyint(4) NOT NULL,
		`dlanimation_type` int(4) NOT NULL,
		`postswith` tinyint(4) NOT NULL,
		`navigation_type` tinyint(4) NOT NULL,
		`navigation_align` int(11) NOT NULL,
		`navigation_pagination` tinyint(4) NOT NULL,
		`navigation_pagination_more` tinyint(4) NOT NULL,
		`navigation_load_more_label_for_button` varchar(255) CHARACTER SET utf8 NOT NULL,
		`navigation_sortby_show` tinyint(4) NOT NULL,
		`navigation_sortby_conf` text CHARACTER SET utf8 NOT NULL,
		`navigation_sortby_none_label` varchar(255) CHARACTER SET utf8 NOT NULL,
		`navigation_search_show` tinyint(4) NOT NULL,
		`navigation_search_show_button_clear` tinyint(4) NOT NULL,
		`navigation_search_label_button_clear` varchar(255) CHARACTER SET utf8 NOT NULL,
		`navigation_label_for_all` varchar(255) CHARACTER SET utf8 NOT NULL,
		`navigation_hide` tinyint(4) NOT NULL,
		`advanced_max_widths` text CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
		`advanced_minimum_margin` tinyint(4) NOT NULL,
		`advanced_usecache` tinyint(4) NOT NULL,
		`advanced_cache_max_time` int(11) NOT NULL,
		`advanced_dl_bgcolor` varchar(7) NOT NULL,
		`advanced_dl_bgcolor_get_from_item` tinyint(4) NOT NULL,
		`advanced_dl_bgcolor_get_from_this_conf` tinyint(4) NOT NULL,
		`advanced_dl_opacity` double NOT NULL,
		`advanced_preloader` int(16) NOT NULL,
		`advanced_label_read_more` varchar(128) CHARACTER SET utf8 NOT NULL,
		`advanced_bgscaleratio` double(3,2) NOT NULL,
		`advanced_bgscalebestheight` tinyint(4) NOT NULL,
		`advanced_hidelinkinitem` tinyint(4) NOT NULL,
		`lastupdate` datetime NOT NULL,
		PRIMARY KEY (`id`)
		) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
		";
		$wpdb->query($sql_query);
		
		$sql_query	=	"      
		CREATE TABLE IF NOT EXISTS `".$wpdb->prefix."nihon_portgal_cache` (
		  `id` int(11) NOT NULL AUTO_INCREMENT,
		  `parentid` int(11) NOT NULL,
		  `beginfrom` int(11) NOT NULL,
		  `datetimemake` datetime NOT NULL,
		  `data` longtext NOT NULL,
		  PRIMARY KEY (`id`),
		  KEY `parentid` (`parentid`)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
		";
		$wpdb->query($sql_query);
		
		$sql_query	=	"      
		CREATE TABLE IF NOT EXISTS `".$wpdb->prefix."nihon_portgal_categories` (
		  `id` int(11) NOT NULL AUTO_INCREMENT,
		  `parent_id` int(11) NOT NULL,
		  `lp` int(11) NOT NULL,
		  `name` varchar(512) CHARACTER SET utf8 NOT NULL,
		  `outid` int(11) NOT NULL,
		  PRIMARY KEY (`id`)
		) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
		";
		$wpdb->query($sql_query);
		
		$sql_query	=	"      
		CREATE TABLE IF NOT EXISTS `".$wpdb->prefix."nihon_portgal_categories_relations` (
		  `id` int(11) NOT NULL AUTO_INCREMENT,
		  `item_id` int(11) NOT NULL,
		  `category_id` int(11) NOT NULL,
		  PRIMARY KEY (`id`)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
		";
		$wpdb->query($sql_query);
		
		$sql_query	=	"
		
		CREATE TABLE IF NOT EXISTS `".$wpdb->prefix."nihon_portgal_items` (
		  `id` int(11) NOT NULL AUTO_INCREMENT,
		  `parentid` int(11) NOT NULL,
		  `url` varchar(1024) CHARACTER SET utf8 NOT NULL,
		  `title` varchar(512) CHARACTER SET utf8 NOT NULL,
		  `description` text CHARACTER SET utf8 NOT NULL,
		  `image` int(11) NOT NULL,
		  `secondimage` int(11) NOT NULL,
		  `youtubeurl` varchar(1024) CHARACTER SET utf8 NOT NULL,
		  `vimmeourl` varchar(1024) CHARACTER SET utf8 NOT NULL,
		  `oggfile` varchar(1024) CHARACTER SET utf8 NOT NULL,
		  `webmfile` varchar(1024) CHARACTER SET utf8 NOT NULL,
		  `mp4file` varchar(1024) CHARACTER SET utf8 NOT NULL,
		  `darklayerbackgroundcolor` varchar(7) CHARACTER SET utf8 NOT NULL,
		  `price_label` varchar(32) CHARACTER SET utf8 NOT NULL,
		  `price_value` double(8,2) NOT NULL,
		  `raiting` double(3,2) NOT NULL,
		  `woocommerceproductid` int(11) NOT NULL,
		  `lp` int(11) NOT NULL,
		  PRIMARY KEY (`id`)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
		
		";
		$wpdb->query($sql_query);
		add_option('plugin_portgal_version', 1);
		$id	=	wp_insert_post( array(
			'post_title'    => 'Portgal preview',
			'post_content'  => '[portgal id="0"]',
			'post_status'   => 'publish',
			'post_type'	=> 'portgalpreview',
			'post_author'   => 1,
		));
		add_option('plugin_portgal_preview', $id);
	break;
	}
	
}

add_action( 'init', 'nihon_portgal_create_posttype' );
function nihon_portgal_create_posttype() {
  register_post_type( 'portgalpreview',
    array(
      'labels' => array(
        'name' => __( 'portgalpreview' ),
        'singular_name' => __( 'portgalpreview' )
      ),
      'public' 			=>	true,
      'exclude_from_search'	=>	true,
      // 'publicly_queryable'	=>	false,
      'show_ui'			=>	false,
      'show_in_nav_menus'	=>	false,
      'show_in_admin_bar'	=>	false,
      'show_in_menu'		=>	false,
      'show_in_admin_bar'	=>	false,
    )
  );
}

add_action("wp_ajax_portgal_get_next_items",		"portgal_get_next_items");
add_action("wp_ajax_nopriv_portgal_get_next_items",	"portgal_get_next_items");

function portgal_get_next_items() {
	global		$wpdb;
	$id		=	round($_POST['databaseid']);
	$begin		=	round($_POST['begin']);
	
	$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` WHERE `id` = '".$id."' ";
	$main		=	$wpdb->get_results($sql_query, ARRAY_A);

	if(!(is_array($main) and count($main))) {
		die();
	}
	
	$cache		=	nihon_portgal_functions_static::ReadFromCache($main, $begin);
	if($cache['havecache']) {
		return	$cache['data'];
	}
	
	$wynik		=	nihon_portgal_functions_static::PrepareData4Send_GetItemsHtml($main, $begin, true);
	$havemore	=	$wynik['havemore'];
	$items		=	$wynik['items'];
	$html_items	=	$wynik['html_items'];
	
	$html_items	=	str_replace("\n",' ', $html_items);
	$html_items	=	str_replace("\r",' ', $html_items);
	$html_items	=	str_replace("'","\\'", $html_items);
	
	$havemore_set	=	'0';
	if($havemore) {
		$havemore_set	=	'1';
	}
	
	$ilosc	=	nihon_portgal_functions_static::GetPagination($main[0]['navigation_pagination']);
	
	
	$output	=	'
return_data		=	\''.$html_items.'\';
return_portgalnr	=	\''.round($_POST['portgalnr']).'\';
return_begin		=	\''.($begin + $ilosc).'\';
return_havemore		=	\''.$havemore_set.'\';
	';
	
	
	if($main[0]['advanced_usecache']=='1') {
		$wpdb->insert( $wpdb->prefix.'nihon_portgal_cache' , array(
			'parentid'	=>	$main[0]['id'],
			'beginfrom'	=>	0,
			'datetimemake'	=>	date("Y-m-d H:i:s"),
			'data'		=>	$output
		) );
	}
	
	echo	$output;
	
	die();
}


add_action('wp_enqueue_scripts', 'portgal_scripts');

function portgal_scripts() {
	wp_enqueue_style('font-awesome', plugins_url('nihon-portgal/out/font-awesome-4.3.0/css/font-awesome.min.css'), false, 4.3, 'all');
	wp_enqueue_style('nihon-portgal', plugins_url('nihon-portgal/out/style.css'), false, 1, 'all');
	wp_enqueue_script('nihon-portgal', plugins_url('nihon-portgal/out/script.js'), array('jquery', 'jquery-ui-core', 'jquery-effects-core'), 1, true);
	wp_localize_script('nihon-portgal', 'myAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));        
	wp_enqueue_script('jquery');
}


add_action("admin_menu", "PortgaladdMenu");
function PortgaladdMenu() {
  add_menu_page("Portgal", "Portgal", "manage_options", "nihon_portgal_manage_handle", "PortgalFunctions", plugin_dir_url( __FILE__ ).'mynewmenu.png', 58876543245);
  add_submenu_page( 'nihon_portgal_manage_handle', 'New', 'New', 'manage_options', 'nihon_portgal_sub_manage_handle', 'PortgalFunctionAddNew');
}

function PortgalFunctionAddNew() {
	if(isset($_GET['addsave']) and $_GET['addsave']=='1' and isset($_GET['type']) and in_array($_GET['type'], array(0, 1,2))) {
		global	$wpdb;
		$wpdb->insert($wpdb->prefix.'nihon_portgal', array( 
		  'sourcedata' => $_GET['type'] , 
		  'name' => 'No name' , 
		  'duration' => '600'  , 
		  'navigation_load_more_label_for_button'	=>	'Load more' , 
		  'navigation_search_label_button_clear'	=>	'Clear',
		  'advanced_bgscaleratio'			=>	'0.75',
		  'navigation_sortby_conf' => 'a:4:{i:0;a:3:{s:4:"show";s:0:"";s:5:"label";s:5:"Title";s:2:"lp";s:1:"0";}i:1;a:3:{s:4:"show";s:0:"";s:5:"label";s:4:"Date";s:2:"lp";s:1:"1";}i:2;a:3:{s:4:"show";s:0:"";s:5:"label";s:5:"Price";s:2:"lp";s:1:"2";}i:3;a:3:{s:4:"show";s:0:"";s:5:"label";s:7:"Raiting";s:2:"lp";s:1:"3";}}' 
		)
		);
		
		$linkredirect	=	home_url().'/wp-admin/admin.php?page=nihon_portgal_manage_handle&action=edit&id='.$wpdb->insert_id;
		
		echo '
		<div style="clear: both"></div>
		Waiting ...
		<script type="text/javascript">
			document.location.href	=	"'.$linkredirect.'";
		</script>
		';
		exit;
	}
	$linkadd	=	home_url().'/wp-admin/admin.php?page=nihon_portgal_sub_manage_handle&addsave=1&type=';
	$output	=	'
		<div class="portgal_new_item_select">
		<div style="font-weight: bold;"><br>Select source:<br></div>
		<a href="'.$linkadd.'0">Own items</a>
		<a href="'.$linkadd.'1">Posts</a>
		<a href="'.$linkadd.'2">WooCommerce</a>
		</div>
	';
	echo	$output;
}

function PortgalFunctions() {
	
	include("nihon-portgal-functions.php");
	
	
	/*	switch($_GET['action']) {
		case 'add':
			
		break;
		case 'editimage':
			PortgalFunctionEditImage();
			return;
		break;
		case 'edit':
			PortgalFunctionEditInit();
		break;
		case 'editcategories':
			PortgalFunctionEditCategoriesInit();
		break;
		case 'delete':
			PortgalFunctionDelete(); 
			PortgalFunctionListPage();
		break;
		default:
			PortgalFunctionListPage();
		break;
	}
	*/
}

add_action( 'admin_init', 'portgal_admin_init' );
function portgal_admin_init() {
	
	wp_register_style( 'PortgalStylesheet', plugins_url('stylesheet.css', __FILE__) );
	wp_enqueue_style( 'PortgalStylesheet' );
	
	wp_enqueue_style( 'wp-color-picker' );
	wp_enqueue_script( 'custom-script-handle', plugins_url( 'portgalscriptadmin.js', __FILE__ ), array( 'wp-color-picker' ), false, true );
	
	if($_GET['page']=='nihon_portgal_manage_handle' or $_GET['page']=='nihon_portgal_sub_manage_handle') {
		wp_enqueue_media();
	}
	
 	wp_enqueue_style('font-awesome', plugins_url('nihon-portgal/out/font-awesome-4.4.0/css/font-awesome.min.css'), false, '4.4', 'all');
	wp_enqueue_style('nihon-portgal', plugins_url('nihon-portgal/out/style.css'), false, 1, 'all');
	wp_enqueue_script('nihon-portgal', plugins_url('nihon-portgal/out/script.js'), array('jquery', 'jquery-ui-core', 'jquery-effects-core'), 1, true);
	
	wp_localize_script( 'ajax-script', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ), 'we_value' => 1234 ) );
	
}



function call_PortgalFuturedOption() {
	new PortgalFuturedOption();
}

if ( is_admin() ) {
    add_action( 'load-post.php',	'call_PortgalFuturedOption' );
    add_action( 'load-post-new.php',	'call_PortgalFuturedOption' );
}

class PortgalFuturedOption {
	
	public function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
		add_action( 'edit_post', array( $this, 'save' ) );
		add_action( 'delete_post', array( $this, 'deletepost' ) );
	}
	
	public function deletepost($postid) {
		$array_keys	=	array('portgal-mp4url' , 'portgal-webm' , 'portgal-ogg' , 'portgal-vimmeo' , 'portgal-youtube' , 'portgal-secondlayer' , 'portgal-alternativeimage', 'portgal-videothumbanil', 'portgal-dl-bgcolor');
		foreach($array_keys as $key) {
			delete_post_meta($postid, $key);
		}
	}
	
	public function add_meta_box( $post_type ) {
            $post_types = array('post', 'page');
            if ( in_array( $post_type, $post_types )) {
		add_meta_box(
			'some_meta_box_name',
			'Portgal',
			array( $this, 'render_meta_box_content' ),
			$post_type,
			'advanced',
			'high'
		);
            }
	}

	public function save( $post_id ) {
		
		if ( ! isset( $_POST['myplugin_inner_custom_box_nonce'] ) )
			return $post_id;
		
		$nonce = $_POST['myplugin_inner_custom_box_nonce'];
		
		if ( ! wp_verify_nonce( $nonce, 'myplugin_inner_custom_box' ) )
			return $post_id;
		
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
			return $post_id;
		
		if ( 'page' == $_POST['post_type'] ) {
			if ( ! current_user_can( 'edit_page', $post_id ) )
				return $post_id;
		} else {
			if ( ! current_user_can( 'edit_post', $post_id ) )
				return $post_id;
		}
		
		$array_keys	=	array('portgal-mp4url' , 'portgal-webm' , 'portgal-ogg' , 'portgal-vimmeo' , 'portgal-youtube' , 'portgal-secondlayer' , 'portgal-alternativeimage', 'portgal-videothumbanil', 'portgal-dl-bgcolor');
		foreach($array_keys as $key) {
			$value	=	'';
			if(isset($_POST[$key])) {
				$value = $_POST[$key];
			}
			update_post_meta($post_id, $key, $value);
		}
		
	}
	
	public function render_meta_box_content( $post ) {
		
		$thumburl_portgal_alternativeimage	=	wp_get_attachment_image(get_post_meta($post->ID,'portgal-alternativeimage',true), 'thumbnail');
		$thumburl_portgal_secondlayer		=	wp_get_attachment_image(get_post_meta($post->ID,'portgal-secondlayer',true), 'thumbnail');
		$thumburl_portgal_videothumbanil	=	wp_get_attachment_image(get_post_meta($post->ID,'portgal-videothumbanil',true), 'thumbnail');
		$select		=	'
			<table style="width: 100%">
			<tr>
				<td valign="top" style="text-align: center; width: 33%;">
					<div><b>Futured alternative image</b></div>
					<br>
					<input type="hidden" name="portgal-alternativeimage" value="'.get_post_meta($post->ID,'portgal-alternativeimage',true).'" style="width: 100%">
					<button class="portgal-alternativeimage-button button action" buttonfor="portgal-alternativeimage">Select</button>
					<button class="portgal-clear-button button action" buttonfor="portgal-alternativeimage">Delete</button>
					<div id="wrap-portgal-alternativeimage" style="padding-top: 20px">'.$thumburl_portgal_alternativeimage.'</div>
				</td>
				<td valign="top" style="text-align: center">
					<div><b>Second layer image</b></div>
					<br>
					<input type="hidden" name="portgal-secondlayer" value="'.get_post_meta($post->ID,'portgal-secondlayer',true).'" style="width: 100%">
					<button class="portgal-secondlayer-button button action" buttonfor="portgal-secondlayer">Select</button>
					<button class="portgal-clear-button button action" buttonfor="portgal-secondlayer">Delete</button>
					<div id="wrap-portgal-secondlayer" style="padding-top: 20px">'.$thumburl_portgal_secondlayer.'</div>
				</td>
				<td valign="top" style="text-align: center">
					<div><b>Video thumbnail</b></div>
					<br>
					<input type="hidden" name="portgal-videothumbanil" value="'.get_post_meta($post->ID,'portgal-videothumbanil',true).'" style="width: 100%">
					<button class="portgal-videothumbanil-button button action" buttonfor="portgal-videothumbanil">Select</button>
					<button class="portgal-clear-button button action" buttonfor="portgal-videothumbanil">Delete</button>
					<div id="wrap-portgal-videothumbanil" style="padding-top: 20px">'.$thumburl_portgal_videothumbanil.'</div>
				</td>
			</tr>
			</table>
			<br>
			<table style="width: 100%">
			<tr>
				 <td style="width: 150px"></td>
				 <td></td>
				 <td stye="width: 50px"></td>
				 <td style="width: 100px"></td>
				 <td style="width: 100px"></td>
			</tr>
			<tr>
				 <td><b>Youtube url</b></td>
				 <td><input type="text" name="portgal-youtube" value="'.get_post_meta($post->ID,'portgal-youtube',true).'" style="width: 100%"></td>
				 <td></td>
				 <td></td>
				 <td><button class="portgal-clear-button button action" buttonfor="portgal-youtube">Clear</button></td>
			</tr>
			<tr>
				 <td><b>Vimmeo url</b></td>
				 <td><input type="text" name="portgal-vimmeo" value="'.get_post_meta($post->ID,'portgal-vimmeo',true).'" style="width: 100%"></td>
				 <td></td>
				 <td></td>
				 <td><button class="portgal-clear-button button action" buttonfor="portgal-vimmeo">Clear</button></td>
			</tr>
			<tr>
				 <td><b>Ogg file</b></td>
				 <td><input type="text" name="portgal-ogg" value="'.get_post_meta($post->ID,'portgal-ogg',true).'" style="width: 100%"></td>
				 <td></td>
				 <td><button class="portgal-oggurl-button button action" buttonfor="portgal-ogg">Select</button></td>
				 <td><button class="portgal-clear-button button action" buttonfor="portgal-ogg">Clear</button></td>
			</tr>
			<tr>
				 <td><b>Webm file</b></td>
				 <td><input type="text" name="portgal-webm" value="'.get_post_meta($post->ID,'portgal-webm',true).'" style="width: 100%"></td>
				 <td></td>
				 <td><button class="portgal-webmurl-button button action" buttonfor="portgal-webm">Select</button></td>
				 <td><button class="portgal-clear-button button action" buttonfor="portgal-webm">Clear</button></td>
			</tr>
			<tr>
				 <td><b>Mp4 file</b></td>
				 <td><input type="text" name="portgal-mp4url" value="'.get_post_meta($post->ID,'portgal-mp4url',true).'" style="width: 100%"></td>
				 <td></td>
				 <td><button class="portgal-mp4url-button button action" buttonfor="portgal-mp4url">Select</button></td>
				 <td><button class="portgal-clear-button button action" buttonfor="portgal-mp4url">Clear</button></td>
			</tr>
			<tr>
				 <td><b>"Dark layer" background color</b></td>
				 <td colspan="4"><input type="text" style="width: 120px" name="portgal-dl-bgcolor" class="cpa-color-picker" value="'.get_post_meta($post->ID,'portgal-dl-bgcolor',true).'"></td>
			</tr>
			</table>
			
			
			
			
			
			
			
			
			
			
			
<script type="text/javascript">

jQuery(".portgal-clear-button").click(function(event) {
	event.preventDefault();
	buttonfor	=	jQuery(this).attr("buttonfor");
	jQuery("#wrap-" + buttonfor).html("");
	jQuery(\'[name="\' + buttonfor + \'"]\').val("");
});

jQuery(".portgal-clear-button-video").click(function(event) {
	event.preventDefault();
	buttonfor	=	jQuery(this).attr("buttonfor");
	jQuery(\'[name="\' + buttonfor + \'"]\').val("");
});


var portgal_media_init = function(button_selector, typeitem)  {
	var clicked_button = false;
        var button = jQuery(button_selector);
        button.click(function (event) {
            event.preventDefault();
            var selected_img;
            clicked_button = jQuery(this);
            if(wp.media.frames.portgal_frame) {
                wp.media.frames.portgal_frame.open();
                return;
            }
            wp.media.frames.portgal_frame = wp.media({
                title: "Select",
                multiple: false,
                library: {
                    type: typeitem
                },
                button: {
                    text: "Use this item"
                }
            });
            var portgal_media_set_image = function() {
                var selection = wp.media.frames.portgal_frame.state().get("selection");
                 
                if (!selection) {
                    return;
                }
                selection.each(function(attachment) { 
		    buttonfor	=	clicked_button.attr("buttonfor");
		    console.log(attachment);
		    switch(typeitem) {
		    case "image":
			  
			  if(attachment.attributes.sizes==undefined) {
				  imgurl	=	attachment.attributes.url;
			  } else {
				  if(attachment.attributes.sizes.thumbnail==undefined) {
					  imgurl	=	attachment.attributes.sizes.full.url;
				  } else {
					  imgurl	=	attachment.attributes.sizes.thumbnail.url;
				  }
			  }
			  
			  imghtml	=	\'<img src="\' + imgurl + \'">\';
			  jQuery("#wrap-" + buttonfor).html(imghtml);
			  var id = attachment.attributes.id;
			  jQuery(\'[name="\' + buttonfor + \'"]\').val(id);
			  
		    break;
		    case "video":
			  var url = attachment.attributes.url;
			  jQuery(\'[name="\' + buttonfor + \'"]\').val(url);
		    break;
		    }
                });
                wp.media.frames.portgal_frame	=	false;
            };
            wp.media.frames.portgal_frame.on("close", portgal_media_set_image);
            wp.media.frames.portgal_frame.on("select", portgal_media_set_image);
            wp.media.frames.portgal_frame.open();
        });
};


jQuery(document).ready(function() {
  jQuery(".cpa-color-picker").wpColorPicker();
  portgal_media_init(".portgal-mp4url-button", "video");
  portgal_media_init(".portgal-webmurl-button", "video");
  portgal_media_init(".portgal-oggurl-button", "video");
  portgal_media_init(".portgal-secondlayer-button", "image");
  portgal_media_init(".portgal-alternativeimage-button", "image");
  portgal_media_init(".portgal-videothumbanil-button", "image");
  
});

</script>


		';
		echo	$select;
		wp_nonce_field( 'myplugin_inner_custom_box', 'myplugin_inner_custom_box_nonce' );
	}
}

add_shortcode( 'portgal', 'portgal_plugin_shortcode' );

function portgal_plugin_shortcode( $atts ) {
	
	//	orderbyshow
	
	if(!isset($atts['id'])) {
		return;
	}
	global	$wpdb;
	
	if($atts['id']=='0') {
		$atts['id']	=	$_GET['portgalpreviewid'];
	}
	
	//	$atts['id']	=	1;	//	portgalpreviewid
	
	$id		=	addslashes($atts['id']);
	$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` WHERE `id` = '".$id."' ";
	$main		=	$wpdb->get_results($sql_query, ARRAY_A);
	
	if(!(is_array($main) and count($main))) {
		return;
	}
	
	$cache		=	nihon_portgal_functions_static::ReadFromCache($main, 0);
	if($cache['havecache']) {
		return	$cache['data'];
	}
	
	$uniqueidforoutput	=	uniqid();
	
	$sortbytype		=	nihon_portgal_functions_static::GetSortBy();
	$sortbytypebyid		=	array();
	foreach($sortbytype as $item) {
		$sortbytypebyid[$item['id']]	=	$item['type'];
	}
	
	//	orderbyshow
	$orderbyshow		=	'false';
	$sort_html_conf		=	'';
	$sortconf		=	unserialize($main[0]['navigation_sortby_conf']);
	if(is_array($sortconf) and count($sortconf)) {
		$sortconf_array_temp	=	array();
		$sortconf_array		=	array();
		foreach($sortconf as $key => $sortconf_item) {
			if(!isset($sortconf_array_temp[$sortconf_item['lp']])) {
				$sortconf_array_temp[$sortconf_item['lp']]	=	array();
			}
			$sortconf_item['key']		=	$key;
			$sortconf_item['typesort']	=	$sortbytypebyid[$key];
			array_push($sortconf_array_temp[$sortconf_item['lp']] , $sortconf_item);
		}
		ksort($sortconf_array_temp);
		foreach($sortconf_array_temp as $sortconf_array_temp_) {
			foreach($sortconf_array_temp_ as $sortconf_array_temp__) {
				if($sortconf_array_temp__['show']=='1') {
					array_push($sortconf_array, $sortconf_array_temp__);
				}
			}
		}
		foreach($sortconf_array as $keykey => $item) {
			$orderbyshow		=	'true';
			if(strlen($sort_html_conf)>0) { $sort_html_conf .= ' , '; }
			$sort_html_conf	.=	' '.($keykey + 1).':	{ name : "'.addslashes($item['label']).'" , type : "'.$item['typesort'].'" } ';
		}
	}
	
	$wynik			=	nihon_portgal_functions_static::PrepareData4Send_GetItemsHtml($main, 0);
	$items			=	$wynik['items'];
	$html_items		=	$wynik['html_items'];
	$loadmorehavemore	=	$wynik['havemore'];
	if($loadmorehavemore) {
		$loadmorehavemore	=	'1';
	} else {
		$loadmorehavemore	=	'0';
	}
	
	$navigation_html	=	nihon_portgal_functions_static::MakeNavigationHtml($main, $items['categories']);
	
	$widthmode	=	'true';
	if($main[0]['widthmode']==0) { $widthmode = 'false'; }
	
	$easing		=	'swing';
	$easing_items	=	nihon_portgal_functions_static::GetEasing();
	foreach($easing_items as $easing_item) {
		if($easing_item['id']==$main[0]['easing']) {
			$easing		=	$easing_item['name'];
		}
	}
	
	
	
	$animation_fadeinoutwithscale	=	'false';
	$animation_fadeinoutwithrotate	=	'false';
	$animation_fadeinoutwithgoout	=	'false';
	switch($main[0]['showhideanimation']) {
		case '1':
			$animation_fadeinoutwithscale	=	'true';
		break;
		case '2':
			$animation_fadeinoutwithrotate	=	'true';
		break;
		case '3':
			$animation_fadeinoutwithgoout	=	'true';
		break;
	}
	
	$animationmode	=	nihon_portgal_functions_static::GetValueFromVA(nihon_portgal_functions_static::GetDLAnimations(), $main[0]['dlanimation_type'], 'adele');
	
	if($main[0]['navigation_pagination_more']=='0') {
		$load_more_by_type	=	'bybutton';
	} else {
		$load_more_by_type	=	'byscroll';
	}
	
	$preloaders	=	nihon_portgal_functions_static::GetPreloaders();
	$preloader_path	=	plugin_dir_url(__FILE__).'preloaders/22/'.nihon_portgal_functions_static::GetValueFromVA($preloaders, $main[0]['advanced_preloader']);
	
	$str_size_rows	=	'';
	if(strlen($main[0]['advanced_max_widths'])!='') {
		$tar		=	unserialize($main[0]['advanced_max_widths']);
		$key		=	0;
		
		if(is_array($tar) and count($tar)) {
			$str_size_rows	.=	' itemmaxwidthforrows: { ';
			foreach($tar as $tar_item) {
				if($key) { $str_size_rows .= ' , '; }
				$str_size_rows	.=	' row'.$key.': { itemminwidth: 100 , itemmaxwidth: '.$tar_item.' } ';
				$key++;
			}
			$str_size_rows	.=	' }, ';
		}
		
	}
	 
	$add_css	=	'';
	if($main[0]['advanced_minimum_margin']!='-1') {
		$add_css	=	'
		<style type="text/css">
			#nihon-portgal-wrap-'.$uniqueidforoutput.' .nihon-items li {
				margin-left:	'.$main[0]['advanced_minimum_margin'].'px;
				margin-right:	'.$main[0]['advanced_minimum_margin'].'px;
			}
		</style>
		';
	}
	
	
	$cart_url	=	home_url().'/cart/';
	if (class_exists('Woocommerce')) {
		global $woocommerce;
		$cart_url_	=	$woocommerce->cart->get_cart_url();
		if($cart_url_!='') {
			$cart_url	=	$cart_url_;
		}
	}
	
	$output	=	"
	<script>
	jQuery(document).ready(function() {
		jQuery('#nihon-portgal-wrap-".$uniqueidforoutput."').portgal({
			databaseid:		".$main[0]['id'].",
			loadmore:		'".$load_more_by_type."',
			loadmore_label:		'".addslashes($main[0]['navigation_load_more_label_for_button'])."',
			loadmorehavemore:	'".$loadmorehavemore."',
			preloader:		'".$preloader_path."',
			wordpressurl:		'".home_url()."/' ,
			".$str_size_rows."
			bgscaleratio:		".$main[0]['advanced_bgscaleratio']." ,
			workmode:		0,
			
			woocommerce_cart_url:	".json_encode($cart_url).",
			
			animationmode:		'".$animationmode."',
			fullscreenmode:		".$widthmode.",
			orderbyshow:		".$orderbyshow.",
			orderby:		{
				".$sort_html_conf."
			},
			search:				".nihon_portgal_functions_static::GetBoolStr($main[0]['navigation_search_show']).",
			search_clear_button:		".nihon_portgal_functions_static::GetBoolStr($main[0]['navigation_search_show_button_clear']).",
			search_clear_button_label:	'".addslashes($main[0]['navigation_search_label_button_clear'])."',
			navigation_skin_id:		".$main[0]['navigation_type'].",
			
			animation_movehidespeed:	".$main[0]['duration'].",
			animation_easing:		'".$easing."',
			
			animation_movewithskew:		".nihon_portgal_functions_static::GetBoolStr($main[0]['skewonmove']).",
			animation_fadeinoutwithscale:	".$animation_fadeinoutwithscale.",
			animation_fadeinoutwithrotate:	".$animation_fadeinoutwithrotate.",
			animation_fadeinoutwithgoout:	".$animation_fadeinoutwithgoout.",
		});
	});
	</script>
	".'

	
	'."
	
	
	".$add_css."
	
	<div style=\"width: 0px; height: 0px; overflow: hidden\"><img src=\"".$preloader_path."\"></div>
	
	<div id=\"nihon-portgal-wrap-".$uniqueidforoutput."\" class=\"nihon-portgal\">
		".$navigation_html."
		<ul class=\"nihon-items-list\">
			".$html_items."
		</ul>
		".'
		<div class="portgal-lightboxwrap">
			<div class="portgal-ajaxpreolader"  style="background-image: url(\''.$preloader_path.'\');"></div>
			<div class="portgal-lightboxwrapimage2 portgal-lightboxwrapimage">
				<span class="fa fa-times portgal-lightboxclose"></span>
				<div style="clear: both"></div>
				<div class="portgal-lightboximgwrap">
					<img src="">
				</div>
				<div style="clear: both"></div>
				<ul class="portgal-lightbox-navigation">
					<li class="portgal-lightboxnavigationleft"><span class="fa fa-chevron-circle-left"></span></li>
					<li class="portgal-lightboxnavigationright"><span class="fa fa-chevron-circle-right"></span></li>
				</ul>
			</div>
			<div class="portgal-textunderimage"></div>
			
		</div>
		<div class="portgal-lightboxhidden"></div> <!-- musi być tu bo w chromie nie działa gdy jest wewnątrz portgal-lightboxwrap -->
		<div class="portgal-load-moreisrun"> <div class="portgal-load-moreisrun_inner" style="background-image: url(\''.$preloader_path.'\');">  </div> </div>
		<div style="clear: both"></div>
		'."
	</div>
	";
	
	if($main[0]['advanced_usecache']=='1') {
		$wpdb->insert( $wpdb->prefix.'nihon_portgal_cache' , array(
			'parentid'	=>	$main[0]['id'],
			'beginfrom'	=>	0,
			'datetimemake'	=>	date("Y-m-d H:i:s"),
			'data'		=>	$output
		) );
	}
	
	return	$output;
	
}

?>

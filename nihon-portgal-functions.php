<?php


if( ! class_exists( 'WP_List_Table' ) ) {
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}

class nihon_portgal_functions {
	
	public static function GetBoolStr($input) {
		if($input=='1') { return 'true'; }
		return	'false';
	}
	
	public static function GetValueFromVA($array, $search, $default='') {
		foreach($array as $item) {
			if($item['id']==$search) {
				return $item['name'];
			}
		}
		return	$default;
	}
	
	public function GetMaxTimeCache() {
		$array	=	array(
			array(	'id' => '60'	, 'name'	=>	'1 minute'),
			array(	'id' => '120'	, 'name'	=>	'2 minutes'),
			array(	'id' => '300'	, 'name'	=>	'5 minutes'),
			array(	'id' => '600'	, 'name'	=>	'10 minutes'),
			array(	'id' => '1800'	, 'name'	=>	'30 minutes'),
			array(	'id' => '3600'	, 'name'	=>	'1 hour'),
			array(	'id' => '7200'	, 'name'	=>	'2 hours'),
			array(	'id' => '10800'	, 'name'	=>	'3 hours'),
			array(	'id' => '21600'	, 'name'	=>	'6 hours'),
			array(	'id' => '43200'	, 'name'	=>	'12 hours'),
			array(	'id' => '86400'	, 'name'	=>	'1 day'),
			array(	'id' => '172800' , 'name'	=>	'2 days')
		);
		return	$array;
	}
	
	public function GetPreloaders() {
		$array	=	array(
			array('id' => '0', 'name' => '159.GIF') ,
			array('id' => '1', 'name' => '25.GIF') ,
			array('id' => '2', 'name' => '282.GIF') ,
			array('id' => '3', 'name' => '287.GIF') ,
			array('id' => '4', 'name' => '294.GIF') ,
			array('id' => '5', 'name' => '301.GIF') ,
			array('id' => '6', 'name' => '350.GIF') ,
			array('id' => '7', 'name' => '359.GIF') ,
			array('id' => '8', 'name' => '35.GIF') ,
			array('id' => '9', 'name' => '377.GIF') ,
			array('id' => '10', 'name' => '477.GIF') ,
			array('id' => '11', 'name' => '482.GIF') ,
			array('id' => '12', 'name' => '486.GIF') ,
			array('id' => '13', 'name' => '495.GIF') ,
			array('id' => '14', 'name' => '712.GIF') ,
			array('id' => '15', 'name' => '713.GIF') ,
			array('id' => '16', 'name' => '719.GIF') ,
			array('id' => '17', 'name' => '720.GIF') ,
			array('id' => '18', 'name' => '728.GIF'),
			array('id' => '19', 'name' => '89.GIF')
		);
		return	$array;
	}
	
	public function GetMinMarginBeewtenElemets() {
		$array	=	array( array( 'id' => -1 , 'name' => 'Default' ) );
		for($x=0;$x<=20;$x=$x+1) {
			array_push( $array , array( 'id' => $x , 'name' => $x.'px' ) );
		}
		return	$array;
	}
	
	public function GetDarlLayerOpacity() {
		$array	=	array(
			array( 'id' => -1 , 'name' => 'Default' )
		);
		for($x=0;$x<=1.01;$x=$x + 0.05) {
			array_push($array, array( 'id' => round($x, 2) , 'name' => sprintf("%01.2f", $x) ));
		}
		
		return	$array;
	}
	
	public function GetDuration() {
		$output	=	array();
		for($x=300;$x<=1500;$x=$x+100) {
			array_push($output, array( 'id' => $x , 'name' => $x ));
		}
		return	$output;
	}
	
	public function GetMaxWidthForItem() {
		$array	=	array();
		for($x=100;$x<=500;$x++) {
			array_push( $array , array(
				'id'	=>	$x,
				'name'	=>	$x.'px'
			));
		}
		return	$array;
	}
	
	public function GetPagination() {
		return	array(
			array('id' => '0', 'name' => 'All items'),
			array('id' => '1', 'name' => '10'),
			array('id' => '2', 'name' => '20'),
			array('id' => '3', 'name' => '30'),
			array('id' => '4', 'name' => '40'),
			array('id' => '5', 'name' => '50'),
			array('id' => '6', 'name' => '100'),
			array('id' => '7', 'name' => '200'),
			array('id' => '8', 'name' => '300'),
			array('id' => '9', 'name' => '400'),
			array('id' => '10', 'name' => '500')
		);
	}
	
	public function GetSortBy() {
		return	array(
			array('id' => '0', 'name' => 'Title / Name'),
			array('id' => '1', 'name' => 'Date publish'),
			array('id' => '2', 'name' => 'Price (woocommerce)'),
			array('id' => '3', 'name' => 'Raiting (woocommerce)'),
		);
	}
	
	public function GetPaginationLoadMoreType() {
		return	array(
			array('id' => '0', 'name' => 'By button'),
			array('id' => '1', 'name' => 'By scroll')
		);
	}
	
	public function GetShowHideItemAnimation() {
		return	array(
			array('id' => '0', 'name' => 'None'),
			array('id' => '1', 'name' => 'Scale'),
			array('id' => '2', 'name' => 'Rotate'),
			array('id' => '3', 'name' => 'From out / Go out'),
		);
	}
	
	public static function GetDLAnimations() {
		return	array(
			array( 'id' => '0' , 'name' => 'adele' ) ,
			array( 'id' => '1' , 'name' => 'alexis' ) ,
			array( 'id' => '2' , 'name' => 'angelina' ) ,
			array( 'id' => '3' , 'name' => 'bridget' ) ,
			array( 'id' => '4' , 'name' => 'caroline' ) ,
			array( 'id' => '5' , 'name' => 'chihiro' ) ,
			array( 'id' => '6' , 'name' => 'irina' ) ,
			array( 'id' => '7' , 'name' => 'jessie' ) ,
			array( 'id' => '8' , 'name' => 'kayla' ) ,
			array( 'id' => '9' , 'name' => 'kristina' ) ,
			array( 'id' => '10' , 'name' => 'lisa' ) ,
			array( 'id' => '11' , 'name' => 'marie' ) ,
			array( 'id' => '12' , 'name' => 'misha' ) ,
			array( 'id' => '13' , 'name' => 'silvia' ) ,
			array( 'id' => '14' , 'name' => 'sophie' ) ,
			array( 'id' => '15' , 'name' => 'veronica' ) ,
			array( 'id' => '16' , 'name' => 'sophielight' ) ,
			
			array( 'id' => '100' , 'name' => 'videoaoi' ) ,
			array( 'id' => '101' , 'name' => 'videoayumi' ) ,
			array( 'id' => '102' , 'name' => 'videorose' ) ,
			
			array( 'id' => '1000' , 'name' => 'wooadriana' ) ,
			array( 'id' => '1001' , 'name' => 'wooida' ) ,
		);
	}
	
	public static function GetEasing() {
		return	array(
			array('id' => '0' , 'name' => 'swing'),
			array('id' => '1' , 'name' => 'linear'),
			array('id' => '2' , 'name' => 'easeInQuad'),
			array('id' => '3' , 'name' => 'easeOutQuad'),
			array('id' => '4' , 'name' => 'easeInOutQuad'),
			array('id' => '5' , 'name' => 'easeInCubic'),
			array('id' => '6' , 'name' => 'easeOutCubic'),
			array('id' => '7' , 'name' => 'easeInOutCubic'),
			array('id' => '8' , 'name' => 'easeInQuart'),
			array('id' => '9' , 'name' => 'easeOutQuart'),
			array('id' => '10' , 'name' => 'easeInOutQuart'),
			array('id' => '11' , 'name' => 'easeInQuint'),
			array('id' => '12' , 'name' => 'easeOutQuint'),
			array('id' => '13' , 'name' => 'easeInOutQuint'),
			array('id' => '14' , 'name' => 'easeInExpo'),
			array('id' => '15' , 'name' => 'easeOutExpo'),
			array('id' => '16' , 'name' => 'easeInOutExpo'),
			array('id' => '17' , 'name' => 'easeInSine'),
			array('id' => '18' , 'name' => 'easeOutSine'),
			array('id' => '19' , 'name' => 'easeInOutSine'),
			array('id' => '20' , 'name' => 'easeInCirc'),
			array('id' => '21' , 'name' => 'easeOutCirc'),
			array('id' => '22' , 'name' => 'easeInOutCirc'),
			array('id' => '23' , 'name' => 'easeInElastic'),
			array('id' => '24' , 'name' => 'easeOutElastic'),
			array('id' => '25' , 'name' => 'easeInOutElastic'),
			array('id' => '26' , 'name' => 'easeInBack'),
			array('id' => '27' , 'name' => 'easeOutBack'),
			array('id' => '28' , 'name' => 'easeInOutBack'),
			array('id' => '29' , 'name' => 'easeInBounce'),
			array('id' => '30' , 'name' => 'easeOutBounce'),
			array('id' => '31' , 'name' => 'easeInOutBounce')
		);
	}
	
	function GetTextAlignOption() {
		return	array(
			array( 'id' => 0 , 'style' => '' , 'name' => 'None' ) ,
			array( 'id' => 1 , 'style' => 'text-align:left;' , 'name' => 'Left' ) ,
			array( 'id' => 2 , 'style' => 'text-align:center;' , 'name' => 'Center' ) ,
			array( 'id' => 3 , 'style' => 'text-align:right;' , 'name' => 'Right' ) ,
		);
	}
	
	function GetFontSize() {
		$output	=	array(
			array( 'id' => 0 , 'name' => 'from theme' )
		);
		for($x=9;$x<40;$x++) {
			array_push($output, array('id' => $x, 'name' => $x.'px'));
		}
		return	$output;
	}

	function GetDarkLayerAnimationType() {
		return	array(
			array( 'id' => 0 , 'str' =>  'fadein', 'name' => 'Fade In') ,
			array( 'id' => 1 , 'str' =>  'fromtop', 'name' => 'From top') ,
			array( 'id' => 2 , 'str' =>  'fromleft', 'name' => 'From left') ,
			array( 'id' => 3 , 'str' =>  'fromright', 'name' => 'From right') ,
			array( 'id' => 4 , 'str' =>  'frombottom', 'name' => 'From bottom') ,
		);
	}
	
	public function GetOpacityValues() {
		$output	=	array();
		for($x=0;$x<1.01;$x=$x+0.05) {
			array_push($output, sprintf("%01.2f", $x));
		}
		return	$output;
	}
	
	public function GetAvailableNavigationSkins() {
		return	array(
			array( 'id' => 0 , 'name' => 'Default',	'pic' => 'navskin0.png') ,
			array( 'id' => 1 , 'name' => 'Skin 1',	'pic' => 'navskin1.png') ,
			array( 'id' => 2 , 'name' => 'Skin 2',	'pic' => 'navskin2.png') ,
			array( 'id' => 3 , 'name' => 'Skin 3',	'pic' => 'navskin3.png') ,
			array( 'id' => 4 , 'name' => 'Skin 4',	'pic' => 'navskin4.png') ,
			array( 'id' => 5 , 'name' => 'Skin 5', 	'pic' => 'navskin5.png') ,
			array( 'id' => 6 , 'name' => 'Skin 6',	'pic' => 'navskin6.png') ,
			array( 'id' => 7 , 'name' => 'Skin 7',	'pic' => 'navskin7.png')
		);
	}
	
	public function GetRatioValues() {
		$output	=	array();
		for($x=0.5;$x<3.01;$x=$x+0.05) {
			array_push($output, sprintf("%01.2f", $x));
		}
		return	$output;
	}
	
	public function GetAvailableSourceData() {
		return	array(
			array( 'id' => '0', 'name' => 'Own images' ),
			array( 'id' => '1', 'name' => 'Posts' ),
			array( 'id' => '2', 'name' => 'Woocommerce' )
		);
	}
	
	public function mainlist() {
		$list		=	new NihonPortgal_Main_List_Table();
		$list->SetAvailableSourceData($this->GetAvailableSourceData());
		$list->prepare_items(); 
		$list->display();
		echo $list->GetStyle();
	}
	
	public function ClearAllCacheFor($id) {
		global		$wpdb;
		$sql_query	=	" 
		DELETE 
		FROM	`".$wpdb->prefix."nihon_portgal_cache` 
		WHERE	`parentid` = '".$id."' 
		";
		$wpdb->query($sql_query);
	}
	
	public function make_breadcumb($dane) {
		$output		=	'<ul class="portgal_breadcumb">';
		$check		=	'mainoption';
		
		$actioname	=	array(
			'Main options'	=>	array( 'mainoption' ),
			'Items'		=>	array( 'items', 'editimage' ),
			'Categories'	=>	array( 'categories' ),
			'Navigation'	=>	array( 'navigation' ),
			'DL Animation'	=>	array( 'dlanimation' ),
			'Advanced'	=>	array( 'advanced' ),
		);
		
		if($dane[0]['sourcedata']!='0') {
			unset($actioname['Items']);
		}
		
		$actiontype	=	'mainoption';
		if(isset($_GET['actiontype'])) {
			$actiontype	=	$_GET['actiontype'];
		}
		
		foreach($actioname as $name => $k) {
			$check		=	'';
			if(in_array($actiontype, $k)) {
				$check	=	'portgal_active';
			}
			$output	.=	'<li><a href="'.home_url().'/wp-admin/admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype='.$k[0].'&id='.$dane[0]['id'].'" class="'.$check.'">'.$name.'</a></li>';
		}
		
		$optionid	=	get_option('plugin_portgal_preview');
		
		//	echo	$optionid;http://localhost/wordpress/?portgalpreview=portgal-preview&portgalpreviewid=2
		
		$output	.=	'<li><a href="'.home_url().'/?portgalpreview=portgal-preview&portgalpreviewid='.$dane[0]['id'].'" target="_blank">Preview &nbsp; <span class="fa fa-external-link-square" style="font-size: 14px;"></span></a></li>';
		$output	.=	'</ul>';
		return		$output;
	}
	
	public function build_checkbox($value, $name, $id='') {
		$checked	=	' ';
		if($value=='1') { $checked = ' CHECKED '; }
		$output	=	'<input type="checkbox" '.$checked.' name="'.$name.'" id="'.$id.'" value="1">';
		return		$output;
	}
	
	public function build_select($ar, $select, $name, $id='') {
		$output	=	'<select name="'.$name.'" id="'.$id.'">';
		foreach($ar as $item) {
			$checked	=	'';
			if($item['id']==$select) {
				$checked	=	' SELECTED ';
			}
			$output	.=	'<option '.$checked.' value="'.$item['id'].'">'.$item['name'].'</option>';
		}
		$output	.=	'</select>';
		return		$output;
	}
	
	public function make_category_edit($input) {
		global	$wpdb;
		
		
		
		if(is_array($_POST) and count($_POST)) {
			
			foreach($_POST as $key => $value) {
				// $_POST[$key]	=	PortgalFunctionsUtility('inputstr', $value);
			}
			
			$lastkey	=	round($_POST['last_key']);
			$array_update	=	array();
			$array_new	=	array();
			$id_update	=	array();
			
			// print_r($_POST); exit;
			
			for($x=0;$x<=$lastkey;$x++) {
				if(isset($_POST['item_'.$x])) {
					
					if($_POST['item_'.$x]=='0') {
						array_push($array_new, array(
							'value'		=>	$_POST['item_id_txt_'.$x],
							'lp'		=>	$_POST['item_id_lp_'.$x]
						));
					} else {
						array_push($array_update, array(
							'value'		=>	$_POST['item_id_txt_'.$x],
							'id'		=>	$_POST['item_'.$x],
							'lp'		=>	$_POST['item_id_lp_'.$x]
						));
						array_push($id_update, $_POST['item_'.$x]);
					}
				}
			}
			
			
			$this->ClearAllCacheFor($input['id']);
			
			if(is_array($id_update) and count($id_update)) {
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `parent_id` = '".$input['id']."' AND `id` NOT IN (".implode(',', $id_update).") ";
			} else {
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `parent_id` = '".$input['id']."' ";
			}
			
			$itemsdelete	=	$wpdb->get_results($sql_query, ARRAY_A);
			foreach($itemsdelete as $item) {
				$sql_query	=	" DELETE FROM `".$wpdb->prefix."nihon_portgal_categories_relations` WHERE `category_id` = '".$item['id']."' ";
				$wpdb->query($sql_query);
				$sql_query	=	" DELETE FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `id` = '".$item['id']."' ";
				$wpdb->query($sql_query);
			}
			
			
			switch($result[0]['sourcedata']) {
			case '2':
			case '1':
				$keysave	=	'outid';
			break;
			case '0':
			default:
				$keysave	=	'name';
			break;
			}
			
			foreach($array_update as $update) {
				$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_categories` SET `".$keysave."` = '".$update['value']."', `lp` = '".$update['lp']."' WHERE `id` = '".$update['id']."' ";
				$wpdb->query($sql_query);
			}
			foreach($array_new as $item) {
				$sql_query	=	" INSERT INTO `".$wpdb->prefix."nihon_portgal_categories` ( `".$keysave."`, `lp`, `parent_id` ) VALUES ('".$item['value']."', '".$item['lp']."', '".$input['id']."')  ";
				$wpdb->query($sql_query);
			}
			
			
			//echo	PortgalFunctionShowMessage(array('Pleas wait .....'), 1);
			echo	'
			<script type="text/javascript">
				document.location.href	=	"'.$url.'admin.php?page=nihon_portgal_manage_handle&action=edit&id='.$input['id'].'";
			</script>
			'; 
			
			return;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$output		=	'';
		$siteurl	=	get_option('siteurl').'/wp-content/plugins/nihon-portgal/';
		switch($input['sourcedata']) {
			case '2':
			
			$sql_query	=	"
			SELECT	`".$wpdb->prefix."term_taxonomy`.`term_taxonomy_id` as `id` , 
			IF(`".$wpdb->prefix."term_taxonomy`.`taxonomy`='product_tag', CONCAT('[PRODUCTS TAG] ', `".$wpdb->prefix."terms`.`name` ), CONCAT('[PRODUCTS CATEGORY] ', `".$wpdb->prefix."terms`.`name` )) as `name`
			FROM	`".$wpdb->prefix."term_taxonomy` 
			INNER JOIN	`".$wpdb->prefix."terms` ON `".$wpdb->prefix."terms`.`term_id` = `".$wpdb->prefix."term_taxonomy`.`term_id`
			WHERE	`".$wpdb->prefix."term_taxonomy`.`taxonomy` = 'product_tag' OR `".$wpdb->prefix."term_taxonomy`.`taxonomy` = 'product_cat' 
			ORDER BY `name` ASC 
			";
			$exists_categories	=	$wpdb->get_results($sql_query, ARRAY_A);
			
			break;
			case '1':
			$sql_query	=	"
			SELECT	`".$wpdb->prefix."term_taxonomy`.`term_taxonomy_id` as `id` , 
			IF(`".$wpdb->prefix."term_taxonomy`.`taxonomy`='post_tag', CONCAT('[TAG] ', `".$wpdb->prefix."terms`.`name` ), CONCAT('[CATEGORY] ', `".$wpdb->prefix."terms`.`name` )) as `name`
			FROM	`".$wpdb->prefix."term_taxonomy` 
			INNER JOIN	`".$wpdb->prefix."terms` ON `".$wpdb->prefix."terms`.`term_id` = `".$wpdb->prefix."term_taxonomy`.`term_id`
			WHERE	`".$wpdb->prefix."term_taxonomy`.`taxonomy` = 'post_tag' OR `".$wpdb->prefix."term_taxonomy`.`taxonomy` = 'category' 
			ORDER BY `name` ASC  
			";
			$exists_categories	=	$wpdb->get_results($sql_query, ARRAY_A);
			
			break;
			default:
			case '0':
				
				
			break;
		}
		
		
		$sql_query	=	"SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `parent_id` = '".$input['id']."' ORDER BY `lp` ASC  ";
		$items		=	$wpdb->get_results($sql_query, ARRAY_A);
		$lp_count	=	array();
		for($x=1;$x<100;$x++) {
			$lp_count[$x] = array( 'id' => $x , 'name' => $x );
		}
		
		
		$output	=	'
		<div style="clear: both;"></div>
		<form method="POST">
		<h3><img src="'.$siteurl.'list-add.png" alt="Add" align="right" title="Add" style="margin-right: 10px; cursor: pointer;" onClick="app_add_new_row();"></h3>
		<div style="clear: both"></div><br>
		
		<table  id="app_list_portgalcategories" class="portgal_table_form" cellspacing="0">
		<thead>
		<tr>
		  <th>Name</th>
		  <th style="width: 80px">Sort</th>
		  <th style="width: 50px">Delete</th>
		</tr>
		</thead>
		<tbody>
		';
			
			$key	=	-1;
			foreach($items as $key => $item) {	//	id="app_row_'.$item['id'].'" 
				$output	.=	'<tr id="app_row_'.$key.'" class="sortby_'.$key.'">
				<td ><input type="hidden" name="item_'.$key.'" value="'.$item['id'].'">';
				
				switch($input['sourcedata']) {
				case '2':
				case '1':
				$output	.=	'<select name="item_id_txt_'.$key.'" style="width: 100%">';
					foreach($exists_categories as $category) {
						
						$checked	=	'';
						
						//	echo	$item['name'].' -- '.$category['id'].'<br>';
						if($item['name']==$category['id']) {
							$checked	=	' SELECTED ';
						}
						$output		.=	'<option '.$checked.' value="'.$category['id'].'">'.htmlspecialchars($category['name']).'</option>';
					}
				$output	.=	'</select>';
				break;
				case '0':
				default:
				$output	.=	'<input type="text" value="'.htmlspecialchars($item['name']).'" name="item_id_txt_'.$key.'" style="width: 100%">';
				break;
				}
				 
				$output		.=	'</td>
				 
				<td>
					<a href="javascript:portgal_sort_down2(\'sortby_'.$key.'\');"><img src="'.plugins_url('nihon-portgal/arrow-down.png').'"></a>
					<a href="javascript:portgal_sort_up2(\'sortby_'.$key.'\');"><img src="'.plugins_url('nihon-portgal/arrow-up.png').'"></a>
					<input type="hidden" value="'.$key.'" name="item_id_lp_'.$key.'" class="orderinput">
				</td>
				<td><center><img src="'.$siteurl.'trash-empty.png" alt="Delete" style="cursor: pointer" onClick="app_remove_row('.$key.');"></center></td>
				</tr>';
			}
		
		$output	.=	'</tbody></table>
		<br>
		<input type="submit" value="Save categories" class="button action">
		<input type="hidden" id="last_key" name="last_key" value="'.$key.'">
		</form>
		';
		
		$output	.=	'
		<script type="text/javascript">
		function app_add_new_row() {
			key	=	parseInt(jQuery("#last_key").val());
			key	=	key + 1;
			jQuery("#app_list_portgalcategories tbody").append( \'<tr id="app_row_\' + key + \'" class="sortby_\' + key + \'"><td><input type="hidden" name="item_\' + key + \'" value="0">';
			switch($input['sourcedata']) {
				case '2':
				case '1':
					$output	.=	'<select name="item_id_txt_\' + key + \'" style="width: 100%">';
					foreach($exists_categories as $category) {
						$output	.=	'<option value="'.$category['id'].'">'.htmlspecialchars($category['name']).'</option>';
					}
					$output	.=	'</select>';
				break;
				case '0':
				default:
					$output	.=	'<input type="text" value="New" name="item_id_txt_\'+ key +\'" style="width: 100%">';
				break;
			}
			$output	.=	'</td><td><a href="javascript:portgal_sort_down2(\\\'sortby_\' + key + \'\\\');"><img src="'.plugins_url('nihon-portgal/arrow-down.png').'"></a><a href="javascript:portgal_sort_up2(\\\'sortby_\' + key + \'\\\');"><img src="'.plugins_url('nihon-portgal/arrow-up.png').'"></a><input type="hidden" value="\' + key + \'" name="item_id_lp_\' + key + \'" class="orderinput"></td><td><center><img src="'.$siteurl.'trash-empty.png" alt="Delete" style="cursor: pointer" onClick="app_remove_row(\' + key + \');"></center></td></tr>\');
			jQuery("#last_key").val(key);
		}
		function app_remove_row(id) {
			jQuery("#app_row_" + id).remove();
		}
		</script>
		';
		
		$output	=	$output;
		
		return	$output;
	}
	
	public function make_navigation_edit($input) {
		
		
		
		
		$sortby				=	$this->GetSortBy();
		
		$output		=	'';
		
		if(is_array($_POST) and count($_POST)) {
			global	$wpdb;
			
			$dataupdate	=	array(
				'navigation_type'			=>	'',
				'navigation_align'			=>	'',
				'navigation_pagination'			=>	'',
				'navigation_pagination_more'		=>	'',
				'navigation_load_more_label_for_button'	=>	'',
				'navigation_label_for_all'		=>	'',
				// 'navigation_sortby_show'		=>	'',
				//	'navigation_sortby_conf'		=>	'',
				
				'navigation_hide'			=>	'',
				'navigation_sortby_none_label'		=>	'',
				'navigation_search_show'		=>	'',
				'navigation_search_show_button_clear'	=>	'',
				'navigation_search_label_button_clear'	=>	'',
			);
			
			/*
navigation_type
navigation_align
navigation_pagination
navigation_pagination_more
navigation_load_more_label_for_button

navigation_sortby_show
navigation_sortby_conf

navigation_sortby_none_label
navigation_search_show
navigation_search_show_button_clear
navigation_search_label_button_clear
			*/
			
			foreach($dataupdate as $key => $v) {
				if(isset($_POST[$key])) {
					$dataupdate[$key]	=	 stripslashes( $_POST[$key] ) ;
				} else {
					unset($dataupdate[$k]);
				}
			}
			
			
			$sortbyconf	=	array();
			foreach($sortby as $sortby_item) {
				$sortbyconf[$sortby_item['id']]	=	array(
					  'show'	=>	stripslashes($_POST['navigationsortby_show_'.$sortby_item['id']]) ,
					  'label'	=>	stripslashes($_POST['navigationsortby_label_'.$sortby_item['id']]) ,
					  'lp'		=>	stripslashes($_POST['navigationsortby_lp_'.$sortby_item['id']])
				);
			}
			
			$dataupdate['navigation_sortby_conf']	=	serialize($sortbyconf);
			
			if(is_array($dataupdate) and count($dataupdate)) {
				
				$this->ClearAllCacheFor($input['id']);
				
				$output				.=	$this->show_ok('The data has been recently updated');
				
				$dataupdate['lastupdate']	=	date("Y-m-d H:i:s");
				$wpdb->update($wpdb->prefix.'nihon_portgal', $dataupdate, array( 'id' => $input['id'] ) );
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` WHERE `id` = '".$input['id']."' ";
				$tdata		=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($tdata) and count($tdata)) {
					$input	=	$tdata[0];
				}
				
			}
			
		}
		
		$skins		=	$this->GetAvailableNavigationSkins();
		$typeradioskin	=	'<ul>';
		foreach($skins as $skin) {
			$checked	=	'';
			if($input['navigation_type']==$skin['id']) {
				$checked	=	'CHECKED ';
			}
			$picpath	=	plugins_url('nihon-portgal/data/'.$skin['pic']);
			$typeradioskin	.=	'<li style="vertical-align: middle; padding-bottom: 5px; padding-top: 5px;"><input style="float: left; margin-top: 15px" type="radio" name="navigation_type" '.$checked.' value="'.$skin['id'].'"><img src="'.$picpath.'"></li>';
		}
		$typeradioskin	.=	'</ul>';
		
		
		$align_select			=	$this->build_select($this->GetTextAlignOption(), $input['navigation_align'], 'navigation_align', 'navigation_align');
		
		$pagination_select		=	$this->build_select($this->GetPagination(), $input['navigation_pagination'], 'navigation_pagination', 'navigation_pagination');
		
		$pagination_more_select		=	$this->build_select($this->GetPaginationLoadMoreType(), $input['navigation_pagination_more'], 'navigation_pagination_more', 'navigation_pagination_more');
		
		$search_checkbox		=	$this->build_checkbox($input['navigation_search_show'], 'navigation_search_show', 'navigation_search_show');
		
		$search_clear_checkbox		=	$this->build_checkbox($input['navigation_search_show_button_clear'], 'navigation_search_show_button_clear', 'navigation_search_show_button_clear');
		
		$navigation_hide		=	$this->build_checkbox($input['navigation_hide'], 'navigation_hide', 'navigation_hide');
		
		
		//	navigation_label_for_all
		
		$output				.=	'
		<div style="clear: both;"></div>
		<form method="POST">
		<div class="portgal_formwrap">
			<b>Type</b>
			'.$typeradioskin.'
			<ul class="portgal_form_list2">
				<li>
					<label for="navigationalign">Align:</label>
					'.$align_select.'
				</li>
				<li>
					<label for="navigationpagination">Pagination:</label>
					'.$pagination_select.'
				</li>
				<li>
					<label for="navigationpaginationmore">Pagination more:</label>
					'.$pagination_more_select.'
				</li>
				<li>
					<label for="navigation_load_more_label_for_button">Load more (label for button):</label>
					<input type="text" value="'.htmlspecialchars($input['navigation_load_more_label_for_button']).'" name="navigation_load_more_label_for_button" id="navigation_load_more_label_for_button">
				</li>
				<li>
					<label for="navigation_label_for_all">Label for button ALL (empty = ALL): </label>
					<input type="text" value="'.htmlspecialchars($input['navigation_label_for_all']).'" name="navigation_label_for_all" id="navigation_label_for_all">
				</li>
				<li></li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
			</ul>
			<div style="clear: both"></div>
			<b>Sort by: </b>
			<div style="height: 5px"></div>
			<table class="portgal_table_form" cellspacing="0">
			<thead>
				<tr>
				<th style="width: 200px">Name</th>
				<th style="width: 50px">Show</th>
				<th>Label</th>
				<th style="width: 70px">Option</th>
				</tr>
			</thead>
			<tbody>
				 ';
				
				$sortby2	=	array();
				$sortby_conf	=	unserialize( $input['navigation_sortby_conf'] );
				if(is_array($sortby_conf)) {
					$sortby_conf2	=	array();
					foreach($sortby_conf as $it) {
						if(!isset($sortby_conf2[$it['lp']])) {
							$sortby_conf2[$it['lp']]	=	array();
						}
						array_push( $sortby_conf2[$it['lp']] , $it );
					}
					ksort($sortby_conf2);
					foreach($sortby_conf2 as $ite) {
						foreach($ite as $it) {
							foreach($sortby as $k => $sortby_item) {
								if($sortby_item['id']==$it['lp']) {
									array_push($sortby2, array(
										'id'	=>	$sortby_item['id'] ,
										'name'	=>	$sortby_item['name'] ,
										'show'	=>	$it['show'] ,
										'label'	=>	$it['label'] ,
										'lp'	=>	$it['lp']
									));
									unset($sortby[$k]);
									break;
								}
							}
						}
					}
				}
				
				foreach($sortby as $item) {
					$item['show']	=	'';
					$item['label']	=	'';
					$item['lp']	=	'';
					array_push($sortby2, $item);
				}
				
				foreach($sortby2 as $keyitem => $sortby_item) {
					$key		=	'navigationsortby_label_'.$sortby_item['id'];
					$key2		=	'navigationsortby_show_'.$sortby_item['id'];
					$checkbox	=	$this->build_checkbox($sortby_item['show'], $key2, $key2);
					$output		.=	'
					<tr id="sortby_'.$keyitem.'" class="sortby_'.$keyitem.'">
					<td>
						<label for="'.$key.'">'.$sortby_item['name'].'</label>
					</td>
					<td>
						'.$checkbox.'
					</td>
					<td>
						<input type="text" value="'.htmlspecialchars($sortby_item['label']).'" name="navigationsortby_label_'.$sortby_item['id'].'" id="navigationsortby_label_'.$sortby_item['id'].'" style="width: 100%">
					</td>
					<td>
						<a href="javascript:portgal_sort_down2(\'sortby_'.$sortby_item['id'].'\');"><img src="'.plugins_url('nihon-portgal/arrow-down.png').'"></a>
						<a href="javascript:portgal_sort_up2(\'sortby_'.$sortby_item['id'].'\');"><img src="'.plugins_url('nihon-portgal/arrow-up.png').'"></a>
						<input type="hidden" value="'.$keyitem.'" name="navigationsortby_lp_'.$sortby_item['id'].'" class="orderinput">
						
					</td>
					</tr>';
				}
				
		$output	.=	'
			</tbody>
			</table>
			
			<ul class="portgal_form_list2">
				<li>
					<label for="navigation_sortby_none_label">Label for option "None":</label>
					<input type="text" value="'.htmlspecialchars($input['navigation_sortby_none_label']).'" name="navigation_sortby_none_label" id="navigation_sortby_none_label">
				</li>
				<li></li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
			</ul>
			<div style="clear: both"></div>
			<b>Search: </b>
			<ul class="portgal_form_list2">
				<li>
					<label for="navigationshowsearchinput">Show input search: '.$search_checkbox.'</label>
					
				</li>
				
				<li>
					<label for="navigationshowsearchclear">Show button Clear: '.$search_clear_checkbox.'</label>
					
				</li>
				<li>
				</li>
				<li>
					<label for="navigation_search_label_button_clear">Label for button Clear:</label>
					<input type="text" value="'.htmlspecialchars($input['navigation_search_label_button_clear']).'" name="navigation_search_label_button_clear" id="navigation_search_label_button_clear">
				</li>
			</ul>
			
			
			<div style="clear: both"></div>
			<ul class="portgal_form_list2">
				
				<li class="portgal_formlist_line"></li>
				<li class="portgal_formlist_line"></li>
				
				<li><label for="navigation_hide">Navigation hide: '.$navigation_hide.'</label></li>
				<li></li>
				
			</ul>
			
			<div class="portgal_clr"></div>
			
			<div class="portgal_wrap_submit"><input type="submit" value="Save" class="button"></div>
		</div>
		</form>
		';
		
		
		
		
		
		return	$output;
		
	}
	
	public function make_mainoption_edit($input) {
		
		$output	=	'';
		
		if(is_array($_POST) and count($_POST)) {
			global	$wpdb;
			
			$dataupdate	=	array(
				'name'			=>	'',
				'showhideanimation'	=>	'',
				'skewonmove'		=>	'',
				'easing'		=>	'',
				'duration'		=>	'',
				'widthmode'		=>	'',
				'postswith'		=>	''
			);
			
			foreach($dataupdate as $key => $v) {
				if(isset($_POST[$key])) {
					$dataupdate[$key]	=	stripslashes( $_POST[$key] );
				} else {
					unset($dataupdate[$k]);
				}
			}
			
			if(is_array($dataupdate) and count($dataupdate)) {
				
				$this->ClearAllCacheFor($input['id']);
				
				$output		.=	$this->show_ok('The data has been recently updated');
				
				$dataupdate['lastupdate']	=	date("Y-m-d H:i:s");
				$wpdb->update($wpdb->prefix.'nihon_portgal', $dataupdate, array( 'id' => $input['id'] ) );
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` WHERE `id` = '".$input['id']."' ";
				$tdata		=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($tdata) and count($tdata)) {
					$input	=	$tdata[0];
				}
				
			}
			
		}
		
		$showhide_select	=	$this->build_select($this->GetShowHideItemAnimation(), $input['showhideanimation'], 'showhideanimation', 'showhideanimation');
		$easing_select		=	$this->build_select($this->GetEasing(), $input['easing'], 'easing', 'easing');
		$duration_select	=	$this->build_select($this->GetDuration(), $input['duration'], 'duration', 'duration');
		$itemswith_select	=	$this->build_select(nihon_portgal_functions_static::GetPostsWith(), $input['postswith'], 'postswith', 'postswith');
		$checkbox_skewonmove	=	$this->build_checkbox($input['skewonmove'], 'skewonmove', 'skewonmove');
		
		
		
		$checked_width_0	=	'';
		$checked_width_1	=	'';
		
		if($input['widthmode']=='0') {
			$checked_width_0	=	' CHECKED ';
		} else {
			$checked_width_1	=	' CHECKED ';
		}
		
		$output	.=	'
		<form method="POST" action="">
		<div style="clear: both;"></div>
		<div class="portgal_formwrap">
			<ul class="portgal_form_list2">
				<li>
					<label for="portgalname">Name</label>
					<input type="text" value="'.htmlspecialchars($input['name']).'" name="name" id="portgalname">
				</li>
				<li>
					<label>Shortcode</label>
					<input type="text" value="'.htmlspecialchars('[portgal id="'.$input['id'].'"]').'">
				</li>
				
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				
				<li>
					<label>Show/hide animation</label>
					'.$showhide_select.'
				</li>
				<li>
					<label for="skewonmove">Skew on move</label>
					'.$checkbox_skewonmove.'
				</li>
				<li>
					<label>Easing</label>
					'.$easing_select.'
				</li>
				<li>
					<label>Duration</label>
					'.$duration_select.'
				</li>
				
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				
				<li>
					<label>Width:</label>
					<label style="display: inline" for="widthmode_0">100% (wrap) <input type="radio" name="widthmode"	'.$checked_width_0.' value="0" id="widthmode_0"></label>
					<label style="display: inline" for="widthmode_1">Full width <input type="radio" name="widthmode"	'.$checked_width_1.' value="1" id="widthmode_1"></label>
				</li>
				
				<li></li>
				';
				
				if(in_array($input['sourcedata'], array(1,2))) {
				$output	.=	'
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				<li>
					<label>Get items with:</label>
					'.$itemswith_select.'
				</li>
				<li></li>
				';
				}
				
		$output	.=	'
			</ul>
		
		<div class="portgal_clr"></div>
		<div class="portgal_wrap_submit"><input type="submit" value="Save" class="button"></div>
		</div>
		</form>
		';
		return	$output;
	}
	
	public function make_dlanimation_edit($input) {
		
		if(is_array($_POST) and count($_POST)) {
			global	$wpdb;
			
			$this->ClearAllCacheFor($input['id']);
			
			$wpdb->update($wpdb->prefix.'nihon_portgal', array( 'dlanimation_type' => $_POST['dlanimation'] ), array( 'id' => $input['id'] ) );
			$input['dlanimation_type']	=	$_POST['dlanimation'];
		}
		
		$dlanimations	=	$this->GetDLAnimations();
		$output		=	'<div style="clear: both"></div><form method="POST">';
		foreach($dlanimations as $dlanimation) {
			$checked	=	'';
			$add_class	=	'';
			if($input['dlanimation_type']==$dlanimation['id']) { 
				$checked	=	' CHECKED '; 
				$add_class	=	'portgaldlanimationwrap_selected';
			}
			$output		.=	'<div style="" class="portgaldlanimationwrap '.$add_class.'"><label for="dlanimation_'.$dlanimation['id'].'" class="portgaldlanimationname"><input type="radio" name="dlanimation" '.$checked.' value="'.$dlanimation['id'].'" id="dlanimation_'.$dlanimation['id'].'">'.$dlanimation['name'].'</label>';
			$output		.=	file_get_contents("../wp-content/plugins/nihon-portgal/dlanimations/".$dlanimation['name']);
			
			$output		=	str_replace('{wordpress_path}', home_url().'/', $output);
			$output		=	str_replace('{img_1_path}', home_url().'/wp-content/plugins/nihon-portgal/out/china.jpg', $output);
			$output		=	str_replace('{img_2_path}', home_url().'/wp-content/plugins/nihon-portgal/out/text.png', $output);
			
			
			$output		.=	'</div>';
		}
		
		return	$output.'<div style="clear: both"></div><input type="submit" value="Save" class="button"></form>
		<script type="text/javascript">
			
			jQuery(document).ready(function() {
				jQuery(".portgaldlanimationwrap input").click(function() {
					jQuery(".portgaldlanimationwrap_selected").removeClass("portgaldlanimationwrap_selected");
					jQuery(this).closest(".portgaldlanimationwrap").addClass("portgaldlanimationwrap_selected");
					
				});
			});
			
		</script>
		';
	}
	
	public static function local_mysql_real_escape_string($str) {
		return	addslashes($str);
	}
	
	public function PortgalFunctionFunkcjaPoliczIlosc($id) {
		global	$wpdb;
		$id		=	self::local_mysql_real_escape_string($id);
		//			Policzenie powiązanych zdjęć
		$sql_query	=	" SELECT COUNT(`id`) as `ilosc` FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `parentid` = '".$id."' ";
		$tdaneilosc	=	$wpdb->get_results($sql_query, ARRAY_A);
		$iloscset	=	0;
		if(is_array($tdaneilosc) and count($tdaneilosc)) {
		      $iloscset	=	$tdaneilosc[0]['ilosc'];
		}
		$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal` SET `items` = '".$iloscset."' WHERE `id` = '".$id."' ";
		$wpdb->query($sql_query);
	}
	
	public function PortgalFunctionFunkcjaSortItems($id_parent) {
		global	$wpdb;
		$id_parent	=	self::local_mysql_real_escape_string($id_parent);
		$sql_query	=	" SELECT `id` FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `parentid` = '".$id_parent."' ORDER BY `lp` ASC  ";
		$items		=	$wpdb->get_results($sql_query, ARRAY_A);
		$lp		=	1;
		foreach($items as $item) {
			$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_items` SET `lp` = '".$lp."' WHERE `id` = '".$item['id']."' ";
			$wpdb->query($sql_query);
			$lp++;
		}
		return	$lp;
	}
	
	public function make_items_list_add_item($input) {
		
		global			$wpdb;
		
		$siteurl		=	get_option('siteurl').'/wp-content/plugins/nihon-portgal/'; 
		
		$value_description	=	'';
		$value_urltarget	=	'http://';
		$value_imageid		=	'';
		$value_secondimageid	=	'';
		$value_secondimageurl	=	'';
		$value_thumbnail	=	'';
		$value_titlename	=	'';
		$value_youtubeurl	=	'';
		$value_vimmeourl	=	'';
		$value_oggfile		=	'';
		$value_webmfile		=	'';
		$value_mp4file		=	'';
		$value_darklayerbackgroundcolor	=	'';
		$output				=	'<div style="clear: both"></div>';
		$show_add_item			=	false;
		$row_show_related_category	=	array();
		
		if(isset($_POST['saveitem']) and $_POST['saveitem']=='1') {
			
			$li	=	round($_POST['last_key']);
			for($x=0;$x<=$li;$x++) {
				if(isset($_POST['category_'.$x])) {
					array_push($row_show_related_category, $_POST['category_'.$x]);
				}
			}
			
			$value_description	=	$_POST['description'];
			$value_urltarget	=	$_POST['urltarget'];
			$value_imageid		=	$_POST['imageid'];
			$value_secondimageid	=	$_POST['secondimageid'];
			$value_secondimageurl	=	$_POST['thumbnailpreviewseconlayer'];
			$value_thumbnail	=	$_POST['thumbnailpreview'];
			$value_titlename	=	$_POST['titlename'];
			$value_youtubeurl	=	$_POST['youtubeurl'];
			$value_vimmeourl	=	$_POST['vimmeourl'];
			$value_oggfile		=	$_POST['oggfile'];
			$value_webmfile		=	$_POST['webmfile'];
			$value_mp4file		=	$_POST['mp4file'];
			
			$value_pricelabel	=	$_POST['price_label'];
			$value_pricevalue	=	$_POST['price_value'];
			$value_raiting		=	$_POST['raiting'];
			$value_darklayerbackgroundcolor		=	$_POST['darklayerbackgroundcolor'];
			$value_woocommerceproductid		=	$_POST['woocommerceproductid'];
			
			
			$message	=	array();
			$file_ok	=	false;
			
			if($value_imageid=='' or $value_imageid=='0') {
				array_push($message, 'You must select a photo');
			}
			
			if(is_array($message) and count($message)) {
				$show_add_item			=	true;
				$messageset	=	implode($message, '<br>');
				$output		.=	$this->show_error($messageset);
				
				//	echo	PortgalFunctionShowMessage($message, 0);
			} else {
				$id			=	self::local_mysql_real_escape_string($_GET['id']);
				$value_description	=	self::local_mysql_real_escape_string($value_description);
				$value_urltarget	=	self::local_mysql_real_escape_string($value_urltarget);
				$value_imageid		=	self::local_mysql_real_escape_string($value_imageid);
				$value_secondimageid	=	self::local_mysql_real_escape_string($value_secondimageid);
				$value_titlename	=	self::local_mysql_real_escape_string($value_titlename);
				
				$value_youtubeurl	=	self::local_mysql_real_escape_string($value_youtubeurl);
				$value_vimmeourl	=	self::local_mysql_real_escape_string($value_vimmeourl);
				$value_oggfile		=	self::local_mysql_real_escape_string($value_oggfile);
				$value_webmfile		=	self::local_mysql_real_escape_string($value_webmfile);
				$value_mp4file		=	self::local_mysql_real_escape_string($value_mp4file);
				
				$value_pricelabel	=	self::local_mysql_real_escape_string($value_pricelabel);
				$value_pricevalue	=	self::local_mysql_real_escape_string($value_pricevalue);
				$value_raiting		=	self::local_mysql_real_escape_string($value_raiting);
				
				$value_darklayerbackgroundcolor	=	self::local_mysql_real_escape_string($value_darklayerbackgroundcolor);
				$value_woocommerceproductid	=	self::local_mysql_real_escape_string($value_woocommerceproductid);
				
				
				//	$sql_query		=	" INSERT INTO `".$wpdb->prefix."nihon_portgal_items` (`id`, `parentid`, `url`, `description`, `image`, `lp`) VALUES (NULL, '".$id."', '".$value_urltarget."', '".$value_description."', '".$value_imageid."', '0'); ";
				// policzenie max lp
				
				$limit		=	1;
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_items` ORDER BY `".$wpdb->prefix."nihon_portgal_items`.`lp` DESC LIMIT 1 ";
				$itemmaxlp	=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($itemmaxlp) and count($itemmaxlp)) {
					$itemmaxlp	=	$itemmaxlp[0]['lp'] + 1;
				} else {
					$itemmaxlp	=	1;
				}
				
				
				$id_ins			=	$wpdb->insert($wpdb->prefix."nihon_portgal_items", array(
					'parentid'	=>	$id,
					'url'		=>	$value_urltarget,
					'description'	=>	$value_description,
					'title'		=>	$value_titlename,
					'image'		=>	$value_imageid,
					'secondimage'	=>	$value_secondimageid,
					'youtubeurl'	=>	$value_youtubeurl,
					'vimmeourl'	=>	$value_vimmeourl,
					'oggfile'	=>	$value_oggfile,
					'webmfile'	=>	$value_webmfile,
					'mp4file'	=>	$value_mp4file,
					
					'price_label'	=>	$value_pricelabel,
					'price_value'	=>	$value_pricevalue,
					'raiting'	=>	$value_raiting,
					
					'darklayerbackgroundcolor'	=>	$value_darklayerbackgroundcolor,
					'woocommerceproductid'		=>	$value_woocommerceproductid,
					'lp'		=>	$itemmaxlp
				));
				
				//	$id_ins			=	$wpdb->query($sql_query);
				
				$sql_query_max		=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_items` ORDER BY `id` DESC LIMIT 1 ";
				$results_max		=	$wpdb->get_results($sql_query_max, ARRAY_A);
				if(is_array($results_max) and count($results_max)) {
					$id_ins		=	$results_max[0]['id'];
					foreach($row_show_related_category as $item) {
						$sql_query_ins	=	" INSERT INTO `".$wpdb->prefix."nihon_portgal_categories_relations` (`id`, `item_id`, `category_id`) VALUES (NULL, '".$id_ins."', '".$item."'); ";
						$wpdb->query($sql_query_ins);
					}
				}
				
				$value_urltarget	=	'http://';
				$value_description	=	'';
				$value_thumbnail	=	'';
				$value_imageid		=	'';
				$value_secondimageid	=	'';
				$value_secondimageurl	=	'';
				$value_titlename	=	'';
				$value_youtubeurl	=	'';
				$value_vimmeourl	=	'';
				$value_oggfile		=	'';
				$value_webmfile		=	'';
				$value_mp4file		=	'';
				
				$value_pricelabel	=	'';
				$value_pricevalue	=	'';
				$value_raiting		=	'';
				
				$value_darklayerbackgroundcolor	=	'';
				$value_woocommerceproductid	=	'';
				
				$row_show_related_category	=	array();
				$this->PortgalFunctionFunkcjaPoliczIlosc($id);
			}
			
			$this->ClearAllCacheFor($id);
			
		}
		
		
		// pobranie dostępnych kategorii
		
		$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `parent_id` = '".$input['id']."' ORDER BY `".$wpdb->prefix."nihon_portgal_categories`.`name` ASC  ";
		$tdane		=	$wpdb->get_results($sql_query, ARRAY_A);
		$categories	=	array();
		foreach($tdane as $item) {
			switch($input['sourcedata']) {
				case '2':
				case '1':
					// $sql_query	=	" SELECT * FROM `".$wpdb->prefix."terms` WHERE `term_id` = '".$item['outid']."' ";
					$sql_query	=	" SELECT `term_id` FROM `".$wpdb->prefix."term_taxonomy` WHERE `term_taxonomy_id` = '".$item['outid']."' LIMIT 1";
					$__tdane	=	$wpdb->get_results($sql_query, ARRAY_A);
					if(is_array($__tdane) and count($__tdane)) {
						$sql_query	=	" 
						SELECT *
						FROM `".$wpdb->prefix."terms`
						WHERE `term_id` = '".$__tdane[0]['term_id']."' ";
						$__tdane	=	$wpdb->get_results($sql_query, ARRAY_A);
						if(is_array($__tdane) and count($__tdane)) {
							array_push( $categories, array(
								'id'	=>	$item['id'],
								'name'	=>	$__tdane[0]['name']
							) );
							//	$categories[$item['id']]	=	$__tdane[0]['name'];
						}
					}
				break;
				default:
				case '0':
					//	$categories[$item['id']]	=	$item['name'];
					array_push($categories, $item);
				break;
			}
		}
		
		$output			.=	'
		<script type="text/javascript">
		jQuery(document).ready(function() {
			jQuery(".media-button1, .media-button2").click(function(event) {
				currentbutton	=	this;
				event.preventDefault();
				if(wp.media.frames.portgal_frame) {
				  wp.media.frames.portgal_frame.open();
				  return;
				}
				wp.media.frames.portgal_frame = wp.media({
				    title: \'Select graphics\',
				    multiple: false,
				    library: { type: \'image\' },
				    button: { text: \'Use this photo\' }
				});
				var portgal_media_set_image = function() {
					var selection = wp.media.frames.portgal_frame.state().get(\'selection\');
					if (!selection) {
					    return;
					}
					selection.each(function(attachment) {
						where	=	jQuery(currentbutton).closest("div").find(".portgalwhereim").val();
						
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
				wp.media.frames.portgal_frame.on(\'close\', portgal_media_set_image);
				wp.media.frames.portgal_frame.on(\'select\', portgal_media_set_image);
				wp.media.frames.portgal_frame.open();
			});
			jQuery(".cpa-color-picker").wpColorPicker();
		});
		
		function app_add_newitem() {
			jQuery("#portgal_add_new_item").toggle();
		}
		
		</script>
		';
		
		
		$style_display_preview1 =	' style="display: none" ';
		if($value_thumbnail!='') {
			$style_display_preview1 =	' style="display: block" ';
		}
		$style_display_preview2 =	' style="display: none" ';
		if($value_secondimageurl!='') {
			$style_display_preview2 =	' style="display: block" ';
		}
		
		
		$add_style_show_add_item	=	' display: none ';
		if($show_add_item) {
			$add_style_show_add_item	=	'';
		}
		
		
		$output			.=	'
		
			<h3>  <span style="line-height: 32px; padding-left: 10px; cursor: pointer" onClick="app_add_newitem();"> Add new item</span> <img src="'.$siteurl.'list-add.png" alt="Add item" title="Add item" align="left" style="cursor: pointer" onClick="app_add_newitem();"> </h3>
		
		<div style="'.$add_style_show_add_item.'" id="portgal_add_new_item">
			<form method="post" enctype="multipart/form-data">
			<input type="hidden" value="1" name="saveitem">
			<ul class="portgal_form_list2">
				<li>
					<label for="titlename">Title/Name:</label>
					<input type="text" id="titlename" name="titlename" value="'.htmlspecialchars($value_titlename).'">
				</li>
				<li>
					<label for="description">Description:</label>
					<input type="text" id="description" name="description" value="'.htmlspecialchars($value_description).'">
				</li>
				<li>
					<label for="urltarget">Url target:</label>
					<input type="text" id="urltarget" name="urltarget" value="'.htmlspecialchars($value_urltarget).'">
				</li>
				<li>
					<label for="darklayerbackgroundcolor">"Dark layer" background color:</label>
					<input type="text" id="darklayerbackgroundcolor" style="width: 120px" name="darklayerbackgroundcolor" class="cpa-color-picker" value="'.htmlspecialchars($value_darklayerbackgroundcolor).'">
				</li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				<li>
					<div><label>Image:</label>
					<input type="hidden" class="portgalwhereim" value="preview_thumbnail">
					<input type="hidden" id="thumbnailpreview" class="thumbnailpreview" name="thumbnailpreview" value="'.$value_thumbnail.'">
					<input type="hidden" name="imageid" class="media-input1 portgalimageid" value="'.$value_imageid.'">
					<button class="media-button1 button action">Select image</button></div>
				</li>
				<li>
					<div><label>Second layer Image:</label>
					<input type="hidden" class="portgalwhereim" value="preview_thumbnail2">
					<input type="hidden" id="thumbnailpreviewseconlayer" class="thumbnailpreview" name="thumbnailpreviewseconlayer" value="'.$value_secondimageurl.'">
					<input type="hidden" name="secondimageid" class="media-input2 portgalimageid" value="'.$value_secondimageid.'">
					<button class="media-button2 button action">Select image</button>
					<input type="button" class="button" style="width: 75px" value="Clear" onClick="app_clear_secondimage();">
					</div>
				</li>
				<li><img src="'.$value_thumbnail.'" id="preview_thumbnail" alt="Preview" '.$style_display_preview1.'></li>
				<li><img src="'.$value_secondimageurl.'" id="preview_thumbnail2" alt="Preview" '.$style_display_preview2.'></li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				
				<li>
					<label for="youtubeurl">Youtube url:</label>
					<input type="text" id="youtubeurl" name="youtubeurl" value="'.htmlspecialchars($value_youtubeurl).'">
				</li>
				<li>
					<label for="vimmeourl">Vimmeo url:</label>
					<input type="text" id="vimmeourl" name="vimmeourl" value="'.htmlspecialchars($value_vimmeourl).'">
				</li>
				
				<li>
					<label for="oggfile">Ogg url:</label>
					<input type="text" id="oggfile" name="oggfile" value="'.htmlspecialchars($value_oggfile).'">
				</li>
				<li>
					<label for="webmfile">Webm url:</label>
					<input type="text" id="webmfile" name="webmfile" value="'.htmlspecialchars($value_webmfile).'">
				</li>
				
				<li>
					<label for="mp4file">Mp4 url:</label>
					<input type="text" id="mp4file" name="mp4file" value="'.htmlspecialchars($value_mp4file).'">
				</li>
				<li></li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>

				<li>
					<label for="pricelabel">Price label:</label>
					<input type="text" value="'.$value_pricelabel.'" name="price_label" id="pricelabel">
				</li>
				<li>
					<label for="pricevalue">Price value (for order by):</label>
					<input type="text" value="'.$value_pricevalue.'" name="price_value" id="pricevalue">
				</li>
				<li>
					<label for="raiting">Raiting:</label>
					'.$this->build_select(nihon_portgal_functions_static::GetItemRaiting(), $value_raiting, "raiting", "raiting").'
				</li>
				<li>
					<label for="woocommerceproductid">Product ID:</label>
					<input type="text" value="'.$value_woocommerceproductid.'" name="woocommerceproductid" id="woocommerceproductid">
				</li>
			</ul>
			<div style="clear: both"></div>
			<table style="width: 100%">
			  <tr>
			    <td colspan="2">
				<br>
				<hr>
				<h4>Related categories: &nbsp;&nbsp;
				<img src="'.$siteurl.'list-add-small.png" alt="Add category" title="Add category" style="cursor: pointer" onClick="app_add_row_category();"> </h4>';
				$last_key			=	0; 
				$output	.=	'<table style="width: 100%" id="app_category_add">';
				foreach($row_show_related_category as $key => $item) {
					$output	.=	'<tr id="category_row_'.$key.'"><td>';
					$output	.=	$this->build_select($categories, $item, "category_".$key);
					$output	.=	'</td><td style="width: 100px"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right" style="cursor: pointer" onClick="app_remove_row_category('.$key.');"></td></tr>';
					$last_key	=	$key;
				}
				$output	.=	'</table>
				<input type="hidden" name="last_key" id="last_key" value="'.$last_key.'">
			      </td>
			    </tr>
			    <tr><td></td><td></td></tr>
			  </table>
			  <input type="submit" value="Save" class="button action">
			</form>
		  
		</div>
		
		
		<script type="text/javascript">
			function app_add_row_category() {
				key		=	parseInt(jQuery("#last_key").val());
				key++;
				add_rows	=	\'<tr id="category_row_\'+key+\'"><td>'.$this->build_select($categories, '', "category_'+key+'").'</td><td style="width: 100px"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right" style="cursor: pointer" onClick="app_remove_row_category(\'+ key +\');"></td></tr>\';
				jQuery("#app_category_add").append(add_rows);
				jQuery("#last_key").val(key);
			}
			function app_remove_row_category(x) {
				jQuery("#category_row_" + x).remove();
			}
			function app_clear_secondimage() {
				jQuery("#thumbnailpreviewseconlayer").val("");
				jQuery("#secondimageid").val("");
				jQuery("#preview_thumbnail2").attr("src", "");
				jQuery("#preview_thumbnail2").hide();
			}
		</script>
		
		';
		
		return	$output;
		
	}
	
	public function make_items_edit($input) {
		
		global	$wpdb;
		
		if(isset($_GET['itemdel']) and $_GET['itemdel']!='') {
			$itemdel	=	self::local_mysql_real_escape_string($_GET['itemdel']);
			$sql_query	=	" DELETE FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `id` = '".$itemdel."' ";
			$wpdb->query($sql_query);
			$sql_query	=	" DELETE FROM `".$wpdb->prefix."nihon_portgal_categories_relations` WHERE `item_id` = '".$itemdel."' ";
			$wpdb->query($sql_query);
			$this->PortgalFunctionFunkcjaSortItems($input['id']);
			$this->PortgalFunctionFunkcjaPoliczIlosc($input['id']);
			$this->ClearAllCacheFor($input['id']);
		}
		
		if(isset($_GET['itemdown']) or isset($_GET['itemup'])) {
			$keyid		=	self::local_mysql_real_escape_string($_GET['itemdown']);
			$down		=	true;
			if(isset($_GET['itemup'])) {
				$down		=	false;
				$keyid		=	self::local_mysql_real_escape_string($_GET['itemup']);
			}
			$lp		=	$this->PortgalFunctionFunkcjaSortItems($input['id']);
			$keyid		=	trim($keyid);
			if($keyid!='' and isset($_GET['from'])) {
				$from		=	self::local_mysql_real_escape_string($_GET['from']);
				$sql_query	=	" SELECT `id`, `lp` FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `id` = '".$keyid."' AND `lp` = '".$from."' ";
				$itemfind		=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($itemfind) and count($itemfind)) {
					if($down) {
						if($from<($lp-1)) { 
							$next		=	($from+1);
							$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_items` SET `lp` = '".$from."' WHERE `parentid` = '".$input['id']."' AND `lp` = '".$next."' ";
							$wpdb->query($sql_query);
							$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_items` SET `lp` = '".$next."' WHERE `id` = '".$keyid."' ";
							$wpdb->query($sql_query);
						}
					} else {
						if($from>1) {
							$next		=	($from-1);
							$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_items` SET `lp` = '".$from."' WHERE `parentid` = '".$input['id']."' AND `lp` = '".$next."' ";
							$wpdb->query($sql_query);
							$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_items` SET `lp` = '".$next."' WHERE `id` = '".$keyid."' ";
							$wpdb->query($sql_query);
						}
					}
				}
			}
			$this->ClearAllCacheFor($input['id']);
		}
		
		$output		=	$this->make_items_list_add_item($input);
		
		$myListTable	=	new NihonPortgal_Items_List_Table($input['id']);
		
		$myListTable->prepare_items(); 
		
		ob_start();
		$myListTable->display(); 
		$output		.=	ob_get_contents();
		ob_end_clean();
		
		$output		.=	$myListTable->GetStyle();
		
		return	$output;
	}
	
	function make_advanced_edit($input) {
		
		 
		$output		=	'';
		
		if(is_array($_POST) and count($_POST)) {
			
			global	$wpdb;
			
			$update['advanced_max_widths']	=	'';
			$maxrow			=	round($_POST['max_width_last_key']);
			$array_max_width	=	array();
			for($x=0;$x<=$maxrow;$x++) {
				if(isset($_POST['advanced_max_width_'.$x])) {
					array_push($array_max_width, round($_POST['advanced_max_width_'.$x]));
				}
			}
			
			$update['advanced_max_widths']	=	serialize($array_max_width);
			
			
			$array_get	=	array(
				'advanced_minimum_margin',
				'advanced_bgscaleratio',
				'advanced_usecache',
				'advanced_cache_max_time',
				'advanced_dl_bgcolor',
				'advanced_dl_opacity',
				'advanced_dl_bgcolor_get_from_this_conf',
				'advanced_dl_bgcolor_get_from_item',
				'advanced_preloader',
				'advanced_label_read_more'
			);
			
			foreach($array_get as $item_array_get) {
				$update[$item_array_get]	=	stripslashes($_POST[$item_array_get]);
			}
			
			$this->ClearAllCacheFor($input['id']);
			
			$wpdb->update($wpdb->prefix.'nihon_portgal', $update, array( 'id' => $input['id'] ) );
			$sql_query		=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` WHERE `id` = '".$input['id']."' ";
			$tdane			=	$wpdb->get_results($sql_query, ARRAY_A);
			if(is_array($tdane) and count($tdane)) {
				$input	=	$tdane[0];
			}
			$output		.=	$this->show_ok('The data has been recently updated');
		}
		
		$widths		=	$this->GetMaxWidthForItem();
		$preloaders	=	$this->GetPreloaders();
		
		$siteurl	=	get_option('siteurl').'/wp-content/plugins/nihon-portgal/'; 
		
		$output		.=	'
		<div style="clear: both;"></div>
		
		<form method="POST">
		<table style="width: 100%">
		<tr>
		<td>
			<b>Max width for each item in row:</b>
		</td>
		<td style="width: 100px">
			<h3><img src="'.$siteurl.'list-add.png" alt="Add" align="right" title="Add" style="margin-right: 10px; cursor: pointer;" onClick="app_add_new_row();"></h3>
		</td>
		</tr>
		</table>
		
		<div style="clear: both"></div><br>
		<table  id="app_list_portgalcategories" class="portgal_table_form" cellspacing="0">
		<thead>
		<tr>
		  <th style="width: 50px">Row</th>
		  <th>Max width for each item in row</th>
		  <th style="width: 50px">Delete</th>
		</tr>
		</thead>
		<tbody>';
			
			$advanced_max_widths	=	unserialize($input['advanced_max_widths']);
			if(!is_array($advanced_max_widths)) {
				$advanced_max_widths	=	array();
			}
			
			$key	=	-1;
			foreach($advanced_max_widths as $key => $item) {
				$output		.=	'<tr id="app_row_max_widh_'.$key.'" class="sortby_'.$key.'"><td>'.($key+1).'</td><td>';
				$output		.=	$this->build_select($widths, $item,  'advanced_max_width_'.$key);
				$output		.=	'</td>
				
				<td><center><img src="'.$siteurl.'trash-empty.png" alt="Delete" style="cursor: pointer" onClick="app_remove_row('.$key.');"></center></td>
				</tr>';
			}
			
			
		$output	.=	'</tbody></table>
		
		
		
		<ul class="portgal_form_list2">
			<li>
				<label for="advanced_minimum_margin">Minimum margin between items (left and right margin):</label>
				'.$this->build_select($this->GetMinMarginBeewtenElemets(), $input['advanced_minimum_margin'], 'advanced_minimum_margin', 'advanced_minimum_margin').'
			</li>
			<li>
				<label for="advanced_bgscaleratio">Background scale ratio:</label>
				'.$this->build_select(nihon_portgal_functions_static::GetBgScaleRatio(), $input['advanced_bgscaleratio'],  'advanced_bgscaleratio', 'advanced_bgscaleratio').'
			</li>
		</ul>
		
		
		
		
		
		
		<ul class="portgal_form_list2">
		<li class="portgal_formlist_line"></li>
		<li class="portgal_formlist_line"></li>
		</ul>
		
			<ul class="portgal_form_list2">
			<li>
				<label for="advanced_usecache">Use cache:</label>
				'.$this->build_checkbox($input['advanced_usecache'], 'advanced_usecache', 'advanced_usecache').'
			</li>
			<li>
				<label for="advanced_cache_max_time">Maximum storage time:</label>
				'.$this->build_select($this->GetMaxTimeCache(), $input['advanced_cache_max_time'],  'advanced_cache_max_time', 'advanced_cache_max_time').'
			</li>
			</ul>
			<div style="clear: both"></div>
		
		<ul class="portgal_form_list2">
		<li class="portgal_formlist_line"></li>
		<li class="portgal_formlist_line"></li>
		</ul>
		
			<ul class="portgal_form_list2">
			<li>
				<label for="advanced_dl_bgcolor">"Dark layer" background color:</label>
				<input type="text" style="width: 120px" name="advanced_dl_bgcolor" class="cpa-color-picker" value="'.$input['advanced_dl_bgcolor'].'" id="advanced_dl_bgcolor">
			</li>
			<li>
				<label for="advanced_dl_opacity">"Dark layer" opacity:</label>
				'.$this->build_select($this->GetDarlLayerOpacity(), $input['advanced_dl_opacity'],  'advanced_dl_opacity', 'advanced_dl_opacity').'
			</li>
			<li>
				<label for="advanced_dl_bgcolor_get_from_this_conf">Use the background color and opacity from this conf:</label>
				'.$this->build_checkbox($input['advanced_dl_bgcolor_get_from_this_conf'], 'advanced_dl_bgcolor_get_from_this_conf', 'advanced_dl_bgcolor_get_from_this_conf').'
			</li>
			<li>
				<label for="advanced_dl_bgcolor_get_from_item">Use the background color of an element:</label>
				'.$this->build_checkbox($input['advanced_dl_bgcolor_get_from_item'], 'advanced_dl_bgcolor_get_from_item', 'advanced_dl_bgcolor_get_from_item').'
			</li>
			
			</ul>
			<div style="clear: both"></div>
		
		<ul class="portgal_form_list2">
		<li class="portgal_formlist_line"></li>
		<li class="portgal_formlist_line"></li>
		</ul>
		
		
		<ul class="portgal_form_list2">
			<li>
			<label>Preloader:</label>
			</li>
			<li>&nbsp</li>
		</ul>
		<div style="clear: both"></div>
		';
				
				foreach($preloaders as $preloader) {
					$checked	=	'';
					if($preloader['id']==$input['advanced_preloader']) {
						$checked	=	' CHECKED ';
					}
					$output	.=	'
					<div style="float: left; height: 75px; width: 75px; text-align: center">
						<input type="radio" name="advanced_preloader" value="'.$preloader['id'].'" '.$checked.' >
						<br>
						<br>
						<img src="'.home_url().'/wp-content/plugins/nihon-portgal/preloaders/22/'.$preloader['name'].'">
					</div>
					';
				}
				
			$output	.=	'
			<div style="clear: both"></div>
		<br>
		<input type="hidden" id="max_width_last_key" name="max_width_last_key" value="'.$key.'">
		
		<div style="clear: both"></div>
		
		<ul class="portgal_form_list2">
		<li class="portgal_formlist_line"></li>
		<li class="portgal_formlist_line"></li>
		</ul>
		
		<ul class="portgal_form_list2">
			<li>
			<label>Other:</label>
			</li>
			<li>&nbsp</li>
		</ul>
		
		<ul class="portgal_form_list2">
		<li>
			<label for="advanced_label_read_more">Label "Read more" (default "Read more"):</label>
			<input type="text" value="'.$input['advanced_label_read_more'].'" name="advanced_label_read_more" id="advanced_label_read_more">
		</li>
		</ul>
		
		<div style="clear: both"></div>
		
		<br>
		
		';
		
		
		$output	.=	'
		<script type="text/javascript">
		function app_policzwiersze() {
			begin	=	0;
			jQuery("#app_list_portgalcategories tr").each(function() {
				jQuery(this).find("td:first-child").html(begin);
				begin	=	begin	+	1;
			});
			
		}
		function app_add_new_row() {
			key	=	parseInt(jQuery("#max_width_last_key").val());
			key	=	key + 1;
			jQuery("#app_list_portgalcategories tbody").append( \'<tr id="app_row_max_widh_\' + key + \'" class="sortby_\' + key + \'"><td></td><td>';
			$output	.=	$this->build_select($widths, '400',  "advanced_max_width_'+key+'");
			$output	.=	'</td><td><center><img src="'.$siteurl.'trash-empty.png" alt="Delete" style="cursor: pointer" onClick="app_remove_row(\' + key + \');"></center></td></tr>\');
			jQuery("#max_width_last_key").val(key);
			app_policzwiersze();
		}
		function app_remove_row(id) {
			jQuery("#app_row_max_widh_" + id).remove();
			app_policzwiersze();
		}
		jQuery(document).ready(function() { 
			jQuery(".cpa-color-picker").wpColorPicker();
			
		});
		</script>
		
		<style type="text/css">
			#app_list_portgalcategories select {
				width: 100%
			}
		</style>
		
		<input type="submit" value="Save" class="button action">
		</form>
		
		
		
		';
		
		return	$output;
		
	}
	
	function editimage() {
		global $wpdb;
		$id		=	$_GET['itemid'];
		$sqlquery	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `id` = '".$id."' "; 
		
		$result		=	$wpdb->get_results($sqlquery, ARRAY_A);
		
		$output		=	'<div style="clear: both"></div>';
		
		
		if(is_array($result) and count($result)) {
			
			if(is_array($_POST) and count($_POST)) {
				
				$related_category	=	array();
				$lk	=	round($_POST['last_key']);
				for($x=0;$x<=$lk;$x++) {
					if(isset($_POST['category_'.$x])) {
						$related_category[$_POST['category_'.$x]]	=	$_POST['category_'.$x];
					}
				}
				
				$urltarget	=	$_POST['urltarget'];
				$description	=	$_POST['description'];
				$titlename	=	$_POST['titlename'];
				$imageid	=	$_POST['imageid'];
				$secondimageid	=	$_POST['secondimageid'];
				$darklayerbackgroundcolor	=	$_POST['darklayerbackgroundcolor'];
				
				$youtubeurl	=	$_POST['youtubeurl'];
				$vimmeourl	=	$_POST['vimmeourl'];
				$oggfile	=	$_POST['oggfile'];
				$webmfile	=	$_POST['webmfile'];
				$mp4file	=	$_POST['mp4file'];
				
				$price_label	=	$_POST['price_label'];
				$price_value	=	$_POST['price_value'];
				$raiting	=	$_POST['raiting'];
				$woocommerceproductid	=	$_POST['woocommerceproductid'];
				
				/*
			$value_youtubeurl	=	htmlspecialchars($result[0]['youtubeurl']);
			$value_vimmeourl	=	htmlspecialchars($result[0]['vimmeourl']);
			$value_oggfile		=	htmlspecialchars($result[0]['oggfile']);
			$value_webmfile		=	htmlspecialchars($result[0]['webmfile']);
			$value_mp4file		=	htmlspecialchars($result[0]['mp4file']);
				*/
				
				//	$sql_query	=	" UPDATE `".$wpdb->prefix."nihon_portgal_items` SET `title` = '".$titlename."', `image` = '".$imageid."', `url` = '".$urltarget."', `description` = '".$description."' WHERE `id` = '".$result[0]['id']."' ";
				//	$wpdb->query($sql_query);
				
				
				$wpdb->update( 
					$wpdb->prefix."nihon_portgal_items" ,  
					array(
						'title'	=>	$titlename , 
						'image'	=>	$imageid , 
						'url'	=>	$urltarget , 
						'description'	=>	$description , 
						'secondimage'	=>	$secondimageid,
						'youtubeurl'	=>	$youtubeurl , 
						'vimmeourl'	=>	$vimmeourl , 
						'oggfile'	=>	$oggfile , 
						'webmfile'	=>	$webmfile , 
						'mp4file'	=>	$mp4file ,
						'price_label'	=>	$price_label ,
						'price_value'	=>	$price_value ,
						'raiting'	=>	$raiting ,
						'darklayerbackgroundcolor'	=>	$darklayerbackgroundcolor ,
						'woocommerceproductid'		=>	$woocommerceproductid
					) , 
					array( 'id' => $result[0]['id'] )
				);
				
				
				$sql_query	=	" DELETE FROM `".$wpdb->prefix."nihon_portgal_categories_relations` WHERE `item_id` = '".$id."' ";
				$wpdb->query($sql_query);
				
				foreach($related_category as $rlc) {
					//	$rlc		=	PortgalFunctionsUtility('inputstr',$rlc);
					$sql_query	=	" INSERT INTO `".$wpdb->prefix."nihon_portgal_categories_relations` ( `item_id`, `category_id` ) VALUES ('".$id."', '".$rlc."');  ";
					$wpdb->query($sql_query);
				}
				
				$sqlquery	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `id` = '".$id."' "; 
				$result		=	$wpdb->get_results($sqlquery, ARRAY_A);
				
				$url		=	admin_url();
				
				$this->ClearAllCacheFor($result[0]['parentid']);
				
				$output		.=	$this->show_ok("Pleas wait .....");
				$output		.=	'
				<script type="text/javascript">
					document.location.href	=	"'.$url.'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=items&id='.$result[0]['parentid'].'";
				</script>
				'; 
				return	$output;
			}
			
			$sql		=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories_relations` WHERE `item_id` = '".$result[0]['id']."' ";
			$relcat		=	$wpdb->get_results($sql, ARRAY_A);
			$related	=	array();
			foreach($relcat as $item) {
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `id` = '".$item['category_id']."' ";
				$relname	=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($relname) and count($relname)) {
					array_push($related, $relname[0]['id']);
				}
			}
			
			$siteurl	=	get_option('siteurl').'/wp-content/plugins/nihon-portgal/'; 
			
			
			$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_categories` WHERE `parent_id` = '".$result[0]['parentid']."' ";
			$categories		=	$wpdb->get_results($sql_query, ARRAY_A);
			
			
			$value_urltarget	=	htmlspecialchars($result[0]['url']);
			$value_description	=	htmlspecialchars($result[0]['description']);
			$value_titlename	=	htmlspecialchars($result[0]['title']);
			
			
			$value_darklayerbackgroundcolor		=	htmlspecialchars($result[0]['darklayerbackgroundcolor']);
			$value_youtubeurl	=	htmlspecialchars($result[0]['youtubeurl']);
			$value_vimmeourl	=	htmlspecialchars($result[0]['vimmeourl']);
			$value_oggfile		=	htmlspecialchars($result[0]['oggfile']);
			$value_webmfile		=	htmlspecialchars($result[0]['webmfile']);
			$value_mp4file		=	htmlspecialchars($result[0]['mp4file']);
			
			$value_pricelabel	=	htmlspecialchars($result[0]['price_label']);
			$value_pricevalue	=	htmlspecialchars($result[0]['price_value']);
			$value_raiting		=	htmlspecialchars($result[0]['raiting']);
			
			$value_woocommerceproductid		=	htmlspecialchars($result[0]['woocommerceproductid']);
			
			
			$value_thumbnail	=	'';
			$value_imageid		=	$result[0]['image'];
			
			$sql_query	=	" SELECT * FROM `".$wpdb->prefix."postmeta` WHERE `post_id` = '".$result[0]['image']."' AND `meta_key` = '_wp_attachment_metadata' ";
			$img		=	$wpdb->get_results($sql_query, ARRAY_A);
			if(is_array($img) and count($img)) {
				$img	=	unserialize($img[0]['meta_value']);
				if(isset($img['sizes']['thumbnail']['file'])) {
					$pathm	=	$img['file'];
					$path	=	$img['sizes']['thumbnail']['file'];
					$rok	=	substr($pathm, 0, 4);
					$msc	=	substr($pathm, 5, 2);
					$value_thumbnail	=	home_url().'/wp-content/uploads/'.$rok.'/'.$msc.'/'.$path;
				} else {
					$value_thumbnail	=	home_url().'/wp-content/uploads/'.$img['file'];
				}
			} else {
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."postmeta` WHERE `post_id` = '".$result[0]['image']."' AND `meta_key` = '_wp_attached_file' LIMIT 1 ";
				$img		=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($img) and count($img)) {
					$value_thumbnail	=	home_url().'/wp-content/uploads/'.$img[0]['meta_value'];
				}
			}
			
			
			$value_secondthumbnail	=	'';
			$value_secondimageid	=	$result[0]['secondimage'];
			
			$sql_query	=	" SELECT * FROM `".$wpdb->prefix."postmeta` WHERE `post_id` = '".$result[0]['secondimage']."' AND `meta_key` = '_wp_attachment_metadata' ";
			$img		=	$wpdb->get_results($sql_query, ARRAY_A);
			if(is_array($img) and count($img)) {
				$img	=	unserialize($img[0]['meta_value']);
				if(isset($img['sizes']['thumbnail']['file'])) {
					$pathm	=	$img['file'];
					$path	=	$img['sizes']['thumbnail']['file'];
					$rok	=	substr($pathm, 0, 4);
					$msc	=	substr($pathm, 5, 2);
					$value_secondthumbnail	=	home_url().'/wp-content/uploads/'.$rok.'/'.$msc.'/'.$path;
				} else {
					$value_secondthumbnail	=	home_url().'/wp-content/uploads/'.$img['file'];
				} 
			} else {
				$sql_query	=	" SELECT * FROM `".$wpdb->prefix."postmeta` WHERE `post_id` = '".$result[0]['secondimage']."' AND `meta_key` = '_wp_attached_file' LIMIT 1 ";
				$img		=	$wpdb->get_results($sql_query, ARRAY_A);
				if(is_array($img) and count($img)) {
					$value_secondthumbnail	=	home_url().'/wp-content/uploads/'.$img[0]['meta_value'];
				}
			}
			
			$show_img_first		=	' display: none ';
			$show_img_second	=	' display: none ';
			
			if($value_thumbnail!='') {
				$show_img_first		=	'';
			}
			if($value_secondthumbnail!='') {
				$show_img_second	=	'';
			}
			
			if($value_woocommerceproductid=='0') {
				$value_woocommerceproductid	=	'';
			}
			
			$output	.=	'
				<div id="portgal_add_new_item" >
			<form enctype="multipart/form-data" method="post">
			<input type="hidden" name="saveitem" value="1">
			<ul class="portgal_form_list2">
				<li>
					<label for="titlename">Title/Name:</label>
					<input type="text" value="'.$value_titlename.'" name="titlename" id="titlename">
				</li>
				<li>
					<label for="description">Description:</label>
					<input type="text" value="'.$value_description.'" name="description" id="description">
				</li>
				<li>
					<label for="urltarget">Url target:</label>
					<input type="text" value="'.$value_urltarget.'" name="urltarget" id="urltarget">
				</li>
				<li>
					<label for="darklayerbackgroundcolor">"Dark layer" background color:</label>
					<input type="text" id="darklayerbackgroundcolor" style="width: 120px" name="darklayerbackgroundcolor" class="cpa-color-picker" value="'.htmlspecialchars($value_darklayerbackgroundcolor).'">
				</li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				<li>
					<div><label>Image:</label>
					<input type="hidden" value="preview_thumbnail" class="portgalwhereim">
					<input type="hidden" value="'.$value_thumbnail.'" name="thumbnailpreview" class="thumbnailpreview" id="thumbnailpreview">
					<input type="hidden" value="'.$value_imageid.'" class="media-input1 portgalimageid" name="imageid">
					<button class="media-button-select-image media-button1 button action">Select image</button>
					</div>
				</li>
				<li>
					<div><label>Second layer Image:</label>
					<input type="hidden" value="preview_thumbnail2" class="portgalwhereim">
					<input type="hidden" value="'.$value_secondthumbnail.'" name="thumbnailpreviewseconlayer" class="thumbnailpreview" id="thumbnailpreviewseconlayer">
					<input type="hidden" value="'.$value_secondimageid.'" class="media-input2 portgalimageid" name="secondimageid" id="secondimageid">
					<button class="media-button-select-image media-button2 button action">Select image</button>
					<input type="button" class="button" style="width: 75px" value="Clear" onClick="app_clear_secondimage();">
					</div>
				</li>
				<li><img style="'.$show_img_first.'" alt="Preview" id="preview_thumbnail" src="'.$value_thumbnail.'"></li>
				<li><img style="'.$show_img_second.'" alt="Preview" id="preview_thumbnail2" src="'.$value_secondthumbnail.'"></li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				
				<li>
					<label for="youtubeurl">Youtube url:</label>
					<input type="text" value="'.$value_youtubeurl.'" name="youtubeurl" id="youtubeurl">
				</li>
				<li>
					<label for="vimmeourl">Vimmeo url:</label>
					<input type="text" value="'.$value_vimmeourl.'" name="vimmeourl" id="vimmeourl">
				</li>
				
				<li>
					<label for="oggfile">Ogg url:</label>
					<input type="text" value="'.$value_oggfile.'" name="oggfile" id="oggfile">
				</li>
				<li>
					<label for="webmfile">Webm url:</label>
					<input type="text" value="'.$value_webmfile.'" name="webmfile" id="webmfile">
				</li>
				
				<li>
					<label for="mp4file">Mp4 url:</label>
					<input type="text" value="'.$value_mp4file.'" name="mp4file" id="mp4file">
				</li>
				<li></li>
				<li class="portgal_formlist_line"></li><li class="portgal_formlist_line"></li>
				
				<li>
					<label for="pricelabel">Price label:</label>
					<input type="text" value="'.$value_pricelabel.'" name="price_label" id="pricelabel">
				</li>
				<li>
					<label for="pricevalue">Price value (for order by):</label>
					<input type="text" value="'.$value_pricevalue.'" name="price_value" id="pricevalue">
				</li>
				<li>
					<label for="raiting">Raiting:</label>
					'.$this->build_select(nihon_portgal_functions_static::GetItemRaiting(), $value_raiting, "raiting", "raiting").'
				</li>
				<li>
					<label for="woocommerceproductid">Product ID:</label>
					<input type="text" value="'.$value_woocommerceproductid.'" name="woocommerceproductid" id="woocommerceproductid">
				</li>
			</ul>
			<div style="clear: both"></div>
			<table style="width: 100%">
			  <tbody><tr>
			    <td colspan="2">
				<br>
				<hr>
				<h4>Related categories: &nbsp;&nbsp;
				<img src="'.$siteurl.'list-add-small.png" alt="Add category" title="Add category" style="cursor: pointer" onClick="app_add_row_category();"> </h4>
			';
			$last_key	=	0; 
			$output		.=	'
			<table style="width: 100%" id="app_category_add">
			';
			foreach($related as $key => $item) {
				$output		.=	'<tr id="category_row_'.$key.'"><td>';
				
				$output		.=	$this->build_select($categories, $item, "category_".$key);
				$output		.=	'</td><td style="width: 100px"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right" style="cursor: pointer" onClick="app_remove_row_category('.$key.');"></td></tr>';
				$last_key	=	$key;
			}
			$output		.=	'
			</table>
			<input type="hidden" name="last_key" id="last_key" value="'.$last_key.'">
			      </td>
			    </tr>
			    <tr><td></td><td></td></tr>
			  </tbody></table>
			  <br>
			  <input type="submit" class="button action" value="Save">
			</form>
		  
		</div>
				
				
		<script type="text/javascript">
		function app_clear_secondimage() {
			jQuery("#thumbnailpreviewseconlayer").val("");
			jQuery("#secondimageid").val("");
			jQuery("#preview_thumbnail2").attr("src", "");
			jQuery("#preview_thumbnail2").hide();
		}
		
		jQuery(document).ready(function() {
			jQuery(".cpa-color-picker").wpColorPicker();
		});
		
		function app_add_newitem() {
			jQuery("#portgal_add_new_item").toggle();
		}
		
		function app_add_row_category() {
			key		=	parseInt(jQuery("#last_key").val());
			key++;
			add_rows	=	\'<tr id="category_row_\'+key+\'"><td>'.$this->build_select($categories, '',  "category_'+key+'").'</td><td style="width: 100px"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right" style="cursor: pointer" onClick="app_remove_row_category(\'+ key +\');"></td></tr>\';
			jQuery("#app_category_add").append(add_rows);
			jQuery("#last_key").val(key);
		}
		
		function app_remove_row_category(x) {
			jQuery("#category_row_" + x).remove();
		}
		
		</script>
				
			';
			
			
			
			/*
		$output		.=	'
		<div style="padding: 5px; margin: 10px 5px; border: 1px #D3D3D3 solid; background-color: #FAFAFA;">
		<form method="post" enctype="multipart/form-data">
		<input type="hidden" value="1" name="saveitem">
		<h3>Edit image</h3>
		<table style="width: 100%">
		  <tr>
		    <td style="width: 100px">Url target</td>
		    <td style="width: 500px"><input style="width: 100%" type="text" name="urltarget" value="'.$value_urltarget.'"></td>
		    <td style="width: 200px" rowspan="4" valign="top"><br><br><br><center><input type="submit" value="Save" class="button action"></center></td>
		    <td rowspan="4" valign="top"><img src="'.$value_thumbnail.'" id="preview_thumbnail" alt="Preview" style="display: block" > </td>
		  </tr>
		  <tr>
		    <td>Title/Name</td>
		    <td><input style="width: 100%" type="text" name="titlename" value="'.$value_titlename.'"></td>
		  </tr>
		  <tr>
		    <td>Description</td>
		    <td><input style="width: 100%" type="text" name="description" value="'.$value_description.'"></td>
		  </tr>
		  <tr>
		    <td>Image</td>
		    <td>
			  <input type="hidden" name="imageid" class="media-input" value="'.$value_imageid.'">
			  <button class="media-button button action">Select image</button>
		    </td>
		  </tr>
		  <tr>
		    <td colspan="2">

			<br>
			<hr>
			<h4>Related categories: &nbsp;&nbsp;
			<img src="'.$siteurl.'list-add-small.png" alt="Add category" title="Add category" style="cursor: pointer" onClick="app_add_row_category();"> </h4>
			';
			$last_key	=	0; 
			$output		.=	'
			<table style="width: 100%" id="app_category_add">
			';
			foreach($related as $key => $item) {
				$output		.=	'<tr id="category_row_'.$key.'"><td>';
				
				$output		.=	$this->build_select($categories, $item, "category_".$key);
				$output		.=	'</td><td style="width: 100px"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right" style="cursor: pointer" onClick="app_remove_row_category('.$key.');"></td></tr>';
				$last_key	=	$key;
			}
			$output		.=	'
			</table>
			<input type="hidden" name="last_key" id="last_key" value="'.$last_key.'">
			</td>
		      </tr>
		    </table>
		</form>
		</div>
		
	<script type="text/javascript">

	var portgal_media_init = function(selector, button_selector)  {
	    var clicked_button = false;
	    jQuery(selector).each(function (i, input) {
		var button = jQuery(input).next(button_selector);
		button.click(function (event) {
		    event.preventDefault();
		    var selected_img;
		    clicked_button = jQuery(this);
		    if(wp.media.frames.portgal_frame) {
			wp.media.frames.portgal_frame.open();
			return;
		    }
		    wp.media.frames.portgal_frame = wp.media({
			title: \'Select graphics\',
			multiple: false,
			library: {
			    type: \'image\'
			},
			button: {
			    text: \'Use this photo\'
			}
		    });
		    var portgal_media_set_image = function() {
			var selection = wp.media.frames.portgal_frame.state().get(\'selection\');
			
			if (!selection) {
			    return;
			}
			selection.each(function(attachment) { 
			    jQuery("#preview_thumbnail").attr("src", attachment.attributes.sizes.thumbnail.url);
			    var id = attachment.attributes.id;
			    clicked_button.prev(selector).val(id);
			});
		    };
		    wp.media.frames.portgal_frame.on(\'close\', portgal_media_set_image);
		    wp.media.frames.portgal_frame.on(\'select\', portgal_media_set_image);
		    wp.media.frames.portgal_frame.open();
		});
	  });
	};

	jQuery(document).ready(function() {
	  portgal_media_init(\'.media-input\', \'.media-button\');
	});

	</script>
		<script type="text/javascript">
			function app_add_row_category() {
				key		=	parseInt(jQuery("#last_key").val());
				key++;
				add_rows	=	\'<tr id="category_row_\'+key+\'"><td>'.$this->build_select($categories, '',  "category_'+key+'").'</td><td style="width: 100px"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right" style="cursor: pointer" onClick="app_remove_row_category(\'+ key +\');"></td></tr>\';
				jQuery("#app_category_add").append(add_rows);
				jQuery("#last_key").val(key);
			}
			function app_remove_row_category(x) {
				jQuery("#category_row_" + x).remove();
			}
		</script> ';
		  */
		} else {
			$output	.=	$this->show_error("Item not found");
		}
		return	$output;
	}
	
	public function setinwrap($html) {
		return	'<div style="clear: both;"></div><div class="portgal_formwrap">'.$html.'</div>';
	}
	
	public function edit() {
		global	$wpdb;
		$id	=	$_GET['id'];
		$sql	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` WHERE `id` = '".$id."' ";
		$dane	=	$wpdb->get_results($sql, ARRAY_A);
		if(is_array($dane) and count($dane)) {
			
			echo	$this->make_breadcumb($dane);
			
			$output	=	'';
			switch($_GET['actiontype']) {
				case 'dlanimation':
					$output	=	$this->make_dlanimation_edit($dane[0]);
				break;
				case 'navigation':
					$output	=	$this->make_navigation_edit($dane[0]);
				break;
				case 'categories':
					$output	=	$this->make_category_edit($dane[0]);
				break;
				case 'editimage':
					$output	=	$this->editimage($dane[0]);
				break;
				case 'items':
					$output	=	$this->make_items_edit($dane[0]);
				break;
				case 'advanced':
					$output	=	$this->make_advanced_edit($dane[0]);
				break;
				default:
				case 'mainoption':
					$output	=	$this->make_mainoption_edit($dane[0]);
				break;
			}
			
			echo	$this->setinwrap($output);
			
		} else {
			echo	$this->show_error("Item not found");
		}
	}
	
	public static function show_ok($str) {
		return	'<div class="portgal_message portgal_message_ok">'.$str.'</div>';
	}
	
	public static function show_error($str) {
		return	'<div class="portgal_message portgal_message_error">'.$str.'</div>';
	}
	
}



include("nihonportgalmainlisttable.class.php");
include("nihonportgalitemlisttable.class.php");

$obj	=	new nihon_portgal_functions();

global	$wpdb;

switch($_GET['action']) {
	case 'add':
		
	break;
	case 'editimage':
		
	break;
	case 'edit':
		$obj->edit();
	break;
	case 'editcategories':
		
	break;
	case 'delete':
		
		$id	=	nihon_portgal_functions::local_mysql_real_escape_string($_GET['id']);
		if($id!='') {
			$tar	=	array(
				$wpdb->prefix.'nihon_portgal'		=>	'id' ,
				$wpdb->prefix.'nihon_portgal_cache'	=>	'parentid' ,
				$wpdb->prefix.'nihon_portgal_categories' =>	'parent_id' ,
				$wpdb->prefix.'nihon_portgal_items' 	=>	'parentid'
			);
			$sql_query	=	" SELECT `id` FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `parentid` = '".$id."' ";
			$items		=	$wpdb->get_results($sql_query, ARRAY_A);
			$arids		=	array();
			foreach($items as $item) {
				array_push($arids, $item[0]);
			}
			if(is_array($arids) and count($arids)) {
				$sql_query	=	" DELETE FROM `".$wpdb->prefix."nihon_portgal_categories_relations` WHERE `item_id` IN (".implode(" , ", $arids).") ";
				$wpdb->query($sql_query);
			}
			
			foreach($tar as $table => $key) {
				$sql_query	=	" DELETE FROM `".$table."` WHERE `".$key."` = '".$id."' ";
				$wpdb->query($sql_query);
			}
		}
		
		echo	nihon_portgal_functions::show_ok("Pleas wait .....");
		echo	'
		<script type="text/javascript">
			document.location.href	=	"'.$url.'admin.php?page=nihon_portgal_manage_handle";
		</script>
		'; 
		exit;
	break;
	default:
		$obj->mainlist();
	break;
}

?>
<?php

class NihonPortgal_Items_List_Table extends WP_List_Table2 {
	public	$found_data;
	public	$parent_id;
	
	function __construct($parentid){
		$this->parent_id	=	$parentid;
		global $status, $page;
		parent::__construct( array(
			'singular'	=> __( 'book', 'mylisttable' ),
			'plural'	=> __( 'books', 'mylisttable' ),
			'ajax'		=> false
		
		) );
	}
	
	function no_items() {
		
		_e( 'Not found' );
	}
	
	function column_default( $item, $column_name ) {
		
		switch( $column_name ) {
		case 'title':
			return htmlspecialchars($item[ $column_name ]);
		break;
		case 'items':
			return $item[ $column_name ];
		case 'options':
		
		$siteurl	=	get_option('siteurl').'/wp-content/plugins/nihon-portgal/';
		
		return	'
		<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=items&id='.$item['parentid'].'&itemdown='.$item['id'].'&from='.$item['lp'].'" title="Down"><img src="'.$siteurl.'arrow-down.png" alt="Down"></a> 
		&nbsp; 
		<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=items&id='.$item['parentid'].'&itemup='.$item['id'].'&from='.$item['lp'].'" title="Up"><img src="'.$siteurl.'arrow-up.png" alt="Up"></a> 
		&nbsp; &nbsp; &nbsp; 
		&nbsp; &nbsp; &nbsp; 
		<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=editimage&id='.$item['parentid'].'&itemid='.$item['id'].'" title="Edit"><img src="'.$siteurl.'document-edit.png" alt="Edit"></a> 
		&nbsp; &nbsp; &nbsp; 
		<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=items&id='.$item['parentid'].'&itemdel='.$item['id'].'" title="Delete"><img src="'.$siteurl.'trash-empty.png"s alt="Delete" align="right"></a>
		';
		
		break;
		default:
			return print_r( $item, true ) ;
		}
	}
	
	function get_sortable_columns() {
		$sortable_columns = array(
		  'title'	=> array('title',false),
		  'items'	=> array('items',false)
		);
		return $sortable_columns;
	}
	
	function get_columns(){
		$columns = array(
			'cb'		=> '<input type="checkbox" />',
			'title'		=> __( 'Title/Name', 'mylisttable' ),
			
			'options'	=> __( 'Options', 'mylisttable' )
		);
		return $columns;
	}
	
	function usort_reorder( $a, $b ) {
		
		$orderby	= ( ! empty( $_GET['orderby'] ) ) ? $_GET['orderby'] : 'booktitle';
		
		$order		= ( ! empty($_GET['order'] ) ) ? $_GET['order'] : 'asc';
		
		$result		= strcmp( $a[$orderby], $b[$orderby] );
		
		return ( $order === 'asc' ) ? $result : -$result;
	}
	
	function column_name($item){
		
		$actions	=	array(
			'edit'		=> sprintf('<a href="?page=%s&action=%s&id=%s">Edit</a>',$_REQUEST['page'],'edit',$item['id']),
			'delete'	=> sprintf('<a href="?page=%s&action=%s&id=%s">Delete</a>',$_REQUEST['page'],'delete',$item['id']),
		);
		
		return	sprintf('%1$s %2$s', $item['title'], $this->row_actions($actions) );
		
	}
	
	function get_bulk_actions() {
		$actions = array(
		// 'delete' => 'Delete'
		);
		return $actions;
	}
	
	function column_cb($item) {
		return sprintf(
		'<input type="checkbox" name="item[]" value="%s" />', $item['id']
		);
	}
	
	function prepare_items() {
		$columns = $this->get_columns();
		$hidden = array();
		$sortable = $this->get_sortable_columns();
		$this->_column_headers = array( $columns, $hidden, $sortable );
		
		$per_page	= 99999999999;
		$current_page	= $this->get_pagenum();
		$total_items	=	$this->GetItemsCount();
		
		$this->found_data = $this->GetRows($current_page, $per_page);
		
		$this->set_pagination_args( array(
		'total_items' => $total_items, 
		'per_page' => $per_page 
		) );
		$this->items = $this->found_data;
		
	}
	
	public function GetItemsCount() {
		global			$wpdb;
		$sql_query	=	" SELECT COUNT(`id`) as `ilosc` FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `parentid` = '".$this->parent_id."' ";
		$results	=	$wpdb->get_results($sql_query);
		$count		=	0;
		if(is_array($results) and count($results)) {
			$count	=	$results[0]->ilosc;
		}
		
		return	$count;
	}
	
	public function GetRows($currentpage, $perpage) {
		$begin		=	($currentpage - 1) * $perpage;
		global			$wpdb;
		
		$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal_items` WHERE `parentid` = '".$this->parent_id."'  ORDER BY `lp` ASC ";
		$results	=	$wpdb->get_results($sql_query, ARRAY_A);
		return			$results;
	}
	
	public function GetStyle() {
		return	'
		<style type="text/css">
		.column-options {
			width: 200px;
		}
		</style>';
	}
	
}
      
?>
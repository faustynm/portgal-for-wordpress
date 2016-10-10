<?php

class NihonPortgal_Main_List_Table extends WP_List_Table2 {
		public	$found_data;
		public	$PortgalFunctionGetAvailableSourceData;
		
		function __construct(){
			
			global $status, $page;
			
			parent::__construct( array(
				'singular'	=> __( 'book', 'mylisttable' ),
				'plural'	=> __( 'books', 'mylisttable' ),
				'ajax'		=> false
			
			) );
			
			$this->PortgalFunctionGetAvailableSourceData	=	array();
			
		}
		
		public function SetAvailableSourceData($v) {
			$this->PortgalFunctionGetAvailableSourceData	=	$v;
		}
		
		function no_items() {
		
			_e( 'Not found' );
		}
		
		function column_default( $item, $column_name ) {
			switch( $column_name ) {
			case 'name':
				return $item[ $column_name ];
			break;
			case 'items':
				if($item['sourcedata']=='0') {
					return $item[ $column_name ];
				} else {
					return 'NA';
				}
			break;
			case 'options':
			
			//	admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=categories&id=1
			
			$siteurl	=	get_option('siteurl').'/wp-content/plugins/nihon-portgal/';
			return	'
			<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=mainoption&id='.$item['id'].'" title="Edit"><img src="'.$siteurl.'document-edit.png" alt="Edit"></a> 
			&nbsp; &nbsp; &nbsp; 
			<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=edit&actiontype=categories&id='.$item['id'].'" title="Categories"><img src="'.$siteurl.'format-justify-fill.png" alt="Edit"></a> 
			&nbsp; &nbsp; &nbsp; 
			<a href="'.site_url().'/?portgalpreview=portgal-preview&portgalpreviewid='.$item['id'].'" title="Preview"><img src="'.$siteurl.'view-preview.png" alt="Edit"></a> 
			&nbsp; &nbsp; &nbsp; 
			<a href="'.admin_url().'admin.php?page=nihon_portgal_manage_handle&action=delete&id='.$item['id'].'" title="Delete"><img src="'.$siteurl.'trash-empty.png" alt="Delete" align="right"></a>
			';
			break;
			case 'source':
				$n	=	'Unknown';
				$types	=	$this->PortgalFunctionGetAvailableSourceData;
				foreach($types as $type) {
					if($type['id']==$item['sourcedata']) {
						return	$type['name'];
					}
				}
				return	'unknown';
			break;
			default:
				return	print_r( $item, true ) ;
			}
		}
		
		function get_sortable_columns() {
			$sortable_columns = array(
			
			);
			return $sortable_columns;
		}
		
		function get_columns(){
			$columns = array(
				'cb'		=> '<input type="checkbox" />',
				'name'		=> __( 'Name', 'mylisttable' ),
				'source'	=> __( 'Source', 'mylisttable' ),
				'items'		=> __( 'Items', 'mylisttable' ),
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
				'edit' => sprintf('<a href="?page=%s&action=%s&id=%s">Edit</a>',$_REQUEST['page'],'edit',$item['id']),
				'delete' => sprintf('<a href="?page=%s&action=%s&id=%s">Delete</a>',$_REQUEST['page'],'delete',$item['id']),
			);
			
			return	sprintf('%1$s %2$s', $item['name'], $this->row_actions($actions) );
			
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
			
			$per_page	= 10;
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
			$sql_query	=	" SELECT COUNT(`id`) as `ilosc` FROM `".$wpdb->prefix."nihon_portgal` ";
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
			$sql_query	=	" SELECT * FROM `".$wpdb->prefix."nihon_portgal` ORDER BY `id` DESC  LIMIT ".$begin." , ".$perpage;
			$results	=	$wpdb->get_results($sql_query, ARRAY_A);
			return			$results;
		}
		
		public function GetStyle() {
			return	'
<style type="text/css">

.column-source {
	width: 150px;
}

.column-items {
	width: 100px;
}

.column-options {
	width: 200px;
}

</style>
			';
		}
	}
	
?>
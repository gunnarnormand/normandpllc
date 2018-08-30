<?php
function run_scripts() {
    wp_enqueue_style('Material-Icons', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    wp_enqueue_style( 'Montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:200,300' );
    wp_enqueue_style('Karla', 'https://fonts.googleapis.com/css?family=Karla:400,300italic');
    wp_enqueue_style('Tinos', 'https://fonts.googleapis.com/css?family=Tinos:400,400i');
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_script( 'jquery-cdn', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/assets/js/jquery-3.2.1.min.js', array (), 1.1, true);
    wp_enqueue_script( 'materialize.js', get_template_directory_uri() . '/assets/js/materializejs/bin/materialize.js', array (), 1.1, true);
    wp_enqueue_script( 'leanModal', get_template_directory_uri() . '/assets/js/jquery.leanModal.min.js', array (), 1.1, true);
    wp_enqueue_script( 'waypoints', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'tweenMax', get_template_directory_uri() . '/assets/js/gsap-min/TweenMax.min.js', array (), 1.1, true);
    wp_enqueue_script( 'morphSVG', get_template_directory_uri() . '/assets/js/gsap-min/plugins/MorphSVGPlugin.min.js', array (), 1.1, true);
    wp_enqueue_script( 'splitText', get_template_directory_uri() . '/assets/js/gsap-min/utils/SplitText.min.js', array (), 1.1, true);
    wp_enqueue_script( 'scrollTo', get_template_directory_uri() . '/assets/js/gsap-min/plugins/ScrollToPlugin.min.js', array (), 1.1, true);
    wp_enqueue_script( 'googlemapsapi', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqGil8SobbfqNrK098GTFf0lfzZUMX6nc', array(), '1.0.0', true );
    wp_enqueue_script( 'googlechartsapi', 'https://www.gstatic.com/charts/loader.js', array(), '1.0.0', true );
    wp_enqueue_script( 'googleMap.js', get_template_directory_uri() . '/assets/js/googleMap.js', array (), 1.1, true);
    wp_enqueue_script( 'main.js', get_template_directory_uri() . '/assets/js/main.js', array (), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'run_scripts' );
add_theme_support('menus');


add_action( 'after_setup_theme', 'blankslate_setup' );
  function blankslate_setup()
{
load_theme_textdomain( 'blankslate', get_template_directory() . '/languages' );
add_theme_support( 'title-tag' );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'post-thumbnails' );
global $content_width;
if ( ! isset( $content_width ) ) $content_width = 640;
  register_nav_menus(
    array( 'main-menu' => __( 'Main Menu', 'blankslate' ) )
  );
}
add_action( 'comment_form_before', 'blankslate_enqueue_comment_reply_script' );
  function blankslate_enqueue_comment_reply_script()
{
if ( get_option( 'thread_comments' ) ) { wp_enqueue_script( 'comment-reply' ); }
}
add_filter( 'the_title', 'blankslate_title' );
function blankslate_title( $title ) {
  if ( $title == '' ) {
    return '&rarr;';
  } else {
  return $title;
  }
}
add_filter( 'wp_title', 'blankslate_filter_wp_title' );
function blankslate_filter_wp_title( $title ) {
  return $title . esc_attr( get_bloginfo( 'name' ) );
}
add_action( 'widgets_init', 'blankslate_widgets_init' );
  function blankslate_widgets_init() {
    register_sidebar( array (
      'name' => __( 'Sidebar Widget Area', 'blankslate' ),
      'id' => 'primary-widget-area',
      'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
      'after_widget' => "</li>",
      'before_title' => '<h3 class="widget-title">',
      'after_title' => '</h3>',
      ) );
}
function blankslate_custom_pings( $comment ) {
  $GLOBALS['comment'] = $comment;
  ?>
    <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo comment_author_link(); ?></li>
  <?php
}
add_filter( 'get_comments_number', 'blankslate_comments_number' );
function blankslate_comments_number( $count ) {
  if ( !is_admin() ) {
    global $id;
    $comments_by_type = &separate_comments( get_comments( 'status=approve&post_id=' . $id ) );
      return count( $comments_by_type['comment'] );
    } else {
      return $count;
    }
}


if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Header Settings',
        'menu_title'    => 'Header',
        'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Footer Settings',
        'menu_title'    => 'Footer',
        'parent_slug'   => 'theme-general-settings',
    ));
}

// Register Practice Areas Post Type
function create_practice_area_post_type() {
    $labels = array(
        'name'                  => _x( 'Practice Areas', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Practice Area', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Practice Areas', 'text_domain' ),
        'name_admin_bar'        => __( 'Post Type', 'text_domain' ),
        'archives'              => __( 'Item Archives', 'text_domain' ),
        'attributes'            => __( 'Item Attributes', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
        'all_items'             => __( 'All Items', 'text_domain' ),
        'add_new_item'          => __( 'Add New Item', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Item', 'text_domain' ),
        'edit_item'             => __( 'Edit Item', 'text_domain' ),
        'update_item'           => __( 'Update Item', 'text_domain' ),
        'view_item'             => __( 'View Item', 'text_domain' ),
        'view_items'            => __( 'View Items', 'text_domain' ),
        'search_items'          => __( 'Search Item', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
        'items_list'            => __( 'Items list', 'text_domain' ),
        'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'Practice Area', 'text_domain' ),
        'description'           => __( 'Areas of Practice', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-welcome-write-blog',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'practice_areas', $args );
}
add_action( 'init', 'create_practice_area_post_type', 0 );


// Register Our Team Post Type
function create_team_post_type() {
    $labels = array(
        'name'                  => _x( 'Team', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Team', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Our Team', 'text_domain' ),
        'name_admin_bar'        => __( 'Post Type', 'text_domain' ),
        'archives'              => __( 'Item Archives', 'text_domain' ),
        'attributes'            => __( 'Item Attributes', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
        'all_items'             => __( 'All Items', 'text_domain' ),
        'add_new_item'          => __( 'Add New Item', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Item', 'text_domain' ),
        'edit_item'             => __( 'Edit Item', 'text_domain' ),
        'update_item'           => __( 'Update Item', 'text_domain' ),
        'view_item'             => __( 'View Item', 'text_domain' ),
        'view_items'            => __( 'View Items', 'text_domain' ),
        'search_items'          => __( 'Search Item', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
        'items_list'            => __( 'Items list', 'text_domain' ),
        'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'Our Team', 'text_domain' ),
        'description'           => __( 'Our Team', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-groups',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'team', $args );
}
add_action( 'init', 'create_team_post_type', 0 );

// Register Testimonials Post Type
function create_testimonials_post_type() {
    $labels = array(
        'name'                  => _x( 'Testimonials', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Testimonial', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Testimonials', 'text_domain' ),
        'name_admin_bar'        => __( 'Post Type', 'text_domain' ),
        'archives'              => __( 'Item Archives', 'text_domain' ),
        'attributes'            => __( 'Item Attributes', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
        'all_items'             => __( 'All Items', 'text_domain' ),
        'add_new_item'          => __( 'Add New Item', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Item', 'text_domain' ),
        'edit_item'             => __( 'Edit Item', 'text_domain' ),
        'update_item'           => __( 'Update Item', 'text_domain' ),
        'view_item'             => __( 'View Item', 'text_domain' ),
        'view_items'            => __( 'View Items', 'text_domain' ),
        'search_items'          => __( 'Search Item', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
        'items_list'            => __( 'Items list', 'text_domain' ),
        'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'Testimonials', 'text_domain' ),
        'description'           => __( 'Testimonials', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-admin-comments',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'testimonials', $args );
}
add_action( 'init', 'create_testimonials_post_type', 0 );

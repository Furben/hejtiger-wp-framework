<?php

/* ==========================================================================
   Remove adminbar
   ========================================================================== */

add_filter( 'show_admin_bar', '__return_false' );


/* ==========================================================================
   Link til stylesheet
   ========================================================================== */


function hejtiger_theme_styles() {

	wp_enqueue_style('style.css',  get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'hejtiger_theme_styles' );


/* ==========================================================================
   Link to javascript
   ========================================================================== */

function hejtiger_theme_js() {

	wp_enqueue_script( 'modernizr_js' , get_template_directory_uri() . '/dist/js/modernizr.js' , '', '', false  );
	wp_enqueue_script( 'hejtiger_js' , get_template_directory_uri() . '/dist/js/hejtiger.js' , array('jquery'), '', true  );
	wp_enqueue_script( 'main_js' , get_template_directory_uri() . '/dist/js/main.js' , array('jquery'), '', true  );
	
}

add_action( 'wp_enqueue_scripts', 'hejtiger_theme_js' );


/* ==========================================================================
   custom Fonts
   ========================================================================== */

    function hejtiger_custom_fonts() {

            
            
            wp_enqueue_style( 'googleFonts' , 'http://fonts.googleapis.com/css?family=Muli:300,400|Nunito');

            wp_enqueue_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', null, '4.7.0' );
        }
    
    add_action('wp_enqueue_scripts', 'hejtiger_custom_fonts');

/* ==========================================================================
  theme default support
   ========================================================================== */

if ( ! function_exists( 'hejtiger_setup' ) ) {
	function hejtiger_setup() {

		/* post thumbnail support */
		add_theme_support( 'post-thumbnails' );

		/* Menuer */
		register_nav_menus(
   				array(
   					'main-menu' => __( 'Main Menu' )
   					)
   				);

	}
}

add_action ( 'after_setup_theme', 'hejtiger_setup' );


?>
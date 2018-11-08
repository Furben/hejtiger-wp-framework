<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php wp_title(); ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
        <?php wp_head(); ?>
    </head>
    <body>
        <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- Add your site or application content here -->
        <header>
            <div class="container">
                <h1><?php bloginfo('name'); ?></h1>
                <nav>
                    <?php
                    wp_nav_menu (
                    array(
                    'theme_location'  => 'main-menu',
                    'menu_class'      => 'hovedmenu',
                    'container'       => 'false'
                    )
                    );
                    ?>
                </nav>
            </div><!--container-->
        </header>